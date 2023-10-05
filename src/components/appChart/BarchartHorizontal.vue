<template>
    <div class='char-container' :style='{ "width": `${chartWidth + (chartWidth / 100 * 40)}px` }'>
        <dt>{{ title }}</dt>
        <div class='chart-outer-canvas flex flex-col w-full'>
            <div class='canvas-middleman flex justify-center gap-1'>
                <div class='y-params '>
                    <p class='y-param-text' v-for=' param  in  paramsY ' :key='param'>{{ param }}</p>
                </div>
                <div class='chart-inner-canvas' :style='{
                    "background": `repeating-linear-gradient(to right,
                    #ddd,
                    #ddd 1px,
                    #fff 1px,
                    #fff ${chartWidth / 16 / chartWidth * 100}%)`
                }
                    '>
                    <div v-for=' param  in  paramsX ' :key='param' class="bar-container">
                        <span class='fill' :style='{ width: `${chartWidth / max * param}px` }'>
                            <div v-if='type' class='data-container flex items-center pr-2'>
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

    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['title', 'data', 'paramsY', 'paramsX', 'min', 'max', 'chartWidth', 'type'],
    setup(props) {
        const content = ref('Nothing here yet');
        const dataLength = ref(props.data.length);

        console.log(props.chartWidth)

        return {
            content,
            dataLength
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
    height: 24px;
    display: flex;
    align-items: center;
    position: relative;
}

.fill {
    background-color: #3d9970;
    height: 20px;
    width: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
}
</style>