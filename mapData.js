// GPS查询：http://www.gpsspg.com/maps.htm
// value:地图上标记点大小
// geoCoord:经纬度
// description:描述文字

var data = [
  {name: '溧阳', value: 30, description: '出生地', geoCoord:[31.43,119.48]},
  {name: '海门', value: 30, description: '2016年5月', geoCoord:[31.89,121.15]},
  {name: '盐城', value: 30, description: '2014年1月', geoCoord:[33.38,120.13]},
  {name: '青岛', value: 30, description: '2004年6月', geoCoord:[36.07,120.33]},
  {name: '南通', value: 30, description: '2015年5月', geoCoord:[32.08,121.05]},
  {name: '拉萨', value: 30, description: '2012年8月', geoCoord:[29.97,91.11]},
  {name: '上海', value: 30, description: '2015年6月至今', geoCoord:[31.22,121.48]},
  {name: '威海', value: 30, description: '2004年6月', geoCoord:[37.5,122.1]},
  {name: '太仓', value: 30, description: '2013年9月', geoCoord:[31.45,121.1]},
  {name: '曲靖', value: 30, description: '2012年8月', geoCoord:[25.51,103.79]},
  {name: '烟台', value: 30, description: '2004年6月', geoCoord:[37.52,121.39]},
  {name: '昆山', value: 30, description: '2013年9月', geoCoord:[31.39,120.95]},
  {name: '连云港', value: 30, description: '2014年2月', geoCoord:[34.59,119.16]},
  {name: '常熟', value: 30, description: '2014年6月', geoCoord:[31.64,120.74]},
  {name: '东莞', value: 30, description: '2014年4月', geoCoord:[23.04,113.75]},
  {name: '泰州', value: 30, description: '2014年4月', geoCoord:[32.49,119.9]},
  {name: '江阴', value: 30, description: '2015年10月', geoCoord:[31.91,120.26]},
  {name: '蓬莱', value: 30, description: '2004年6月', geoCoord:[37.8,120.75]},
  {name: '广州', value: 30, description: '2014年4月', geoCoord:[23.16,113.23]},
  {name: '中山', value: 30, description: '2014年4月', geoCoord:[22.52,113.38]},
  {name: '昆明', value: 30, description: '2012年8月', geoCoord:[25.04,102.73]},
  {name: '深圳', value: 30, description: '2014年4月', geoCoord:[22.62,114.07]},
  {name: '珠海', value: 30, description: '2015年11月', geoCoord:[22.3,113.52]},
  {name: '宿迁', value: 30, description: '2016年5月', geoCoord:[33.96,118.3]},
  {name: '佛山', value: 30, description: '2014年4月', geoCoord:[23.05,113.11]},
  {name: '大连', value: 30, description: '2016年2月', geoCoord:[38.92,121.62]},
  {name: '吴江', value: 30, description: '2013年6月', geoCoord:[31.16,120.63]},
  {name: '苏州', value: 30, description: '2012年6月-2015年6月', geoCoord:[31.32,120.62]},
  {name: '嘉兴', value: 30, description: '2015年6月', geoCoord:[30.77,120.76]},
  {name: '长春', value: 30, description: '2015年2月', geoCoord:[43.88,125.35]},
  {name: '张家港', value: 30, description: '2014年5月', geoCoord:[31.875428,120.555821]},
  {name: '成都', value: 30, description: '2016年9月', geoCoord:[30.67,104.06]},
  {name: '镇江', value: 30, description: '2014年9月', geoCoord:[32.2,119.44]},
  {name: '扬州', value: 30, description: '2016年10月', geoCoord:[32.39,119.42]},
  {name: '常州', value: 30, description: '2004年7月', geoCoord:[31.79,119.95]},
  {name: '重庆', value: 30, description: '2012年8月', geoCoord:[29.59,106.54]},
  {name: '南京', value: 30, description: '2000年7月', geoCoord:[32.04,118.78]},
  {name: '无锡', value: 30, description: '2000年7月', geoCoord:[31.59,120.29]},
  {name: '北京', value: 30, description: '2010年12月', geoCoord:[39.92,116.46]},
  {name: '徐州', value: 30, description: '2013年7月', geoCoord: [34.26,117.2]},
  {name: '乌鲁木齐', value: 30, description: '2013年7月', geoCoord: [43.77,87.68]},
  {name: '杭州', value: 30, description: '2014年3月', geoCoord: [30.26,120.19]},
  {name: '库尔勒', value: 30, description: '2013年7月', geoCoord: [41.68,86.06]},
  {name: '兰州', value: 30, description: '2013年7月', geoCoord: [36.03,103.73]},
  {name: '天津', value: 30, description: '2009年10月', geoCoord: [39.13,117.2]},
  {name: '哈尔滨', value: 30, description: '2015年2月', geoCoord: [45.75,126.63]},
  {name: '芜湖', value: 30, description: '2008年7月', geoCoord: [31.33,118.38]},
  {name: '乌苏市', value: 30, description: '2013年7月', geoCoord: [44.4355442184,84.6784851235]},
  {name: '博尔塔拉蒙古自治州',value: 30, description: '2013年7月', geoCoord: [44.9060359568,82.0667463183]},
  {name: '伊犁哈萨克自治州', value: 30, description: '2013年7月', geoCoord: [43.9168682735,81.3241299562]},
  {name: '阿克苏地区', value: 30, description: '2013年7月', geoCoord: [41.1684028952,80.2600596049]},
  {name: '阿拉尔市', value: 30, description: '2013年7月', geoCoord: [40.5479581186,81.2806416285]},
  {name: '喀什', value: 30, description: '2013年7月', geoCoord: [39.4737953871,75.9961366076]},
  {name: '九寨沟',  value: 30, description: '2016年9月', geoCoord: [33.1852083851,103.9266619002]},
  {name: '林芝',  value: 30, description: '2012年8月', geoCoord: [29.6489397505,94.3615310187]},
  {name: '八宿县',  value: 30, description: '2012年8月', geoCoord: [30.0531593399,96.9177959405]},
  {name: '左贡县',  value: 30, description: '2012年8月', geoCoord: [29.6708836080,97.8408117030]},
  {name: '迪庆藏族自治州',  value: 30, description: '2012年8月', geoCoord: [27.8190665939,99.7030265169]},
  {name: '丽江',  value: 30, description: '2012年8月', geoCoord: [26.8564702761,100.2270834766]},
  {name: '大理白族自治州',  value: 30, description: '2012年8月', geoCoord: [25.6064683680,100.2676255101]},
  {name: '黄山',  value: 30, description: '2014年10月', geoCoord: [30.1296038928,118.1749482771]},
  {name: '石台',  value: 30, description: '2012年6月', geoCoord: [30.2102766712,117.4861996608]},
  {name: '普吉岛', value: 30, description: '2017年10月', geoCoord: [7.96667,98.33333]},
  {name: '巴塞罗那', value: 30, description: '2018年5月', geoCoord:[41.3825,2.1769]}, 
  {name: '伦敦', value: 30, description: '2019年2月', geoCoord:[51.4993630000,-0.1399130000]},
  {name: '爱丁堡', value: 30, description: '2019年2月', geoCoord:[55.9482650000,-3.1990780000]},
  {name: '牛津', value: 30, description: '2019年2月', geoCoord:[51.7558560000,-1.2458030000]}, 
  {name: '巴斯', value: 30, description: '2019年2月', geoCoord:[51.3850790000,-2.3608540000]},
  {name: '舟山', value: 30, description: '2019年5月', geoCoord:[29.9853966468,122.2077802540]},
  {name: '西安', value: 30, description: '2019年8月', geoCoord:[34.3428162100,108.9351709400]},
  {name: '伊斯坦布尔', value: 30, description: '2019年9月', geoCoord:[41.0082380000,28.9783590000]},
  {name: '格雷梅', value: 30, description: '2019年 10月', geoCoord:[38.6422090000,34.8309400000]},
  {name: '卡什', value: 30, description: '2019年 10月', geoCoord:[36.2036260000,29.6403860000]},
  {name: '费特希耶', value: 30, description: '2019年 10月', geoCoord:[36.6592460000,29.1263470000]},
  {name: '塞尔丘克', value: 30, description: '2019年 10月', geoCoord:[37.9490100000,27.3695800000]},
  {name: '济州岛', value: 30, description: '2020年 1月', geoCoord:[33.4890120000,126.4983020000]},
  {name: '嵊泗岛', value: 30, description: '2020年 4月', geoCoord:[30.7029059500,122.5053519000]},
];
