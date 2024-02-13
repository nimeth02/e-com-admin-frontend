import axios from "axios"

const data = localStorage.getItem("userInfo") || "";
let authorizationHeader = {};

if (data) {
  try {
    authorizationHeader = {
      Authorization: `Bearer ${JSON.parse(data)}`,
    };
  } catch (error) {
    console.error("Error parsing userInfo:", error);
  }
}

export const axiosInstance = axios.create({
  baseURL: 'https://e-com-backend-4uyj.onrender.com',
  headers: authorizationHeader,
});

// console.log(data)
//   export const axiosInstance = axios.create({
//     baseURL: 'http://localhost:4020',
//     headers:authorizationHeader 
//   });