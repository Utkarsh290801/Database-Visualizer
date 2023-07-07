import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  // 1. Create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);

    // to send request on backend
    // 1. url
    // 2. request method
    // 3. data
    // 4. data format

    const response = await fetch("http://localhost:5000/users/add", {
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
        title: "Well Done",
        text: "You have done a wonderful job !! 👍👍",
      });
      navigate("/loginin");
    } else {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };

  //   3. use Formik component

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too Short Username!")
      .max(15, "Too Long Username!")
      .required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  return (
    <div className="container">
      <h1>Signup Here</h1>
      <hr className="mb-5" />

      <Formik
        initialValues={userForm}
        onSubmit={userSubmit}
        validationSchema={formSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              className="w-100 mb-4"
              id="username"
              onChange={handleChange}
              value={values.username}
              helperText={touched.username ? errors.username : ""}
              error={Boolean(errors.username && touched.username)}
            />

            <TextField
              label="Email"
              variant="outlined"
              className="w-100 mb-4"
              id="email"
              onChange={handleChange}
              value={values.email}
              helperText={touched.email ? errors.email : ""}
              error={Boolean(errors.email && touched.email)}
            />
            <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password : ""}
              error={Boolean(errors.password && touched.password)}
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

// formik

export default Signup;
