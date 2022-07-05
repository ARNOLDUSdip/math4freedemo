var numbers = []; 


var areths = [];
var arethm = [];
var num = [1,2,3,4];

let page;

let logo;


let buttonregp0;
let buttonlogp0;
let buttoninfop0;

let buttonbackp1;
let buttonregp1;

let regname;
let regsurname;
let regage;
let reggrade;
let regschool;                 //dom vir regpage
let regpassword;
let regconfirmpassword;
let regemail;
let reggender;

let buttonlogin;
let buttonbacklogin;

let logpassword;
let logemail; 

let infobackground;
let imgolym, imgstats;

let regdomswitch = true;
let logdomswitch = true;
let homedomswitch = true;
let loggedinswitch = true;
let myentriesswitch = true;
let posentriesswitch = true;
let  infoswitch = true;

let butstatsloggedin;
let butlessonsloggedin;
let butmyentriesloggedin;
let butpossibleentriesloggedin;
let butbackloggedin;

let butproeftoets;
let butbackposentries;

let butproeftoetsdoen;
let butbackmyentries;

let tempemail = 'das';  ////////////////////////////////////////////////////////
let temppassword = 'das'; /////////////////////////////////////////////////////
let proeftoetsentered  = false;



let logcol, rate;

let arrregs,arrlinks;
let proeftoetsantwoorde = [];
let proeftoetsantwoordereg = []
let questions = [];
let proeftoetscurrent, proeftoetsscore;
let proeftoetsswitch = true;



function preload(){
   alert('Preload  begin');
   arethm[1] = loadImage('Assets/deel.png');
   arethm[2] = loadImage('Assets/maal.png');
   arethm[3] = loadImage('Assets/plus.png');
   arethm[4] = loadImage('Assets/minus.png');
  
  imgstats = loadImage('Assets/stats.png');
  imgolym = loadImage('Assets/olym.png');

  logo = loadImage('Assets/logo.jpeg');

  questions[0] = loadImage('Assets/vraag1.png');
  questions[1] = loadImage('Assets/vraag2.png');
  questions[2] = loadImage('Assets/vraag3.png');
  questions[3] = loadImage('Assets/vraag4.png');
  questions[4] = loadImage('Assets/vraag5.png');
  questions[5] = loadImage('Assets/vraag6.png');
  questions[6] = loadImage('Assets/vraag7.png');
  questions[7] = loadImage('Assets/vraag8.png');
  questions[8] = loadImage('Assets/vraag9.png');
  questions[9] = loadImage('Assets/vraag10.png');
  arrregs = loadImage('Assets/arrregs.png');
  arrlinks = loadImage('Assets/arrlinks.png');
  infobackground = loadImage('assets/infobackground.png');
alert('Preload  eindig');
}


function setup() { 
  alert('Setup  begin');
  createCanvas(windowWidth, windowHeight);
  noStroke();

  

  page = 'home';
 

  for (var i = 0; i < 50; i++) {
    var x = random(width - 200);
    var y = random(height);
    var s = random(1,2.5);
    var t = random(num);

    areths[i] = new Areth(x,y,t,s);
  } 

 
  
  

  for (var i = 0; i < 500; i++) {
    var x = random(width);
    var y = random(height);
    var d = random(20, 150);
    var c = color(0, random(25,150),0);
    var s = random(1, 4);
  	numbers[i] = new DrawNumber(x, y, d, c, s);
  }


  
alert('Setup einding');

} 

