let student = "John";
let grade1 = parseFloat("8");
let grade2 = parseFloat("9");
let grade3 = parseFloat("7");
let isApproved;
function aver(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
isApproved = aver(grade1, grade2, grade3) > 7;
console.log(aver(grade1, grade2, grade3));
console.log(`The student ${student} is approved? ${isApproved}`);
