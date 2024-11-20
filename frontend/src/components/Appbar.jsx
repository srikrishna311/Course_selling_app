import { Button, Typography } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { isUserLoading } from "../store/selectors/isUserLoading"
import { userEmailState } from "../store/selectors/userEmail"

function Appbar() {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <></>
  }

  if (userEmail) {
    return <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: 5,
      zIndex: 1
    }}>
      <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
        navigate("/")
      }}>
        <Typography variant={"h5"}>
          MyApp
        </Typography>
      </div>
      <div style={{
        display: "flex"
      }}>
        <Button style={{ marginRight: 20 }}
          variant={"outlined"}
          onClick={() => {
            navigate("/AddCourse")
          }}
        >AddCourse</Button>
        <Button style={{ marginRight: 10 }}
          variant={"outlined"}
          onClick={() => {
            navigate("/Courses")
          }}
        >Courses</Button>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              localStorage.setItem("token", null)
              setUser({
                isLoading: false,
                userEmail: null
              })
              navigate("/")
            }}
          >LOG OUT</Button>
        </div>
      </div>
    </div>
  }

  return <div style={{
    display: "flex",
    justifyContent: "space-between",
    padding: 5,
    zIndex: 1
  }}>
    <div style={{ marginLeft: 10, cursor: "pointer" }} onClick={() => {
      navigate("/")
    }}>
      <Typography variant={"h5"}>
        MyApp
      </Typography>
    </div>
    <div style={{
      display: "flex",
    }}>
      <div style={{ marginRight: 10 }}>
        <Button
          variant={"contained"}
          onClick={() => {
            navigate('/Signup')
          }}
        >Signup</Button>
      </div>
      <Button
        variant={"contained"}
        onClick={() => {
          navigate('/Signin')
        }}
      >Signin</Button>
    </div>
  </div>
}

export default Appbar;
