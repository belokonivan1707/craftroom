import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const placeholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

const requestHandler = (request: AxiosRequestConfig) => {
  request.headers = {
    hello: `MADNESS IN THE WHOLE WORLD`
  };

  return request;
};

const errorHandler = (error: AxiosError) => {
  console.log('errorHandler: ', error);

  return Promise.reject(error);
};

placeholderApi.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error)
);

export { placeholderApi };
