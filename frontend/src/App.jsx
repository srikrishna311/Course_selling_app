import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { BASE_URL } from './vite.config.js';
import Appbar from "./components/Appbar.jsx";
import AddCourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import Landing from "./components/Landing.jsx";
import Signin from "./components/signin.jsx";
import Signup from "./components/signup.jsx";
import { userState } from "./store/atoms/user.js";
import {
  RecoilRoot,
  useSetRecoilState,
} from 'recoil';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  return <RecoilRoot>
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}>
      <Router>
        <Appbar />
        <InitUser />
        <Routes>
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Course/:courseId" element={<Course />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  </RecoilRoot>
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/me`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username
        })
      }
      else {
        setUser({
          isLoading: false,
          userEmail: null
        })
      }
    }
    catch (e) {
      setUser({
        isLoading: false,
        userEmail: null
      })
    }
  }
  useEffect(() => {
    init();
  }, []);
  return <></>
}

export default App
