const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }
);

// UserSchema.pre('save', function(next){
//     if (!user.isModified('password')) return next();

//     const user = this;

//     bcrypt.genSalt(10, function(err, salt){
//         if (err){ return next(err) }

//         bcrypt.hash(user.password, salt, null, function(err, hash){
//             if(err){return next(err)}

//             user.password = hash;
//             next();
//         })
//    })
// });
module.exports = mongoose.model('User', UserSchema);
