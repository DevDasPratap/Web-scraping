const request = require('request')
const cheerio = require('cheerio')
const lastBallComentUrl = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary'

request(lastBallComentUrl, cb)
function cb(err, res, html) {
    if (err) {
        console.log(err)
    } else {
        extractHTML(html)
    }
}
function extractHTML(html) {
    const result = cheerio.load(html)
}