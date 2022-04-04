const { User, Project } = require('../models');

module.exports = {
    //== LOGIN ==//
    async login({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    //== CREATE NEW PROJECT ==//
    async newProject({ body }, res) {
        const project = await Project.create(body);

        if (!project) {
            return res.status(400).json({ message: 'Unable to create project' });
        }

        res.status(200).json(project);
    },
    //== GET ALL RPOJECTS ==//
    async getAllProjects(req, res) {
        const allProjects = await Project.find({});

        if (!allProjects) {
            res.stauts(400).json({message: 'No proejcts found'});
        }
        res.status(200).json(allProjects);
    },
    
    //== GET ALL USERS PROJECTS ==//
    async getUserProject(req, res) {
        const userProj = await Project.find({ user_id });

        if (!userProj) {
            res.status(400).json({ message: 'No projects' });
        } 
        res.status(200).json(userProj);
    },

    //== GET PROJECT ==//
    async getProject({ params }, res) {
        const project = await Project.findOne({ _id: params.id });

        if (!project) {
            return res.status(400).json({ message: 'No project found' });
        }
        res.status(200).json(project);
    },
    //== CREATE COMMENT ==//

    //== EDIT PROJECT ==//
    async editProject({params}, res) {
        const update = await Project.findOneAndUpdate({ _id: params.id });
        
        if(!update) {
            return res.status(400).json({meaage: 'no project found'});
        }
        res.status(200).json(update);
    },

    //== DELETE PROJECT ==//
    async deleteProject({ params }, res) {
        const delproject = await Project.findOneAndRemove({ _id: params.id });

        if(!delproject) {
            return res.status(400).json({message: 'No project found'});
        }
        res.status(200).json({message: 'Project deleted'});
    }


}
