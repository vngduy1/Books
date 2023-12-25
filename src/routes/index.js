const newsRoute = require('./newsRoute')
const siteRoute = require('./siteRoute')
const meRoute = require('./meRoute')
const booksRoute = require('./booksRoute')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.use('/me', meRoute)
    app.use('/site', siteRoute)
    app.use('/news', newsRoute)
    app.use('/books', booksRoute)
}

module.exports = route
