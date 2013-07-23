$(document).ready( function () 
{
	var iStart = new Date().getTime();
	var oTable = $('#table').dataTable( 
	{
		"sScrollY": "300px",
		"sScrollX": "100%",
		"sScrollXInner": "150%",
		"bScrollCollapse": true,
		"bPaginate": false
	} );
	new FixedColumns( oTable, 
	{
		"sHeightMatch": "none"
	} );
} );
