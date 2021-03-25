self.addEventListener("message", async (event) => {
  console.log("Got message in the service worker", event);
});

self.addEventListener("install", async (event) => {
  console.log("service worker");
  event.waitUntil(
    Cache.open("react-app").then((cache) =>
      cache.addAll([
        "educational_dashboard/src",
        "educational_dashboard/src/public/index.html",
        "educational_dashboard/src/src/index.js",
        "educational_dashboard/src/src/App.js",
        "educational_dashboard/src/src/App.css",
        "educational_dashboard/src/src/index.css",
        "educational_dashboard/src/src/components/Charts.js",
        "educational_dashboard/src/src/components/CircularProgressWithLable.js",
        "educational_dashboard/src/src/components/Dashboard.js",
        "educational_dashboard/src/src/components/Footer.js",
        "educational_dashboard/src/src/components/Graph.js",
        "educational_dashboard/src/src/components/Nav.js",
        "educational_dashboard/src/src/components/Notification.js",
        "educational_dashboard/src/src/components/Premium.js",
        "educational_dashboard/src/src/components/Profile.js",
        "educational_dashboard/src/src/components/Search.js",
        "educational_dashboard/src/src/components/Tabs.js",
      ])
    )
  );
});
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
