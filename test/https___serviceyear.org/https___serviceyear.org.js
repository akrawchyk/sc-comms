(window.NREUM||(NREUM={})).loader_config={xpid:"XAYBVFFTGwQCV1dQAAI="};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(s){try{i("ierr",[s,(new Date).getTime(),!0])}catch(c){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,(new Date).getTime()])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=window.onerror,u=!1,d=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),u=!0)}s.on("fn-start",function(t,e,n){u&&(d+=1)}),s.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),s.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),s.on("internal-error",function(t){i("ierr",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState";t("loader").features.stn=!0,t(6);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(w,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),this.bstType])}),s.on(m,function(){this.bstStart=Date.now()}),s.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,!1),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t(17)(a),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){if(t[1]){var n=t[1];if("function"==typeof n){var r=c(n,"nr@wrapped",function(){return s(n,"fn-",null,n.name||"anonymous")});this.wrapped=t[1]=r}else"function"==typeof n.handleEvent&&s.inPlace(n,["handleEvent"],"fn-")}}),a.on(d+"-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{}],6:[function(t,e,n){var r=t("ee").get("history"),o=t(17)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,e,n){var r=t("ee").get("raf"),o=t(17)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration="number"==typeof t[1]?t[1]:0,t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(17)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,w,"fn-",s)}function i(t){v.push(t),h&&(g=-g,b.data=g)}function a(){for(var t=0;t<v.length;t++)r([],v[t]);v.length&&(v=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t(17)(u),l=NREUM.o,p=l.XHR,h=l.MO,m="readystatechange",w=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],v=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(p,y),y.prototype=p.prototype,d.inPlace(y.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var g=1,b=document.createTextNode(g);new h(a).observe(b,{characterData:!0})}else f.on("fn-end",function(t){t[0]&&t[0].type===m||a()})},{}],10:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader("X-NewRelic-App-Data");a&&(e.cat=a.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var a=0;a<d;a++)e.addEventListener(u[a],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],11:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],12:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var u=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit"],d="api-",l=d+"ixn-";a(u,function(t,e){f[e]=o(d+e,!0,"api")}),f.addPageAction=o(d+"addPageAction",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[Date.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{c.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){p[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,(new Date).getTime()])}},{}],13:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],14:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],15:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],16:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],17:[function(t,e,n){function r(t){return!(t&&"function"==typeof t&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;e.exports=function(t){function e(t,e,n,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof n?n(r,a):n||{}}catch(u){d([u,"",[r,a,o],s])}f(e+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(l){throw f(e+"err",[r,a,l],s),l}finally{f(e+"end",[r,a,c],s)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,u(t,nrWrapper),nrWrapper)}function n(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function f(e,n,r){if(!c){c=!0;try{t.emit(e,n,r)}catch(o){d([o,e,n,r])}c=!1}}function u(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){d([r])}for(var o in t)s.call(t,o)&&(e[o]=t[o]);return e}function d(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),e.inPlace=n,e.flag=a,e}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,a,i):i()}function n(n,r,o){t&&t(n,r,o);for(var i=e(o),a=l(n),s=a.length,c=0;c<s;c++)a[c].apply(i,r);var u=f[w[n]];return u&&u.push([v,n,r,i]),i}function d(t,e){m[t]=l(t).concat(e)}function l(t){return m[t]||[]}function p(t){return u[t]=u[t]||o(n)}function h(t,e){c(t,function(t,n){e=e||"feature",w[n]=e,e in f||(f[e]=[])})}var m={},w={},v={on:d,emit:n,get:p,listeners:l,context:e,buffer:h};return v}function i(){return new r}var a="nr@context",s=t("gos"),c=t(15),f={},u={},d=e.exports=o();d.backlog=f},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!g++){var t=y.info=NREUM.info,e=u.getElementsByTagName("script")[0];if(t&&t.licenseKey&&t.applicationID&&e){c(w,function(e,n){t[e]||(t[e]=n)});var n="https"===m.split(":")[0]||t.sslForHttp;y.proto=n?"https://":"http://",s("mark",["onload",a()],null,"api");var r=u.createElement("script");r.src=y.proto+t.agent,e.parentNode.insertBefore(r,e)}}}function o(){"complete"===u.readyState&&i()}function i(){s("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var s=t("handle"),c=t(15),f=window,u=f.document,d="addEventListener",l="attachEvent",p=f.XMLHttpRequest,h=p&&p.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:p,REQ:f.Request,EV:f.Event,PR:f.Promise,MO:f.MutationObserver},t(12);var m=""+location,w={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-974.min.js"},v=p&&h&&h[d]&&!/CriOS/.test(navigator.userAgent),y=e.exports={offset:a(),origin:m,features:{},xhrWrappable:v};u[d]?(u[d]("DOMContentLoaded",i,!1),f[d]("load",r,!1)):(u[l]("onreadystatechange",o),f[l]("onload",r)),s("mark",["firstbyte",a()],null,"api");var g=0},{}]},{},["loader",2,10,4,3]);window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","queueTime":0,"licenseKey":"8514d96fe0","agent":"","transactionName":"YQMEZBYADBJYBxUPWlhJIEUKAhYIVgpOBVpEA0hGDQQVEgMsDgtQYA8DR0oGBxU=","applicationID":"7236273","errorBeacon":"bam.nr-data.net","applicationTime":76}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGN697');



        





    (function() {
        $('.search__input').on('input', function() {
            $('.search__icon').removeClass('hidden-for-js');
        });

        $('.search__icon').on('touchstart click', function(ev) {
            ev.preventDefault();
            $(this).addClass('hidden-for-js');
            $('.search__input').val('').change();
        });
    }());








