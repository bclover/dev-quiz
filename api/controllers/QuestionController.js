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
  },

  post: (params) => {
    return new Promise((resolve, reject) => {
      Question.create(params)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(new Error('Unable to create a new record:  ' + err));
        })

    })
  },

  put: (id, params) => {
    return new Promise((resolve, reject) => {
      Question.findByIdAndUpdate(id, params, {new:true})
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(new Error('Unable to update question: ' + id));
        })
    })
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      Question.findByIdAndRemove(id)
        .then(() => {
          resolve({id: id});
        })
        .catch(err => {
          reject(new Error('Unable to delete question: ' + id));
        })
    })
  }

};
