function PointCalculator(win,draw,loss)
{
  
    win=win*3;
    draw=draw*1;
    loss=loss*0;
    let gamePoint= win+draw+loss;
    return gamePoint;
}

let gamePoint=PointCalculator(3,4,2);
console.log("Your Score is " +gamePoint);