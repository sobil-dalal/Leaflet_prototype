// Append old node to the new parent.
function setParent(el, newParent) {
 newParent.appendChild(el);
}

// areaLayers htmlContainer switch
function areaContainerSwitch() {
 var areaInsideMap = areaControl.getContainer();
 var areaOutsideMap = document.getElementById('overLayerControl');
 setParent(areaInsideMap, areaOutsideMap);

 var infoInsideMap = infoControl.getContainer();
 var infoOutsideMap = document.getElementById('infoControl');
 setParent(infoInsideMap, infoOutsideMap);

 var legendInsideMap = legendControl.getContainer();
 var legendOutsideMap = document.getElementById('legendControl');
 setParent(legendInsideMap, legendOutsideMap);

 var addLayerInsideMap1 = frequencyControl.getContainer();
 var addLayerOutsideMap1 = document.getElementById('addLayerControl1');
 setParent(addLayerInsideMap1, addLayerOutsideMap1);

 var addLayerInsideMap2 = healthControl.getContainer();
 var addLayerOutsideMap2 = document.getElementById('addLayerControl2');
 setParent(addLayerInsideMap2, addLayerOutsideMap2);

 var addLayerInsideMap3 = ndviControl.getContainer();
 var addLayerOutsideMap3 = document.getElementById('addLayerControl3');
 setParent(addLayerInsideMap3, addLayerOutsideMap3);
}

// frequencyLayers htmlContainer switch
function frequencyContainerSwitch() {
 var frequencyInsideMap = frequencyControl.getContainer();
 var frequencyOutsideMap = document.getElementById('overLayerControl');
 setParent(frequencyInsideMap, frequencyOutsideMap);

 var infoInsideMap = infoControl.getContainer();
 var infoOutsideMap = document.getElementById('infoControl');
 setParent(infoInsideMap, infoOutsideMap);

 var legendInsideMap = legendControl.getContainer();
 var legendOutsideMap = document.getElementById('legendControl');
 setParent(legendInsideMap, legendOutsideMap);

 var addLayerInsideMap1 = areaControl.getContainer();
 var addLayerOutsideMap1 = document.getElementById('addLayerControl1');
 setParent(addLayerInsideMap1, addLayerOutsideMap1);

 var addLayerInsideMap2 = healthControl.getContainer();
 var addLayerOutsideMap2 = document.getElementById('addLayerControl2');
 setParent(addLayerInsideMap2, addLayerOutsideMap2);

 var addLayerInsideMap3 = ndviControl.getContainer();
 var addLayerOutsideMap3 = document.getElementById('addLayerControl3');
 setParent(addLayerInsideMap3, addLayerOutsideMap3);
}

// healthLayers htmlContainer switch
function healthContainerSwitch() {
 var healthInsideMap = healthControl.getContainer();
 var healthOutsideMap = document.getElementById('overLayerControl');
 setParent(healthInsideMap, healthOutsideMap);

 var infoInsideMap = infoControl.getContainer();
 var infoOutsideMap = document.getElementById('infoControl');
 setParent(infoInsideMap, infoOutsideMap);

 var legendInsideMap = legendControl.getContainer();
 var legendOutsideMap = document.getElementById('legendControl');
 setParent(legendInsideMap, legendOutsideMap);

 var addLayerInsideMap1 = areaControl.getContainer();
 var addLayerOutsideMap1 = document.getElementById('addLayerControl1');
 setParent(addLayerInsideMap1, addLayerOutsideMap1);

 var addLayerInsideMap2 = frequencyControl.getContainer();
 var addLayerOutsideMap2 = document.getElementById('addLayerControl2');
 setParent(addLayerInsideMap2, addLayerOutsideMap2);

 var addLayerInsideMap3 = ndviControl.getContainer();
 var addLayerOutsideMap3 = document.getElementById('addLayerControl3');
 setParent(addLayerInsideMap3, addLayerOutsideMap3);
}

// ndviLayers htmlContainer switch
function ndviContainerSwitch() {
 var ndviInsideMap = ndviControl.getContainer();
 var ndviOutsideMap = document.getElementById('overLayerControl');
 setParent(ndviInsideMap, ndviOutsideMap);

 var infoInsideMap = infoControl.getContainer();
 var infoOutsideMap = document.getElementById('infoControl');
 setParent(infoInsideMap, infoOutsideMap);

 var legendInsideMap = legendControl.getContainer();
 var legendOutsideMap = document.getElementById('legendControl');
 setParent(legendInsideMap, legendOutsideMap);

 var addLayerInsideMap1 = areaControl.getContainer();
 var addLayerOutsideMap1 = document.getElementById('addLayerControl1');
 setParent(addLayerInsideMap1, addLayerOutsideMap1);

 var addLayerInsideMap2 = frequencyControl.getContainer();
 var addLayerOutsideMap2 = document.getElementById('addLayerControl2');
 setParent(addLayerInsideMap2, addLayerOutsideMap2);

 var addLayerInsideMap3 = healthControl.getContainer();
 var addLayerOutsideMap3 = document.getElementById('addLayerControl3');
 setParent(addLayerInsideMap3, addLayerOutsideMap3);
}