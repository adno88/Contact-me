const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const phone = document.getElementById('phone');

facebook.addEventListener('click', function() {
    document.querySelector('.show').innerHTML = 'www.facebook.com';
});
instagram.addEventListener('click', function() {
    document.querySelector('.show').innerHTML = 'www.instagram.com';
});
phone.addEventListener('click', function() {
    document.querySelector('.show').innerHTML = '123 456 789';
});