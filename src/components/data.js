const data = [
   ['Year', 'Active Cases'],
   ['2020-03-10', 47],
   ['2020-03-11', 13],
   ['2020-03-12', 13],
   ['2020-03-13', 9],
   ['2020-03-14', 2],
   ['2020-03-15', 26],
   ['2020-03-16', 4],
   ['2020-03-17', 23],
   ['2020-03-18', 14],
   ['2020-03-19', 22],
   ['2020-03-20', 50],
   ['2020-03-21', 60],
   ['2020-03-22', 77],
   ['2020-03-23', 107],
   ['2020-03-24', 52],
   ['2020-03-25', 87],
   ['2020-03-26', 88],
   ['2020-03-27', 30],
   ['2020-03-28', 185],
   ['2020-03-29', 115],
   ['2020-03-30', 227],
   ['2020-03-31', 146],
   ['2020-04-01', 437],
   ['2020-04-02', 235],
   ['2020-04-03', 478],
   ['2020-04-04', 525],
   ['2020-04-05', 505],
   ['2020-04-06', 704],
   ['2020-04-07', 508],
   ['2020-04-08', 485],
   ['2020-04-09', 591],
   ['2020-04-10', 896],
   ['2020-04-11', 768],
   ['2020-04-12', 918],
   ['2020-04-13', 905],
   ['2020-04-14', 1463],
   ['2020-04-15', 1118],
   ['2020-04-16', 826],
   ['2020-04-17', 1076],
   ['2020-04-18', 957],
   ['2020-04-19', 1324],
   ['2020-04-20', 1540],
   ['2020-04-21', 1329],
   ['2020-04-22', 1486],
   ['2020-04-23', 1229],
   ['2020-04-24', 1752],
   ['2020-04-25', 1490],
   ['2020-04-26', 1975],
   ['2020-04-27', 1463],
   ['2020-04-28', 1594],
   ['2020-04-29', 1735],
   ['2020-04-30', 1901],
   ['2020-05-01', 1755],
   ['2020-05-02', 2411],
   ['2020-05-03', 2487],
   ['2020-05-04', 2573],
   ['2020-05-05', 3875],
   ['2020-05-06', 2680],
   ['2020-05-07', 3561],
   ['2020-05-08', 3390],
   ['2020-05-09', 3320],
   ['2020-05-10', 3277],
   ['2020-05-11', 4213],
   ['2020-05-12', 3604],
   ['2020-05-13', 3525],
   ['2020-05-14', 3722],
   ['2020-05-15', 3967],
   ['2020-05-16', 3740],
   ['2020-05-17', 5217],
   ['2020-05-18', 5242],
   ['2020-05-19', 4970],
   ['2020-05-20', 5611],
   ['2020-05-21', 5609],
   ['2020-05-22', 6088],
   ['2020-05-23', 6654],
   ['2020-05-24', 6767],
   ['2020-05-25', 6977],
   ['2020-05-26', 6535],
   ['2020-05-27', 6387],
   ['2020-05-28', 6566],
   ['2020-05-29', 7466],
   ['2020-05-30', 7964],
   ['2020-05-31', 8380],
   ['2020-06-01', 8392],
   ['2020-06-02', 8171],
   ['2020-06-03', 8909],
   ['2020-06-04', 9304],
   ['2020-06-05', 9851],
   ['2020-06-06', 9887],
   ['2020-06-07', 9971],
   ['2020-06-08', 9983],
   ['2020-06-09', 9987],
   ['2020-06-10', 9985],
   ['2020-06-11', 9996],
   ['2020-06-12', 10956],
   ['2020-06-13', 11458],
   ['2020-06-14', 11929],
   ['2020-06-15', 11502],
   ['2020-06-16', 10667],
   ['2020-06-17', 10974],
   ['2020-06-18', 12881],
   ['2020-06-19', 13586],
   ['2020-06-20', 14516],
   ['2020-06-21', 15413],
   ['2020-06-22', 14821],
   ['2020-06-23', 14933],
   ['2020-06-24', 15968],
   ['2020-06-25', 16922],
   ['2020-06-26', 17296],
   ['2020-06-27', 18552],
   ['2020-06-28', 19906],
   ['2020-06-29', 19459],
   ['2020-06-30', 18522],
   ['2020-07-01', 18653],
   ['2020-07-02', 19148],
   ['2020-07-03', 20903],
   ['2020-07-04', 22771],
   ['2020-07-05', 24850],
   ['2020-07-06', 24248],
   ['2020-07-07', 22252],
   ['2020-07-08', 22752],
   ['2020-07-09', 24879],
   ['2020-07-10', 26506],
   ['2020-07-11', 27114],
   ['2020-07-12', 28637],
   ['2020-07-13', 28701],
   ['2020-07-14', 28498],
   ['2020-07-15', 29429],
   ['2020-07-16', 32695],
   ['2020-07-17', 34956],
   ['2020-07-18', 34884],
   ['2020-07-19', 38902],
   ['2020-07-20', 40425],
   ['2020-07-21', 37148],
   ['2020-07-22', 37724],
   ['2020-07-23', 45720],
   ['2020-07-24', 49310],
   ['2020-07-25', 48916],
   ['2020-07-26', 48661],
   ['2020-07-27', 49931],
   ['2020-07-28', 47703],
   ['2020-07-29', 48513],
   ['2020-07-30', 52123],
   ['2020-07-31', 55078],
   ['2020-08-01', 57118],
   ['2020-08-02', 54735],
   ['2020-08-03', 52972],
   ['2020-08-04', 52050],
   ['2020-08-05', 52509],
   ['2020-08-06', 56282],
   ['2020-08-07', 62538],
   ['2020-08-08', 61537],
   ['2020-08-09', 64399],
   ['2020-08-10', 62064],
   ['2020-08-11', 53601],
   ['2020-08-12', 60963],
   ['2020-08-13', 66999],
   ['2020-08-14', 64553],
   ['2020-08-15', 65002],
   ['2020-08-16', 63490],
   ['2020-08-17', 57981],
   ['2020-08-18', 55079],
   ['2020-08-19', 64531],
   ['2020-08-20', 69652],
   ['2020-08-21', 68898],
   ['2020-08-22', 69878],
   ['2020-08-23', 69239],
   ['2020-08-24', 61408],
   ['2020-08-25', 60975],
   ['2020-08-26', 67151],
   ['2020-08-27', 75760],
   ['2020-08-28', 77266],
   ['2020-08-29', 76472],
   ['2020-08-30', 78761],
   ['2020-08-31', 78512],
   ['2020-09-01', 69921],
   ['2020-09-02', 78357],
   ['2020-09-03', 83883],
   ['2020-09-04', 83341],
   ['2020-09-05', 86432],
   ['2020-09-06', 90632],
   ['2020-09-07', 90802],
   ['2020-09-08', 75809],
   ['2020-09-09', 89706],
   ['2020-09-10', 95735],
   ['2020-09-11', 96551],
   ['2020-09-12', 97570],
   ['2020-09-13', 94372],
   ['2020-09-14', 92071],
   ['2020-09-15', 83809],
   ['2020-09-16', 90123],
   ['2020-09-17', 97894],
   ['2020-09-18', 96424],
   ['2020-09-19', 93337],
   ['2020-09-20', 92605],
   ['2020-09-21', 86961],
   ['2020-09-22', 75083],
   ['2020-09-23', 83347],
   ['2020-09-24', 86270],
   ['2020-09-25', 86290],
   ['2020-09-26', 85362],
   ['2020-09-27', 88600],
   ['2020-09-28', 82170],
   ['2020-09-29', 70589],
   ['2020-09-30', 80472],
   ['2020-10-01', 84142],
   ['2020-10-02', 84163],
   ['2020-10-03', 79476],
   ['2020-10-04', 75127],
   ['2020-10-05', 75144],
   ['2020-10-06', 61267],
   ['2020-10-07', 75279],
   ['2020-10-08', 75294],
   ['2020-10-09', 70496],
   ['2020-10-10', 73272],
   ['2020-10-11', 74383],
   ['2020-10-12', 66732],
   ['2020-10-13', 55342],
   ['2020-10-14', 63509],
   ['2020-10-15', 67708],
   ['2020-10-16', 63371],
   ['2020-10-17', 62212],
   ['2020-10-18', 61871],
   ['2020-10-19', 55722],
   ['2020-10-20', 46790],
   ['2020-10-21', 54044],
   ['2020-10-22', 55839],
   ['2020-10-23', 107736],
   ['2020-10-24', 83049],
   ['2020-10-25', 50129],
   ['2020-10-26', 45148],
   ['2020-10-27', 36470],
   ['2020-10-28', 43893],
   ['2020-10-29', 49881],
   ['2020-10-30', 48648],
   ['2020-10-31', 48268],
   ['2020-11-01', 46963],
   ['2020-11-02', 45231],
   ['2020-11-03', 38310],
   ['2020-11-04', 46253],
   ['2020-11-05', 97848],
   ['2020-11-06', 95606],
   ['2020-11-07', 96030],
   ['2020-11-08', 69303],
   ['2020-11-09', 45903],
   ['2020-11-10', 38073],
   ['2020-11-11', 44281],
   ['2020-11-12', 47905],
   ['2020-11-13', 44879],
   ['2020-11-14', 44684],
   ['2020-11-15', 41100],
   ['2020-11-16', 30548],
   ['2020-11-17', 29163],
   ['2020-11-18', 38617],
   ['2020-11-19', 45576],
   ['2020-11-20', 45882],
   ['2020-11-21', 46232],
   ['2020-11-22', 45209],
   ['2020-11-23', 44059],
   ['2020-11-24', 37975],
   ['2020-11-25', 44376],
   ['2020-11-26', 87571],
   ['2020-11-27', 49049],
   ['2020-11-28', 41322],
   ['2020-11-29', 41810],
   ['2020-11-30', 38772],
   ['2020-12-01', 67722],
   ['2020-12-02', 56040],
   ['2020-12-03', 35551],
   ['2020-12-04', 36595],
   ['2020-12-05', 36652],
   ['2020-12-06', 36011],
   ['2020-12-07', 32981],
   ['2020-12-08', 26567],
   ['2020-12-09', 32080],
   ['2020-12-10', 31521],
   ['2020-12-11', 59404],
   ['2020-12-12', 40595],
   ['2020-12-13', 30254],
   ['2020-12-14', 27071],
   ['2020-12-15', 22065],
   ['2020-12-16', 50392],
   ['2020-12-17', 22890],
   ['2020-12-18', 23002],
   ['2020-12-19', 25152],
   ['2020-12-20', 26624],
   ['2020-12-21', 43893],
   ['2020-12-22', 34002],
   ['2020-12-23', 23950],
   ['2020-12-24', 24712],
   ['2020-12-25', 23067],
   ['2020-12-26', 22273],
   ['2020-12-27', 18732],
   ['2020-12-28', 20021],
   ['2020-12-29', 16432],
   ['2020-12-30', 20549],
   ['2020-12-31', 21822],
   ['2021-01-01', 20035],
   ['2021-01-02', 19079],
   ['2021-01-03', 18177],
   ['2021-01-04', 16504],
   ['2021-01-05', 16375],
   ['2021-01-06', 18088],
   ['2021-01-07', 38485],
   ['2021-01-08', 23049],
   ['2021-01-09', 18222],
   ['2021-01-10', 18645],
   ['2021-01-11', 28895],
   ['2021-01-12', 23994],
   ['2021-01-13', 15968],
   ['2021-01-14', 16946],
   ['2021-01-15', 15590],
   ['2021-01-16', 30302],
   ['2021-01-17', 29394],
   ['2021-01-18', 13788],
   ['2021-01-19', 10064],
   ['2021-01-20', 13823],
   ['2021-01-21', 29768],
   ['2021-01-22', 14256],
   ['2021-01-23', 12994],
   ['2021-01-24', 14849],
   ['2021-01-25', 13203],
   ['2021-01-26', 9102],
   ['2021-01-27', 12689],
   ['2021-01-28', 11666],
   ['2021-01-29', 18855],
   ['2021-01-30', 13083],
   ['2021-01-31', 13052],
   ['2021-02-01', 11427],
   ['2021-02-02', 8635],
   ['2021-02-03', 11039],
   ['2021-02-04', 12899],
   ['2021-02-05', 12408],
   ['2021-02-06', 11713],
   ['2021-02-07', 12059],
   ['2021-02-08', 20941],
   ['2021-02-09', 18393],
   ['2021-02-10', 11067],
   ['2021-02-11', 12923],
   ['2021-02-12', 21452],
   ['2021-02-13', 10293],
   ['2021-02-14', 12194],
   ['2021-02-15', 20770],
   ['2021-02-16', 11610],
   ['2021-02-17', 29202],
   ['2021-02-18', 26074],
   ['2021-02-19', 20393],
   ['2021-02-20', 13993],
   ['2021-02-21', 28463],
   ['2021-02-22', 20393],
   ['2021-02-23', 10584],
   ['2021-02-24', 13742],
   ['2021-02-25', 16738],
   ['2021-02-26', 16577],
   ['2021-02-27', 16488],
   ['2021-02-28', 32262],
   ['2021-03-01', 12286],
   ['2021-03-02', 12020],
   ['2021-03-03', 14989],
   ['2021-03-04', 17407],
   ['2021-03-05', 16838],
   ['2021-03-06', 18327],
   ['2021-03-07', 18711],
   ['2021-03-08', 33987],
   ['2021-03-09', 29939],
   ['2021-03-10', 17921],
   ['2021-03-11', 22854],
   ['2021-03-12', 23285],
   ['2021-03-13', 24882],
   ['2021-03-14', 25320],
   ['2021-03-15', 26291],
   ['2021-03-16', 24492],
   ['2021-03-17', 28903],
   ['2021-03-18', 35871],
   ['2021-03-19', 39726],
];
export default data;
