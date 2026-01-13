let timetableData = [];
let sortByDurationFlag = false;

// JSON読込
fetch('timetable.json')
  .then(res => res.json())
  .then(data => {
    timetableData = data;
    displayResults([]); // 初期表示は空
  });

// 入力イベント
document.getElementById("stationInput").addEventListener("input", filterData);
document.getElementById("timeSelect").addEventListener("change", filterData);

// 並び替えボタン
const sortBtn = document.getElementById("sortDurationBtn");

sortBtn.addEventListener("click", () => {
  sortByDurationFlag = !sortByDurationFlag;

  sortBtn.textContent = sortByDurationFlag
    ? "所要時間順：ON"
    : "所要時間順：OFF";

  filterData();
});

// 所要時間（"23分" → 23）
function getDurationMinutes(entry) {
  return parseInt(entry.destination3.replace("分", ""), 10);
}

function filterData() {
  const stationKey = document.getElementById("stationInput").value.trim();
  const timeKey = document.getElementById("timeSelect").value;

  // 駅名・時間どちらも未入力なら表示しない
  if (stationKey === "" && timeKey === "") {
    displayResults([]);
    return;
  }

  let filtered = timetableData.filter(entry => {

    // 駅名フィルタ
    const matchStation =
      stationKey === "" || entry.station.includes(stationKey);

    // 時間フィルタ（出発時刻の先頭2桁）
    const hour = entry.departure.substring(0, 2);
    const matchTime =
      timeKey === "" || hour === timeKey;

    return matchStation && matchTime;
  });

  // 所要時間が短い順に並び替え
  if (sortByDurationFlag) {
    filtered.sort((a, b) => {
      return getDurationMinutes(a) - getDurationMinutes(b);
    });
  }

  displayResults(filtered);
}

// 表表示
function displayResults(data) {
  const tbody = document.querySelector('#resultsTable tbody');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="6">駅名または時間を入力してください。</td></tr>';
    return;
  }

  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.station}</td>
      <td>${entry.line}</td>
      <td>${entry.departure}</td>
      <td>${entry.destination}</td>
      <td>${entry.destination3}</td>
      <td>${entry.destination4}</td>
    `;
    tbody.appendChild(tr);
  });
}