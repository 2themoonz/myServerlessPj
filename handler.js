"use strict";
const Res = require("./lamdas/API_Responses");
const { getUser } = require("./lamdas/getUser");

const hello = async (event) => {
  return Res._200({ message: "Hello World" });
};

module.exports = {
  hello,
  getUser,
};
