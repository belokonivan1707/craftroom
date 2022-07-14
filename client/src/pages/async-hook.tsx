import React from 'react';
import { useAsyncData } from '../hooks/useAsyncData';

export const AsyncHookPage = () => {
  const [state, serviceCall] = useAsyncData();

  React.useEffect(() => {
    console.log('success state', state);
  }, [state]);

  async function sendRequest() {
    serviceCall(() => fetch('https://jsonplaceholder.typicode.com/users'));
    // serviceCall(() => Promise.resolve({ something: 'happy' }));
  }

  return (
    <div>
      <button onClick={sendRequest}>click</button>
    </div>
  );
};
