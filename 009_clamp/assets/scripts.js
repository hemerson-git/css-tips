document.addEventListener("DOMContentLoaded", () => {
  const normalWidth = document.querySelector("#normal-width");
  const clampWidth = document.querySelector("#clamp-width");

  setWidth(normalWidth);
  setWidth(clampWidth);

  handleScreenChange(normalWidth);
  handleScreenChange(clampWidth);

  function setWidth(widthSpan) {
    const width = widthSpan.parentNode.parentNode.clientWidth;
    widthSpan.innerHTML = `${width}px`;
  }

  function handleScreenChange(item) {
    console.log(item);

    window.addEventListener("resize", () => {
      setWidth(item);
    });
  }
});
