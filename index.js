//norification const hendle
const notification = document.querySelector('.notification');
const notificationNoButton = document.querySelector('.notification_button_no');
const notificationYesButton = document.querySelector('.notification_button_yes');
//plans button const
const plansButtons = document.querySelectorAll('.button');


// notifcation hendle
notificationNoButton.addEventListener('click',function(){
    blackDrop.classList.toggle("visibilty");
    notification.classList.toggle("visibilty");
    });
notificationYesButton.addEventListener('click', function () {
    blackDrop.classList.toggle("visibilty");
    notification.classList.toggle("visibilty");
    });

//plans button handle
plansButtons.forEach(element => {
    element.addEventListener('click', function () {
        blackDrop.classList.toggle("visibilty");
        notification.classList.toggle("visibilty");
    });
});

