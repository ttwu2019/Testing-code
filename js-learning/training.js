/**
 * Image.png
 */

var db = {};

function pageLogin(username, password) {
  if ("userList" in db) {
  } else {
    db["userList"] = [];
  }
  if (username && password) {
    let checkUser = findUserByName(username);
    if (checkUser != 1) {
      alert(dbLogin(checkUser, password));
    } else {
      let confirm = window.confirm("用户不存在，是否登记？");
      if (confirm) {
        register(username, password);
        alert("Register success.");
      }
    }
  } else {
    calert("Username or password cannot be empty.");
  }
  alert(JSON.stringify(db));
}

function findUserByName(username) {
  let userList = db["userList"];
  if (userList.length > 0) {
    for (let i = 0; i < userList.length; i++) {
      if (username == userList[i]["username"]) {
        return userList[i];
      }
    }
  }
  return 1;
}

function dbLogin(cred, password) {
  if (cred["password"] == password) {
    return "Login success.";
  } else {
    return "Password is not right.";
  }
}

function register(username, password) {
  var userList = db["userList"];
  userList.push({ username: username, password: password });
}

function login() {
  let cred;
  cred = window.prompt("请输入您的用户名和密码,用逗号隔开。");
  if (cred) {
    let credList = cred.split(",");
    pageLogin(credList[0], credList[1]);
  }
}

function deleteUser(username) {
  let userList = db["userList"];
  if (userList.length > 0) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i] != undefined) {
        if (username == userList[i]["username"]) {
          delete userList[i];
        }
      }
    }
  }
  alert(JSON.stringify(db));
}

login();
deleteUser("ttwu");
