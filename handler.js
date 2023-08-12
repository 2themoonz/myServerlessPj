"use strict";
const Res = require("./lamdas/API_Responses");

module.exports.hello = async (event) => {
  return Res._200({ message: "Hello World" });
};
