import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [
          {
            label: 'Tag 1',
            backgroundColor: 'rgba(21,101,80,0.4)',
            borderColor: 'RGBA(21,101,80,0.9)',
            fill: true,
            data: [
              { x: 1, y: 10 },
              { x: 2500, y: 2.5 },
              { x: 3000, y: 15 },
              { x: 3400, y: 4.75 },
              { x: 3600, y: 20 },
              { x: 5200, y: 5 },
              { x: 6000, y: 7 },
            ],
          },
          {
            label: 'Tag 2',
            backgroundColor: 'RGBA(159,101,80,0.4)',
            borderColor: 'RGBA(159,101,80,0.9)',
            fill: true,
            data: [
              { x: 1, y: 10 },
              { x: 2500, y: 2.5 },
              { x: 3000, y: 5 },
              { x: 3400, y: 4.75 },
              { x: 3600, y: 4.75 },
              { x: 5200, y: 6 },
              { x: 6000, y: 9 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: '62626',
        },
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                userCallback: function (tick) {
                  if (tick >= 1000) {
                    return (tick / 1000).toString() + 'km';
                  }
                  return tick.toString() + 'm';
                },
              },
              scaleLabel: {
                labelString: 'Länge',
                display: true,
              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
              ticks: {
                userCallback: function (tick) {
                  return tick.toString() + 'm';
                },
              },
              scaleLabel: {
                labelString: 'Höhe',
                display: true,
              },
            },
          ],
        },
      },
    });
    myChart.data.datasets.push({
      label: 'Tag 3',
      backgroundColor: 'RGBA(159,101,200,0.4)',
      borderColor: 'RGBA(159,101,200,0.9)',
      fill: true,
      data: [
        { x: 1, y: 5 },
        { x: 2500, y: 10 },
        { x: 3000, y: 5 },
        { x: 3400, y: 10 },
        { x: 3600, y: 5 },
        { x: 5200, y: 10 },
        { x: 6000, y: 9 },
      ],
    });
    myChart.update();
  }
}
