function notEmptyValue(c) {
  if (document.forms["contact"].name.value === "") {
    alert("Name should not be empty");
    return false;
  }
  if (document.forms["contact"].email.value === "") {
    alert("Email should not be empty");
    return false;
  }
  if (document.forms["contact"].message.value === "") {
    alert("Message should not be empty");
    return false;
  }
  return true;
}

function validateAge(idiom) {
  let age = document.getElementById('age').value;  
  if(age < 18){
    alert('You should be at least 18 years old to buy a product!');
  }else{
    if(idiom === 'en'){
      window.location.href = "home.html";
    }else{
      alert('Under constructions!');
    }    
  }
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
