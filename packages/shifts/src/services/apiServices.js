const usersApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/users` : 'http://localhost:3000/users';
const scheduleApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/scheduled-shifts` : 'http://localhost:3000/scheduled-shifts';

export function getUsersApi() {
  return fetch(usersApi, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function getScheduleApi() {
  return fetch(scheduleApi, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}