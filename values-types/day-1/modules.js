function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login("fred", "12wrfwe1");