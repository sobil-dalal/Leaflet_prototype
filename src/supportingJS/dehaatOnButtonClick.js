/* ----------------------------Area - on button click page starts---------------------------- */
function onArea() {
  removeAllLayers();
  removeAllActive();
  document.getElementById('areaButton').classList.add('active');
  areaLayer.addTo(map);
  map.fitBounds(areaLayer.getBounds());
  areaControl.addTo(map);
  frequencyControl.addTo(map);
  healthControl.addTo(map);
  ndviControl.addTo(map);
  areaInfo();
  areaLegend();
  areaContainerSwitch();
}
/* ----------------------------Area - on button click page ends---------------------------- */

/* ----------------------------Frequency - on button click page starts---------------------------- */
function onFrequency() {
  removeAllLayers();
  removeAllActive();
  document.getElementById('frequencyButton').classList.add('active');
  frequencyLayer.addTo(map);
  map.fitBounds(frequencyLayer.getBounds());
  areaControl.addTo(map);
  frequencyControl.addTo(map);
  healthControl.addTo(map);
  ndviControl.addTo(map);
  frequencyInfo();
  frequencyLegend();
  frequencyContainerSwitch();
}
/* ----------------------------Frequency - on button click page ends---------------------------- */

/* ----------------------------Health - on button click page starts---------------------------- */
function onHealth() {
  removeAllLayers();
  removeAllActive();
  document.getElementById('cropHealthButton').classList.add('active');
  healthKharifLayer.addTo(map);
  map.fitBounds(healthKharifLayer.getBounds());
  areaControl.addTo(map);
  frequencyControl.addTo(map);
  healthControl.addTo(map);
  ndviControl.addTo(map);
  healthInfo();
  healthLegend();
  healthContainerSwitch();
}
/* ----------------------------Health - on button click page ends---------------------------- */

/* ----------------------------NDVI - on button click page starts---------------------------- */
function onNdvi() {
  removeAllLayers();
  removeAllActive();
  document.getElementById('farmNdviButton').classList.add('active');
  ndviKharifLayer.addTo(map);
  map.fitBounds(ndviKharifLayer.getBounds());
  areaControl.addTo(map);
  frequencyControl.addTo(map);
  healthControl.addTo(map);
  ndviControl.addTo(map);
  ndviInfo();
  ndviLegend();
  ndviContainerSwitch();
}
/* ----------------------------NDVI - on button click page ends---------------------------- */