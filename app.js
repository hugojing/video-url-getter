var express = require('express')
var exec = require('child_process').exec
var app = express()
var port = process.env.PORT || 3000
app.listen(port, function() {
	console.log('服务已启动。你可以试试访问 http://localhost:3000/?pageurl=http://v.yinyuetai.com/video/2412276');
})


app.get('/', function(req, res) {
	var pageUrl = req.query.pageurl
	var cmdStr = 'youtube-dl -g --skip-download ' + pageUrl
	exec(cmdStr, function(err,stdout,stderr){
		if(err) {
			res.jsonp({
				status: 1,
				result: stderr
			})
		} else {
			res.jsonp({
				status: 0,
				result: stdout
			})
		}
	})
})