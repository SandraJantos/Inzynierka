const express = require('express');
const router = express.Router();
const Reservation = require('../../models/Reservation');
const Book = require('../../models/Book');


router.get('/reservationsList', (req, res) => {
  Reservation.find().then(r => {
    return res.json(r);
  });
});

router.post('/newReservation',(req,res) => {
	console.log(req.body.first);
	const newReservation = new Reservation(
		req.body
	)
	newReservation.save(function (err, data) {
		if(err) {
			console.log(err);
			return res.status(500).json({msg: 'internal server error'});
		}
		res.json(data);
	});
}); 
router.post(
  '/:id',
  (req, res) => {
    Reservation.findOne({ _id: req.params.id }).then(r => {
      if (r) {
        Reservation.findOneAndUpdate(
          { _id: req.params.id },
          { $set: {	second: req.body.second}},
          { new: true }
      
        ).then(r => res.json(r));
      } else {
        console.log("sd");
      }
    })
  }
);
module.exports = router;

