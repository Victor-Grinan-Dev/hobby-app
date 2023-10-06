<template>
    <div class='char-container' :style='{ "width": computedChartWidth }'>
        <dt>{{ title }}</dt>
        <div class='chart-outer-canvas flex flex-col w-full'>

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

                    <div v-for=' (param, index) in numericParams' :key='param' class="bar-container relative flex"
                        :style='barContainerStyle'>

                        <span class='bar-fill' :class='barFillClass' :style='barFillStyle(index, param)'>
                            <div v-if='type' class='data-container flex items-center relative' :class='{
                                "-right-3": type === "percent", "pr-2": type === ("percent" && orientation === "h")
                            }
                                '>
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
                    <p class='text-param -rotate-90' v-for='param in textParams' :key='param'>{{ param }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
export default {
    props: ['title', 'data', 'textParams', 'numericParams', 'max', 'colors', 'chartWidth', 'type', 'orientation'],

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
            return props.chartWidth / 16 / props.chartWidth * 100;
        });

        let iteration = 0;

        const designatedColor = (index) => {
            // let i;
            let finalColor;
            if (props.colors) {

                if (index < props.colors.length) {
                    finalColor = props.colors[index - (props.colors.length * iteration)];


                } else if (index >= (props.colors.length * iteration)) {
                    finalColor = props.colors[index - (props.colors.length * iteration)];
                }
                if (index - (props.colors.length * iteration) === (props.colors.length - 1)) {
                    iteration = iteration + 1;
                }

            }


            return finalColor;
        }

        const barContainerStyle = reactive(props.orientation === "h" ? { "align-items": "center" } : { "align-items": "start", justifyContent: "flexend" })
        const barFillClass = reactive(props.orientation === "h" ? { "fill-h": true } : { "fill-v": true });
        const barFillStyle = (index, param) => {
            return (props.orientation === "h" ? { width: `${props.chartWidth / props.max * param}px`, backgroundColor: designatedColor(index, param) } : { height: `${props.chartWidth / props.max * param}px`, backgroundColor: designatedColor(index, param) })
        };
        return {
            content,
            dataLength,
            computedChartWidth,
            ruleWidth,
            designatedColor,
            barContainerStyle,
            barFillClass,
            barFillStyle,

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

.bar-fill {
    position: relative;
}

.fill-h {
    background-color: ;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.fill-v {
    width: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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