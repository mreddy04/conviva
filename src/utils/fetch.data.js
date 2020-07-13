export const fetchUsers = async () => {
    const response = await fetch('https://conviva-3ffbc.firebaseio.com/users.json');
    return await response.json();
}

export const normalizeData = (data) => {
    return data.reduce( (acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}
