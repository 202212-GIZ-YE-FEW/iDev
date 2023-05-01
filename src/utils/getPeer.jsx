const getPeer = (users, currentUser) => {
    return users?.find((email) => email !== currentUser.email);
};

export default getPeer;
