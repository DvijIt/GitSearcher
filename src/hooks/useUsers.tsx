import React, { useEffect, useState } from "react";
import axios from "axios";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // users
  useEffect(() => {
    if (searchQuery.length > 3) {
      setLoading(true);
      axios
        .get(
          `https://api.github.com/search/users?q=${searchQuery}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
        )
        .then((usersData) => setUsers(usersData.data.items.splice(0, 3)))
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  return {
    users,
    loading,
    searchQuery,
    handleInput,
  };
};
