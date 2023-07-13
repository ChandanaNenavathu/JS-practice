var a;
var b;
var c;

document.write('<H1> Before Initialization</H1>');
document.write("<br> Datatype of a is ", typeof a);
document.write("<br> Datatype of b is ", typeof b);
document.write("<br> Datatype of c is ", typeof c);

a = 10;
b = 3.14;
c = 'Nenavathu';
d = true;
var student = null
var marks = [90, 100,280,500];
var students ={name:"chandana", rno : 454};
var s1, s2;
s1 = "Your's";
s2 = 'Hello "Chandana"';
document.write('<H1> After Initialization</H1>');
document.write("<br> Datatype of a is ", typeof a);
document.write("<br> Datatype of b is ", typeof b);
document.write("<br> Datatype of c is ", typeof c);
document.write("<br> Datatype of d is ", typeof d);
document.write("<br> Datatype of marks is ", typeof marks);
document.write("<br> Datatype of students is ", typeof students);
document.write("<br> Datatype of null is ", typeof null);
document.write("<br>", marks[0]);
document.write('<br>', marks[1]);
document.write('<br>', marks[2]);
document.write('<br>', marks[3]);
document.write('<br>', students.name);
document.write('<br>', students.rno);
document.write('<br>', s1);
document.write('<br>', s2);
document.getElementsByClassName("data-types")[0].innerHTML =`Datatype of a is nonsense ${typeof a}`;

