let toggle = document.getElementById("toggle");

let sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== "toggle" && e.target.id !== "sidebar") {
    toggle.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};
