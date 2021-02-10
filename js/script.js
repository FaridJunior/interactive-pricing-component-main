function setSlider() {
  const slider = document.querySelector(".CustomSlider");
  const max = slider.getAttribute("max");
  const width = getComputedStyle(slider).getPropertyValue("--width");
  const widthValue = Number(width.slice(0, width.length - 1));

  const minimumFillWidth = widthValue * 0.03;
  const maximumFillWidthRatio = 0.95;

  function setFilledArea() {
    const fillRation = slider.value / max;
    let fillWidth = fillRation * widthValue * maximumFillWidthRatio;
    if (fillWidth < minimumFillWidth) fillWidth = 0;
    slider.style.setProperty("--value", fillWidth + "%");
  }
  setFilledArea();
  slider.addEventListener("input", setFilledArea);
}

document.addEventListener("DOMContentLoaded", () => {
  setSlider();
});
