const { Schema, model } = 'mongoose';

const userSchema = new Schema({
    username: { type: String, require: true, trim: true, unique: true },
    email: { type: String, require: true, match: [/.+@.+\..+/] },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Projects' }]
},
{
    toJSON: { virtuals: true },
    id: false
});

userSchema.virtual('projectCount').get(function() {
    return this.prpojects.length;
});

const User = model('User', userSchema)

module.exports = User;