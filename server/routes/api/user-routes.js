const router = require('express').Router();
const { getAllProjects, getProject, newProject, createComment, deleteProject, editProject, login } = require('../../controllers/user-controller');

router.router('/').get(getAllProjects);
router.route('/').post(newProject);
router.route('/').get(getProject);
router.route('/').put(createComment);
router.route('/').put(editProject);
router.route('/').delete(deleteProject);
router.route('/').put(login);


module.exports = router;