<template>
    <div ref="qrcode"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import QRCodeStyling from "qr-code-styling";

export default {
  name: "StyledQrCode",
  props: {
    linkText: {type: String}
  },
  setup(props) {
    const qrcode = ref(null);
    
    onMounted(() => {
      const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        data: props.linkText, // 替换为固定字符串
        image: require('@/assets/asserts/trust_icon_Normal_black@2x.png'), // 替换为嵌入图片路径
        dotsOptions: {
          color: "#000000",
          type: "rounded", // 设置圆角矩形
        },
        cornersSquareOptions: {
          color: "#000000", // 定位外框颜色
          type: "extra-rounded", // 外框圆角样式
        },
        cornersDotOptions: {
          color: "#000000", // 定位内圆点颜色
          type: "rounded", // 内圆点样式
        },
        backgroundOptions: {
          color: "rgba(255,255,255,0.0)",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 10, // 控制中间图片的边距
        },
      });

      qrCode.append(qrcode.value);
    });

    return {
      qrcode,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
}
</style>