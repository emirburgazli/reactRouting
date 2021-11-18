import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {
  //   const { id } = useParams();
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <div>
      <h2>User Detail {id}</h2>
      {IsLoading && <div>Loading...</div>}
      {!IsLoading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      <Link to={`/user/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default User;