function draw() { 
  

   if (page == 'home') {
    
    if (homedomswitch == true ) {
   
      domhome();  //Onthou van p1 switch met back knoppie en die register een
      homedomswitch = false;
    
      }

 
    background(240);
    for (var i = 0; i < areths.length; i++) {
      areths[i].move();
      areths[i].display();
    }
    
   
    if (areths.length > 50) {
      areths.shift();
    }

    image(logo,width/2-200,height/4-200);

    
    
    


      
    

  }
  
 if (page == 'info'){
  if (infoswitch == true){
    dominfo();
    image(infobackground, 0, 0);
    infoswitch = false;
}
 }

  if (page == 'register') {
  background(0);
  
  if (regdomswitch == true ) {
   
  domreg();  //Onthou van p1 switch met back knoppie en die register een
  regdomswitch = false;

  }

 


   textSize(12);
  for (var i = 0; i < numbers.length; i++) {
  	numbers[i].move();
    numbers[i].display();
  }
  
 
  if (numbers.length > 500) {
  	numbers.shift();
  }

  fill(240);
  textSize(85);
  text("Register Information",width/2 - 400,100);

  textSize(20);
  fill(230);
  stroke(230);
  text("Name",width/2 - 350,195);     
  text("Surname",width/2 - 350,245);
  text("Age",width/2 - 350,295);
  text("Gender",width/2 - 350,335);
  text("School",width/2 - 350,385);
  text("Grade",width/2 - 350,430);
  text("Email",width/2 - 350,540);
  text("Password",width/2 - 350,590);
  text("Confirm Password",width/2 - 350,640);

  
  
  
  }

  if (page == 'login'){
    background(220);

    if (logdomswitch == true ) {
   
      domlog();  //Onthou van p1 switch met back knoppie en die register een
      logdomswitch = false;
    
      }

      
      image(logo,width/2-200,height/4-200);
      textSize(20);
      
      stroke(20);
      fill(20);
      text("Email",650,410);
      text("Password",650,460);

   

  }

  if (page == 'loggedin'){

    if (loggedinswitch == true){
        domloggedin();
        loggedinswitch = false;
        
        logcol = 100;
         rate = 0.5;
      

    }
    
    if (logcol > 200){
      rate = rate * -1;
     }
     
     if (logcol < 100){
         rate = rate * -1;
     }
     logcol = logcol + rate;
     background(50,150,logcol);

     

     strokeWeight(2);
     fill(220,240);
     rect(100,100,600,450);
     image(imgstats,240,225,300,300);
     rect(100,600,600,250);
     rect(850,100,450,750);
     rect(1350,100,450,750);
     image(imgolym,875,300,425,500);
     image(imgolym,1375,300,425,500);   
  
  
     strokeWeight(2);
     stroke(20);
     textSize(50);
     text("Stats",320,200);
     text("Lessons: Concepts",180,740);
     text("Possible Entries",1400,200);
     text("My entries",950,200);


    }

    if (page == 'myentries'){
      if (myentriesswitch == true){
        dommyentries();
        myentriesswitch = false;
       logcol = 100;
       rate = 0.5;
    }
    
      if (logcol > 200){
       rate = rate * -1;
      }
   
        if (logcol < 100){
         rate = rate * -1;
      }

      logcol = logcol + rate;
      background(logcol,255,255);

       fill(220);
       rect(100,100,600,700);

       if (proeftoetsentered == true){
         textSize(50);
         text('Do demo olympiad',200,200);
         text('Available: Now',200,270);

       }

       if (proeftoetsentered == false){
        textSize(30);
        text('No Olympiads currently entered',200,200);
        

       }


    }

    if (page == 'posentries'){
      if (posentriesswitch == true){
        domposentries();
        posentriesswitch = false;
        logcol = 150;
        rate = 0.25;
      }
       
      if (logcol > 200){
        rate = rate * -1;
       }
       
       if (logcol < 150){
           rate = rate * -1;
       }
  
       logcol = logcol + rate;

       background(50,logcol,255); 
       fill(220);
       rect(100,100,600,700);
       textSize(20);
       text('Demo Olympiad',200,200);
       text('Time limit: none',200,270);
       text('Number of Questions: 10', 200, 340);
       text('Completion time: none', 200, 410);
       
       
    }

    if (page =='proeftoetsdoen'){
     
      if (proeftoetsswitch == true){
        proeftoetsantwoordereg = [12,90,36,484,12,90,18,768,6,17];
        proeftoetscurrent = 0;   
        domproeftoetsbesig();
        proeftoetsswitch = false;
        
       }

       background(120);
      
       image(questions[proeftoetscurrent],510,150)
       image(arrregs,1220,700,50,50); 
       image(arrlinks,645,700,50,50);
       textSize(45);
       text(proeftoetscurrent + 1,520,205);

      
    }

 



}

