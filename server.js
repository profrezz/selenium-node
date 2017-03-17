
var express = require('express');
var http = require('http');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var app = express();
app.get('/selenium', function(req, res){
  res.send('hello Selenium');
      var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.quit();
});
app.listen(8000);

// http.createServer(function (req, res) {
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, world!');
    
// }).listen(process.env.PORT || 8000);