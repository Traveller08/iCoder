var allContests=[];
var div2="",div3="",div1="",global="",div4="",educational="",div1and2="",allc="",gym="";
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
    return data;
}
// description: "This is the only contest for testing Codeforces::Gym. As you participate in any other training, you guarantee that you solve problems without assistance and that you do not send other people's solutions."
// difficulty: 3
// durationSeconds: 7200
// frozen: false
// id: 100001
// kind: "Training Contest"
// name: "2010 Codeforces Beta Round #1 (training)"
// phase: "FINISHED"
// season: "2010-2011"
// type: "ICPC"
function getContestData(contest){
    return `<tr>
    <td style="text-align: left;">${contest.name}</td>
    <td style="text-align: right;"><button class="nsolve ptr" id="https://codeforces.com/contestRegistration/${contest.id}/virtual/true" onclick="solveMe(this)">Start Virtual</button></td>
    <td style="text-align: left;"><button class="psolve ptr" id="https://codeforces.com/contest/${contest.id}" onclick="solveMe(this)">Solve</button></td>
</tr>`;
}
function fillData(){
    allContests.forEach(element=>{
        if(element.name.includes('Educational')){
           educational+=getContestData(element);
       }
       else if(element.name.includes('Global')){
        global+=getContestData(element);
       }
       else if(element.name.includes('Div. 1 + Div. 2')){    
           div1and2+=getContestData(element);
       }
    else if(element.name.includes('Div. 1')){
         
         div1+=getContestData(element);
     }
     else if(element.name.includes('Div. 2')){
        
        div2+=getContestData(element);
    }
     else if(element.name.includes('Div. 3')){
        
        div3+=getContestData(element);
    }
     else if(element.name.includes('Div. 4')){
       
        div4+=getContestData(element);
    }
     allc+=getContestData(element);
    }); 
}
async function getAllContests(){
   const contests= await getapi(`https://codeforces.com/api/contest.list?gym=false`);
  allContests=contests.result;
  fillData();
}
getAllContests();
async function getAllGymContests(){
    const contests= await getapi(`https://codeforces.com/api/contest.list?gym=true`);
   contests.result.forEach(element=>{
       gym+=getContestData(element);
   })
 }
 getAllGymContests();

function showContests(){
    $('#contest-table').html("");
    const contestVal=document.getElementById('selectContest');
   
    if(contestVal.value=="Div 1"){
        $('#contest-table').html(div1);
    }
    else if(contestVal.value=="Div 2"){
        $('#contest-table').html(div2);
    }
    else if(contestVal.value=="Div 3"){
        $('#contest-table').html(div3);
    }
    else if(contestVal.value=="Div 4"){
        $('#contest-table').html(div4);
    }
    else if(contestVal.value=="Div 1 + Div 2"){
        $('#contest-table').html(div1and2);
    }
    else if(contestVal.value=="Educational"){
        $('#contest-table').html(educational);
    }
    else if(contestVal.value=="Global"){
        $('#contest-table').html(global);
    }
    else if(contestVal.value=="All contests"){
        $('#contest-table').html(allc);
    }
     else if(contestVal.value=="Gym"){
        $('#contest-table').html(gym);
    }

}