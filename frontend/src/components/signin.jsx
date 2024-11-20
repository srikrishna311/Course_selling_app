import { Button, Card, TextField, Typography } from "@mui/material";
import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user"
import { BASE_URL } from '../vite.config.js';

function Signin({ setUserEmail }) {
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
        Welcome back.Signin below
      </Typography>
    </div>
    <center>
      <Card variant={"outlined"} style={{
        width: 400,
        padding: 10
      }} >
        <TextField style={{ marginBottom: 20 }}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          fullWidth={true} id="username" label="Username" variant="outlined" />
        <TextField style={{ marginBottom: 20 }}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          fullWidth={true} label="Password" variant="outlined" type={"password"} />
        <Button size={"large"} variant="contained"
          onClick={async () => {
            const res = await axios.post(`${BASE_URL}/auth/login`, {
              username: username,
              password: password
            })
            const data = res.data;
            localStorage.setItem("token", data.token);
            setUser({
              userEmail: username,
              isLoading: false
            })
            navigate("/Courses")
          }}>Signin</Button>
      </Card>
    </center>

  </div>
}

export default Signin;
