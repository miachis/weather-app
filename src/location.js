import { getData } from "./api-caller";

const input = document.querySelector("input");

export function getLocation() {
  const location = input.value;
  getData(location);
}
