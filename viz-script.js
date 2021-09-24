
$(document).ready(function(){
    $(document).attr({"title":"iCoder | Visualizer | Compare"});
    $('.content').html(compareDivData());
    $('.compare').addClass('nav-active');
})
function openHome(element){
    location.replace('index.html');
}
function compareDivData(){
    return ` <div class="content-area" id="compareData">
    <div class="cf-bar bg-gr1">
        <input type="text" placeholder="Codeforces handle" id="user-handle">
        <button id="compare" class="ptr" onclick="plotUser()">Compare</button>
        <button id="removeLast" class="ptr" onclick="delUser()">Remove last</button>
    </div>
    
    <div class="graph-content">
    <div class="graph" id="rating" ></div>
    <div class="graph" id="performance" ></div>
    <div class="graph" id="total-tried" ></div>
    <div class="graph" id="total-solved" ></div>
    <div class="graph" id="total-unsolved" ></div>
    <div class="graph" id="solved-today" ></div>
    </div>
 
    </div>`;
}
function myStatsDivData(){
    return `<div class="content-area bg-f " id="myData">
    <div class="cf-bar bg-gr1">
           <input type="text"  placeholder="Your codeforces handle" id="myCf">
            <button class="psolve ptr" onclick="plotMe()" style="margin-left:10px;border:3px solid #edab30;padding: 8px 40px;">Plot</button>
           </div>
    <div class="graph-content">
    <div class="graph" id="myPerformance"></div>
        <div class="graph" id="myVerdicts"></div>
        <div class="graph" id="myLang"></div>
        <div class="graph" id="myTags"></div>
        <div class="graph" id="myLevels"></div>
        <div class="graph" id="myProbRatings"></div> 
        <div class="graph" id="unsolved"> </div>
    </div>
</div>`;
}
function maintenanceDivData(){
    return `  <div class="content-area bg-f " id="underMaintenance">         
    <div class="maintenance  bx-sd">
        <h1>Coming soon</h1>
        <h4>Please check back again...</h4>
    </div>
</div>`;
}
function openCompare(element){
   
        if($(this).hasClass('compare')){
            $('.nav-active').removeClass('nav-active');
                $(this).addClass('nav-active');
        }
        else{
            $('.sb-active').removeClass('sb-active');
            $(this).addClass('sb-active');
        }
        $('.content').html(compareDivData());
}
function openMyStats(element){

    if($(this).hasClass('myStats')){
        $('.nav-active').removeClass('nav-active');
            $(this).addClass('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        $(this).addClass('sb-active');
    }
    $('.content').html(myStatsDivData());
}
function openAboutUs(element){

    if($(this).hasClass('aboutUs')){
        $('.nav-active').removeClass('nav-active');
            $(this).addClass('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        $(this).addClass('sb-active');
    }
    $('.content').html(maintenanceDivData());
}
function LogOut(element){}
function signIn(element){}
function openMore(element){
 
    if($(this).hasClass('nav-link')){
        $('.nav-active').removeClass('nav-active');
            $(this).addClass('nav-active');
    }
    else{
        $('.sb-active').removeClass('sb-active');
        $(this).addClass('sb-active');
    }
    $('.content').html(maintenanceDivData());
   
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

