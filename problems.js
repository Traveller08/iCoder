var allCfProblems=[];
var curr_index=0;
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
function moreCard(){
  return `<div class="problem-card more-card" >
  <div class="material-icons-outlined more-icon ptr" onclick="showMoreProblems()">add_circle_outline</div>
</div>  `;
}
async function getDesiredProb(ratingOfTheProblem,TagsOfTheProblem){
  document.querySelector('.card-container').innerHTML="";
 var cnt=0;curr_index=0; 
  if(TagsOfTheProblem!="Add Tag"){
     if(ratingOfTheProblem>=800){
       const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
       const problemsOfGivenDetails=temp.result.problems; 
       problemsOfGivenDetails.every(element=>{
        if(element.rating==ratingOfTheProblem){
          document.querySelector('.card-container').innerHTML+=getProblemCard(element);
          cnt++; curr_index++;
        }
        if(cnt>50){return false;}
        else return true;
       })       
     }
     else{
      const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
      const problemsOfGivenDetails=temp.result.problems;    
         problemsOfGivenDetails.every(element=>{ 
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++; curr_index++;
       if(cnt>50){return false;}
       else return true;
      })     
     }
   }
   else{
    if(ratingOfTheProblem>=800){
      allCfProblems.every(element=>{
       if(element.rating==ratingOfTheProblem){
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++; curr_index++;
       }
       if(cnt>50){return false;}
       else return true;
      })     
    }
    else{
       allCfProblems.every(element=>{  
         document.querySelector('.card-container').innerHTML+=getProblemCard(element);
         cnt++; curr_index++;
         if(cnt>50){return false;}
         else return true;
      })
    }
   }
   document.querySelector('.card-container').innerHTML+=moreCard();
}
async function getMoreDesiredProb(ratingOfTheProblem,TagsOfTheProblem){
    document.querySelector('.more-card').remove();
   var cnt=0;var prev=curr_index;
   curr_index=0;
  
    if(TagsOfTheProblem!="Add Tag"){
       if(ratingOfTheProblem>=800){
         const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
         const problemsOfGivenDetails=temp.result.problems;   
         problemsOfGivenDetails.every(element=>{
          if(element.rating==ratingOfTheProblem){
            if(curr_index>=prev){
              document.querySelector('.card-container').innerHTML+=getProblemCard(element);
            cnt++; }
            curr_index++;
          }
          if(cnt>20){return false;}
          else return true;
         })         
       }
       else{
        const temp=await getapi(`https://codeforces.com/api/problemset.problems?tags=${TagsOfTheProblem}`)
        const problemsOfGivenDetails=temp.result.problems;    
        problemsOfGivenDetails.every(element=>{
          if(curr_index>=prev){
           document.querySelector('.card-container').innerHTML+=getProblemCard(element);
           cnt++; }
           curr_index++;       
         if(cnt>20){return false;}
         else return true;
        })
        
       }
     }
     else{
      if(ratingOfTheProblem>=800){   
        allCfProblems.every(element=>{

         if(element.rating==ratingOfTheProblem){
          if(curr_index>=prev){ 
            
            document.querySelector('.card-container').innerHTML+=getProblemCard(element);
           cnt++; }
           curr_index++;
         }
         if(cnt>20){return false;}
         else return true;
        })      
      }
      else{
            allCfProblems.every(element=>{   
          if(curr_index>=prev){ document.querySelector('.card-container').innerHTML+=getProblemCard(element);
           cnt++; }
           curr_index++;
           if(cnt>20){return false;}
           else return true;
        }) 
      }
     }
     curr_index=prev+curr_index;
     document.querySelector('.card-container').innerHTML+=moreCard();
  }
function showMoreProblems(){
  var tagg=document.querySelector("#selectTag");
  var ratingg=document.querySelector("#difficulty");
  getMoreDesiredProb(parseInt(ratingg.value),tagg.value);
}
function showProblems(){
  var tagg=document.querySelector("#selectTag");
  var ratingg=document.querySelector("#difficulty");
  getDesiredProb(parseInt(ratingg.value),tagg.value);
  
}