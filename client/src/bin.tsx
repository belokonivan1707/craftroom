// App.js
import React, { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import './App.css';

const apiUrl = 'http://localhost:3001';

axios.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const { origin } = new URL(String(config.url));
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    console.log('config', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function App() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState<any>([]);
  const [fetchError, setFetchError] = useState(null);

  const getJwt = async () => {
    const { data } = await axios.get(`${apiUrl}/jwt`);
    localStorage.setItem('token', data.token);
    setJwt(data.token);
  };

  const getFoods = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/foods`);
      setFoods(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={() => getFoods()}>Get Foods</button>
        <ul>
          {foods.map((food: any, i: number) => (
            <li>{food?.description}</li>
          ))}
        </ul>

        {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      </section>
    </>
  );
}
export default App;
