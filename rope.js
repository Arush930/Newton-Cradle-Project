
class Chain {
    constructor(bodyA,pointB){
 var options = {
     bodyA:bodyA,
     pointB:pointB,
     length:200,
     stiffness:0.5
 }
 this.rope = Constraint.create(options)
 this.pointB=pointB
 World.add(world, this.rope)
 
    }
 display(){
 
 var pointA = this.rope.bodyA.position
 var pointB = this.pointB
 strokeWeight(3)
 stroke("black")
 line(pointA.x, pointA.y, pointB.x, pointB.y)
 
 }
 
 }