const Question = require('../models/Question');

module.exports = {

  get: (params) => {
    return new Promise((resolve, reject) => {

      Question.find(params)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        })

    })
  },

  getByQuestionId: (questionId) => {
    return new Promise((resolve, reject) => {

      Question.find({id: questionId})
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(new Error('Unable to find the question with an id of: ' + questionId));
        })

    })
  }

};
