<template>
    <div>
        <div class="circle" ref="circle"></div>
    </div>
</template>

<script>
import { TweenMax } from 'gsap';

export default {
    mounted() {
        document.addEventListener("mousemove", this.onMouseMove);
    },
    beforeDestroy() {
        document.removeEventListener("mousemove", this.onMouseMove);
    },
    methods: {
        onMouseMove(e) {
            const circleRadius = 150; // 丸の直径の半分
            const overflowAmount = 50; // はみ出す量

            let leftPosition = e.pageX - circleRadius;
            let topPosition = e.pageY - circleRadius;

            // 画面端でのはみ出しを防ぐ制約
            if (leftPosition + (2 * circleRadius) - overflowAmount > window.innerWidth) {
                leftPosition = window.innerWidth - (2 * circleRadius) + overflowAmount;
            }
            if (topPosition + (2 * circleRadius) - overflowAmount > window.innerHeight) {
                topPosition = window.innerHeight - (2 * circleRadius) + overflowAmount;
            }
            if (leftPosition < -overflowAmount) {
                leftPosition = -overflowAmount;
            }
            if (topPosition < -overflowAmount) {
                topPosition = -overflowAmount;
            }

            TweenMax.to(this.$refs.circle, 0.4, {
                left: leftPosition + "px",
                top: topPosition + "px"
            });
        }
    }

};
</script>





<style scoped>
.circle {
    width: 300px; /* 丸の直径 */ 
    height: 300px;
    background-color: transparent; /* 丸の色を白に変更 */ 
    position: absolute;
    border-radius: 50%;
    pointer-events: none; /* この要素をマウスのポインタイベントから除外 */ 
    mix-blend-mode: difference; /* 色の反転効果を追加 */
}

.circle::before {
    content: '';
    width: 310px; /* 赤丸よりも少し大きく */
    height: 310px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: difference;
    left: -10px; /* 中心に配置するための調整 */
    top: -10px;
    filter: blur(15px); /* 影のぼかし効果 */
    z-index: -1; /* 赤丸の背後に配置 */
}
</style>
