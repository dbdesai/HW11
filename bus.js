var Bus = function(driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEnterBus = function(Student){
		this.studentsOnTheBus.push(Student);
	};
	this.busChatter = function(){
		for(var i=0; i<this.studentsOnTheBus; i++){
			if(this.studentsOnTheBus[i].canStudentHave){
				console.log(this.studentsOnTheBus[i].catchPhrase);
			};
		};
	};
};
module.exports = Bus;