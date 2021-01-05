(() => {
  const deleteClicked = event => {
    event.target.remove();
    event.stopPropagation();
    event.preventDefault();
  };
  const addCss = () => {
    document.addEventListener('click', deleteClicked, true);
    var el = document.createElement('style');
    el.id = 'temp123';
    el.innerText = '*:hover { outline: solid 1px red !important;  }';
    document.head.appendChild(el);
  };
  setTimeout(() => {
    document.getElementById('temp123').remove();
    document.removeEventListener('click', deleteClicked, true)
  }, 5000);
  addCss();
})()