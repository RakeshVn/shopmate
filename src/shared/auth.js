class Auth {

    isAuthenticated() {

        const token = localStorage.getItem('accessToken')

        if (token) return true;

        return false;
    }
}

export default new Auth();