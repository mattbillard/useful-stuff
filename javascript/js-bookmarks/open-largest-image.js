javascript: (() => {
  var nodes = document.querySelectorAll('img');
  var elems = Array.apply(null, nodes);
  window.location = elems.sort((a, b) => a.width * a.height > b.width * b.height)[0].src;
}
)()