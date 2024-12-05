/* 
  This is our backend server.
  Replace YOUR_IMAGEKIT_URL_ENDPOINT, YOUR_IMAGEKIT_PUBLIC_KEY, 
  and YOUR_IMAGEKIT_PRIVATE_KEY with actual values
*/
import express from 'express';
const app = express();
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/smaiqualbahjahpusat',
  publicKey: 'public_4ZAR0m3/Z5GmG4+wkwL9ugit52c=',
  privateKey: 'private_W6TsqgLK680xbgLUPFxrkfau8aQ='
});

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello Imagekit!');
});

app.get('/auth', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(3001, function () {
  console.log('Live at Port 3001');
});