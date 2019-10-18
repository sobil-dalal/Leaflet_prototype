// Remove all the leaflet layers
function removeAllLayers() {
  map.removeLayer(farmSegementsLayer);
  map.removeLayer(areaLayer);
  map.removeLayer(area_F1_layer);
  map.removeLayer(area_F2_layer);
  map.removeLayer(area_F3_layer);
  map.removeLayer(area_F4_layer);
  map.removeLayer(area_F5_layer);
  map.removeLayer(frequencyLayer);
  map.removeLayer(frequency_F1_layer);
  map.removeLayer(frequency_F2_layer);
  map.removeLayer(frequency_F3_layer);
  map.removeLayer(frequency_F4_layer);
  map.removeLayer(healthKharifLayer);
  map.removeLayer(healthKharif_F1_layer);
  map.removeLayer(healthKharif_F2_layer);
  map.removeLayer(healthKharif_F3_layer);
  map.removeLayer(healthKharif_F4_layer);
  map.removeLayer(healthKharif_F5_layer);
  map.removeLayer(healthRabiLayer);
  map.removeLayer(healthRabi_F1_layer);
  map.removeLayer(healthRabi_F2_layer);
  map.removeLayer(healthRabi_F3_layer);
  map.removeLayer(healthRabi_F4_layer);
  map.removeLayer(healthRabi_F5_layer);
  map.removeLayer(ndviKharifLayer);
  map.removeLayer(ndviKharif_F1_layer);
  map.removeLayer(ndviKharif_F2_layer);
  map.removeLayer(ndviKharif_F3_layer);
  map.removeLayer(ndviKharif_F4_layer);
  map.removeLayer(ndviKharif_F5_layer);
  map.removeLayer(ndviRabiLayer);
  map.removeLayer(ndviRabi_F1_layer);
  map.removeLayer(ndviRabi_F2_layer);
  map.removeLayer(ndviRabi_F3_layer);
  map.removeLayer(ndviRabi_F4_layer);
  map.removeLayer(ndviRabi_F5_layer);
  map.removeControl(areaControl);
  map.removeControl(frequencyControl);
  map.removeControl(healthControl);
  map.removeControl(ndviControl);
  map.removeControl(infoControl);
  map.removeControl(legendControl);
}

// Remove the active preperty from button
function removeAllActive() {
  document.getElementById('areaButton').classList.remove('active');
  document.getElementById('frequencyButton').classList.remove('active');
  document.getElementById('cropHealthButton').classList.remove('active');
  document.getElementById('farmNdviButton').classList.remove('active');
}