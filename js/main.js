//menu ovladani
function myFunction() {
    console.log('CLICKED');
    switcher('topnav','responsive');
    switcher('menu-toggle','open');
}
//funkce pro prepnuti menu vyzadujici tridu/id elementu a pridanou tridu - uvodni trida a id elemntu se shoduji
function switcher(target,addition){
    var x = document.getElementById(target);
    if (x.className === target) {
        x.className += " "+addition;
        console.log('menu open animation');
    } else {
        x.className = target;
        console.log('button close');
    }
}
// menu ovladani end

