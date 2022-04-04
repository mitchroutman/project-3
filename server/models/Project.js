const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const projectSchema = new Schema({
    projectName: { type: String, required: true, maxlength: 50 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    projectText: { type: String, required: true, maxlength: 500 }
},
{
    toJSON: { virtuals: true },
    id: true,
});

projectSchema.virtual('commentCount').get(function() {
    return this.comments.legnth;
});

const Project = model('Project', projectSchema);

module.exports = Project;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Project extends Model {}

// Project.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         project_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         project_text: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         due_date: {
//             type: DataTypes.DATEONLY,
//             allowNull: false,
//         },
//         comment: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'project'
//     }
// )

// module.exports = Project;