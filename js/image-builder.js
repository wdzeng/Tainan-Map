document.querySelector('#download').addEventListener('click', function () {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    let lv = document.querySelector('#level').innerHTML;
    let logo = new Image();
    logo.setAttribute('crossOrigin', 'anonymous');
    logo.src = 'image/icon.png';

    logo.onload = function () {

        //draw background
        ctx.fillStyle = '#b4def7';
        ctx.fillRect(0, 0, 1200, 900);

        //draw svg
        var svgString = new XMLSerializer().serializeToString(document.querySelector('#map'));
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
        let strlen = [7, 5, 9];
        let len = 36;
        let fsize = 40;
        let m = 6;
        let initx = 160;
        let rx = 1200 - initx;

        let x = initx;
        for (let i = 0; i < 3; i++) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, 784, len, len);
            x += (len + m);
            ctx.fillStyle = 'black';
            ctx.fillText(lgs[i], x, 817);
            x += strlen[i] * 40 + 20;
        }
        x = initx;
        for (let i = 3; i < 6; i++) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, 844, len, len);
            x += (len + m);
            ctx.fillStyle = 'black';
            ctx.fillText(lgs[i], x, 877);
            x += strlen[i - 3] * 40 + 20;
        }

        //draw sprout bar
        ctx.drawImage(logo, 20, 780, 100, 100);

        //download
        canvas.toBlob(function (blob) {
            saveAs(blob, 'tainan.png');
        });
    };
})