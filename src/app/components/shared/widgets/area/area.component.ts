import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-widget-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

    chartOptions: {};
    Highcharts = Highcharts;

    @Input() data = [];

    constructor() { }

    ngOnInit(): void {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Sản lượng điện hàng năm theo 5 thành phần phụ tải'
            },
            subtitle: {
                text: 'PC Bà Rịa - Vũng Tàu'
            },
            xAxis: {
                categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'kWh'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                split: true,
                valueSuffix: ' kWh'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: this.data
        };

        HC_exporting(Highcharts);

        setTimeout(() => {
            window.dispatchEvent(
                new Event('resize')
            );
        }, 300);

    }

}
