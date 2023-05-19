export const APP_ACTIONS = {
  REQUEST_START: 'REQUEST_START',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

export const requestStart = () => ({
  type: APP_ACTIONS.REQUEST_START,
});

export const setLoading = (loading: boolean) => ({
  type: APP_ACTIONS.SET_LOADING,
  payload: loading,
});

export const setError = (error: string) => ({
  type: APP_ACTIONS.SET_ERROR,
  payload: error,
});