function mousePressed() {
 
}



class Areth {
  constructor(x, y, t, s) {

    this.xPos = x;
    this.yPos = y;
    this.type = t;
    this.speed = s;
  }
  display() {
    
   DrawAreth(this.xPos,this.yPos,this.type);
    
  }
  move() {
    this.yPos += this.speed;
    if (this.yPos > height) {
      this.yPos = -1 * random(100,200);
    }
  }
}

function DrawAreth(x,y,t){
  
  image(arethm[t],x,y);

}



class DrawNumber {
  constructor(x, y, d, c, s) {

    this.xPos = x;
    this.yPos = y;
    this.number = d;
    this.color = c;
    this.speed = s;
  }
  display() {
    stroke(this.color);
    fill(this.color);
    number(this.xPos, this.yPos, this.number);
  }
  move() {
    this.yPos += this.speed;
    if (this.yPos > height) {
      this.yPos = -this.number;
    }
  }
}


function number(x, y, size) {
  text(random(0,9),x,y);
}

function domhome(){
  buttoninfop0 = createButton("Info"); 
  buttoninfop0.position(width/2 + 350 , height/2 - 100);
  buttoninfop0.size(500,300);
  buttoninfop0.style('font-size', '60px');
  buttoninfop0.style('background-color', color(0, 200, 255, 220));
  buttoninfop0.mousePressed(bclickinfo);

  buttonlogp0 = createButton("Login"); 
  buttonlogp0.position(width/2 -250, height/2 - 100);
  buttonlogp0.size(500,300);
  buttonlogp0.style('font-size', '60px');
  buttonlogp0.style('background-color', color(0, 200, 255, 220));
  buttonlogp0.mousePressed(bclicklog);

  buttonregp0 = createButton("Register"); 
  buttonregp0.position(width/2 - 850, height/2 - 100);
  buttonregp0.size(500,300);
  buttonregp0.style('font-size', '60px');
  buttonregp0.style('background-color', color(0, 200, 255, 220));
  buttonregp0.mousePressed(bclickreg);


}

function bclicklog(){
  page = 'login';
  homedomswitch = true;
  removeElements();

}
function bclickinfo(){
  page = 'info';
  homedomswitch = true;
  removeElements();
  
}
function bclickreg(){
  page = 'register';
  homedomswitch = true;
  removeElements();
  
}




function domreg(){

  regname = createInput('');
  regname.position(width/2 - 150,175);
  regname.size(300,25);
  regname.style('font-size','20px');

  regsurname = createInput('');
  regsurname.position(width/2 - 150,225);
  regsurname.size(300,25);
  regsurname.style('font-size','20px');

  regage = createInput('');                   
  regage.position(width/2 - 150,275);
  regage.size(300,25);
  regage.style('font-size','20px');

  reggender = createRadio();
  reggender.option('Male');
  reggender.option('Female');
  reggender.style('width','70px');
  reggender.style('color',color(200));
  reggender.position(width/2 - 150,315);

  regschool = createInput('');
  regschool.position(width/2 - 150,365);
  regschool.size(300,25);
  regschool.style('font-size','20px');

  reggrade = createRadio();
  reggrade.option('Grade 8');
  reggrade.option('Grade 9');
  reggrade.option('Grade 10');
  reggrade.option('Grade 11');
  reggrade.option('Grade 12');
  reggrade.style('width','90px');
  reggrade.style('color',color(200));
  reggrade.position(width/2-150,410);

  regemail = createInput('');
  regemail.position(width/2 - 150,520);
  regemail.size(300,25);
  regemail.style('font-size','20px');

  regpassword = createInput('','password');
  regpassword.position(width/2 - 150,570);
  regpassword.size(300,25);
  regpassword.style('font-size','20px');

  regconfirmpassword = createInput('','password');
  regconfirmpassword.position(width/2 - 150,620);
  regconfirmpassword.size(300,25);
  regconfirmpassword.style('font-size','20px');

  buttonbackp1 = createButton("Back"); 
  buttonbackp1.position(100 , 750);
  buttonbackp1.size(200,100);
  buttonbackp1.style('font-size', '60px');
  buttonbackp1.style('background-color', color(120));
  buttonbackp1.mousePressed(bclickbackp1);

  buttonregp1 = createButton("Register"); 
  buttonregp1.position(width/2 -150, 750);
  buttonregp1.size(300,100);
  buttonregp1.style('font-size', '60px');
  buttonregp1.style('background-color', color(120));
  buttonregp1.mousePressed(bclickregp1);


}

