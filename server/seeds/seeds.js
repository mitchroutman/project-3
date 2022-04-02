const sequelize = require('../connections/config');
const { User, Project, Comment } = require('../models');

const userData = require('./users.json');
const projectData = require('./projects.json');
const commentData = require('./comments.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Project.bulkCreate(projectData);

    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedDatabase();