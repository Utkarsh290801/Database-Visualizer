import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
const AddShow = () => {
  const navigate = useNavigate();
  // 1. Create a form object which should match with model fields
  const userForm = {
    title: "",
    duration: "",
    genre: "",
    publisher: "",
    reviews: "",
    ratings: "",
    views: "",
    createdAt: new Date(),
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    fetch("http://localhost:5000/shows/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Show Added Successfully!!👍",
        });
        navigate("/dashboard");
      }
    });
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    // category: Yup.string().required("Category is Required"),
    duration: Yup.string().required("Duration is Required"),
  });
  // fetch("http://localhost:5000/users/add", {
  //   method: "POST",
  //   body: JSON.stringify(formdata), //convert javascript to json
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // .then((res) => {
  //     if (res.status === 200) {
  //       console.log("data saved");
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Registered Successfully!!👍",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  // });
  //   3. use Formik component
  // const formSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, "Too Short username!")
  //     .max(10, "Too Long username!")
  //     .required("username is Required"),
  //   // lastName: Yup.string()
  //   //   .min(2, 'Too Short!')
  //   //   .max(50, 'Too Long!')
  //   //   .required('Required'),
  //   email: Yup.string().email("Invalid email").required("Required"),
  //   password: Yup.string()
  //     .required("Required")
  //     .matches(
  //       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  //     ),
  // });
  return (
    <body id="peach">
      <div className="container">
        <div className="card" id="word">
          <div className="card-body">
            <div className="row">
              <h1 id="unique">ADD YOUR MOVIES HERE</h1>
            </div>
            <div className="row g-0">
              <div className="col ">
                {/* <img src="https://wallpapertops.com/walldb/original/f/7/4/437204.jpg"/> */}
                <img
                  id="beauti "
                  src="https://i.pinimg.com/564x/f3/3d/75/f33d7515a9a1e5bee36090d1fe31ad32.jpg"
                  class="img-fluid object-fit:cover"
                />
              </div>
              <div className="col">
                {/* <hr className="mb-5" /> */}

                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="title"
                        variant="outlined"
                        placeholder="Enter title"
                        className="w-100 mb-4"
                        id="title" // name can also used
                        onChange={handleChange}
                        value={values.title} // value passed above
                        helperText={errors.title}
                        error={Boolean(errors.title && touched.title)}
                      />
                      <TextField
                        label="duration"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="duration"
                        onChange={handleChange}
                        value={values.duration}
                      />
                      <TextField
                        label="genre"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="genre" // name can also used
                        onChange={handleChange}
                        value={values.genre} // value passed above
                        helperText={errors.genre}
                        error={Boolean(errors.genre && touched.genre)}
                      />
                      <TextField
                        label="Publisher"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="publisher"
                        onChange={handleChange}
                        value={values.Publisher}
                        helperText={errors.publisher}
                        error={Boolean(errors.publisher && touched.publisher)}
                      />

                      <TextField
                        label="reviews"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="reviews" // name can also used
                        onChange={handleChange}
                        value={values.reviews} // value passed above
                        helperText={errors.reviews}
                        error={Boolean(errors.reviews && touched.reviews)}
                      />

                      <TextField
                        label="rating"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="ratings" // name can also used
                        onChange={handleChange}
                        value={values.ratings} // value passed above
                        helperText={errors.ratings}
                        error={Boolean(errors.ratings && touched.ratings)}
                      />

                      <TextField
                        label="views"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="views" // name can also used
                        onChange={handleChange}
                        value={values.views} // value passed above
                        helperText={errors.views}
                        error={Boolean(errors.views && touched.views)}
                      />

                      <TextField
                        label="createdaf"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="createdaf" // name can also used
                        onChange={handleChange}
                        value={values.createdaf} // value passed above
                        helperText={errors.createdaf}
                        error={Boolean(errors.createdaf && touched.createdaf)}
                      />

                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AddShow;
