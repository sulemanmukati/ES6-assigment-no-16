import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  console.log(id);
  const [editUser, setEditUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
        .then((res) => setEditUser(res.data))
    //   .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, editUser)
      .then((res) => {
        alert("user update successfully....");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    // <h1>hello</h1>
    <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 5 }}>
          Edit User
        </Typography>
        <TextField
          onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          value={[editUser.name]}
        //   type="text"
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          value={[editUser.email]}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={(e) =>
            setEditUser({ ...editUser, username: e.target.value })
          }
          value={[editUser.username]}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })}
          value={[editUser.phone]}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button variant="contained" type="submit">
          Edit
        </Button>
      </Paper>
    </form>
  );
};

export default EditUser;
