import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as y}from"./assets/vendor-A92OCY9B.js";const r=document.createElement("button");r.textContent="Stop";r.setAttribute("data-stop","");const e={startBtn:document.querySelector("button[data-start]"),input:document.querySelector('input[type="text"]'),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};e.startBtn.setAttribute("disabled","");let d=null,c=null;e.startBtn.addEventListener("click",()=>{e.startBtn.setAttribute("disabled","");const t=d;c=setInterval(()=>{const o=Date.now(),n=t-o;if(n<=0){clearInterval(c),e.startBtn.removeAttribute("disabled");return}b(n)},1e3)});r.addEventListener("click",()=>{clearInterval(c),e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00",r.remove()});function b(t){const{days:o,hours:n,minutes:a,seconds:u}=C(t);console.log(`${o}:${n}:${a}:${u}`),e.days.textContent=o,e.hours.textContent=n,e.minutes.textContent=a,e.seconds.textContent=u}const i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onChange(t){t[0]<new Date?(e.startBtn.setAttribute("disabled",""),y.error({title:"Error",message:"Please choose a date in the future"})):e.startBtn.removeAttribute("disabled"),console.log(t[0]<new Date)},onClose(t){console.log(t[0]),d=t[0],e.startBtn.after(r)}};p(e.input,i);function s(t){return String(t).padStart(2,"0")}function C(t){const l=s(Math.floor(t/864e5)),m=s(Math.floor(t%864e5/36e5)),h=s(Math.floor(t%864e5%36e5/6e4)),f=s(Math.floor(t%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:h,seconds:f}}console.log(i.defaultDate);
//# sourceMappingURL=02-timer.js.map
