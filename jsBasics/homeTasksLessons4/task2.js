const averageGrade = 87;

switch (true) {
case (averageGrade < 60):
console.log("Unsatisfactory", "You average grade is " + averageGrade);
break;
case (averageGrade <= 70):
console.log("Satisfactory");
break;
case (averageGrade <= 80):
console.log("Good");
break;
case (averageGrade <= 90):
console.log("Very good");
break;
case (averageGrade > 90):
console.log("Excellent");
break;
}