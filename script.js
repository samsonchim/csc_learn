document.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("student_name");
  const userRegNo = sessionStorage.getItem("student_reg_no");
  
  // Display user details
  if (userName && userRegNo) {
    document.getElementById("userName").textContent = userName;
    document.getElementById("userRegNo").textContent = userRegNo;
  } else {
    alert("No user is logged in. Redirecting to login...");
    window.location.href = "index.html";
  }

  // Countdown Timer
  function startCountdown(duration) {
    let timer = duration;
    const timerDisplay = document.getElementById("timeRemaining");
    
    setInterval(function () {
      let hours = Math.floor(timer / 3600);
      let minutes = Math.floor((timer % 3600) / 60);
      let seconds = timer % 60;

      timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      
      if (timer > 0) {
        timer--;
      } else {
        alert("Time expired! Redirecting...");
        window.location.href = "index.html";
      }
    }, 1000);
  }
  startCountdown(17271); // Example time in seconds (4h 47m 51s)

  // Handle tab switching with different content
  const menuButtons = document.querySelectorAll(".menu-btn");
  const contentTabs = document.querySelectorAll(".content-tab");

  const tabContents = {
    read: "<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>",
    resources: "<h3>Resources</h3><p>Here you can find additional resources to help you succeed.</p>",
    tasks: "<h3>Task Submission</h3><input type='text' id='taskInput' placeholder='Paste your task link here'><button id='submitTaskBtn'>Submit Task</button><p id='taskMessage'></p>",
  };

  menuButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      menuButtons.forEach((b) => b.classList.remove("active"));
      contentTabs.forEach((tab) => tab.classList.remove("active"));

      this.classList.add("active");
      const tabId = this.dataset.tab;
      document.getElementById(tabId).classList.add("active");
      document.getElementById(tabId).innerHTML = tabContents[tabId];
    });
  });

  // Task submission
  document.addEventListener("click", function (event) {
    if (event.target.id === "submitTaskBtn") {
      const taskInput = document.getElementById("taskInput").value.trim();
      const taskMessage = document.getElementById("taskMessage");
      
      if (taskInput) {
        taskMessage.textContent = "Task submitted successfully!";
        taskMessage.style.color = "green";
      } else {
        taskMessage.textContent = "Please paste your task link.";
        taskMessage.style.color = "red";
      }
    }
  });

  // Logout functionality
  document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.clear();
    alert("You have been logged out.");
    window.location.href = "index.html";
  });
});
