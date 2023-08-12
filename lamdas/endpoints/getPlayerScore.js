const Responses = require("../commons/API_Responses");
const Dynamo = require("../commons/Dynamo");

const tableName = process.env.tableName;

const getPlayerScore = async (event) => {
  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  const user = await Dynamo.get(ID, tableName).catch((err) => {
    return null;
  });

  if (!user) {
    return Responses._400({ message: "Failed to get user by ID" });
  }

  return Responses._200({ user });
};

module.exports = { getPlayerScore };
