import axios from "axios";

export function getAll() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/?results=50",
  });
}

export function getUser() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/",
  });
}

export function getUserFemale() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/?results=500&gender=female",
  });
}

export function getUserMale() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/?results=500&gender=male",
  });
}
