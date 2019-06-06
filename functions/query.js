const request = require('request');
const query = `
{
  questions: getQuestionList {
    questions: items {
      text
      position
      id: _id
      choices {
        id: _id
        text
        position
      }
      correctChoice {
        id: _id
      }
    }
  }
}
`;

const PROJECT_ID = process.env.TS_PROJECT_ID;
const API_KEY = process.env.TS_AUTH_TOKEN;

exports.handler = function (event, context, callback) {
  request.post(`https://api.takeshape.io/project/${PROJECT_ID}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({query})
  }, (err, response) => {
    if (!err) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.body),
      });
    }
  })
}