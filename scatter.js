function init() {
	var data = [{
		x: qbData.map(row => row.posRank),
		y: qbData.map(row => row.swamiYards),
		mode: 'markers',
		type: 'scatter',
		text: qbHover,
		marker: {size: 20,
				color: qbData.map(row => row.age),
				colorscale: [[0, 'rgb(0,112,192)'], [0.5, 'rgb(192,192,192)'],[1, 'rgb(192,0,0)']]
				},
		hoverinfo: 'text',
		hoverlabel: {bgcolor: 'black', bordercolor: 'white'},
		fillcolor: "black"
	}];

	var layout = {
	  xaxis: {
	    title: 'TwoQbs Position Rank - Dynasty'
	  },
	  yaxis: {
	    title: 'Swami Yards (Passing + Rushing)'
	  },
	  title:'2018 Projected Swami Yards (hover for QB info)',
	  hovermode: 'closest'
	};

	var PLOT = document.getElementById("plot");

	Plotly.plot("plot", data, layout);

	function renderTable1() {
		$tbody.innerHTML = "";
		for (var x = 0; x < qbData.length; x++) {
			var qb = qbData[x];
			var fields = Object.keys(qb);
			var $row = $tbody.insertRow(x);
			for (var y = 0; y < 5; y++) {
				var field = fields[y];
				var $cell = $row.insertCell(y);
				$cell.innerHTML = qb[field]
			}
		}
	}

	// Find a <table> element with id="myTable":
	var $tbody = document.querySelector("tbody");
	renderTable1()
};

init();