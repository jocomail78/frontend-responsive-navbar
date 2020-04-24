function toggleTheme(){
    var tt = document.getElementById("theme-toggler");
    if(tt){
        var fas = tt.getElementsByClassName('fas');
        if(fas){
            var hasDayMode = fas.item(0).classList.contains('fa-moon');
            console.log(hasDayMode);
            if(hasDayMode){
                setToNightMode();
            }else{
                setToLightMode();
            }
        }
    }
    
}

function setToLightMode(){
    document.getElementsByTagName("body").item(0).classList.remove("night-mode");
    document.getElementById("theme-toggler").getElementsByClassName('fas').item(0).classList.remove("fa-sun");
    document.getElementById("theme-toggler").getElementsByClassName('fas').item(0).classList.add("fa-moon");    
}

function setToNightMode(){
    document.getElementsByTagName("body").item(0).classList.add("night-mode");
    document.getElementById("theme-toggler").getElementsByClassName('fas').item(0).classList.remove("fa-moon");
    document.getElementById("theme-toggler").getElementsByClassName('fas').item(0).classList.add("fa-sun");    
}