const { REGION, ACCOUNT_ID, API_ID } = process.env

module.exports.handler = async event => {
  return {
    principalId: "test",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Allow",
          Resource: `arn:aws:execute-api:${REGION}:${ACCOUNT_ID}:${API_ID}/*`
        }
      ]
    }
  }
};
