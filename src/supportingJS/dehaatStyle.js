/* ----------------------------Common style starts---------------------------- */
function zoomToFeature(e) {
 map.fitBounds(e.target.getBounds());
}

function highlight(e) {
 var layer = e.target;
 layer.setStyle({
  weight: 5,
  color: '#666',
  dashArray: '',
  fillOpacity: 0.7
 });
 layer.bringToFront();
 infoControl.update(layer.feature.properties);
}

/* ----------------------------Common style starts---------------------------- */

/* ----------------------------Primary farm segment style starts---------------------------- */
function styleFarmSegment() {
 return {
  weight: 1,
  opacity: 0.7,
  color: '#e600ac',
  dashArray: '3',
  fillOpacity: 0.1
 };
}

function onEachFarmSegment(feature, layer) {
 layer.on({
  mouseover: highlightFarmSegment,
  mouseout: resetFarmSegments,
  click: zoomToFeature
 });
}

function highlightFarmSegment(e) {
 var layer = e.target;

 layer.setStyle({
  weight: 5,
  color: '#666',
  dashArray: '',
  fillOpacity: 0.7
 });

 layer.bringToFront();
}

function resetFarmSegments(e) {
 farmSegementsLayer.resetStyle(e.target);
}
/* ----------------------------Primary farm segment style ends---------------------------- */

/* ----------------------------Area style starts---------------------------- */
function styleArea(feature) {
 return {
  fillColor: getAreaColor(feature.properties.FA_acre),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getAreaColor(property) {
 return property >= 3.0 ? '#006837' :
  property >= 2.0 ? '#31a354' :
  property >= 1.0 ? '#78c679' :
  property >= 0.5 ? '#c2e699' :
  '#ffffcc';
}

function onAreaEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetAreaHighlight,
  click: zoomToFeature
 });
}

function resetAreaHighlight(e) {
 areaLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Area style ends---------------------------- */

/* ----------------------------Frequency style starts---------------------------- */
function styleFrequency(feature) {
 return {
  fillColor: getFrequencyColor(feature.properties.Cropping_F),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getFrequencyColor(property) {
 return property == 3 ? '#810f7c' :
  property == 2 ? '#8856a7' :
  property == 1 ? '#8c96c6' :
  '#b3cde3';
}

function onFrequencyEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetFrequencyHighlight,
  click: zoomToFeature
 });
}

function resetFrequencyHighlight(e) {
 frequencyLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Frequency style ends---------------------------- */

/* ----------------------------Crop health style starts---------------------------- */
function styleHealthKharif(feature) {
 return {
  fillColor: getHealthKharifColor(feature.properties.Sep12_2018_CropHealth),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getHealthKharifColor(property) {
 return property == "80-100%" ? '#fef0d9' :
  property == "60-80%" ? '#fdcc8a' :
  property == "40-60%" ? '#fc8d59' :
  property == "20-40%" ? '#fdcc8a' :
  '#fef0d9';
}

function onHealthKharifEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetHealthKharifHighlight,
  click: zoomToFeature
 });
}

function resetHealthKharifHighlight(e) {
 healthKharifLayer.resetStyle(e.target);
 infoControl.update();
}

function styleHealthRabi(feature) {
 return {
  fillColor: getHealthRabiColor(feature.properties.Feb09_2019_CropHealth),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getHealthRabiColor(property) {
 return property == "80-100%" ? '#045a8d' :
  property == "60-80%" ? '#2b8cbe' :
  property == "40-60%" ? '#74a9cf' :
  property == "20-40%" ? '#bdc9e1' :
  '#f1eef6';
}

function onHealthRabiEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetHealthRabiHighlight,
  click: zoomToFeature
 });
}

function resetHealthRabiHighlight(e) {
 healthRabiLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Crop Health style ends---------------------------- */

/* ----------------------------Farm NDVI index style starts---------------------------- */
function styleNdviKharif(feature) {
 return {
  fillColor: getNdviKharifColor(feature.properties.Sep12_2018_NDVI),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getNdviKharifColor(property) {
 return property >= 0.7 ? '#980043' :
  property >= 0.6 ? '#dd1c77' :
  property >= 0.5 ? '#df65b0' :
  property >= 0.4 ? '#c994c7' :
  '#d4b9da';
}

function onNdviKharifEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetNdviKharifHighlight,
  click: zoomToFeature
 });
}

function resetNdviKharifHighlight(e) {
 ndviKharifLayer.resetStyle(e.target);
 infoControl.update();
}

function styleNdviRabi(feature) {
 return {
  fillColor: getNdviRabiColor(feature.properties.Feb09_2019_NDVI),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getNdviRabiColor(property) {
 return property >= 0.7 ? '#252525' :
  property >= 0.6 ? '#636363' :
  property >= 0.5 ? '#969696' :
  property >= 0.4 ? '#bdbdbd' :
  '#d9d9d9';
}

function onNdviRabiEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetNdviRabiHighlight,
  click: zoomToFeature
 });
}

function resetNdviRabiHighlight(e) {
 ndviRabiLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Crop Health style ends---------------------------- */