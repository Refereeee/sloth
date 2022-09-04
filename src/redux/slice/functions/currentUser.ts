
const getCurrentUserFind = () => {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : ''
};

export default getCurrentUserFind;