import axios from 'axios';


const id = 'YOUR_CLIENT_ID',
      secret = 'YOUR_SECRET_ID',
      param = `?client_id=${id}&client_secret=${secret}`;

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}${param}`);
}

function getRepos(username) {
    return axios
        .get(`https://api.github.com/users/${username}/repos${param}&per_page=200`);
}

function getTotalStars(repos) {
    return repos.data.reduce((acc, current) => acc + current.stargazers_count, 0);
}

function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(totalStars => {
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        })
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
}

export const githubHelpers = {

    getPlayersInfo(players) {
        const promises =
            axios.all(players.map(username => getUserInfo(username)))
                .then(info => info.map(user => user.data))
                .catch(err => console.log('Error in getPlayersInfo()', err));
        return promises;
    },

    battle(players) {
        const playerOneData = getPlayersData(players[0]),
              playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(err => console.log('Error in battle()', err));
    }

};
