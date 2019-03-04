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
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td> </tr> <tr> <th>List Price</th> <td>" + itemPrice + "</td> </tr> <tr> <th>Platform</th> <td>" + itemPlatform + "</td> </tr> <tr> <th>ESRB Rating</th> <td>" + itemESRB + "</td></tr><tr> <th>Condition</th> <td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//calculating the average customer rating of the game
var ratingsSum = 0;

//sets the ratingsCount variable equal to the ratings array
var ratingsCount = ratings.length;

//first for loop of the ratings array
for (var i = 0; i <= ratingsCount; i++) {
    ratingsSum += ratings[i];
}

//this determines the rating average
var ratingsAvg = ratingsSum / ratingsCount;
//this sets html to the ratingReport variable
var ratingReport = "<h1>Customer Reviews</h1> <h2> " + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

//second for loop displays the content of the first three customer reviews 
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1><table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";

    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

//this code calls back the html code into the javascript
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;