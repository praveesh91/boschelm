import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChartThree', {
      type: 'line',

      data: {
        labels: [
          '1 يناير',
          '5 يناير',
          '10 يناير',
          '15 يناير',
          '20 يناير',
          '25 يناير',
          '30 يناير',
        ],
        datasets: [
          {
            label: 'منتظرة',
            data: [28, 30, 27, 33, 35, 40, 45],
            borderColor: '#57BA6E',
            backgroundColor: '#57BA6E',
            tension: 0.8,
            pointRadius: 0,
          },
          {
            label: 'غير صحيح',
            data: [14, 21, 22, 24, 26, 25, 40],
            borderColor: '#B9B290',
            backgroundColor: '#B9B290',
            tension: 0.8,
            pointRadius: 0,
          },
          {
            label: 'صحيح',
            data: [22, 36, 38, 48, 42, 46, 35],
            borderColor: '#435A68',
            backgroundColor: '#435A68',
            tension: 0.8,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        aspectRatio: 1.5,
        plugins: {
          title: {
            color: '#000',
            display: true,
            text: 'توزيع عدد الحالات يوميا',
            font: { weight: 'bold', size: 16 },
            padding: { top: 20, bottom: 30 },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
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
