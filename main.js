// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// تحقق من الإعدادات المحفوظة في localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
}

// تغيير الوضع عند النقر على الزر
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // حفظ الإعدادات في localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
