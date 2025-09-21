const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

// زرار الكولابس
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    toggleBtn.querySelector(".label").textContent = "Expand";
  } else {
    toggleBtn.querySelector(".label").textContent = "Collapse";
  }
});

// 🔥 تفعيل اللينك اللي بتدوسي عليه
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    // نشيل active من كل العناصر
    navItems.forEach(el => el.classList.remove("active"));
    // نضيف active على اللي اتداس عليه
    item.classList.add("active");
  });
});
