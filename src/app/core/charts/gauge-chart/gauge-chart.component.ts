import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChartFour', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Yellow', 'Green'],
        datasets: [
          {
            data: [12, 19, 3],
            backgroundColor: ['#CF6E6D', '#FFCE2B', '#56BA6F'],
          },
        ],
      },

      options: {
        plugins: { legend: { display: false } },
        rotation: 270,
        circumference: 180,
        responsive: true,
        maintainAspectRatio: false,
        cutout: 120,
        aspectRatio: 1,
      },
    });
  }
}
