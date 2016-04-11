// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('./express-layouts');
var app = express();

app.set('views', 'static/assets/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));


// [START hello_world]
// Say hello!
app.get('/main', function (req, res) {
  res.render('main', {layout: 'layout', title: "Main", page: "main"});
});


app.get('/faqs', function (req, res){
  res.render('faqs', {layout: 'layout', title: 'Faqs', page: 'faqs'});
})


app.get('/contactus', function (req, res){
  res.render('contactus', {layout: 'layout', title: 'Contact us', page: 'contactus'});
})

app.get('/events', function (req, res){
  res.render('events', {layout: 'layout', title: 'Events', page: 'events'});
})
// [END hello_world]

app.get('/', function (req, res){
  res.redirect('/main');
})

if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
  // [END server]
}
try{
    app.use(express.static(__dirname + '/static'));
}catch(e){

}

module.exports = app;
