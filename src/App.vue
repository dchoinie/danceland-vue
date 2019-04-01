<template>
  <div id="app">
    <Artists v-bind:artists="artists" />
  </div>
</template>

<script>
import Artists from './components/Artists';
const uuidv4 = require('uuid/v4');

export default {
  name: 'app',
  components: {
    Artists
  },
  data() {
    return {
      artists: [
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 1",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "82¢ + tax",
          "ImgLocation": "/img/1954/1954-1-1.jpg"
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 2",
          "Weekday": "Saturday",
          "Artist": "Dell Clayton & His Orchestra with Glenna Frazier",
          "Price": "82¢ till 9 / $1.02 after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 6",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 8",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 9",
          "Weekday": "Saturday",
          "Artist": "Verne Byers & His Orchestra with Audre Lynn",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 13",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His Orchestra with Audre Lynn",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 15",
          "Weekday": "Friday",
          "Artist": "Iowa Cornhuskers",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 16",
          "Weekday": "Saturday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 20",
          "Weekday": "Wednesday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 22",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 23",
          "Weekday": "Saturday",
          "Artist": "Bobby Lindeman & His Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 27",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 29",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "82¢  + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 30",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jan 31",
          "Weekday": "Sunday",
          "Artist": "Earl Lanier / Del Taylor",
          "Price": "March of Dimes Benefit Dance",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 3",
          "Weekday": "Wednesday",
          "Artist": "Bob Calame & His Sparkling Rhythms",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 5",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 6",
          "Weekday": "Saturday",
          "Artist": "Bob Calame & His Sparkling Rhythms",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 10",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 12",
          "Weekday": "Friday",
          "Artist": "Floyd Warren's Radio Ramblers with Montana Mary",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 13",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 17",
          "Weekday": "Wednesday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 19",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 20",
          "Weekday": "Saturday",
          "Artist": "Jack Payne with Norma Clark",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 23",
          "Weekday": "Tuesday",
          "Artist": "Frank Yankovic & His Yanks",
          "Price": "$1.02 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 24",
          "Weekday": "Wednesday",
          "Artist": "Bobby Lindeman & His Orchestra",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 26",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Feb 27",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 2",
          "Weekday": "Tuesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 3",
          "Weekday": "Wednesday",
          "Artist": "No Dance - Ash Wednesday",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 5",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 6",
          "Weekday": "Saturday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 10",
          "Weekday": "Wednesday",
          "Artist": "Bobby Lindeman & His Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 12",
          "Weekday": "Friday",
          "Artist": "Iowa Cornhuskers / Joe's Troubadors",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 13",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 17",
          "Weekday": "Wednesday",
          "Artist": "Variety Club Orchestra / Earl's Western Playboys",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 19",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 20",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 24",
          "Weekday": "Wednesday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 26",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 27",
          "Weekday": "Saturday",
          "Artist": "Bobby Lindeman & His Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Mar 31",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "69¢ till 9 / 82¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 2",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 3",
          "Weekday": "Saturday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 7",
          "Weekday": "Wednesday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 9",
          "Weekday": "Friday",
          "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Earl Lanier with Hermie Roloff (steel guitar)",
          "Price": "82¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 10",
          "Weekday": "Saturday",
          "Artist": "Don Scott & His Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 14",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "75¢",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 16",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 17",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 18",
          "Weekday": "Sunday",
          "Artist": "Variety Club Orchestra / Earl's Western Playboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 21",
          "Weekday": "Wednesday",
          "Artist": "Don Decker",
          "Price": "75¢ till 9 / 89¢ after+ tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 22",
          "Weekday": "Thursday",
          "Artist": "Leonard Reyman & His Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 23",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 24",
          "Weekday": "Saturday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 28",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Apr 30",
          "Weekday": "Friday",
          "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Joe's Troubadors",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 1",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Cynthia Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 5",
          "Weekday": "Wednesday",
          "Artist": "Don Decker / Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 7",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 8",
          "Weekday": "Saturday",
          "Artist": "Don Decker",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 12",
          "Weekday": "Wednesday",
          "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
          "Price": "75¢ till 9 / 89¢  after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 14",
          "Weekday": "Friday",
          "Artist": "Iowa Cornhuskers",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 15",
          "Weekday": "Saturday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 18",
          "Weekday": "Tuesday",
          "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 19",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "66¢ till 9 / 75¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 21",
          "Weekday": "Friday",
          "Artist": "Red Blanchard with Tom Owen's Cowboys",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 22",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra with Red Dasch & Eddie Roberts",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 26",
          "Weekday": "Wednesday",
          "Artist": "Ronnie Bartley & His Orchestra with Patty Chase",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 28",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "May 29",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 2",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 4",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 5",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 7",
          "Weekday": "Monday",
          "Artist": "Wedding Dance - Delores A. Reider / Richard D. Clark",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 9",
          "Weekday": "Wednesday",
          "Artist": "Del Taylor",
          "Price": "69¢ till 9 / 75¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 11",
          "Weekday": "Friday",
          "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Joe's Troubadors",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 12",
          "Weekday": "Saturday",
          "Artist": "Jack Payne",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 15",
          "Weekday": "Tuesday",
          "Artist": "Wedding Dance - Marna Margaret Morrissey & Dale H. Butz",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 16",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 18",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 19",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 23",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 25",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 26",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Cynthia Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jun 30",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "75¢ till 9:15 / 85¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 2",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 3",
          "Weekday": "Saturday",
          "Artist": "Larry Barrett with Bobbie Cotter",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 7",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "75¢ till 9:15 / 85¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 9",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 10",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 14",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "75¢ till 9:15 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 16",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 17",
          "Weekday": "Saturday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 21",
          "Weekday": "Wednesday",
          "Artist": "Dell Clayton & His Orchestra with Lynn Janson",
          "Price": "75¢ till 9:15 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 23",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 24",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 28",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "75¢ till 9 / 85¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 30",
          "Weekday": "Friday",
          "Artist": "Andy Doll",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Jul 31",
          "Weekday": "Saturday",
          "Artist": "Jack Payne",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 4",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "75¢ till 9:15 / 85¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 6",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 7",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 11",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "75¢ till 9:15 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 13",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 14",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 18",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 19",
          "Weekday": "Thursday",
          "Artist": "Wedding Dance - Dorothy Mae Rieder / Albert J. Schulte",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 20",
          "Weekday": "Friday",
          "Artist": "Andy Doll / Pug's Western Playboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 21",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 23",
          "Weekday": "Monday",
          "Artist": "Six Fat Dutchmen / Kenny Hofer & His Midwesterners",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 25",
          "Weekday": "Wednesday",
          "Artist": "Dell Clayton & His Orchestra with Glenna Frazier",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 27",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Aug 28",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 1",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 3",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 4",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra with Jack Glaudel (vocals)",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 7",
          "Weekday": "Tuesday",
          "Artist": "WNAX Bohemian Band",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 8",
          "Weekday": "Wednesday",
          "Artist": "Dell Clayton & His Orchestra with Glenn Frazier",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 10",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 11",
          "Weekday": "Saturday",
          "Artist": "Jack Payne",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 15",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 17",
          "Weekday": "Friday",
          "Artist": "Iowa Cornhukers",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 18",
          "Weekday": "Saturday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 22",
          "Weekday": "Wednesday",
          "Artist": "Little John Beecher & His Orchestra with Betty Jordan",
          "Price": "75¢ till 9 / 89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 24",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 25",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 28",
          "Weekday": "Tuesday",
          "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Sep 29",
          "Weekday": "Wednesday",
          "Artist": "Bob Calame & His Sparkling Rhythms",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 1",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 2",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 6",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "50¢ till 9 / $1.00 after",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 8",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 9",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 13",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 15",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 16",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra with Red Dasch",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 20",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra",
          "Price": "75¢ till 9 / 85¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 22",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys with Dempsy Jones & His Boys / The Blue Belles",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 23",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 26",
          "Weekday": "Tuesday",
          "Artist": "Fezz Fritsche & His Goosetown Band",
          "Price": "50¢ till 8:30 / $1.12 after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 27",
          "Weekday": "Wednesday",
          "Artist": "Larry Elliott & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 29",
          "Weekday": "Friday",
          "Artist": "Floyd Warren's Radio Ramblers with Montana Mary / Pug's Western Playboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Oct 30",
          "Weekday": "Saturday",
          "Artist": "Jack Payne",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 3",
          "Weekday": "Wednesday",
          "Artist": "Dell Clayton & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 4",
          "Weekday": "Thursday",
          "Artist": "Wayne King & His Orchestra",
          "Price": "$1.56 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 5",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 6",
          "Weekday": "Saturday",
          "Artist": "Hal Wiese with Eugenie Scott",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 10",
          "Weekday": "Wednesday",
          "Artist": "Don Hoy & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 12",
          "Weekday": "Friday",
          "Artist": "Pug's Western Playboys / Iowa Cornhuskers",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 13",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 16",
          "Weekday": "Tuesday",
          "Artist": "Whoopee\" John Wilfahrt & His Orchestra",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 17",
          "Weekday": "Wednesday",
          "Artist": "Verne Byers & His CBS Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 19",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 20",
          "Weekday": "Saturday",
          "Artist": "Jack Payne",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 24",
          "Weekday": "Wednesday",
          "Artist": "Del Taylor / Pug's Western Playboys",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 26",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 27",
          "Weekday": "Saturday",
          "Artist": "Larry Barrett with Bobbie Cotter",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Nov 30",
          "Weekday": "Tuesday",
          "Artist": "Frank Yankovic & His Yanks",
          "Price": "$1.12 + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 1",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 3",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 4",
          "Weekday": "Saturday",
          "Artist": "Eddie Allen Orchestra with Red Dasch",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 8",
          "Weekday": "Wednesday",
          "Artist": "Eddie Allen Orchestra with Red Dasch",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 10",
          "Weekday": "Friday",
          "Artist": "Kenny Hofer & His Midwesterners",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 11",
          "Weekday": "Saturday",
          "Artist": "Vance Dixon Orchestra",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 15",
          "Weekday": "Wednesday",
          "Artist": "Dell Clayton & His Orchestra with Kay Canfield",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 17",
          "Weekday": "Friday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 18",
          "Weekday": "Saturday",
          "Artist": "Scott-Clark Orchestra / Eddie Allen Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 22",
          "Weekday": "Wednesday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "75¢ till 9 / 89¢ after + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 23",
          "Weekday": "Thursday",
          "Artist": "Pug's Western Playboys with Jerry Smith & Jimmy Seeley, Koberley Sisters, Judy Mae",
          "Price": "89¢ + tax",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 24",
          "Weekday": "Friday",
          "Artist": "No Dance",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 25",
          "Weekday": "Saturday",
          "Artist": "Jack Cole & His Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 29",
          "Weekday": "Wednesday",
          "Artist": "Variety Club Orchestra",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 30",
          "Weekday": "Thursday",
          "Artist": "Tom Owen's Cowboys",
          "Price": "",
          "ImgLocation": ""
        },
        {
          "Id": "uuidv4();",
          "Year": 1954,
          "Date": "Dec 31",
          "Weekday": "Friday",
          "Artist": "Jack Payne",
          "Price": "",
          "ImgLocation": ""
        }
      ]
    }
  }
}
</script>

<!-- Global Styling For Entire App -->
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
