function displayStudentInfo(student) {
    for (let property in student) {
      console.log(`${property}: ${student[property]}`);
    }
  }
  

  const student1 = {
    name: 'Ayush',
    age: 20,
    grade: 'c',
    school: 'ABC Public School'
  };
  
  displayStudentInfo(student1);

  const student2 = {
    name: 'karan',
    age: 20,
    grade: 'k',
    school: 'xyz High School'
  };
  
  displayStudentInfo(student2);
  