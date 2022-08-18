// get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// loop through all dropdowns Elements
dropdowns.forEach(dropdown => {
    // get inner elemnt from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    // we are using this method in order to have 
    // multiple dropdown menu on the page Work

    // add a click event to the select element

    select.addEventListener('click', () => {
        // add the clicked select style to the select element 
        select.classList.toggle('select-clicked');
        // add the rotate style to the caret elemnt
        caret.classList.toggle('caret-rotate');
        // add the open the style to the menu Element
         menu.classList.toggle('menu-open');

    })



// loop through all option elemnt 
options.forEach(options => {
    // add a click event to the option element 
    options.addEventListener('click', () => {
        // change selected inner text to cliked option inner text
        selected.innerText = option.innerText;
        // add the clicked select style to the select Element
        select.classList.remove('caret-rotate');
        // add  the opne style to the menu element  
        menu.classList.remove('menu-open');
        //remove active class from all option elements
        option.forEach(option => {option.classList.remove('active');
        });
        //add active class to clicked option element 
        option.classList.add('active');
    });
});
});