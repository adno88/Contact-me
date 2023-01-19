const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const phone = document.getElementById('phone');


facebook.addEventListener('click', function() {
    document.querySelector('.show').innerHTML = '795 777 789';
});
instagram.addEventListener('click', function() {
    alert('instagram');
});
phone.addEventListener('click', function() {
    alert('phone');
});