
var prop= "birthday";
var person={
    name: 'Kulldiep',
    age: 25,
    [prop]: 'July 10 1991',
    place: 'Chennai'
};
document.getElementById("myName").innerHTML = person.name;
document.getElementById("myAge").innerHTML = person.age;
document.getElementById("myBirthday").innerHTML = person.birthday;
document.getElementById("myPlace").innerHTML = person.place;
