'use strict';


function getRandomArbitrary(min, max) {
  // return Math.random() * (max - min) + min;
  return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
}


const container = document.getElementById('table-sec');
const tableEl = document.createElement('table');
container.appendChild(tableEl);
const trElement = document.createElement('tr');
tableEl.appendChild(trElement);

const headerCont = ['Id','Name','Email','Mobile','Age','Tuition'];

for (let i = 0; i < headerCont.length; i++) {
  const thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = headerCont[i];
}

function StudentInfo(id,name,email,mobile,age,tuition){
  this.id = id;
  this.name = name;
  this.email = email;
  this.mobile = mobile;
  this.age = age;
  this.tuition = tuition;
  StudentInfo.all.push(this);
  localStorage.setItem(JSON.stringify('student-information', 'StudentInfo.all'));
}
StudentInfo.all=[];

function retrieve(){
  if (localStorage.length>0){
    StudentInfo.all = JSON.parse(localStorage.getItem('student-information'));
  }
}
retrieve();

StudentInfo.prototype.studentName = function(){
  let firstName = this.email.split('@').slice(0, -1).join(' ');
  let lastName = this.email.split(' ').slice(-1).join(' ');
}

function handelSubmit(event){
  event.preventDefault();
  const studentEmail = event.target.studentemail.value;
  const studentMobilNumber = event.target.studentmobilnumber.value;
  const tuition = event.target.tuition.value;
  new StudentInfo(,name,studentEmail,studentMobilNumber , studentAge(18,24),tuition);
}

container.addEventListener('submit',handelSubmit);

StudentInfo.prototype.render = function(){
  handelSubmit();
  for (let i = 0; i < StudentInfo.all.length; i++) {
    const thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = i;

    const thElement2 = document.createElement('th');
    trElement.appendChild(thElement2);
    thElement.textContent = studentAge(18,24);
  }
};

function studentAge(min,max){
  getRandomArbitrary(min,max);
}
