'use sceipt';

{
    // querySelectorははじめの要素しか選択してくれないのでquerySelectorAllを使用すると指定した全てが対象になる
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    // querySelectorALLで指定したものに関数をつなげても、実行されない。配列のような形で指定する必要がある。
    thumbnails[0].addEventListener('click', () => {
        // srcは要素の取得ができるとな。代入も可能
        mainImage.src = thumbnails[0].src;
        thumbnails[1].classList.remove('active');
        thumbnails[2].classList.remove('active');
        // なるほど、関数も単語がつながる場合は、つながる箇所を大文字にするのですね
        thumbnails[0].classList.add('active');
    });

    thumbnails[1].addEventListener('click', () => {
        mainImage.src = thumbnails[1].src;
        thumbnails[0].classList.remove('active');
        thumbnails[2].classList.remove('active');
        thumbnails[1].classList.add('active');

    });
    thumbnails[2].addEventListener('click', () => {
        mainImage.src = thumbnails[2].src;
        thumbnails[0].classList.remove('active');
        thumbnails[1].classList.remove('active');
        thumbnails[2].classList.add('active');
    });
}