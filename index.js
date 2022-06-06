// Import stylesheets
import './style.css';

const steps = [1, 2, 3, 4];

const progress = document.querySelector('.progress');
const buttons = document.querySelector('.buttons-container');
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');
let currentStep = 1;

buttons.addEventListener('click', (e) => {
  if (e.target === backBtn) backHandling();
  if (e.target === nextBtn) nextHandling();
  console.log(currentStep);
});

function backHandling() {
  console.log('back');
  if (currentStep > 1) {
    toggleBtn(nextBtn, true);
    document
      .querySelector(`[data-line="${currentStep}"]`)
      .classList.remove('progress-line');
    document
      .querySelector(`[data-number="${currentStep}"]`)
      .classList.remove('progress-number');
    currentStep--;
  }
  if (currentStep === 1) {
    toggleBtn(backBtn, false);
  } else {
  }
}

function nextHandling() {
  console.log('next');
  if (currentStep < 4) {
    currentStep++;
    toggleBtn(backBtn, true, 'active-back');
    document
      .querySelector(`[data-line="${currentStep}"]`)
      .classList.add('progress-line');
    document
      .querySelector(`[data-number="${currentStep}"]`)
      .classList.add('progress-number');
  }
  if (currentStep === 4) {
    toggleBtn(nextBtn, false);
  } else {
  }
}

function toggleBtn(button, toggle) {
  button.disabled = !toggle;
}
