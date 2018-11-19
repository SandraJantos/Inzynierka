const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

router.post('/sendMessage',(req,res) => {
	const newPost = new Post({
			sender:req.body.sender,
			recipient:req.body.recipient,
			text:req.body.text
		})
	newPost.save(function (err, data) {
		if(err) {
			console.log(err);
			return res.status(500).json({msg: 'internal server error'});
		}
		res.json(data);
	});
}); 

router.get('/', (req, res) => {
  Post.find().then(posts => {
    if (!posts || posts.length === 0) {
      return res.status(404).json({
        err: 'No posts exist'
      });
    }

    return res.json(posts);
  });
});


module.exports = router;
