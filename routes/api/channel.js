const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');


  router.post('/new_channel', function(req, res) {
    console.log(req);
    var newChannel = new Channel(req.body);
    newChannel.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });  


  router.get('/list', (req, res) => {
  const errors = {};

  Channel.find()
    .then(channels => {
      if (!channels) {
        errors.noprofile = 'There are no channels';
        return res.status(404).json(errors);
      }

      res.json(channels);
    })
    .catch(err => res.status(404).json({ profile: 'There are no channels' }));
});

module.exports = router;
