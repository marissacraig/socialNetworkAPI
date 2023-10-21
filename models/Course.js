const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      email: {
        type: String,
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
        validate: {
          validator: function(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Please enter a valid email address.'
        },
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  friendCount: {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  }
);

const User = model('user', userSchema);

module.exports = User;
