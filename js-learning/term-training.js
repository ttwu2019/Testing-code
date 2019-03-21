/**
 * 用户名和密码保存在对象里，
 * 写一个登录的方法，匹配对象里的用户名和密码，
 * 如果匹配，则登录成功，调用logout的方法，此方法作用是删除对象里的登录成功的用户名和密码
 * 如果匹配失败，则调用注册的方法，注册方法的作用是把新的登录名和密码写入对象里
 */

var db = {};

function login(username, password) {
  if ("userList" in db) {
  } else {
    db.userList = [];
  }
  let checkUser = findUserByName(username);
  if (checkUser != 1 && password == checkUser.password) {
    console.log("login success");
  } else {
    register(username, password);
  }
  console.log(db);
}

function findUserByName(username) {
  if (db.userList.length > 0) {
    for (let i = 0; i < db.userList.length; i++) {
      if (username == db.userList[i]["username"]) {
        return db.userList[i];
      }
    }
  }
  return 1;
}

function register(username, password) {
  db.userList.push({ username, password });
}

login("cybozu", "cybozu");
