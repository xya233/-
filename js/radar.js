var radarChart = echarts.init(document.getElementById('radar'));
var radarOption = {
    title: {
        left: 'center',
        top: 'bottom',
        text: '雾霾成分雷达图'
        },
    radar: {
        indicator: [
            { name: 'so2', max: 6500},
            { name: 'co2', max: 16000},
            { name: 'co', max: 30000},
            { name: 'pm2.5', max: 38000},
            { name: 'pm10', max: 52000},
        ]
    },
    series: [
        {
            name: '雷达图',
            type: 'radar',
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000],
                    name : '北京'
                },
                {
                    value : [5000, 14000, 28000, 31000, 42000],
                    name : '上海'
                }
            ]
        }]
}
radarChart.setOption(radarOption);