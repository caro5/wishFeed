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

	$('#optionsList').hide();
	$('#addFeed').hide();

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

var showHideOptionsList = function() {
	$('#optionsList').toggle();
	$('#addFeed').toggle();
}

var getDribbble = function() {
	var str = "#dribbble";
	$.jribbble.getShotsByList('popular', function (listDetails) {
		var html = [];
		
		$.each(listDetails.shots, function (i, shot) {
			// html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			// html.push('<img src="' + shot.image_teaser_url + '" ');
			// html.push('alt="' + shot.title + '"></a></li>');
			html.push('<a href="' + shot.url + '">');
			html.push('<img src="' + shot.image_teaser_url + '" ');
			html.push('</a>')
			var fullString = html.join('');
			console.log(fullString);
			// console.log(shot);
		});
		$(str).append('<p>dribbble</p>').append(html.join(''));
	}, {page: 2, per_page: 10});
};

var addFeedToPage = function() {
	// console.log($('#optionsList').find('li.ui-selected'));
	var conceptName = $('#optionsList').find('li.ui-selected')[0].id;
	var idName = conceptName.slice(0,conceptName.length - 6);
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
		if (idName === 'dribbble') {
			getDribbble();
		} else {
			parseFeed(feedUrl, idName);
		}
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
			$(str).append('<p>' + cont + '</p>')
			var div = document.createElement("div");
			
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var a = document.createElement("a");
				a.text = entry.title;
				a.href = entry.link;
				div.appendChild(a);
				$(str).append(div);
			}
		}
  });
};
google.setOnLoadCallback(parseFeed);
