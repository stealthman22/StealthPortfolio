document.addEventListener(
    'scroll',
    function() {
        let scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];
        let scrollBottom =
            document.documentElement['scrollHeight'] ||
            document.body['scrollHeight'] - document.documentElement.clientHeight;
        scrollPercent = scrollTop / scrollBottom * 110 + '%';
        document.querySelector('#progress').style.setProperty('--scroll', scrollPercent);
    }, { passive: true }
);