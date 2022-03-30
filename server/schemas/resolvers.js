const { User, Project, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        // users: async () => {
        //     return User.find()
        // },

        user: async () => {
            return User.findOne({ username })
        },

        project: async () => {
            return Project.findOne({ projectId });
        },

        me: async () => {
            return User.findOne({ _id: context.user._id })
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('No user found with this email');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect login info');
            }
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, { email, username, password }) => {
            const user = await User.create({ email, username, password });
            const token = signToken(user);
            return { token, user };
        },

        addProject: async (parent, { projectName, projectText }) => {
            const project = await Project.create({ projectName, projectText });
            
            await User.findOneAndUpdate(
                { username: projectName },
                { $addToSet: { projects: project._id}}
            )
        },
        
        addComment: async (parent, { projectId, commentText, commentAuthor }) => {
            return Comment.findOneAndUpdate(
                { _id: projectId },
                {
                    $addToSet: { comments: { commentText, commentAuthor }},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
    },
};

module.exports = resolvers;