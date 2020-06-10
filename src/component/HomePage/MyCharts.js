import React from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入图
import  'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/radar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import style from '../../css/myChart.module.scss';

class MyCharts extends React.Component{
    constructor(props){
        super(props);
    }
    //柱状图
    initBarChart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('barChart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '荣誉获奖',x:'center' },
            tooltip: {},
            xAxis: {
                data: ["2016", "2017", "2018", "2019"]
            },
            yAxis: {},
            series: [{
                name: '个数',
                type: 'bar',
                data: [1, 3, 5, 8],
                itemStyle: {
                    normal: {
                        // 随机显示
                        // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                        // 定制显示（按顺序）
                        color: function(params) {
                            var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                            return colorList[params.dataIndex]
                        }
                    },
                },
            }]
        });
    }
    //折线图
    initLineChart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('lineChart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '成绩趋势',x:'center' },
            tooltip: {},
            xAxis: {
                type:'category',
                data: ["大一上", "大一下", "大二上","大二下","大三上","大三下"]
            },
            yAxis: {
                type:'value',
            },
            series: [{
                name: '绩点',
                type: 'line',
                data: ["3.58", "4.07", "3.44","4.05","3.93","4.10"],
                color:['red']
            }]
        });
    }
    //饼状图
    initPieChart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('pieChart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '成绩分布' ,x:'center'},
            tooltip: {},
            series: [{
                name: '销量',
                type: 'pie',
                radius : '60%',
                center:['50%','50%'],
                data: [
                    {value:33,name:'优秀'},
                    {value:31,name:'良好'},
                    {value:5,name:'中等'},
                    {value:1,name:'及格'},
                    {value:0,name:'不及格'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 5,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        // 定制显示（按顺序）
                        color: function(params) {
                            var colorList = ['#C33531','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00'];
                            return colorList[params.dataIndex]
                        }
                    },
                }
            }]
        });
    }
    //雷达图
    initRadarChart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('radarChart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '技术使用' ,x:'center'},
            tooltip: {},
            radar: [
                {
                    indicator: (function (){
                        var res = [
                            {text:'安卓',max:100},
                            {text:'前端',max:100},
                            {text:'爬虫',max:100},
                            {text:'机器学习',max:100},
                            {text:'微信小程序',max:100},
                            {text:'大数据',max:100},
                        ];
                        return res;
                    })(),
                    center: ['50%','50%'],
                    radius: 90
                }
            ],
            series: [{
                type: 'radar',
                radarIndex: 0,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                    {
                        name: '熟练度',
                        value: [90,80,30,25,40,12],
                    },
                    {
                        name:'使用频率',
                        value:[60,70,25,60,10,80]
                    }
                ]
            }]
        });
    }
    //加载
    componentDidMount(){
        this.initBarChart();
        this.initLineChart();
        this.initPieChart();
        this.initRadarChart();
    }

    render() {

        let backAndTextColor = {
            width: '25%',
            height: 300
        };

        return(
            <div className={style.container}>
                <div id="lineChart" className={style.chart}></div>
                <div id="barChart" className={style.chart}></div>
                <div id="pieChart" className={style.chart}></div>
                <div id="radarChart" className={style.chart}></div>
            </div>
        )
    }
}
export default MyCharts;
