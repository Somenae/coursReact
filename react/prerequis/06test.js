let i = true;
{ i && (console.log('Hello dans une expression')) }

if (i) console.log('Hello dans un statement');

{i ? console.log("i est vrai") : console.log("i est faux")}

if (i == true) {
    console.log("i est vrai");
} else {
    console.log("i est faux");
}