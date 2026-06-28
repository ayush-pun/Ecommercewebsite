import { useEffect, useState } from 'react';

const PER_PAGE = 6;

export const useGithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const url = search
        ? `https://api.github.com/search/users?q=${search}&page=${page}&per_page=${PER_PAGE}`
        : `https://api.github.com/users?since=${(page - 1) * PER_PAGE}&per_page=${PER_PAGE}`;

      const res = await fetch(url);
      const data = await res.json();

      setUsers(search ? data.items : data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  return {
    users,
    loading,
    page,
    setPage,
    search,
    setSearch,
  };
};