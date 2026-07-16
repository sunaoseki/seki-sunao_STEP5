const tableBody = document.getElementById('tableBody');

const textInput = document.getElementById('textInput');
const displayButton = document.getElementById('displayButton');
const addButton = document.getElementById('addButton');
const displayArea = document.getElementById('displayArea');
const rowCount = document.getElementById('rowCount');
const colorButton = document.getElementById('colorButton');


// 行数を更新する関数
function updateRowCount() {
    const count = tableBody.rows.length;

    rowCount.textContent = '現在の行数: ' + count + ' 件';

    if (count >= 3) {
        displayButton.style.display = 'none';
    } else {
        displayButton.style.display = 'inline-block';
    }
}


// 「表示」ボタン
displayButton.addEventListener('click', function() {
    const text = textInput.value;

    if (text.trim() === '') {
        alert('入力値が空です。');
        return;
    }

    displayArea.textContent = text;
    displayArea.classList.toggle('highlight');
});


// 「追加」ボタン
addButton.addEventListener('click', function() {
    const text = textInput.value;

    // 3件ある場合は、最も古い行を削除
    if (tableBody.rows.length >= 3) {
        tableBody.deleteRow(0);
    }

    const row = document.createElement('tr');

    const textCell = document.createElement('td');
    textCell.textContent = text;

    const deleteCell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';

    deleteButton.addEventListener('click', function() {
        row.remove();
        updateRowCount();
    });

    deleteCell.appendChild(deleteButton);

    row.appendChild(textCell);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);

    updateRowCount();
});


// 背景色を変更
const colors = [
    'lightblue',
    'lightgreen',
    'lightcoral'
];

let colorIndex = 0;

colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});


// 1から5まで表示
for (let i = 1; i <= 5; i++) {
    console.log(i + '回目のループです');
}