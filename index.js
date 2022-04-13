 main();

 function main() {
    const { holder, img, btnGroup, select, score1, score2, buttonOne, buttonTwo, buttonReset, result } = getNodes();
    let finishScore = select.value;

    for (let hold of holder) {
        hold.style.width = `${img.width}px`;
    }
    btnGroup.style.marginLeft = `-${parseInt(window.getComputedStyle(holder[1]).paddingLeft)}px`;
    btnGroup.style.marginBottom = `-${parseInt(window.getComputedStyle(holder[1]).paddingBottom)}px`;

    select.addEventListener('input', function() {
        finishScore = select.value;
    });
    
    buttonOne.addEventListener('click', function() {
        buttonPlayerCallback(score1, score2, buttonOne, buttonTwo);
    });

    buttonTwo.addEventListener('click', function() {
        buttonPlayerCallback(score2, score1, buttonTwo, buttonOne);
    });

    buttonReset.addEventListener('click', function() {
        score1.innerText = 0;
        score2.innerText = 0;
        score1.style.color = 'black';
        score2.style.color = 'black';
        buttonOne.disabled = false;
        buttonTwo.disabled = false;
        select.disabled = false;
    });

    function buttonPlayerCallback(score1, score2, buttonOne, buttonTwo) {
        score1.innerText++;
        if (score1.innerText === finishScore) {
            score1.style.color = '#82c91e';
            score2.style.color = '#f03e3e';
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
            select.disabled = true;
        }
    }
}

 function getNodes() {
    const holder = document.querySelectorAll('.holder');
    const img = document.querySelector('img');
    const btnGroup = document.querySelector('.button-group');
    const select = document.querySelector('select');
    const score1 = document.querySelector('h1 span:nth-of-type(1)');
    const score2 = document.querySelector('h1 span:nth-of-type(2)');
    const [buttonOne, buttonTwo, buttonReset] = document.querySelector('.button-group').children;
    const result = document.querySelector('h1');
    return { holder, img, btnGroup, select, score1, score2, buttonOne, buttonTwo, buttonReset, result };
 }