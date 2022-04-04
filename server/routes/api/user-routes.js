const router = require('express').Router();
const { getAllProjects, getProject, getUserProject, newProject, createComment, deleteProject, editProject, login } = require('../../controllers/user-controller');


router.route('/').get(getAllProjects).post(newProject).get(getProject)
router.route('/login').post(login);
router.route('/dashboard').get(getUserProject).post(newProject);

router.route('/project').get(getAllProjects);
router.route('/project/:ProjectId').get(getProject).put(editProject).delete(deleteProject)

module.exports = router;