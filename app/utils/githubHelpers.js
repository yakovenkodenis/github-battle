import axios from 'axios';


const id = 'YOUR_CLIENT_ID',
      secret = 'YOUR_SECRET_ID',
      param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}${param}`);
}

export const githubHelpers = {

    getPlayersInfo(players) {
        const promises =
            axios.all(players.map(username => getUserInfo(username)))
                .then(info => info.map(user => user.data))
                .catch(err => console.log('Error in getPlayersInfo', err));
        return promises;
    }

};
