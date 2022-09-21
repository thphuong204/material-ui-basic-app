import users from './mock-data/users.json'

export const login = (username, password) => {
    console.log('Trying to login with username ' + username)
    console.log('Trying to login with password ' + password)

    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        return {
            username: matchedUser.username,
            expire_at: new Date(new Date() + (30 * 60 * 1000)) // 30 minutes from now
        };
    }
    return null;
}

export const isLoggedIn = () => {

    const token = localStorage.getItem('token');
    if (!token || !token.expire_at) {
        return false;
    }

    return new Date(token.expire_at) > new Date();

}

export const logOut = () => {
    localStorage.removeItem('token');
}