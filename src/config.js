export const BACKEND_URI =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://miriio-backend.herokuapp.com'
// export const BACKEND_URI = 'http://localhost:3001'
