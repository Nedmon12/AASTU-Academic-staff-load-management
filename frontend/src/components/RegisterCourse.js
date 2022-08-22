import React, { useContext } from "react";
import styled from "@emotion/styled";
import colors, { StyledForm, Success, Cancel } from "./UiComponent";
import { useFormik } from "formik";
import { css } from "@emotion/react";
import * as yup from "yup";
import axios from "axios";

//context provider
import CourseContext from "./CourseContextProvider";

import {
  FormGroup,
  TextField,
  InputLabel,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Button,
} from "@mui/material";
import { FormatLineSpacing } from "@mui/icons-material";

axios.defaults.baseURL = "http://localhost:5000/api/";

const curriculum = [
  { name: "", value: "" },
  { name: "Cur2019-UG", value: "Cur2019-UG" },
  { name: "Cur2020-UG", value: "Cur2020-UG" },
  { name: "Cur2021-UG", value: "Cur2019-PG" },
  { name: "Cur2022-UG", value: "Cur2021-PG" },
];

const validationSchema = yup.object({
  Curriculum: yup
    .string("Select a Curriculum")
    .required("Curriculum is required"),
  courseName: yup
    .string("Enter the course name")
    .required("Course name is required"),
  courseCode: yup
    .string("Enter the course code")
    .required("Course code is required"),
  creditHour: yup
    .number("Enter the Credit hour")
    .required("Credit hour is required"),
  lecHour: yup.number("Enter the Lecture hour"),
  //.required("Lecture hour is required"),
  labHour: yup.number("Enter the Lab hour"), //required("Lab hour is required"),
  tutHour: yup.number("Enter the Tutorial hour"),
  //.required("Tutorial hour is required"),
  menHour: yup.number("Enter the Mentoring hour"),
  //.required("Tutorial hour is required"),
  advHour: yup.number("Enter the Advisory hour"),
  //.required("Advisory hour is required"),
});

function RegisterCourse() {
  const courseContext = useContext(CourseContext);
  const formik = useFormik({
    initialValues: {
      Curriculum: "",
      courseName: "",
      courseCode: "",
      creditHour: "",
      lecHour: "",
      labHour: "",
      tutHour: "",
      menHour: "",
      advHour: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post("/courses/addCourse", values);
      courseContext.dispatch({ type: "addCourse", course: values });
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <h3>Course Registration Form</h3>
      <TextField
        label="Curriculum"
        id="curriculum"
        name="Curriculum"
        onChange={formik.handleChange}
        error={formik.touched.Curriculum && Boolean(formik.errors.Curriculum)}
        value={formik.values.Curriculum}
        helperText={formik.touched.Curriculum && formik.errors.Curriculum}
        select
      >
        {curriculum.map((option) => (
          <MenuItem key={option.name} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Course name"
        id="courseName"
        name="courseName"
        value={formik.values.courseName}
        onChange={formik.handleChange}
        error={formik.errors.courseName && Boolean(formik.errors.courseName)}
        helperText={formik.touched.courseName && formik.errors.courseName}
      />
      <div className="row">
        <TextField
          fullWidth
          label="Course code"
          id="courseCode"
          name="courseCode"
          value={formik.values.courseCode}
          onChange={formik.handleChange}
          error={formik.errors.courseCode && Boolean(formik.errors.courseCode)}
          helperText={formik.touched.courseCode && formik.errors.courseCode}
        />

        <TextField
          fullWidth
          type="number"
          label="Credit hour"
          id="creditHour"
          name="creditHour"
          value={formik.values.creditHour}
          onChange={formik.handleChange}
          error={formik.errors.creditHour && Boolean(formik.errors.creditHour)}
          helperText={formik.touched.creditHour && formik.errors.creditHour}
        />
      </div>
      <div className="row">
        <FormControl fullWidth>
          <InputLabel htmlFor="lecHour">Lecture</InputLabel>
          <OutlinedInput
            type="number"
            id="lecHour"
            name="lecHour"
            value={formik.values.lecHour}
            onChange={formik.handleChange}
            error={formik.errors.lecHour && Boolean(formik.errors.lecHour)}
            endAdornment={<InputAdornment position="end">LEH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="labHour">Lab</InputLabel>
          <OutlinedInput
            type="number"
            id="labHour"
            name="labHour"
            value={formik.values.labHour}
            onChange={formik.handleChange}
            error={formik.errors.labHour && Boolean(formik.errors.labHour)}
            endAdornment={<InputAdornment position="end">LEH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      <div className="row">
        <FormControl fullWidth>
          <InputLabel htmlFor="tutHour">Tutorial</InputLabel>
          <OutlinedInput
            type="number"
            id="tutHour"
            name="tutHour"
            value={formik.values.tutHour}
            onChange={formik.handleChange}
            error={formik.errors.tutHour && Boolean(formik.errors.tutHour)}
            endAdornment={<InputAdornment position="end">LEH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="menHour">Mentoring</InputLabel>
          <OutlinedInput
            type="number"
            id="menHour"
            name="menHour"
            value={formik.values.menHour}
            onChange={formik.handleChange}
            error={formik.errors.menHour && Boolean(formik.errors.menHour)}
            endAdornment={<InputAdornment position="end">LEH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="advHour">Advisory</InputLabel>
          <OutlinedInput
            type="number"
            id="advHour"
            name="advHour"
            value={formik.values.advHour}
            onChange={formik.handleChange}
            error={formik.errors.advHour && Boolean(formik.errors.advHour)}
            endAdornment={<InputAdornment position="end">LEH</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      <div className="btnGroup">
        <Cancel>Cancel</Cancel>
        <Success type="submit">Submit</Success>
      </div>
    </StyledForm>
  );
}

export default RegisterCourse;
