var Vector2 = function()
{
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
}

Vector2.prototype.set = function(x,y)
{
    this.x = x;
    this.y = y;
}

//Vector2.Prototype.CheckCollision = function(Vector2, a_other)
//{
    //{
        //return false
    //}
    //return true
//};

//Vector2.Prototype.Magnitude = function ()
//{
    //return Math.sqrt((x*x) + (y*y));
//}

//Vector2.Prototype.Normalized = function()
//{
    //this.ret = new Vector2();
   // ret.x = this.x / this.Magnitude();
    //ret.y = this.y / this.Magnitude();
    //return ret;
//}

//Vector2.Prototype.add = function(x, y)
//{
        //this.x = this.x + x;
        //this.y = this.y + y;
//}      
 
//Vector2.Prototype.subtract = function(x, y)
//{
        //this.x = this.x - x;
       //this.y = this.y - y;
//}
 
//Vector2.Prototype.multiply = function(x,y)
//{
        //this.x = this.x * x;
        //this.y = this.y * y;
//}

//vec2 = new Vector2();
//vec2.Set(5,4);