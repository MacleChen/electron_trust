<template>
    <div class="chart-container">
      <canvas ref="bitcoinChart"></canvas>
      <!-- 时间范围按钮 -->
      <div class="button-container">
        <button @click="fetchAndRenderChart('1h')" :style="{backgroundColor: currentIndex == 0 ? '#eeeeef':'transparent'}">1H</button>
        <button @click="fetchAndRenderChart('1d')" :style="{backgroundColor: currentIndex == 1 ? '#eeeeef':'transparent'}">1D</button>
        <button @click="fetchAndRenderChart('1w')" :style="{backgroundColor: currentIndex == 2 ? '#eeeeef':'transparent'}">1W</button>
        <button @click="fetchAndRenderChart('1m')" :style="{backgroundColor: currentIndex == 3 ? '#eeeeef':'transparent'}">1M</button>
        <button @click="fetchAndRenderChart('1y')" :style="{backgroundColor: currentIndex == 4 ? '#eeeeef':'transparent'}">1Y</button>
        <button @click="fetchAndRenderChart('all')" :style="{backgroundColor: currentIndex == 5 ? '#eeeeef':'transparent'}">All</button>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, LineController } from 'chart.js';
  import axios from 'axios';
  import { ref } from 'vue';
  
  // 注册所有需要的模块
  Chart.register(LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);
  
  export default {
    name: 'BitcoinChart',
    props: {
        cryptoData: {type: String}
    },
    setup(props) {
        const currentIndex = ref(0)
        const mycryptoDict = ref(JSON.parse(props.cryptoData))

        return {
            currentIndex,
            mycryptoDict,
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.fetchAndRenderChart('1d');  // 默认加载1天的数据
      });
    },
    methods: {
      // 根据时间范围获取并渲染图表
      async fetchAndRenderChart(range) {
        const data = await this.getBitcoinData(range);
        if (data) {
          const timestamps = data.prices.map(item => item[0]);  // 时间戳
          const prices = data.prices.map(item => item[1]);  // 价格
  
          this.renderChart({
            timestamps,
            prices
          });
        }
      },
  
      // 根据时间范围请求比特币价格数据
      async getBitcoinData(range) {
        let url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=1`; // 默认获取1天的数据
  
        if (range === '1h') {
            this.currentIndex = 0
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=1`;
        } else if (range === '1d') {
            this.currentIndex = 1
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=1`;
        } else if (range === '1w') {
            this.currentIndex = 2
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=7`;
        } else if (range === '1m') {
            this.currentIndex = 3
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=30`;
        } else if (range === '1y') {
            this.currentIndex = 4
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=365`;
        } else if (range === 'all') {
            this.currentIndex = 5
          url = `https://api.coingecko.com/api/v3/coins/`+ this.mycryptoDict.id +`/market_chart?vs_currency=usd&days=max`;
        }
  
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error("Error fetching Bitcoin data", error);
          return null;
        }
      },
  
      // 渲染图表
      renderChart(data) {
        const canvas = this.$refs.bitcoinChart;
        if (canvas) {
          // 销毁旧的图表实例（如果存在）
          if (this.chart) {
            this.chart.destroy();
          }
          const ctx = canvas.getContext('2d');  // 获取上下文
          this.chart = new Chart(ctx, {
            type: 'line',  // 使用折线图
            data: {
              labels: data.timestamps,
              datasets: [{
                label: 'Bitcoin Price (USD)',
                data: data.prices,
                borderColor: this.mycryptoDict.percent >= 0 ? '#5eba89' : 'red',  // 设置折线颜色
                fill: false,  // 不填充折线下方区域
                tension: 0.8,  // 设置线条的平滑度，0 为直线，1 为最大平滑度
                pointBackgroundColor: 'rgb(75, 192, 192)',  // 设置点的背景颜色
                pointBorderColor: '#fff',  // 设置点的边框颜色
                pointRadius: 0,  // 隐藏数据点（不显示数据点）
                pointHoverRadius: 0,  // 悬停时也不显示数据点
                borderWidth: 2,  // 设置折线的宽度（增加该值可以使折线更粗）
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,  // 允许自适应宽度，避免比例问题
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                },
              },
              plugins: {
                legend: {
                  display: false,  // 隐藏图例
                },
                title: {
                  display: false,  // 隐藏标题
                },
                tooltip: {
                  enabled: false,  // 禁用工具提示（不显示坐标信息）
                }
              },
              scales: {
                x: {
                  type: 'linear',  // 使用线性坐标系
                  position: 'bottom',
                  display: false,  // 隐藏x轴
                  grid: {
                    display: false,  // 不显示网格线
                    offset: false,  // 去掉x轴占位
                  },
                  ticks: {
                    min: Math.min(...data.timestamps),  // 确保x轴从数据的最小值开始
                    max: Math.max(...data.timestamps),  // 确保x轴到数据的最大值
                    padding: 0,  // 去除x轴与图表之间的空白
                  },
                },
                y: {
                  beginAtZero: false,
                  display: false,  // 隐藏y轴
                  grid: {
                    display: false,  // 不显示网格线
                    offset: false,  // 去掉y轴占位
                  },
                  ticks: {
                    min: Math.min(...data.prices),  // 确保y轴从数据的最小值开始
                    max: Math.max(...data.prices),  // 确保y轴到数据的最大值
                    padding: 0,  // 去除y轴与图表之间的空白
                  }
                }
              }
            }
          });
        } else {
          console.error("Canvas element is not available.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 按钮容器，设置按钮在图表下方显示 */
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    margin: 0 5px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border: none;
    font-size: 14px;
    height: 30px;
    font-weight: bold;
    color: #21262f;
    border-radius: 5px;
    background-color: transparent; /* 默认背景为透明 */
  }
  
  button:hover {
    background-color: #ddd;
  }
  
  /* 图表容器 */
  .chart-container {
    width: 100%;
    height: 200px; /* 设置固定的高度 */
  }
  
  /* canvas 样式 */
  canvas {
    width: 100%;  /* 使 canvas 宽度填满父容器 */
    height: 100%; /* canvas 高度继承父容器的高度 */
    margin: 0; /* 去除默认的内外边距 */
  }
  </style>
  