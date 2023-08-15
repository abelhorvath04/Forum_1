import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Profile() {

  const [userName, setUserName] = useState('');

  useEffect(() => {
      // Fetch user data from Laravel API
      axios.get('/api/user')
          .then(response => {
              setUserName(response.data.name);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);


  return (
    <>
      <b>Kedves {userName}, Ön sikeresen belépett!</b>
      <hr />
      <br />
      <Link to="/">
        <Button>
          Log out
        </Button>
      </Link>
    </>
  )
}
