const Responses = require("../commons/API_Responses");
const AWS = require("aws-sdk");

const SES = new AWS.SES();

const sendEmail = async (event) => {
  const { to, from, subject, text } = JSON.parse(event.body);

  if (!to || !from || !subject || !text) {
    return Responses._400({ message: "Missing fields" });
  }

  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Data: text },
      },
      Subject: { Data: subject },
    },
    Source: from,
    ReplyToAddresses: [from],
  };

  try {
    await SES.sendEmail(params).promise();
    return Responses._200({ message: "Email sent" });
  } catch (error) {
    console.log(error);
    return Responses._400({ message: "Email failed to send" });
  }
};

module.exports = { sendEmail };
