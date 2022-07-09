javascript: (() => {
  const style = document.createElement("style");
  style.innerText = "body { filter: invert(1) hue-rotate(180deg); } img { filter: invert(1) hue-rotate(180deg); }";
  document.head.appendChild(style);
})();
