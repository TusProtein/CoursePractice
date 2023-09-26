var courseApi = "http://localhost:3000/courses";

var start = () => {
  getCourses(renderCourses);
};

start();

function getCourses(callback) {
  fetch(courseApi)
    .then((res) => {
      return res.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-block");
  var htmls = courses.map((course) => {
    return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourses(${course.id})">Xoá</button>      
            <button id="update" 
            onclick="handleUpdateCourses(${course.id})"
            >Sửa</button>  
        </li>
        `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

//POST
function handlecreateCourse() {
  var name = document.querySelector('input[name="name"]').value;
  var description = document.querySelector('input[name="description"]').value;

  var formData = {
    name: name,
    description: description,
  };
  createCourse(formData);
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then((res) => {
      res.json();
    })
    .then(callback);
}

//DELETE
function handleDeleteCourses(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options).then((res) => {
    res.json();
  });
}

function inputFocus() {
  var inputs = document.querySelectorAll('input[type="text"]');
  var input1 = document.querySelector('input[name="name"]');
  inputs.forEach((input) => {
    if (input1) {
      input1.focus();
    }
    input.value = "";
  });
}

//Update
function updateCourse(data, id, callback) {
  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi + "/" + id, options)
    .then((res) => {
      res.json();
    })
    .then(callback);
}

function handleUpdateCourses(id, callback) {
  var newName = document.querySelector('input[name="name"]').value;
  var newDescription = document.querySelector(
    'input[name="description"]'
  ).value;

  var formData = {
    name: newName,
    description: newDescription,
  };
  updateCourse(formData, id, callback);
}
