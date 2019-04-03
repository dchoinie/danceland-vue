const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCNDWh4DKtQK_51snKGwKpMlIpU9V8cCN8",
    authDomain: "danceland-cr.firebaseapp.com",
    projectId: "danceland-cr"
  });
  
var db = firebase.firestore();

var artists = [  
    {
        "Year": 1954,
        "Date": "Jan 1",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "82¢ + tax",
        "ImgLocation": "/img/1954/1954-1-1.jpg"
      },
      {
        "Year": 1954,
        "Date": "Jan 2",
        "Weekday": "Saturday",
        "Artist": "Dell Clayton & His Orchestra with Glenna Frazier",
        "Price": "82¢ till 9 / $1.02 after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 6",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 8",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 9",
        "Weekday": "Saturday",
        "Artist": "Verne Byers & His Orchestra with Audre Lynn",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 13",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His Orchestra with Audre Lynn",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 15",
        "Weekday": "Friday",
        "Artist": "Iowa Cornhuskers",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 16",
        "Weekday": "Saturday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 20",
        "Weekday": "Wednesday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 22",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 23",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 27",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 29",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "82¢  + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 30",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jan 31",
        "Weekday": "Sunday",
        "Artist": "Earl Lanier / Del Taylor",
        "Price": "March of Dimes Benefit Dance",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 3",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 5",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 6",
        "Weekday": "Saturday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 10",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 12",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 13",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 17",
        "Weekday": "Wednesday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 19",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 20",
        "Weekday": "Saturday",
        "Artist": "Jack Payne with Norma Clark",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 23",
        "Weekday": "Tuesday",
        "Artist": "Frank Yankovic & His Yanks",
        "Price": "$1.02 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 24",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 26",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Feb 27",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 2",
        "Weekday": "Tuesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 3",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 5",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 6",
        "Weekday": "Saturday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 10",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 12",
        "Weekday": "Friday",
        "Artist": "Iowa Cornhuskers / Joe's Troubadors",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 13",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 17",
        "Weekday": "Wednesday",
        "Artist": "Variety Club Orchestra / Earl's Western Playboys",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 19",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 20",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 24",
        "Weekday": "Wednesday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 26",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 27",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Mar 31",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "69¢ till 9 / 82¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 2",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 3",
        "Weekday": "Saturday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 7",
        "Weekday": "Wednesday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 9",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Earl Lanier with Hermie Roloff (steel guitar)",
        "Price": "82¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 10",
        "Weekday": "Saturday",
        "Artist": "Don Scott & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 14",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 17",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 18",
        "Weekday": "Sunday",
        "Artist": "Variety Club Orchestra / Earl's Western Playboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 21",
        "Weekday": "Wednesday",
        "Artist": "Don Decker",
        "Price": "75¢ till 9 / 89¢ after+ tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 22",
        "Weekday": "Thursday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 23",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 24",
        "Weekday": "Saturday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 28",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Apr 30",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Joe's Troubadors",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 1",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Cynthia Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 5",
        "Weekday": "Wednesday",
        "Artist": "Don Decker / Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 7",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 8",
        "Weekday": "Saturday",
        "Artist": "Don Decker",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 12",
        "Weekday": "Wednesday",
        "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
        "Price": "75¢ till 9 / 89¢  after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 14",
        "Weekday": "Friday",
        "Artist": "Iowa Cornhuskers",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 15",
        "Weekday": "Saturday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 18",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 19",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "66¢ till 9 / 75¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 21",
        "Weekday": "Friday",
        "Artist": "Red Blanchard with Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 22",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra with Red Dasch & Eddie Roberts",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 26",
        "Weekday": "Wednesday",
        "Artist": "Ronnie Bartley & His Orchestra with Patty Chase",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 28",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "May 29",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 2",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 4",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 5",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 7",
        "Weekday": "Monday",
        "Artist": "Wedding Dance - Delores A. Reider / Richard D. Clark",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 9",
        "Weekday": "Wednesday",
        "Artist": "Del Taylor",
        "Price": "69¢ till 9 / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 11",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Joe's Troubadors",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 12",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 15",
        "Weekday": "Tuesday",
        "Artist": "Wedding Dance - Marna Margaret Morrissey & Dale H. Butz",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 16",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 18",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 19",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 23",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 25",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 26",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Cynthia Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jun 30",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "75¢ till 9:15 / 85¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 2",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 3",
        "Weekday": "Saturday",
        "Artist": "Larry Barrett with Bobbie Cotter",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 7",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "75¢ till 9:15 / 85¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 9",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 10",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 14",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "75¢ till 9:15 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 16",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 17",
        "Weekday": "Saturday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 21",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra with Lynn Janson",
        "Price": "75¢ till 9:15 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 23",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 24",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 28",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 / 85¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 30",
        "Weekday": "Friday",
        "Artist": "Andy Doll",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Jul 31",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 4",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "75¢ till 9:15 / 85¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 6",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 7",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 11",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "75¢ till 9:15 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 13",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 14",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 18",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 19",
        "Weekday": "Thursday",
        "Artist": "Wedding Dance - Dorothy Mae Rieder / Albert J. Schulte",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 20",
        "Weekday": "Friday",
        "Artist": "Andy Doll / Pug's Western Playboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 21",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 23",
        "Weekday": "Monday",
        "Artist": "Six Fat Dutchmen / Kenny Hofer & His Midwesterners",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 25",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra with Glenna Frazier",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 27",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Aug 28",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 1",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 3",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 4",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 7",
        "Weekday": "Tuesday",
        "Artist": "WNAX Bohemian Band",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 8",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra with Glenn Frazier",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 10",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 11",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 15",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 17",
        "Weekday": "Friday",
        "Artist": "Iowa Cornhukers",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 18",
        "Weekday": "Saturday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 22",
        "Weekday": "Wednesday",
        "Artist": "Little John Beecher & His Orchestra with Betty Jordan",
        "Price": "75¢ till 9 / 89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 24",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 25",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 28",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Sep 29",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 1",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 2",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 6",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 8",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 9",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 13",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 15",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 16",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra with Red Dasch",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 20",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 / 85¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 22",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys with Dempsy Jones & His Boys / The Blue Belles",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 23",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 26",
        "Weekday": "Tuesday",
        "Artist": "Fezz Fritsche & His Goosetown Band",
        "Price": "50¢ till 8:30 / $1.12 after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 27",
        "Weekday": "Wednesday",
        "Artist": "Larry Elliott & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 29",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Pug's Western Playboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Oct 30",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 3",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 4",
        "Weekday": "Thursday",
        "Artist": "Wayne King & His Orchestra",
        "Price": "$1.56 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 5",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 6",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 10",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 12",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys / Iowa Cornhuskers",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 13",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 16",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 17",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 19",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 20",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 24",
        "Weekday": "Wednesday",
        "Artist": "Del Taylor / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 26",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 27",
        "Weekday": "Saturday",
        "Artist": "Larry Barrett with Bobbie Cotter",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Nov 30",
        "Weekday": "Tuesday",
        "Artist": "Frank Yankovic & His Yanks",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 1",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 3",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 4",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra with Red Dasch",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 8",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra with Red Dasch",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 10",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 11",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 15",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra with Kay Canfield",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 17",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 18",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra / Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 22",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 23",
        "Weekday": "Thursday",
        "Artist": "Pug's Western Playboys with Jerry Smith & Jimmy Seeley, Koberley Sisters, Judy Mae",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 24",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 25",
        "Weekday": "Saturday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 29",
        "Weekday": "Wednesday",
        "Artist": "Variety Club Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 30",
        "Weekday": "Thursday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1954,
        "Date": "Dec 31",
        "Weekday": "Friday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 1",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 5",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 7",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 8",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 12",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 13",
        "Weekday": "Thursday",
        "Artist": "John Best & His Sinfonians",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 14",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 15",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Judy Kay",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 19",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 21",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Miodwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 22",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 25",
        "Weekday": "Tuesday",
        "Artist": "Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 26",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 28",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jan 29",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 2",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 4",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 5",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra with Red Dasch (comedian)",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 9",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 11",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 12",
        "Weekday": "Saturday",
        "Artist": "Bobby Andrews",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 16",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 19",
        "Weekday": "Saturday",
        "Artist": "Jack Oatts & His Orchestra with Sue Morris",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 22",
        "Weekday": "Tuesday",
        "Artist": "Variety Club Orchestra / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 23",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 25",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Feb 26",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "85¢",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 4",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 5",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 9",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra with Kay Canfield",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 11",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 12",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 16",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 17",
        "Weekday": "Thursday",
        "Artist": "Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 19",
        "Weekday": "Saturday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 23",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 25",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 26",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Mar 30",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 1",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 2",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Betty Morgan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 6",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "66¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 8",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 9",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 11",
        "Weekday": "Monday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 15",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 16",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 19",
        "Weekday": "Tuesday",
        "Artist": "WNAX Bohemian Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 20",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 22",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 23",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 27",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 29",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Apr 30",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 4",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 6",
        "Weekday": "Friday",
        "Artist": "Howdy Roberts & WMT Rangers / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 7",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese with Eugenie Scott",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 11",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 13",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 14",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 18",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 20",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Jerry Smith",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 21",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 25",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His  CBS Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 27",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "May 28",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 1",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 3",
        "Weekday": "Friday",
        "Artist": "Howdy Roberts & WMT Rangers / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 4",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 7",
        "Weekday": "Tuesday",
        "Artist": "Teenage Dance Party",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 8",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 9",
        "Weekday": "Thursday",
        "Artist": "Variety Club Orchestra",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 10",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 11",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 14",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 15",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 16",
        "Weekday": "Thursday",
        "Artist": "Del Taylor",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 17",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 18",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 22",
        "Weekday": "Wednesday",
        "Artist": "Jimmy O'Dette",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 23",
        "Weekday": "Thursday",
        "Artist": "Variety Club Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 24",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 25",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Betty Morgan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jun 29",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 1",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 2",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 6",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 8",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 9",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 13",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 14",
        "Weekday": "Thursday",
        "Artist": "Del Taylor Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 15",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 16",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 20",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 22",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 23",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 27",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 28",
        "Weekday": "Thursday",
        "Artist": "Howdy Roberts & The WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 29",
        "Weekday": "Friday",
        "Artist": "Pee Wee King & His Golden West Cowboys / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Jul 30",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 2",
        "Weekday": "Tuesday",
        "Artist": "Sauter-Finegan Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 3",
        "Weekday": "Wednesday",
        "Artist": "Jimmy O'Dette",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 5",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 6",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra with Betty Morgan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 10",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 12",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 13",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra with Susan Shaw",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 17",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 19",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 20",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 24",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 26",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 27",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Aug 31",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 2",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 3",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 6",
        "Weekday": "Tuesday",
        "Artist": "WNAX Bohemian Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 7",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 9",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 10",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 14",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 17",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 19",
        "Weekday": "Monday",
        "Artist": "Wedding Dance - Wilhelm / Sperry",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 21",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 23",
        "Weekday": "Friday",
        "Artist": "Pee Wee King & His Golden West Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 24",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 28",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Sep 30",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 1",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 5",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 6",
        "Weekday": "Thursday",
        "Artist": "Bill Haley & His Comets / Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 7",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 8",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 11",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 12",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 14",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 15",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 19",
        "Weekday": "Wednesday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 21",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys / Marshall J.",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 22",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 26",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 28",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 29",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Oct 30",
        "Weekday": "Sunday",
        "Artist": "Boyd Bennett & His Rockets",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 2",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 4",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 5",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 8",
        "Weekday": "Tuesday",
        "Artist": "Bob Wills & His Texas Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 9",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 11",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 12",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 16",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra / Del Taylor Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 18",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 19",
        "Weekday": "Saturday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 23",
        "Weekday": "Wednesday",
        "Artist": "Pug's Western Playboys with Leo Cortimiglia (WMT TV personality)",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 25",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 26",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 29",
        "Weekday": "Tuesday",
        "Artist": "Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Nov 30",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 2",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 3",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 7",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "66¢ till 9 / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 9",
        "Weekday": "Friday",
        "Artist": "Pee Wee King & His Golden West Cowboys / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 10",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 14",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 16",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 17",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 21",
        "Weekday": "Wednesday",
        "Artist": "Del Taylor Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 23",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 24",
        "Weekday": "Saturday",
        "Artist": "No Dance - Christmas Eve",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 25",
        "Weekday": "Sunday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 28",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "66¢ till 9 / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 30",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1955,
        "Date": "Dec 31",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "$1.79 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 4",
        "Weekday": "Wednesday",
        "Artist": "Variety Club Orchestra",
        "Price": "66¢ till 9 / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 6",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 7",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 11",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 13",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 14",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 18",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 20",
        "Weekday": "Friday",
        "Artist": "Webb Pierce / Howdy Roberts & WMT Rangers",
        "Price": "$1.54 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 21",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 25",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 27",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jan 28",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 1",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "69¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 3",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 4",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 8",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 9",
        "Weekday": "Thursday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 10",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 11",
        "Weekday": "Saturday",
        "Artist": "Dick Talbot",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 14",
        "Weekday": "Tuesday",
        "Artist": "Howdy Roberts & WMT Rangers / Variety Club Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 15",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 17",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 18",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 22",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "75¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 24",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan / Floyd Warren's Radio Ramblers with Montana Mary",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 25",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Feb 29",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 2",
        "Weekday": "Friday",
        "Artist": "Bill Wimberly & His Country Rhythm Boys / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 3",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 7",
        "Weekday": "Wednesday",
        "Artist": "Louie De Klotz & His Orchestra",
        "Price": "66¢ till 9 / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 9",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 10",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 14",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra with Barbara Kerns & The Singing Stars",
        "Price": "76¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 17",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra with WMT's Martin Peterson",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 21",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His KXEL Airliners",
        "Price": "76¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 23",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 24",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 28",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 30",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Mar 31",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 4",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra / Gibby Gibson",
        "Price": "76¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 6",
        "Weekday": "Friday",
        "Artist": "Porter Wagoner / Kenny Hofer & His Midwesterners",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 7",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 11",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 12",
        "Weekday": "Thursday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 13",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 14",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "Girls 50¢ till 9:30",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 18",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "76¢ till 9 / 84¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 19",
        "Weekday": "Thursday",
        "Artist": "Del Taylor Orchestra",
        "Price": "Free",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 20",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 21",
        "Weekday": "Saturday",
        "Artist": "Hank Schooley & His Orchestra",
        "Price": "Girls 50¢ till 9:15",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 25",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 27",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Apr 28",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 2",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 4",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 5",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 9",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 11",
        "Weekday": "Friday",
        "Artist": "Webb Pierce",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 12",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 16",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "75¢ till 9 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 17",
        "Weekday": "Thursday",
        "Artist": "Leo Cortimiglia & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 18",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 19",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 23",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 25",
        "Weekday": "Friday",
        "Artist": "Rusty Draper / Kenny Hofer & His MIdwesterners",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 26",
        "Weekday": "Saturday",
        "Artist": "Rusty Draper / Carroll Baker & His Orchestra",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "May 30",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9 (no tax) / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 1",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 2",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 6",
        "Weekday": "Wednesday",
        "Artist": "Gibby Gibson",
        "Price": "50¢ till 9 (no tax) / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 8",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 9",
        "Weekday": "Saturday",
        "Artist": "Hank Schooley & His Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 13",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 15",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 16",
        "Weekday": "Saturday",
        "Artist": "Jack Manthey",
        "Price": "Ladies 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 20",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 22",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 23",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 26",
        "Weekday": "Tuesday",
        "Artist": "Wedding Dance - Richard Miller / Elda Woods",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 27",
        "Weekday": "Wednesday",
        "Artist": "Gibby Gibson",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 29",
        "Weekday": "Friday",
        "Artist": "Bobby Lord / Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jun 30",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra with Eugenie Scott",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 3",
        "Weekday": "Tuesday",
        "Artist": "Louie De Klotz & His Orchestra / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 4",
        "Weekday": "Wednesday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 6",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 7",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 11",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Men 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 13",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 14",
        "Weekday": "Saturday",
        "Artist": "Hank Schooley & His Orchestra",
        "Price": "Girls 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 18",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 20",
        "Weekday": "Friday",
        "Artist": "Porter Wagoner / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 21",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 25",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra with Barbara Kerns",
        "Price": "Ladies 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 27",
        "Weekday": "Friday",
        "Artist": "Marvin Rainwater / Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Jul 28",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 1",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 3",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 4",
        "Weekday": "Saturday",
        "Artist": "Hank Schooley & His Orchestra",
        "Price": "Girls 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 8",
        "Weekday": "Wednesday",
        "Artist": "Verne Byers & His CBS Orchestra with Barbara Kerns",
        "Price": "Girls 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 10",
        "Weekday": "Friday",
        "Artist": "Hank THompson & His Brazos Valley Boys",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 11",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Girls 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 15",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Girls 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 17",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 18",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 22",
        "Weekday": "Wednesday",
        "Artist": "Gibby Gibson",
        "Price": "50¢ till 9 (no tax) / 75¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 24",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 25",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "Girls 50¢ till 9 (no tax) / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 29",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Girls 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Aug 31",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 1",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Girls 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 5",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 7",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 8",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 12",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "Ladies 50¢ till 9 (no tax)",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 14",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 15",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 19",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Ryhthms",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 21",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 22",
        "Weekday": "Saturday",
        "Artist": "Hal Wiese & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 26",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 28",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson / Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Sep 29",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 3",
        "Weekday": "Wednesday",
        "Artist": "Ray Pearl & His Musical Gems",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 5",
        "Weekday": "Friday",
        "Artist": "Howdy Robets Rangers / Frank Buhr & His Midwest Ramblers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 6",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 10",
        "Weekday": "Wednesday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 12",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 13",
        "Weekday": "Saturday",
        "Artist": "Eddie Allen Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 17",
        "Weekday": "Wednesday",
        "Artist": "Dick Mango & His 14 Piece Orchestra",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 19",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 20",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 24",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 26",
        "Weekday": "Friday",
        "Artist": "Boyd Bennett & His Rockets",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 27",
        "Weekday": "Saturday",
        "Artist": "Hank Schooley & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 30",
        "Weekday": "Tuesday",
        "Artist": "Teenage Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Oct 31",
        "Weekday": "Wednesday",
        "Artist": "Gibby Gibson",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 2",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 3",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 7",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 9",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 10",
        "Weekday": "Saturday",
        "Artist": "Vance Dioxon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 12",
        "Weekday": "Monday",
        "Artist": "Six Fat Dutchmen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 13",
        "Weekday": "Tuesday",
        "Artist": "Teen Record Hop - Dave Albright",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 14",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 16",
        "Weekday": "Friday",
        "Artist": "Webb Pierce / Red Sovine / Pug's Western Playboys / Howdy Roberts WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 17",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 21",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra with Fran Clarke",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 23",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 24",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 28",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Nov 30",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 1",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 5",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 7",
        "Weekday": "Friday",
        "Artist": "Faron Young / Jimmy & Johnny / Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 8",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 12",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 14",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 15",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 19",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 21",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys - Johnny Cash cancelled",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 22",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 25",
        "Weekday": "Tuesday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 26",
        "Weekday": "Wednesday",
        "Artist": "Commanders",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 28",
        "Weekday": "Friday",
        "Artist": "Frank Buhr & His Midwest Ramblers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 29",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1956,
        "Date": "Dec 31",
        "Weekday": "Monday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 2",
        "Weekday": "Wednesday",
        "Artist": "Joe Doakes & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 4",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 5",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 9",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 11",
        "Weekday": "Friday",
        "Artist": "Porter Wagoner / Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 12",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 16",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 18",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 19",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 23",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 25",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 26",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jan 30",
        "Weekday": "Wednesday",
        "Artist": "Chuck Foster & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 1",
        "Weekday": "Friday",
        "Artist": "Jim Reeves & His Wagon Masters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 2",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 5",
        "Weekday": "Tuesday",
        "Artist": "Commanders",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 6",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 8",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 9",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 13",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 15",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 16",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 20",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 22",
        "Weekday": "Friday",
        "Artist": "Frank Buhr & His Midwest Ramblers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 23",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His KXEL Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 26",
        "Weekday": "Tuesday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Feb 27",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 1",
        "Weekday": "Friday",
        "Artist": "Johnny Cash / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 2",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 5",
        "Weekday": "Tuesday",
        "Artist": "Louie DeKlotz & His Orchestra / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 6",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 8",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 9",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 13",
        "Weekday": "Wednesday",
        "Artist": "Guy Lombardo & His Royal Canadians",
        "Price": "$2.50 @ door / $2.25 advance",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 15",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 16",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 17",
        "Weekday": "Sunday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 20",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 22",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 23",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 27",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 29",
        "Weekday": "Friday",
        "Artist": "Frank Buhr & His Midwest Ramblers / Floyd Warren's Radio Ramblers with Montana Mary",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Mar 30",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 3",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 5",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 6",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 10",
        "Weekday": "Wednesday",
        "Artist": "Al Galante",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 12",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 13",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 17",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 19",
        "Weekday": "Friday",
        "Artist": "KXEL MIdwest Carvan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 20",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 24",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 26",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 27",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 28",
        "Weekday": "Sunday",
        "Artist": "St. Matthews Church Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Apr 29",
        "Weekday": "Monday",
        "Artist": "Wedding Dance - Charles Cerveny / Ellen Perrin",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 1",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 3",
        "Weekday": "Friday",
        "Artist": "Ray Price / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 4",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 8",
        "Weekday": "Wednesday",
        "Artist": "Don Glasser & His Orchestra featuring \"Miss Energy\" Lois Costello",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 10",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 11",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 14",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 15",
        "Weekday": "Wednesday",
        "Artist": "Ronnie Bartley & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 17",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 18",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 22",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 24",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 25",
        "Weekday": "Saturday",
        "Artist": "Boby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 29",
        "Weekday": "Wednesday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "May 31",
        "Weekday": "Friday",
        "Artist": "Marty Robbins / Lee Emerson / KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 1",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 5",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 7",
        "Weekday": "Friday",
        "Artist": "Floyd Warren's Radio Ramblers with Montana Mary",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 8",
        "Weekday": "Saturday",
        "Artist": "Jack Payne's Ambassadors",
        "Price": "Ladies 50¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 12",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 14",
        "Weekday": "Friday",
        "Artist": "Leroy Van Dyke / Pug's Western Playboys",
        "Price": "$1.00 till 9 / $1.25 after",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 15",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 19",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 21",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 22",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 26",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 28",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jun 29",
        "Weekday": "Saturday",
        "Artist": "Scott-Clark Orchestra",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 3",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 5",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 6",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "Ladies 50¢ - Men 75¢ till 9 / 89¢ after + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 10",
        "Weekday": "Wednesday",
        "Artist": "Bob Calame & His Sparkling Rhythms",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 12",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 13",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 17",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ - Men 75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 19",
        "Weekday": "Friday",
        "Artist": "Leon McAuliffe & His Cimarron Boys",
        "Price": "$1.00 till 9 / $1.50 after",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 20",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 24",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 26",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 27",
        "Weekday": "Saturday",
        "Artist": "Bert Lavine's Ambassadors",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Jul 31",
        "Weekday": "Wednesday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 2",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 3",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 7",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 9",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 10",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 14",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "50¢ till 9 / $1.00 a couple",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 16",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys vs. Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 17",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 21",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 23",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 24",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 28",
        "Weekday": "Wednesday",
        "Artist": "Chuck Foster & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 30",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Aug 31",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 4",
        "Weekday": "Wednesday",
        "Artist": "Don Shaw & His Trombonnaires",
        "Price": "75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 6",
        "Weekday": "Friday",
        "Artist": "Everly Brothers / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 7",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 11",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "Ladies 75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 13",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 14",
        "Weekday": "Saturday",
        "Artist": "Bert Lavine's Ambassadors",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 17",
        "Weekday": "Tuesday",
        "Artist": "Gene Vincent & His Blue Caps",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 18",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 20",
        "Weekday": "Friday",
        "Artist": "Cady Brothers vs. Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 21",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra with Donna on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 25",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 27",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Sep 28",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "75¢ till 9 / 88¢ after",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 1",
        "Weekday": "Tuesday",
        "Artist": "Six Fat Dutchmen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 2",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His KXEL Airliners",
        "Price": "Ladies 50¢ till",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 4",
        "Weekday": "Friday",
        "Artist": "Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 5",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "75¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 9",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 11",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 12",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 16",
        "Weekday": "Wednesday",
        "Artist": "Gibby Gibson",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 18",
        "Weekday": "Friday",
        "Artist": "Leon McAuliffe & His Cimarron Boys with Don Cannon",
        "Price": "$1.00 till 9 / $1.50 after",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 19",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 23",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 25",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 26",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Oct 30",
        "Weekday": "Wednesday",
        "Artist": "Jimmy Featherstone Orchestra featuring Francine Pryor (vocals)",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 1",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys / Clarence Zahina's Barnstormers featuring the Zahina Sisters",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 2",
        "Weekday": "Saturday",
        "Artist": "Bert Lavine's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 5",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 6",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 8",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 9",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 13",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 15",
        "Weekday": "Friday",
        "Artist": "Hank Thompson & His Brazos Valley Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 16",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His KXEL Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 20",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 22",
        "Weekday": "Friday",
        "Artist": "Jerry Lee Lewis / Pug's Western Playboys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 23",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 27",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 29",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners vs. Dale Thomas & The Bandera Boys",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Nov 30",
        "Weekday": "Saturday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 4",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His KXEL Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 6",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 7",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 11",
        "Weekday": "Wednesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 13",
        "Weekday": "Friday",
        "Artist": "Bobby Helms / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 14",
        "Weekday": "Saturday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 15",
        "Weekday": "Sunday",
        "Artist": "Buddy Knox- Jimmy Bowen & The Rhythm Orchids - Danceland Bandstand",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 18",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 20",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson / Bob & Bobbie Thomas / Johnny Ketelsen's New Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 21",
        "Weekday": "Saturday",
        "Artist": "Bert Lavine's Ambassadors",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 22",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 25",
        "Weekday": "Wednesday",
        "Artist": "Pug's Western Playboys / Cady Brothers / Dale Thomas & The Bandera Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 27",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 28",
        "Weekday": "Saturday",
        "Artist": "Louie DeKlotz & His Orchestra / Dale Thomas & His Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 29",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1957,
        "Date": "Dec 31",
        "Weekday": "Tuesday",
        "Artist": "Bobby Lindeman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 1",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Happy New Year",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 3",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 4",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 5",
        "Weekday": "Sunday",
        "Artist": "Gene Vincent & His Blue Caps - Danceland Bandstand",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 8",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 10",
        "Weekday": "Friday",
        "Artist": "Cady Brothers vs. KXEL Midwest Caravan",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 11",
        "Weekday": "Saturday",
        "Artist": "Des Moines Rock Band / Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 12",
        "Weekday": "Sunday",
        "Artist": "Des Moines Rock Band - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 15",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 17",
        "Weekday": "Friday",
        "Artist": "Johnny Ketlesen's New Tom Owen's Cowboys vs. Pug's Western Playboys",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 19",
        "Weekday": "Sunday",
        "Artist": "Rock-A-Beats - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 21",
        "Weekday": "Tuesday",
        "Artist": "Howdy Roberts & WMT Rangers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 22",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 24",
        "Weekday": "Friday",
        "Artist": "Clarence Zahina & His Barnstormers featuring The Zahina Sisters",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 25",
        "Weekday": "Saturday",
        "Artist": "Lindy's Rhythm Rockets",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 26",
        "Weekday": "Sunday",
        "Artist": "Comet-Aires - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 29",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jan 31",
        "Weekday": "Friday",
        "Artist": "Buddy Knox - Jimmy Bowen & The Rhythm Orchids / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 1",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 2",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 5",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 7",
        "Weekday": "Friday",
        "Artist": "Cady Brothers / Joe's Troubadors",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 8",
        "Weekday": "Saturday",
        "Artist": "Dukes Of Dixieland",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 9",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 12",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 14",
        "Weekday": "Friday",
        "Artist": "Johnny Ketlesen's New Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 16",
        "Weekday": "Sunday",
        "Artist": "Eddie Randall & The Downbeats - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 18",
        "Weekday": "Tuesday",
        "Artist": "Louie DeKlotz & His Orchestra / Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 19",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 21",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 22",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 23",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 26",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Feb 28",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 1",
        "Weekday": "Saturday",
        "Artist": "Louie DeKlotz & His Orchestra / Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 2",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 5",
        "Weekday": "Wednesday",
        "Artist": "Jimmie Adams Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 7",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 8",
        "Weekday": "Saturday",
        "Artist": "Lindy's Rhythm Rockets",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 9",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 12",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 14",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 15",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 16",
        "Weekday": "Sunday",
        "Artist": "Crescendos - Danceland Bandstand",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 17",
        "Weekday": "Monday",
        "Artist": "Kenny Hofer & His MIdwesterners / Dale Thomas & The Bandera Boys",
        "Price": "89¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 19",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 21",
        "Weekday": "Friday",
        "Artist": "Johnny Cash / Carl Perkins / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 22",
        "Weekday": "Saturday",
        "Artist": "Dell Clayton & His Orchestra with Sandy Sands",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 23",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 26",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 28",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 29",
        "Weekday": "Saturday",
        "Artist": "Jimmie Adams Orchestra / Eddie Randall & The Downbeats",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Mar 30",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 4",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 5",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 6",
        "Weekday": "Sunday",
        "Artist": "Record Hop - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 9",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 11",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 12",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 13",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 16",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 19",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 23",
        "Weekday": "Wednesday",
        "Artist": "Jimmy Thomas & His Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 25",
        "Weekday": "Friday",
        "Artist": "Don Gibson / Johnny Ketelsen's New Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 26",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats / Louie DeKlotz & His Orchestra",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 29",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Apr 30",
        "Weekday": "Wednesday",
        "Artist": "Jimmie Adams Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 2",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 3",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 7",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 9",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 10",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats / Jimmie Adams Orchestra",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 14",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 16",
        "Weekday": "Friday",
        "Artist": "Jim Reeves / Johnny Ketelsen's New Tom Owen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 17",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 21",
        "Weekday": "Wednesday",
        "Artist": "Richard Maltby & His Orchestra with Mary Mazza",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 23",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 24",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 28",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 30",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "May 31",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 4",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 6",
        "Weekday": "Friday",
        "Artist": "Johnny Ketelsen's New Tom Owen's Cowboys / Cady Brothers",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 7",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 10",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 11",
        "Weekday": "Wednesday",
        "Artist": "Tommy Allan & His Orchestra with Jeanne Carroll",
        "Price": "88¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 13",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 14",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 18",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 20",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 21",
        "Weekday": "Saturday",
        "Artist": "Variety Club Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 25",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 27",
        "Weekday": "Friday",
        "Artist": "Hank Thompson & His Brazos Valley Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jun 28",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 2",
        "Weekday": "Wednesday",
        "Artist": "Chuck Foster & His Orchestra featuring Lee Shearin & Milly Coury",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 4",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 5",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 9",
        "Weekday": "Wednesday",
        "Artist": "Jimmy Thomas & His Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 11",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 12",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 16",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 18",
        "Weekday": "Friday",
        "Artist": "Billy Walker / Cady Brothers",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 23",
        "Weekday": "Wednesday",
        "Artist": "Don Shaw",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 25",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 26",
        "Weekday": "Saturday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Jul 30",
        "Weekday": "Wednesday",
        "Artist": "Tommy Allan & His Orchestra with Jeanne Carroll",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 1",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 2",
        "Weekday": "Saturday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 6",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 8",
        "Weekday": "Friday",
        "Artist": "Kitty Wells / Johnnie & Jack / Jimmy Newman / Tennessee Mountain Boys / Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 9",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 13",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 15",
        "Weekday": "Friday",
        "Artist": "Norma Jean / Floyd Warren's Radio Ramblers",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 20",
        "Weekday": "Wednesday",
        "Artist": "Buddy Moore Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 22",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 23",
        "Weekday": "Saturday",
        "Artist": "Dukes Of Dixieland",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 27",
        "Weekday": "Wednesday",
        "Artist": "Don Shaw Band & His Top 40 Band",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 29",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Aug 30",
        "Weekday": "Saturday",
        "Artist": "Carroll Baker & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 3",
        "Weekday": "Wednesday",
        "Artist": "Tommy Allan & His Orchestra with Jeanne Carroll",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 5",
        "Weekday": "Friday",
        "Artist": "Johnny Cash / Don Gibson / Bobby Helms / Wanda Jackson / Golden Hawks / Pug's Western Playboys",
        "Price": "$1.56 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 6",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 10",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 12",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 13",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 17",
        "Weekday": "Wednesday",
        "Artist": "Jimmy Thomas & His Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 19",
        "Weekday": "Friday",
        "Artist": "Norma Jean / Bobby Lord / Kenny Hofer & His MIdwesterners",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 20",
        "Weekday": "Saturday",
        "Artist": "Vance Dixon Orchestra with Donna on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 24",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 25",
        "Weekday": "Thursday",
        "Artist": "Bobby Darin / Jimmy Clanton / Dion & The Belmonts / Jo Ann Campbell / Tony Pastor & Orchestra",
        "Price": "$1.34 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 26",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Sep 27",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "88¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 1",
        "Weekday": "Wednesday",
        "Artist": "Louie Deklotz & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 3",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan (Dale Hawkins cancelled)",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 4",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys / Eddie Randall & The Downbeats",
        "Price": "88¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 8",
        "Weekday": "Wednesday",
        "Artist": "Teddy Phillips & His Orchestra featuring Colleen Lovett",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 10",
        "Weekday": "Friday",
        "Artist": "Leon McAuliffe & His Cimarron Boys plus Don Cannon",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 11",
        "Weekday": "Saturday",
        "Artist": "Louie DeKlotz & His Orchestra / Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 12",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 15",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 17",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 18",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "88¢ + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 19",
        "Weekday": "Sunday",
        "Artist": "Big Beats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 22",
        "Weekday": "Wednesday",
        "Artist": "Jimmie Adams Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 24",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 25",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 26",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 29",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Oct 31",
        "Weekday": "Friday",
        "Artist": "Johnny Ketelsen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 1",
        "Weekday": "Saturday",
        "Artist": "Jimmy Smith & His Orchestra / Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 2",
        "Weekday": "Sunday",
        "Artist": "Eddie Randall & The Downbeats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 5",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell & His Airliners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 7",
        "Weekday": "Friday",
        "Artist": "Hank Thompaon & His Brazos Valley Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 8",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 9",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 12",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra with Donna on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 14",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 15",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 16",
        "Weekday": "Sunday",
        "Artist": "Big Beats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 18",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 19",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 21",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 22",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 23",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 26",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 28",
        "Weekday": "Friday",
        "Artist": "Johnny Ketelsen's Cowboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 29",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Nov 30",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 3",
        "Weekday": "Wednesday",
        "Artist": "Tommy Allan & His Orchestra with Jeanne Carroll",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 5",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 6",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 7",
        "Weekday": "Sunday",
        "Artist": "Big Beats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 10",
        "Weekday": "Wednesday",
        "Artist": "Jimmy Thomas & His Band",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 12",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 13",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 14",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 17",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 19",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 20",
        "Weekday": "Saturday",
        "Artist": "Jimmie Adams Orchestra / Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 21",
        "Weekday": "Sunday",
        "Artist": "Eddie Randall & The Downbeats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 24",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Christmas Eve",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 25",
        "Weekday": "Thursday",
        "Artist": "Pug's Western Playboys / Eddie Randall & The Downbeats",
        "Price": "$1.12 + tax",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 26",
        "Weekday": "Friday",
        "Artist": "Will Mercer / Cady Brothers",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 27",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 28",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meeks - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1958,
        "Date": "Dec 31",
        "Weekday": "Wednesday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 2",
        "Weekday": "Friday",
        "Artist": "Tommy Edwards / Miidwest Carvan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 3",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 4",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 7",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 9",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 10",
        "Weekday": "Saturday",
        "Artist": "Jimmy Clanton / The Highlights",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 11",
        "Weekday": "Sunday",
        "Artist": "Jimmy Clanton / The Highlights - Danceland Bandstand",
        "Price": "90¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 14",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra featuring Joan Murray",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 17",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meek",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 18",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie Meek - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 21",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 23",
        "Weekday": "Friday",
        "Artist": "Suzi Arden / Cady Brothers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 24",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 25",
        "Weekday": "Sunday",
        "Artist": "Big Beats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 28",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 30",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 31",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 1",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 4",
        "Weekday": "Wednesday",
        "Artist": "Jimmie Adams Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 6",
        "Weekday": "Friday",
        "Artist": "Frankie Avalon / Jimmy Clanton / Dion & The Belmonts / Crickets with Ronnie Smith / Frankie Sardo / Midwest Carvan",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 7",
        "Weekday": "Saturday",
        "Artist": "Jimmy Bowen / Johnny Carroll / Eddie Randall & The Downbeats",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 8",
        "Weekday": "Sunday",
        "Artist": "Eddie Randall & The Downbeats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 10",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 11",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 13",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 14",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 15",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 18",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 20",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 22",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 24",
        "Weekday": "Tuesday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 25",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 27",
        "Weekday": "Friday",
        "Artist": "Conway Twitty / Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Feb 28",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 1",
        "Weekday": "Sunday",
        "Artist": "Big Beats - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 4",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 6",
        "Weekday": "Friday",
        "Artist": "Diamonds / Pug's Western Playboys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 7",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 8",
        "Weekday": "Sunday",
        "Artist": "Highlights - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 11",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 13",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan / Bobby Merritt & The Deons featuring Dick Busher",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 14",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 15",
        "Weekday": "Sunday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 17",
        "Weekday": "Tuesday",
        "Artist": "Buddy Knox & The Rhythm Orchids / Big Beats",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 18",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 20",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 22",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 25",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra featuring Joan Murray",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 27",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 28",
        "Weekday": "Saturday",
        "Artist": "Bill Sherrell & The Dell Tones",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Mar 29",
        "Weekday": "Sunday",
        "Artist": "Bill Sherrell & The Dell Tones - Danceland Bandstand",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 1",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 3",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 4",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 8",
        "Weekday": "Wednesday",
        "Artist": "Jimmie Adams Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 10",
        "Weekday": "Friday",
        "Artist": "Jim Reeves & The Wagonmasters / Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 11",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 15",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 16",
        "Weekday": "Thursday",
        "Artist": "Pug's Western Playboys",
        "Price": "$1.00 donation",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 17",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIidwesterners / Country Gentlemen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 22",
        "Weekday": "Wednesday",
        "Artist": "Little John Beecher & His Orchestra featuring Betty Jordan",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 24",
        "Weekday": "Friday",
        "Artist": "Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 25",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 28",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Apr 29",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 1",
        "Weekday": "Friday",
        "Artist": "Fabian / Pug's Western Playboys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 2",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 6",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 8",
        "Weekday": "Friday",
        "Artist": "Frank Buhr's Midwest Ramblers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 9",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 13",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 15",
        "Weekday": "Friday",
        "Artist": "Duane Eddy / Dale Hawkins / Kenny Hofer & His Midwesterners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 20",
        "Weekday": "Wednesday",
        "Artist": "Blue Barron & His Orchestra featuring Shirley Taylor & The Blue Notes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 22",
        "Weekday": "Friday",
        "Artist": "Dick  Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 23",
        "Weekday": "Saturday",
        "Artist": "Bill Sherrell & The Dell Tones",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 27",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 29",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "May 30",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats / Bob Boston & Bob-O-Links",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 3",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 5",
        "Weekday": "Friday",
        "Artist": "Frank Buhr's Midwest Ramblers / Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 6",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 10",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 12",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 13",
        "Weekday": "Saturday",
        "Artist": "Eddie Cochran / Tommy Dee / Highlights",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 17",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra featuring Joan Murray",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 19",
        "Weekday": "Friday",
        "Artist": "Freddy Cannon / Frankie Ford / Gary Stites / Mystics / Carl Dobkins Jr. / Barbara Evans / Johnny & The Hurricanes / Kenny Hofer & His Midwesterners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 20",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 24",
        "Weekday": "Wednesday",
        "Artist": "Paul Neighbors & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 26",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 27",
        "Weekday": "Saturday",
        "Artist": "Dion & The Belmonts / Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jun 29",
        "Weekday": "Monday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 1",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 3",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 4",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats / Bob Boston & Bob-O-Links / Larry Dowd & The Rock-A-Tones",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 10",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 11",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 15",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 17",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 22",
        "Weekday": "Wednesday",
        "Artist": "Little John Beecher & His Orchestra featuring Dee Wald",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 24",
        "Weekday": "Friday",
        "Artist": "Cady Brothers / Dukes Of Rock 'N' Roll",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 25",
        "Weekday": "Saturday",
        "Artist": "Rockin' R's / Steve Bledsoe & The Blue Jays / Gary Shelton / Debbie Stevens",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 28",
        "Weekday": "Tuesday",
        "Artist": "Dick Miller & His Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 29",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jul 31",
        "Weekday": "Friday",
        "Artist": "Bob & Bobbie Thomas / Country Gentlemen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 1",
        "Weekday": "Saturday",
        "Artist": "Kenny Loran / Escorts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 5",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Girls 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 7",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 8",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 12",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 14",
        "Weekday": "Friday",
        "Artist": "Johnny Horton / Cady Brothers",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 19",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 21",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 22",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 26",
        "Weekday": "Wednesday",
        "Artist": "Jack Cole & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 28",
        "Weekday": "Friday",
        "Artist": "Jimmy Clanton / Gary Stites / Santo & Johnny / Tempos / Dick Caruso / Bell Notes / Kenny Hofer & His Midwesterners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Aug 29",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames / Bob Boston & Bob-O-Links",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 4",
        "Weekday": "Friday",
        "Artist": "KXEL Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 5",
        "Weekday": "Saturday",
        "Artist": "Johnny Cash & The Tennessee Two / Don Shaw & His Top 40 Band",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 9",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 11",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 12",
        "Weekday": "Saturday",
        "Artist": "Tony Bellus / Fireballs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 16",
        "Weekday": "Wednesday",
        "Artist": "Vance Dixon Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 23",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 25",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 26",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Sep 30",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 2",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 3",
        "Weekday": "Saturday",
        "Artist": "Floyd Robinson / Bucky & The Premieres",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 7",
        "Weekday": "Wednesday",
        "Artist": "Big Tiny Little / Louis DeKlotz & His Orchestra",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 9",
        "Weekday": "Friday",
        "Artist": "Dick MIller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 10",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 14",
        "Weekday": "Wednesday",
        "Artist": "Little John Beecher & His Orchestra featuring Dee Wald",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 16",
        "Weekday": "Friday",
        "Artist": "Johnny & The Hurricanes / Sandy Nelson / Skip & Flip / Freddy Cannon / Roscoe & The Little Green Men / Kenny Hofer & His Midwesterners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 17",
        "Weekday": "Saturday",
        "Artist": "Mitchell Torok / Jimmy Bowen / Don & Billy Hart / Bucky & The Premiers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 21",
        "Weekday": "Wednesday",
        "Artist": "Blue Barron & His Orchestra featuring Shirley Taylor & The Blue Notes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 23",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 24",
        "Weekday": "Saturday",
        "Artist": "Bob Boston & Bob-O-Links / Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 28",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 30",
        "Weekday": "Friday",
        "Artist": "Judy Lynn / Cowboy Copas / Grandpa Jones / Little Della Rae / Pat Kelly & The Shamrocks",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Oct 31",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 4",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 6",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 7",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 10",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 11",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 13",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 14",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 18",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 20",
        "Weekday": "Friday",
        "Artist": "Rock-A-Teens / Passions / Joe London / Tommy Facenda / Kenny Hofer & His Midwesterners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 25",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 27",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Nov 28",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 4",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 5",
        "Weekday": "Saturday",
        "Artist": "Rockin' R's",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 9",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 11",
        "Weekday": "Friday",
        "Artist": "Cady Brothers / Country Gentlemen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 12",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 16",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Dick Miller & The Rhythmasters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 19",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 23",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 25",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 26",
        "Weekday": "Saturday",
        "Artist": "Bucky & The Premieres",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 28",
        "Weekday": "Monday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 30",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Dec 31",
        "Weekday": "Thursday",
        "Artist": "Pug's Western Playboys / Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1959,
        "Date": "Jan 2",
        "Weekday": "Friday",
        "Artist": "Tommy Edwards / Miidwest Carvan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 1",
        "Weekday": "Friday",
        "Artist": "Country Gentlemen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 2",
        "Weekday": "Saturday",
        "Artist": "Bob Boston & Bob-O-Links vs. The Shades",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 6",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 8",
        "Weekday": "Friday",
        "Artist": "Johnny Cash & The Tennessee Two / Pug's Western Playboys",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 9",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 13",
        "Weekday": "Wednesday",
        "Artist": "The Aristocrats with Mary on vocals",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 15",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 20",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 22",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 23",
        "Weekday": "Saturday",
        "Artist": "Carl Mann - cancelled",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 27",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra featuring Joan Murray",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 29",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jan 30",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames / Collegiates",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 3",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 5",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 6",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 10",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 12",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters featuring Dottie",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 13",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 17",
        "Weekday": "Wednesday",
        "Artist": "Ralph Zarnow & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 19",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 20",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 24",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 26",
        "Weekday": "Friday",
        "Artist": "Carl Mann / Kenny Hofer & His Midwesterners",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Feb 27",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band featuring Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 1",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 2",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 4",
        "Weekday": "Friday",
        "Artist": "Jimmy Clanton / Frankie Ford / Johnny Ferguson / Ray Smith / Champs / Pug's Western Playboys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 5",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The  Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 9",
        "Weekday": "Wednesday",
        "Artist": "Jack Payne",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 11",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 12",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Badnera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 16",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 17",
        "Weekday": "Thursday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 18",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 19",
        "Weekday": "Saturday",
        "Artist": "Bob Boston & Bob-O-Links",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 23",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 25",
        "Weekday": "Friday",
        "Artist": "Country Gentlemen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 26",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 29",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys / Dan Sears & Band",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Mar 30",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra with Joan Murray",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 1",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 2",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 6",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 8",
        "Weekday": "Friday",
        "Artist": "Jim Reeves / Dick Miller & The Rhythmasters",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 9",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames vs. Collegiates",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 13",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 15",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 20",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 22",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson / Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 23",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 27",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 29",
        "Weekday": "Friday",
        "Artist": "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Apr 30",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 4",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 6",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 7",
        "Weekday": "Saturday",
        "Artist": "Tornadoes",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 11",
        "Weekday": "Wednesday",
        "Artist": "Russ Carlyle & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 13",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 14",
        "Weekday": "Saturday",
        "Artist": "Jags",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 18",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 20",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Drifters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 25",
        "Weekday": "Wednesday",
        "Artist": "Blue Dominoes Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 27",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "May 28",
        "Weekday": "Saturday",
        "Artist": "Four Preps / Eddie Randall & The Downbeats",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 1",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 3",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 4",
        "Weekday": "Saturday",
        "Artist": "Jody & The Vagabonds",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 10",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 11",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 15",
        "Weekday": "Wednesday",
        "Artist": "Smokey Stover",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 17",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 18",
        "Weekday": "Saturday",
        "Artist": "Fendermen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 22",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 24",
        "Weekday": "Friday",
        "Artist": "Hollywood Argyles / Country Gentlemen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 25",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jun 29",
        "Weekday": "Wednesday",
        "Artist": "Sammy Stevens & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 1",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 2",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 6",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 8",
        "Weekday": "Friday",
        "Artist": "Johnny Ferguson / Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 9",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 13",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 15",
        "Weekday": "Friday",
        "Artist": "Fendermen / Kenny Hofer & His MIdwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 16",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 20",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 22",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan / Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 23",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 27",
        "Weekday": "Wednesday",
        "Artist": "Big Tiny Little / Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 29",
        "Weekday": "Friday",
        "Artist": "Carl Dobkins, Jr. / Hollywood Argyles / Skip & Flip / Skyliners / Danny Valentino / Drifters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Jul 30",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 3",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 5",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 6",
        "Weekday": "Saturday",
        "Artist": "Bobby Rydell / Buddy Morrow & His Night Train Orchestra / Rock 'N Flames",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 10",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 12",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 13",
        "Weekday": "Saturday",
        "Artist": "Jags",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 17",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 19",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His MIdwesterners / Shades",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 20",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 24",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 26",
        "Weekday": "Friday",
        "Artist": "Garry Miles / Casuals / Country Gentlemen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 27",
        "Weekday": "Saturday",
        "Artist": "Donnie Brooks / Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Aug 31",
        "Weekday": "Wednesday",
        "Artist": "Dancetown Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 2",
        "Weekday": "Friday",
        "Artist": "Johnny Burnette / Freddy Cannon / Dicky Doo & The Don'ts / Crests / Johnny McKay / Dick Caruso+",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 3",
        "Weekday": "Saturday",
        "Artist": "Tornadoes",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 7",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 9",
        "Weekday": "Friday",
        "Artist": "Johnny Preston / Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 10",
        "Weekday": "Saturday",
        "Artist": "Fireballs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 14",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Nikki & Her Top 40 Band",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 17",
        "Weekday": "Saturday",
        "Artist": "Johnny Cash / Dale Thomas & The Bandera Boys",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 21",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 23",
        "Weekday": "Friday",
        "Artist": "Drifters / Shades",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 24",
        "Weekday": "Saturday",
        "Artist": "Fendermen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 28",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Sep 30",
        "Weekday": "Friday",
        "Artist": "Brian Hyland / Highlights / Country Gentlemen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 1",
        "Weekday": "Saturday",
        "Artist": "Don Shaw & His Top 40 Band with Ronnie & Tommy",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 5",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 7",
        "Weekday": "Friday",
        "Artist": "Buddy Knox / Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 8",
        "Weekday": "Saturday",
        "Artist": "Tornadoes",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 11",
        "Weekday": "Tuesday",
        "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 12",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 14",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 21",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners / Country Gentlemen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 22",
        "Weekday": "Saturday",
        "Artist": "Bobby Vee / Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 23",
        "Weekday": "Sunday",
        "Artist": "Bobby Vee / Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 26",
        "Weekday": "Wednesday",
        "Artist": "Big Tiny Little / Eddie Skeets / Marv Reedstrom / Tiny Little, Sr.",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 28",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 29",
        "Weekday": "Saturday",
        "Artist": "Flairs",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Oct 30",
        "Weekday": "Sunday",
        "Artist": "Nikki & The No Names",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 4",
        "Weekday": "Friday",
        "Artist": "Gene Mills / Pug's Western Playboys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 5",
        "Weekday": "Saturday",
        "Artist": "Gene Vincent / Tornadoes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 6",
        "Weekday": "Sunday",
        "Artist": "Teen Dance Party",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 9",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 11",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 12",
        "Weekday": "Saturday",
        "Artist": "Jack Scott / Champs / Danny & The Juniors / Larry Ellis / Oliver Cool / Nikki & The No Names",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 16",
        "Weekday": "Wednesday",
        "Artist": "Dancetown Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 18",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 23",
        "Weekday": "Wednesday",
        "Artist": "Don Glasser & His Orchestra featuring \"Miss Energy\" Lois Costello",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 25",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 26",
        "Weekday": "Saturday",
        "Artist": "Fendermen",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Nov 30",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 2",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 3",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 7",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 9",
        "Weekday": "Friday",
        "Artist": "Dick Miller & His Rhythmasters",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 10",
        "Weekday": "Saturday",
        "Artist": "Johnny Tillotson / Tornadoes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 14",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 16",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 17",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 21",
        "Weekday": "Wednesday",
        "Artist": "Dancetown Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 23",
        "Weekday": "Friday",
        "Artist": "Midwest Caravan / Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 24",
        "Weekday": "Saturday",
        "Artist": "No Dance - Christmas Eve",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 25",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 28",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 30",
        "Weekday": "Friday",
        "Artist": "Bobby Helms / Bobby Hankins & The Blue Boys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1960,
        "Date": "Dec 31",
        "Weekday": "Saturday",
        "Artist": "Highlights / Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 4",
        "Weekday": "Wednesday",
        "Artist": "Marv Pesek & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 6",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 7",
        "Weekday": "Saturday",
        "Artist": "Tornadoes",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 11",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 13",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 14",
        "Weekday": "Saturday",
        "Artist": "Donnie Brooks / Highlights",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 18",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 20",
        "Weekday": "Friday",
        "Artist": "Drifters / Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 25",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 27",
        "Weekday": "Friday",
        "Artist": "Bobby Lord / Bobby Hankins & The Blue Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jan 28",
        "Weekday": "Saturday",
        "Artist": "Fendermen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 1",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 3",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 4",
        "Weekday": "Saturday",
        "Artist": "Bill Black Combo / Gary Stites / Gene Simmons",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 10",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 11",
        "Weekday": "Saturday",
        "Artist": "Tornadoes",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 14",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 15",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 17",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys / Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 22",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 24",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Feb 25",
        "Weekday": "Saturday",
        "Artist": "Bob Boston & Bob-O-Links / Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 1",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 3",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 4",
        "Weekday": "Saturday",
        "Artist": "Bobby Vee / Ventures / Checkers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 8",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 10",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 11",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 15",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 17",
        "Weekday": "Friday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 22",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 24",
        "Weekday": "Friday",
        "Artist": "Fendermen / Bobby Hankins & The Blue Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 25",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 29",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Mar 31",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 1",
        "Weekday": "Saturday",
        "Artist": "Danny & The Juniors / Dicky Doo & The Don'ts / Johnny Maestro / Gerry Granahan",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 5",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra / Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 7",
        "Weekday": "Friday",
        "Artist": "Buck Owens / Pug's Western Playboys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 8",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 12",
        "Weekday": "Wednesday",
        "Artist": "Dancetown Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 14",
        "Weekday": "Friday",
        "Artist": "Larry Verne / Dick Miller & The Rhythmasters",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 15",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 19",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 21",
        "Weekday": "Friday",
        "Artist": "Donnie Brooks / Highlights",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 22",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 26",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 28",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Apr 29",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 3",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 5",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 6",
        "Weekday": "Saturday",
        "Artist": "Del Shannon / String-A-Longs / Ersel Hickey",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 10",
        "Weekday": "Wednesday",
        "Artist": "Pee Wee Hunt & His 12th Street Ragtime Band",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 12",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters",
        "Price": "$1.00 / 25¢ with 7-Up ticket",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 13",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 17",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 19",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 20",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 24",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 26",
        "Weekday": "Friday",
        "Artist": "Kenny Hofer & His Midwesterners",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 27",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "May 31",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 2",
        "Weekday": "Friday",
        "Artist": "Pug's Western Playboys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 3",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 7",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 9",
        "Weekday": "Friday",
        "Artist": "Dick Miller & The Rhythmasters / Ravens",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 10",
        "Weekday": "Saturday",
        "Artist": "Tony Orlando / B. Bumble & The Stingers / Cathy Jean / Roommates / Ral Donner",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 14",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 16",
        "Weekday": "Friday",
        "Artist": "Rock 'N Flames / Kenny Hofer & His Midwesterners",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 17",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 21",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 23",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "$1.00 / 25¢ with Pepsi-Cola ticket",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 24",
        "Weekday": "Saturday",
        "Artist": "Dion / Phil Humphries & The Fendermen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 28",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts with Willard Sass",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jun 30",
        "Weekday": "Friday",
        "Artist": "Buddy Knox",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 1",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 4",
        "Weekday": "Tuesday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 5",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 7",
        "Weekday": "Friday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 8",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 12",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 14",
        "Weekday": "Friday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 21",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 22",
        "Weekday": "Saturday",
        "Artist": "Highlights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 26",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts with Willard Sass",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 28",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Jul 29",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 2",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 4",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 5",
        "Weekday": "Saturday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 9",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 11",
        "Weekday": "Friday",
        "Artist": "Bobby Bare / Ravens",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 12",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 16",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 18",
        "Weekday": "Friday",
        "Artist": "Shadows",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & the Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 23",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 25",
        "Weekday": "Friday",
        "Artist": "Ray Ruff / Chuck Tharp / Checkmates",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 26",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Aug 30",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 1",
        "Weekday": "Friday",
        "Artist": "Bobby Hankins & The Blue Boys",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 2",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 6",
        "Weekday": "Wednesday",
        "Artist": "Louis DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 8",
        "Weekday": "Friday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 9",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 13",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 15",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 16",
        "Weekday": "Saturday",
        "Artist": "Bobby Bare / Ravens",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 20",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts featuring Willard Sass",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 22",
        "Weekday": "Friday",
        "Artist": "Nikki & The No Names",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 23",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 27",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 29",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Sep 30",
        "Weekday": "Saturday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 4",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 6",
        "Weekday": "Friday",
        "Artist": "Champs",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 7",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 11",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra featuring Jeanne Hunt",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 13",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 14",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 18",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts featuring Willard Sass",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 20",
        "Weekday": "Friday",
        "Artist": "Ral Donner / Ray Stevens / Tony Orlando / Janie Grant / Bobby Vinton / Prep Tones",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 25",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 27",
        "Weekday": "Friday",
        "Artist": "Johnny Burnette / Bobby Hankins & The Blue Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 28",
        "Weekday": "Saturday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Oct 31",
        "Weekday": "Tuesday",
        "Artist": "Sparks / Bop Cats / Ravens",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 1",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 3",
        "Weekday": "Friday",
        "Artist": "Dick & Dee Dee / Jan & Dean / Jerry Fuller / Checkers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 4",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 10",
        "Weekday": "Friday",
        "Artist": "Dion / Roscoe & The Little Green Men",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 11",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 15",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 17",
        "Weekday": "Friday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 18",
        "Weekday": "Saturday",
        "Artist": "Jimmy Dean / Al, Larry & The Untouchables",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 22",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 24",
        "Weekday": "Friday",
        "Artist": "Ravens",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 25",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Nov 29",
        "Weekday": "Wednesday",
        "Artist": "Dixie Six with Bob & Chuck",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 1",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 2",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 6",
        "Weekday": "Wednesday",
        "Artist": "Marv Pesek & His Orchestra",
        "Price": "Ladies 50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 8",
        "Weekday": "Friday",
        "Artist": "Bop Cats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 9",
        "Weekday": "Saturday",
        "Artist": "Al, Larry & The Untouchables with Carol Chipman",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 13",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 15",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 16",
        "Weekday": "Saturday",
        "Artist": "Johnny Cash / Johnny Western / Eddie Randall & The Downbeats",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 20",
        "Weekday": "Wednesday",
        "Artist": "Dixie Six",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 22",
        "Weekday": "Friday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 23",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 25",
        "Weekday": "Monday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 27",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 29",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 30",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1961,
        "Date": "Dec 31",
        "Weekday": "Sunday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 3",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 5",
        "Weekday": "Friday",
        "Artist": "Ravens",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 6",
        "Weekday": "Saturday",
        "Artist": "Al, Larry & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 10",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 12",
        "Weekday": "Friday",
        "Artist": "Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 13",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 17",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 19",
        "Weekday": "Friday",
        "Artist": "Champs",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 20",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 24",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 26",
        "Weekday": "Friday",
        "Artist": "Bob Boston & Bob-O-Links",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 27",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jan 31",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 2",
        "Weekday": "Friday",
        "Artist": "Bill Haley & His Comets",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 3",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 7",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 9",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 10",
        "Weekday": "Saturday",
        "Artist": "Al & The New Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 14",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 16",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson & Her Party Timers",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 17",
        "Weekday": "Saturday",
        "Artist": "Joey Dee & The Starliters",
        "Price": "$1.50 till 9 / $1.75 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 21",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 23",
        "Weekday": "Friday",
        "Artist": "Bop Cats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 24",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Feb 28",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 2",
        "Weekday": "Friday",
        "Artist": "Johnny Burnette / Tony's Liberty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 3",
        "Weekday": "Saturday",
        "Artist": "Tony & The Knights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 6",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 7",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 9",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 10",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 14",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 16",
        "Weekday": "Friday",
        "Artist": "Ravens",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 17",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 21",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 23",
        "Weekday": "Friday",
        "Artist": "Champs",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 24",
        "Weekday": "Saturday",
        "Artist": "Johnny Cash / Al & The Untouchables",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 28",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 30",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Mar 31",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 4",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "Ladies 50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 6",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 7",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 11",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 13",
        "Weekday": "Friday",
        "Artist": "Jerry Page & The Radicals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 14",
        "Weekday": "Saturday",
        "Artist": "Al & The New Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 18",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 20",
        "Weekday": "Friday",
        "Artist": "Torquays",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 25",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 27",
        "Weekday": "Friday",
        "Artist": "Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Apr 28",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 2",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 4",
        "Weekday": "Friday",
        "Artist": "Billy Joe & The Checkmates / Ray Ruff",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 5",
        "Weekday": "Saturday",
        "Artist": "Al & The New Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 9",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 11",
        "Weekday": "Friday",
        "Artist": "Del Shannon / Brian Hyland / Belmonts / Kenny Chandler / Jamie Coe / Gigolos",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 12",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 16",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 18",
        "Weekday": "Friday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 23",
        "Weekday": "Wednesday",
        "Artist": "Dell Clayton & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 25",
        "Weekday": "Friday",
        "Artist": "Bop Cats",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 26",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 27",
        "Weekday": "Sunday",
        "Artist": "Eddie Randall & The Downbeats / Happy Bright",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "May 30",
        "Weekday": "Wednesday",
        "Artist": "Big Tiny Little / Eddie Skeets & His Orchestra",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 1",
        "Weekday": "Friday",
        "Artist": "Tom Blair & The West Coasters",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 2",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 6",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 8",
        "Weekday": "Friday",
        "Artist": "Torquays",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 9",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 15",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 20",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 22",
        "Weekday": "Friday",
        "Artist": "Jay & The Americans / Babs Tino / Ban Lons",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 23",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 27",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 29",
        "Weekday": "Friday",
        "Artist": "Eddie Randall & the Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jun 30",
        "Weekday": "Saturday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 4",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 6",
        "Weekday": "Friday",
        "Artist": "Hollywood Argyles",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 7",
        "Weekday": "Saturday",
        "Artist": "Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 11",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 13",
        "Weekday": "Friday",
        "Artist": "Linda Scott / Marketts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 14",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 18",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 20",
        "Weekday": "Friday",
        "Artist": "Everly Brothers / Bob Boston & Bob-O-Links",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 25",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 27",
        "Weekday": "Friday",
        "Artist": "Freddy Cannon",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Jul 28",
        "Weekday": "Saturday",
        "Artist": "Tony & The Knights",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 1",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 3",
        "Weekday": "Friday",
        "Artist": "Bobby Vee & The Shadows",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 4",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 8",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 10",
        "Weekday": "Friday",
        "Artist": "Playboys",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 11",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis / Al & The New Untouchables",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 15",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 17",
        "Weekday": "Friday",
        "Artist": "Buddy Knox",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 18",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 22",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 24",
        "Weekday": "Friday",
        "Artist": "Gene Pitney / Bobby Vinton / Gary Criss / Bachelors",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 25",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 29",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Aug 31",
        "Weekday": "Friday",
        "Artist": "Johnny Tillotson / Troy Seals",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 1",
        "Weekday": "Saturday",
        "Artist": "Johnny Cash / Bob Boston & The Answers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 5",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 7",
        "Weekday": "Friday",
        "Artist": "Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 8",
        "Weekday": "Saturday",
        "Artist": "Myron Lee & The Caddies",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 12",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 14",
        "Weekday": "Friday",
        "Artist": "Duane Eddy & The Rebels",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 19",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 21",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 22",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 26",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 28",
        "Weekday": "Friday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Sep 29",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & the Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 3",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 5",
        "Weekday": "Friday",
        "Artist": "Playboys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 6",
        "Weekday": "Saturday",
        "Artist": "Al & the Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 10",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 12",
        "Weekday": "Friday",
        "Artist": "Champs",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 13",
        "Weekday": "Saturday",
        "Artist": "Bill Black Combo",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 17",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 19",
        "Weekday": "Friday",
        "Artist": "Big Beats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 20",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis / Dale Thomas",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 24",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 26",
        "Weekday": "Friday",
        "Artist": "Brian Hyland / Tony Orlando / Bachelors",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 27",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Oct 31",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 2",
        "Weekday": "Friday",
        "Artist": "Neil Sedaka",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 3",
        "Weekday": "Saturday",
        "Artist": "James Moore & the Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 7",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 9",
        "Weekday": "Friday",
        "Artist": "Torquays",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 10",
        "Weekday": "Saturday",
        "Artist": "Al & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 14",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 16",
        "Weekday": "Friday",
        "Artist": "Dale Thomas",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 17",
        "Weekday": "Saturday",
        "Artist": "Leon Martin & The Cleffs",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 21",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 23",
        "Weekday": "Friday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 24",
        "Weekday": "Saturday",
        "Artist": "Joey Dee & The Starliters",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 28",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Nov 30",
        "Weekday": "Friday",
        "Artist": "Jimmy Clanton / Flames",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 1",
        "Weekday": "Saturday",
        "Artist": "Al & The Untouchables",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 2",
        "Weekday": "Sunday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$2.00 per couple",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 5",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 7",
        "Weekday": "Friday",
        "Artist": "Duprees / Eddie Randall & The Downbeats",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 8",
        "Weekday": "Saturday",
        "Artist": "Ravens",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 12",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedsrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 14",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 15",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 16",
        "Weekday": "Sunday",
        "Artist": "Showman Orchestra 2-4 (50¢) / Aristocrats ($1.25)",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 21",
        "Weekday": "Friday",
        "Artist": "Denny & the Dynamics",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 22",
        "Weekday": "Saturday",
        "Artist": "Dickey Lee / Rhythm Kings",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 25",
        "Weekday": "Tuesday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 26",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 28",
        "Weekday": "Friday",
        "Artist": "Bobby Vinton / Casuals",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 29",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men with Joyce Masters & The Twisters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1962,
        "Date": "Dec 31",
        "Weekday": "Monday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 2",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 4",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 5",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 9",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 11",
        "Weekday": "Friday",
        "Artist": "Fendermen",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 12",
        "Weekday": "Saturday",
        "Artist": "Torquays",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 16",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 18",
        "Weekday": "Friday",
        "Artist": "Ventures",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 23",
        "Weekday": "Wednesday",
        "Artist": "Don Hoy & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 25",
        "Weekday": "Friday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 26",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis / Steve Bledsoe & The Blue Jays",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 27",
        "Weekday": "Sunday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 30",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jan 31",
        "Weekday": "Thursday",
        "Artist": "George Hamilton IV / Bobby Hankins & The Blue Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 1",
        "Weekday": "Friday",
        "Artist": "4 Seasons/ Escorts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 2",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 6",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 7",
        "Weekday": "Thursday",
        "Artist": "Pug's Western Playboys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 8",
        "Weekday": "Friday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 9",
        "Weekday": "Saturday",
        "Artist": "Sandy Nelson / Pastel Six",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 14",
        "Weekday": "Thursday",
        "Artist": "Little Jimmy Dickens / Dick Miller & The Rhythmasters",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 15",
        "Weekday": "Friday",
        "Artist": "Dion / Al's Untouchables",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 16",
        "Weekday": "Saturday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 20",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 21",
        "Weekday": "Thursday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 22",
        "Weekday": "Friday",
        "Artist": "Crickets",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 23",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 24",
        "Weekday": "Sunday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 26",
        "Weekday": "Tuesday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Feb 27",
        "Weekday": "Wednesday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 1",
        "Weekday": "Friday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 2",
        "Weekday": "Saturday",
        "Artist": "Myron Lee & The Caddies",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 6",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 8",
        "Weekday": "Friday",
        "Artist": "Bill Black Combo",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 9",
        "Weekday": "Saturday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 13",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 15",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 16",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 17",
        "Weekday": "Sunday",
        "Artist": "Dale Thomas & The Bandera Boys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 20",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 22",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 23",
        "Weekday": "Saturday",
        "Artist": "Freddy Cannon / Jerry Page & The Radicals",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 27",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 29",
        "Weekday": "Friday",
        "Artist": "Burch Ray & The Walkers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Mar 30",
        "Weekday": "Saturday",
        "Artist": "Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 3",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 5",
        "Weekday": "Friday",
        "Artist": "Top 40 Caravan",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 6",
        "Weekday": "Saturday",
        "Artist": "Brian Hyland / Al's Untouchables",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 10",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 12",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 13",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 17",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 19",
        "Weekday": "Friday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 20",
        "Weekday": "Saturday",
        "Artist": "Thundermen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 24",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 26",
        "Weekday": "Friday",
        "Artist": "Fendermen",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Apr 27",
        "Weekday": "Saturday",
        "Artist": "Beach Boys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 1",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 3",
        "Weekday": "Friday",
        "Artist": "Wanda Jackson & Her Party Timers",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 4",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 10",
        "Weekday": "Friday",
        "Artist": "Crickets",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 11",
        "Weekday": "Saturday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 15",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 17",
        "Weekday": "Friday",
        "Artist": "Joey Dee & The Starliters",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 18",
        "Weekday": "Saturday",
        "Artist": "James Moore & The Rock 'N Flames",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 22",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 24",
        "Weekday": "Friday",
        "Artist": "Paul & Paula / Steve Alaimo / Lou Christie / Johnny Cymbal / Charlie Russo / Ronnie Cochrane +",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 25",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 29",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "May 31",
        "Weekday": "Friday",
        "Artist": "Bill Black Combo",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 1",
        "Weekday": "Saturday",
        "Artist": "Bobby Vinton / Eddie Randall & The Downbeats",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 5",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 7",
        "Weekday": "Friday",
        "Artist": "Mike & The Showmen",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 8",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 9",
        "Weekday": "Sunday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 12",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 14",
        "Weekday": "Friday",
        "Artist": "Champs",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 15",
        "Weekday": "Saturday",
        "Artist": "Randy Proffitt / Carol Chipman / The Beachcombers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 21",
        "Weekday": "Friday",
        "Artist": "Nu Continentals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 22",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 26",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 28",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jun 29",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 3",
        "Weekday": "Wednesday",
        "Artist": "Legends Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 5",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 6",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 10",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 12",
        "Weekday": "Friday",
        "Artist": "Everly Brothers / Escorts",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 13",
        "Weekday": "Saturday",
        "Artist": "Torquays",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 17",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 19",
        "Weekday": "Friday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 20",
        "Weekday": "Saturday",
        "Artist": "Beach Boys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 24",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 26",
        "Weekday": "Friday",
        "Artist": "Dimensions",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 27",
        "Weekday": "Saturday",
        "Artist": "Little Peggy March / Warner Brothers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Jul 31",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 2",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 3",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 7",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 9",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 10",
        "Weekday": "Saturday",
        "Artist": "Crickets",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 14",
        "Weekday": "Wednesday",
        "Artist": "Louie DeKlotz & His Orchestra",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 16",
        "Weekday": "Friday",
        "Artist": "Torquays",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 17",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 21",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 23",
        "Weekday": "Friday",
        "Artist": "Brian Hyland / Lou Christie / Ronnie Cochran / Kasuals",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 24",
        "Weekday": "Saturday",
        "Artist": "Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 28",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 30",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Aug 31",
        "Weekday": "Saturday",
        "Artist": "Dimensions",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 4",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 6",
        "Weekday": "Friday",
        "Artist": "Johnny Tillotson / Eddie Randall & The Downbeats",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 7",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 11",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 13",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 14",
        "Weekday": "Saturday",
        "Artist": "Checkmates",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 18",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 20",
        "Weekday": "Friday",
        "Artist": "Timi Yuro / Warner Brothers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 21",
        "Weekday": "Saturday",
        "Artist": "Legends",
        "Price": "50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 25",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 27",
        "Weekday": "Friday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Sep 28",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 2",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 4",
        "Weekday": "Friday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 5",
        "Weekday": "Saturday",
        "Artist": "Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 9",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 11",
        "Weekday": "Friday",
        "Artist": "Johnny & The Shy Guys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 12",
        "Weekday": "Saturday",
        "Artist": "Chubby Checker",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 16",
        "Weekday": "Wednesday",
        "Artist": "Dick Ballard & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 18",
        "Weekday": "Friday",
        "Artist": "Roscoe & The Little Green Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 19",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 23",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 25",
        "Weekday": "Friday",
        "Artist": "Johnny & The Shy Guys",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 26",
        "Weekday": "Saturday",
        "Artist": "Imperials",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Oct 30",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 1",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 2",
        "Weekday": "Saturday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 6",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 8",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 9",
        "Weekday": "Saturday",
        "Artist": "Jay & The Americans",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 15",
        "Weekday": "Friday",
        "Artist": "Exotics",
        "Price": "Free",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 16",
        "Weekday": "Saturday",
        "Artist": "Jimmy Gilmer & The Fireballs",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 20",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 22",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 23",
        "Weekday": "Saturday",
        "Artist": "Roy Orbison",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 26",
        "Weekday": "Tuesday",
        "Artist": "Six Fat Dutchmen",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 27",
        "Weekday": "Wednesday",
        "Artist": "Chuck Marshall",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 29",
        "Weekday": "Friday",
        "Artist": "Exotics",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Nov 30",
        "Weekday": "Saturday",
        "Artist": "Strangers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 4",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 6",
        "Weekday": "Friday",
        "Artist": "Nu Legends",
        "Price": "Free",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 7",
        "Weekday": "Saturday",
        "Artist": "Tommy Roe / Roscoe & The Little Green Men",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 11",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "Ladies 50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 13",
        "Weekday": "Friday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 14",
        "Weekday": "Saturday",
        "Artist": "Eddie Randall & The Downbeats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 18",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 20",
        "Weekday": "Friday",
        "Artist": "Terry & The Avengers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 21",
        "Weekday": "Saturday",
        "Artist": "Dale Thomas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 25",
        "Weekday": "Wednesday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 27",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 28",
        "Weekday": "Saturday",
        "Artist": "Danny Joe & The Flairs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1963,
        "Date": "Dec 31",
        "Weekday": "Tuesday",
        "Artist": "Kingsmen / Eddie Randall & The Downbeats",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 1",
        "Weekday": "Wednesday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 3",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 4",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 8",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 10",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "50¢ till 8:30",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 11",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 15",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 17",
        "Weekday": "Friday",
        "Artist": "Catalinas",
        "Price": "50¢  till 8:30 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 18",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 22",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 24",
        "Weekday": "Friday",
        "Artist": "Jimmy Carroll & The Sonic Breakers",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 25",
        "Weekday": "Saturday",
        "Artist": "Trashmen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 29",
        "Weekday": "Wednesday",
        "Artist": "Dick Ballard & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jan 31",
        "Weekday": "Friday",
        "Artist": "Exotics",
        "Price": "50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 1",
        "Weekday": "Saturday",
        "Artist": "Jan & Dean / Denny & The Dynamics",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 5",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 7",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 8",
        "Weekday": "Saturday",
        "Artist": "Lou Christie / Roscoe & The Little Green Men featuring Misty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 11",
        "Weekday": "Tuesday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 12",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 14",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 15",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 21",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 22",
        "Weekday": "Saturday",
        "Artist": "Danny Joe & The Flairs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 26",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 28",
        "Weekday": "Friday",
        "Artist": "Empalas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Feb 29",
        "Weekday": "Saturday",
        "Artist": "Marketts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 4",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing with Russ Jonas (vocals)",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 6",
        "Weekday": "Friday",
        "Artist": "Lee James & The Rockin' Fellas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 7",
        "Weekday": "Saturday",
        "Artist": "Nino Tempo & April Stevens / Jimmy Peterson & The Chicagoans",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 11",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "Free",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 13",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 14",
        "Weekday": "Saturday",
        "Artist": "Rivieras",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 18",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 20",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 21",
        "Weekday": "Saturday",
        "Artist": "Rip Chords / Al's Untouchables",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 25",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 27",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Mar 28",
        "Weekday": "Saturday",
        "Artist": "Jimmy Clanton / Dee Dee Sharp / Ronnie Cochrane / Galaxies",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 1",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 3",
        "Weekday": "Friday",
        "Artist": "Casuals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 4",
        "Weekday": "Saturday",
        "Artist": "Dale & Grace / Nu-Continentals",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 8",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 10",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 11",
        "Weekday": "Saturday",
        "Artist": "Bobby Vinton / Velaires",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 15",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 17",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 18",
        "Weekday": "Saturday",
        "Artist": "Champs",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 22",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 24",
        "Weekday": "Friday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 25",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Apr 29",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 1",
        "Weekday": "Friday",
        "Artist": "Intruders",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 2",
        "Weekday": "Saturday",
        "Artist": "Terry Stafford / Bob Miller & The Sparks",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 6",
        "Weekday": "Wednesday",
        "Artist": "Dukes Of Dancing with Russ Jonas (vocals)",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 8",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 9",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 15",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 16",
        "Weekday": "Saturday",
        "Artist": "Bobby Goldsboro / Bill Black Combo",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 20",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00 / Ladies 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 22",
        "Weekday": "Friday",
        "Artist": "?",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 23",
        "Weekday": "Saturday",
        "Artist": "Roy Orbison",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 27",
        "Weekday": "Wednesday",
        "Artist": "Howdy Roberts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 29",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "May 30",
        "Weekday": "Saturday",
        "Artist": "Al's Untouchables / Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 3",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 5",
        "Weekday": "Friday",
        "Artist": "Crystals / Brian Hyland / Galaxies",
        "Price": "$1. 75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 6",
        "Weekday": "Saturday",
        "Artist": "Lee James & The Rockin' Fellas",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 10",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 12",
        "Weekday": "Friday",
        "Artist": "Rivieras",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 13",
        "Weekday": "Saturday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 17",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 19",
        "Weekday": "Friday",
        "Artist": "Trokays",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 20",
        "Weekday": "Saturday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 24",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 26",
        "Weekday": "Friday",
        "Artist": "Astronauts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jun 27",
        "Weekday": "Saturday",
        "Artist": "Al & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 1",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 3",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 4",
        "Weekday": "Saturday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 8",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 10",
        "Weekday": "Friday",
        "Artist": "Warner Brothers",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 11",
        "Weekday": "Saturday",
        "Artist": "Roy Orbison",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 15",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 17",
        "Weekday": "Friday",
        "Artist": "Everly Brothers / Stompers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 18",
        "Weekday": "Saturday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 22",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 24",
        "Weekday": "Friday",
        "Artist": "Ronettes / Road Runners",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 25",
        "Weekday": "Saturday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 29",
        "Weekday": "Wednesday",
        "Artist": "Commanders",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Jul 31",
        "Weekday": "Friday",
        "Artist": "Odyesses",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 1",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 5",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 7",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 8",
        "Weekday": "Saturday",
        "Artist": "Bobby Vee / Myron Lee & The Caddies",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 12",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 14",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 15",
        "Weekday": "Saturday",
        "Artist": "Terry Stafford",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 19",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 21",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 22",
        "Weekday": "Saturday",
        "Artist": "Trashmen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 26",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 28",
        "Weekday": "Friday",
        "Artist": "Denny & The Dynamics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Aug 29",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 2",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 4",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 5",
        "Weekday": "Saturday",
        "Artist": "Velaires",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 9",
        "Weekday": "Wednesday",
        "Artist": "Commanders",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 11",
        "Weekday": "Friday",
        "Artist": "Countdowns",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 12",
        "Weekday": "Saturday",
        "Artist": "Roger Miller / Dale & The Dates",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 16",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 18",
        "Weekday": "Friday",
        "Artist": "Viscounts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 19",
        "Weekday": "Saturday",
        "Artist": "Chuck Berry / Stompers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 23",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 25",
        "Weekday": "Friday",
        "Artist": "Al & The Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 26",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Sep 30",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 2",
        "Weekday": "Friday",
        "Artist": "Torkays",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 3",
        "Weekday": "Saturday",
        "Artist": "Gene Simmons / Top 40 Band from Canada",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 7",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 9",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 10",
        "Weekday": "Saturday",
        "Artist": "Troy Shondell",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 14",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 16",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 17",
        "Weekday": "Saturday",
        "Artist": "Astronauts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 21",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 23",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 24",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 28",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 30",
        "Weekday": "Friday",
        "Artist": "Viscounts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Oct 31",
        "Weekday": "Saturday",
        "Artist": "Little Green Men featuring Misty",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 4",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 6",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 7",
        "Weekday": "Saturday",
        "Artist": "Hondells",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 11",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 13",
        "Weekday": "Friday",
        "Artist": "Al's New Untouchables / Beachcombers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 14",
        "Weekday": "Saturday",
        "Artist": "Ronny & The Daytonas",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 18",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 20",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 21",
        "Weekday": "Saturday",
        "Artist": "Everly Brothers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 25",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 27",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Nov 28",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 2",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 4",
        "Weekday": "Friday",
        "Artist": "Al's New Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 5",
        "Weekday": "Saturday",
        "Artist": "Chuck Berry / Saints",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 9",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 11",
        "Weekday": "Friday",
        "Artist": "Private Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 12",
        "Weekday": "Saturday",
        "Artist": "Danny Joe & The Flairs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 16",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 18",
        "Weekday": "Friday",
        "Artist": "Saints / Ravens",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 19",
        "Weekday": "Saturday",
        "Artist": "Trashmen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 23",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 25",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 26",
        "Weekday": "Saturday",
        "Artist": "Chad & Jeremy / Bobby Goldsboro / Ronnie Cochrane / Jimmy Ford & The Executives",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1964,
        "Date": "Dec 31",
        "Weekday": "Thursday",
        "Artist": "Buddy Knox / Stompers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 1",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 2",
        "Weekday": "Saturday",
        "Artist": "Gestures",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 6",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 8",
        "Weekday": "Friday",
        "Artist": "3 Bands",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 9",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 13",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 15",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 16",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 20",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 22",
        "Weekday": "Friday",
        "Artist": "Viscounts with Carol Chipman",
        "Price": "$1.50 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 23",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 27",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 29",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jan 30",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 2",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 4",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1,00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 5",
        "Weekday": "Saturday",
        "Artist": "Myron Lee & The Caddies",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 10",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 12",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 13",
        "Weekday": "Saturday",
        "Artist": "Hondells",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 17",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 19",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1,00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 20",
        "Weekday": "Saturday",
        "Artist": "Jay & The Americans / Al's Untouchables",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 24",
        "Weekday": "Wednesday",
        "Artist": "Aristocrats with Mary on vocals",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 26",
        "Weekday": "Friday",
        "Artist": "Rock 'N Flames",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Feb 27",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 3",
        "Weekday": "Wednesday",
        "Artist": "No Dance - Ash Wednesday",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 5",
        "Weekday": "Friday",
        "Artist": "Sophomores",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 6",
        "Weekday": "Saturday",
        "Artist": "Brenda Lee / Casuals",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 10",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 12",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 13",
        "Weekday": "Saturday",
        "Artist": "Sue Thompson / Al's Untouchables",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 17",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 19",
        "Weekday": "Friday",
        "Artist": "Dave Shane 5",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 20",
        "Weekday": "Saturday",
        "Artist": "Shirley Ellis / Jewel Akens / Bobby Freeman / Brian Hyland / Jimmy Ford & The Executives",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 24",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 26",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 27",
        "Weekday": "Saturday",
        "Artist": "Newbeats / Saints",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Mar 31",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 2",
        "Weekday": "Friday",
        "Artist": "Ravens",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 3",
        "Weekday": "Saturday",
        "Artist": "Kingsmen",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 7",
        "Weekday": "Wednesday",
        "Artist": "Big Tiny Little & His Wild Ones / Eddie Skeets & His Orchestra",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 9",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 10",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 14",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 16",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 17",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 21",
        "Weekday": "Wednesday",
        "Artist": "Velvadeers",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 23",
        "Weekday": "Friday",
        "Artist": "Neptunes",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 24",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 25",
        "Weekday": "Sunday",
        "Artist": "Top 40 Bands",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 28",
        "Weekday": "Wednesday",
        "Artist": "Tiny Hill & His Orchestra",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Apr 30",
        "Weekday": "Friday",
        "Artist": "Showmen",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 1",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 5",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 7",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 8",
        "Weekday": "Saturday",
        "Artist": "Johnny Tillotson / Sophomores",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 12",
        "Weekday": "Wednesday",
        "Artist": "Eddie Skeets & His Orchestra",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 14",
        "Weekday": "Friday",
        "Artist": "Showmen",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 15",
        "Weekday": "Saturday",
        "Artist": "Tremolons / Saints",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 19",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 21",
        "Weekday": "Friday",
        "Artist": "Tombstones",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 22",
        "Weekday": "Saturday",
        "Artist": "Cannibal & The Headhunters / The Premiers",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 26",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 28",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "May 29",
        "Weekday": "Saturday",
        "Artist": "Trashmen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 2",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 4",
        "Weekday": "Friday",
        "Artist": "Countdowns",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 5",
        "Weekday": "Saturday",
        "Artist": "Chuck Berry / Legends",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 9",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 11",
        "Weekday": "Friday",
        "Artist": "Viscounts",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 12",
        "Weekday": "Saturday",
        "Artist": "Conway Twitty",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 16",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 18",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 19",
        "Weekday": "Saturday",
        "Artist": "Hullaballoos / Saints",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 23",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 25",
        "Weekday": "Friday",
        "Artist": "Marauders",
        "Price": "$1.00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 26",
        "Weekday": "Saturday",
        "Artist": "Sam The Sham & The Pharaohs / Ikettes / Tony Clarke / Jimmy Velvet",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jun 30",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 2",
        "Weekday": "Friday",
        "Artist": "Countdowns",
        "Price": "$1,00 / Student ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 3",
        "Weekday": "Saturday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 7",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 9",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 10",
        "Weekday": "Saturday",
        "Artist": "Astronauts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 14",
        "Weekday": "Wednesday",
        "Artist": "Charlie Trussell",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 16",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 17",
        "Weekday": "Saturday",
        "Artist": "Everly Brothers / Al's Untouchables",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 21",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 23",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 24",
        "Weekday": "Saturday",
        "Artist": "Fabulous Thunderbolts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 28",
        "Weekday": "Wednesday",
        "Artist": "Marv Reedstrom",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 30",
        "Weekday": "Friday",
        "Artist": "Monarchs",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Jul 31",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 4",
        "Weekday": "Wednesday",
        "Artist": "Varirty Club",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 6",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 7",
        "Weekday": "Saturday",
        "Artist": "Guess Who / Crystals",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 11",
        "Weekday": "Wednesday",
        "Artist": "Leonard Reyman & His Orchestra",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 13",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 14",
        "Weekday": "Saturday",
        "Artist": "Castaways",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 18",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 20",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 21",
        "Weekday": "Saturday",
        "Artist": "Surfaris",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 25",
        "Weekday": "Wednesday",
        "Artist": "Tiny Hill & His Orchestra",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 27",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Aug 28",
        "Weekday": "Saturday",
        "Artist": "Strangeloves / McCoys",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 1",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 3",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 4",
        "Weekday": "Saturday",
        "Artist": "Tremolons",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 8",
        "Weekday": "Wednesday",
        "Artist": "Melodeers",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 10",
        "Weekday": "Friday",
        "Artist": "Viscounts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 11",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 15",
        "Weekday": "Wednesday",
        "Artist": "Hi Morgan",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 17",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 18",
        "Weekday": "Saturday",
        "Artist": "Freddy Cannon",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 24",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Sep 25",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 1",
        "Weekday": "Friday",
        "Artist": "Torkays",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 2",
        "Weekday": "Saturday",
        "Artist": "Billy Joe Royal / Torkays",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 8",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 9",
        "Weekday": "Saturday",
        "Artist": "Gary Lewis & The Playboys",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 15",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 16",
        "Weekday": "Saturday",
        "Artist": "Castaways",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 22",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / Gals 50¢ till 9",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 23",
        "Weekday": "Saturday",
        "Artist": "Lonnie Mack",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 29",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Oct 30",
        "Weekday": "Saturday",
        "Artist": "Beau Brummels / Fabulous Thunderbolts",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 5",
        "Weekday": "Friday",
        "Artist": "Patriots",
        "Price": "50¢ till 9 / $1.00 after",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 6",
        "Weekday": "Saturday",
        "Artist": "Turtles",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 12",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 13",
        "Weekday": "Saturday",
        "Artist": "Bobby Sherman / Vic & The Versatiles",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 19",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 20",
        "Weekday": "Saturday",
        "Artist": "Thunderbirds",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 26",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Nov 27",
        "Weekday": "Saturday",
        "Artist": "Sam The Sham & The Pharaohs / Al's Untouchables",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 3",
        "Weekday": "Friday",
        "Artist": "Fabulous Thunderbolts",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 4",
        "Weekday": "Saturday",
        "Artist": "Kingsmen",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 10",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 11",
        "Weekday": "Saturday",
        "Artist": "Thunderbirds",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 12",
        "Weekday": "Sunday",
        "Artist": "Lively Guys Hop",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 17",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 18",
        "Weekday": "Saturday",
        "Artist": "Yardbirds / R-Tistics",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 19",
        "Weekday": "Sunday",
        "Artist": "Bushmen",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 24",
        "Weekday": "Friday",
        "Artist": "No Dance",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 25",
        "Weekday": "Saturday",
        "Artist": "Len Barry / Daze & Knights",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 26",
        "Weekday": "Sunday",
        "Artist": "Challengers / Show Stoppers",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 28",
        "Weekday": "Tuesday",
        "Artist": "Gants / Little People",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1965,
        "Date": "Dec 31",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables / Stompers",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 1",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 2",
        "Weekday": "Sunday",
        "Artist": "Al's Untouchables / Vanguards",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 7",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 8",
        "Weekday": "Saturday",
        "Artist": "Gentrys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 9",
        "Weekday": "Sunday",
        "Artist": "Showmen / Wandering Souls",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 14",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 15",
        "Weekday": "Saturday",
        "Artist": "Cannibal & The Headhunters",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 16",
        "Weekday": "Sunday",
        "Artist": "Embalmers / Coachmen IV",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 21",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 22",
        "Weekday": "Saturday",
        "Artist": "McCoys",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 23",
        "Weekday": "Sunday",
        "Artist": "Uncle & The Anteaters / Reverberations",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 28",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 29",
        "Weekday": "Saturday",
        "Artist": "Jr. Walker & The All Stars",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jan 30",
        "Weekday": "Sunday",
        "Artist": "Al's Untouchables / Poison Ivy",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 4",
        "Weekday": "Friday",
        "Artist": "Patriots",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 5",
        "Weekday": "Saturday",
        "Artist": "Vogues / Jonathan Clarke & His Colonial Ruffians",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 6",
        "Weekday": "Sunday",
        "Artist": "Temtations / Alternatives",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 11",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 12",
        "Weekday": "Saturday",
        "Artist": "T-Bones",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 13",
        "Weekday": "Sunday",
        "Artist": "Wandering Souls / Hurts",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 18",
        "Weekday": "Friday",
        "Artist": "Escorts",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 19",
        "Weekday": "Saturday",
        "Artist": "Turtles",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 20",
        "Weekday": "Sunday",
        "Artist": "Panics / Henchmen",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 25",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 26",
        "Weekday": "Saturday",
        "Artist": "Jerry Lee Lewis",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Feb 27",
        "Weekday": "Sunday",
        "Artist": "Temtations / Uncle & The Anteaters",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 4",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 5",
        "Weekday": "Saturday",
        "Artist": "New Colony Six",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 6",
        "Weekday": "Sunday",
        "Artist": "Rogues / Embalmers",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 11",
        "Weekday": "Friday",
        "Artist": "Saints",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 12",
        "Weekday": "Saturday",
        "Artist": "Little People",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 13",
        "Weekday": "Sunday",
        "Artist": "Coachmen IV / Suspicions",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 18",
        "Weekday": "Friday",
        "Artist": "7 Sons",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 19",
        "Weekday": "Saturday",
        "Artist": "Pilgrims",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 20",
        "Weekday": "Sunday",
        "Artist": "Temtations / Show Stoppers",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 25",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1,00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 26",
        "Weekday": "Saturday",
        "Artist": "Gary Lewis & The Playboys",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Mar 27",
        "Weekday": "Sunday",
        "Artist": "Al's Untouchables / Apollos",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 1",
        "Weekday": "Friday",
        "Artist": "Alternatives",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 2",
        "Weekday": "Saturday",
        "Artist": "Freddy Cannon / The Alternatives",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 3",
        "Weekday": "Sunday",
        "Artist": "Al's Untouchables / Apostles",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 8",
        "Weekday": "Friday",
        "Artist": "Uncle & The Anteaters",
        "Price": "$1.00 / College ID  50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 9",
        "Weekday": "Saturday",
        "Artist": "Hollies / Dark Knights",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 10",
        "Weekday": "Sunday",
        "Artist": "Countdowns / Henchmen",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 15",
        "Weekday": "Friday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 16",
        "Weekday": "Saturday",
        "Artist": "Coachmen",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 17",
        "Weekday": "Sunday",
        "Artist": "4 Lords / Bridgestones",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 22",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 23",
        "Weekday": "Saturday",
        "Artist": "Gentrys",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 24",
        "Weekday": "Sunday",
        "Artist": "Urchins / Ramchargers",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 29",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Apr 30",
        "Weekday": "Saturday",
        "Artist": "Dee Jay & The Runaways",
        "Price": "&1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 1",
        "Weekday": "Sunday",
        "Artist": "Animals / Al's Untouchables / Stompers",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 6",
        "Weekday": "Friday",
        "Artist": "Patriots",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 7",
        "Weekday": "Saturday",
        "Artist": "Lou Christie / Fabulous Thunderbolts",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 8",
        "Weekday": "Sunday",
        "Artist": "Quarrymen / Larrodoes",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 13",
        "Weekday": "Friday",
        "Artist": "Hurts",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 14",
        "Weekday": "Saturday",
        "Artist": "Marketts",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 15",
        "Weekday": "Sunday",
        "Artist": "Vanguards / Misfits",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 20",
        "Weekday": "Friday",
        "Artist": "Stompers",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 21",
        "Weekday": "Saturday",
        "Artist": "Kingsmen",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 22",
        "Weekday": "Sunday",
        "Artist": "Wandering Souls / Embalmers / Van Dells / New Showmen",
        "Price": "75¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 27",
        "Weekday": "Friday",
        "Artist": "Boys Next Door",
        "Price": "$1.25 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "May 28",
        "Weekday": "Saturday",
        "Artist": "Johnny & The Hurricanes",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 3",
        "Weekday": "Friday",
        "Artist": "4 Lords",
        "Price": "$1.00 / College ID 50¢",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 4",
        "Weekday": "Saturday",
        "Artist": "Mitch Ryder & The Detroit Wheels / Nocturnes",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 10",
        "Weekday": "Friday",
        "Artist": "Patriots",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 11",
        "Weekday": "Saturday",
        "Artist": "Stompers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 17",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 18",
        "Weekday": "Saturday",
        "Artist": "7 Sons",
        "Price": "&1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 24",
        "Weekday": "Friday",
        "Artist": "Uncle & The Anteaters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 25",
        "Weekday": "Saturday",
        "Artist": "Al's Untouchables",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jun 27",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 1",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 2",
        "Weekday": "Saturday",
        "Artist": "Quarrymen",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 3",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 8",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 9",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 10",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 15",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 16",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 17",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 22",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 23",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 24",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 29",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 30",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Jul 31",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 5",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 6",
        "Weekday": "Saturday",
        "Artist": "Patriots",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 7",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 12",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 13",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 14",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 19",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 20",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 21",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 26",
        "Weekday": "Friday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 27",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Aug 28",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 2",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 3",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 4",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 9",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 10",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 11",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 16",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 17",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 18",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 23",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 24",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 25",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Sep 30",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 1",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 2",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 7",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 8",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 9",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 14",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 15",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 16",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 21",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 22",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 23",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 28",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 29",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Oct 30",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 3",
        "Weekday": "Thursday",
        "Artist": "Vanguards / Impalas",
        "Price": "Free",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 4",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 5",
        "Weekday": "Saturday",
        "Artist": "Uncle & The Anteaters",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 6",
        "Weekday": "Sunday",
        "Artist": "2 Great Bands",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 11",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 12",
        "Weekday": "Saturday",
        "Artist": "Pete Klint Quintet",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 13",
        "Weekday": "Sunday",
        "Artist": "2 Bands",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 18",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 19",
        "Weekday": "Saturday",
        "Artist": "Poison Ivy",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 20",
        "Weekday": "Sunday",
        "Artist": "Sights & Sounds / Host Of Others",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 23",
        "Weekday": "Wednesday",
        "Artist": "Left Banke / Vanguards",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 25",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 26",
        "Weekday": "Saturday",
        "Artist": "Je-Rons",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Nov 27",
        "Weekday": "Sunday",
        "Artist": "Showmen / Je-Rons",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 2",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 3",
        "Weekday": "Saturday",
        "Artist": "Sights & Sounds",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 4",
        "Weekday": "Sunday",
        "Artist": "Elves / Undertakers",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 9",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 10",
        "Weekday": "Saturday",
        "Artist": "Patriots",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 11",
        "Weekday": "Sunday",
        "Artist": "Sus-Penders / Back Door Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 16",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 17",
        "Weekday": "Saturday",
        "Artist": "Quarrymen",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 18",
        "Weekday": "Sunday",
        "Artist": "Wandering Souls / Dimensions",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 23",
        "Weekday": "Friday",
        "Artist": "Question Mark & The Mysterians / Host Of Others",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 24",
        "Weekday": "Saturday",
        "Artist": "No Dance - Christmas Eve",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 25",
        "Weekday": "Sunday",
        "Artist": "Kynd / Defenders",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 30",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1966,
        "Date": "Dec 31",
        "Weekday": "Saturday",
        "Artist": "Pete Klint Quintet",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 1",
        "Weekday": "Sunday",
        "Artist": "Vanguards / Sons Of Adam",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 6",
        "Weekday": "Friday",
        "Artist": "Psych-A-Lite Show",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 7",
        "Weekday": "Saturday",
        "Artist": "Psych-A-Lite Show",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 8",
        "Weekday": "Sunday",
        "Artist": "Psych-A-Lite Show",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 13",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 14",
        "Weekday": "Saturday",
        "Artist": "Sam The Sham & the Pharaohs featuring the Shamettes / Orphans",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 15",
        "Weekday": "Sunday",
        "Artist": "Epics / Good Times",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 19",
        "Weekday": "Thursday",
        "Artist": "Orphans & 7 other Cedar Rapids Bands",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 20",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 21",
        "Weekday": "Saturday",
        "Artist": "Cryan Shames",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 22",
        "Weekday": "Sunday",
        "Artist": "Renditions / Barons Four",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 27",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 28",
        "Weekday": "Saturday",
        "Artist": "Vanguards",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jan 29",
        "Weekday": "Sunday",
        "Artist": "Trade Winds / Host Of Others / Vanguards",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 3",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 4",
        "Weekday": "Saturday",
        "Artist": "Orphans / Wandering Souls + 6 other Cedar Rapids Bands",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 5",
        "Weekday": "Sunday",
        "Artist": "Knou / Restless Winds",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 10",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 11",
        "Weekday": "Saturday",
        "Artist": "Orphans",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 12",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 17",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 18",
        "Weekday": "Saturday",
        "Artist": "Renditions / Good Times",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 19",
        "Weekday": "Sunday",
        "Artist": "Classmen / Wandering Souls",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 24",
        "Weekday": "Friday",
        "Artist": "Orphans",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 25",
        "Weekday": "Saturday",
        "Artist": "Music Machine",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Feb 26",
        "Weekday": "Sunday",
        "Artist": "Dimensions / Organization",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 3",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 4",
        "Weekday": "Saturday",
        "Artist": "Nickel Bag vs. Vanguards",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 5",
        "Weekday": "Sunday",
        "Artist": "Poison Ivy / Nickel Bag / Vanguards",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 10",
        "Weekday": "Friday",
        "Artist": "Orphans + others",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 11",
        "Weekday": "Saturday",
        "Artist": "Good Times / Poison Ivy",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 12",
        "Weekday": "Sunday",
        "Artist": "Uncle & The Anteaters / Barons Four",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 17",
        "Weekday": "Friday",
        "Artist": "Casinos / Patriots",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 18",
        "Weekday": "Saturday",
        "Artist": "Wandering Souls / Showmen",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 19",
        "Weekday": "Sunday",
        "Artist": "Distilfinque / Sound Society",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 24",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 25",
        "Weekday": "Saturday",
        "Artist": "Sights & Sounds / Mug Wumps",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 26",
        "Weekday": "Sunday",
        "Artist": "New Showstoppers / Mug Wumps",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Mar 31",
        "Weekday": "Friday",
        "Artist": "Vanguards / Back Door Men",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 1",
        "Weekday": "Saturday",
        "Artist": "Nickel Bag / Wandering Souls",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 2",
        "Weekday": "Sunday",
        "Artist": "Orphans / Mojos",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 7",
        "Weekday": "Friday",
        "Artist": "Nickel Bag",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 8",
        "Weekday": "Saturday",
        "Artist": "Pete Klint Quintet",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 9",
        "Weekday": "Sunday",
        "Artist": "Taxmen / Trade Winds",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 14",
        "Weekday": "Friday",
        "Artist": "Group",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 15",
        "Weekday": "Saturday",
        "Artist": "Orphans - Left Banke cancelled",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 16",
        "Weekday": "Sunday",
        "Artist": "Legends / Hurts",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 21",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 22",
        "Weekday": "Saturday",
        "Artist": "Fabulous Flippers",
        "Price": "$1.75",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 23",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 28",
        "Weekday": "Friday",
        "Artist": "Orphans / Host Of Others / Dimensions / Renditions / Rebels + others",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 29",
        "Weekday": "Saturday",
        "Artist": "Pete Klint Quintet",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Apr 30",
        "Weekday": "Sunday",
        "Artist": "Pete Klint Quintet / Epics",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 5",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 6",
        "Weekday": "Saturday",
        "Artist": "Orphans / Left Banke cancelled",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 7",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 12",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 13",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 14",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 19",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 20",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 21",
        "Weekday": "Sunday",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 26",
        "Weekday": "Friday",
        "Artist": "Big Battle Of The Bands",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 27",
        "Weekday": "Saturday",
        "Artist": "Group",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 28",
        "Weekday": "Sunday",
        "Artist": "Orphans / surprise group",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "May 29",
        "Weekday": "Monday",
        "Artist": "Legends",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 2",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 3",
        "Weekday": "Saturday",
        "Artist": "Host Of Others",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 4",
        "Weekday": "Sunday",
        "Artist": "Orphans",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 9",
        "Weekday": "Friday",
        "Artist": "Temtations",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 10",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 11",
        "Weekday": "Sunday",
        "Artist": "Legends",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 16",
        "Weekday": "Friday",
        "Artist": "Agency / Rebels",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 17",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 18",
        "Weekday": "Sunday",
        "Artist": "Surprise Band",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 21",
        "Weekday": "Wednesday",
        "Artist": "Dimensions",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 23",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 24",
        "Weekday": "Saturday",
        "Artist": "Pete Klint Quintet",
        "Price": "$1.50",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 25",
        "Weekday": "Sunday",
        "Artist": "Legends",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 28",
        "Weekday": "Wednesday",
        "Artist": "Temtations",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jun 30",
        "Weekday": "Friday",
        "Artist": "Dimensions",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 1",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 2",
        "Weekday": "Sunday",
        "Artist": "Uncle & The Anteaters",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 7",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 8",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 9",
        "Weekday": "Sunday",
        "Artist": "Temtations",
        "Price": "$1.25",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 14",
        "Weekday": "Friday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 15",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 16",
        "Weekday": "Sunday",
        "Artist": "Temtations",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 21",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 22",
        "Weekday": "Saturday",
        "Artist": "Left Banke / Flower Power",
        "Price": "$2.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 23",
        "Weekday": "Sunday",
        "Artist": "Legends",
        "Price": "$1.00",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 28",
        "Weekday": "Friday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 29",
        "Weekday": "Saturday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 30",
        "Weekday": "Sunday",
        "Artist": "Unknown",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Jul 31",
        "Weekday": "",
        "Artist": "Unknown the rest of the year",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 1",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 2",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 3",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 4",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 5",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 6",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 7",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 8",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 9",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 10",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 11",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 12",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 13",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 14",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 15",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 16",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 17",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 18",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 19",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 20",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 21",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 22",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 23",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 24",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 25",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 26",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 27",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 28",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 29",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 30",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Aug 31",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 1",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 2",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 3",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 4",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 5",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 6",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 7",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 8",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 9",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 10",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 11",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 12",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 13",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 14",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 15",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 16",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 17",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 18",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 19",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 20",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 21",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 22",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 23",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 24",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 25",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 26",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 27",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 28",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 29",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Sep 30",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 1",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 2",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 3",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 4",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 5",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 6",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 7",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 8",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 9",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 10",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 11",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 12",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 13",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 14",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 15",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 16",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 17",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 18",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 19",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 20",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 21",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 22",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 23",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 24",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 25",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 26",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 27",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 28",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 29",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 30",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Oct 31",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 1",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 2",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 3",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 4",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 5",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 6",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 7",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 8",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 9",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 10",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 11",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 12",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 13",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 14",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 15",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 16",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 17",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 18",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 19",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 20",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 21",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 22",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 23",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 24",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 25",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 26",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 27",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 28",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 29",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Nov 30",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 1",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 2",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 3",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 4",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 5",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 6",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 7",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 8",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 9",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 10",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 11",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 12",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 13",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 14",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 15",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 16",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 17",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 18",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 19",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 20",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 21",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 22",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 23",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 24",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 25",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 26",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 27",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 28",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 29",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 30",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1967,
        "Date": "Dec 31",
        "Weekday": "",
        "Artist": "",
        "Price": "",
        "ImgLocation": ""
      },
      {
        "Year": 1968,
        "Date": "Mar 17",
        "Weekday": "Sunday",
        "Artist": "Pete  Klint Quintet",
        "Price": "$1.50",
        "ImgLocation": ""
      }
 ]

artists.forEach(function(obj) {
    db.collection("artists").add({
        year: obj.Year,
        date: obj.Date,
        price: obj.Price,
        weekday: obj.Weekday,
        artist: obj.Artist,
        imgLocation: obj.ImgLocation
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});