const Responses = require("../commons/API_Responses");

const proxy = async (event) => {
  return Responses._200();
};

module.exports = {
  proxy,
};
