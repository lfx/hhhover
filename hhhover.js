function loadJQ() {
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

function addStyle() {
    var css = '.hhhover { outline: 1px dashed red !important; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}

function addHtml() {
    var elemDiv = document.createElement('div');
    elemDiv.id = "hhoverOuter";
    elemDiv.style.cssText = 'position:fixed;bottom:0;width:100%;height:50px;opacity:0.7;z-index:100;background:#000;text-align:center;padding:10px;color:#fff';
    elemDiv.innerText = "hhover";
    document.body.appendChild(elemDiv);
}

function addHover() {
    jQuery('*').hover(function() {
        jQuery(this).addClass('hhhover');
        updateBox(this);
    }, function() {
        jQuery(this).removeClass('hhhover');
    });
}

function updateBox(elem) {
    var ff = dumpComputedStyles(elem, 'font-family');
    var size = dumpComputedStyles(elem, 'font-size');
    jQuery('#hhoverOuter').text(ff + ", " + size);
}

function dumpComputedStyles(elem, prop) {
    var cs = window.getComputedStyle(elem, null);
    if (prop) {
        return prop + " : " + cs.getPropertyValue(prop);
    }
    var len = cs.length;
    for (var i = 0; i < len; i++) {
        var style = cs[i];
        // dump("    "+style+" : "+cs.getPropertyValue(style)+"\n");
    }
}

setTimeout(function() {
    loadJQ();
    addStyle();
    addHtml();
    addHover();
}, 1000);