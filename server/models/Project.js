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
    id: false,
});

projectSchema.virtual('commentCount').get(function() {
    return this.comments.legnth;
});

const Project = model('Project', projectSchema);

module.exports = Project;