let users = [
  {
    id: 2,
    firstName: 'Sally',
    lastName: 'Smith',
    email: 'ss@company.com',
    address: {
      street: '120 5th Ave',
      city: 'Renton',
      zip: 98112
    }
 }, 
 {
    id: 1,
    firstName: 'Joe',
    lastName: 'Jones',
    email: 'jj@company.com',
    address: {
      street: '122 5th Ave',
      city: 'Seattle',
      zip: 98112
    }
}];

let course = {
  name: 'MERN-STACK',
  startDate: '04/17/2021',
  students: [],
  enrollStudent: function(student) {
    this.students.push(student);
  }
}

function getUserById(id) {

  for (let i=0;i<users.length;++i) {

    let user = users[i];
    if (user.id === id) {
      return user;
    }
  }
}

course.enrollStudent(users[0]);

console.log(course.students);
console.log(getUserById(1).lastName);
getUserById(1).lastName = "Smith";


