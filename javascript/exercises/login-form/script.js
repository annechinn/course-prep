

function authenticateUser(userName, password) {
  // call the backend to see if this username/password exists
  // return true or false

  return false;
}

function signin() {

  let userName = document.getElementById("username").value;
  console.log(userName);

  let password = document.getElementById("password").value;
  console.log(password);

  if (userName.length===0 || password.length===0) {
    document.getElementById("error-message").innerHTML = "Unknown username or password";
  }

  if (authenticateUser(userName, password)) {
    
  }



}