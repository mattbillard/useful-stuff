javascript: (() => { 
  const deleteStuff = () => { document.querySelectorAll('iframe, img, video').forEach(el => el.remove()); }; 
  setInterval(deleteStuff, 1000); 
  deleteStuff(); 
})();