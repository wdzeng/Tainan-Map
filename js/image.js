document.querySelector('#download').addEventListener('click', function () {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    let lv = document.querySelector('#level').innerHTML;

    //draw background
    ctx.fillStyle = '#b4def7';
    ctx.fillRect(0, 0, 1200, 900);

    //draw svg
    var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));
    canvg('canvas', svgString, {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreClear: true,
        offsetX: 123,
        offsetY: -90,
        scaleHeight: 666
    });

    //draw text
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.font = "bold 170px 微軟正黑體";
    ctx.fillText("台南", 210, 240);
    ctx.font = "bold 80px 微軟正黑體";
    ctx.fillText("制區地圖", 210, 340);
    ctx.font = "160px Times New Roman"
    ctx.fillText(lv, 210, 520);

    //draw shadow
    ctx.fillStyle = '#FFFFFFCC';
    ctx.fillRect(0, 760, 1200, 140);

    //draw legend
    ctx.textAlign = 'start';
    ctx.font = "40px 微軟正黑體"
    let colors = ['lightblue', 'green', 'yellow', 'orange', 'red', 'purple'];
    let lgs = ['沒去過', '遊玩或出差', '工作住所', '幼年住所或短居', '成年住所', '從小到大都住在這裡'];
    let len = 36;
    let fsize = 40;
    let m = 6;
    let space = 1150 / 3;

    for (let i = 0; i < 3; i++) {
        x = (20 + i * space);
        ctx.fillStyle = colors[i];
        ctx.fillRect(x, 784, len, len);
        x += (len + m);
        ctx.fillStyle = 'black';
        ctx.fillText(lgs[i], x, 817);
    }
    for (let i = 3; i < 6; i++) {
        x = (20 + (i - 3) * space);
        ctx.fillStyle = colors[i];
        ctx.fillRect(x, 844, len, len);
        x += (len + m);
        ctx.fillStyle = 'black';
        ctx.fillText(lgs[i], x, 877);
    }

    //download
    canvas.toBlob(function (blob) { saveAs(blob, 'tainan.png'); });
})