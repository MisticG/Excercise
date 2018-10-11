var index = [];

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

function newName() {
for(var i = 0; i < people.length; i++) {
    document.getElementById("outPutList").innerHTML += '<div>' + people[i] + '</div>'
}
};

var addName = people + (1);

function addNewName() {
    const buttonInput = document.getElementsByTagName("button").value;

    const user = {
        newName: buttonInput
    }
    buttonInput === people.push(user)
    
};

console.log(buttonInput);