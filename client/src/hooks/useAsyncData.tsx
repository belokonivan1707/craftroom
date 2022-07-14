import React from 'react';

interface IRequestError {
  code: string;
  httpCode: number;
  data?: object;
  isRetryable?: boolean;
  message: string;
}

interface IAsyncData<D> {
  status: string;
  data: D | null;
  error: IRequestError | null;
}

export function useAsyncData<T>() {
  const [state, setState] = React.useState<IAsyncData<T>>(() => {
    return {
      status: 'IDLE',
      data: null,
      error: null
    };
  });

  const serviceCall = React.useCallback((service: () => Promise<T>) => {
    setState(currentState => ({ ...currentState, status: 'PENDING', error: null }));

    return service()
      .then(response => {
        setState({
          status: 'SUCCESS',
          data: response,
          error: null
        });

        return response;
      })
      .catch(error => {
        setState({
          status: 'ERROR',
          data: error.data,
          error: error.data
        });

        return Promise.reject(error);
      });
  }, []);

  return [state, serviceCall] as const;
}
