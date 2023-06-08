import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('Doughnut', {
      type: 'doughnut',
      data: {
        labels: ['منتظر تسجيل الحل', 'منتظرة للارسال', 'تم الحل'],
        datasets: [
          {
            data: [160, 40, 100],
            backgroundColor: ['#B9B391', '#537584', '#56BA6F'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: 90,
        aspectRatio: 0.95,
        maintainAspectRatio: false,
        plugins: {
          title: {
            color: '#000',
            display: true,
            text: 'توزيع الحالات الصحيحة',
            font: { weight: 'bold', size: 16 },
            padding: { top: 40, bottom: 40 },
          },
          legend: { display: false },
        },
      },
      plugins: [
        {
          id: 'text',
          beforeDraw: function (chart, a, b) {
            var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + 'em sans-serif';
            ctx.textBaseline = 'middle';

            var text = '200',
              textX = Math.round((width - ctx.measureText(text).width) / 1.25),
              textY = height / 1.5;

            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
    });
  }
}
