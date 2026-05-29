const tableBody = document.getElementById('tableBody');

let count = 0;

const textInput = document.getElementById('textInput');
const displayButton = document.getElementById('displayButton');
const displayArea = document.getElementById('displayArea');
const error = document.getElementById('error');

displayButton.addEventListener('click', function() {
    const text = textInput.value;

    if (text.trim() === '') {
        error.textContent = '入力値が空です。';
        displayArea.textContent = '';
    } else {
        error.textContent = '';
        displayArea.textContent = text;
        displayArea.classList.toggle('highlight');

        const row = document.createElement('tr');

const textCell = document.createElement('td');
textCell.textContent = text;

const deleteCell = document.createElement('td');

const deleteButton = document.createElement('button');
deleteButton.textContent = '削除';

deleteButton.addEventListener('click', function() {
    row.remove();

    count--;

    if (count < 3) {
        displayButton.style.display = 'inline-block';
    }

});

deleteCell.appendChild(deleteButton);

row.appendChild(textCell);
row.appendChild(deleteCell);

tableBody.appendChild(row);

count++;

if (count >= 3) {
    displayButton.style.display = 'none';
}

    }
});

const colorButton = document.getElementById('colorButton');

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

for (let i = 1; i <= 5; i++) {
    console.log(i + '回目のループです');
}