var express = require('express');
var router = express.Router();
var markdown = require('markdown').markdown;
var sanitizeHtml = require('sanitize-html');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    markdown: markdown,
    sanitizeHtml: sanitizeHtml
  });
});

module.exports = router;
