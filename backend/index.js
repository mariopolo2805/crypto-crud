const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/list', (req, res) => {
  fetch('https://api.coincap.io/v2/assets')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        res.status(response.status).send(response);
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/detail/:id', (req, res) => {
  fetch(`https://api.coincap.io/v2/assets/${req.params.id}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        res.status(response.status).send(response);
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.get('/image/:id', (req, res) => {
  fetch(`https://pixabay.com/api/?key=22987106-f7780ca8d89518a6edfbf1c8a&q=${req.params.id}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        res.status(response.status).send(response);
      }
    })
    .then(data => {
      if (data.hits.length === 0) {
        getRandomImage(req, res);
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

let allCrypto = [];

const getRandomImage = (req, res) => {
  if (allCrypto.length > 0) {
    return res.send(allCrypto);
  }
  fetch(`https://pixabay.com/api/?key=22987106-f7780ca8d89518a6edfbf1c8a&q=crypto`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        res.status(response.status).send(response);
      }
    })
    .then(data => {
      allCrypto = data;
      res.send(allCrypto);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
}

let exchangeInfo = null;
app.get('/usd-eur-change', (req, res) => {
  if (exchangeInfo) {
    return res.send(exchangeInfo);
  }
  fetch('http://api.exchangeratesapi.io/v1/latest?access_key=eb5b98d5f001ed2c1ddf34dbf274b276&symbols=USD,AUD,CAD,PLN,MXN&format=1')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        res.status(response.status).send(response);
      }
    })
    .then(data => {
      exchangeInfo = data;
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.listen(3000, () => {
  console.log('Server running in http://localhost:3000');
});
