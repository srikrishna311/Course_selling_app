import { Button, Card, TextField, Typography } from "@mui/material";
import React from 'react';
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from '../vite.config.js';

function AddCourse() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImage] = useState("")
  const [price, setPrice] = useState("");
  return <div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      paddingTop: 150,
      marginBottom: 10
    }}>
      <Typography variant={"h6"}>
        Add Courses
      </Typography>
    </div>
    <center>
      <Card variant={"outlined"} style={{
        width: 400,
        padding: 10
      }} >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true} label="title" variant="outlined" />
        <br></br>
        <br></br>
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true} label="description" variant="outlined" />
        <br></br>
        <br></br>
        <TextField
          onChange={(e) => {
            setImage(e.target.value);
          }}
          fullWidth={true} label="Imagelink" variant="outlined" />
        <br></br>
        <br></br>
        <TextField
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          fullWidth={true} label="price" variant="outlined" />
        <br></br>
        <br></br>
        <Button size={"large"} variant="contained"
          onClick={async () => {
            await axios.post(`${BASE_URL}/admin/courses`, {
              title: title,
              description: description,
              imglink: img,
              published: true,
              price
            }, {
              headers: {
                "authorization": "bearer " + localStorage.getItem("token")
              }
            })
            alert("Course Added!");
          }}>Add Course</Button>
      </Card>
    </center>

  </div>
}

export default AddCourse;
