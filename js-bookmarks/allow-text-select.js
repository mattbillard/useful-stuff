javascript: (() => {
  [...document.querySelectorAll("*")].forEach((elem) => {
    if (Object.keys(getComputedStyle(elem)).includes("userSelect")) {
      elem.style.userSelect = "initial";
    }
  });
})();
