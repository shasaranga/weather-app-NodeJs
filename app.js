const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const commands = process.argv;
const address = commands[2];

if (!address) {
  console.log("Please provide an address!");
} else {
  geocode.getGeoCode(
    address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return console.log(error);
      }

      forecast.getCurrentWeather(latitude, longitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
      });
    }
  );
}

// forecast.getCurrentWeather(
//   {
//     latitude: 6.98856645,
//     longitude: 6.98856645,
//   },
//   (error, data) => {
//     console.log("Error : ", error);
//     console.log("Data : ", data);
//   }
// );

// axios
//   .get(mapboxGeocodingUrl)
//   .then((res) => {
//     if (res.data.features.length === 0) {
//       console.log("No result found");
//     } else {
//       const latitude = res.data.features[0].center[1];
//       console.log(latitude);
//       const longitude = res.data.features[0].center[0];
//       console.log(longitude);
//     }
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.log("Error response");
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log("Error request");
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });
//
// axios
//   .get(currentWeatherUrl)
//   .then((res) => {
//     const headerDate =
//       res.headers && res.headers.date ? res.headers.date : "no response date";
//     console.log("Status Code : ", res.status);
//     console.log("Date in Response header : ", headerDate);
//     const data = res.data;
//     // checking for server error response
//     if (data.error) {
//       console.log(data.error.info);
//     } else {
//       console.log(
//         chalk.green.inverse(
//           `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature}. It feels like ${data.current.feelslike} degree out.`
//         )
//       );
//     }
//   })
//   .catch((error) => {
//     // getting low level errors
//     if (error.response) {
//       console.log("Error response");
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log("Error request");
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

// const request = require("request");
// USING npm package request
// request({ url: url, json: true }, (error, response) => {
//   const currentWeather = response.body;
//   console.log(
//     chalk.green.inverse(
//       `${currentWeather.current.weather_descriptions[0]}. It is currently ${currentWeather.current.temperature}. It feels like ${currentWeather.current.feelslike} degree out.`
//     )
//   );
// });
