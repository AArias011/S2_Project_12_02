"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Anthony Arias 
   Date:   2/28/19
   
   Filename: hg_report.js
	
*/
//writes information about the game that will be displayed in the web page.
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id=”gameImg” /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr>  <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//calculating the average customer rating of the game
var ratingsSum = 0;

//sets the ratingsCount variable equal to the ratings array
var ratingsCount = ratings.length;

//loops through the contents of the ratings array
for (var i = 0; i < ratings.length; i = ratings + ratingsSum) {
    var ratingsAvg = ratingsSum / ratingsCount;
    var ratingReport = "<h1>Customer Reviews</h1> <h2> " + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";
}

for (var i = 0; i <= 2; i++) {
    var ratingReport = "div class='review'> <h1>" + ratingTitles + "</h1><table> <tr><th>By</th><td>" + ratingAuthors + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates + "</td></tr> <tr><th>Rating</th><td>";

    for (var i = 0; i <= 4; i++) {
        var ratingReport = "<img src=”hg_star.png” />"
    }

    var ratingReport = "</td></tr></table>" + ratingSummaries + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;