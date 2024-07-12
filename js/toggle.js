document.addEventListener('DOMContentLoaded', function () {
  // Function to start the slideshow for section 1
  function startSlideshow1() {
    const container = document.getElementById('slideshow-container1');
    const images = container.querySelectorAll('.hidden-card');

    let position = 0;
    const width = 4000; // Width of each image card including margin

    function moveSlide() {
      position -= 1;
      container.style.transform = `translateX(${position}px)`;

      // Move the first image to the end for continuous loop
      if (position === -width) {
        position = 0;
        container.appendChild(images[0]);
        container.style.transform = `translateX(${position}px)`;
      }
    }

    // Start moving the slideshow
    const intervalId = setInterval(moveSlide, 20); // Change interval speed if needed

    // Stop the slideshow on button click
    document.getElementById('toggle-btn1').addEventListener('click', () => {
      clearInterval(intervalId);
    });
  }
  //-------------------------------------------------------------------------------------------

  // Function to start the slideshow for section 2
  function startSlideshow2() {
    const container = document.getElementById('slideshow-container2');
    const images = container.querySelectorAll('.hidden-card');

    let position = 0;
    const width = 3161; // Width of each image card including margin

    function moveSlide() {
      position -= 1;
      container.style.transform = `translateX(${position}px)`;
    }

    // Move the first image to the end for continuous loop
    if (position === -width) {
      position = 0;
      container.appendChild(images[0]);
      container.style.transform = `translateX(${position}px)`;
    }

    // Start moving the slideshow
    const intervalId = setInterval(moveSlide, 10); // Change interval speed if needed

    // Stop the slideshow on button click
    document.getElementById('toggle-btn2').addEventListener('click', () => {
      clearInterval(intervalId);
    });
  }

  //-------------------------------------------------------------------------------------------

  // Function to start the slideshow for section 3
  function startSlideshow3() {
    const container = document.getElementById('slideshow-container3');
    const images = container.querySelectorAll('.hidden-card');

    let position = 0;
    const width = 4250; // Width of each image card including margin

    function moveSlide() {
      position -= 1;
      container.style.transform = `translateX(${position}px)`;

      // Move the first image to the end for continuous loop
      if (position === -width) {
        position = 0;
        container.appendChild(images[0]);
        container.style.transform = `translateX(${position}px)`;
      }
    }

    // Start moving the slideshow
    const intervalId = setInterval(moveSlide, 10); // Change interval speed if needed

    // Stop the slideshow on button click
    document.getElementById('toggle-btn3').addEventListener('click', () => {
      clearInterval(intervalId);
    });
  }

  //-------------------------------------------------------------------------------------------

  // Function to start the slideshow for section 4
  function startSlideshow4() {
    const container = document.getElementById('slideshow-container4');
    const images = container.querySelectorAll('.hidden-card');

    let position = 0;
    const width = 3500; // Width of each image card including margin

    function moveSlide() {
      position -= 1;
      container.style.transform = `translateX(${position}px)`;

      // Move the first image to the end for continuous loop
      if (position === -width) {
        position = 0;
        container.appendChild(images[0]);
        container.style.transform = `translateX(${position}px)`;
      }
    }

    // Start moving the slideshow
    const intervalId = setInterval(moveSlide, 10); // Change interval speed if needed

    // Stop the slideshow on button click
    document.getElementById('toggle-btn4').addEventListener('click', () => {
      clearInterval(intervalId);
    });
  }

  //-------------------------------------------------------------------------------------------

  // Toggle visibility of section 1 and start slideshow 1
  const toggleBtn1 = document.getElementById('toggle-btn1');
  const hiddenSection1 = document.getElementById('hidden-section1');

  toggleBtn1.addEventListener('click', function () {
    if (hiddenSection1.style.display === 'block') {
      hiddenSection1.style.display = 'none';
    } else {
      hiddenSection1.style.display = 'block';
      startSlideshow1(); // Start slideshow 1 when section is shown
    }
  });

  //-------------------------------------------------------------------------------------------

  // Toggle visibility of section 2 and start slideshow 2
  const toggleBtn2 = document.getElementById('toggle-btn2');
  const hiddenSection2 = document.getElementById('hidden-section2');

  toggleBtn2.addEventListener('click', function () {
    if (hiddenSection2.style.display === 'block') {
      hiddenSection2.style.display = 'none';
    } else {
      hiddenSection2.style.display = 'block';
      startSlideshow2(); // Start slideshow 2 when section is shown
    }
  });

  //-------------------------------------------------------------------------------------------

  // Toggle visibility of section 3 and start slideshow 3
  const toggleBtn3 = document.getElementById('toggle-btn3');
  const hiddenSection3 = document.getElementById('hidden-section3');

  toggleBtn3.addEventListener('click', function () {
    if (hiddenSection3.style.display === 'block') {
      hiddenSection3.style.display = 'none';
    } else {
      hiddenSection3.style.display = 'block';
      startSlideshow3(); // Start slideshow 2 when section is shown
    }
  });

  //-------------------------------------------------------------------------------------------

  // Toggle visibility of section 4 and start slideshow 4
  const toggleBtn4 = document.getElementById('toggle-btn4');
  const hiddenSection4 = document.getElementById('hidden-section4');

  toggleBtn4.addEventListener('click', function () {
    if (hiddenSection4.style.display === 'block') {
      hiddenSection4.style.display = 'none';
    } else {
      hiddenSection4.style.display = 'block';
      startSlideshow4(); // Start slideshow 4 when section is shown
    }
  });






//----------------------------------------------------------------------------------------------------


  function toggleHiddenProject(targetHiddenProjectId) {
    const targetHiddenProject = document.getElementById(targetHiddenProjectId);

    function toggleDisplay(element) {
      if (element.style.display === 'grid' || element.style.display === '') {
        element.style.display = 'none';
      } else {
        element.style.display = 'grid';
      }
    }

    const openProjects = document.querySelectorAll('.hidden-project');
    openProjects.forEach((project) => {
      if ((project.style.display === 'grid' || project.style.display === '') && project.id !== targetHiddenProjectId) {
        toggleDisplay(project);
      }
    });

    toggleDisplay(targetHiddenProject);
  }

  // Add event listeners for specified IDs
  const projectIds = [
    ['11', '12', '13', '14'],
    ['21', '22', '23', '24'],
    ['31', '32', '33', '34']
  ];

  projectIds.forEach((row) => {
    row.forEach((id) => {
      const projectId = `project${id}`;
      const hiddenProjectId = `hidden-project${id}`;

      const projectElement = document.getElementById(projectId);
      const hiddenProjectElement = document.getElementById(hiddenProjectId);

      if (projectElement && hiddenProjectElement) {
        projectElement.addEventListener('click', function () {
          toggleHiddenProject(hiddenProjectId);
        });
      }
    });
  });

  // Event listeners for specific button clicks
  const buttonIds = [
    'projectbutton11', 'projectbutton12', 'projectbutton13', 'projectbutton14',
    'projectbutton21', 'projectbutton22', 'projectbutton23', 'projectbutton24',
    'projectbutton31', 'projectbutton32', 'projectbutton33', 'projectbutton34'
  ];

  buttonIds.forEach((buttonId) => {
    const hiddenProjectId = buttonId.replace('projectbutton', 'hidden-project');
    const buttonElement = document.getElementById(buttonId);

    if (buttonElement) {
      buttonElement.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleHiddenProject(hiddenProjectId);
      });
    }
  });
});





//-------------------------------------------
