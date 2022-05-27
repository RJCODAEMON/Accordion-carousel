const accordionItem = document.querySelectorAll("#accordion-item");

// accordion item selection
accordionItem.forEach((item) => {
  const triggerOpen = item.querySelector(".trigger");

  // event listner
  triggerOpen.addEventListener("click", () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item);

    if(openItem && openItem !== item){
      toggleItem(openItem)
    }
  });
});

// trigger function
const toggleItem = (item) => {
  if(item.classList.contains('accordion-open')){
    item.classList.remove('accordion-open')
  }else{
    item.classList.add('accordion-open')
  }
};
