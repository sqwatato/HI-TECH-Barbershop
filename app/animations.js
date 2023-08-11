const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('.show');
    } else {
      entry.target.classList.remove('.show');
    }
  });
});

const hiddenElements = document.querySelectorAll(".custom-hidden");

hiddenElements.forEach((element) => {
  observer.observe(element);
});