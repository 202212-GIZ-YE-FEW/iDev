const getPeer = (users, currentUser) => {
    return users?.find((user) => user !== currentUser.email);
};

export default getPeer;
