define(["dojo/_base/declare"],
    function (declare) {
        return declare(null, {
            mapServiceURL: null,
            layerIDs: null,
            selectedWardName: null,
            isDriveTimeLyrOpen: false,
            selectedAffordabilitylevel: null,
            selectedAffordabilityDesc: null,
            tiledMapService: null,


            constructor: function (options) {
                // specify class defaults
                this.mapServiceURL = "http://uat.onemap.sg/arcgis/rest/services/SampleMapService/MapServer/";
                this.layerIDs = {
                    "wardLayer": "0",
                    "af_1": "1",
                    "af_2": "2",
                    "af_3": "3",
                    "af_4": "4"
                }; //af_1, ..,af_4 are drive time polygons corresponding to the Affordability levels
                this.tiledMapService = "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
            },

            getDriveTimeLayerURL: function () {
                return this.mapServiceURL + this.layerIDs[this.selectedAffordabilitylevel];
            },

            getWardLayerURL: function () {
                return this.mapServiceURL + this.layerIDs["wardLayer"];
            }


        });
    }
);
