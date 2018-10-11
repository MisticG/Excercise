
var people = [
    'mamma ',
    'pappa ',
    'michel ',
    'amy ',
    'Henrik ',
    'Emi ',
    'Hugo '
];

people.push('TuyVi');

document.getElementById("main").innerHTML = people;



for(var i = 0; i < people.length; i++) {
    document.getElementById("outPutList").innerHTML += '<div>' + people[i] + '</div>';}

