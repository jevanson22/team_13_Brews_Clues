google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Beer', 8],
      ['Whiskey', 1],
      ['Wine', 11],
      ['Zima-we know you exist, we still see it in gas station refrigerators by the pickled eggs', 1],
      ['To young to drink/whatever was on sale', 4]
    ]);

    var options = {
      title: 'Most Common booze bootcamp students keep around'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
