const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'firstname should be provided']
    },
    lastname: {
        type: String,
        required: [true, 'lastname should be provided']
    },
    username: {
        type: String,
        required: [true, 'username must be provided']
    },
    password: {
        type: String,
        required: [true, 'password must be created']
    },
    email: {
        type: String,
        required: [true, 'email should be provided']
    },

})

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username: username });
    if (!foundUser) return false;

    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}
const User = mongoose.model('user', userSchema);

module.exports = User;
