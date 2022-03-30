//import * as mongoose from 'mongoose';
const mongoose = require("mongoose");
const  { Schema, model } = require('mongoose');
//import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: { type: String, require: true, trim: true, unique: true },
    email: { type: String, require: true, match: [/.+@.+\..+/] },
    project: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
},
{
    toJSON: { virtuals: true },
    id: true,
});

userSchema.virtual('projectCount').get(function() {
    return this.prpojects.length;
});

const User = model('User', userSchema)

module.exports = User;