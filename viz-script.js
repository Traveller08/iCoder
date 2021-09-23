
$(document).ready(function(){
    $(document).attr({"title":"iCoder | Visualizer | Compare"});
    document.querySelector('#compareData').style.display='block';
})
function openHome(element){
    location.replace('index.html');
}
function openCompare(element){
    document.querySelector('#underMaintenance').style.display='none';
        document.querySelector('#myData').style.display='none';
        $(document).attr({"title":"iCoder | Visualizer | Compare"});
        document.querySelector('#compareData').style.display='block';
        if(element.classList.contains('nav-link')){
            $('.nav-active').removeClass('nav-active');
                element.parentElement.classList.add('nav-active');
        }
        else{
            $('.sb-active').removeClass('sb-active');
            element.classList.add('sb-active');
        }
}
function openMyStats(element){
    document.querySelector('#underMaintenance').style.display='none';
    document.querySelector('#myData').style.display='block';
    $(document).attr({"title":"iCoder | Visualizer | My Stats"});
    document.querySelector('#compareData').style.display='none';
    if(element.classList.contains('nav-link')){
        $('.nav-active').removeClass('nav-active');
            element.parentElement.classList.add('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        element.classList.add('sb-active');
    }
}
function openAboutUs(element){
    
    document.querySelector('#myData').style.display='none';
    $(document).attr({"title":"iCoder | Visualizer | About us"});
    document.querySelector('#compareData').style.display='none';
    if(element.classList.contains('nav-link')){
        $('.nav-active').removeClass('nav-active');
            element.parentElement.classList.add('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        element.classList.add('sb-active');
    }
    document.querySelector('#underMaintenance').style.display='block';
}
function LogOut(element){}
function signIn(element){}
function openMore(element){
    document.querySelector('#myData').style.display='none';
    $(document).attr({"title":"iCoder | Visualizer "});
    document.querySelector('#compareData').style.display='none';
    if(element.classList.contains('nav-link')){
        $('.nav-active').removeClass('nav-active');
            element.parentElement.classList.add('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        element.classList.add('sb-active');
    }
    document.querySelector('#underMaintenance').style.display='block';
}

$('#user-handle').keypress(function (e) { 
     if(e.which==13){
         plotUser();
     }    
});
$('#myCf').keypress(function (e) { 
     if(e.which==13){
        plotMe();
     }    
});
function opennavRight(){
   $('#right-nav-viz').css({"width":"250px"});
}
function closenavRight(){ $('#right-nav-viz').css({"width":"0"});}

