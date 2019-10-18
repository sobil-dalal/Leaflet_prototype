function areaInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Lat-Long' +
              '</td>' +
              '<td>' +
                props.Latitude + ', ' + props.Longitude +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Village Name' +
              '</td>' +
              '<td>' +
                props.Village_Na +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Block Name' +
              '</td>' +
              '<td>' +
                props.Block_Name +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'District' +
              '</td>' +
              '<td>' +
                props.District +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area acre' +
              '</td>' +
              '<td><b>' +
                props.FA_acre + ' acre' +
              '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area sqm' +
              '</td>' +
              '<td><b>' +
                props.FA_sqm + ' sq meter' +
              '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area hectare' +
              '</td>' +
              '<td><b>' +
                props.FA_ha + ' hectare' +
              '</b></td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}

function frequencyInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Lat-Long' +
              '</td>' +
              '<td>' +
                props.Latitude + ', ' + props.Longitude +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Village Name' +
              '</td>' +
              '<td>' +
                props.Village_Na +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Block Name' +
              '</td>' +
              '<td>' +
                props.Block_Name +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'District' +
              '</td>' +
              '<td>' +
                props.District +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Cropping frequency' +
              '</td>' +
              '<td><b>' +
                props.Cropping_F +
              '</b></td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}

function healthInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Lat-Long' +
              '</td>' +
              '<td>' +
                props.Latitude + ', ' + props.Longitude +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Village Name' +
              '</td>' +
              '<td>' +
                props.Village_Na +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Block Name' +
              '</td>' +
              '<td>' +
                props.Block_Name +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'District' +
              '</td>' +
              '<td>' +
                props.District +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Crop 12-Sep-2018 Health' +
              '</td>' +
              '<td><b>' +
                props.Sep12_2018_CropHealth +
              '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Crop 09-Feb-2019 Health' +
              '</td>' +
              '<td><b>' +
                props.Feb09_2019_CropHealth +
              '</b></td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}

function ndviInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Lat-Long' +
              '</td>' +
              '<td>' +
                props.Latitude + ', ' + props.Longitude +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Village Name' +
              '</td>' +
              '<td>' +
                props.Village_Na +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Block Name' +
              '</td>' +
              '<td>' +
                props.Block_Name +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'District' +
              '</td>' +
              '<td>' +
                props.District +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Farm 12-Sep-2018 NDVI' +
              '</td>' +
              '<td><b>' +
                props.Sep12_2018_NDVI +
              '</b></td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Farm 09-Feb-2019 NDVI' +
              '</td>' +
              '<td><b>' +
                props.Feb09_2019_NDVI +
              '</b></td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}