javascript: (() => {
  var text = document.body.innerText;
  var div = document.createElement("div");
  div.innerText = text;
  document.body.innerHTML = '<style>body { padding: 20px; font-family: "Arial"; line-height: 1.6em; white-space: pre-wrap; }</style>';
  document.body.appendChild(div);
})();
