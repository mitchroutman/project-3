const router = require('express').Router();
const { getAllProjects } = require('../../controllers/project-controller');

router.route('/').get(getAllProjects);

module.exports = router;