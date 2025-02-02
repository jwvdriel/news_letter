
// check if checkbox is checked
const isChecked = document.querySelector('.checkbox-input').checked;
const email = document.querySelector('.email-input');
const submitButton = document.querySelector('button');

console.log(isChecked)




function validateForm () {
     // check if checkbox is checked
    if (!isChecked || email.value === '') {
         alert(`please check the checkbox and or fill in your email address `);
         submitButton.addEventListener('click', function(Event) {
            Event.preventDefault();
         })
         return false
    } else{
        return true
    }
    
}


validateForm()