function bclickbackp1(){
  page = 'home';
  regdomswitch = true;
  removeElements();
}
function bclickregp1(){
  let regnamep1;
  let regsurnamep1;
  let regagep1;
  let reggenderp1;
  let regschoolp1;
  let reggradep1;
  let regemailp1;
  let regpasswordp1;
  let regpasswordconfrimp1;
  var fault;
  
 regnamep1 = regname.value();
 regsurnamep1 = regsurname.value();
 regagep1 = regage.value();
 reggenderp1 = reggender.value();
 regschoolp1 = regschool.value();
 reggradep1 = reggrade.value();
 regemailp1 = regemail.value();
 regpasswordp1 = regpassword.value();
 regpasswordconfrimp1 = regconfirmpassword.value();

 fault = false; 

 if (regnamep1 == '') {
  alert('Please enter a name');
   fault = true;
 }
 if (regsurnamep1 == '') {
   alert('Please enter a surname');
   fault = true;
 }
 if (regagep1 == '') {
   alert('Please enter an age');
   fault = true;   
 }
 if (reggenderp1 == '') {
   alert('Please enter a gender');
   fault = true;
 }
 if (regschoolp1 == '') {
   alert('Please enter a school');
   fault = true;
 }

 if (reggradep1 == '') {
   alert('Please enter a grade');
   fault = true;
 }

 if (regemailp1 == '') {
   alert('Please enter an email');
   fault = true;
 }

 if (regpasswordp1 == '') {
   alert('Please enter a password');
   fault = true;
 }
 if (regpasswordconfrimp1 == '') {
   alert('Please enter a confirm password');
   fault = true;
 }

 
 if (isNaN(regagep1)){
     alert('The age you entered is not an integer value');
     regage.value('');
     fault = true;
}

if (regpasswordp1 != regpasswordconfrimp1){
   alert('The first password does not match the second');
   regconfirmpassword.value('');
   fault = true;
 }



if (fault == false) {

 if (confirm("By clicking confirm, you confirm that this information is correct. If it is incorrect it may result in errors in the future. In which case you may need to contact support (See Info)")) {
   page = 'login';
   regdomswitch = true;
   removeElements();
   temppassword = regpasswordp1;
   tempemail = regemailp1;

 } else {
   regname.value('');
   regsurname.value(''); 
   regage.value(''); 
   reggrade.value('');
   regschool.value('');
   regpassword.value('');
   regconfirmpassword.value('');
   regemail.value('');
   reggender.value('');
 }


}
}

function domlog(){

  logpassword = createInput('','password');
  logpassword.position(width/2 - 200,435);
  logpassword.size(400,30);
  logpassword.style('font-size','25px');

  logemail = createInput('');
  logemail.position(width/2 - 200,385);
  logemail.size(400,30);
  logemail.style('font-size','25px');

  buttonlogin = createButton("Login");; 
  buttonlogin.position(width/2 - 100, 490);
  buttonlogin.size(200,50);
  buttonlogin.style('font-size', '30px');
  buttonlogin.style('background-color', color(180));
  buttonlogin.mousePressed(bclicklogin);

  buttonbacklogin = createButton("Back"); 
  buttonbacklogin.position(100 , 750);
  buttonbacklogin.size(200,100);
  buttonbacklogin.style('font-size', '60px');
  buttonbacklogin.style('background-color', color(120));
  buttonbacklogin.mousePressed(bclickbacklogin);

}

function bclicklogin(){
  let passwordtoets, emailtoets;
  passwordtoets = logpassword.value();
  emailtoets = logemail.value();


  if ((emailtoets == tempemail) && (passwordtoets == temppassword)){
    
    removeElements();
    logdomswitch = true;
    page = 'loggedin';



  }
  else {
  alert('Incorrect email or password, contact support for help');
  logpassword.value('');
  logemail.value('');

  }


}

