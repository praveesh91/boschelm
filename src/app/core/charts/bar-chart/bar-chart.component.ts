import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: ['حفرة', 'مخلفات بناء', 'مبنى قديم', 'طفح مياه', 'حفريات'],
        datasets: [
          {
            data: [115, 105, 90, 60, 50],
            barPercentage: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        backgroundColor: '#B9B290',
        aspectRatio: 0.9,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            color: '#000',
            text: 'توزيع حالات التلوث البصري حسب النوع',
            font: { weight: 'bold', size: 16 },
            padding: { top: 20, bottom: 50 },
          },
          legend: { display: false },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [8, 4],
              color: '#D7D6D7',
            },
          },
        },
      },
    });
  }
}
