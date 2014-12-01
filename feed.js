

$(document).ready(function() {
	$(".feed").draggable({
		grid: [20,20]
	})
	.resizable({
		grid: 30
	});

	
});


// 	var initialize = function(url) {
// 		console.log('asdf');
// 		var feed = new google.feeds.Feed("https://news.ycombinator.com/rss");
// 		feed.load(function(result) {
// 			if (!result.error) {
// 				var container = document.getElementById("hn");
// 				for (var i = 0; i < result.feed.entries.length; i++) {
// 					var entry = result.feed.entries[i];
// 					var div = document.createElement("div");
// 					div.appendChild(document.createTextNode(entry.title));
// 					container.appendChild(div);
// 				}
// 			}
// 	  });
// 	}
// google.setOnLoadCallback(initialize);

