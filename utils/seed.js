// const connection = require('../config/connection');
// const { User, Thought } = require('../models');
// const { getRandomName, getRandomThoughts } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');

//   // Drop existing users
//   await User.deleteMany({});

//   // Drop existing thoughts
//   await Thought.deleteMany({});

//   // Create empty array to hold the thoughts
//   const thoughts = [];

//   // Loop 20 times -- add thoughts to the thoughts array
//   for (let i = 0; i < 20; i++) {
//     // Get some reaction objects using a helper function that we imported from ./data
//     const thought = getRandomThoughts(20);

//     const username = getRandomName();
//     const first = username.split(' ')[0];
//     thoughts.push({
//       first,
//       username,
//       thought,
//     });
//   }

//     // Create empty array to hold the thoughts
//     const friends = [];

//     // Loop 20 times -- add thoughts to the thoughts array
//     for (let i = 0; i < 20; i++) {
  
//       const fullName = getRandomName();
//       const first = fullName.split(' ')[0];
  
//       friends.push({
//         first,
//       });
//     }
  

//   // Add thoughts to the collection and await the results
//   await Thought.collection.insertMany(thoughts);

//   // Add users to the collection and await the results
//   await User.collection.insertOne({
//     username: '',
//     email: '',
//     thoughts: [...thoughts],
//     friends: [...friends],
//   });

//   // Log out the seed data to indicate what should appear in the database
//   console.table(thoughts);
//   console.table(friends);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
