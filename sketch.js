let theta = 30;
let inc = 0.1;
let r= 50;
let numPoints = 20;
let rotation = 0;
let phi = 2.3;
function setup() {
  createCanvas(1000,800);
  frameRate(15);
  
}

function draw() {
	background(0);

	theta = rotation;
	

	//fill(phi*3,theta*3,theta*phi*6);
	
	// beginShape()
	
	// for(let i=0;i<numPoints;i++){
	// 	//vertex(width/2+r*cos(theta)*sin(r*phi),height/2+r*sin(theta)*cos(r*phi));
	// 	vertex(width/2+r*cos(theta),height/2+r*sin(theta));
		
	// 	theta+=inc;
	// };
	// endShape();
	scale(2);
	translate(-width/4,-height/4);
	for(let i=0;i<numPoints;i++){
		noStroke();



		if(sin(theta)> 0) {
			fill(random(255),random(255),random(255),random(100,200));
		}
		else{
			fill(100,100,100,random(100,0));
		}
		ellipse(width/2+r*cos(theta)*sin(r*phi)-20, height/2+ r*sin(theta)*cos(r*phi), r/3);
		ellipse(width/2+r*cos(theta)*sin(r*phi*-1)+20, height/2+ r*sin(theta)*cos(r*phi*-1), r/3);

	// stroke(0);
	// strokeWeight(3);
	console.log(sin(theta));
		if(sin(theta)< 0) {
			fill(random(255),random(255),random(255),random(0,100));
		}
		else{
			fill(100,100,100,random(100,0));
		}
		
		
		ellipse(width/2+r*2*cos(theta)*sin(r*phi), height/2 + r*2*sin(theta) * cos(r*phi), r*cos(100*phi));
		ellipse(width/2+r*2*cos(theta)*sin(r*phi*-1), height/2 + r*2*sin(theta) * cos(r*phi*-1), r*cos(100*phi));
		
		theta+=inc;
	};


	rotation +=0.1;
	phi+=0.001;
}
