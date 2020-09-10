(() => {
  const deleteClicked = event => {
    event.target.remove();
    event.stopPropagation();
    event.preventDefault();
  };
  document.addEventListener('click', deleteClicked, true);
  setTimeout(() => document.removeEventListener('click', deleteClicked, true), 5000);
})()