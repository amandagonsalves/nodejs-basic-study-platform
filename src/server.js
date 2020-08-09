const express = require('express');
const server = express();
const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.get('/proffy-created', (req,res) => {
    return res.render('partials/proffy-created.html')
})
.listen(5500);