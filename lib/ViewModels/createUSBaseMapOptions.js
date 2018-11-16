'use strict';

/*global require*/
var ArcGisMapServerCatalogItem = require('terriajs/lib/Models/ArcGisMapServerCatalogItem');
var BaseMapViewModel = require('terriajs/lib/ViewModels/BaseMapViewModel');

var createUSBaseMapOptions = function(terria) {
    var result = [];

    var usaTopo = new ArcGisMapServerCatalogItem(terria);
    usaTopo.url = 'http://services.ga.gov.au/gis/rest/services/NationalMap_Colour_Topographic_Base_World_WM/MapServer';
    usaTopo.opacity = 1.0;
    usaTopo.isRequiredForRendering = true;
    usaTopo.name = 'USA Topography';
    usaTopo.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/usa-topo.png'),
        catalogItem: usaTopo,
        contrastColor: '#000000'
    }));

    return result;
};

module.exports = createUSBaseMapOptions;
