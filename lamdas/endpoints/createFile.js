const Responses = require("../commons/API_Responses");
const S3 = require("../commons/S3");

const bucket = process.env.bucketName;

const createFile = async (event) => {
  const data = JSON.parse(event.body);

  if (!data?.fileName) {
    return Responses._400({ message: "missing the fileName from the body" });
  }

  const newData = await S3.write(data, data.fileName, bucket).catch((err) => {
    console.log("error in S3 write", err);
    return null;
  });

  if (!newData) {
    return Responses._400({ message: "Failed to write data by fileName" });
  }

  return Responses._200({ newData });
};

module.exports = { createFile };
