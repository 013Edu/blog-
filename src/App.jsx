import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/post";
import AddPost from "./components/post/AddPost";

import axios from 'axios';


const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        body: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onPut = async ( name, email, id) => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        title: "oie",
        body: "oiee",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  
  }
  

  useEffect(() => {

  },[])

  console.log(users);
  return (
    <div className="App">
      <br />
      <AddPost onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <Post
            id={user.id}
            key={user.id}
            name={user.title}
            image={"https://images.unsplash.com/photo-1678005051371-94fc2c21ef4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;