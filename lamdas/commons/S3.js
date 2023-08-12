const AWS = require("aws-sdk");

const s3Client = new AWS.S3();

const S3 = {
  async get(fileName, bucket) {
    const param = {
      Bucket: bucket,
      Key: fileName,
    };

    let data = await s3Client.getObject(param).promise();

    if (!data) {
      throw Error(`Error getting file ${fileName} from bucket ${bucket}`);
    }

    if (fileName.slice(fileName.length - 4, fileName.length) == "json") {
      data = data.Body.toString();
    }

    return data;
  },

  async write(data, fileName, bucket) {
    const params = {
      Bucket: bucket,
      Body: JSON.stringify(data),
      Key: fileName,
    };

    const newData = await s3Client.putObject(params).promise();

    if (!newData) {
      throw Error(`Error writing file ${fileName} to bucket ${bucket}`);
    }

    return newData;
  },
};

module.exports = S3;
