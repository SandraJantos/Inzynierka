const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const User = require('../../models/User');
const keys = require('../../config/keys');
const multer = require("multer");
const multerS3 = require('multer-s3');

const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId:'AKIAIRHYK5SFAVK6B2PQ',
  secretAccessKey:'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'

});

AWS.config.region = 'us-east-2';
const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'samimagesbucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      const filename = `${Date.now().toString()}-${file.originalname}`;
      cb(null, filename)
    }
  })
})
 

router.post('/', upload.single('image'), (req,res) => {
  console.log(req.body);
  const newBook = {};
  newBook.user = req.body.user;
  if (req.body.title) newBook.title = req.body.title;
  if (req.body.author) newBook.author = req.body.author;
  if (req.body.description) newBook.description = req.body.description;
  if (req.body.isbn) newBook.isbn = req.body.isbn;
  if (req.body.created) newBook.created = req.body.created;
  if (req.file) newBook.image = req.file;
  new Book(newBook).save().then(book => res.json({image:req.file,...book}));

})

router.get('/', (req, res) => {
  Book.find().then(books => {
    if (!books || books.length === 0) {
      return res.status(404).json({
        err: 'No books exist'
      });
    }

    return res.json(books);
  });
});

router.get('/:id', (req, res, next) => {
  Book.findOne({ _id: req.params.id }).then(book => {
    if (book) {
      return res.status(404).json({
        err: 'No book exist'
      });
    }

    return res.json(book);
  })
})


router.post(
  '/:id',
  (req, res) => {
    Book.findOne({ _id: req.params.id }).then(book => {
      if (book) {
        Book.update(
          { _id: req.params.id },
          { $set: {state:req.body.state}}
        ).then(book => res.json(book));
      } else {
        console.log("error");
      }
    })
  }
);

router.post(
  '/reserved/:id',
  (req, res) => {
    Book.findOne({ _id: req.params.id }).then(book => {
      if (book) {
        Book.update(
          { _id: req.params.id },
          { $set: {reservationState:req.body.reservationState}}
        ).then(book => res.json(book));
      } else {
        console.log("error");
      }
    })
  }
);

router.post(
  '/favourite/:id',
  (req, res) => {
    console.log(req.body);
    Book.findOne({ _id: req.params.id }).then(book => {
      if (book) {
        Book.update(
          { _id: req.params.id },
          { $set: {favourite :req.body.favourite }}
        ).then(book => res.json(book));
      } else {
        console.log("error");
      }
    })
  }
);

router.post(
  '/reservationAction/:id',
  (req, res) => {
    console.log(req.body);
    Book.findOne({ _id: req.params.id }).then(book => {
      if (book) {
        Book.update(
          { _id: req.params.id },
          { $set: {reservation:{
            'state':req.body.state,
            'reservedBy':req.body.reservedBy,
            'date':req.body.date,
          }}}
        ).then(book => res.json(book));
      } else {
        console.log("error");
      }
    }) 
  }
); 

router.post(
  '/review/:id',
  (req, res) => {
    Book.findById(req.params.id)
      .then(r => {
        const newReview = {
          text: req.body.text,
          user: req.body.user,
          rate: req.body.rate
        };

        // Add to comments array
        r.reviews.unshift(newReview);

        // Save
        r.save().then(review => res.json(review));
      })
      .catch(err => res.status(404).json({ reviewnotfound: 'No review found' }));
  }
);

module.exports = router;
