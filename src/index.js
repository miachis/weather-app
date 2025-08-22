import "./styles.css";
import { getLocation } from "./location";

const search = document.querySelector(".search-button");
search.addEventListener("click", getLocation);
//Call an API that returns the weather data for that location
