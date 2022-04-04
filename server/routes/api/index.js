const router = require('express').router();
const userRoutes = require('./api/user-routes');
const projectRoutes = require('./api/project-routes');

router.use('/user', userRoutes);
router.use('/project', projectRoutes);

module.exports = router;