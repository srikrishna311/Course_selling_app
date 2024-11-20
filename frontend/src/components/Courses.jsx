import { Button, Card, Typography } from "@mui/material";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../vite.config.js';


function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function test() {
      const res = await axios.get(`${BASE_URL}/admin/courses`, {
        method: "GET",
        headers: {
          "authorization": "bearer " + localStorage.getItem("token")
        }
      })
      setCourses(res.data.courses);
    }
    test();
  }, []);
  return <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
    {courses.map(course => {
      return <Course course={course}></Course>
    }
    )}
  </div>

  function Course({ course }) {
    return <Card variant={'outlined'} style={{
      margin: 10,
      width: 300,
      minHeight: 200
    }}>
      <Typography textAlign={"center"} variant={"h4"}>{course.title}</Typography>
      <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
      <img src={course.imglink} style={{ width: 300 }}></img>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button variant={"contained"} size={"large"} onClick={() => {
          navigate("/Course/" + course._id);
        }} >Edit</Button>
      </div>
    </Card>
  }
}
export default Courses;
