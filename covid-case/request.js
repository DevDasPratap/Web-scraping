const request = require('request');
console.log('Before')
// request('http://www.google.com', cb)
request('https://www.worldometers.info/coronavirus/', cb)
console.log('Afetr')
// function cb(error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// };

const cheerio = require('cheerio')
function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        // console.log('body:', html); // Print the HTML for the Google homepage.
        handleHtml(html)
    }
};
function handleHtml(html) {
    let selector = cheerio.load(html)
    // let h1 = selector('h1')
    // console.log(h1.length)

    let data = selector('#maincounter-wrap span')
    // for (let index = 0; index < data.length; index++) {
    //     const element = selector(data[index]).text();
    //     console.log(element)
    // }

    let total = selector(data[0]).text()
    let death = selector(data[1]).text()
    let recover = selector(data[2]).text()

    console.log(`Total: ${total}`)
    console.log(`Death: ${death}`)
    console.log(`Recover: ${recover}`)
}