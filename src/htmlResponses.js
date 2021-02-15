const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const loadPage = (request, response, page) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

const getIndex = (request, response) => {
  loadPage(request, response, index);
};

const getPage2 = (request, response) => {
  loadPage(request, response, page2);
};

const getPage3 = (request, response) => {
  loadPage(request, response, page3);
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
