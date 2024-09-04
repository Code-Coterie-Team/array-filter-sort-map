const student = [
    { Name : "Kimia" , rank : 90}, {Name : "Shahrzad", rank : 86},
    {Name : "Arezoo", rank : 55},{Name : "Farshad" , rank : 60}, {Name : "Abolfazl" , rank : 83},
    {Name : "Faezeh" , rank : 100},{Name : "Saeede" , rank : 77 }
];

let sortofStudents = student.sort(function(a,b){
    return b.rank - a.rank;
})

console.log(sortofStudents);

let nameofStudents = sortofStudents.map(sortofStudents => sortofStudents.Name)

console.log(nameofStudents);
