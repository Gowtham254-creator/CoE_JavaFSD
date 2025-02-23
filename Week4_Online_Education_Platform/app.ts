interface Course {
    title: string;
    description: string;
    instructor: string;
    prerequisites: string[];
  }
  
  const courses: Course[] = [
    {
      title: 'Intro to TypeScript',
      description: 'Learn the basics of TypeScript.',
      instructor: 'John Doe',
      prerequisites: ['JavaScript']
    },
    {
      title: 'Advanced TypeScript',
      description: 'Take your TypeScript skills to the next level.',
      instructor: 'Jane Smith',
      prerequisites: ['Intro to TypeScript']
    }
  ];
  
  function displayCourses(): void {
    const courseList = document.getElementById('course-list') as HTMLElement;
    courseList.innerHTML = '';
  
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Instructor: ${course.instructor}</p>
      `;
      courseList.appendChild(courseCard);
    });
  }
  
  window.onload = displayCourses;
  