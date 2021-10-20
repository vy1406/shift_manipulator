const usersApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/users` : 'http://localhost:3000/users';
const scheduleApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/scheduled-shifts` : 'http://localhost:3000/scheduled-shifts';
const reqShiftsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/requested-Shifts` : 'http://localhost:3000/requested-Shifts';
const subShiftsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/submitted-Shifts` : 'http://localhost:3000/submitted-Shifts';

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

export function postReqShiftsApi(ReqShiftToAdd) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ReqShiftToAdd)
    };
    return fetch(reqShiftsApi, requestOptions).catch((error) => { throw error })
}