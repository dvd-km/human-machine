
var humanSpeed = 55/15,
	machineSpeed = 25/15,
	projects = [],
	humans = [],
	machines = [],
	timeout,
	windowWidth=window.innerWidth;


$( document ).ready( function() {
	initialize();
	// calculateTrack();
	calculateHumanTrack();
	calculateMachineTrack();
	// run();
	humanRun();
	machineRun();
	$('.human-block').click(function(){
		console.log('stop .human-block');
		var index = $('.human-block').index(this);
		humans[index].running = !humans[index].running;
	});

	$('.machine-block').click(function(){
		console.log('stop .machine-block');
		var index = $('.machine-block').index(this);
		machines[index].running = !machines[index].running;
	});
});



// Duplicate Images for Loop
var initialize = function(){
	$('.project-bilder').each(function(i){
		var track = $(this).find('.container-inner .track');
		track.children().clone().appendTo(track);
	});
}

var calculateHumanTrack = function(){

	humans = [];

	$('.human-block').each(function(i){

		var track = $(this).find('.container-inner .track');
		
		// determin image width
		if(window.innerWidth >= 768){
			var imgWidth = $(this).find('.container-inner').width() / 4;
		}else{
			var imgWidth = $(this).find('.container-inner').width() / 1;
		}
		console.log('imgWidth')
		console.log(imgWidth)
		// set direction
		var direction = -1;

		// set project array
		var human = {
			length: track.children().length/2,
			width: imgWidth * track.children().length/2,
			running: true,
			offset: 0,
			direction: direction,
		};
		console.log('human')
		console.log(human)
		humans.push(human);

		// set image styles
		track.children().each(function(i){
			$(this).css('left', imgWidth * i +'px')
		});

		// set initial offset
		$(this).find('.track').css( 'transform' , 'translate('+-1*human.offset+'px,0)');
		
		// direction offset
		if(human.direction === 1){
			$(this).find('.track').css( 'left' , -human.width+'px');
		}

	});
	console.log('humans')
	console.log(humans)

};

var calculateMachineTrack = function(){

	machines = [];

	$('.machine-block').each(function(i){

		var track = $(this).find('.container-inner .track');
		
		// determin image width
		if(window.innerWidth >= 768){
			var imgWidth = $(this).find('.project-img').width();
		}
		console.log('imgWidth')
		console.log(imgWidth)
		// set direction
		var direction = 1;

		// set project array
		var machine = {
			length: track.children().length/2,
			width: imgWidth,
			running: true,
			offset: 0,
			direction: direction,
		};
		console.log('machine')
		console.log(machine)
		machines.push(machine);

		// set image styles
		track.children().each(function(i){
			$(this).css('left', imgWidth * i +'px')
		});

		// set initial offset
		$(this).find('.track').css( 'transform' , 'translate('+-1*windowWidth+'px,0)');
		
		// direction offset
		if(machine.direction === 1){
			$(this).find('.track').css( 'left' , -machine.width*machine.length+'px');
		}

	});
	console.log('machines')
	console.log(machines)

};

// var calculateTrack = function(){

// 	projects = [];

// 	$('.project-bilder').each(function(i){

// 		var track = $(this).find('.container-inner .track');
		
// 		// determin image width
// 		if(window.innerWidth >= 768){
// 			var imgWidth = $(this).find('.container-inner').width() / 2;
// 		}else{
// 			var imgWidth = $(this).find('.container-inner').width() / 1;
// 		}
// 		console.log('imgWidth')
// 		console.log(imgWidth)
// 		// set direction
// 		var direction = 1;
// 		if(Math.abs(i % 2) == 1){
// 			direction = -1;
// 		}
// 		console.log('track children')
// 		console.log(track.children().length)
// 		// set project array
// 		var project = {
// 			length: track.children().length/2,
// 			width: imgWidth * track.children().length/2,
// 			running: true,
// 			offset: 0,
// 			direction: direction,
// 		};
// 		console.log('project')
// 		console.log(project)
// 		projects.push(project);

// 		// set image styles
// 		track.children().each(function(i){
// 			$(this).css('left', imgWidth * i +'px')
// 		});

// 		// set initial offset
// 		// $(this).find('.track').css( 'transform' , 'translate('+-1*project.offset+'px,0)');
		
// 		// direction offset
// 		if(project.direction === 1){
// 			$(this).find('.track').css( 'left' , -project.width+'px');
// 		}

// 	});
// 	console.log('projects')
// 	console.log(projects)

// };

var humanRun = function(){
	timeout = setTimeout(function(){

	$('.human-block .container-inner .track').each(function(i){
		var human = humans[i]

		if(human.running){

			human.offset += humanSpeed;

			if(human.offset > human.width){
				human.offset -= human.width;
			};
			
			$(this).css( 'transform' , 'translate('+human.direction*human.offset+'px)');

			if(human.offset > windowWidth/2 ){
				$(this).parent().parent().addClass('green');
			}
			if (human.offset > windowWidth/2*2){
				$(this).parent().parent().removeClass('green');
			}
			if(human.offset > windowWidth/2*3){
				$(this).parent().parent().addClass('green');
			}
			if (human.offset > windowWidth/2*4){
				$(this).parent().parent().removeClass('green');
			}
			if(human.offset > windowWidth/2*5){
				$(this).parent().parent().addClass('green');
			}
			if (human.offset > windowWidth/2*6){
				$(this).parent().parent().removeClass('green');
			}

		};
	});
	humanRun();
	},20)
}

var machineRun = function(){
	timeout = setTimeout(function(){

	$('.machine-block .container-inner .track').each(function(i){
		var machine = machines[i]

		if(machine.running){

			machine.offset += machineSpeed;

			if(machine.offset > machine.width*machine.length){
				machine.offset =0 ;	
			};
			
			$(this).css( 'transform' , 'translate('+machine.direction*machine.offset+'px,0)');
		};
	});
	machineRun();
	},20)
}


