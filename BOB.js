class bob
{
    constructor(x,y)
    {
        var options=
        {
            'restitution':0.7,
            'density':1.0,
            'friction':1.0
        }
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body)
     

        
    }
    display()
    {
        fill("brown")
        stroke("brown")
      ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,25,25)
    }

}