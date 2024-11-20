import { Button, Grid, Typography } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";

function Landing(){
    const navigate = useNavigate();
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    if(userLoading){
        return <></>
    }
    if(userEmail){
        return <div>
            <Grid container style={{padding:"5vw"}}>
            <Grid item xs={12} mg={12} lg={6}>
                <div style={{marginTop:100}}>
                <Typography variant={"h2"}>
                    My App
                </Typography>
                <Typography variant={"h5"}>
                    A place where you learn
                </Typography>
                </div>
            </Grid>
            <Grid item xs={12} mg={12} lg={6}>
                <img src="https://wallpapers.com/images/hd/chibi-sleepy-roronoa-zoro-pfp-51b4v3av3mbcspp5.jpg" style={{width:600, height:400}} ></img>
            </Grid>
        </Grid>
        </div>
    }
    
    return <div>
        <Grid container style={{padding:"5vw"}}>
            <Grid item xs={12} mg={12} lg={6}>
                <div style={{marginTop:100}}>
                <Typography variant={"h2"}>
                    My App
                </Typography>
                <Typography variant={"h5"}>
                    A place where you learn
                </Typography>
                <div style={{display:"flex",marginTop:10}}>
                    <Button size="large"
                    variant={"contained"}
                    onClick={()=>{
                        navigate("/Signup")
                    }}>
                        Signup
                    </Button>
                    <Button size="large" style={{marginLeft:10}} 
                    variant={"contained"} onClick={()=>{
                        navigate("/Signin")
                    }}>
                        Signin
                    </Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} mg={12} lg={6}>
                <img src="https://wallpapers.com/images/hd/chibi-sleepy-roronoa-zoro-pfp-51b4v3av3mbcspp5.jpg" style={{width:600, height:400}} ></img>
            </Grid>
        </Grid>
    </div>
}

export default Landing; 
