'use strict';

{
    const btn = document.getElementById('btn') // ()内に指定されたid名を丸ごと取得する

    btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '凶', '末吉']
        // const n = Math.floor(Math.random() * results.length); // results.length→配列の要素が増えてもlengthで調整できる
        // btn.textContent =results[n]; //  取得したいHTMLの要素のコンテンツを書き換える
        // btn.textContent =results[Math.floor(Math.random() * results.length)]; //  上の2行の短縮形
        
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
        } else if (n < 0.2) {
            btn.textContent = '中吉'; // 15%
        } else {
            btn.textContent = '凶'; // 80%
        }
        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '凶';
        //         break;
        // }
    });
}


