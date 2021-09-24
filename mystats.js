var myContestPerformance=[];
var allProblems=[],verdict=[],verdictCnt=[],lang=[],langCnt=[],tags=[],tagsCnt=[],levels=[],levelsCnt=[],probRating=[],probRatingCnt=[];
var tried= new Map();


const  myLayout1={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My performance",
    titlefont:{
      size:18,
      color: "#ffd586bf",
    },
    xaxis: {
        title:"Contests",
        titlefont:{
            size: 16,
            color: "#ffd586bf",
        },
        tickfont: {
        size: 14,
        color: "#587995",
      },
      showgrid:false,
      showticklabels: false,
    },
    yaxis: {
      title: 'Ratings',
      titlefont: {
        size: 16,
        color: "#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      showline:false,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'none',
      bordercolor:"#587995",
    },
}
var layoutpi = {
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My verdicts",
    titlefont:{
      size:18,
      color: "#ffd586bf",
    },   
    textfont: {
        size: 18,
        color:"#587995",
      },
      showlegend:false,
};
var layoutpi1 = {
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My languages",
    titlefont:{
      size:18,
      color:"#587995",
    },
    legend: {
        x: 1,
        y: 0,
        traceorder: 'normal',
        font: {
          family: 'sans-serif',
          size: 14,
          color:"#587995",
        },
      }
    
};
var layoutpi3 = {
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My Tags",
    titlefont:{
      size:18,
      color: "#ffd586bf",
    },
    textfont: {
        size: 18,
        color:"#587995",
      },
      annotations:{
        font: {
            size: 20
          },
          showarrow: false,
         
          x: 0.17,
          y: 0.5
      },
      legend: {
        x: 1,
        y: 0,
        traceorder: 'normal',
        font: {
          family: 'sans-serif',
          size: 14,
          color:"#587995",
        },
      }
};
const  layout_Levels={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My Levels",
    titlefont:{
      size:18,
      color: "#ffd586bf",
    },
    xaxis: {
        title:"Levels",
        titlefont:{
            size: 16,
            color: "#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of problems solved",
      titlefont: {
        size: 16,
        color: "#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
const  layout_probRatings={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"My Problem Ratings",
    titlefont:{
      size:18,
      color: "#ffd586bf",
    },
    xaxis: {
        title:"",
        titlefont:{
            size: 16,
            color: "#ffd586bf",
        },
        tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of problems solved",
      titlefont: {
        size: 16,
        color: "#ffd586bf",
      },
      tickfont: {
        size: 14,
        color:"#587995",
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor:"#587995",
      bordercolor:"#587995",
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
function getProblemURL(problemData){
    if(problemData.contestId.toString().length>4) return visitURL+"/problemset/gymProblem/"+problemData.contestId+"/"+problemData.index;
    else return visitURL+"contest/"+problemData.contestId+"/problem/"+problemData.index;
  }
function solveMe(link){
  open(link.id);
}
async function getMyData(handle){
   
    const ratings= await getapi(`https://codeforces.com/api/user.rating?handle=${handle}`);
    const ProblemResponse= await getapi(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000000`);
    var nameC=[],ratingC=[];
    ratings['result'].forEach(element =>{
        nameC.push(element.ratingUpdateTimeSeconds);
        ratingC.push(element.newRating);
    })
    var perArr=[];
    perArr.push({
        x:nameC,
        y:ratingC,
        type:'scatter',
        mode:"lines+markers",
            name:handle,
            line:{
              width:2,
              color:"#587995",
            },
            hovertemplate: `<i>user</i>: ${handle}<br><b>rating</b>: %{y}<br>`,
    })
     
    Plotly.newPlot('myPerformance', perArr,myLayout1,config);
    const apiData= await getapi(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000000`);
    allProblems=apiData['result'];
    var verTemp = new Map();
    var langTemp = new Map();
    var tagsTemp = new Map();
    var levelsTemp = new Map();
    var probRatingsTemp = new Map();
     allProblems.forEach(problem=>{
       
         if(verTemp.has(problem.verdict)){
            var aa=parseInt(verTemp.get(problem.verdict));
            aa+=1;
          
           verTemp.set(problem.verdict,parseInt(aa));
         }
         else{
            verTemp.set(problem.verdict,parseInt(1));
         }
         if(langTemp.has(problem.programmingLanguage)){
            var aa=parseInt(langTemp.get(problem.programmingLanguage));
            aa+=1;
            
           langTemp.set(problem.programmingLanguage,parseInt(aa));
         }
         else{
            langTemp.set(problem.programmingLanguage,parseInt(1));
         }
    
     
      const id=problem.problem.contestId + problem.problem.index;
      if(tried.has(id)){
         if(tried.get(id).verdict=='OK'){}
         else{
             if(problem.verdict=='OK') tried.set(id,{data:problem.problem,verdict:"OK"});
         }
      }
      else{ tried.set(id,{data:problem.problem,verdict:problem.verdict}); }
     });

     var unsolvedHTML=`<table class="nv-font">
<tr>
   <th class="pname" colspan="2">Unsolved problems of ${handle}</th>
   <th colspan="2">rating</th>
   
</tr>
<tr class="separator"></tr>`;
     tried.forEach(function(value,key){
        if(value.verdict=='OK'){
            value.data.tags.forEach(tag =>{
                if(tagsTemp.has(tag)){
                    var aa=parseInt(tagsTemp.get(tag));
                    aa+=1; 
                   tagsTemp.set(tag,parseInt(aa));
                 }
                 else{
                    tagsTemp.set(tag,parseInt(1));
                 }
            });
            if(levelsTemp.has(value.data.index)){
                var aa=parseInt(levelsTemp.get(value.data.index));
                aa+=1; 
               levelsTemp.set(value.data.index,parseInt(aa));
             }
             else{
                levelsTemp.set(value.data.index,parseInt(1));
             }
             if(probRatingsTemp.has(value.data.rating)){
                var aa=parseInt(probRatingsTemp.get(value.data.rating));
                aa+=1; 
               probRatingsTemp.set(value.data.rating,parseInt(aa));
             }
             else{
                probRatingsTemp.set(value.data.rating,parseInt(1));
             }
               
        }
        else{
          var rating="--";
          if(value.data.rating!=null && value.data.rating!="")rating=value.data.rating;
            let link = getProblemURL(value.data);
            var tempLink=`<tr>
            <td >${value.data.index}</td>
            <td class="pname">${value.data.name}</td>
            <td>${rating}</td>
            <td>
            <button class="psolve ptr" id=${link} onclick="solveMe(this)">solve</button>
            </td>
            </tr>
            <tr class="separator"></tr>`;
            unsolvedHTML+=tempLink;
        }
       
    });
    unsolvedHTML+="</table>"
    $('#unsolved').html(unsolvedHTML);
     tagsTemp.forEach(function(value,key){
        tags.push(key);
        tagsCnt.push(value);
    })
    const levelsMap = new Map([...levelsTemp.entries()].sort());
    levelsMap.forEach(function(value,key){
        levels.push(key);
        levelsCnt.push(value);
    })
    probRatingsTemp.forEach(function(value,key){
        probRating.push(key);
        probRatingCnt.push(value);
    })
     
     verTemp.forEach(function(value,key){
        verdict.push(key);
        verdictCnt.push(value);
     });
     langTemp.forEach(function(value,key){
        lang.push(key);
        langCnt.push(value);
     });
var piData = [{
        values: verdictCnt,
        labels: verdict,
        type: 'pie',
        direction:'anticlockwise',
        textfont: {
            color:"#587995",
            size: 16,
          },
        textinfo: 'label',
        
      }];
var piDataLang = [{
        values: langCnt,
        labels: lang,
        type: 'pie',
        direction:'clockwise',
        textfont: {
            color:"#587995",
            size: 16,
          },
        textinfo: 'none',
      
        
      }];
var piDataTags = [{
        values: tagsCnt,
        labels: tags,
        type: 'pie',
        hole:.4,
        direction:'clockwise',
        
        domain: {
            row: 0,
            column: 1
          },
        textfont: {
            color:"#587995",
            size: 14,
          },
        textinfo: 'none',
       
           
        },
        
      ];
var dataLevels = [
        {
          x: levels,
          y: levelsCnt,
          name:levels,
          marker:{
            color: "#587995",   
              line:{
                  width:0,
                  color:"#587995",
              },
          },
          type: 'bar'
        }
      ];
var dataProb = [
        {
          x: probRating,
          y: probRatingCnt,
          name:probRating,
          marker:{
            color: "#587995",
              line:{
                  width:0,
                  color:"#587995",
              },
          },
          type: 'bar'
        }
      ];
      Plotly.newPlot('myVerdicts',piData, layoutpi,config);
      Plotly.newPlot('myLang',piDataLang, layoutpi1,config);
      Plotly.newPlot('myTags',piDataTags, layoutpi3,config);
      Plotly.newPlot('myLevels',dataLevels, layout_Levels,config);
      Plotly.newPlot('myProbRatings',dataProb, layout_probRatings,config);
}

function plotMe(){
    const handle=document.querySelector('#myCf');   
        // function to fill all arrays
         getMyData(handle.value);
         
         $('#myData .graph-content').children().addClass('bx-sd');
         $('#compareData .graph-content').children().removeClass('bx-sd');
         handle.value="";
}