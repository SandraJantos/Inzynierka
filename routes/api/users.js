const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterData= require('../../validation/register');
const validateLoginData= require('../../validation/login');
//const FacebookStrategy = require('passport-facebook').Strategy;


router.post('/register',(req,res) => {
	const {errors, isValid} = validateRegisterData(req.body);
	if(!isValid){
		return res.status(400).json(errors);
	}

	User.findOne({email: req.body.email})
	.then(r => {
		if(r){
			return res.status(400).json({email:'Exists'})
		}
		else{
			const newUser = new User({
				name:req.body.name,
				email:req.body.email, 
				password:req.body.password,
				location:req.body.location
 
			})
			console.log(newUser);
			bcryptjs.genSalt(10, (err,salt) => {
				bcryptjs.hash(newUser.password,salt, (err,hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save()
					.then(r => res.json(r))
					.catch(err => console.log(err))
				})
			} )
		}
	})
}); 

router.post('/login',(req,res) => { 
	const email = req.body.email;
	const password = req.body.password;
	const {errors, isValid} = validateLoginData(req.body);

	if(!isValid){
		return res.status(400).json(errors);
	}
	User.findOne({email})
	.then(u => {
		if(!u){
			errors.email = 'User does not exist';
			return res.status(404).json(errors);
		}

		bcryptjs.compare(password, u.password).then(r => {
			if(r) {
				const payload = {id: u.id, name:u.name};
				jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600}, (err, token) => {
					res.json({
						token: 'Bearer ' + token
					})
				});
			} 
			else{
				errors.password = 'Password Incorrect';
				return res.status(400).json(errors);
			}
		});
	}); 
});


router.get('/usersList', (req, res) => {
  const errors = {};

  User.find()
    .then(users => {
      if (!users) {
        errors.noprofile = 'There are no users';
        return res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err => res.status(404).json({ profile: 'There are no users' }));
});

router.post(
  '/addPoints/:id',
  (req, res) => {
    User.findOne({ _id: req.params.id }).then(r => {
      if (r) {
        User.findOneAndUpdate(
          { _id: req.params.id },
          { $inc: { points: 10 } },
     
        ).then(r => res.json(r));
      } else {
        console.log("sd");
      }
    })
  }
);
router.get( 
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
		id: req.user.id,
		name: req.user.name,
		surName:req.user.surName,
		email : req.user.email,
		userType: req.user.userType
    });
  } 
);
// passport.use('facebookToken',new FacebookStrategy({
//     clientID: keys.facebookAuth.clientID,
//     clientSecret: keys.facebookAuth.clientSecret,
//     callbackURL: keys.facebookAuth.callbackURL
//   },
//   (accessToken, refreshToken, profile, done) => {
//  	process.nextTick(()=>{
//  		User.findOne({'facebook.id':profile.id}, (err,user) => {
//  			if(err) return done(err);
//  			if(user) return done(null,err);
//  			else{
//  				let newUser = new User();
//  				newUser.facebook.id = profile.id;
//  				newUser.facebook.token = accessToken;
//  				newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
//  				newUser.facebook.email = profile.emails[0].value;

//  				newUser.save(err => {
//  					if (err) throw err;
//  					return done(null,newUser);
//  				})

//  			}
//  		})
//  	});

//   }
// ));
// router.get('/auth/facebook',
//   passport.authenticate('facebookToken', { session: false })
// );
// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));

module.exports = router;

