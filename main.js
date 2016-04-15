var prompt = require("prompt");
var Student = require("./student.js");
var Bus = require("./bus.js");
var bus;
prompt.start();
console.log("Enter bus info:")
prompt.get(["Driver", "Color", "Gas"], function(err, result){
	bus = new Bus(result.Driver, result.Color, result.Gas);
	console.log("Enter 20 students info");
	getStudentInfo(20);
});
function getStudentInfo(num){
	prompt.get(["name", "gender", "grade", "GPA", "detentions", "sleepingInClass", "catchPhrase"], function(err, result){
		var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
		bus.studentEnterBus(student);
		if(num!=1) getStudentInfo(num-1)
		if(num==1) bus.busChatter;
	});
}