function bclickbacklogin(){
  page = 'home';
  logdomswitch = true;
  removeElements();


}

function domloggedin(){
  buttonstatsloggedin = createButton("" );
  buttonstatsloggedin.position(100,100);
  buttonstatsloggedin.size(600,450);
  buttonstatsloggedin.style('background-color', color(0,0));
  buttonstatsloggedin.mousePressed(bclicklgdinstats);
  
  buttonlessonsloggedin = createButton(""); 
  buttonlessonsloggedin.position(100,600);
  buttonlessonsloggedin.size(600,250);
  buttonlessonsloggedin.style('background-color', color(0,0));
  buttonlessonsloggedin.mousePressed(bclicklgdinlessons);
 
  buttonmyentriesloggedin = createButton(""); 
  buttonmyentriesloggedin.position(850,100);
  buttonmyentriesloggedin.size(450,750);
  buttonmyentriesloggedin.style('background-color', color(0,0));
  buttonmyentriesloggedin.mousePressed(bclicklgdinmyentries);
  
  buttonpossibleentriesloggedin = createButton(""); 
  buttonpossibleentriesloggedin.position(1350,100);
  buttonpossibleentriesloggedin.size(450,750);
  buttonpossibleentriesloggedin.style('background-color', color(0,0));
  buttonpossibleentriesloggedin.mousePressed(bclicklgdinposentries);
 
  buttonbackloggedin = createButton("Back"); 
  buttonbackloggedin.position(100 , 900);
  buttonbackloggedin.size(150,50);
  buttonbackloggedin.style('background-color', color(120));
  buttonbackloggedin.style('font-size', '30px');
  buttonbackloggedin.mousePressed(bclicklgdinback);



}

function bclicklgdinlessons(){
 alert('Currently not available, still under developement');
  
}
function bclicklgdinstats(){
 alert('Currently no connection database, so stats are unavailable on this version of the website');

}
function bclicklgdinmyentries(){
  page = 'myentries';
  loggedinswitch = true;
  removeElements();

}
function  bclicklgdinposentries(){
  page = 'posentries';
  loggedinswitch = true;
  removeElements();
  
}
function  bclicklgdinback(){
  page = 'home';
  loggedinswitch = true;
  removeElements();
  
}

function dommyentries(){
  butproeftoetsdoen = createButton("" );
  butproeftoetsdoen.position(100,100);
  butproeftoetsdoen.size(600,700);
  butproeftoetsdoen.style('background-color', color(0,0));
  butproeftoetsdoen.style('border', color(0,0));
  butproeftoetsdoen.mousePressed(bclickproeftoetsdoen);

  butbackmyentries = createButton("Back"); 
  butbackmyentries.position(100 , 900);
  butbackmyentries.size(150,50);
  butbackmyentries.style('font-size', '30px');
  butbackmyentries.style('background-color', color(120));
  butbackmyentries.mousePressed(bclickbackmyentries);

}

function bclickbackmyentries(){
  page = 'loggedin';
  myentriesswitch = true;
  removeElements();

}


function bclickproeftoetsdoen() {
  if (proeftoetsentered == true){
    page = 'proeftoetsdoen';
    myentriesswitch = true;
    removeElements();

  }
  else {alert('There are no olympiads you are currently entered in');
}


}

function domposentries(){
  butproeftoets = createButton("" );
  butproeftoets.position(100,100);
  butproeftoets.size(600,700);
  butproeftoets.style('background-color', color(0,0));
  butproeftoets.mousePressed(bclickproeftoets);

  butbackmyentries = createButton("Back"); 
  butbackmyentries.position(100 , 900);
  butbackmyentries.size(150,50);
  butbackmyentries.style('font-size', '30px');
  butbackmyentries.style('background-color', color(120));
  butbackmyentries.mousePressed(bclickbackposentries);


  
}
function bclickproeftoets(){
  if (confirm('Do you want to enter? (No results will be stored due to their being no connection to the database, but you will see your result at the end)')) {
    page = 'loggedin';
    posentriesswitch = true;
    proeftoetsentered = true;
    removeElements();
  } 


}