(function() {

    //Google Places API services
    var autocompleteService = new google.maps.places.AutocompleteService();
    var placesService = new google.maps.places.PlacesService($('#listing-response').get(0));

    var locationHorseyDisplay = _.template('<%= description %>');
    var locationSearchInput = $('#id_location')[0];

    // workaround for Android Chrome bug, see https://github.com/bevacqua/horsey/issues/36
    // also submits the form elem on `Enter` with a valid location
    var KEY_ENTER = 13;
    var KEY_UP = 38;
    var KEY_DOWN = 40;
    var enterSubmit = false;
    $('#id_location').keyup(function(e) {
        if (!e.keyCode === KEY_UP && !e.keyCode === KEY_DOWN) {
            horseyInstance.hide();
            horseyInstance.show();
        }

        if (e.keyCode === KEY_ENTER) {
            enterSubmit = true;
        } else {
            enterSubmit = false;
        }
    });

    var horseyInstance = horsey(locationSearchInput, {
        //The location_text is the place_id returned by getText
        //used to call Google Places API
        set: function(locationId) {
            getLocationDetails(locationId);
        },
        //We set getText to place_id to be used in the set function
        getText: function(suggestion) {
            return suggestion.place_id;
        },
        renderItem: function(li, suggestion) {
            li.innerHTML = locationHorseyDisplay(suggestion);
        },
        filter: function(q, suggestion) {
            
            var show =
                
            _.contains(suggestion.types, 'locality')
                
                    ||
                
            
            _.contains(suggestion.types, 'street_address')
                
                    ||
                
            
            _.contains(suggestion.types, 'administrative_area_level_1')
                
                    ||
                
            
            _.contains(suggestion.types, 'postal_code')
                
                    ||
                
            
            _.contains(suggestion.types, 'administrative_area_level_2')
                
                ;
                
            
            return show;
        },
        source: function(value, done) {
            var list = []

            if (value.input && value.input.length) {
                autocompleteService.getPlacePredictions({
                    input: value.input,
                    types: ['(regions)'],
                    componentRestrictions: {
                        country: 'us'
                    },
                }, function(predictions, status) {
                    if (status === 'OK' && predictions.length) {
                        list = predictions
                    }

                    done(null, [{
                        list: list
                    }])
                });
            } else {
                done(null, [{
                    list: list
                }]);
            }
        },
        noMatches: 'Sorry, we couldn\'t find any results.',
        highlighter: false,
        highlightCompleteWords: false,
        debounce: 300,
    });

    //Get location geo information from Google API
    function getLocationDetails(location_id) {
        placesService.getDetails({
            placeId: location_id
        }, function(result, status) {
            if (status === 'OK' && result) {
                if (result.address_components[0].types[0] === 'administrative_area_level_1') {
                    // It's a State -> Insert result into text field
                    $('#id_location').val(result.address_components[0].long_name);
                    // In case we had previous results, clear them
                    $('#id_latitude').val('');
                    $('#id_longitude').val('');
                } else {
                    // It's NOT a State -> let's go with lat / Long
                    var lat = result.geometry.location.lat();
                    var long = result.geometry.location.lng();

                    if (result.types[0] === 'locality') {
                        // remove zipcode from input for non-zipcode searches
                        $('#id_location').val(result.formatted_address.replace(/ \d{5}/, ''));
                    } else {
                        $('#id_location').val(result.formatted_address);
                    }

                    $('#id_latitude').val(lat);
                    $('#id_longitude').val(long);
                }

                if (enterSubmit) {
                    $(locationSearchInput).closest('form').submit();
                }
            } else {
                enterSubmit = false;
            }
        })
    };

    //Add Powered by Google logo
    $('.sey-container').addClass('geo-autocomplete');

    //Resize autocomplete
    $(window).on('resize', function(e) {
        setAutocompleteSize();
    });

    function setAutocompleteSize() {
        $('.sey-container').css('width', $('#id_location').css('width'));
    };

    setAutocompleteSize();

}());




    $('.js-show-discovery, .js-dismiss-discovery').on('click', function(e) {
        e.preventDefault();
        $('.discovery-bar').toggleClass('discovery-bar--active');
    });




    (function() {
        
        $('.js-featured-collections-slider').slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: false,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
        

        
        var $storiesSlider = $('#js-stories-glide');

        $storiesSlider.glide({
            type: 'slider',
            autoplay: false,
            autoheight: true,
            dragDistance: false,
            touchDistance: false,
            keyboard: false
        });

        var $avatarsSlider = $('#js-avatars-glide');

        $avatarsSlider.glide({
            type: 'slider',
            autoplay: false,
            paddings: Modernizr.mq('screen and (max-width: 46.3125em)') ? '34%' : '40%'
        });

        // sync sliders
        $avatarsSlider.on('swipeEnd.glide, afterTransition.glide', function() {
            var storiesSliderAPI = $storiesSlider.data('glide_api');
            var avatarsSlideAPI = $avatarsSlider.data('glide_api');
            storiesSliderAPI.go('=' + avatarsSlideAPI.current());
        });
        

        // video plays in stories slider
        $('.js-play').on('click', function(e) {
            e.preventDefault();

            var $play = $(this);
            var $video = $play.prevAll('video');
            $play.fadeOut();
            $video[0].play();
            $video.attr('controls', true);
            $video.one('pause', function() {
                $video.removeAttr('controls');
                $play.fadeIn();
            });
        });

        $('.js-sponsors-slider').slick({
            infinite: false
        });
    }());



        
            
            var NEWSLETTER_DISPLAY_COOKIE = 'sy:newsletter:modal:display';
        
        
        
            var displayNewsletterModal = !Cookies.get(NEWSLETTER_DISPLAY_COOKIE);
        
        
        
    (function() {
        var showModalTimer;
        var modal;

        var NewsletterModel = Backbone.Model.extend({
            validation: {
                'newsletter_email': {
                    required: true,
                    pattern: 'email'
                }
            }
        });

        var NewsletterView = sy.FormValidationView.extend({ });

        function createModalFromTemplate(template) {
            var NewsletterModal = Backbone.Modal.extend({
                template: _.template(template),
                viewContainer: '.bbm-modal__section',
                submitEl: '.js-submit',
                cancelEl: '.js-cancel',
                onShow: function() {
                    this.currentView = new NewsletterView({
                        el: '#js-newsletter-form',
                        model: new NewsletterModel()
                    });

                    // set cookie for not showing again
                    Cookies.set(NEWSLETTER_DISPLAY_COOKIE, 'false', { expires: 2 });
                },
                onDestroy: function() {
                    this.undelegateModalEvents(); // sets modal.active to false, see http://is.gd/AyqKt9
                },
                beforeSubmit: function() {
                    var valid = this.currentView.checkValid('newsletter_email');
                    if (!valid) {
                        return false;
                    }

                    var $form = this.currentView.$el;
                    $.post($form[0].action, $form.serialize())
                    .done(function(data) {

                        if (window.optimizely && $(data.html).attr('id') === 'sy-email-subscribe-success') {
                           // sends a tracking call to Optimizely.
                            window.optimizely.push(["trackEvent", "email_capture"]);
                        }
                        
                        modal = createModalFromTemplate(data.html);
                        $('#js-newsletter-modal').html(modal.render().el);
                        dataLayer.push({
                            'event' : 'formSubmitted',
                            'formID': $(data.html).attr('id')
                        });
                    });
                }
            });

            return new NewsletterModal({ });
        }

        function showEmailContactModal() {
            $.get('/newsletters/')
            .done(function(template) {
                modal = createModalFromTemplate(template);
                $('#js-newsletter-modal').html(modal.render().el);
            });
        }

        function lazyShowModal() {
            if (showModalTimer) {
                clearTimeout(showModalTimer);
            }

            showModalTimer = setTimeout(function() {
                // dont show modal if another modal is open
                var $openModal = $('.bbm-modal');
                if ($openModal.length === 0) {
                    // don't show modal if any input has focus
                    var $focusedInputs = $(document.activeElement).filter('input,select,textarea');
                    if ($focusedInputs.length === 0) {
                        showEmailContactModal();
                    } else {
                        // restart show modal timer once focused inputs are blurred
                        $focusedInputs.on('blur', lazyShowModal);
                    }
                }// else {
                    // on modal close
                    // lazyShowModal();
                // }
            }, moment.duration(10, 'seconds'));
        }

        
        if (displayNewsletterModal) {
            lazyShowModal();
        }
        

        // set click event for footer show
        $('.js-subscribe').on('click', function(e) {
            e.preventDefault();
            if (!modal || !modal.active) {
                if (showModalTimer) {
                    clearTimeout(showModalTimer);
                }

                showEmailContactModal();
            }
        });
    }());



        
            {
                "@context": "http://schema.org",
                "@type": "Organization",
                "url": "https://serviceyear.org",
                "logo": "https://static.serviceyear.org/static/images/service-year-logo.4cd5bf983d91.png"
            }
        
        
            
            var gaSiteId = 'UA-56666668-3';

            
            var MTIProjectId = '951e92da-184e-477d-97bc-fd0818b0b067';
            (function() {
                var projectId=window.MTIProjectId;var mtiTracking=document.createElement('link');mtiTracking.type='text/css';mtiTracking.rel='stylesheet';mtiTracking.href=('https:'==document.location.protocol?'https:':'http:')+'//fast.fonts.net/t/1.css?apiType=css&projectid='+projectId;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(mtiTracking);
            })();
        

        
        
Raven.config('https://0b3aea942130412db0b774ab8deaad20@app.getsentry.com/61331').install()

        

        
window.intercomSettings = {"app_id": "nv8t1fq7"};
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/nv8t1fq7';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()


    

