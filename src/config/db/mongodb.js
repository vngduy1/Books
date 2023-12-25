const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/connect__DB')
        console.log('connect successfully!!')
    } catch (error) {
        console.log('connect fail', error)
    }
}

module.exports = { connect }
