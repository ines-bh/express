const express = require('express')

const app = express()

const port = 5000

const Middleware = (req, res, next) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  };
  
  let hour = new Date().getHours();
  if (
    days[new Date().getHours()] !== "Saturday" &&
    days[new Date().getHours()] !== "Sunday" &&
    hour >= 9 &&
    hour < 17
  ) {
    next();
  } else {
    res.send("date not available!!");
  }
  app.use(Middleware);




app.use(express.static('Public'))

app.listen(port,console.log('Server is running'))