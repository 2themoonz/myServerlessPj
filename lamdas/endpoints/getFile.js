const Responses = require("../commons/API_Responses");
const S3 = require("../commons/S3");

const bucket = process.env.bucketName;

const getFile = async (event) => {
  if (!event.pathParameters || !event.pathParameters.fileName) {
    // failed without an fileName
    return Responses._400({ message: "missing the fileName from the path" });
  }

  let fileName = event.pathParameters.fileName;

  const file = await S3.get(fileName, bucket).catch((err) => {
    console.log("error in S3 get", err);
    return null;
  });

  if (!file) {
    return Responses._400({ message: "Failed to read data by filename" });
  }

  return Responses._200({ file });
};

module.exports = { getFile };
