// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID });
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const controllers = require('../controllers');

router.get('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[resource];
  const filters = req.query;

  // handle invalid api requests
  if(controller === null) {
    res.json({
      status: 'error',
      message: 'Invalid request. "'+ resource +'" is not a valid endpoint.',
    });
    return;
  }

  // get all question data
  controller.get(filters)
    .then(data => {
      res.json({
        status: 'success',
        data: data,
      });
    })
    .catch(err => {
      res.json({
        status: 'error',
        message: err.message,
      })
    })
});

router.get('/:resource/:questionId', (req, res) => {
  const resource = req.params.resource;
  const questionId = req.params.questionId;

  const controller = controllers[resource];
  if(controller === null) {
    res.json({
      status: 'error',
      message: 'Invalid request. "'+ resource +'" is not a valid endpoint.',
    });
    return;
  }

  controller.getByQuestionId(questionId)
    .then(data => {
      res.json({
        status: 'success',
        data: data,
      });
    })
    .catch(err => {
      res.json({
        status: 'error',
        message: err.message,
      })
    })
});

module.exports = router;
