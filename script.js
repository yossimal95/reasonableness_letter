let orgsArr = ['איגוד','ארגון','לשכת','איחוד','חברת'];

let ocuArr = ['רופאים','חייטים','מהנדסים','מוכרי הנעליים','דייגים','ציידים','צפרים','סיידים','טבחים'];

let sobjectsArr = ['ציפורני הרגליים','מסכי המחשב','גומי המכנסיים','פיקות הברכיים','איכות הנייר','סוליית המגפיים','חתולי הרחוב','פשפשי המיטה','דגי הים','צבע העלים','עובי הטורטיות']; 

const getRandomItemOutOfArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)].toString();
}

const getRandomSignatures = () => {
    let hebLetters = 'אבגדהוזחטיכלמנסעפצקרשת';
    
    let table = '<table>';
    
    for (let i = 0; i < 5; i++) {
        table += '<tr>';
            for (let j = 0; j < 5; j++) {
                table += `<td>${getRandomItemOutOfArr(hebLetters)}. ${getRandomItemOutOfArr(hebLetters)}.</td>`;
            }
        table += '</tr>';
    }
    table += '</table>';
    
    return table;
}

const randomizeLetter = () => {
    let title = document.querySelector('.first-title');
    let text = document.querySelector('.text');
    let table = document.querySelector('table');

    title.innerHTML = getRandomItemOutOfArr(orgsArr) + ' ה' +  getRandomItemOutOfArr(ocuArr) + ':';
    text.innerHTML = 'ביטול עילת הסבירות יפגע ב' + getRandomItemOutOfArr(sobjectsArr) + '.';
    table.innerHTML = getRandomSignatures();
}

randomizeLetter();