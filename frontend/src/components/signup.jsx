import { Button, Card, TextField, Typography } from "@mui/material";
import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../vite.config.js';

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const setUser = useSetRecoilState(userState)
  return <div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      paddingTop: 150,
      marginBottom: 10
    }}>
      <Typography variant={"h6"}>
        Welcome to my app.Signup below
      </Typography>
    </div>
    <center>
      <Card variant={"outlined"} style={{
        width: 400,
        padding: 10
      }} >
        <TextField
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          fullWidth={true} id="username" label="Username" variant="outlined" />
        <br></br>
        <br></br>
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth={true} label="Password" variant="outlined" type={"password"} />
        <br></br>
        <br></br>
        <Button size={"large"} variant="contained"
          onClick={async () => {
            const res = await axios.post(`${BASE_URL}/auth/signup`, {
              username: username,
              password: password
            });
            const data = res.data;
            localStorage.setItem("token", data.token);
            setUser({ userEmail: username, isLoading: false })
            navigate("/Courses")
          }}
        >Signup</Button>
      </Card>
    </center>

  </div>
}

export default Signup;
