export const SERVER_BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://natours-arun.herokuapp.com'
    : 'http://localhost:3000';
