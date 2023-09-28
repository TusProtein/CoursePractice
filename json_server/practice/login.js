let userApi = "http://localhost:3000/user";

const login = () => {
  getUser(handleLogin);
};

const getUser = (callback) => {
  fetch(userApi).then((res) => {
    return res.json().then(callback);
  });
};

const handleLogin = (data) => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let buttonSubmit = document.getElementById("buttonSubmit");

  buttonSubmit.addEventListener("click", (e) => {
    data.forEach((data) => {
      if (data.username == username && data.password == password) {
        alert("Login successful");
        window.location.href = "./todolist.html";
      }
    });
  });
};
