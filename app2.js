import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.API_KEY;

async function weather(city) {
  try {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}`
    );
    console.log(
      `The weather in ${city} is`,
      response.data.weather[0].description
    );
  } catch (error) {
    console.log(error);
  }
}
weather("Dubai");