function bclickbackposentries(){
  page = 'loggedin';
  posentriesswitch = true;
  removeElements();
}

function domproeftoetsbesig(){
  butsubmitproeftoets = createButton("Submit"); 
  butsubmitproeftoets.position(710 , 760);
  butsubmitproeftoets.size(500,50);
  butsubmitproeftoets.style('background-color', color(50));
  butsubmitproeftoets.style('font-size', '30px');
  butsubmitproeftoets.mousePressed(bclickproeftoetssubmit);
  
  butregsproeftoets = createButton(""); 
  butregsproeftoets.position(1220,700);
  butregsproeftoets.size(50,50);
  butregsproeftoets.style('background-color', color(0,0));
  butregsproeftoets.mousePressed(bclickregs);
  
  butlinksproeftoets = createButton(""); 
  butlinksproeftoets.position(645,700);
  butlinksproeftoets.size(50,50);
  butlinksproeftoets.style('background-color', color(0,0));
  butlinksproeftoets.mousePressed(bclicklinks);
  
  inpproeftoets = createInput('');
  inpproeftoets.position(705,698);
  inpproeftoets.size(500,50);
  inpproeftoets.style('font-size','20px');

  
  butexitproeftoets = createButton("Exit"); 
  butexitproeftoets.position(100 , 900);
  butexitproeftoets.size(150,50);
  butexitproeftoets.style('font-size', '30px');
  butexitproeftoets.style('background-color', color(120));
  butexitproeftoets.mousePressed(bclickexitproeftoets);


}

function bclickregs(){
  if (proeftoetscurrent == 9){
  }
  else {
    proeftoetscurrent = proeftoetscurrent + 1;
  }


}

function bclicklinks(){
  if (proeftoetscurrent == 0){

  }
  else {
    proeftoetscurrent = proeftoetscurrent -1;
  }


}

function bclickproeftoetssubmit(){
    if (proeftoetscurrent == 9){
       proeftoetsscore = 0;
      if (confirm('Do you want to finish, are you happy with all your results?')) {
        for (k = 0; k < 10; k++){
            if (proeftoetsantwoorde[k] == proeftoetsantwoordereg[k]){
              proeftoetsscore = proeftoetsscore +1;
              

            }
       
            
        }
        alert('Your score was: ' + proeftoetsscore + '/10');
        proeftoetsswitch = true;
        page = 'loggedin';
        removeElements();
        proeftoetsentered = false;

      } 



    }
        else {
       proeftoetsantwoorde[proeftoetscurrent] = inpproeftoets.value();
        inpproeftoets.value('');
        bclickregs();
      }

}

function bclickexitproeftoets(){
  
   if (confirm("Are you sure you want to exit? If you exit you won't be able to see your score and all data will be lost")) {
    
     proeftoetsswitch = true;
     page = 'loggedin';
     removeElements();
     proeftoetsentered = false;

   } 

     else {
    
   }

}

function dominfo(){
  butinfodonate = createButton("Donate"); 
  butinfodonate.position(360 , 450);
  butinfodonate.size(500,400);
  butinfodonate.style('background-color', color(50,100));
  butinfodonate.style('font-size', '30px');
  butinfodonate.mousePressed(bclickinfodonate);
  
  butinfosponsors = createButton("Sponsors"); 
  butinfosponsors.position(1060  ,450);
  butinfosponsors.size(500,400);
  butinfosponsors.style('background-color', color(50,100));
  butinfosponsors.style('font-size', '30px');
  butinfosponsors.mousePressed(bclickinfosponsors);

  butexitproeftoets = createButton("Back"); 
  butexitproeftoets.position(100 , 900);
  butexitproeftoets.size(150,50);
  butexitproeftoets.style('font-size', '30px');
  butexitproeftoets.style('background-color', color(120));
  butexitproeftoets.mousePressed(bclickinfoback);



}


function bclickinfodonate(){
    alert('Currently no way to donate');
}

function bclickinfosponsors(){
  alert('Before we approach sponsors, we want a seamlessly working product');
}

function bclickinfoback(){
     page = 'home';
     infoswitch = true;
     removeElements();

}
