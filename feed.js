
$(document).ready(function() {
	$(".feed").draggable({
		grid: [20,20]
	})
	.resizable({
		grid: 30
	});

	
});

// google.load("feeds", "1");
// var parseFeed = function(url, cont) {
// 	var feed = new google.feeds.Feed(url);
// 	feed.setNumEntries(20); //need to set or else defaults to 4
// 	feed.load(function(result) {
// 		if (!result.error) {
// 			var container = document.getElementById(cont);
// 			console.log(result);
// 			for (var i = 0; i < result.feed.entries.length; i++) {
// 				var entry = result.feed.entries[i];
// 				var div = document.createElement("div");
// 				div.appendChild(document.createTextNode(entry.title));
// 				container.appendChild(div);
// 			}
// 		}
//   });
// }
// google.setOnLoadCallback(initialize);
// 	