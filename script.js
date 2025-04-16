// This is the external file
// Variables - Containers used to store data
  //var name = "Natalia Wanjiku Wambui"; //String
//console.log(name); 

//const pi = 3.14;
//console.log(pi);

//let school = "KCA University";
//console.log(school);

//let person = {
  //name: "Allan",
  // age: 25,
  // school:"KCA University"
// };
//console.log(person.school);

//ARRAYS
// let colors = ["red", "white", "yellow"];
//console.log(colors[0]);

//FUNCTION
// function greet(name){
  // return "Hello, "+name+"!!";
// }
//console.log(greet("Natalia Wambui"));

// function greet(name, email){
  // return "Hello, my name is" + name + "my email addresses is" + email;
// }
// console.log(greet("Allan", "whoisnjoguu@gmail.com"));

//OPERATOR
//Arithmetic
// let a=40;
// let b=50;
//console.log(a*b);

//Assignment
// let x=30;
// let y=10;
// console.log(x*=y);

//Logical
// let age=20;
// let isLearner=true;
// console.log(age<20 && isLearner);

document.addEventListener('DOMContentLoaded', () => {
  //ID Attribute, Selects a single element. DOM cannot work unless the HTMLis fully loaded.

  const headingElement = document.getElementById('main-heading');
  const paragraphElement = document.getElementById('main-paragraph');
  const changeTextButton = document.getElementById('change-text-btn');
  const changeStyleButton = document.getElementById('change-style-btn');
  const toggleElementButton = document.getElementById('add-element-btn');
  const mainContainer = document.getElementById('main-container');

  let addedElement = false;
  let newElement;

  // For the change text button
  changeTextButton.addEventListener('click', () => {
      headingElement.textContent = 'Text Changed Dynamically!!!';
      paragraphElement.textContent = 'The content has been updated by JavaScript.';
  });

  //For the change style button
  changeStyleButton.addEventListener('click', () => {
      headingElement.style.color = 'red';
      paragraphElement.style.fontSize = '17px';
      mainContainer.style.backgroundColor = '#d4edda';
      mainContainer.style.borderColor = '#c3e6cb';
      mainContainer.style.color = '#155724';
  });
//For the added Element button
  toggleElementButton.addEventListener('click', () => {
      if (addedElement) {
          mainContainer.removeChild(newElement);
          toggleElementButton.textContent = 'Add Element';
          addedElement = false;
      } else {
        //There is an option for removing the added element
          newElement = document.createElement('div');
          newElement.id = 'addedElement';
          newElement.textContent = 'This new element was added dynamically!';
          mainContainer.appendChild(newElement);
          toggleElementButton.textContent = 'Remove Element';
          addedElement = true;
      }
  });
});
