// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    order: [],
    columnDefs: [ { orderable: false, targets: [0, 7] } ]
    })
  });
    
   