( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {

			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "page1-MoonCalc" ) {
				tizen.application.getCurrentApplication().exit();
			} else {
				var page1MoonCalcObj = document.getElementById('page1-MoonCalc');				
				tau.changePage(page1MoonCalcObj);
			}
		}
	} );
} () );
