(function() {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    blockIfNeeded();
  } else {
    document.addEventListener("DOMContentLoaded", blockIfNeeded);
  }

  function blockIfNeeded() {
    console.log("in content/blocker.js!");
    browser.runtime.sendMessage({ action: "getBlocklist" })
      .then(response => {
        const blocklist = response.blockedWebsites || [];
        const domain = window.location.hostname;
        const isBlocked = blocklist.some(blockedDomain => {
          if (!blockedDomain) return false;
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
      })
      .catch(e => {
        // Fail silently
      });
  }
})();
