let student : string = "John";
let grade1 = parseFloat("8");
let grade2 = parseFloat("9");
let grade3 = parseFloat("7");
let isApproved : boolean;

function aver(num1:number, num2:number, num3:number) : number{
    return (num1 + num2 + num3) / 3;
}

isApproved = aver(grade1, grade2, grade3) > 7;

console.log( aver(grade1, grade2, grade3) );
console.log( `The student ${student} is approved? ${isApproved}` );



