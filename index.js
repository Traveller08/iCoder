$(document).ready(function(){
   alert("Currently, only the following features are working \n 1.Codeforces \n 2.Visualizer \n 3.Practice \n Website will be fully operational soon :)");
})
function opennavRight(){
    $('#right-nav-viz').css({"width":"250px"});
 }
 function closenavRight(){ $('#right-nav-viz').css({"width":"0"});}
 function openLeft(){
     $('#left-nav-ic').css({"width":"250px"}); 
  }
  function closeLeft(){ $('#left-nav-ic').css({"width":"0"});}
  function openRight(){
     $('#right-nav-ic').css({"width":"250px"});
  }
  function closeRight(){ $('#right-nav-ic').css({"width":"0"});}
  function openPractise(){
     return `<div class="content-area bg-f" id="problem-area">
     <div class="problem-bar">   
         <input type="text" id="difficulty" name="diff" placeholder="difficulty (800-3500)">
         <select name="probTags" id="selectTag" class="ptr">
             <option value="Add Tag">Add Tag:</option>
             combine-tags-by-or
             <option value="combine-tags-by-or" title="*combine tags by OR">*combine tags by OR</option>
                 <option value="2-sat" title="2-satisfiability">2-sat</option>
                 <option value="binary search" title="Binary search">binary search</option>
                 <option value="bitmasks" title="Bitmasks">bitmasks</option>
                 <option value="brute force" title="Brute force">brute force</option>
                 <option value="chinese remainder theorem" title="Сhinese remainder theorem">chinese remainder theorem</option>
                 <option value="combinatorics" title="Combinatorics">combinatorics</option>
                 <option value="constructive algorithms" title="Constructive algorithms">constructive algorithms</option>
                 <option value="data structures" title="Heaps, binary search trees, segment trees, hash tables, etc">data structures</option>
                 <option value="dfs and similar" title="Dfs and similar">dfs and similar</option>
                 <option value="divide and conquer" title="Divide and Conquer">divide and conquer</option>
                 <option value="dp" title="Dynamic programming">dp</option>
                 <option value="dsu" title="Disjoint set union">dsu</option>
                 <option value="expression parsing" title="Parsing expression grammar">expression parsing</option>
                 <option value="fft" title="Fast Fourier transform">fft</option>
                 <option value="flows" title="Graph network flows">flows</option>
                 <option value="games" title="Games, Sprague–Grundy theorem">games</option>
                 <option value="geometry" title="Geometry, computational geometry">geometry</option>
                 <option value="graph matchings" title="Graph matchings, König's theorem, vertex cover of bipartite graph">graph matchings</option>
                 <option value="graphs" title="Graphs">graphs</option>
                 <option value="greedy" title="Greedy algorithms">greedy</option>
                 <option value="hashing" title="Hashing, hashtables">hashing</option>
                 <option value="implementation" title="Implementation problems, programming technics, simulation">implementation</option>
                 <option value="interactive" title="Interactive problem">interactive</option>
                 <option value="math" title="Mathematics including integration, differential equations, etc">math</option>
                 <option value="matrices" title="Matrix multiplication, determinant, Cramer's rule, systems of linear equations">matrices</option>
                 <option value="meet-in-the-middle" title="Meet-in-the-middle">meet-in-the-middle</option>
                 <option value="number theory" title="Number theory: Euler function, GCD, divisibility, etc">number theory</option>
                 <option value="probabilities" title="Probabilities, expected values, statistics, random variables, etc">probabilities</option>
                 <option value="schedules" title="Scheduling Algorithms">schedules</option>
                 <option value="shortest paths" title="Shortest paths on weighted and unweighted graphs">shortest paths</option>
                 <option value="sortings" title="Sortings, orderings">sortings</option>
                 <option value="string suffix structures" title="Suffix arrays, suffix trees, suffix automatas, etc">string suffix structures</option>
                 <option value="strings" title="Prefix- and Z-functions, suffix structures, Knuth–Morris–Pratt algorithm, etc">strings</option>
                 <option value="ternary search" title="Ternary search">ternary search</option>
                 <option value="trees" title="Trees">trees</option>
                 <option value="two pointers" title="Two pointers">two pointers</option>
         </select>
         <button class="psolve ptr" id="apply" onclick="showProblems()">Apply</button>
     </div>
     <div class="card-container">
              
     </div>                
 </div>`;
  }
  function openContests(){
     return `<div class="content-area bg-f" id="contest-area">
     <div class="problem-bar">   
        
         <select name="Selcontest" id="selectContest" class="ptr">
             <option value="Select contest">Select contest :</option>
                 <option value="Div 1" title="Div 1">Div. 1</option>
                 <option value="Div 2" title="Div 2">Div. 2</option>
                 <option value="Div 3" title="Div 3">Div. 3</option>
                 <option value="Div 4" title="Div 4">Div. 4</option>
                 <option value="Div 1 + Div 2" title="Div 1 + Div 2">Div. 1 + Div.2</option>
                 <option value="Educational" title="Educational">Educational</option>
                 <option value="Global" title="Global">Global</option>
                 <option value="Gym" title="Gym">Gym contests</option>
                 <option value="All contests" title="All contests">All contests</option>
         </select>
         <button class="psolve ptr" id="Search" onclick="showContests()">Search</button>
     </div>
     <div class="contest-data nv-font">
         <table id="contest-table">
              
         </table>
     </div>       
 </div>`;
  }
  function openMaintenance(){
     return `<div class="content-area bg-f " id="underMaintenance">         
     <div class="maintenance  bx-sd">
         <h1>Coming soon</h1>
         <h4>Please check back again...</h4>
     </div>
    </div>`;
  }
 $('.nav-link').click(function(){
   $('.content').html("");
    $('.nav-active').removeClass('nav-active');
    $(this).addClass('nav-active');
    if($(this).hasClass('homeN')){
        location.replace('index.html');
    }
    else if($(this).hasClass('codeforcesN')){
      $('.content').html(openContests());
    }
    else if($(this).hasClass('codechefN')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('visualizerN')){
       location.replace('visualizer.html')
   }
   else if($(this).hasClass('cpN')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('practiceN')){
      $('.content').html(openPractise());
   }
   else if($(this).hasClass('aboutusN')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('profileN')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('logoutN')){
      $('.content').html(openMaintenance());
   }
 });
 $('.rt-nv').click(function(){
   $('.content').html("");
   
    $('.sb-active').removeClass('sb-active');
    $(this).addClass('sb-active');
    if($(this).hasClass('homeS')){
        location.replace('index.html');
    }
    else if($(this).hasClass('codeforcesS')){
      $('.content').html(openContests());
    }
    else if($(this).hasClass('codechefS')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('visualizerS')){
       location.replace('visualizer.html')
   }
   else if($(this).hasClass('cpS')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('practiceS')){
      $('.content').html(openPractise());
   }
   else if($(this).hasClass('aboutusS')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('profileS')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('logoutS')){
      $('.content').html(openMaintenance());
   }
   else if($(this).hasClass('signinS')){
      $('.content').html(openMaintenance());
   }
   
 });
