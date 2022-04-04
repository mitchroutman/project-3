import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./style.css";
//import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    getData();
  }, [isLogged]);

  const getData = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
       console.log(JSON.parse(user))
  };

  const HandleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // alert('loged in')
          localStorage.setItem("users", JSON.stringify(data.payload));
          setLogged(true);
          history('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleLogout = () => {
    localStorage.clear();
    setLogged(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper square={true} elevation={0}>
        {isLogged === true ? (
          <>
            <h1>You are logged in</h1>
            <Button
              onClick={HandleLogout}
              type="button"
              color="primary"
              className="form__custom-button"
            >
              Log out
            </Button>
          </>
        ) : (
          <form className="form">
            <TextField
              onChange={(e) => setemail(e.target.value)}
              style={{ margin: 10 }}
              id="standard-basic"
              label="Email"
              type={"email"}
              variant="standard"
            />
            <TextField
              onChange={(e) => setpassword(e.target.value)}
              style={{ margin: 10 }}
              id="standard-basic"
              label="Password"
              type={"password"}
              variant="standard"
            />
            <Button
              onClick={HandleLogin}
              type="button"
              color="primary"
              className="form__custom-button"
            >
              Log in
            </Button>
          </form>
        )}
      </Paper>
    </Box>
  );
}
