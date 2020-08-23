const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User')
const movieRouter = require('./routes/Movies')
const subscriptionRouter = require('./routes/Subscription')
const historyWatchRouter = require('./routes/HistoryWatch')

// models
const User = require('./models/User')
const Movies = require('./models/Movies')
const HistoryWatch = require('./models/HistoryWatch')
const Subscription = require('./models/Subscription')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected...')
})
.then(()=> {
    User.sync().then(()=> console.log('Table usercreated'))
    Movies.sync().then(()=> console.log('Table movies created'))
    HistoryWatch.sync().then(()=> console.log('Table history created'))
    Subscription.sync().then(()=> console.log('Table subscription created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter )
app.use('/', movieRouter)
app.use('/', subscriptionRouter)
app.use('/', historyWatchRouter)

app.listen(4001, ()=> {
    console.log('Server is running...')
})