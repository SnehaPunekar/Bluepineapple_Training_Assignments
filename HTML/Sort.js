function ascending_Sorting() {
  var table, rows, switching, i, x, y, shouldSwitch;
  var columnNumber = document.getElementById("data").value;
  table = document.getElementById("tab");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[columnNumber-1];
      y = rows[i + 1].getElementsByTagName("TD")[columnNumber-1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function descending_Sorting() {
  var table, rows, switching, i, x, y, shouldSwitch;
  var columnNumber = document.getElementById("data").value;
  table = document.getElementById("tab");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[columnNumber-1];
      y = rows[i + 1].getElementsByTagName("TD")[columnNumber-1];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}