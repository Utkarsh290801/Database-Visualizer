import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
const Loginin = () => {
  const { setloggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const loginform = {
    email: "",
    password: "",
  };

  const logininSubmit = async (formdata) => {
    const response = await fetch("http://localhost:5000/users/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Success!!👍",
      });
      //  session m store krwa lenge jisse
      const data = await response.json();
      console.log(data);
      setloggedIn(true);
      //  this will store user data in session
      sessionStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else if (response.status === 300) {
      console.log(response.status);
      console.log("something went wrong");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Login Failed!!👍",
      });
    }
  };

  return (
    <div className="login-bg" style={{ paddingTop: "5%" }}>
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card">
          <div className="card-body">
            {/* <img
              style={{  }}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /> */}

            {/* <div
              style={{
                background:
                  "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)",
                height: "27rem",
                width: "27rem",
                backgroundPosition: "center",
              }}
            ></div> */}
            <h3 className="mt-5 mb-5">Login Here</h3>

            <Formik initialValues={loginform} onSubmit={logininSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    className="w-100 mt-3"
                    label="Email"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    variant="outlined"
                    className="w-100 mt-3"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    variant="contained"
                    color="primary"
                  >
                    Login Now
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginin;
