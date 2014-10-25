var whistle = require('node-whistle');
var config = require('./config.js');

whistle.getToken(config.email,config.password,function(whistletoken){
	console.log(whistletoken);
	/*
	whistle.getUsers(whistletoken,function(data){
		console.log(data);
	});
	*/
	whistle.getDogs(whistletoken,function(data){
		//console.log(data);
		/*
		whistle.getDevice(whistletoken,data[0].device_id,function(devicedata){
			console.log('devicedata',devicedata);
		});
		whistle.getDailies(whistletoken,data[0].id,2,function(dailydata){
			console.log('dailydata',dailydata);
		});
		whistle.getTrends(whistletoken,data[0].id,'2014-10-24',function(trenddata){
			console.log('trenddata',trenddata);
		});
		whistle.getUserPresent(whistletoken,data[0].id,null,function(userpresentdata){
			console.log('userpresentdata',userpresentdata);
		});
		
		whistle.getMetrics(whistletoken,data[0].id,'2014-10-24',function(metricdata){
			//console.log('metricdata',metricdata);
			whistle.getTimeline(whistletoken,metricdata.events[0].timeline_id,function(timelinedata){
				console.log('timelinedata',timelinedata);
			});
		});
*/
	});
});