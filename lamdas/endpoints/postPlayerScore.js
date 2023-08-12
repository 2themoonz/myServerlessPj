const Responses = require("../commons/API_Responses");
const Dynamo = require("../commons/Dynamo");

const tableName = process.env.tableName;

const postPlayerScore = async (event) => {
  const user =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);

  const newUser = await Dynamo.write(user, tableName).catch((err) => {
    console.log("error in dynamo write", err);
    return null;
  });

  if (!newUser) {
    return Responses._400({ message: "Failed to write user by ID" });
  }

  return Responses._200({ newUser });
};

module.exports = {
  postPlayerScore,
};
