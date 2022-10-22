let text = document.querySelector('#text');
let list = document.querySelector('#list');

const convertTextToList = () => {
    let arr = text.value.split('\n');
    list.innerHTML = '';
    arr.forEach((elementText) => {
        if(elementText != '') {
            let li = document.createElement('li');
            li.innerText = elementText;
            list.appendChild(li);
        }
    })
}

text.addEventListener('input', convertTextToList);