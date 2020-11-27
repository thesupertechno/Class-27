class Chain {
constructor(bodyA,bodyB) {
var Option={
bodyA: bodyA,
bodyB: bodyB,
length: 10,
stiffness: 0.04,
    
}
this.chain=Matter.Constraint.create(Option);
World.add(world,this.chain);    
}
display() {
var pointA=this.chain.bodyA.position 
var pointB=this.chain.bodyB.position
strokeWeight(8)
stroke("blue")
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}