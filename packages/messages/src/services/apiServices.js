
const usersApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/users` : 'http://localhost:3000/users';
const msgsApi = process.env.NODE_ENV == "production" ? `https://shift-publisher-nest.herokuapp.com/msgs` : 'http://localhost:3000/msgs';

export function getUsersApi() {
  return fetch(usersApi, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function postUsersApi(userToAdd) {
 const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( userToAdd )
    };
    return fetch(usersApi, requestOptions)  .catch((error) => {throw error})
 

}

export function getMsgsApi() {
  return fetch(msgsApi, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function postMsgsApi(msgToAdd) {
 const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( msgToAdd )
    };
    return fetch(msgsApi, requestOptions)  .catch((error) => {throw error})
 

}

