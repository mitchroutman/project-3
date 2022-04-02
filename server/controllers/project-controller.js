const { Project } = require('../models');

module.exports = {
    async getAllProjects(req, res) {
        const allProjects = await Project.find({});

        if (!allProjects) {
            return res.status(400).json({ message: 'No projects found' });
        }
        res.status(200).json(allProjects);
    },
};