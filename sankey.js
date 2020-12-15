const {
  load
} = require("@alex.garcia/observable-prerender");
const fs = require('fs');

(async () => {
  const notebook = await load("@jveres/colorful-flow-o-matic", ["chart"]);
  await notebook.redefine("source", "");
  await notebook.redefine("scheme", "set2");
  await notebook.redefine("align", "center");
  await notebook.redefine("source", fs.readFileSync("data.txt", "utf-8"));
  await notebook.waitFor("chart");
  await notebook.svg("chart", "chart.svg");
  await notebook.browser.close();
})();