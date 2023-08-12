"use strict";
const Res = require("./lamdas/commons/API_Responses");
const { getPlayerScore } = require("./lamdas/endpoints/getPlayerScore");
const { postPlayerScore } = require("./lamdas/endpoints/postPlayerScore");

const hello = async (event) => {
  return Res._200({ message: "Hello World" });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};

const getUser = async (event) => {
  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Res._400({ message: "missing the ID from the path" });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    // return the data
    return Res._200(data[ID]);
  }

  // failed as ID not in the data
  return Res._400({ message: "no ID in data" });
};

module.exports = {
  hello,
  getUser,
  getPlayerScore,
  postPlayerScore,
};
