const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

main();

const eventSchema = mongoose.Schema({
    date: Number,
    month: Number,
    year:Number,
    event: String,
    eventType: String
})

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vnuefms.mongodb.net/eventDB?retryWrites=true&w=majority&appName=Cluster0`);
}

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;