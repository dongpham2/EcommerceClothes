const API_URL = 'https://api-start-deploy.herokuapp.com';


const axiosConfig = {
  baseURL: API_URL,
  timeout: 30000,
};
const axiosClient = axios.create({ ...axiosConfig });
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token') || '';
  config.header = {
    Authorization: 'Bearer ' + token,
  };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // window.location.href = '/';
      localStorage.clear();
    }
    throw new Error(error.response?.data.message || error.message);
  }
);
