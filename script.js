const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

function storedTheme() {
  try {
    return localStorage.getItem("0xhuo-theme");
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;

  if (toggle) {
    const nextTheme = theme === "light" ? "dark" : "light";
    toggle.setAttribute("aria-label", nextTheme === "light" ? "Treci la tema luminoasă" : "Treci la tema întunecată");
    toggle.setAttribute("aria-pressed", String(theme === "light"));
  }

  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "light" ? "#f7f7f4" : "#1a1b25");
  }
}

applyTheme(root.dataset.theme || (systemTheme.matches ? "light" : "dark"));

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);

  try {
    localStorage.setItem("0xhuo-theme", nextTheme);
  } catch {}
});

systemTheme.addEventListener("change", (event) => {
  if (!storedTheme()) {
    applyTheme(event.matches ? "light" : "dark");
  }
});
