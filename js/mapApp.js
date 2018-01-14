function randomData() {
    return Math.round(Math.random()*400);
}
var mapChart = echarts.init(document.getElementById('mapApp'));
var option = {
    baseOption: {
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
        timeline: {
            axisType: 'category',
            data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10']
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
            },
            {
                type: 'map',
                name: '市',
                map: '北京',
                layoutCenter: ['57%','50%'],
                layoutSize: 1,
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                label: {
                            emphasis: {
                                show: false
                            }
                        }
            }
        ],
    },
    options: [
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                },
                {
                    series: [
                        {
                            data: [
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
                    ]
                }
    ]
};
mapChart.setOption(option);
var flag = 0;
mapChart.on('click', function (param) {
    if (flag == 0) {
        var selected = param['name'].trim();
        var series = param['seriesName'].trim();
        if (series == '省') {
            option.baseOption.series[0].layoutCenter = [250,200];
            option.baseOption.series[0].layoutSize = 400;
            option.baseOption.series[1].map = selected;
            option.baseOption.series[1].layoutSize = 900;
            mapChart.setOption(option);
            flag = 1;
        }
    }
    else {
        series = param['seriesName'].trim();
        if (series == '省') {
            option.baseOption.series[0].layoutCenter = null;
            option.baseOption.series[1].layoutSize = 1;
            mapChart.setOption(option);
            flag = 0;
        }
    }
});