const mongoose = require('mongoose');
const { Schema } = mongoose;

const USER_SCHEMA = new Schema({
	firstname: String,
	lastname: String,
	email: {
		type: String,
		trim: true,
		validate: {
			validator: function (v) {
				return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
			},
			message: props => `${props.value} is not a valid email!`
		}
	},
	photoURL: String,
	password: String,
	username: {
		type: String,
		unique: true
	},
	role: {
		type: String,
		required: true,
		enum: ['artist', 'venue', 'event_organizer']
	},
	address: {
		type: String
	},
	latitude: {
		type: String,
	},
	longitude: {
		type: String
	},
	artistList:{
		type: String,
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'transgender']
	},
	dateOfBirth: {
		type: Date
	},
	mobileNo: {
		type: String
	},
	question1: {
		type: String
	},
	question2: {
		type: String
	}
});


module.exports = mongoose.model("USER", USER_SCHEMA);