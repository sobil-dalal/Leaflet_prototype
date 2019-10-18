function areaLegend() {
  legendControl.update = function () {
    grades = [0.0, 0.5, 1.0, 2.0, 3.0];
    this._div.innerHTML +=
      '<h4>Area (in acre) -</h4>' +
      '<div style="overflow-x:auto;">';

    var htmlString = "<table>";
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getAreaColor(grades[i] + 1) + '"></i>' +
          '</td>' +
          '<td>' +
            parseFloat(grades[i]).toFixed(1) + (grades[i + 1] ? ' – ' + parseFloat(grades[i + 1]).toFixed(1) + ' acre<br>' : ' + acre')
          '</td>' +
        '</tr>';
    }
    this._div.innerHTML += htmlString + '</table>' +
      '</div>';
  };
  legendControl.addTo(map);
}

function frequencyLegend() {
  legendControl.update = function () {
    grades = [0, 1, 2, 3];
    this._div.innerHTML +=
      '<h4>Cropping frequency (per annum 2018-19) -</h4>' +
      '<div style="overflow-x:auto;">';

    var htmlString = "<table>";
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getFrequencyColor(grades[i]) + '"></i>' +
          '</td>' +
          '<td>' +
            grades[i]
          '</td>' +
        '</tr>';
    }
    this._div.innerHTML += htmlString + '</table>' +
      '</div>';
  };
  legendControl.addTo(map);
}

function healthLegend() {
  legendControl.update = function () {
    grades = ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%"];
    this._div.innerHTML +=
      '<h4>Crop Health (in %) -</h4>' +
      '<div style="overflow-x:auto;">';

    var htmlString = "<table>";
    htmlString +=
      '<tr>' +
        '<th colspan = 2>Kharif 12-Sep-2018</th>' +
      '</tr>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getHealthKharifColor(grades[i]) + '"></i>' +
          '</td>' +
          '<td>' +
            grades[i]
          '</td>' +
        '</tr>';
    }
    htmlString +=
      '<tr>' +
        '<th colspan = 2>Rabi 09-Feb-2019</th>' +
      '</tr>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getHealthRabiColor(grades[i]) + '"></i>' +
          '</td>' +
          '<td>' +
            grades[i]
          '</td>' +
        '</tr>';
    }
    this._div.innerHTML += htmlString + '</table>' +
      '</div>';
  };
  legendControl.addTo(map);
}

function ndviLegend() {
  legendControl.update = function () {
    grades = [0.0, 0.4, 0.5, 0.6, 0.7];
    this._div.innerHTML +=
      '<h4>Farm NDVi index-</h4>' +
      '<div style="overflow-x:auto;">';

    var htmlString = "<table>";
    htmlString +=
      '<tr>' +
        '<th colspan = 2>Kharif 12-Sep-2018</th>' +
      '</tr>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getNdviKharifColor(grades[i]) + '"></i>' +
          '</td>' +
          '<td>' +
            parseFloat(grades[i]).toFixed(1) + (grades[i + 1] ? ' – ' + parseFloat(grades[i + 1]).toFixed(1) + '<br>' : ' +')
          '</td>' +
        '</tr>';
    }
    htmlString +=
      '<tr>' +
      '<th colspan = 2>Rabi 09-Feb-2019</th>' +
      '</tr>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
          '<td>' +
            '<i style="background:' + getNdviRabiColor(grades[i]) + '"></i>' +
          '</td>' +
          '<td>' +
            parseFloat(grades[i]).toFixed(1) + (grades[i + 1] ? ' – ' + parseFloat(grades[i + 1]).toFixed(1) + '<br>' : ' +')
          '</td>' +
        '</tr>';
    }
    this._div.innerHTML += htmlString + '</table>' +
      '</div>';
  };
  legendControl.addTo(map);
}