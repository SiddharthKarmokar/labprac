const student = {
    name: "Ravi",
    age: 20,
    branch: "CSE" 
};

Object.keys(student).forEach( (key) => {
    console.log(key, student[key]);
});