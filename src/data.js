const colors = ['#5470C6', '#EE6666'];

export const multipleLineChart = {
  colors: colors,
  tooltip: {
    trigger: 'none',
    axisPointer: { type: 'cross' },
  },
  legend: {},
  grid: { top: 70, bottom: 50 },
  xAxis: [
    {
      type: 'category',
      axisTick: { alignWithLabel: true },
      axisLine: {
        onZero: false,
        lineStyle: { color: colors[1] },
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
          },
        },
      },
      // prettier-ignore
      data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
    },
    {
      type: 'category',
      axisTick: { alignWithLabel: true },
      axisLine: {
        onZero: false,
        lineStyle: { color: colors[0] },
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
          },
        },
      },
      data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
    },
  ],
  yAxis: [{ type: 'value' }],
  series: [
    {
      name: 'Precipitation(2015)',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: { focus: 'series' },
      data: [10000, 59000, 40000, 10000, 20000, 70555, 40555, 50555, 60555, 70555, 80550, 90555],
    },
    {
      name: 'Precipitation(2016)',
      type: 'line',
      smooth: true,
      emphasis: { focus: 'series' },
      data: [10000, 29000, 10900, 15000, 25000, 65555, 30555, 35555, 45555, 15555, 21550, 23555],
    },
  ],
};

export const pieChart = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '2%',
    right: '20%',
    padding: '20',
    show: true,
    position: 'right',
    orient: 'horizental',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['80%', '100%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
};

export const lineHorizental = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [5000]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 4000]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 3000]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 3700]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 1000]
    }
  ]
}

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 10; i++) {
  xAxisData.push('A' + i);
  data1.push((Math.sin(i) * (i / 5 - 5) + i / 6) * 5);
  data2.push((Math.cos(i / 5) * (i / 5 - 5) + i / 6) * 5);
}

export const negativeValue = {
  title: {
    show: false,
    text: 'Bar Animation Delay'
  },
  legend: {
    data: ['bar', 'bar2']
  },
  toolbox: {
    // y: 'bottom',
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {},
      saveAsImage: {
        pixelRatio: 2
      }
    }
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    splitLine: {
      show: false
    }
  },
  yAxis: {},
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  }
}

export const tooManyLinesChart = {
  title: {
    show: false,
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      // stack: 'Total',
      data: [1020, 322, 101, 534, 290, 630, 310]
    },
    {
      name: 'Union Ads',
      type: 'line',
      // stack: 'Total',
      data: [620, 382, 491, 134, 290, 130, 610]
    },
    {
      name: 'Video Ads',
      type: 'line',
      // stack: 'Total',
      data: [750, 532, 601, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      // stack: 'Total',
      data: [820, 332, 701, 834, 290, 330, 520]
    },
    {
      name: 'Search Engine',
      type: 'line',
      // stack: 'Total',
      data: [420, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}