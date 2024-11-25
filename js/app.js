
let darkModeBtn = document.querySelector('.darkModeBtn');
let body = document.querySelector('body');
function darkmode() {
  body.classList.toggle('darkmode');
}

darkModeBtn.addEventListener('click', darkmode);

let cursor = document.querySelector(".cursor")
let cursorSm = document.querySelector(".cursorSm")

function cursorMoved (event) {
  let top = event.pageY;
  let left = event.pageX;
  cursor.style.left = `${left}px`
  cursor.style.top = `${top}px`
  cursorSm.style.left = `${left}px`
  cursorSm.style.top = `${top}px`
}

window.addEventListener("mousemove", cursorMoved)


let faqs = document.querySelectorAll(".faq")

function toggleFaq(event) {
    for (faq of faqs) {
      faq.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}
console.log(toggleFaq)

for (faq of faqs){
  faq.addEventListener("click", toggleFaq)
}


