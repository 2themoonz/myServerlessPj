"use strict";
const Res = require("./lamdas/commons/API_Responses");
const { getPlayerScore } = require("./lamdas/endpoints/getPlayerScore");
const { postPlayerScore } = require("./lamdas/endpoints/postPlayerScore");
const { createFile } = require("./lamdas/endpoints/createFile");
const { getFile } = require("./lamdas/endpoints/getFile");
const { proxy } = require("./lamdas/endpoints/proxy");
const { sendEmail } = require("./lamdas/endpoints/sendEmail");

const hello = async (event) => {
  return Res._200({ message: "Hello World" });
};

module.exports = {
  hello,
  getPlayerScore,
  postPlayerScore,
  createFile,
  getFile,
  proxy,
  sendEmail,
};
