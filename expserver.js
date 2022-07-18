const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

app.get("/", (req, res) => {
  res.send("This is Home page onMy express");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/calfile", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/calfile", (req, res) => {
  // console.log("this vale of first input as :" + value1)
  //    res.send('this is a calculate submit file')
  console.log(req.body.value1);
  console.log(req.body.value2);
  let n1 = Number(req.body.value1);
  let n2 = Number(req.body.value2);
  let sum = n1 + n2;
  console.log(sum);
  res.send(`The sum of two number is ${sum}`);
});
app.get("/file", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.get("/hmr", (req, res) => {
  res.sendFile(__dirname + "/bmrCalculator.html");
  console.log("hmr calculator");
});

app.post("/hmr", (req, res) => {
  console.log(req.body);
  let w = req.body.weight;
  let h = req.body.height;
  let a = req.body.age;
  let gen = req.body.gender;
  var BMR;
  if (gen === "male") {
   BMR = 13.397 * w + 4.799 * h - 5.677 * a + 88.362;  
  } else {
   BMR = 9.247 * w + 3.098 * h - 4.33 * a + 447.593;
  }
  res.send(`the Basal Metabolic Rate of you is : ${BMR} you are ${req.body.gender} and your Hobbies are ${req.body.hobbies} and you have a advanced ${req.body.car} `);
});
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
