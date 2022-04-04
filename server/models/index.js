const User = require('./User');
const Project = require('./Project');
const Comment = require('./Comment');


module.exports = { User, Project, Comment };


// const User = require('./User');
// const Project = require('./Project');
// const Comment = require('./Comment');

// //SQL Associations

// User.hasMany(Project, {
//     foreignKey: 'project_id'
// });

// Project.belongsTo(User, {
//     foreignKey: 'user_id'
// });



// //
// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Project, {
//     foreignKey: 'user_id'
// })

// Project.hasMany(Comment, {
//     foreignKey: 'comment_id'
// })


// module.exports = { User, Project, Comment };