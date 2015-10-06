function loadJQ() {
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

function addStyle() {
    var css = '.hhhover { outline: 1px dashed red !important; } ',
        css = css + '#hhhoverBox { position:fixed; width:100%; height:50px; opacity:0.7; z-index:99999; background:#000; text-align:center; padding:10px; color:#fff }',
        css = css + '#hhhoverBox.bottom { bottom:0; }',
        css = css + '#hhhoverBox.top { top:0; cursor:s-resize; } ',
        css = css + '#hhhoverBox.top #updown { cursor:s-resize; } ',
        css = css + '#hhhoverBox.bottom { bottom:0; cursor:n-resize; } ',
        css = css + '#hhhoverBox.bottom #updown { cursor:n-resize; } ',
        css = css + '#hhhoverBox #updown { position:absolute; right:5px; bottom:2px; width: 25px; text-align: right; cursor:pointer; } ',
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
    var box = document.createElement('div');
    box.id = "hhhoverBox";
    box.className = "bottom";

    var view = document.createElement('div');
    view.id = "view";
    view.innerText = "hhhover";
    box.appendChild(view);

    var updown = document.createElement('div');
    updown.id = "updown";
    updown.innerText = "(mv)";
    box.appendChild(updown);

    document.body.appendChild(box);
}

function addActions() {
    var $box = jQuery("#hhhoverBox");
    jQuery("#updown", $box).on('click', function() {
        if ($box.attr('class').search('bottom') != -1) {
            $box.attr('class', 'top');
        } else {
            $box.attr('class', 'bottom');
        }
    });
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
    jQuery('#hhhoverBox #view').text(ff + ", " + size);
}

function dumpComputedStyles(elem, prop) {
    var cs = window.getComputedStyle(elem, null);
    if (prop) {
        return prop + " : " + cs.getPropertyValue(prop);
    }
    // var len = cs.length;
    // for (var i = 0; i < len; i++) {
    //     var style = cs[i];
    //     // dump("    "+style+" : "+cs.getPropertyValue(style)+"\n");
    // }
}

setTimeout(function() {
    loadJQ();
    addStyle();
    addHtml();
    addActions();
    addHover();
}, 1000);
