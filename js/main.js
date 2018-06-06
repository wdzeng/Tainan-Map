$(function () {
    $p = $("#tainan>path");

    //add mousemove listener
    $p.mousemove(function (e) {
        let x = e.pageX - 50;
        let y = e.pageY - 50;
        let chName = toChName($(this).attr('id'));
        $("#hint").show().html(chName).css({
            'visibility': 'inherit',
            'left': x + 'px',
            'top': y + 'px'
        });
    });

    //add hover listener
    $p.hover(function () {
        $("#tainan").append($(this));
    }, function () { 
        $("#hint").css('visibility', 'hidden');
    });

    //add click listener
    $p.click(function () {
        let $this = $(this);
        let $lv = $("#level");

        let clzname = $this.attr('class');
        let nxtclz;
        let lv = parseInt($lv.html());
        switch (clzname) {
            case 'lv0 district-border': nxtclz = 'lv1 district-border'; lv += 1; break;
            case 'lv1 district-border': nxtclz = 'lv2 district-border'; lv += 1; break;
            case 'lv2 district-border': nxtclz = 'lv3 district-border'; lv += 1; break;
            case 'lv3 district-border': nxtclz = 'lv4 district-border'; lv += 1; break;
            case 'lv4 district-border': nxtclz = 'lv0 district-border'; lv -= 4; break;
        }

        $this.attr('class', nxtclz);
        $lv.html(lv.toString());
    });
});