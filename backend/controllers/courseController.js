const sequelize = require("./../config/database.js");
const Course = require("./../models/course.js");
const Office = require("./../models/office.js");

const getCourses = async (req, res) => {
  let courseList = await Course.findAll({
    include: Office.name,
  });
  console.log(JSON.stringify(courseList, null, 2));
  return res.json(courseList);

  //let newCourse = courses.map((course) => {
  //  let ownerName = "";
  //  let owner = Office.findOne({ id: parseInt(course.owner) }).then(
  //    (owner) => {
  //      ownerName = owner.name;
  //    }
  //  );
  //  return { ownerName, ...course };
  //});
  //console.log(newCourse);
  //res.json(newCourse);
  //});
  //let courses = courseList.map(async (course) => {
  //  let owner = await Office.findOne({ id: parseInt(course.owner) });
  //  return { ...course, owner: owner.name };
  //});
  //let offices = await Office.findOne({ id: 10000 });
};
const addCourse = async (req, res) => {
  console.log(req.body);
  const course = await Course.create({
    course_code: req.body.courseCode,
    course_name: req.body.courseName,
    credit_hr: req.body.creditHour,
    curriculum: req.body.curriculum,
    lecture: req.body.lecHour,
    lab: req.body.labHour,
    total_leh: req.body.lecHour + req.body.labHour,
    tutorial: req.body.tutHour,
    mentoring: req.body.menHour,
    advisory: req.body.advHour,
    disabled: false,
    //owner: "",
  });
  res.json(course);
};
module.exports = { getCourses, addCourse };
