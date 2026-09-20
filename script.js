(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.dataset.theme = "dark";
      if (button) button.textContent = "☀️";
    } else {
      delete root.dataset.theme;
      if (button) button.textContent = "🌙";
    }
  }

  var saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved === "dark" ? "dark" : "light");

  if (button) {
    button.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();