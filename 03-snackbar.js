import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as l}from"./assets/vendor-A92OCY9B.js";const a=document.querySelector(".form");a.addEventListener("submit",e=>{e.preventDefault();let t=0;const r=Number(e.target.elements.amount.value);let s=Number(e.target.elements.delay.value);const m=Number(e.target.elements.step.value),i=()=>{t!==r&&u(t+1,s).then(({position:o,delay:n})=>{l.success({title:"Успіх",message:`✅ Fulfilled promise ${o} in ${n}ms`})}).catch(({position:o,delay:n})=>{l.error({title:"Помилка",message:`❌ Rejected promise ${o} in ${n}ms`})}).finally(()=>{t+=1,s+=m,setTimeout(i,s)})};i()});function u(e,t){const r=Math.random()>.3;return new Promise((s,m)=>{r?s({position:e,delay:t}):m({position:e,delay:t})})}
//# sourceMappingURL=03-snackbar.js.map
