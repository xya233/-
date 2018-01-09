function randomData() {
    return Math.round(Math.random()*400);
}
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
            },
            data:[
                {name: '北京',value: randomData() },
                {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: randomData() },
                {name: '新疆',value: randomData() },
                {name: '江苏',value: randomData() },
                {name: '浙江',value: randomData() },
                {name: '江西',value: randomData() },
                {name: '湖北',value: randomData() },
                {name: '广西',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '山西',value: randomData() },
                {name: '内蒙古',value: randomData() },
                {name: '陕西',value: randomData() },
                {name: '吉林',value: randomData() },
                {name: '福建',value: randomData() },
                {name: '贵州',value: randomData() },
                {name: '广东',value: randomData() },
                {name: '青海',value: randomData() },
                {name: '西藏',value: randomData() },
                {name: '四川',value: randomData() },
                {name: '宁夏',value: randomData() },
                {name: '海南',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() }
            ]
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
        option.series[1].layoutCenter = ['57%','50%'];
        option.series[1].layoutSize = 900;
        mapChart.setOption(option);
        }
});