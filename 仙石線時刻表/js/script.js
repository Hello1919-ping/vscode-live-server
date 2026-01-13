const timetableData = {
   nobori: [
      {time:"高城町発",zikan:"中野栄",zikan1:"福田町",zikan2:"仙台",zikan3:"青葉通り",zikan4:"備考"},
      
      // <tr><th>出発時刻</th><th>行き先</th><th>中野栄</th><th>福田町</th><th></th><th>青葉通り</th></tr>
      { time: "6:03",zikan:"6:26",zikan1:"6:32",zikan2:"6:45",zikan3:"06:47",zikan4:"なし"},
      { time: "6:21",zikan:"6:44",zikan1:"6:49",zikan2:"7:04",zikan3:"07:05",zikan4:"なし"},
      { time: "6:38",zikan:"7:02",zikan1:"7:07",zikan2:"7:21",zikan3:"07:23" ,zikan4:"なし"},

      { time: "7:15",zikan:"7:38",zikan1:"7:43",zikan2:"7:57",zikan3:"07:59" ,zikan4:"なし"},
      { time: "7:31",zikan:"7:57",zikan1:"8:02",zikan2:"8:16",zikan3:"08:17" ,zikan4:"なし"},
      { time: "7:52",zikan:"8:17",zikan1:"8:23",zikan2:"8:37",zikan3:"08:38" ,zikan4:"なし"},

      { time: "8:10",zikan:"8:35",zikan1:"8:40",zikan2:"8:55",zikan3:"08:56" ,zikan4:"なし"},

      { time: "9:17",zikan:"9:40",zikan1:"9:46",zikan2:"9:59",zikan3:"10:00" ,zikan4:"なし"},
      { time: "9:49",zikan:"10:12",zikan1:"10:17",zikan2:"10:31",zikan3:"10:32",zikan4:"なし" },

      { time: "10:17",zikan:"10:40",zikan1:"10:45",zikan2:"10:59",zikan3:"11:00" ,zikan4:"なし"},
      { time: "10:48",zikan:"11:11",zikan1:"11:17",zikan2:"11:30",zikan3:"11:32" ,zikan4:"なし"},

      { time: "11:28",zikan:"11:51",zikan1:"11:56",zikan2:"12:09",zikan3:"12:11" ,zikan4:"なし"},

      { time: "12:08",zikan:"12:31",zikan1:"12:36",zikan2:"12:49",zikan3:"12:51" ,zikan4:"なし"},
      { time: "12:29",zikan:"12:52",zikan1:"12:57",zikan2:"13:11",zikan3:"13:12",zikan4:"なし"},
      { time: "12:50",zikan:"13:13",zikan1:"13:18",zikan2:"13:31",zikan3:"13:32",zikan4:"なし" },

      { time: "13:28",zikan:"13:52",zikan1:"13:57",zikan2:"14:10",zikan3:"14:12",zikan4:"なし" },
      { time: "13:48",zikan:"14:11",zikan1:"14:16",zikan2:"14:29",zikan3:"14:30" ,zikan4:"なし"},

      { time: "14:29",zikan:"14:52",zikan1:"14:57",zikan2:"15:10",zikan3:"15:12",zikan4:"なし"},
      { time: "14:48",zikan:"15:11",zikan1:"15:16",zikan2:"15:29",zikan3:"15:30",zikan4:"なし" },

      { time: "15:04",zikan:"15:30",zikan1:"15:35",zikan2:"15:49",zikan3:"15:50" ,zikan4:"なし"},
      { time: "15:46",zikan:"16:09",zikan1:"16:14",zikan2:"16:28",zikan3:"16:29" ,zikan4:"なし"},

      { time: "16:09",zikan:"16:33",zikan1:"16:38",zikan2:"16:51",zikan3:"16:53" ,zikan4:"なし"},
      { time: "16:41",zikan:"17:04",zikan1:"17:09",zikan2:"17:23",zikan3:"17:24" ,zikan4:"なし"},

      { time: "17:09",zikan:"17:32",zikan1:"17:37",zikan2:"17:52",zikan3:"17:53" ,zikan4:"なし"},
      { time: "17:42",zikan:"18:05",zikan1:"18:10",zikan2:"18:24",zikan3:"18:25" ,zikan4:"なし"},

      { time: "18:08",zikan:"18:32",zikan1:"18:37",zikan2:"18:51",zikan3:"18:52" ,zikan4:"なし"},
      { time: "18:37",zikan:"19:00",zikan1:"19:05",zikan2:"19:19",zikan3:"19:20" ,zikan4:"なし"},

      { time: "19:08",zikan:"19:32",zikan1:"19:37",zikan2:"19:51",zikan3:"19:52" ,zikan4:"なし"},
      { time: "19:44",zikan:"20:07",zikan1:"20:12",zikan2:"20:26",zikan3:"20:27" ,zikan4:"なし"},

      { time: "20:06",zikan:"20:29",zikan1:"20:35",zikan2:"20:48",zikan3:"20:50" ,zikan4:"なし"},

      { time: "21:00",zikan:"21:23",zikan1:"21:29",zikan2:"21:42",zikan3:"21:43" ,zikan4:"なし"},
      { time: "21:30",zikan:"21:55",zikan1:"22:00",zikan2:"22:14",zikan3:"22:15" ,zikan4:"なし"},

      { time: "22:38",zikan:"23:01",zikan1:"23:06",zikan2:"23:20",zikan3:"23:21",zikan4:"なし" },

    ],
    kudari: [
       {time:"青葉通り発",zikan:"仙台",zikan1:"福田町",zikan2:"中野栄",zikan3:"高城町",zikan4:"備考"},
       { time: "5:17", zikan:"5:18",zikan1:"5:32",zikan2:"5:37",zikan3:"6:03",zikan4:"なし"},

       { time: "6:00", zikan:"6:01",zikan1:"6:15",zikan2:"6:20",zikan3:"6:03",zikan4:"なし"},
       { time: "6:28", zikan:"6:29",zikan1:"6:44",zikan2:"6:48",zikan3:"7:15",zikan4:"なし"},
       { time: "6:41", zikan:"6:42",zikan1:"6:57",zikan2:"7:02",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "6:54", zikan:"6:55",zikan1:"7:10",zikan2:"7:14",zikan3:"7:40",zikan4:"なし"},

       { time: "7:04", zikan:"7:05",zikan1:"7:19",zikan2:"7:24",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "7:07", zikan:"7:08",zikan1:"7:22",zikan2:"7:27",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ" },
       { time: "7:13", zikan:"7:14",zikan1:"7:28",zikan2:"7:34",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "7:19", zikan:"7:20",zikan1:"7:34",zikan2:"7:40",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "7:23", zikan:"7:24",zikan1:"7:38",zikan2:"7:43",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "7:31", zikan:"7:32",zikan1:"7:46",zikan2:"7:51",zikan3:"8:17",zikan4:"なし"},
       { time: "7:38", zikan:"7:39",zikan1:"7:54",zikan2:"8:00",zikan3:"・・・",zikan4:"多賀城まで"},
       { time: "7:42", zikan:"7:43",zikan1:"7:57",zikan2:"8:04",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "7:45", zikan:"7:46",zikan1:"8:00",zikan2:"8:06",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "7:52", zikan:"7:53",zikan1:"8:08",zikan2:"8:12",zikan3:"・・・",zikan4:"松島海岸まで"},

       { time: "8:00", zikan:"8:01",zikan1:"8:15",zikan2:"8:20",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:04", zikan:"8:05",zikan1:"8:19",zikan2:"8:25",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:07", zikan:"8:08",zikan1:"8:22",zikan2:"8:28",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:13", zikan:"8:14",zikan1:"8:28",zikan2:"8:34",zikan3:"8:58",zikan4:"なし"},
       { time: "8:20", zikan:"8:21",zikan1:"8:35",zikan2:"8:40",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:25", zikan:"8:26",zikan1:"8:40",zikan2:"8:46",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "8:27", zikan:"8:28",zikan1:"8:43",zikan2:"8:48",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:34", zikan:"8:35",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 平日のみ"},
       { time: "8:38", zikan:"8:39",zikan1:"8:53",zikan2:"8:59",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "8:41", zikan:"8:42",zikan1:"8:56",zikan2:"9:01",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "8:46", zikan:"8:47",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 土曜日のみ"},
       { time: "8:47", zikan:"8:48",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 平日のみ"},
       { time: "8:54", zikan:"8:55",zikan1:"9:10",zikan2:"9:15",zikan3:"9:41",zikan4:"なし"},
       
       { time: "9:03", zikan:"9:04",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 平日のみ"},
       { time: "9:11", zikan:"9:12",zikan1:"9:26",zikan2:"9:31",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "9:12", zikan:"9:13",zikan1:"9:27",zikan2:"9:32",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "9:20", zikan:"9:21",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 平日のみ"},
       { time: "9:28", zikan:"9:29",zikan1:"9:43",zikan2:"9:49",zikan3:"10:13",zikan4:"平日のみ"},
       { time: "9:37", zikan:"9:38",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 平日のみ"},
       { time: "9:42", zikan:"9:43",zikan1:"9:57",zikan2:"10:02",zikan3:"・・・",zikan4:"多賀城まで 土曜日のみ"},
       { time: "9:46", zikan:"9:47",zikan1:"10:01",zikan2:"10:06",zikan3:"・・・",zikan4:"多賀城まで 平日のみ"},
       { time: "9:56", zikan:"9:57",zikan1:"10:11",zikan2:"10:16",zikan3:"10:40",zikan4:"なし"},

       { time: "10:08", zikan:"10:09",zikan1:"10:23",zikan2:"10:28",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "10:28", zikan:"10:29",zikan1:"10:43",zikan2:"10:48",zikan3:"11:12",zikan4:"なし"},
       { time: "10:38", zikan:"10:39",zikan1:"・・・",zikan2:"・・・",zikan3:"・・・",zikan4:"小鶴新田まで 土曜日のみ"},
       { time: "10:48", zikan:"10:49",zikan1:"11:02",zikan2:"11:08",zikan3:"11:34",zikan4:"なし"},
       { time: "10:58", zikan:"10:59",zikan1:"11:13",zikan2:"11:18",zikan3:"・・・",zikan4:"多賀城まで"},

       { time: "11:08", zikan:"11:09",zikan1:"11:22",zikan2:"11:28",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "11:28", zikan:"11:29",zikan1:"11:43",zikan2:"11:48",zikan3:"12:15",zikan4:"なし"},
       { time: "11:48", zikan:"11:49",zikan1:"12:03",zikan2:"12:08",zikan3:"12:36",zikan4:"なし"},

       { time: "12:08", zikan:"12:09",zikan1:"12:23",zikan2:"12:28",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "12:18", zikan:"12:19",zikan1:"12:33",zikan2:"12:38",zikan3:"・・・",zikan4:"多賀城まで"},
       { time: "12:28", zikan:"12:29",zikan1:"12:43",zikan2:"12:48",zikan3:"13:12",zikan4:"なし"},
       { time: "12:48", zikan:"12:49",zikan1:"13:03",zikan2:"13:08",zikan3:"13:35",zikan4:"なし"},

       { time: "13:08", zikan:"13:09",zikan1:"13:23",zikan2:"13:28",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "13:28", zikan:"13:29",zikan1:"13:43",zikan2:"13:48",zikan3:"14:12",zikan4:"なし"},
       { time: "13:48", zikan:"13:49",zikan1:"14:03",zikan2:"14:08",zikan3:"14:35",zikan4:"なし"},

       { time: "14:08", zikan:"14:09",zikan1:"14:23",zikan2:"14:28",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "14:18", zikan:"14:19",zikan1:"14:33",zikan2:"14:38",zikan3:"・・・",zikan4:"多賀城まで"},
       { time: "14:28", zikan:"14:29",zikan1:"14:43",zikan2:"14:48",zikan3:"15:13",zikan4:"なし"},
       { time: "14:48", zikan:"14:49",zikan1:"15:03",zikan2:"15:08",zikan3:"15:36",zikan4:"なし"},

       { time: "15:04", zikan:"15:05",zikan1:"15:19",zikan2:"15:24",zikan3:"・・・",zikan4:"松島海岸まで"},
       { time: "15:20", zikan:"15:21",zikan1:"15:35",zikan2:"15:40",zikan3:"16:08",zikan4:"なし"},
       { time: "15:33", zikan:"15:34",zikan1:"15:48",zikan2:"15:53",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "15:48", zikan:"15:49",zikan1:"16:03",zikan2:"16:08",zikan3:"16:33",zikan4:"なし"},

       { time: "16:03", zikan:"16:04",zikan1:"16:18",zikan2:"16:23",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "16:15", zikan:"16:16",zikan1:"16:30",zikan2:"16:35",zikan3:"17:04",zikan4:"なし"},
       { time: "16:27", zikan:"16:28",zikan1:"16:42",zikan2:"16:47",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "16:39", zikan:"16:40",zikan1:"16:54",zikan2:"16:59",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "16:48", zikan:"16:49",zikan1:"17:03",zikan2:"17:08",zikan3:"17:33",zikan4:"なし"},

       { time: "17:00", zikan:"17:01",zikan1:"17:15",zikan2:"17:21",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "17:08", zikan:"17:09",zikan1:"17:23",zikan2:"17:28",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "17:10", zikan:"17:11",zikan1:"17:25",zikan2:"17:30",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "17:17", zikan:"17:18",zikan1:"17:32",zikan2:"17:37",zikan3:"18:05",zikan4:"平日のみ"},
       { time: "17:20", zikan:"17:21",zikan1:"17:35",zikan2:"17:40",zikan3:"18:08",zikan4:"土曜日のみ"},
       { time: "17:26", zikan:"17:27",zikan1:"17:41",zikan2:"17:46",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "17:31", zikan:"17:32",zikan1:"17:46",zikan2:"17:51",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "17:34", zikan:"17:35",zikan1:"17:49",zikan2:"17:54",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "17:43", zikan:"17:44",zikan1:"17:59",zikan2:"18:04",zikan3:"18:31",zikan4:"なし"},
       { time: "17:51", zikan:"17:52",zikan1:"18:06",zikan2:"18:11",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "17:52", zikan:"17:53",zikan1:"18:07",zikan2:"18:12",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},

       { time: "18:01", zikan:"18:02",zikan1:"18:16",zikan2:"18:21",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "18:10", zikan:"18:11",zikan1:"18:25",zikan2:"18:30",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "18:11", zikan:"18:12",zikan1:"18:26",zikan2:"18:31",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "18:19", zikan:"18:20",zikan1:"18:34",zikan2:"18:39",zikan3:"19:04",zikan4:"平日のみ"},
       { time: "18:20", zikan:"18:21",zikan1:"18:35",zikan2:"18:40",zikan3:"19:05",zikan4:"土曜日のみ"},
       { time: "18:26", zikan:"18:27",zikan1:"18:41",zikan2:"18:46",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "18:33", zikan:"18:34",zikan1:"18:48",zikan2:"18:53",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "18:36", zikan:"18:37",zikan1:"18:51",zikan2:"18:56",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "18:44", zikan:"18:45",zikan1:"18:59",zikan2:"19:04",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "18:45", zikan:"18:46",zikan1:"19:00",zikan2:"19:05",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ"},
       { time: "18:54", zikan:"18:55",zikan1:"19:09",zikan2:"19:15",zikan3:"19:39",zikan4:"なし"},

       { time: "19:04", zikan:"19:05",zikan1:"19:19",zikan2:"19:24",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "19:08", zikan:"19:09",zikan1:"19:23",zikan2:"19:27",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "19:14", zikan:"19:15",zikan1:"19:29",zikan2:"19:34",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "19:18", zikan:"19:19",zikan1:"19:33",zikan2:"19:38",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "19:25", zikan:"19:26",zikan1:"19:40",zikan2:"19:45",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "19:31", zikan:"19:32",zikan1:"19:46",zikan2:"19:51",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ"},
       { time: "19:36", zikan:"19:37",zikan1:"19:51",zikan2:"19:56",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "19:47", zikan:"19:48",zikan1:"20:02",zikan2:"20:07",zikan3:"20:32",zikan4:"なし"},
       { time: "19:56", zikan:"19:57",zikan1:"19:11",zikan2:"19:16",zikan3:"・・・",zikan4:"東塩釜まで"},

       { time: "20:07", zikan:"20:08",zikan1:"20:22",zikan2:"20:27",zikan3:"20:51",zikan4:"なし"},
       { time: "20:18", zikan:"20:19",zikan1:"20:33",zikan2:"20:38",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "20:20", zikan:"20:21",zikan1:"20:35",zikan2:"20:40",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ "},
       { time: "20:29", zikan:"20:30",zikan1:"20:44",zikan2:"20:49",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "20:38", zikan:"20:39",zikan1:"20:53",zikan2:"20:58",zikan3:"・・・",zikan4:"東塩釜まで 土曜日のみ "},
       { time: "20:41", zikan:"20:42",zikan1:"20:56",zikan2:"21:01",zikan3:"・・・",zikan4:"東塩釜まで 平日のみ "},
       { time: "20:54", zikan:"20:55",zikan1:"21:09",zikan2:"21:14",zikan3:"21:38",zikan4:"なし"},
       
       { time: "21:08", zikan:"21:09",zikan1:"21:23",zikan2:"21:28",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "21:24", zikan:"21:25",zikan1:"21:39",zikan2:"21:44",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "21:40", zikan:"21:41",zikan1:"21:55",zikan2:"22:00",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "21:56", zikan:"21:57",zikan1:"22:11",zikan2:"22:16",zikan3:"22:45",zikan4:"なし"},

       { time: "22:12", zikan:"22:13",zikan1:"22:27",zikan2:"22:32",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "22:28", zikan:"22:29",zikan1:"22:43",zikan2:"22:48",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "22:50", zikan:"22:51",zikan1:"23:04",zikan2:"23:10",zikan3:"23:33",zikan4:"なし"},

       { time: "23:13", zikan:"23:14",zikan1:"23:28",zikan2:"23:33",zikan3:"・・・",zikan4:"東塩釜まで"},
       { time: "23:37", zikan:"23:38",zikan1:"23:51",zikan2:"23:57",zikan3:"・・・",zikan4:"東塩釜まで"},

       { time: "00:01", zikan:"00:02",zikan1:"00:15",zikan2:"00:21",zikan3:"・・・",zikan4:"東塩釜まで"},
    ]
    
  };
  
  

  const stationSelect = document.getElementById("station-select");
  const tbody = document.querySelector("#timetable tbody");
  const currentTimeDisplay = document.getElementById("current-time");
  
  function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
 }
  
 function updateCurrentTime() {
  const now = new Date();
  const timeString = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  currentTimeDisplay.textContent = `現在時刻：${timeString}`;
}

function toMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

  function highlightNextTrain() {
  const rows = tbody.querySelectorAll("tr");
  const now = getCurrentTime();
  const nowMinutes = toMinutes(now);
  let found = false;

  rows.forEach((row) => {
    const depTime = row.children[0].textContent; // 出発時刻
    const depMinutes = toMinutes(depTime);
    if (!found &&  depMinutes > nowMinutes) {
      row.style.background = "gold"; // 次の電車をハイライト
      found = true;
    } else {
      row.style.background = "white"; // 通常の行
    }
  });
}

  function displayTimetable(station) {
    tbody.innerHTML = ""; // 既存のデータをクリア

    timetableData[station].forEach(entry => {
      const row = document.createElement("tr");
      const stopsHTML = (entry.stops || []).map((t) => `<td>${t}</td>`).join("");
      row.innerHTML = `<td>${entry.time}</td><td>${entry.zikan}</td><td>${entry.zikan1}</td><td>${entry.zikan2}</td><td>${entry.zikan3}</td><td>${entry.zikan4}</td>`;
      tbody.appendChild(row);
    });
    highlightNextTrain(); 

  }
  
  // 初期表示
  displayTimetable(stationSelect.value);
  updateCurrentTime();
  highlightNextTrain();

  
  // 駅選択が変わったら時刻表を更新
  stationSelect.addEventListener("change", () => {
    displayTimetable(stationSelect.value);
  });

  setInterval(() => {
  updateCurrentTime();
  highlightNextTrain();
}, 1000);
  