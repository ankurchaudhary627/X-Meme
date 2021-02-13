const express = require('express');
const router = express.Router();

// Import meme model
const Meme = require('../../models/Meme');

// @route  GET /memes
// @desc   Get latest 100 memes
// @access Public
router.get('/memes', (req, res) => {
  Meme.find()
    .sort({ createdOn: -1 })
    .limit(100)
    .then((memesList) => {
      let newMemesList = []
      memesList.map((obj) => {
        newMemesList.push({
          'id': obj._id,
          'name': obj.name,
          'url': obj.url,
          'caption': obj.caption,
        });
      });
      res.json(newMemesList);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        'message': 'Internal server error'
      });
    });
});

// @route  GET /memes/:id
// @desc   Get meme by id
// @access Public
router.get('/memes/:id', (req, res) => {
  const { id } = req.params;
  Meme.findById(id).then((meme) => {
    if (meme === null) {
      res.status(404).json({
        'message': 'Meme with given ID not found. Try again with different ID'
      });
    } else {
      res.json({
        'id': meme._id,
        'name': meme.name,
        'url': meme.url,
        'caption': meme.caption,
      });
    }
  }).catch((err) => {
    res.status(400).json({
      'message': 'Given id format not supported. Try again with different ID'
    });
  });
});

// @route  POST /memes
// @desc   Add new meme
// @access Public
router.post('/memes', (req, res) => {
  const { name, url, caption } = req.body;
  const validName = name && name.match('^[A-Za-z]+[\\s,]?[A-Za-z0-9]+$');
  const validURL = url && url.match('(http(s)?:\/\/)[-a-zA-Z0-9@:%._\+~#=]+(\/).*');
  const validCaption = caption && caption.match('^[A-Za-z]+[\\s,]?[A-Za-z0-9]+.*$');
  if (validName && validURL && validCaption) {
    const memeObject = {
      name: name,
      url: url,
      caption: caption
    };
    Meme.findOne(memeObject)
      .then((meme) => {
        if (meme === null) {
          const newMeme = new Meme(memeObject);
          newMeme.save().then((meme) => res.json({
            'id': meme._id
          }));
        } else {
          res.status(409).json({
            'message': 'duplicate meme'
          });
        }
      });
  } else {
    res.status(400).json({
      'message': 'Bad request'
    });
  }
});

// @route  PATCH /memes/:id
// @desc   Update meme's caption or url or both
// @access Public
router.patch('/memes/:id', (req, res) => {
  const { id } = req.params;
  const { url, caption } = req.body;
  const validURL = url ? url.match('(http(s)?:\/\/)[-a-zA-Z0-9@:%._\+~#=]+(\/).*') : '';
  const validCaption = caption ? caption.match('^[A-Za-z]+[\\s,]?[A-Za-z0-9]+.*$') : '';
  Meme.findById(id).then((meme) => {
    if (meme === null) {
      res.status(404).json({
        'message': 'Meme with given ID not found. Try again with different ID'
      });
    } else if ((validURL && validCaption) || (validURL && !caption) || (!url && validCaption)) {
      const updateParams = {
        url: url ? url : meme.url,
        caption: caption ? caption : meme.caption
      }
      Meme.findByIdAndUpdate(id, updateParams, { new: true })
        .then(() => res.status(204).json({
          'message': 'Meme updated successfully'
        }));
    } else {
      res.status(400).json({
        'message': 'Bad request'
      });
    }
  }).catch((err) => {
    res.status(400).json({
      'message': 'Given id format not supported. Try again with different ID'
    });
  });
});

module.exports = router;