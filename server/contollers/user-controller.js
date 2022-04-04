const { User, Project } = require('../models');

module.exports = {
    //== LOGIN ==//
    async login() {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(422).send({ error: "must provide email or password" });
        }
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(422).send({ error: "must provide email or password" });
        }
        try {
          await user.comparePassword(password);
          const token = jwt.sign({ userId: user._id }, jwtkey);
          res.status(200).send({ payload: user, token: token, success: true });
        } catch (err) {
          return res.status(422).send({ error: "must provide email or password" });
        }
        
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
