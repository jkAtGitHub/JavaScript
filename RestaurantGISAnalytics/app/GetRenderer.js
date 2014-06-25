define([
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/renderers/SimpleRenderer",
    "esri/renderers/ClassBreaksRenderer",
    "dojo/_base/Color",
    "esri/symbols/PictureMarkerSymbol",
    "esri/graphic",
    "dojo/dom-style",
       ], function (
    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleRenderer,
    ClassBreaksRenderer,
    Color,
    PictureMarkerSymbol,
    Graphic,
    domStyle
) {

    //Define default symbology - Grey
    var defaultSymbol = new SimpleFillSymbol(
        SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_DASHDOT,
            new Color("#1F7A68"),
            1
        ),
        new Color([125, 125, 125, 0.2])
    );


    var highlightSymbol = new SimpleFillSymbol(
        SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([255, 0, 0]), 3
        ),
        new Color([125, 125, 125, 0.1])
    );


    return {

        getDefaultRenderer: function () {
            var defaultRenderer = new SimpleRenderer(defaultSymbol);
            return (defaultRenderer);
        },

        //Define highlight symbol - Red
        getClassBreakRenderer: function (selectedAffordabilityLevel) {
            var symbol = new SimpleFillSymbol();
            symbol.setColor(new Color([150, 150, 150, 0.2]));
            var renderer = new ClassBreaksRenderer(symbol, selectedAffordabilityLevel);
            renderer.addBreak(0, 20, new SimpleFillSymbol().setColor(new Color([56, 168, 0, 0.2])));
            renderer.addBreak(20, 40, new SimpleFillSymbol().setColor(new Color([139, 209, 0, 0.2])));
            renderer.addBreak(40, 60, new SimpleFillSymbol().setColor(new Color([255, 255, 0, 0.2])));
            renderer.addBreak(60, 80, new SimpleFillSymbol().setColor(new Color([255, 128, 0, 0.2])));
            renderer.addBreak(80, 100, new SimpleFillSymbol().setColor(new Color([255, 0, 0, 0.2])));

            return renderer;
        },

        getHighlightGraphic: function (objGeometry) {
            return (new Graphic(objGeometry, highlightSymbol));
        },

        getPinGraphic: function (objGeometry) {
            var infoSymbol = new PictureMarkerSymbol({
                "yoffset": 12,
                "type": "esriPMS",
                "url": "http://static.arcgis.com/images/Symbols/Basic/RedStickpin.png",
                "contentType": "image/png",
                "width": 24,
                "height": 24
            });

            return (new Graphic(objGeometry, infoSymbol));
        },
        getSymbol4DriveTimePolygon: function (val) {
            var returnSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color("#FF6200"), 2), getColor(val));

            function getColor(val) {
                if (val === 1) return (new Color([255, 0, 0, 0.2]));
                if (val === 3) return (new Color([255, 128, 0, 0.2]));
                if (val === 5) return (new Color([255, 255, 0, 0.2]));
                if (val === 7) return (new Color([139, 209, 0, 0.2]));
                if (val === 10) return (new Color([56, 168, 0, 0.2]));
                if (val === 0) return (new Color([56, 168, 0, 0.2]));
            }
            return returnSymbol;
        }

    };
});
