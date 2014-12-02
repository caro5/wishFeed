$(document).ready(function() {
	$(".feed")
	.draggable({
		grid: [20,20]		
	})
	.resizable({
		grid: 30
	});	
});

$(function() {
	$('#optionsList').selectable();
});
var addFeedToPage = function() {
	var feedContainer = document.getElementById('allFeeds');
	console.log(feedContainer);
	var div = document.createElement("div");
	div.addClass('feed');
	div.text = "asdf";
	feedContainer.appendChild(div);

};
// var script = document.createElement('script');
// script.setAttribute('src', "https://www.google.com/jsapi");
// $("head").append(script);

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