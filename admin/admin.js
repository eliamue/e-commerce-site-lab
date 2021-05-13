const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
//don't worry bout it, jsut do it every time you have a form!
    const data = new FormData(form);
    // this data blob gets the following get properties that are in the html
    //an alternative to myInpuit.value, useful if we have a lot of fields
    console.log(data.get('name'));
    console.log(data.get('price'));
    console.log(data.get('id'));
});