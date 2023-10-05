<template>
    <div class='char-container' :style='{ "width": computedChartWidth }'>
        <dt>{{ title }}</dt>
        <div class='chart-outer-canvas flex flex-col w-full bg-teal-400'>

            <div class='canvas-middleman flex justify-center gap-1' :class='{ "flex-col": orientation === "v" }'>
                <div v-if='orientation === "h"' class='text-params-container'>
                    <p class='text-param' v-for=' param  in  textParams ' :key='param'>{{ param }}</p>
                </div>
                <div class='chart-inner-canvas flex'
                    :class='{ "flex-col": orientation === "h", "items-end": orientation === "v" }' :style='{
                        "background": orientation === "h" ? `repeating-linear-gradient(to right,
                    #ddd,
                    #ddd 1px,
                    #fff 1px,
                    #fff ${ruleWidth}%)` : `repeating-linear-gradient(to top,
                    #ddd,
                    #ddd 1px,
                    #fff 1px,
                    #fff ${5}%)`
                    }
                        '>

                    <div v-for=' param  in   numericParams  ' :key='param' class="bar-container relative flex"
                        :style='orientation === "h" ? { "height": "23px", "align-items": "center" } : { width: "23px", "align-items": "start", justifyContent: "flexend" }'>

                        <span :class='orientation === "h" ? "fill" : "fill-v"' :style='orientation === "h" ? { width: `${chartWidth / max * param}px` } :
                            { height: `${chartWidth / max * param}px` }'>
                            <div v-if='type' class='data-container flex items-center relative' :class='{
                                "-right-3": type === "percent", "pr-2": type === ("percent" && orientation === "h")
                            }'>
                                <span v-if='type === "integer" && param > 0' class='chart-data'>{{ param }}</span>
                                <span v-if='type === "percent" && param > 0' class='chart-data data-percent'>{{ param /
                                    max
                                    * 100
                                }}%</span>
                            </div>
                        </span>

                    </div>

                </div>
                <div v-if='orientation === "v"' class='text-params-container w-full flex justify-between text-xs'
                    :class='{ "flex": orientation === "v" }'>
                    <p class='text-param -rotate-90' v-for='   param    in    textParams   ' :key='param'>{{ param }}</p>
                </div>
            </div>
        </div>
        <!--
        <div class='chart-outer-canvas flex flex-col w-full'>
            <div class='canvas-middleman flex justify-center gap-1'>
                <div class='text-params '>
                    <p class='text-param' v-for=' param  in  textParams ' :key='param'>{{ param }}</p>
                </div>
                <div class='chart-inner-canvas' :style='{
                    "background": `repeating-linear-gradient(to right,
                    #ddd,
                    #ddd 1px,
                    #fff 1px,
                    #fff ${ruleWidth}%)`
                }
                    '>
                    <div v-for=' param  in  numericParams ' :key='param' class="bar-container">
                        <span class='fill' :style='{ width: `${chartWidth / max * param}px` }'>
                            <div v-if='type' class='data-container flex items-center relative'
                                :class='{ "-right-3": type === "percent", "pr-2": type === "integer" }'>
                                <span v-if='type === "integer" && param > 0' class='chart-data'>{{ param }}</span>
                                <span v-if='type === "percent" && param > 0' class='chart-data data-percent'>{{ param / max
                                    * 100
                                }}%</span>
                            </div>
                        </span>

                    </div>
                </div>
            </div>
            <div class='flex w-full justify-end'>
                <p>max value: {{ max }}</p>
            </div>
        </div>
-->

    </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    props: ['title', 'data', 'textParams', 'numericParams', 'min', 'max', 'chartWidth', 'type', 'orientation'],
    setup(props) {
        const content = ref('Nothing here yet');
        const dataLength = ref(props.data.length);
        const computedChartWidth = computed(() => {
            if (!props.chartWidth) {
                return `${200 + (200 / 100 * 40)}px`
            }
            return `${props.chartWidth + (props.chartWidth / 100 * 40)}px`
        });

        const ruleWidth = computed(() => {
            return props.chartWidth / 16 / props.chartWidth * 100
        })
        return {
            content,
            dataLength,
            computedChartWidth,
            ruleWidth
        }

    }
}
</script>

<style scoped>
.char-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 95vw;
}

.bar-container {
    flex: 1;
}

.fill {
    background-color: #3d9970;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.fill-v {
    background-color: #b44c4c;
    width: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
}

.chart-outer-canvas {
    padding: 10px;
    background-color: white;
    display: flex;
}

.chart-inner-canvas {
    border-left-color: black;
    border-right-color: #ddd;
    border-left-width: 1px;
    border-right-width: 2px;
    border-bottom-color: black;
    border-bottom-width: 1px;
}

.chart-data {
    font-size: 8px;
    font-weight: 900;
}
</style>