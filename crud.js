//CRUD with file system
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

//Delete file
// fs.unlinkSync(`${dirPath}/banana.txt`);

//Rename
// fs.rename(filePath, `${dirPath}/banana.txt`, (err) => {
//   console.log("file name updated");
// });

//update the file
// fs.appendFile(filePath, " and this apple is very testy", (err) => {
//   if (!err) console.log("updated");
// });

//Read the file
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log("@SN ", item);
// });

//Create the file
// fs.writeFileSync(filePath, "this is a apple file");
