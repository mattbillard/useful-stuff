(() => { 
  const deleteStuff = () => { document.querySelectorAll('iframe, video').forEach(el => el.remove()); };
  setInterval(deleteStuff, 1000);
  deleteStuff();
})();
