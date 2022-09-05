let isDark = false;

function switchModes(){

    if (isDark === true){ /* set the page colours to light and change the button text to dark */
        console.log('am true')
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-03", "#0f8693");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false
    }

    else {
        console.log('am false') /* set the page colours to dark and change the buttont text to light */
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-03", "#193a3d");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true
    }
}
