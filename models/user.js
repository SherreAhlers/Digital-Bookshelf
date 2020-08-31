const mongoose = require('mongoose');


// There is no model and no 'facts' collection
// const commentSchema = new mongoose.Schema({
//     text: String
// }, {
//     timestamps: true
// });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);