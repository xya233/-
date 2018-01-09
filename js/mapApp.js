var mapChart = echarts.init(document.getElementById('mapApp'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    visualMap: {
        min: 0,
        max: 400,
        text:['高','低'],
        calculable : true
    },
    animation: true,
    series: [
        {
            type: 'map',
            name: '省',
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            }
        }
    ],
};
var citySeries = {
    type: 'map',
    name: '市',
    map: '',
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    label: {
                emphasis: {
                    show: false
                }
            }
};
mapChart.setOption(option);
mapChart.on('click', function (param) {
    var selected = param['name'].trim();
    var series = param['seriesName'].trim();
    if (series == '省') {
        option.series[0].layoutCenter = [250,200];
        option.series[0].layoutSize = 400;
        option.series[1] = citySeries;
        option.series[1].mapType = selected;
        option.series[1].layoutCenter = ['60%','50%'];
        option.series[1].layoutSize = 900;
        mapChart.setOption(option);
        }
});