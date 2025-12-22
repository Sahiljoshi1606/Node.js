const fs = require("fs");

fs.mkdir("hello", function () {
  console.log("create folder");
  fs.writeFile(".//hello//abc.txt", "content of the text ", function () {
    console.log("fill created");
    fs.unlink(".//hello//abc.txt", function () {
      console.log("fill is deleted");
      fs.rmdir("./hello", function () {
        console.log("delete folder");
      });
    });
  });
});
