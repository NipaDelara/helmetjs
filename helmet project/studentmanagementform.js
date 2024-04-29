
function Studentsbill() {
    if (localStorage.getItem('students')) {
      localStorage.setItem('students', JSON.stringify([]));
    }
  }

  function getStudents() {
    return JSON.parse(localStorage.getItem('students'));
  }

  function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
  }

  
  
  function createStudent() {
 
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const studentBill = parseFloat(document.getElementById('studentBill').value);
    
    if (studentId && studentName && !isNaN(studentBill) && studentBill >= 0) {
      const students = getStudents();
      students.push({ id: studentId, name: studentName, bill: studentBill });
      saveStudents(students);
      displayOutput('Student added.')
    }

    else {
      displayOutput('Invalid input. Please input valid one.')
    };
  }

  function readStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = localStorage.getItem(studentId);
    if (studentData) {
      alert("Student Data:\n" + studentData);
    } 
    else {
      alert("Student not found!")
    }
  }

//update student info

  function updateStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = JSON.parse(localStorage.getItem(studentId));
    if (studentData) {
      var name = prompt("Enter Name:", studentData.name);
      var billAmount = prompt("Enter Bill Amount:", studentData.billAmount);
      var username = prompt("Enter Username:", studentData.username);
      var password = prompt("Enter Password:", studentData.password);
      studentData.name = name;
      studentData.billAmount = billAmount;
      studentData.username = username;
      studentData.password = password;
      localStorage.setItem(studentId, JSON.stringify(studentData)); // Update data in local storage
      alert("Student updated successfully!");
    } else {
      alert("Student not found!");
    }
  }

// Remove data from local storage
  function deleteStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = localStorage.getItem(studentId);
    if (studentData) {
      localStorage.removeItem(studentId); 
      alert("Student deleted successfully!");
    } else {
      alert("Student not found!");
    }
  }
      function displayOutput(message) {
      document.getElementById('output').innerText = message;
  }

 
  Studentsbill();// JavaScript for Student Management

  // Function to handle form submission
  document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    var studentId = document.getElementById("studentId").value;
    var name = document.getElementById("name").value;
    var billAmount = document.getElementById("billAmount").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var studentData = {studentId: studentId, name: name, billAmount: billAmount, username: username, password: password};
    localStorage.setItem(studentId, JSON.stringify(studentData)); // Save data to local storage
    window.location.href = "student.html"; // Redirect to student.html
  });
  
  // Function to create a new student
  function createStudent() {
    var studentId = prompt("Enter Student ID:");
    if (studentId && !localStorage.getItem(studentId)) {
      var name = prompt("Enter Name:");
      var billAmount = prompt("Enter Bill Amount:");
      var username = prompt("Enter Username:");
      var password = prompt("Enter Password:");
      var studentData = {studentId: studentId, name: name, billAmount: billAmount, username: username, password: password};
      localStorage.setItem(studentId, JSON.stringify(studentData)); // Save data to local storage
      alert("Student created successfully!");
    } else {
      alert("Student ID already exists or invalid input!");
    }
  }
  
  // Function to read student data
  function readStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = localStorage.getItem(studentId);
    if (studentData) {
      alert("Student Data:\n" + studentData);
    } else {
      alert("Student not found!");
    }
  }
  
  // Function to update student data
  function updateStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = JSON.parse(localStorage.getItem(studentId));
    if (studentData) {
      var name = prompt("Enter Name:", studentData.name);
      var billAmount = prompt("Enter Bill Amount:", studentData.billAmount);
      var username = prompt("Enter Username:", studentData.username);
      var password = prompt("Enter Password:", studentData.password);
      studentData.name = name;
      studentData.billAmount = billAmount;
      studentData.username = username;
      studentData.password = password;
      localStorage.setItem(studentId, JSON.stringify(studentData)); // Update data in local storage
      alert("Student updated successfully!");
    } else {
      alert("Student not found!");
    }
  }
  
  // Function to delete student data
  function deleteStudent() {
    var studentId = prompt("Enter Student ID:");
    var studentData = localStorage.getItem(studentId);
    if (studentData) {
      localStorage.removeItem(studentId); // Remove data from local storage
      alert("Student deleted successfully!");
    } else {
      alert("Student not found!");
    }
  }
  Studentsbill()