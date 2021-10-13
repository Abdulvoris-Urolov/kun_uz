const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(console.log('MongoDBga ulanish hosil qilindi...'))
.catch((err) => console.error('MongoDBga ulanish vaqtida xato ro`y berdi...', err));

