import { useState, useEffect } from 'react';

// This is our custom hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [url]);

  return data;
};

const UserList = () => {

  // all we need from the custom hook is the data and logic to fetch data
  const data = useFetch('https://api.example.com/users');

  return (
    <ul>
      {data && data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default UserList;