const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be at least 8 characters long'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(value) {
                return value === this.password;
            },
            message: 'Password doesn\'t match',
        }
    },
    email: {
        type: String,
        required: [true,"please enter your email"],
        unique: [true,"Already taken"],
        lowercase: true,
        validate: [],
        text: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userSettings: {
        type: Object,
        default: {
            // language: 'en',
            // theme: 'light',
            // fontSize: 'medium',
            // fontFamily: 'sans-serif',
            // fontWeight: 'normal',
            // fontStyle: 'normal',
            // fontColor: '#000000',
            // backgroundColor: '#ffffff',
            // backgroundImage: '',
            // backgroundImageRepeat: 'repeat',

        }
    },
    whereAbouts: {
        address: String,
        city: String,
        state: String,
        district: String,
        country: String,
        zipCode: Number,
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: Object,
        default: {
            phoneNumber: '',
            phoneNumberVerified: false
        }
    },
    locale: {
        type: String,
        default: 'en'
    },
    premiumType: {
        type: Number,   
        default: 0,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    status:{
        type: String,
        enum: ['online', 'offline', 'busy', 'away', 'hidden'],
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('users', UserSchema);
