$(document).ready(function() {

	//DURING PAGE LOAD
	$(window).load(function() {
		$('reportcontent').hide();
		$('carmodeltop').hide();
		$('carmodelback').hide();
		$('wheelmodel').hide();
		$('#run-program-button').hide();
		$('instructionscontent').hide();

	});
	$('html').css('display', 'none');
	$('html').fadeIn(2000);
	$('.hide-then-show').hide('.hide-then-show');

	//POST PAGE LOAD
	$('#show-all-data-button').on('click', function() {
		$('.button-panel-right').css('text-align', 'right');
		$('.home').toggle('hide');
		$('.hide-this').toggle('hide');
		$('.hide-then-show').show('.hide-then-show');
		$('video').toggle('show');
		setTimeout(function() { 
			$('video').get(0).play()
		}, 1700);
		steeringWheelModel(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1);
		// 0,1,2,3,4,5,6
		carModelFromBack(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, 0, 0, 0);
		// 0,1,2,3,4,5,6,7,8,9
		orientation(dataDownFlagstaff1, 0, 18000, 1);
		// 0,1,2,6
		warningMessages(dataDownFlagstaff1, 0, 18000, 1, 5, 5, 15);
		// 0,1,2,6,7,8,9
		carMovementAndPositionVisuals(dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, 0, 0, 0);
		// 0,1,2,3,4,5,6,7,8,9
		liveDataPrintOut(dataDownFlagstaff1, 0, 18000, 1);
		// 0,1,2,6
		carMovementInWords(dataDownFlagstaff1, 0, 18000, 1, 0, 0, 0);
		// 0,1,2,6,7,8,9
	});
	$('form').on('submit', function(e) {
		e.preventDefault();
		var parameterData = [dataDownFlagstaff1, 0, 18000, 60, 60, 2, 1, 3, 4, 15];//
		var fileContents = [];
		$('#run-program-button').show();
		
		var startInput=parseInt(document.getElementById('testing-input-start-point').value);
		var endInput=parseInt(document.getElementById('testing-input-end-point').value);
		var multiX=parseInt(document.getElementById('testing-input-multix').value);
		var multiY=parseInt(document.getElementById('testing-input-multiy').value);
		var multiZ=parseInt(document.getElementById('testing-input-multiz').value);
		var dataPoints=parseInt(document.getElementById('testing-input-data-points').value);
		var redlineX=parseInt(document.getElementById('testing-input-redline-x').value);
		var redlineY=parseInt(document.getElementById('testing-input-redline-y').value);
		var redlineZ=parseInt(document.getElementById('testing-input-redline-z').value);
		fileContents.push(document.getElementById('testing-input-file-contents').value);
		if (startInput !== parameterData[1] && startInput > 0) { parameterData[1] = startInput; }
		if (endInput !== parameterData[2] && endInput > 0) { parameterData[2] = endInput; }
		if (multiX !== parameterData[3] && multiX > 0) { parameterData[3] = multiX; }
		if (multiY !== parameterData[4] && multiY > 0) { parameterData[4] = multiY; }
		if (multiZ !== parameterData[5] && multiZ > 0) { parameterData[5] = multiZ; }
		if (dataPoints !== parameterData[6] && dataPoints > 0) { parameterData[6] = dataPoints; }
		if (redlineX !== parameterData[7] && redlineX > 0) { parameterData[7] = redlineX; }
		if (redlineY !== parameterData[8] && redlineY > 0) { parameterData[8] = redlineY; }
		if (redlineZ !== parameterData[9] && redlineZ > 0) { parameterData[9] = redlineZ; }

		document.getElementById("set-parameters-window").innerHTML = "Profile Loaded";
		document.getElementById("parameter-input-submit-button").innerHTML = "Run Program";
		console.log(parameterData);
		console.log(fileContents);
		sessionStorage.setItem("UserChoices", parameterData);
		console.log(sessionStorage);
		console.log(localStorage);

		$('#run-program-button').on('click', function() {
			steeringWheelModel(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6]); 
			carModelFromBack(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6], parameterData[7], 
				parameterData[8], parameterData[9]);
			orientation(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[6]);				
			warningMessages(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[6],  
				parameterData[7], parameterData[8], 
				parameterData[9]);	
			carMovementAndPositionVisuals(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[3], 
				parameterData[4], parameterData[5], 
				parameterData[6], parameterData[7], 
				parameterData[8], parameterData[9]);
			liveDataPrintOut(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[6]);				
			carMovementInWords(parameterData[0], parameterData[1], 
				parameterData[2], parameterData[6],  
				parameterData[7], parameterData[8], 
				parameterData[9]);	

			$('.hide-this').toggle('hide');
			$('.hide-then-show').show('.hide-then-show');
			$('video').toggle('show');
			setTimeout(function() { 
				$('video').get(0).play()
			}, 1600);
		});
	});
	$('#report-button').on('click', function() {
		$('datacontent').toggle('hide');
		$('reportcontent').toggle('show');
		forceXyzForReport(dataDownFlagstaff1, 0, 10000, 200, 200, 200, 1, 1);
	});
	
	$('#freeze-button').on('click', function() {
		alert("DATA FREEZE, IT'S COLD IN HERE");
		$('video').each(this.pause());
	});
	$('#reset-button').on('click', function() {
		location.reload();
	});
	$('#testing-area').on('click', function() {
		$('#testing-area').css("background-color", "red");
	});
	$('#test-functions').on('click', function() {
		graphicsFunctionOne(data5MileDown, 101, 15000, 5000, 1);
	});

	$('#data-page').on('click', function() {
		$('datacontent').toggle('show');
		$('reportcontent').toggle('hide');
	});
	$('#parameter-input-fields').css('text-align', 'right');


});