const accordionItem = document.querySelectorAll("#accordion-item");

accordionItem.forEach((item) => {
  const triggerOpen = item.querySelector(".trigger");

  triggerOpen.addEventListener("click", () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item);

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  });
});

const toggleItem = (item) => {
  if(item.classList.contains('accordion-open')){
    item.classList.remove('accordion-open')
  }else{
    item.classList.add('accordion-open')
  }
};
