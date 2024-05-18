const AWS = require('aws-sdk');
const fs = require('fs');



AWS.config.credentials = credentials;


AWS.config.update({ region: 'us-west-1' });


const s3 = new AWS.S3();

const uploadPictureToS3 = (bucketName, fileName, filePath) => {
  // Read the file from the file path
  const fileContent = fs.readFileSync(filePath);

  // Configure the parameters for the upload
  const params = {
    Bucket: 'makersmarketplace',
    Key: 'file',
    Body: fileContent,
    ContentType: 'image/jpeg' // Adjust content type based on your file type
  };

  // Upload the picture to the specified S3 bucket
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading picture:', err);
    } else {
      console.log('Picture uploaded successfully:', data.Location);
    }
  });
};



uploadPictureToS3(bucketName, fileName, filePath);






// Usage example
const bucketName = 'YOUR_S3_BUCKET_NAME';
const fileName = 'example.jpg'; // The name you want to give to the file in the bucket
const filePath = 'path/to/your/picture.jpg'; // Path to the picture file on your local system
