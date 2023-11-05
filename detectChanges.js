// const User = require("./models/user");

// const pipeline = [
//     {
//         $match: {
//             operationType: {
//                 $in: ['insert', 'update', 'replace', 'delete']
//             }
//         }
//     }
// ];

// const changeStream = User.watch(pipeline);

// changeStream.on('change', change => {
//     console.log('Change detected:', change);
//     // Perform actions based on the change event
// });

// changeStream.on('error', error => {
//     console.error('Change stream error:', error);
// });

// module.exports.changeStream = changeStream;