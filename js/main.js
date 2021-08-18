document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-btn');
  const textarea = document.querySelector('textarea');
  
  startButton.addEventListener('click', init);
  
  function init() {
    startButton.removeEventListener('click', init);
  
    startButton.textContent = "in progress...";
    textarea.textContent = `--PROGRESS START-- \n`;
  
    const boxes = document.querySelectorAll('.box');
  
    animateBoxes(boxes);
  
    const timerForProgress = boxes.length * 650;
    const timerForEnd = timerForProgress + 600;
  
    setTimeout(() => {
      textarea.textContent += "--PROGRESS END--";
    }, timerForProgress);
  
    reinit(timerForEnd);
  }
  
  function animateBoxes(boxes) {
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.toggle('box-down');
      }, index * 500);
  
      showLogs(box, index);
    });
  }
  
  function showLogs(box, index) {
    box.addEventListener("transitionstart", () => {
      textarea.textContent += `Box ${index+1} animation start \n`;
    });
  
    box.addEventListener("transitionend", () => {
      textarea.textContent += `Box ${index+1} animation end \n`;
    });
  }
  
  function reinit(timer) {
    setTimeout(() => {
      alert('Success!');
      location.reload();
    }, timer);
  }
});
