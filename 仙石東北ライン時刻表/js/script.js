const timetableData = {
   nobori: [
      { time: "高城町駅出発時刻", destination: "終点",zikan:"仙台駅到着時刻" },
      { time: "7:08", destination: "仙台",zikan:"7:35" },
    
      { time: "8:48", destination: "仙台",zikan:"9:17"},

      { time: "9:33", destination: "仙台",zikan:"10:00" },

      { time: "9:17", destination: "仙台",zikan:"9:40" },
      { time: "9:49", destination: "仙台",zikan:"10:12"},

      { time: "10:32", destination: "仙台",zikan:"11:00"},

      { time: "11:23", destination: "仙台",zikan:"11:52"},

      { time: "12:24", destination: "仙台",zikan:"12:51"},
     
      { time: "14:24", destination: "仙台",zikan:"14:53"},

      { time: "15:29", destination: "仙台",zikan:"15:56"},
     
      { time: "16:26", destination: "仙台",zikan:"16:54"},

      { time: "17:25", destination: "仙台",zikan:"17:49"},
     
      { time: "18:25", destination: "仙台",zikan:"18:51"},
      
      { time: "19:30", destination: "仙台",zikan:"19:53"},
    
      { time: "20:25", destination: "仙台",zikan:"20:50"},

      { time: "21:24", destination: "仙台",zikan:"21:46"},
    ],
    kudari: [
      { time: "仙台駅出発時刻", destination: "終点",zikan:"高城町駅到着時刻" },
      { time: "6:26", destination: "石巻",zikan:"6:53" },

      { time: "7:24", destination: "石巻",zikan:"7:47" },
      
      { time: "8:20", destination: "石巻",zikan:"8:44" },

      { time: "9:25", destination: "石巻",zikan:"9:48" },

      { time: "10:18", destination: "石巻",zikan:"10:45" },

      { time: "12:16", destination: "石巻",zikan:"12:43" },

      { time: "13:13", destination: "石巻",zikan:"13:42" },

      { time: "14:16", destination: "石巻",zikan:"14:43" }, 

      { time: "15:17", destination: "石巻",zikan:"15:44" },

      { time: "16:15", destination: "石巻",zikan:"16:39" },

      { time: "17:15", destination: "石巻",zikan:"17:39" },

      { time: "18:22", destination: "石巻",zikan:"18:44" },

      { time: "19:30", destination: "石巻",zikan:"19:51" },

      { time: "20:47", destination: "女川",zikan:"21:09" },
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
      row.innerHTML = `<td>${entry.time}</td><td>${entry.destination}</td><td>${entry.zikan}</td>`;
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