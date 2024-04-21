/*var mark1 = 80;
var mark2 = 55;
var mark3 = 19;
var  total;

function markTotal(x,y,z) {
    mark1 = this.mark1;
    mark2 = this.mark2;
    mark3 = this.mark3;

    total = mark1 + mark2 + mark3;
    return total;
    console.log(total)

}*/
let status;

//let name1 = Abbie;
//let name2 = Thomas;
//let name3 = Lebo;

const prompt = require("prompt-sync")();
for (i = 0; i < 3; i++) {
  var studentName = prompt("student name: ");
  const mark1 = parseFloat(prompt("1st mark: "));
  const mark2 = parseFloat(prompt("2nd mark: "));
  const mark3 = parseFloat(prompt("3rd mark: "));

  let total = mark1 + mark2 + mark3;
  let average = total / 3;

  if (average >= 50 && average <= 74) {
    status = "passed!!";
  } else if (average >= 75 && average <= 100) {
    status = "Got A Distiction!!";
  } else if (average < 50) {
    status = "Failed!!";
  } else if (average > 100) {
    status = "Check your input";
  }
  console.log(`${studentName} ${status}`);
}

