var urls = {
	"hackerNews": "https://news.ycombinator.com/bigrss",
	"dribbble":"https://dribbble.com/shots/popular.rss",
	"quora":"http://www.quora.com/rss",
	 "bbc": "http://feeds.bbci.co.uk/news/rss.xml",
	'scienceDaily':'http://feeds.sciencedaily.com/sciencedaily/top_news?format=xml',
	'reddit':'http://www.reddit.com/.rss'
};

var alreadyUsed = {};
$(document).ready(function() {
	$(".feed")
	.draggable({
		grid: [20,20]		
	})
	.resizable({
		grid: 30
	});	

	$('#optionsList').selectable({
		selected: function(event, ui) {
		console.log(ui);
		},
		unselecting: function( event, ui ) {
			console.log(ui);
			ui.removeAttr('ui-selected');
		}
	});	
});

var addFeedToPage = function() {
	// console.log($('#optionsList').find('li.ui-selected'));
	var conceptName = $('#optionsList').find('li.ui-selected')[0].id;
	var idName = conceptName.slice(0,conceptName.length - 6);
	console.log(alreadyUsed);
	if (alreadyUsed[idName]) {
		alert('feed already exists');
	} else {
		alreadyUsed[idName] = true;
		
		$('#allFeeds').append('<div class="feed" id="'+idName + '"></div>');
		
		$('.feed')
		.draggable({
			grid: [20,20]		
		})
		.resizable({
			grid: 30
		});	

		var feedUrl = urls[idName];
		parseFeed(feedUrl, idName);
	}	
};


// parses feeds and populates containers
google.load("feeds", "1");
var parseFeed = function(url, cont) {
	var feed = new google.feeds.Feed(url);
	feed.setNumEntries(30); //need to set or else defaults to 4
	feed.load(function(result) {
		if (!result.error) {
			console.log(cont);
			var str = "#" + cont;
			var div = document.createElement("div");
				div.appendChild(document.createTextNode(cont));
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var a = document.createElement("a");
				var img = document.createElement("img");
				img = entry.content;
				a.text = entry.title;
				a.href = entry.link;
				div.appendChild(a);
				$(str).append(div);
			}
		}
  });
};
google.setOnLoadCallback(parseFeed);
