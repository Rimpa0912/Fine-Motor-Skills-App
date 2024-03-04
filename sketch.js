var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sel = createSelect();
  sel.position(width-125,10);
  sel.option('Home Page');
  sel.option('Instructions')
  sel.option('First Game');
  sel.option('Second Game');
  sel.option('Third Game');
img = createImg('https://spectrumnews-web-assets.s3.amazonaws.com/wp-content/uploads/2020/08/12114525/MotorExplainer1120-1120x550.jpg'); // sets var for success image
   img.hide();


}

function draw() {
  let item= sel.value();
  
  if (item==('Home Page')  )
    { homePage();}
  else if (item==('Instructions'))
    {
      instructions();
    }
  else if (item== ('First Game'))
    {
    
      firstGamePage();
    }
   else if (item== ('Second Game') )
    {
      secondGamePage();
    }
   else if (item== ('Third Game') )
    {
      thirdGamePage();
    }

  image(img, width/2-250, width/2,500,200); 
 
  
}


function homePage ()
{
  background('teal');
  fill(200);
  rect(0, 0, width, 100);
  textSize(48);
  textFont("Segoe Script");
  textAlign(CENTER);
  fill('magenta')
  text ('fun Physical Therapy', width*0.5 ,80);
  fill('white')
  textFont("Comic Sans MS");
  textSize(25);
  textAlign(CENTER);
  text('"we like to bring the fun in therapy"', width*0.5, 180);
  fill('teal')
  strokeWeight(4);
  stroke(500);
  rect(210, 340, width/2+600, 50)
  strokeWeight(1)
  fill('white')
  textFont("Comic Sans MS");
  textSize(30);
  textAlign(CENTER);
  text('Get Started by navigating the drop down menu', width/2-50, 375);
  strokeWeight(0.5)
  fill('white')
  textFont('Dancing Script');
  textSize(20);
  textAlign(CENTER)
  text('Give us feedback!', 0, 0);

  stroke(126);
  
}


// method for instructions page

function instructions()
{
  background('purple');
  
  let but;
  but = createButton('click me to go to the game!');
  but.position(width/2,height/2);
  but.mousePressed(goPage);
  textSize(32);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('Instructions Page', width*0.5, 80);
  
  
  function goPage()
  {
    window.open('https://editor.p5js.org/pmantri/full/59b4ZPtdl');
  }
  
  
}


// method for first game page

function firstGamePage()
{
   background('purple');
 
  
  let but;
  but = createButton('click me to go to the game!');
  but.position(width/2,height/2);
  but.mousePressed(goPage);
   textSize(32);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('Ball Catching Game', width*0.5, 80);
  
  function goPage()
  {
    window.open("https://editor.p5js.org/pmantri/full/eLAQgxZ8D");

  }
  
  
}

// method for second game page

function secondGamePage()
{
  background('green');
  
  
  
  let but;
  but = createButton('click me to go to the game!');
  but.position(width/2,height/2);
  but.mousePressed(goPage);
  textSize(32);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('Button Clicking Game', width*0.5, 80);
  
  function goPage()
  {
    window.open("https://editor.p5js.org/pmantri/full/qEyUnxXsX");
}


}

// method for third game page


function thirdGamePage()
{
  background('teal');
 
  
  let but;
  but = createButton('click me to go to the game!');
  but.position(width/2,height/2);
  but.mousePressed(goPage);
   textSize(32);
  textFont('Comic Sans MS');
  textAlign(CENTER);
  text('Typing Game', width*0.5, 80);
  
  function goPage()
  {
    window.open("https://editor.p5js.org/pmantri/full/bhmeD3KBA");

  }
  


}

