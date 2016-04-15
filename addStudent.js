var fs = require("fs");
var prompt = require("prompt");
var Student = require("./student.js");

prompt.start();
prompt.get(["Name", "Gender", "Grade", "GPA", "Detentions", "Sleeping", "CatchPhrase"], function(err, result){
	var student = new Student(result.Name, result.Gender, result.Grade, result.GPA, result.Detentions, result.Sleeping, result.CatchPhrase);
	fs.appendFile("students.txt", JSON.stringify(student) + "\r\n", function(err){
		if(err){
			console.log(err)
		} else {
			console.log("student added")
		}
	})
})