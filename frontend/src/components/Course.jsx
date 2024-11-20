import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "../store/atoms/course";
import { courseImage, coursePrice, isCourseLoading } from "../store/selectors/course";
import { courseTitle } from "../store/selectors/course";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { BASE_URL } from '../vite.config.js';

function Course() {
  let { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);
  useEffect(() => {
    axios.get(`BASE_URL/admin/course/${courseId}`, {
      method: "GET",
      headers: {
        "authorization": "bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      setCourse({ isLoading: false, course: res.data.course });
    })
      .catch(e => {
        setCourse({ isLoading: false, course: null });
      })
  }, []);

  if (courseLoading) {
    return <Loading />
  }

  return <div>
    <GrayTopper ></GrayTopper>
    <Grid container>
      <Grid item lg={8} md={12} sm={12}>
        <UpdateCard ></UpdateCard>
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <CreateCard ></CreateCard>
      </Grid>
    </Grid>
  </div>

  function GrayTopper() {
    const title = useRecoilValue(courseTitle);
    return <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
      <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
          {title}
        </Typography>
      </div>
    </div>
  }

  function UpdateCard() {
    const [courseDetails, setCourse] = useRecoilState(courseState)
    const [title, setTitle] = useState(courseDetails.title)
    const [description, setDescription] = useState(courseDetails.description)
    const [img, setImage] = useState(courseDetails.imglink);
    const [price, setPrice] = useState(courseDetails.price);

    return <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      <Card variant={"outlined"} style={{
        maxWidth: 600,
        marginTop: 200,
        padding: 20
      }} >

        <Typography variant={"h6"} style={{ marginBottom: 10 }}>
          Update Course details
        </Typography>

        <TextField
          value={title}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true} id="title" label="title" variant="outlined" />
        <TextField
          value={description}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true} id="description" label="description" variant="outlined" />
        <TextField
          value={img}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          fullWidth={true} id="imglink" label="Imagelink" variant="outlined" />
        <TextField
          value={price}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          fullWidth={true} id="price" label="price" variant="outlined" />
        <Button size={"large"} variant="contained"
          onClick={async () => {
            axios.put(`${BASE_URL}/admin/courses/${courseId}`, {
              title: title,
              description: description,
              imglink: img,
              price: price,
              published: true
            }, {
              headers: {
                "Content-type": "application/json",
                "authorization": "bearer " + localStorage.getItem("token")
              }
            })
            let updatedCourse = {
              _id: courseDetails.course._id,
              title: title,
              description: description,
              imglink: img,
              price
            };
            setCourse({ course: updatedCourse, isLoading: false });
          }}
        >Update Course</Button>
      </Card>

    </div>

  }

  function CreateCard() {
    const title = useRecoilValue(courseTitle);
    const imglink = useRecoilValue(courseImage);
    return <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <Card variant={'outlined'} style={{
        margin: 10,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        padding: 5,
        zIndex: 2
      }}>
        <img src={imglink} style={{ width: 300 }}></img>
        <div style={{ marginLeft: 10 }}>
          <Typography variant={"h4"}>{title}</Typography>
          <Price />
        </div>
      </Card>
    </div>
  }

  function Price() {
    const price = useRecoilValue(coursePrice);
    return <>
      <Typography variant={"subtitle2"} style={{ color: "gray" }}>Price</Typography>
      <Typography variant={"subtitle1"}>Rs {price}</Typography>
    </>
  }

}

export default Course;
