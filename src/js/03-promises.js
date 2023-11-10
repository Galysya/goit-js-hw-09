
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    const promise = { position, delay };
  if (shouldResolve) {
resolve (promise); 
     //  position
  } else {
reject(promise);
      //  position
  }
}, delay);});}


const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormElSubmit)

function onFormElSubmit(e) {
  e.preventDefault();

  const amount = Number  (e.currentTarget.elements.amount.value);
  const delay = Number ( e.currentTarget.elements.delay.value);
  const step = Number (e.currentTarget.elements.step.value);

  for (let index = 0; index < amount; index++) {
    const element = delay + index * step;
    
createPromise(index, element)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position +1} in ${delay}ms`);
  });  
}
}