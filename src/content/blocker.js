(function() {
  // Only run after DOM is ready
  if (document.readyState === "complete" || document.readyState === "interactive") {
    blockIfNeeded();
  } else {
    document.addEventListener("DOMContentLoaded", blockIfNeeded);
  }

  function blockIfNeeded() {
    console.log("in content/blocker.js!")
    try {
      const raw = localStorage.getItem("blockedWebsites");
      console.log(!raw);
      if (!raw) return;
      const blocklist = raw.split(",").map(x => x.trim()).filter(Boolean);

      console.log(blocklist);
      // Get the domain of the current page
      const domain = window.location.hostname;

      // Check if domain (or subdomain) matches any in blocklist
      const isBlocked = blocklist.some(blockedDomain => {
        if (!blockedDomain) return false;
        // Exact match or subdomain match
        return domain === blockedDomain || domain.endsWith("." + blockedDomain);
      });

      if (isBlocked) {
        document.documentElement.innerHTML = `
          <head>
            <title>Blocked by Focus</title>
            <style>
              body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #fff3cd; }
              h1 { color: #d9534f; font-size: 3rem; }
            </style>
          </head>
          <body>
            <h1>Blocked by Focus</h1>
          </body>
        `;
      }
    } catch (e) {
      // Fail silently
    }
  }
})();
