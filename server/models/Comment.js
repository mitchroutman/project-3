const { Schema, Types } = require('mongoose');

const commentSchema = new Schema({
    commentId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    commentBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
},
{
    toJSON: { virtuals: true },
    id: false,
});

module.exports = commentSchema;