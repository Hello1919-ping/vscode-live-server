const timetableData = {
    nobori: [
      { time:"松島駅出発時刻",destination:"終点",zikan:"仙台駅到着時間",zikan1:"備考"},

      { time: "5:29", destination: "仙台",zikan:"5:57",zikan1:"なし" },
      { time: "6:05", destination: "仙台",zikan:"6:32",zikan1:"なし" },
      { time: "6:38", destination: "仙台" ,zikan:"7:04",zikan1:"なし"},

      { time: "7:04", destination: "仙台",zikan:"7:31",zikan1:"なし" },
      { time: "7:20", destination: "仙台",zikan:"7:48",zikan1:"平日のみ" },
      { time: "7:30", destination: "仙台",zikan:"7:58",zikan1:"なし" },
      { time: "7:55", destination: "仙台",zikan:"8:22",zikan1:"なし" },

      { time: "8:07", destination: "仙台",zikan:"8:35",zikan1:"なし"},
      { time: "8:19", destination: "仙台",zikan:"8:50",zikan1:"なし"},

      { time: "9:10", destination: "仙台",zikan:"9:36",zikan1:"なし"},
      { time: "9:29", destination: "仙台",zikan:"9:56",zikan1:"なし"},

      { time: "10:14", destination: "仙台",zikan:"10:42",zikan1:"なし" },
    
      { time: "11:04", destination: "仙台",zikan:"11:30",zikan1:"なし" },
      { time: "11:49", destination: "仙台",zikan:"12:15",zikan1:"なし" },


      { time: "12:08", destination: "仙台",zikan:"12:34",zikan1:"なし" },

      { time: "13:04", destination: "仙台",zikan:"13:30",zikan1:"なし" },
      { time: "13:30", destination: "仙台",zikan:"13:56",zikan1:"なし" },
      { time: "13:56", destination: "仙台",zikan:"14:23",zikan1:"なし" },

      { time: "14:46", destination: "仙台",zikan:"15:14",zikan1:"なし" },

      { time: "15:04", destination: "仙台",zikan:"15:30",zikan1:"なし" },
      { time: "15:53", destination: "仙台",zikan:"16:19",zikan1:"なし" },

      { time: "16:09", destination: "仙台",zikan:"16:36",zikan1:"なし" },
      { time: "16:47", destination: "仙台",zikan:"17:13",zikan1:"なし" },

      { time: "17:09", destination: "仙台",zikan:"17:36",zikan1:"なし" },
      { time: "17:37", destination: "仙台",zikan:"18:02",zikan1:"なし" },
      { time: "17:51", destination: "仙台",zikan:"18:18",zikan1:"なし" },

      { time: "18:16", destination: "仙台",zikan:"18:42",zikan1:"なし" },
      { time: "18:43", destination: "仙台",zikan:"19:09",zikan1:"なし" },
      { time: "18:54", destination: "仙台",zikan:"19:21",zikan1:"なし" },

      { time: "19:14", destination: "仙台",zikan:"19:40",zikan1:"なし" },
      { time: "19:38", destination: "仙台",zikan:"20:04",zikan1:"なし" },

      { time: "20:10", destination: "仙台",zikan:"20:37",zikan1:"なし" },
      { time: "20:35", destination: "仙台",zikan:"21:01",zikan1:"なし" },

      { time: "21:30", destination: "仙台",zikan:"21:56",zikan1:"なし" },

      { time: "22:26", destination: "仙台",zikan:"22:51",zikan1:"なし"},
    ],
    kudari: [
      { time:"仙台駅出発時刻",destination:"終点",zikan:"松島駅到着時間"},
      { time: "6:00", destination: "一ノ関",zikan:"6:23",zikan1:"なし" },
      { time: "6:44", destination: "小牛田",zikan:"7:07",zikan1:"なし" },

      { time: "7:09", destination: "小牛田",zikan:"7:32",zikan1:"なし" },
      { time: "7:54", destination: "小牛田" ,zikan:"8:17",zikan1:"なし"},

      { time: "8:11", destination: "小牛田",zikan:"8:35",zikan1:"なし" },

      { time: "9:02", destination: "小牛田",zikan:"9:26",zikan1:"なし" },
      { time: "9:48", destination: "小牛田",zikan:"10:12",zikan1:"なし" },

      { time: "10:44", destination: "小牛田",zikan:"11:08",zikan1:"なし" },

      { time: "11:10", destination: "松島",zikan:"11:35",zikan1:"なし" },
      { time: "11:47", destination: "小牛田",zikan:"12:11",zikan1:"なし" },

      { time: "12:45", destination: "小牛田",zikan:"13:09",zikan1:"なし" },

      { time: "13:39", destination: "小牛田",zikan:"14:02",zikan1:"なし" },

      { time: "14:03", destination: "松島",zikan:"14:29",zikan1:"なし" },
      { time: "14:34", destination: "小牛田",zikan:"14:57",zikan1:"なし" },

      { time: "15:00", destination: "松島",zikan:"15:25",zikan1:"なし" },
      { time: "15:35", destination: "小牛田",zikan:"15:59",zikan1:"なし" },
      { time: "15:59", destination: "小牛田",zikan:"16:22",zikan1:"なし" },

      { time: "16:24", destination: "小牛田",zikan:"16:49",zikan1:"なし" },
      { time: "16:41", destination: "小牛田",zikan:"17:05",zikan1:"なし" },
      { time: "16:54", destination: "松島",zikan:"17:18",zikan1:"なし" },

      { time: "17:22", destination: "小牛田",zikan:"17:46",zikan1:"なし" },
      { time: "17:42", destination: "松島",zikan:"18:09",zikan1:"なし" },
      { time: "17:52", destination: "小牛田",zikan:"18:16",zikan1:"なし" },

      { time: "18:30", destination: "石越",zikan:"18:54",zikan1:"なし" },
      { time: "18:44", destination: "松島",zikan:"19:09",zikan1:"なし" },
      { time: "18:54", destination: "小牛田",zikan:"19:18",zikan1:"なし" },

      { time: "19:18", destination: "小牛田",zikan:"19:42",zikan1:"なし" },
      { time: "19:46", destination: "小牛田",zikan:"20:10",zikan1:"なし" },

      { time: "20:09", destination: "一ノ関",zikan:"20:33",zikan1:"なし" },
      { time: "20:38", destination: "小牛田",zikan:"21:01",zikan1:"なし" },

      { time: "21:09", destination: "一ノ関",zikan:"21:32",zikan1:"なし" },
      { time: "21:41", destination: "松島",zikan:"22:06",zikan1:"なし" },

      { time: "22:00", destination: "小牛田",zikan:"22:25",zikan1:"なし" },
      { time: "22:37", destination: "石越",zikan:"23:01",zikan1:"なし" },

      { time: "23:29", destination: "小牛田",zikan:"23:55",zikan1:"なし" },

      { time: "00:02", destination: "松島",zikan:"00:28",zikan1:"なし" },
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
      row.innerHTML = `<td>${entry.time}</td><td>${entry.destination}</td><td>${entry.zikan}</td><td>${entry.zikan1}</td>`;
      tbody.appendChild(row);
    });
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

  


