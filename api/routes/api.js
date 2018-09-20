// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID });
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const controllers = require('../controllers');

// GET
router.get('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[ resource ];
  const filters = req.query;

  // handle invalid api requests
  if (controller === null) {
    res.json({
      status : 'error',
      message: 'Invalid request. "'+resource+'" is not a valid endpoint.',
    });
    return;
  }

  // get all question data
  controller.get(filters)
    .then(data => {
      res.json({
        status: 'success',
        data  : data,
      });
    })
    .catch(err => {
      res.json({
        status : 'error',
        message: err.message,
      });
    });
});

router.get('/:resource/:questionId', (req, res) => {
  const resource = req.params.resource;
  const questionId = req.params.questionId;

  const controller = controllers[ resource ];
  if (controller === null) {
    res.json({
      status : 'error',
      message: 'Invalid request. "'+resource+'" is not a valid endpoint.',
    });
    return;
  }

  controller.getByQuestionId(questionId)
    .then(data => {
      res.json({
        status: 'success',
        data  : data,
      });
    })
    .catch(err => {
      res.json({
        status : 'error',
        message: err.message,
      });
    });
});

// POST - create new entities
router.post('/:resource', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[ resource ];

  // handle invalid api requests
  if (controller === null) {
    res.json({
      status : 'error',
      message: 'Invalid POST. "'+resource+'" is not a valid endpoint.',
    });
    return;
  }

  // get all question data
  controller.post(req.body)
    .then(data => {
      res.json({
        status: 'success',
        data  : data,
      });
    })
    .catch(err => {
      res.json({
        status : 'error',
        message: err.message,
      });
    });
});

// PUT - update
router.put('/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[ resource ];

  // handle invalid api requests
  if (controller === null) {
    res.json({
      status : 'error',
      message: 'Invalid PUT. Unable to update the question. _id: '+id,
    });
    return;
  }

  // update a question using its _id from mongodb
  controller.put(req.params.id, req.body)
    .then(data => {
      res.json({
        status: 'success',
        data  : data,
      });
    })
    .catch(err => {
      res.json({
        status : 'error',
        message: err.message,
      });
    });
});

// DELETE a question
router.delete('/:resource/:id', (req, res) => {
  const resource = req.params.resource;
  const controller = controllers[ resource ];

  // handle invalid api requests
  if (controller === null) {
    res.json({
      status : 'error',
      message: 'Invalid DELETE. Unable to delete the question. _id: '+id,
    });
    return;
  }

  // delete a question using its _id from mongodb
  controller.delete(req.params.id)
    .then(data => {
      res.json({
        status: 'success',
        data  : data,
      });
    })
    .catch(err => {
      res.json({
        status : 'error',
        message: err.message,
      });
    });

});

module.exports = router;
