export default class Snake{
	constructor(x,y,segments){
		this.body=[];
		for(var i=0;i<segments;++i){
			this.body.push({
				x:x - i,
				y:y
			})
		}
		this.direction = "right";
	}
	checkForConsumption(food){

	}
	update(){
		//did we smack a wall?
		//did we eat food?
		//did we eat ourselves?
		//do we need to grow?			
	}
	render(ctx){
		
		ctx.save();

		this.body.forEach(function(segment){
			ctx.fillStyle = "green";
			ctx.fillRect(segment.x ,segment.y,1,1);
		})
		
		ctx.restor();
	}
}