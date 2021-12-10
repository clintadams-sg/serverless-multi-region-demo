'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: `Hello from ${process.env.AWS_REGION}`
  };
};
