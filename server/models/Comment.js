// const { Schema, Types } = require('mongoose');

// const commentSchema = new Schema({
//     commentId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
//     commentBody: { type: String, required: true },
//     username: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// },
// {
//     toJSON: { virtuals: true },
//     id: false,
// });

// module.exports = commentSchema;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connections/config');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'project',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;