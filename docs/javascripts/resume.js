// The Google Drive PDF embed is unusable on narrow screens (tiny render, large
// dead area). On phones we hide it via CSS; here we also open the "Text version"
// so there's something readable without an extra tap.
(function () {
  function openTextVersion() {
    if (!window.matchMedia("(max-width: 600px)").matches) return;
    var items = document.querySelectorAll("details");
    for (var i = 0; i < items.length; i++) {
      var summary = items[i].querySelector("summary");
      if (summary && /text version/i.test(summary.textContent)) {
        items[i].open = true;
        return;
      }
    }
  }

  if (document.readyState !== "loading") {
    openTextVersion();
  } else {
    document.addEventListener("DOMContentLoaded", openTextVersion);
  }
})();
