const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
        type: String,
        required: [false, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
        validate: {
          validator: function(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Please enter a valid email address.'
        },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
  
);

userSchema.virtual("thoughtCount").get(function() {
  return this.thoughts.length;
});

userSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
