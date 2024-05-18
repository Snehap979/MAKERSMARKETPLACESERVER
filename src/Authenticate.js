const AWS = require('aws-sdk');
const { CognitoIdentityServiceProvider } = AWS;

// Configure AWS SDK
AWS.config.update({ region: 'us-west-1' });

const cognito = new CognitoIdentityServiceProvider();

// Signup function
const signUp=async(username, password, email) =>{
  const params = {
    ClientId: '12o0nfiv0epben0n2goo3c8k27',
    Username: username,
    Password: password,
    UserAttributes:[
        {'Name': 'email', 'Value':email},
        {'Name': 'phone_number', 'Value': username}
    ]
    
  };
  try {
    const data = await cognito.signUp(params).promise();
    return data;
  } catch (err) {
    console.error('Signup failed:', err);
    throw err;
  }
}

// Signin function
const signIn=async(username, password)=>{
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: '12o0nfiv0epben0n2goo3c8k27',
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password
    }
  };

  try {
    const data = await cognito.initiateAuth(params).promise();
    console.log('Signin successful:', data);
    return data;
  } catch (err) {
    console.error('Signin failed:', err);
    throw err;
  }
}


module.exports.signIn=signIn
module.exports.signUp=signUp



 


