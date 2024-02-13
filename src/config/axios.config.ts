import axios from "axios"

// export const axiosInstance = axios.create({
//     baseURL: 'https://e-com-backend-4uyj.onrender.com'
//   });
const data=localStorage.getItem("userInfo") || ""
console.log(data)
  export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4020',
    headers: {
        Authorization: `Bearer ${JSON.parse(data)}`,
      },
  });