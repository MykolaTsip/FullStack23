
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUserList = async () => {
    let usersList = [];

    usersList = await fetch(usersUrl)
    .then(usersJson => usersJson.json())
    .catch(err => console.log(err));

    return usersList;
}

