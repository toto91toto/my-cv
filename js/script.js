
! function(t) {
    "use strict";
    var s = function(s, o) {
        this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, o), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.build()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                t.typewrite(t.strings[t.arrayPos], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            this.showCursor === !0 && (this.cursor = t('<i class="typed-cursor">' + this.cursorChar + "</i>"), this.el.after(this.cursor)), this.init()
        },
        typewrite: function(t, s) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.typeSpeed,
                    e = this;
                e.timeout = setTimeout(function() {
                    var o = 0,
                        i = t.substr(s);
                    if ("^" === i.charAt(0)) {
                        var r = 1;
                        /^\^\d+/.test(i) && (i = /\d+/.exec(i)[0], r += i.length, o = parseInt(i)), t = t.substring(0, s) + t.substring(s + r)
                    }
                    if ("html" === e.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;) a += t.substr(s).charAt(0), s++;
                            s++, a += h
                        }
                    }
                    e.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (e.options.onStringTyped(e.arrayPos), e.arrayPos === e.strings.length - 1 && (e.options.callback(), e.curLoop++, e.loop === !1 || e.curLoop === e.loopCount)) return;
                            e.timeout = setTimeout(function() {
                                e.backspace(t, s)
                            }, e.backDelay)
                        } else {
                            0 === s && e.options.preStringTyped(e.arrayPos);
                            var o = t.substr(0, s + 1);
                            e.attr ? e.el.attr(e.attr, o) : e.isInput ? e.el.val(o) : "html" === e.contentType ? e.el.html(o) : e.el.text(o), s++, e.typewrite(t, s)
                        }
                    }, o)
                }, o)
            }
        },
        backspace: function(t, s) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.backSpeed,
                    e = this;
                e.timeout = setTimeout(function() {
                    if ("html" === e.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var o = "";
                            "<" !== t.substr(s).charAt(0);) o -= t.substr(s).charAt(0), s--;
                        s--, o += "<"
                    }
                    var i = t.substr(0, s);
                    e.attr ? e.el.attr(e.attr, i) : e.isInput ? e.el.val(i) : "html" === e.contentType ? e.el.html(i) : e.el.text(i), s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.init()) : e.typewrite(e.strings[e.arrayPos], s))
                }, o)
            }
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            var s = this.el.attr("id");
            this.el.after('<span id="' + s + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
        }
    }, t.fn.typed = function(o) {
        return this.each(function() {
            var e = t(this),
                i = e.data("typed"),
                r = "object" == typeof o && o;
            i || e.data("typed", i = new s(this, r)), "string" == typeof o && i[o]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);
! function(e) {
    "use strict";
    var i = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        loop: !1,
        slideEndAnimatoin: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function() {},
        onSliderLoad: function() {},
        onBeforeSlide: function() {},
        onAfterSlide: function() {},
        onBeforeNextSlide: function() {},
        onBeforePrevSlide: function() {}
    };
    e.fn.lightSlider = function(t) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            e(this).lightSlider(t)
        }), this;
        var n = {},
            l = e.extend(!0, {}, i, t),
            a = {},
            s = this;
        n.$el = this, "fade" === l.mode && (l.vertical = !1);
        var o = s.children(),
            r = e(window).width(),
            d = null,
            c = null,
            f = 0,
            h = 0,
            u = !1,
            g = 0,
            v = "",
            p = 0,
            m = l.vertical === !0 ? "height" : "width",
            S = l.vertical === !0 ? "margin-bottom" : "margin-right",
            M = 0,
            T = 0,
            b = 0,
            C = 0,
            x = null,
            w = "ontouchstart" in document.documentElement,
            P = new Object;
        return P.chbreakpoint = function() {
            if (r = e(window).width(), l.responsive.length) {
                if (l.autoWidth === !1) var i = l.item;
                if (r < l.responsive[0].breakpoint)
                    for (var t = 0; t < l.responsive.length; t++) r < l.responsive[t].breakpoint && (d = l.responsive[t].breakpoint, c = l.responsive[t]);
                if ("undefined" != typeof c && null != c)
                    for (t in c.settings)("undefined" == typeof a[t] || null == a[t]) && (a[t] = l[t]), l[t] = c.settings[t];
                if (!e.isEmptyObject(a) && r > l.responsive[0].breakpoint)
                    for (t in a) l[t] = a[t];
                l.autoWidth === !1 && M > 0 && b > 0 && i !== l.item && (p = Math.round(M / ((b + l.slideMargin) * l.slideMove)))
            }
        }, P.calSW = function() {
            l.autoWidth === !1 && (b = (g - (l.item * l.slideMargin - l.slideMargin)) / l.item)
        }, P.calWidth = function(e) {
            var i = e === !0 ? v.find(".lslide").length : o.length;
            if (l.autoWidth === !1) h = i * (b + l.slideMargin);
            else {
                h = 0;
                for (var t = 0; i > t; t++) h += parseInt(o.eq(t).width()) + l.slideMargin
            }
            return h % 1 !== 0 && (h += 1), h
        }, n = {
            doCss: function() {
                var e = function() {
                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], i = document.documentElement, t = 0; t < e.length; t++)
                        if (e[t] in i.style) return !0
                };
                return l.useCSS && e() ? !0 : !1
            },
            keyPress: function() {
                l.keyPress && e(document).on("keyup.lightslider", function(e) {
                    e.preventDefault(), 37 === e.keyCode ? (s.goToPrevSlide(), clearInterval(x)) : 39 === e.keyCode && (s.goToNextSlide(), clearInterval(x))
                })
            },
            controls: function() {
                l.controls && (s.after('<div class="lSAction"><a class="lSPrev">' + l.prevHtml + '</a><a class="lSNext">' + l.nextHtml + "</a></div>"), l.autoWidth ? P.calWidth(!1) < g && v.find(".lSAction").hide() : f <= l.item && v.find(".lSAction").hide(), v.find(".lSAction a").on("click", function(i) {
                    return i.preventDefault(), "lSPrev" === e(this).attr("class") ? s.goToPrevSlide() : s.goToNextSlide(), clearInterval(x), !1
                }))
            },
            initialStyle: function() {
                var e = this;
                "fade" === l.mode && (l.autoWidth = !1, l.slideEndAnimatoin = !1), l.auto && (l.slideEndAnimatoin = !1), l.autoWidth && (l.slideMove = 1, l.item = 1), l.loop && (l.slideMove = 1, l.freeMove = !1), l.onBeforeStart.call(this, s), P.chbreakpoint(), s.addClass("lightSlider").wrap("<div class='lSSlideOuter " + l.addClass + "'><div class='lSSlideWrapper'></div></div>"), v = s.parent(".lSSlideWrapper"), l.rtl === !0 && v.parent().addClass("lSrtl"), l.vertical ? (v.parent().addClass("vertical"), g = l.verticalHeight, v.css("height", g + "px")) : g = s.outerWidth(), o.addClass("lslide"), l.loop === !0 && "slide" === l.mode && (P.calSW(), P.clone = function() {
                    if (P.calWidth(!0) > g) {
                        for (var i = 0, t = 0, n = 0; n < o.length && (i += parseInt(s.find(".lslide").eq(n).width()) + l.slideMargin, t++, !(i >= g + l.slideMargin)); n++);
                        var a = l.autoWidth === !0 ? t : l.item;
                        if (a < s.find(".clone.left").length)
                            for (var r = 0; r < s.find(".clone.left").length - a; r++) o.eq(r).remove();
                        if (a < s.find(".clone.right").length)
                            for (var d = o.length - 1; d > o.length - 1 - s.find(".clone.right").length; d--) p--, o.eq(d).remove();
                        for (var n = s.find(".clone.right").length; a > n; n++) s.find(".lslide").eq(n).clone().removeClass("lslide").addClass("clone right").appendTo(s), p++;
                        for (var c = s.find(".lslide").length - s.find(".clone.left").length; c > s.find(".lslide").length - a; c--) s.find(".lslide").eq(c - 1).clone().removeClass("lslide").addClass("clone left").prependTo(s);
                        o = s.children()
                    } else o.hasClass("clone") && (s.find(".clone").remove(), e.move(s, 0))
                }, P.clone()), P.sSW = function() {
                    f = o.length, l.rtl === !0 && l.vertical === !1 && (S = "margin-left"), l.autoWidth === !1 && o.css(m, b + "px"), o.css(S, l.slideMargin + "px"), h = P.calWidth(!1), s.css(m, h + "px"), l.loop === !0 && "slide" === l.mode && u === !1 && (p = s.find(".clone.left").length)
                }, P.calL = function() {
                    o = s.children(), f = o.length
                }, this.doCss() && v.addClass("usingCss"), P.calL(), "slide" === l.mode ? (P.calSW(), P.sSW(), l.loop === !0 && (M = e.slideValue(), this.move(s, M)), l.vertical === !1 && this.setHeight(s, !1, !0)) : (this.setHeight(s, !0, !0), s.addClass("lSFade"), this.doCss() || o.not(".active").css("display", "none")), l.loop === !0 && "slide" === l.mode ? o.eq(p).addClass("active") : o.first().addClass("active")
            },
            pager: function() {
                var e = this;
                if (P.createPager = function() {
                        C = (g - (l.thumbItem * l.thumbMargin - l.thumbMargin)) / l.thumbItem;
                        var i = v.find(".lslide"),
                            t = v.find(".lslide").length,
                            n = 0,
                            a = "",
                            o = 0;
                        for (n = 0; t > n; n++) {
                            "slide" === l.mode && (l.autoWidth ? o += (parseInt(i.eq(n).width()) + l.slideMargin) * l.slideMove : o = n * (b + l.slideMargin) * l.slideMove);
                            var r = i.eq(n * l.slideMove).attr("data-thumb");
                            if (a += l.gallery === !0 ? '<li style="width:100%;' + m + ":" + C + "px;" + S + ":" + l.thumbMargin + 'px"><a href="#"><img src="' + r + '" /></a></li>' : '<li><a href="#">' + (n + 1) + "</a></li>", "slide" === l.mode && o >= h - g - l.slideMargin) {
                                n += 1;
                                var d = 2;
                                l.autoWidth && (a += '<li><a href="#">' + (n + 1) + "</a></li>", d = 1), d > n ? (a = null, v.parent().addClass("noPager")) : v.parent().removeClass("noPager");
                                break
                            }
                        }
                        var c = v.parent();
                        if (c.find(".lSPager").html(a), !l.vertical && l.gallery) {
                            var f = v.parent().find(".lSGallery");
                            setTimeout(function() {
                                e.setHeight(f, !1, !1)
                            })
                        }
                        l.gallery === !0 && (l.vertical === !0 && c.find(".lSPager").css("width", l.vThumbWidth + "px"), T = n * (l.thumbMargin + C) + .5, c.find(".lSPager").css({
                            property: T + "px",
                            "transition-duration": l.speed + "ms"
                        }), l.vertical === !0 && v.parent().css("padding-right", l.vThumbWidth + l.galleryMargin + "px"), c.find(".lSPager").css(m, T + "px"));
                        var u = c.find(".lSPager").find("li");
                        u.first().addClass("active"), u.on("click", function() {
                            return l.loop === !0 && "slide" === l.mode ? p += u.index(this) - c.find(".lSPager").find("li.active").index() : p = u.index(this), s.mode(!1), l.gallery === !0 && e.slideThumb(), clearInterval(x), !1
                        })
                    }, l.pager) {
                    var i = "lSpg";
                    l.gallery && (i = "lSGallery"), v.after('<ul class="lSPager ' + i + '"></ul>');
                    var t = l.vertical ? "margin-left" : "margin-top";
                    v.parent().find(".lSPager").css(t, l.galleryMargin + "px"), P.createPager()
                }
                setTimeout(function() {
                    P.init()
                }, 0)
            },
            setHeight: function(e, i, t) {
                var n = null;
                n = t ? e.children(".lslide ").first() : e.children().first();
                var l = function() {
                    var t = n.height(),
                        l = 0,
                        a = t;
                    i && (t = 0, l = 100 * a / g), e.css({
                        height: t + "px",
                        "padding-bottom": l + "%"
                    })
                };
                l(), n.find("img").load(function() {
                    setTimeout(function() {
                        l()
                    }, 100)
                })
            },
            active: function(e, i) {
                this.doCss() && "fade" === l.mode && v.addClass("on");
                var t = 0;
                if (p * l.slideMove < f) {
                    if (e.removeClass("active"), this.doCss() || "fade" !== l.mode || i !== !1 || e.fadeOut(l.speed), t = i === !0 ? p : p * l.slideMove, i === !0) {
                        var n = e.length,
                            a = n - 1;
                        t + 1 >= n && (t = a)
                    }
                    if (l.loop === !0 && "slide" === l.mode && (t = i === !0 ? p - s.find(".clone.left").length : p * l.slideMove, i === !0)) {
                        var n = e.length,
                            a = n - 1;
                        t + 1 == n ? t = a : t + 1 > n && (t = 0)
                    }
                    this.doCss() || "fade" !== l.mode || i !== !1 || e.eq(t).fadeIn(l.speed), e.eq(t).addClass("active")
                } else e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== l.mode || i !== !1 || (e.fadeOut(l.speed), e.eq(t).fadeIn(l.speed))
            },
            move: function(e, i) {
                l.rtl === !0 && (i = -i), this.doCss() ? e.css(l.vertical === !0 ? {
                    transform: "translate3d(0px, " + -i + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -i + "px, 0px)"
                } : {
                    transform: "translate3d(" + -i + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -i + "px, 0px, 0px)"
                }) : l.vertical === !0 ? e.css("position", "relative").animate({
                    top: -i + "px"
                }, l.speed, l.easing) : e.css("position", "relative").animate({
                    left: -i + "px"
                }, l.speed, l.easing);
                var t = v.parent().find(".lSPager").find("li");
                this.active(t, !0)
            },
            fade: function() {
                this.active(o, !1);
                var e = v.parent().find(".lSPager").find("li");
                this.active(e, !0)
            },
            slide: function() {
                var e = this;
                P.calSlide = function() {
                    h > g && (M = e.slideValue(), e.active(o, !1), M > h - g - l.slideMargin ? M = h - g - l.slideMargin : 0 > M && (M = 0), e.move(s, M), l.loop === !0 && "slide" === l.mode && (p >= f - s.find(".clone.left").length / l.slideMove && e.resetSlide(s.find(".clone.left").length), 0 === p && e.resetSlide(v.find(".lslide").length)))
                }, P.calSlide()
            },
            resetSlide: function(e) {
                var i = this;
                v.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    p = e, v.css("transition-duration", "0ms"), M = i.slideValue(), i.active(o, !1), n.move(s, M), setTimeout(function() {
                        v.css("transition-duration", l.speed + "ms"), v.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, l.speed + 100)
            },
            slideValue: function() {
                var e = 0;
                if (l.autoWidth === !1) e = p * (b + l.slideMargin) * l.slideMove;
                else {
                    e = 0;
                    for (var i = 0; p > i; i++) e += parseInt(o.eq(i).width()) + l.slideMargin
                }
                return e
            },
            slideThumb: function() {
                var e;
                switch (l.currentPagerPosition) {
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = g / 2 - C / 2;
                        break;
                    case "right":
                        e = g - C
                }
                var i = p - s.find(".clone.left").length,
                    t = v.parent().find(".lSPager");
                "slide" === l.mode && l.loop === !0 && (i >= t.children().length ? i = 0 : 0 > i && (i = t.children().length));
                var n = i * (C + l.thumbMargin) - e;
                n + g > T && (n = T - g - l.thumbMargin), 0 > n && (n = 0), this.move(t, n)
            },
            auto: function() {
                l.auto && (x = setInterval(function() {
                    s.goToNextSlide()
                }, l.pause))
            },
            touchMove: function(e, i) {
                if (v.css("transition-duration", "0ms"), "slide" === l.mode) {
                    var t = e - i,
                        n = M - t;
                    if (n >= h - g - l.slideMargin)
                        if (l.freeMove === !1) n = h - g - l.slideMargin;
                        else {
                            var a = h - g - l.slideMargin;
                            n = a + (n - a) / 5
                        }
                    else 0 > n && (l.freeMove === !1 ? n = 0 : n /= 5);
                    this.move(s, n)
                }
            },
            touchEnd: function(e) {
                if (v.css("transition-duration", l.speed + "ms"), clearInterval(x), "slide" === l.mode) {
                    var i = !1,
                        t = !0;
                    M -= e, M > h - g - l.slideMargin ? (M = h - g - l.slideMargin, l.autoWidth === !1 && (i = !0)) : 0 > M && (M = 0);
                    var n = function(e) {
                        var t = 0;
                        if (i || e && (t = 1), l.autoWidth)
                            for (var n = 0, a = 0; a < o.length && (n += parseInt(o.eq(a).width()) + l.slideMargin, p = a + t, !(n >= M)); a++);
                        else {
                            var s = M / ((b + l.slideMargin) * l.slideMove);
                            p = parseInt(s) + t, M >= h - g - l.slideMargin && s % 1 !== 0 && p++
                        }
                    };
                    e >= l.swipeThreshold ? (n(!1), t = !1) : e <= -l.swipeThreshold && (n(!0), t = !1), s.mode(t), this.slideThumb()
                } else e >= l.swipeThreshold ? s.goToPrevSlide() : e <= -l.swipeThreshold && s.goToNextSlide()
            },
            enableDrag: function() {
                var i = this;
                if (!w) {
                    var t = 0,
                        n = 0,
                        a = !1;
                    v.on("mousedown", function(i) {
                        return g > h && 0 !== h ? !1 : void("lSPrev" !== e(i.target).attr("class") && "lSNext" !== e(i.target).attr("class") && (t = l.vertical === !0 ? i.pageY : i.pageX, a = !0, i.preventDefault()))
                    }), e(window).on("mousemove", function(e) {
                        a && (n = l.vertical === !0 ? e.pageY : e.pageX, i.touchMove(n, t))
                    }), e(window).on("mouseup", function(s) {
                        if (a) {
                            a = !1, n = l.vertical === !0 ? s.pageY : s.pageX;
                            var o = n - t;
                            Math.abs(o) >= l.swipeThreshold && e(window).on("click.ls", function(i) {
                                i.preventDefault(), i.stopImmediatePropagation(), i.stopPropagation(), e(window).off("click.ls")
                            }), i.touchEnd(o)
                        }
                    })
                }
            },
            enableTouch: function() {
                var e = this;
                if (w) {
                    var i = {},
                        t = {};
                    v.on("touchstart", function(e) {
                        t = e.originalEvent.targetTouches[0], i.pageX = e.originalEvent.targetTouches[0].pageX, i.pageY = e.originalEvent.targetTouches[0].pageY
                    }), v.on("touchmove", function(n) {
                        if (g > h && 0 !== h) return !1;
                        var a = n.originalEvent;
                        t = a.targetTouches[0];
                        var s = Math.abs(t.pageX - i.pageX),
                            o = Math.abs(t.pageY - i.pageY);
                        l.vertical === !0 ? (3 * o > s && n.preventDefault(), e.touchMove(t.pageY, i.pageY)) : (3 * s > o && n.preventDefault(), e.touchMove(t.pageX, i.pageX))
                    }), v.on("touchend", function() {
                        if (g > h && 0 !== h) return !1;
                        if (l.vertical === !0) var n = t.pageY - i.pageY;
                        else var n = t.pageX - i.pageX;
                        e.touchEnd(n)
                    })
                }
            },
            build: function() {
                var e = this;
                e.initialStyle(), e.auto(), this.doCss() && (l.enableTouch === !0 && e.enableTouch(), l.enableDrag === !0 && e.enableDrag()), e.pager(), e.controls(), e.keyPress()
            }
        }, n.build(), P.init = function() {
            P.chbreakpoint(), l.vertical === !0 ? (g = l.item > 1 ? l.verticalHeight : o.outerHeight(), v.css("height", g + "px")) : g = v.outerWidth(), l.loop === !0 && "slide" === l.mode && P.clone(), P.calL(), "slide" === l.mode && s.removeClass("lSSlide"), "slide" === l.mode && (P.calSW(), P.sSW()), setTimeout(function() {
                "slide" === l.mode && s.addClass("lSSlide")
            }, 1e3), l.pager && P.createPager(), l.adaptiveHeight === !0 && l.vertical === !1 && s.css("height", o.eq(p).height()), l.gallery === !0 && n.slideThumb(), "slide" === l.mode && n.slide(), l.autoWidth === !1 ? o.length <= l.item ? v.find(".lSAction").hide() : v.find(".lSAction").show() : P.calWidth(!1) < g && 0 !== h ? v.find(".lSAction").hide() : v.find(".lSAction").show()
        }, s.goToPrevSlide = function() {
            if (p > 0) l.onBeforePrevSlide.call(this, s, p), p--, s.mode(!1), l.gallery === !0 && n.slideThumb();
            else if (l.loop === !0) {
                if (l.onBeforePrevSlide.call(this, s, p), "fade" === l.mode) {
                    var e = f - 1;
                    p = parseInt(e / l.slideMove)
                }
                s.mode(!1), l.gallery === !0 && n.slideThumb()
            } else l.slideEndAnimatoin === !0 && (s.addClass("leftEnd"), setTimeout(function() {
                s.removeClass("leftEnd")
            }, 400))
        }, s.goToNextSlide = function() {
            var e = !0;
            if ("slide" === l.mode) var i = n.slideValue(),
                e = i < h - g - l.slideMargin;
            p * l.slideMove < f - l.slideMove && e ? (l.onBeforeNextSlide.call(this, s, p), p++, s.mode(!1), l.gallery === !0 && n.slideThumb()) : l.loop === !0 ? (l.onBeforeNextSlide.call(this, s, p), p = 0, s.mode(!1), l.gallery === !0 && n.slideThumb()) : l.slideEndAnimatoin === !0 && (s.addClass("rightEnd"), setTimeout(function() {
                s.removeClass("rightEnd")
            }, 400))
        }, s.mode = function(e) {
            l.adaptiveHeight === !0 && l.vertical === !1 && s.css("height", o.eq(p).height()), u === !1 && ("slide" === l.mode ? n.doCss() && (s.addClass("lSSlide"), "" !== l.speed && v.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && v.css("transition-timing-function", l.cssEasing)) : n.doCss() && ("" !== l.speed && s.css("transition-duration", l.speed + "ms"), "" !== l.cssEasing && s.css("transition-timing-function", l.cssEasing))), e || l.onBeforeSlide.call(this, s, p), "slide" === l.mode ? n.slide() : n.fade(), setTimeout(function() {
                e || l.onAfterSlide.call(this, s, p)
            }, l.speed), u = !0
        }, s.play = function() {
            clearInterval(x), s.goToNextSlide(), x = setInterval(function() {
                s.goToNextSlide()
            }, l.pause)
        }, s.pause = function() {
            clearInterval(x)
        }, s.refresh = function() {
            P.init()
        }, s.getCurrentSlideCount = function() {
            var e = p;
            if (l.loop) {
                var i = v.find(".lslide").length,
                    t = s.find(".clone.left").length;
                e = t - 1 >= p ? i + (p - t) : p >= i + t ? p - i - t : p - t
            }
            return e + 1
        }, s.getTotalSlideCount = function() {
            return v.find(".lslide").length
        }, s.goToSlide = function(e) {
            p = l.loop ? e + s.find(".clone.left").length - 1 : e, s.mode(!1), l.gallery === !0 && n.slideThumb()
        }, setTimeout(function() {
            l.onSliderLoad.call(this, s)
        }, 10), e(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault(), P.init()
            }, 200)
        }), this
    }
}(jQuery);
$(function() {
    (function() {
        $('.aro').text('@');
        $('.ema').attr('href', 'mailto:' + $('.ema').text());
        $('.slider').lightSlider({
            adaptiveWidth: true,
            adaptiveHeight: true,
            controls: false,
            item: 1,
            slideMargin: 5,
            gallery: false
        });
        var HEADER_OFFSET_BOTTOM = 280;
        var isVisibleHeader = true;
        $('#menu').addClass('menu-absolute');
        var fixMenu = function() {
            var offsetTop = window.pageYOffset;
            if (offsetTop < HEADER_OFFSET_BOTTOM) {
                if (isVisibleHeader == false) {
                    $('#menu').removeClass('menu-fixed');
                }
                isVisibleHeader = true;
            } else {
                if (isVisibleHeader == true) {
                    $('#menu').addClass('menu-fixed');
                }
                isVisibleHeader = false;
            }
        }
        fixMenu();
        var MENU_MIN_WIDTH = 768;
        var isResponsiveMenu = false;
        var isResponsiveMenuShow = false;
        var responsiveMenu = function() {
            isResponsiveMenuShow = false;
            if ($(window).width() < MENU_MIN_WIDTH) {
                $('#menu .menu-button').addClass('menu-button-show');
                $('#menu .menu-list').addClass('menu-list-hide');
                $('#menu .menu-list li').addClass('block');
                isResponsiveMenu = true;
            } else {
                $('#menu .menu-button').removeClass('menu-button-show');
                $('#menu .menu-list').removeClass('menu-list-hide');
                $('#menu .menu-list li').removeClass('block');
                isResponsiveMenu = false;
            }
        };
        responsiveMenu();
        $("#typed").typed({
            strings: ["CV Concepteur Developpeur Informatique"],
            typeSpeed: 100
        });
        $('#menu .menu-button').click(function() {
            if (isResponsiveMenu) {
                if (isResponsiveMenuShow) {
                    $('#menu .menu-list').addClass('menu-list-hide');
                    $('#menu .menu-button').removeClass('menu-button-active');
                    isResponsiveMenuShow = false;
                } else {
                    $('#menu .menu-list').removeClass('menu-list-hide');
                    $('#menu .menu-button').addClass('menu-button-active');
                    isResponsiveMenuShow = true;
                }
            }
        });
        $('#menu .menu-list a').click(function() {
            if (isResponsiveMenu) {
                $('#menu .menu-list').addClass('menu-list-hide');
                $('#menu .menu-button').removeClass('menu-button-active');
                isResponsiveMenuShow = false;
            }
        });
        var onScroll = function() {
            var scrollPos = $(document).scrollTop() + HEADER_OFFSET_BOTTOM;
            $('#menu a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos - HEADER_OFFSET_BOTTOM) {
                    $('#menu-center ul li a').removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            });
        }
        onScroll();
        var processAnchor = function(anchor, event) {
            var demo = {
                '#site-analyzer': 1,
                '#pro-ecme': 1,
                '#prostudent': 1,
                '#mentions': 1
            };
            if (!demo.hasOwnProperty(anchor)) {
                $('body').css('overflow-y', 'scroll');
                if (anchor !== '#cv') {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(anchor).offset().top
                    }, 500);
                    return false;
                }
            } else {
                $('body').css('overflow-y', 'hidden');
            }
        }
        $('a[href^="#"]').click(function(event) {
            processAnchor($(this).attr('href'), event);
        });
        if (window.location.hash) {
            processAnchor(window.location.hash);
        }
        $(window).scroll(function(event) {
            fixMenu();
            onScroll();
        });
        $(window).resize(function() {
            responsiveMenu();
        });
    })();
});