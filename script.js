    const btnDropdown = document.getElementById('dropdown-target');
    const dropdown = document.getElementsByClassName('_dropdown')[0];

    btnDropdown.addEventListener('click',function () {
        console.log(this);
        dropdown.classList.toggle('_show-dropdown');
    });

const btnNav = document.getElementById('btn-target');
const navTarget = document.getElementsByClassName('__nav-target')[0];

btnNav.addEventListener('click',function ()
{
    navTarget.classList.toggle('__nav-target-show');
});
