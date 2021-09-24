var allCfProblems=[];
var tagWiseproblems = new Map();
var ratingWiseProblems = new Map();
function getProblemURL1(problemData){
    if(problemData.contestId.toString().length>4) return visitURL+"/problemset/gymProblem/"+problemData.contestId+"/"+problemData.index;
    else return visitURL+"contest/"+problemData.contestId+"/problem/"+problemData.index;
  }
  function solveMe(link){
    open(link.id);
  }
  async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
    return data;
}

async function getProblems(){
   const prb= await getapi(`https://codeforces.com/api/problemset.problems`);
  allCfProblems=prb.result.problems;
}
getProblems();
function getProblemCard(data){
  var a=10;
  var tagsOfThis="";
  data.tags.every(element=>{
    tagsOfThis+=(element.toString());
    tagsOfThis+=", ";
  })
  tagsOfThis=tagsOfThis.slice(0,tagsOfThis.length-2);
  return `<div class="problem-card ">
  <div class="problem-name">${data.name}</div>
  <div class="problem-rating">${data.rating}</div>
  <div class="problem-tags">${tagsOfThis}</div>
  <button class="psolve ptr" id=${getProblemURL1(data)} onclick="solveMe(this)">Solve</button>
</div>  `;
}
async function getDesiredProb(ratingOfTheProblem,TagsOfTheProblem){
  document.querySelector('.card-container').innerHTML="";
   if(TagsOfTheProblem!="Add Tag"){
     if(ratingOfTheProblem>=800){
       const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
       const problemsOfGivenDetails=temp.result.problems;
       var cnt=0;
       problemsOfGivenDetails.every(element=>{
        if(element.rating==ratingOfTheProblem){
          document.querySelector('.card-container').innerHTML+=getProblemCard(element);
          cnt++;
        }
        if(cnt>50){return false;}
        else return true;
       })
       
     }
     else{
      const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
      const problemsOfGivenDetails=temp.result.problems;
      var cnt1=0;
      problemsOfGivenDetails.every(element=>{
     
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++;
     
       if(cnt>50){return false;}
       else return true;
      })
      
     }
   }
   else{
    if(ratingOfTheProblem>=800){
      
      var cnt=0;
      allCfProblems.every(element=>{
       if(element.rating==ratingOfTheProblem){
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++;
       }
       if(cnt>50){return false;}
       else return true;
      })
      
    }
    else{
      var cnt=0;
      allCfProblems.every(element=>{
       
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++;
         if(cnt>50){return false;}
         else return true;
      })
      
    }
   }
  
}
var aa=0;
function showProblems(){
  var tagg=document.querySelector("#selectTag");
  var ratingg=document.querySelector("#difficulty");
  getDesiredProb(parseInt(ratingg.value),tagg.value);
  
}