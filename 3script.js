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

  // Handle tab switching
  const menuButtons = document.querySelectorAll(".menu-btn");
  const contentTabs = document.querySelectorAll(".content-tab");

  menuButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Deactivate all buttons and tabs
      menuButtons.forEach((b) => b.classList.remove("active"));
      contentTabs.forEach((tab) => tab.classList.remove("active"));

      // Activate clicked button and corresponding tab
      this.classList.add("active");
      document.getElementById(this.dataset.tab).classList.add("active");
    });
  });

  // Task submission
  document.getElementById("submitTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput").value.trim();
    const taskMessage = document.getElementById("taskMessage");

    if (taskInput) {
      taskMessage.textContent = "Task submitted successfully!";
      taskMessage.style.color = "green";
    } else {
      taskMessage.textContent = "Please paste your task link.";
      taskMessage.style.color = "red";
    }
  });

  // Logout functionality
  document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.clear();
    alert("You have been logged out.");
    window.location.href = "index.html";
  });
});
