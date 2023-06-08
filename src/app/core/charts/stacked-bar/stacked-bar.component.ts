import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss'],
})
export class StackedBarComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChartTwo', {
      type: 'bar',
      data: {
        labels: [
          'غير محدد',
          'غير محدد',
          'ارسال للامانة',
          'راقب',
          'ابلاغ الشرطة',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [22, 68, 44, 10, 46, 84],
            barPercentage: 0.3,
            backgroundColor: '#56BA6F',
            order: 3,
            stack: 'stack1',
          },
          {
            label: 'Dataset 2',
            data: [15, 23, 37, 49, 32, 54],
            barPercentage: 0.3,
            backgroundColor: '#537584',
            order: 3,
            stack: 'stack1',
          },
          {
            label: 'Dataset 3',
            data: [15, 23, 23, 39, 12, 14],
            backgroundColor: '#B9B391',
            barPercentage: 0.3,
            order: 3,
            stack: 'stack1',
          },
        ],
      },
      options: {
        responsive: true,
        backgroundColor: '#B9B290',
        aspectRatio: 0.73,
        maintainAspectRatio: false,
        plugins: {
          title: {
            color: '#000',
            display: true,
            text: 'توزيع حالات التلوث البصري حسب النوع',
            font: { weight: 'bold', size: 16 },
            padding: { top: 20, bottom: 40 },
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
            stacked: true,
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
