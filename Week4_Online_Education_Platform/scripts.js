// Show category function
function showCategory(category) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(category).style.display = 'block';
}

// Fetch and display courses
async function fetchCourses() {
    const response = await fetch('courses.json');
    const courses = await response.json();
    displayCourses(courses);
}

function displayCourses(courses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course';
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
        `;
        courseList.appendChild(courseItem);
    });
}

fetchCourses();

// Enrollment form submission
document.getElementById('enrollment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
    if (name && email && course) {
        alert('Enrollment successful!');
    } else {
        alert('Please fill out all fields.');
    }
});
