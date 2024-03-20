
let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Ayush', lastName: 'Chandel', age: 19, grade: 'C' },

];

function addStudent(student) {
    const id = students.length > 0 ? students[students.length - 1].id + 2 : 1;
    student.id = id;
    students.push(student);
}

function addStudent(student) {
    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    student.id = id;
    students.push(student);
}


function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    }
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
}

function displayStudents() {
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}


addStudent({ firstName: 'Emily', lastName: 'Johnson', age: 21, grade: 'A' });
addStudent({firstName: 'Ayush', lastName: 'Chandel', age: 19, grade: 'C' }),
addStudent({ id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' }),
updateStudent(2, { age: 23 }); 
deleteStudent(1); 
displayStudents();  






