//import dotenv from 'dotenv';
import express from 'express';

const app = express();

//const env = dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
        "id": 1,
        "joke": "What do you call people who pretend to be Irish on St. Patrick's Day? Counterfitz"
    },
    {
        "id": 2,
        "joke": "What did one wall say to the other wall? I`ll meet you at the corner."
    },
    {
        "id": 3,
        "joke": "I thought about starting a business selling halos... ...but the cost of overheads was too high."
    },
    {
        "id": 4,
        "joke": "What happens if you pass gas in church? You have to sit in your own pew."
    },
    {
        "id": 5,
        "joke": "What's a dog's favorite mode of transportation? A waggin'"
    },
    {
        "id": 6,
        "joke": "Why couldn't the melons be together? Everyone knows melons cantaloupe."
    }
  ]
  res.json(jokes);
})
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})