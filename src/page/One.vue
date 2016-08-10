<template>
    <div id="container"></div>
</template>

<script>
    export default {
        ready: function () {
            var map = new BMap.Map('container');
            var point = new BMap.Point(116.618261, 39.821984);
            map.centerAndZoom(point, 15); 
            var points =[
                {"lng":116.618261,"lat":39.821984,"count":5},
                {"lng":116.623332,"lat":39.816532,"count":81},
                {"lng":116.619787,"lat":39.830658,"count":15},
                {"lng":116.618455,"lat":39.820921,"count":40},
                {"lng":116.618843,"lat":39.815516,"count":100},
                {"lng":116.62546,"lat":39.818503,"count":6},
                {"lng":116.623289,"lat":39.819989,"count":18},
                {"lng":116.618162,"lat":39.815051,"count":80},
                {"lng":116.622039,"lat":39.81782,"count":11},
                {"lng":116.61387,"lat":39.817253,"count":6},
                {"lng":116.61773,"lat":39.819426,"count":42},
                {"lng":116.621107,"lat":39.816445,"count":4},
                {"lng":116.617521,"lat":39.817943,"count":87},
                {"lng":116.619812,"lat":39.820836,"count":83},
                {"lng":116.620682,"lat":39.81463,"count":60},
                {"lng":116.615424,"lat":39.824675,"count":8},
                {"lng":116.619242,"lat":39.814509,"count":15},
                {"lng":116.622766,"lat":39.821408,"count":85},
                {"lng":116.621674,"lat":39.824396,"count":81},
                {"lng":116.627268,"lat":39.82267,"count":1},
                {"lng":116.617721,"lat":39.820034,"count":51},
                {"lng":116.612456,"lat":39.82667,"count":6},
                {"lng":116.620432,"lat":39.819114,"count":11},
                {"lng":116.625013,"lat":39.821611,"count":15},
                {"lng":116.618733,"lat":39.831037,"count":82},
                {"lng":116.619336,"lat":39.831134,"count":4},
                {"lng":116.613557,"lat":39.823254,"count":5},
                {"lng":116.618367,"lat":39.82943,"count":1},
                {"lng":116.624312,"lat":39.819621,"count":100},
                {"lng":116.623874,"lat":39.819447,"count":87},
                {"lng":116.624225,"lat":39.823091,"count":12},
                {"lng":116.617801,"lat":39.821854,"count":44},
                {"lng":116.617129,"lat":39.828227,"count":81},
                {"lng":116.626426,"lat":39.822286,"count":80},
                {"lng":116.621597,"lat":39.81948,"count":12},
                {"lng":116.623895,"lat":39.820787,"count":86},
                {"lng":116.623563,"lat":39.821197,"count":17},
                {"lng":116.617982,"lat":39.822547,"count":17},
                {"lng":116.626126,"lat":39.821938,"count":85},
                {"lng":116.62326,"lat":39.815782,"count":100},
                {"lng":116.619239,"lat":39.816759,"count":19},
                {"lng":116.617185,"lat":39.829123,"count":11},
                {"lng":116.617237,"lat":39.827518,"count":9},
                {"lng":116.617784,"lat":39.815754,"count":47},
                {"lng":116.620193,"lat":39.817061,"count":52},
                {"lng":116.622735,"lat":39.815619,"count":100},
                {"lng":116.618495,"lat":39.815958,"count":46},
                {"lng":116.616292,"lat":39.831166,"count":9},
                {"lng":116.619916,"lat":39.824055,"count":8},
                {"lng":116.62189,"lat":39.821308,"count":11},
                {"lng":116.613765,"lat":39.829376,"count":1},
                {"lng":116.618232,"lat":39.820348,"count":50},
                {"lng":116.617554,"lat":39.830511,"count":15},
                {"lng":116.618568,"lat":39.818161,"count":83},
                {"lng":116.613461,"lat":39.826306,"count":1},
                {"lng":116.62232,"lat":39.82161,"count":13},
                {"lng":116.6174,"lat":39.828616,"count":6},
                {"lng":116.624679,"lat":39.815499,"count":81},
                {"lng":116.62171,"lat":39.815738,"count":89},
                {"lng":116.617836,"lat":39.816998,"count":99},
                {"lng":116.620755,"lat":39.828001,"count":10},
                {"lng":116.614077,"lat":39.830655,"count":14},
                {"lng":116.626092,"lat":39.822995,"count":16},
                {"lng":116.61535,"lat":39.831054,"count":15},
                {"lng":116.613022,"lat":39.821895,"count":13},
                {"lng":116.615551,"lat":39.813373,"count":17},
                {"lng":116.621191,"lat":39.826572,"count":1},
                {"lng":116.619612,"lat":39.817119,"count":9},
                {"lng":116.618237,"lat":39.821337,"count":54},
                {"lng":116.623776,"lat":39.821919,"count":86},
                {"lng":116.617694,"lat":39.82536,"count":17},
                {"lng":116.615377,"lat":39.814137,"count":19},
                {"lng":116.617434,"lat":39.814394,"count":43},
                {"lng":116.62588,"lat":39.822622,"count":87},
                {"lng":116.618345,"lat":39.819467,"count":8},
                {"lng":116.626883,"lat":39.817171,"count":1},
                {"lng":116.623877,"lat":39.816659,"count":14},
                {"lng":116.615712,"lat":39.815613,"count":14},
                {"lng":116.619869,"lat":39.831416,"count":12},
                {"lng":116.616956,"lat":39.825377,"count":11},
                {"lng":116.62066,"lat":39.825017,"count":18},
                {"lng":116.616244,"lat":39.820215,"count":91},
                {"lng":116.61929,"lat":39.815908,"count":54},
                {"lng":116.622116,"lat":39.819658,"count":81},
                {"lng":116.6183,"lat":39.825015,"count":15},
                {"lng":116.621969,"lat":39.813527,"count":1},
                {"lng":116.622936,"lat":39.821854,"count":84},
                {"lng":116.61905,"lat":39.829217,"count":12},
                {"lng":116.624579,"lat":39.814987,"count":57},
                {"lng":116.62076,"lat":39.815251,"count":60},
                {"lng":116.625867,"lat":39.818989,"count":8}
            ];
            var heatmapOverlay = new BMapLib.HeatmapOverlay({'radius':20});
            map.addOverlay(heatmapOverlay);
            heatmapOverlay.setDataSet({data:points,max:100});
            function openHeatmap(){
                heatmapOverlay.show();
            }
            openHeatmap();
            function setGradient(){
                var gradient = {};
                var colors = document.querySelectorAll("input[type='color']");
                colors = [].slice.call(colors,0);
                colors.forEach(function(ele){
                    gradient[ele.getAttribute('data-key')] = ele.value; 
                });
                heatmapOverlay.setOptions({'gradient':gradient});
            }
        }
    }
</script>

<style lang="sass">
    #container {
        width: 800px;
        height: 600px;
    }
</style>