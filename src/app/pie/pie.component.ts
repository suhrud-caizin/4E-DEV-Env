import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @ViewChild('canvas')
  canvas!: ElementRef;
   angles = [Math.PI,0.5*Math.PI,0.5*Math.PI];
   colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39'];
  
    beginAngle=0;
   
    endAngle=0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.draw();
      
    }, 0);
  }
draw()
{
  console.log(this.canvas.nativeElement.value);
 const cnv=this.canvas.nativeElement;
 console.log(cnv);
  const ctx = cnv.getContext("2d");
  console.log(ctx);
  for (let index = 0; index < this.angles.length; index++) {
    
      // Our angle
      var angle = this.angles[index];
      this.beginAngle=this.endAngle
      this.endAngle=this.beginAngle+angle;
      // Start a new path
      ctx.beginPath();
      ctx.fillStyle=this.colors[index % this.colors.length]
      // ctx.fillStyle= 'color:#E91E63';
     ctx.moveTo(200, 200);
      
      // Draw an Arc
      // arc(centerX, centerY, radius, angleStart, angleEnd)
      ctx.arc(200, 200, 120, this.beginAngle, this.endAngle);
      
      // Draw a line to close the pie slice
    ctx.lineTo(200, 200);
    
      
      // Print the path
      ctx.stroke();
      ctx.fill();
    }
  }

}
