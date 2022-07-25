# Climate Change API V0

_An api that brings climate change around the world_

## How To Use ?

```
git clone https://github.com/asm-dev/climate-change-api.git

cd into directory

npm install

npm run start
```

> URL `https://asmclimateapi.herokuapp.com/`

> 1. place the url in you browser [URL](https://asmclimateapi.herokuapp.com/api/v0/news)

> 2. Make sure you have a JSON Viewer in your chrome to make it better for reading data [Recommended Chrome Extension](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc?hl=en-US).

> 3. You can see multiple objects thats include data.

> 4. You can modify the url to see from specific source like: `https://asmclimateapi.herokuapp.com/api/v0/news/guardian`

## You can use it in your application from RapidApi platform

> Go to RapidApi link for this api [URL]('https://rapidapi.com/MrMeselmani/api/asm-climate-change-live1')

_Then use this code in your app HEADERS ARE IMPORTNAT FOR AUTHENTICATING THE REQUEST_

```
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://asm-climate-change-live1.p.rapidapi.com/api/v0/news',
  headers: {
    'X-RapidAPI-Key': 'ec1f5ba23emsha3699522bc732a3p1ab5bejsna5e00455c6f5',
    'X-RapidAPI-Host': 'asm-climate-change-live1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
