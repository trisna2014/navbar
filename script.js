var dataTarget = document.querySelector('.data-target');
var nav = document.querySelector('ul');

dataTarget.addEventListener('click',function ()
{
    nav.classList.toggle('slide');
});