export const fetchUsers = async (query: string) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
};

export const fetchUser = async (userName: string) => {
  const response = await fetch(
    `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error();
};
