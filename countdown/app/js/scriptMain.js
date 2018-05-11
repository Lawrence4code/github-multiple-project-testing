console.log("script.js loaded...")

const countDown = document.querySelector(".landing__text--countdown");

// Set Launch Date
const launchDate = new Date("August 13, 2018 12:00:00").getTime();

// Update Every Second
const interval = setInterval(()=>{
  // Get today's date and time (ms)
  const now = new Date().getTime();
  // variable created to define time to launch
  const timeToLaunch = launchDate - now

  const days = Math.floor( timeToLaunch / (1000 * 60 * 60 * 24));
  const hours = Math.floor( (timeToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor( (timeToLaunch % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor( (timeToLaunch % (1000 * 60)) / 1000)
  countDown.innerHTML  = `
      <div> ${days} <span> Days </span> </div>
      <div> ${hours} <span> Hours </span> </div>
      <div> ${minutes} <span> Minutes </span> </div>
      <div> ${seconds} <span> Seconds </span> </div>
    `

  // If launch date passed 
  if(timeToLaunch < 0){
    clearInterval(interval)
    countDown.innerHTML = "<div> Launched! </div>"
  }

},1000)


//  Miniute: ${miniuts} Seconds ${seconds} 