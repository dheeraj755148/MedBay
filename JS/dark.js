document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');


    
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        if(themeStylesheet.href.includes('index')){
            console.log('darkmode');
            themeStylesheet.href = './Style/darkIndex.css';
            themeToggle.innerText = 'Switch to light mode';
            document.getElementById('newSection').src="./Images/pira light.svg";
            document.getElementById('newSection1').src="./Images/pira light.svg";
            document.getElementById('newSection2').src="./Images/pira light.svg";
            document.getElementById('anchor').src="./Images/anchor light.svg";
            document.getElementById('corona').src="./Images/coronalight.svg";
            document.getElementById('immune').src="./Images/immunelight.svg";
            document.getElementById('pirate').src="./Images/piratelight.svg"
        } else {
            console.log('loghtmode');

            themeStylesheet.href = './Style/index.css';
            themeToggle.innerText = 'Switch to dark mode';
            document.getElementById('newSection').src="./Images/piranaha.svg";
            document.getElementById('newSection1').src="./Images/piranaha.svg";
            document.getElementById('newSection2').src="./Images/piranaha.svg";
            document.getElementById('anchor').src="./Images/anchor.svg";
            document.getElementById('corona').src="./Images/corona.png";
            document.getElementById('immune').src="./Images/immune.svg";
            document.getElementById('pirate').src="./Images/pirate.png" 
        }
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})