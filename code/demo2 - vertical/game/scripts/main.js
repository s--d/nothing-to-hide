(function(){

	var loading = document.getElementById("loading_screen");
	var loading_bar = document.getElementById("loading_bar");
	var loading_bar_white = document.getElementById("loading_bar_white");

	// Loading
	var preloaderInterval = setInterval(function(){

		var numLoaded = 0;
		numLoaded += Object.keys(Asset.image).length;
		numLoaded += Object.keys(Asset.level).length;
		numLoaded += Object.keys(Asset.sound).length;
		numLoaded += Object.keys(Asset.sprite).length;
		
		var bar = numLoaded/16; // Hard coded
		loading_bar_white.style.width = Math.round(bar*100)+"%";

	},50);

	// Preloader and stuff
	Asset.load().then(function(){
		console.log("===== LOADED! =====");
		setInterval(function(){
			clearInterval(preloaderInterval);
			_startGame();
		},500);
	});

	function _startGame(){
		loading.parentNode.removeChild(loading);
		Game.start();
	}

})();