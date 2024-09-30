///let darkmode = localStorage.getItem('darkmode')


//const checkbox = document.getElementById('darkmode-toggle') 

//const enableDarmode = () => {
//    document.body.classList.add('darkmode')
//    localStorage.setItem('darkmode', 'active')
//}

//const disableDarkmode = () => {
//    document.body.classList.remove('darkmode')
//    localStorage.setItem('darkmode', null)
//}

//if (darkmode === "active") enableDarmode()

  //  darkmode-toggle.addEventListener("ckecked", ()=> {
    //darkmode = localStorage.getItem('darkmode')
    //darkmode !== "active" ? enableDarmode() : disableDarkmode()
///})///


const checkbox = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode was previously enabled and apply it
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    checkbox.checked = true; // Ensure checkbox is checked if dark mode is enabled
}

// Add event listener for the checkbox toggle
checkbox.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Save preference in localStorage
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Save preference in localStorage
    }
});