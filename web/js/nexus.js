!function (a) {
    "use strict";
    var b = {
        i18n: {
            ru: {
                months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],
                dayOfWeek: ["\u0412\u0441\u043a", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"]
            },
            en: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            de: {
                months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                dayOfWeek: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
            },
            nl: {
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeek: ["zo", "ma", "di", "wo", "do", "vr", "za"]
            },
            tr: {
                months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"],
                dayOfWeek: ["Paz", "Pts", "Sal", "\xc7ar", "Per", "Cum", "Cts"]
            },
            fr: {
                months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"],
                dayOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
            },
            es: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"]
            },
            th: {
                months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"],
                dayOfWeek: ["\u0e2d\u0e32.", "\u0e08.", "\u0e2d.", "\u0e1e.", "\u0e1e\u0e24.", "\u0e28.", "\u0e2a."]
            },
            pl: {
                months: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"],
                dayOfWeek: ["nd", "pn", "wt", "\u015br", "cz", "pt", "sb"]
            },
            pt: {
                months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
            },
            ch: {
                months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
                dayOfWeek: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"]
            },
            se: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeek: ["S\xf6n", "M\xe5n", "Tis", "Ons", "Tor", "Fre", "L\xf6r"]
            },
            kr: {
                months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"],
                dayOfWeek: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"]
            },
            it: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
            },
            da: {
                months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                dayOfWeek: ["S\xf8n", "Man", "Tir", "ons", "Tor", "Fre", "l\xf8r"]
            },
            ja: {
                months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
                dayOfWeek: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"]
            },
            vi: {
                months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"],
                dayOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
            }
        },
        value: "",
        lang: "en",
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: !1,
        step: 60,
        closeOnDateSelect: !1,
        closeOnWithoutClick: !0,
        timepicker: !0,
        datepicker: !0,
        minDate: !1,
        maxDate: !1,
        minTime: !1,
        maxTime: !1,
        allowTimes: [],
        opened: !1,
        initTime: !0,
        inline: !1,
        onSelectDate: function () {
        },
        onSelectTime: function () {
        },
        onChangeMonth: function () {
        },
        onChangeDateTime: function () {
        },
        onShow: function () {
        },
        onClose: function () {
        },
        onGenerate: function () {
        },
        withoutCopyright: !0,
        inverseButton: !1,
        hours12: !1,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        timeHeightInTimePicker: 25,
        timepickerScrollbar: !0,
        todayButton: !0,
        defaultSelect: !0,
        scrollMonth: !0,
        scrollTime: !0,
        scrollInput: !0,
        lazyInit: !1,
        mask: !1,
        validateOnBlur: !0,
        allowBlank: !0,
        yearStart: 1950,
        yearEnd: 2050,
        style: "",
        id: "",
        roundTime: "round",
        className: "",
        weekends: [],
        yearOffset: 0
    };
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var c = b || 0, d = this.length; d > c; c++)if (this[c] === a)return c;
        return -1
    }), a.fn.xdsoftScroller = function (b) {
        return this.each(function () {
            var c = a(this);
            if (!a(this).hasClass("xdsoft_scroller_box")) {
                var d = function (a) {
                    var b = {x: 0, y: 0};
                    if ("touchstart" == a.type || "touchmove" == a.type || "touchend" == a.type || "touchcancel" == a.type) {
                        var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                        b.x = c.pageX, b.y = c.pageY
                    } else("mousedown" == a.type || "mouseup" == a.type || "mousemove" == a.type || "mouseover" == a.type || "mouseout" == a.type || "mouseenter" == a.type || "mouseleave" == a.type) && (b.x = a.pageX, b.y = a.pageY);
                    return b
                }, e = 0, f = c.children().eq(0), g = c[0].clientHeight, h = f[0].offsetHeight, i = a('<div class="xdsoft_scrollbar"></div>'), j = a('<div class="xdsoft_scroller"></div>'), k = 100, l = !1;
                i.append(j), c.addClass("xdsoft_scroller_box").append(i), j.on("mousedown.xdsoft_scroller", function (d) {
                    g || c.trigger("resize_scroll.xdsoft_scroller", [b]);
                    var f = d.pageY, h = parseInt(j.css("margin-top")), l = i[0].offsetHeight;
                    a(document.body).addClass("xdsoft_noselect"), a([document.body, window]).on("mouseup.xdsoft_scroller", function m() {
                        a([document.body, window]).off("mouseup.xdsoft_scroller", m).off("mousemove.xdsoft_scroller", e).removeClass("xdsoft_noselect")
                    }), a(document.body).on("mousemove.xdsoft_scroller", e = function (a) {
                        var b = a.pageY - f + h;
                        0 > b && (b = 0), b + j[0].offsetHeight > l && (b = l - j[0].offsetHeight), c.trigger("scroll_element.xdsoft_scroller", [k ? b / k : 0])
                    })
                }), c.on("scroll_element.xdsoft_scroller", function (a, b) {
                    g || c.trigger("resize_scroll.xdsoft_scroller", [b, !0]), b = b > 1 ? 1 : 0 > b || isNaN(b) ? 0 : b, j.css("margin-top", k * b), f.css("marginTop", -parseInt((h - g) * b))
                }).on("resize_scroll.xdsoft_scroller", function (a, b, d) {
                    g = c[0].clientHeight, h = f[0].offsetHeight;
                    var e = g / h, l = e * i[0].offsetHeight;
                    e > 1 ? j.hide() : (j.show(), j.css("height", parseInt(l > 10 ? l : 10)), k = i[0].offsetHeight - j[0].offsetHeight, d !== !0 && c.trigger("scroll_element.xdsoft_scroller", [b ? b : Math.abs(parseInt(f.css("marginTop"))) / (h - g)]))
                }), c.mousewheel && c.mousewheel(function (a, b) {
                    var i = Math.abs(parseInt(f.css("marginTop")));
                    return c.trigger("scroll_element.xdsoft_scroller", [(i - 20 * b) / (h - g)]), a.stopPropagation(), !1
                }), c.on("touchstart", function (a) {
                    l = d(a)
                }), c.on("touchmove", function (a) {
                    if (l) {
                        var b = d(a), e = Math.abs(parseInt(f.css("marginTop")));
                        c.trigger("scroll_element.xdsoft_scroller", [(e - (b.y - l.y)) / (h - g)]), a.stopPropagation(), a.preventDefault()
                    }
                }), c.on("touchend touchcancel", function () {
                    l = !1
                })
            }
            c.trigger("resize_scroll.xdsoft_scroller", [b])
        })
    }, a.fn.datetimepicker = function (c) {
        var d = 48, e = 57, f = 96, g = 105, h = 17, i = 46, j = 13, k = 27, l = 8, m = 37, n = 38, o = 39, p = 40, q = 9, r = 116, s = 65, t = 67, u = 86, v = 90, w = 89, x = !1, y = a.isPlainObject(c) || !c ? a.extend(!0, {}, b, c) : a.extend({}, b), z = 0, A = function (a) {
            a.on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function b() {
                a.is(":disabled") || a.is(":hidden") || !a.is(":visible") || a.data("xdsoft_datetimepicker") || (clearTimeout(z), z = setTimeout(function () {
                    a.data("xdsoft_datetimepicker") || B(a), a.off("open.xdsoft focusin.xdsoft mousedown.xdsoft", b).trigger("open.xdsoft")
                }, 100))
            })
        }, B = function (b) {
            function S() {
                var a = y.value ? y.value : b && b.val && b.val() ? b.val() : "";
                return a && L.isValidDate(a = Date.parseDate(a, y.format)) ? c.data("changed", !0) : a = "", a || y.startDate === !1 || (a = L.strToDateTime(y.startDate)), a ? a : 0
            }

            var c = a("<div " + (y.id ? 'id="' + y.id + '"' : "") + " " + (y.style ? 'style="' + y.style + '"' : "") + ' class="xdsoft_datetimepicker xdsoft_noselect ' + y.className + '"></div>'), z = a('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'), A = a('<div class="xdsoft_datepicker active"></div>'), B = a('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'), C = a('<div class="xdsoft_calendar"></div>'), D = a('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'), E = D.find(".xdsoft_time_box").eq(0), F = a('<div class="xdsoft_time_variant"></div>'), G = a('<div class="xdsoft_scrollbar"></div>'), I = (a('<div class="xdsoft_scroller"></div>'), a('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>')), J = a('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');
            B.find(".xdsoft_month span").after(I), B.find(".xdsoft_year span").after(J), B.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft", function (b) {
                B.find(".xdsoft_select").hide();
                var c = a(this).find(".xdsoft_select").eq(0), d = 0, e = 0;
                L.currentTime && (d = L.currentTime[a(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), c.show();
                for (var f = c.find("div.xdsoft_option"), g = 0; g < f.length && f.eq(g).data("value") != d; g++)e += f[0].offsetHeight;
                return c.xdsoftScroller(e / (c.children()[0].offsetHeight - c[0].clientHeight)), b.stopPropagation(), !1
            }), B.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft", function (a) {
                a.stopPropagation(), a.preventDefault()
            }).on("mousedown.xdsoft", ".xdsoft_option", function () {
                L && L.currentTime && L.currentTime[a(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](a(this).data("value")), a(this).parent().parent().hide(), c.trigger("xchange.xdsoft"), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(c, L.currentTime, c.data("input"))
            }), c.setOptions = function (z) {
                if (y = a.extend(!0, {}, y, z), z.allowTimes && a.isArray(z.allowTimes) && z.allowTimes.length && (y.allowTimes = a.extend(!0, [], z.allowTimes)), z.weekends && a.isArray(z.weekends) && z.weekends.length && (y.weekends = a.extend(!0, [], z.weekends)), !y.open && !y.opened || y.inline || b.trigger("open.xdsoft"), y.inline && (c.addClass("xdsoft_inline"), b.after(c).hide(), c.trigger("afterOpen.xdsoft")), y.inverseButton && (y.next = "xdsoft_prev", y.prev = "xdsoft_next"), y.datepicker ? A.addClass("active") : A.removeClass("active"), y.timepicker ? D.addClass("active") : D.removeClass("active"), y.value && (b && b.val && b.val(y.value), L.setCurrentTime(y.value)), y.dayOfWeekStart = isNaN(y.dayOfWeekStart) || parseInt(y.dayOfWeekStart) < 0 || parseInt(y.dayOfWeekStart) > 6 ? 0 : parseInt(y.dayOfWeekStart), y.timepickerScrollbar || G.hide(), y.minDate && /^-(.*)$/.test(y.minDate) && (y.minDate = L.strToDateTime(y.minDate).dateFormat(y.formatDate)), y.maxDate && /^\+(.*)$/.test(y.maxDate) && (y.maxDate = L.strToDateTime(y.maxDate).dateFormat(y.formatDate)), B.find(".xdsoft_today_button").css("visibility", y.todayButton ? "visible" : "hidden"), y.mask) {
                    var E = function (a) {
                        try {
                            if (document.selection && document.selection.createRange) {
                                var b = document.selection.createRange();
                                return b.getBookmark().charCodeAt(2) - 2
                            }
                            if (a.setSelectionRange)return a.selectionStart
                        } catch (c) {
                            return 0
                        }
                    }, F = function (a, b) {
                        var a = "string" == typeof a || a instanceof String ? document.getElementById(a) : a;
                        if (!a)return !1;
                        if (a.createTextRange) {
                            var c = a.createTextRange();
                            return c.collapse(!0), c.moveEnd(b), c.moveStart(b), c.select(), !0
                        }
                        return a.setSelectionRange ? (a.setSelectionRange(b, b), !0) : !1
                    }, H = function (a, b) {
                        var c = a.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                        return RegExp(c).test(b)
                    };
                    switch (b.off("keydown.xdsoft"), !0) {
                        case y.mask === !0:
                            y.mask = y.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59");
                        case"string" == a.type(y.mask):
                            H(y.mask, b.val()) || b.val(y.mask.replace(/[0-9]/g, "_")), b.on("keydown.xdsoft", function (c) {
                                var z = this.value, A = c.which;
                                switch (!0) {
                                    case A >= d && e >= A || A >= f && g >= A || A == l || A == i:
                                        var B = E(this), C = A != l && A != i ? String.fromCharCode(A >= f && g >= A ? A - d : A) : "_";
                                        for (A != l && A != i || !B || (B--, C = "_"); /[^0-9_]/.test(y.mask.substr(B, 1)) && B < y.mask.length && B > 0;)B += A == l || A == i ? -1 : 1;
                                        if (z = z.substr(0, B) + C + z.substr(B + 1), "" == a.trim(z))z = y.mask.replace(/[0-9]/g, "_"); else if (B == y.mask.length)break;
                                        for (B += A == l || A == i ? 0 : 1; /[^0-9_]/.test(y.mask.substr(B, 1)) && B < y.mask.length && B > 0;)B += A == l || A == i ? -1 : 1;
                                        H(y.mask, z) ? (this.value = z, F(this, B)) : "" == a.trim(z) ? this.value = y.mask.replace(/[0-9]/g, "_") : b.trigger("error_input.xdsoft");
                                        break;
                                    case!!~[s, t, u, v, w].indexOf(A) && x:
                                    case!!~[k, n, p, m, o, r, h, q, j].indexOf(A):
                                        return !0
                                }
                                return c.preventDefault(), !1
                            })
                    }
                }
                y.validateOnBlur && b.off("blur.xdsoft").on("blur.xdsoft", function () {
                    y.allowBlank && !a.trim(a(this).val()).length ? (a(this).val(null), c.data("xdsoft_datetime").empty()) : Date.parseDate(a(this).val(), y.format) && c.data("xdsoft_datetime").setCurrentTime(a(this).val()), c.trigger("changedatetime.xdsoft")
                }), y.dayOfWeekStartPrev = 0 == y.dayOfWeekStart ? 6 : y.dayOfWeekStart - 1, c.trigger("xchange.xdsoft")
            }, c.data("options", y).on("mousedown.xdsoft", function (a) {
                return a.stopPropagation(), a.preventDefault(), J.hide(), I.hide(), !1
            });
            var K = D.find(".xdsoft_time_box");
            K.append(F), K.xdsoftScroller(), c.on("afterOpen.xdsoft", function () {
                K.xdsoftScroller()
            }), c.append(A).append(D), y.withoutCopyright !== !0 && c.append(z), A.append(B).append(C), a("body").append(c);
            var L = new function () {
                var a = this;
                a.now = function () {
                    var a = new Date;
                    return y.yearOffset && a.setFullYear(a.getFullYear() + y.yearOffset), a
                }, a.currentTime = this.now(), a.isValidDate = function (a) {
                    return "[object Date]" !== Object.prototype.toString.call(a) ? !1 : !isNaN(a.getTime())
                }, a.setCurrentTime = function (b) {
                    a.currentTime = "string" == typeof b ? a.strToDateTime(b) : a.isValidDate(b) ? b : a.now(), c.trigger("xchange.xdsoft")
                }, a.empty = function () {
                    a.currentTime = null
                }, a.getCurrentTime = function () {
                    return a.currentTime
                }, a.nextMonth = function () {
                    var b = a.currentTime.getMonth() + 1;
                    return 12 == b && (a.currentTime.setFullYear(a.currentTime.getFullYear() + 1), b = 0), a.currentTime.setDate(Math.min(Date.daysInMonth[b], a.currentTime.getDate())), a.currentTime.setMonth(b), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(c, L.currentTime, c.data("input")), c.trigger("xchange.xdsoft"), b
                }, a.prevMonth = function () {
                    var b = a.currentTime.getMonth() - 1;
                    return -1 == b && (a.currentTime.setFullYear(a.currentTime.getFullYear() - 1), b = 11), a.currentTime.setDate(Math.min(Date.daysInMonth[b], a.currentTime.getDate())), a.currentTime.setMonth(b), y.onChangeMonth && y.onChangeMonth.call && y.onChangeMonth.call(c, L.currentTime, c.data("input")), c.trigger("xchange.xdsoft"), b
                }, a.strToDateTime = function (b) {
                    var d, e, c = [];
                    return (c = /^(\+|\-)(.*)$/.exec(b)) && (c[2] = Date.parseDate(c[2], y.formatDate)) ? (d = c[2].getTime() - 6e4 * 1 * c[2].getTimezoneOffset(), e = new Date(L.now().getTime() + parseInt(c[1] + "1") * d)) : e = b ? Date.parseDate(b, y.format) : a.now(), a.isValidDate(e) || (e = a.now()), e
                }, a.strtodate = function (b) {
                    var c = b ? Date.parseDate(b, y.formatDate) : a.now();
                    return a.isValidDate(c) || (c = a.now()), c
                }, a.strtotime = function (b) {
                    var c = b ? Date.parseDate(b, y.formatTime) : a.now();
                    return a.isValidDate(c) || (c = a.now()), c
                }, a.str = function () {
                    return a.currentTime.dateFormat(y.format)
                }
            };
            B.find(".xdsoft_today_button").on("mousedown.xdsoft", function () {
                c.data("changed", !0), L.setCurrentTime(0), c.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function () {
                b.val(L.str()), c.trigger("close.xdsoft")
            }), B.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var b = a(this), c = 0, d = !1;
                !function e(a) {
                    L.currentTime.getMonth(), b.hasClass(y.next) ? L.nextMonth() : b.hasClass(y.prev) && L.prevMonth(), !d && (c = setTimeout(e, a ? a : 100))
                }(500), a([document.body, window]).on("mouseup.xdsoft", function f() {
                    clearTimeout(c), d = !0, a([document.body, window]).off("mouseup.xdsoft", f)
                })
            }), D.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                var b = a(this), c = 0, d = !1, e = 110;
                !function f(a) {
                    var g = E[0].clientHeight, h = F[0].offsetHeight, i = Math.abs(parseInt(F.css("marginTop")));
                    b.hasClass(y.next) && h - g - y.timeHeightInTimePicker >= i ? F.css("marginTop", "-" + (i + y.timeHeightInTimePicker) + "px") : b.hasClass(y.prev) && i - y.timeHeightInTimePicker >= 0 && F.css("marginTop", "-" + (i - y.timeHeightInTimePicker) + "px"), E.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(F.css("marginTop")) / (h - g))]), e = e > 10 ? 10 : e - 10, !d && (c = setTimeout(f, a ? a : e))
                }(500), a([document.body, window]).on("mouseup.xdsoft", function g() {
                    clearTimeout(c), d = !0, a([document.body, window]).off("mouseup.xdsoft", g)
                })
            });
            var M = 0;
            c.on("xchange.xdsoft", function (b) {
                clearTimeout(M), M = setTimeout(function () {
                    for (var b = "", d = new Date(L.currentTime.getFullYear(), L.currentTime.getMonth(), 1, 12, 0, 0), e = 0, f = L.now(); d.getDay() != y.dayOfWeekStart;)d.setDate(d.getDate() - 1);
                    b += "<table><thead><tr>";
                    for (var g = 0; 7 > g; g++)b += "<th>" + y.i18n[y.lang].dayOfWeek[g + y.dayOfWeekStart > 6 ? 0 : g + y.dayOfWeekStart] + "</th>";
                    b += "</tr></thead>", b += "<tbody><tr>";
                    var h = !1, i = !1;
                    y.maxDate !== !1 && (h = L.strtodate(y.maxDate), h = new Date(h.getFullYear(), h.getMonth(), h.getDate(), 23, 59, 59, 999)), y.minDate !== !1 && (i = L.strtodate(y.minDate), i = new Date(i.getFullYear(), i.getMonth(), i.getDate()));
                    for (var j, k, l, m = []; e < L.currentTime.getDaysInMonth() || d.getDay() != y.dayOfWeekStart || L.currentTime.getMonth() == d.getMonth();)m = [], e++, j = d.getDate(), k = d.getFullYear(), l = d.getMonth(), m.push("xdsoft_date"), (h !== !1 && d > h || i !== !1 && i > d) && m.push("xdsoft_disabled"), L.currentTime.getMonth() != l && m.push("xdsoft_other_month"), (y.defaultSelect || c.data("changed")) && L.currentTime.dateFormat("d.m.Y") == d.dateFormat("d.m.Y") && m.push("xdsoft_current"), f.dateFormat("d.m.Y") == d.dateFormat("d.m.Y") && m.push("xdsoft_today"), (0 == d.getDay() || 6 == d.getDay() || ~y.weekends.indexOf(d.dateFormat("d.m.Y"))) && m.push("xdsoft_weekend"), y.beforeShowDay && "function" == typeof y.beforeShowDay && m.push(y.beforeShowDay(d)), b += '<td data-date="' + j + '" data-month="' + l + '" data-year="' + k + '"' + ' class="xdsoft_date xdsoft_day_of_week' + d.getDay() + " " + m.join(" ") + '">' + "<div>" + j + "</div>" + "</td>", d.getDay() == y.dayOfWeekStartPrev && (b += "</tr>"), d.setDate(j + 1);
                    b += "</tbody></table>", C.html(b), B.find(".xdsoft_label span").eq(0).text(y.i18n[y.lang].months[L.currentTime.getMonth()]), B.find(".xdsoft_label span").eq(1).text(L.currentTime.getFullYear());
                    var n = "", o = "", l = "", p = function (a, b) {
                        var d = L.now();
                        d.setHours(a), a = parseInt(d.getHours()), d.setMinutes(b), b = parseInt(d.getMinutes()), m = [], (y.maxTime !== !1 && L.strtotime(y.maxTime).getTime() < d.getTime() || y.minTime !== !1 && L.strtotime(y.minTime).getTime() > d.getTime()) && m.push("xdsoft_disabled"), (y.initTime || y.defaultSelect || c.data("changed")) && parseInt(L.currentTime.getHours()) == parseInt(a) && (y.step > 59 || Math[y.roundTime](L.currentTime.getMinutes() / y.step) * y.step == parseInt(b)) && (y.defaultSelect || c.data("changed") ? m.push("xdsoft_current") : y.initTime && m.push("xdsoft_init_time")), parseInt(f.getHours()) == parseInt(a) && parseInt(f.getMinutes()) == parseInt(b) && m.push("xdsoft_today"), n += '<div class="xdsoft_time ' + m.join(" ") + '" data-hour="' + a + '" data-minute="' + b + '">' + d.dateFormat(y.formatTime) + "</div>"
                    };
                    if (y.allowTimes && a.isArray(y.allowTimes) && y.allowTimes.length)for (var e = 0; e < y.allowTimes.length; e++)o = L.strtotime(y.allowTimes[e]).getHours(), l = L.strtotime(y.allowTimes[e]).getMinutes(), p(o, l); else for (var e = 0, g = 0; e < (y.hours12 ? 12 : 24); e++)for (g = 0; 60 > g; g += y.step)o = (10 > e ? "0" : "") + e, l = (10 > g ? "0" : "") + g, p(o, l);
                    F.html(n);
                    var q = "", e = 0;
                    for (e = parseInt(y.yearStart, 10) + y.yearOffset; e <= parseInt(y.yearEnd, 10) + y.yearOffset; e++)q += '<div class="xdsoft_option ' + (L.currentTime.getFullYear() == e ? "xdsoft_current" : "") + '" data-value="' + e + '">' + e + "</div>";
                    for (J.children().eq(0).html(q), e = 0, q = ""; 11 >= e; e++)q += '<div class="xdsoft_option ' + (L.currentTime.getMonth() == e ? "xdsoft_current" : "") + '" data-value="' + e + '">' + y.i18n[y.lang].months[e] + "</div>";
                    I.children().eq(0).html(q), a(this).trigger("generate.xdsoft")
                }, 10), b.stopPropagation()
            }).on("afterOpen.xdsoft", function () {
                if (y.timepicker) {
                    var a;
                    if (F.find(".xdsoft_current").length ? a = ".xdsoft_current" : F.find(".xdsoft_init_time").length && (a = ".xdsoft_init_time"), a) {
                        var b = E[0].clientHeight, c = F[0].offsetHeight, d = F.find(a).index() * y.timeHeightInTimePicker + 1;
                        d > c - b && (d = c - b), F.css("marginTop", "-" + parseInt(d) + "px"), E.trigger("scroll_element.xdsoft_scroller", [parseInt(d) / (c - b)])
                    }
                }
            });
            var N = 0;
            C.on("click.xdsoft", "td", function (d) {
                d.stopPropagation(), N++;
                var e = a(this), f = L.currentTime;
                return e.hasClass("xdsoft_disabled") ? !1 : (f.setDate(e.data("date")), f.setMonth(e.data("month")), f.setFullYear(e.data("year")), c.trigger("select.xdsoft", [f]), b.val(L.str()), (N > 1 || y.closeOnDateSelect === !0 || 0 === y.closeOnDateSelect && !y.timepicker) && !y.inline && c.trigger("close.xdsoft"), y.onSelectDate && y.onSelectDate.call && y.onSelectDate.call(c, L.currentTime, c.data("input")), c.data("changed", !0), c.trigger("xchange.xdsoft"), c.trigger("changedatetime.xdsoft"), setTimeout(function () {
                    N = 0
                }, 200), void 0)
            }), F.on("click.xdsoft", "div", function (b) {
                b.stopPropagation();
                var d = a(this), e = L.currentTime;
                return d.hasClass("xdsoft_disabled") ? !1 : (e.setHours(d.data("hour")), e.setMinutes(d.data("minute")), c.trigger("select.xdsoft", [e]), c.data("input").val(L.str()), !y.inline && c.trigger("close.xdsoft"), y.onSelectTime && y.onSelectTime.call && y.onSelectTime.call(c, L.currentTime, c.data("input")), c.data("changed", !0), c.trigger("xchange.xdsoft"), c.trigger("changedatetime.xdsoft"), void 0)
            }), c.mousewheel && A.mousewheel(function (a, b) {
                return y.scrollMonth ? (0 > b ? L.nextMonth() : L.prevMonth(), !1) : !0
            }), c.mousewheel && E.unmousewheel().mousewheel(function (a, b) {
                if (!y.scrollTime)return !0;
                var e = E[0].clientHeight, f = F[0].offsetHeight, g = Math.abs(parseInt(F.css("marginTop"))), h = !0;
                return 0 > b && f - e - y.timeHeightInTimePicker >= g ? (F.css("marginTop", "-" + (g + y.timeHeightInTimePicker) + "px"), h = !1) : b > 0 && g - y.timeHeightInTimePicker >= 0 && (F.css("marginTop", "-" + (g - y.timeHeightInTimePicker) + "px"), h = !1), E.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(F.css("marginTop")) / (f - e))]), a.stopPropagation(), h
            }), c.on("changedatetime.xdsoft", function () {
                if (y.onChangeDateTime && y.onChangeDateTime.call) {
                    var a = c.data("input");
                    y.onChangeDateTime.call(c, L.currentTime, a), a.trigger("change")
                }
            }).on("generate.xdsoft", function () {
                y.onGenerate && y.onGenerate.call && y.onGenerate.call(c, L.currentTime, c.data("input"))
            });
            var O = 0;
            b.mousewheel && b.mousewheel(function (a, d, e, f) {
                return y.scrollInput ? !y.datepicker && y.timepicker ? (O = F.find(".xdsoft_current").length ? F.find(".xdsoft_current").eq(0).index() : 0, O + d >= 0 && O + d < F.children().length && (O += d), F.children().eq(O).length && F.children().eq(O).trigger("mousedown"), !1) : y.datepicker && !y.timepicker ? (A.trigger(a, [d, e, f]), b.val && b.val(L.str()), c.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            });
            var P = function () {
                var b = c.data("input").offset(), d = b.top + c.data("input")[0].offsetHeight - 1, e = b.left;
                d + c[0].offsetHeight > a(window).height() + a(window).scrollTop() && (d = b.top - c[0].offsetHeight + 1), 0 > d && (d = 0), e + c[0].offsetWidth > a(window).width() && (e = b.left - c[0].offsetWidth + c.data("input")[0].offsetWidth), c.css({
                    left: e,
                    top: d
                })
            };
            c.on("open.xdsoft", function () {
                var b = !0;
                y.onShow && y.onShow.call && (b = y.onShow.call(c, L.currentTime, c.data("input"))), b !== !1 && (c.show(), c.trigger("afterOpen.xdsoft"), P(), a(window).off("resize.xdsoft", P).on("resize.xdsoft", P), y.closeOnWithoutClick && a([document.body, window]).on("mousedown.xdsoft", function d() {
                    c.trigger("close.xdsoft"), a([document.body, window]).off("mousedown.xdsoft", d)
                }))
            }).on("close.xdsoft", function (a) {
                var b = !0;
                y.onClose && y.onClose.call && (b = y.onClose.call(c, L.currentTime, c.data("input"))), b === !1 || y.opened || y.inline || c.hide(), a.stopPropagation()
            }).data("input", b);
            var Q = 0;
            c.data("xdsoft_datetime", L), c.setOptions(y), L.setCurrentTime(S()), c.trigger("afterOpen.xdsoft"), b.data("xdsoft_datetimepicker", c).on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function () {
                b.is(":disabled") || b.is(":hidden") || !b.is(":visible") || (clearTimeout(Q), Q = setTimeout(function () {
                    b.is(":disabled") || b.is(":hidden") || !b.is(":visible") || L.setCurrentTime(S())
                }, 100))
            }).on("keydown.xdsoft", function (b) {
                var e = (this.value, b.which);
                switch (!0) {
                    case!!~[j].indexOf(e):
                        var f = a("input:visible,textarea:visible");
                        return c.trigger("close.xdsoft"), f.eq(f.index(this) + 1).focus(), !1;
                    case!!~[q].indexOf(e):
                        return c.trigger("close.xdsoft"), !0
                }
            })
        }, C = function (b) {
            var c = b.data("xdsoft_datetimepicker");
            c && (c.data("xdsoft_datetime", null), c.remove(), b.data("xdsoft_datetimepicker", null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft"), a(window).off("resize.xdsoft"), a([window, document.body]).off("mousedown.xdsoft"), b.unmousewheel && b.unmousewheel())
        };
        return a(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (a) {
            a.keyCode == h && (x = !0)
        }).on("keyup.xdsoftctrl", function (a) {
            a.keyCode == h && (x = !1)
        }), this.each(function () {
            var b;
            if (b = a(this).data("xdsoft_datetimepicker")) {
                if ("string" === a.type(c))switch (c) {
                    case"show":
                        a(this).select().focus(), b.trigger("open.xdsoft");
                        break;
                    case"hide":
                        b.trigger("close.xdsoft");
                        break;
                    case"destroy":
                        C(a(this));
                        break;
                    case"reset":
                        this.value = this.defaultValue, this.value && b.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value, y.format)) || b.data("changed", !1), b.data("xdsoft_datetime").setCurrentTime(this.value)
                } else b.setOptions(c);
                return 0
            }
            "string" !== a.type(c) && (!y.lazyInit || y.open || y.inline ? B(a(this)) : A(a(this)))
        })
    }
}(jQuery), Date.parseFunctions = {count: 0}, Date.parseRegexes = [], Date.formatFunctions = {count: 0}, Date.prototype.dateFormat = function (a) {
    if ("unixtime" == a)return parseInt(this.getTime() / 1e3);
    null == Date.formatFunctions[a] && Date.createNewFormat(a);
    var b = Date.formatFunctions[a];
    return this[b]()
}, Date.createNewFormat = function (format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;
    for (var code = "Date.prototype." + funcName + " = function() {return ", special = !1, ch = "", i = 0; i < format.length; ++i)ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, code += "'" + String.escape(ch) + "' + ") : code += Date.getFormatCode(ch) : special = !0;
    eval(code.substring(0, code.length - 3) + ";}")
}, Date.getFormatCode = function (a) {
    switch (a) {
        case"d":
            return "String.leftPad(this.getDate(), 2, '0') + ";
        case"D":
            return "Date.dayNames[this.getDay()].substring(0, 3) + ";
        case"j":
            return "this.getDate() + ";
        case"l":
            return "Date.dayNames[this.getDay()] + ";
        case"S":
            return "this.getSuffix() + ";
        case"w":
            return "this.getDay() + ";
        case"z":
            return "this.getDayOfYear() + ";
        case"W":
            return "this.getWeekOfYear() + ";
        case"F":
            return "Date.monthNames[this.getMonth()] + ";
        case"m":
            return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
        case"M":
            return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
        case"n":
            return "(this.getMonth() + 1) + ";
        case"t":
            return "this.getDaysInMonth() + ";
        case"L":
            return "(this.isLeapYear() ? 1 : 0) + ";
        case"Y":
            return "this.getFullYear() + ";
        case"y":
            return "('' + this.getFullYear()).substring(2, 4) + ";
        case"a":
            return "(this.getHours() < 12 ? 'am' : 'pm') + ";
        case"A":
            return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
        case"g":
            return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
        case"G":
            return "this.getHours() + ";
        case"h":
            return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
        case"H":
            return "String.leftPad(this.getHours(), 2, '0') + ";
        case"i":
            return "String.leftPad(this.getMinutes(), 2, '0') + ";
        case"s":
            return "String.leftPad(this.getSeconds(), 2, '0') + ";
        case"O":
            return "this.getGMTOffset() + ";
        case"T":
            return "this.getTimezone() + ";
        case"Z":
            return "(this.getTimezoneOffset() * -60) + ";
        default:
            return "'" + String.escape(a) + "' + "
    }
}, Date.parseDate = function (a, b) {
    if ("unixtime" == b)return new Date(isNaN(parseInt(a)) ? 0 : 1e3 * parseInt(a));
    null == Date.parseFunctions[b] && Date.createParser(b);
    var c = Date.parseFunctions[b];
    return Date[c](a)
}, Date.createParser = function (format) {
    var funcName = "parse" + Date.parseFunctions.count++, regexNum = Date.parseRegexes.length, currentGroup = 1;
    Date.parseFunctions[format] = funcName;
    for (var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {", regex = "", special = !1, ch = "", i = 0; i < format.length; ++i)ch = format.charAt(i), special || "\\" != ch ? special ? (special = !1, regex += String.escape(ch)) : (obj = Date.formatCodeToRegex(ch, currentGroup), currentGroup += obj.g, regex += obj.s, obj.g && obj.c && (code += obj.c)) : special = !0;
    code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}", code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}", Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$"), eval(code)
}, Date.formatCodeToRegex = function (a, b) {
    switch (a) {
        case"D":
            return {g: 0, c: null, s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};
        case"j":
        case"d":
            return {g: 1, c: "d = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,2})"};
        case"l":
            return {g: 0, c: null, s: "(?:" + Date.dayNames.join("|") + ")"};
        case"S":
            return {g: 0, c: null, s: "(?:st|nd|rd|th)"};
        case"w":
            return {g: 0, c: null, s: "\\d"};
        case"z":
            return {g: 1, c: "z = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,3})"};
        case"W":
            return {g: 0, c: null, s: "(?:\\d{2})"};
        case"F":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + b + "].substring(0, 3)], 10);\n",
                s: "(" + Date.monthNames.join("|") + ")"
            };
        case"M":
            return {
                g: 1,
                c: "m = parseInt(Date.monthNumbers[results[" + b + "]], 10);\n",
                s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
            };
        case"n":
        case"m":
            return {g: 1, c: "m = parseInt(results[" + b + "], 10) - 1;\n", s: "(\\d{1,2})"};
        case"t":
            return {g: 0, c: null, s: "\\d{1,2}"};
        case"L":
            return {g: 0, c: null, s: "(?:1|0)"};
        case"Y":
            return {g: 1, c: "y = parseInt(results[" + b + "], 10);\n", s: "(\\d{4})"};
        case"y":
            return {
                g: 1,
                c: "var ty = parseInt(results[" + b + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
                s: "(\\d{1,2})"
            };
        case"a":
            return {
                g: 1,
                c: "if (results[" + b + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(am|pm)"
            };
        case"A":
            return {
                g: 1,
                c: "if (results[" + b + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
                s: "(AM|PM)"
            };
        case"g":
        case"G":
        case"h":
        case"H":
            return {g: 1, c: "h = parseInt(results[" + b + "], 10);\n", s: "(\\d{1,2})"};
        case"i":
            return {g: 1, c: "i = parseInt(results[" + b + "], 10);\n", s: "(\\d{2})"};
        case"s":
            return {g: 1, c: "s = parseInt(results[" + b + "], 10);\n", s: "(\\d{2})"};
        case"O":
            return {g: 0, c: null, s: "[+-]\\d{4}"};
        case"T":
            return {g: 0, c: null, s: "[A-Z]{3}"};
        case"Z":
            return {g: 0, c: null, s: "[+-]\\d{1,5}"};
        default:
            return {g: 0, c: null, s: String.escape(a)}
    }
}, Date.prototype.getTimezone = function () {
    return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3")
}, Date.prototype.getGMTOffset = function () {
    return (this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0")
}, Date.prototype.getDayOfYear = function () {
    var a = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    for (var b = 0; b < this.getMonth(); ++b)a += Date.daysInMonth[b];
    return a + this.getDate()
}, Date.prototype.getWeekOfYear = function () {
    var a = this.getDayOfYear() + (4 - this.getDay()), b = new Date(this.getFullYear(), 0, 1), c = 7 - b.getDay() + 4;
    return String.leftPad(Math.ceil((a - c) / 7) + 1, 2, "0")
}, Date.prototype.isLeapYear = function () {
    var a = this.getFullYear();
    return 0 == (3 & a) && (a % 100 || 0 == a % 400 && a)
}, Date.prototype.getFirstDayOfMonth = function () {
    var a = (this.getDay() - (this.getDate() - 1)) % 7;
    return 0 > a ? a + 7 : a
}, Date.prototype.getLastDayOfMonth = function () {
    var a = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return 0 > a ? a + 7 : a
}, Date.prototype.getDaysInMonth = function () {
    return Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28, Date.daysInMonth[this.getMonth()]
}, Date.prototype.getSuffix = function () {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
    }
}, String.escape = function (a) {
    return a.replace(/('|\\)/g, "\\$1")
}, String.leftPad = function (a, b, c) {
    var d = new String(a);
    for (null == c && (c = " "); d.length < b;)d = c + d;
    return d
}, Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Date.y2kYear = 50, Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
}, Date.patterns = {
    ISO8601LongPattern: "Y-m-d H:i:s",
    ISO8601ShortPattern: "Y-m-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"
}, function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function g(b) {
        var l, c = b || window.event, f = [].slice.call(arguments, 1), g = 0, h = 0, i = 0, j = 0, k = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (g = c.wheelDelta), c.detail && (g = -1 * c.detail), c.deltaY && (i = -1 * c.deltaY, g = i), c.deltaX && (h = c.deltaX, g = -1 * h), void 0 !== c.wheelDeltaY && (i = c.wheelDeltaY), void 0 !== c.wheelDeltaX && (h = -1 * c.wheelDeltaX), j = Math.abs(g), (!d || d > j) && (d = j), k = Math.max(Math.abs(i), Math.abs(h)), (!e || e > k) && (e = k), l = g > 0 ? "floor" : "ceil", g = Math[l](g / d), h = Math[l](h / e), i = Math[l](i / e), f.unshift(b, g, h, i), (a.event.dispatch || a.event.handle).apply(this, f)
    }

    var d, e, b = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], c = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (a.event.fixHooks)for (var f = b.length; f;)a.event.fixHooks[b[--f]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)for (var a = c.length; a;)this.addEventListener(c[--a], g, !1); else this.onmousewheel = g
        }, teardown: function () {
            if (this.removeEventListener)for (var a = c.length; a;)this.removeEventListener(c[--a], g, !1); else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
}), function (a) {
    var c = {BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, ARROW_UP: 38, ARROW_DOWN: 40, COMMA: 188}, d = "tokenize";
    a.tokenize = function (b) {
        void 0 == b && (b = a.fn.tokenize.defaults), this.options = b
    }, a.extend(a.tokenize.prototype, {
        init: function (b) {
            var c = this;
            this.select = b.attr("multiple", "multiple").css({
                margin: 0,
                padding: 0,
                border: 0
            }).hide(), this.container = a("<div />").attr("class", this.select.attr("class")).addClass("Tokenize"), 1 == this.options.maxElements && this.container.addClass("OnlyOne"), this.dropdown = a("<ul />").addClass("Dropdown"), this.tokensContainer = a("<ul />").addClass("TokensContainer"), this.searchToken = a("<li />").addClass("TokenSearch").appendTo(this.tokensContainer), this.searchInput = a("<input />").attr("maxlength", this.options.searchMaxLength).appendTo(this.searchToken), this.container.append(this.tokensContainer).append(this.dropdown).insertAfter(this.select), this.tokensContainer.on("click", function (a) {
                a.stopImmediatePropagation(), c.searchInput.get(0).focus(), c.dropdown.is(":hidden") && "" != c.searchInput.val() && c.search()
            }), this.searchInput.on("keydown", function (a) {
                c.resizeSearchInput(), c.keydown(a)
            }), this.searchInput.on("keyup", function (a) {
                c.keyup(a)
            }), this.searchInput.on("paste", function () {
                setTimeout(function () {
                    c.resizeSearchInput()
                }, 10), setTimeout(function () {
                    var b = c.searchInput.val().split(",");
                    b.length > 1 && a.each(b, function (a, b) {
                        c.tokenAdd(b.trim(), "")
                    })
                }, 20)
            }), a(document).on("click", function () {
                c.dropdownHide(), 1 == c.options.maxElements && c.searchInput.val() && c.tokenAdd(c.searchInput.val(), "")
            }), this.resizeSearchInput(), a("option:selected", this.select).each(function () {
                c.tokenAdd(a(this).attr("value"), a(this).html(), !0)
            })
        }, dropdownShow: function () {
            this.dropdown.show()
        }, dropdownPrev: function () {
            a("li.Hover", this.dropdown).length > 0 ? a("li.Hover", this.dropdown).is("li:first-child") ? (a("li.Hover", this.dropdown).removeClass("Hover"), a("li:last-child", this.dropdown).addClass("Hover")) : a("li.Hover", this.dropdown).removeClass("Hover").prev().addClass("Hover") : a("li:first", this.dropdown).addClass("Hover")
        }, dropdownNext: function () {
            a("li.Hover", this.dropdown).length > 0 ? a("li.Hover", this.dropdown).is("li:last-child") ? (a("li.Hover", this.dropdown).removeClass("Hover"), a("li:first-child", this.dropdown).addClass("Hover")) : a("li.Hover", this.dropdown).removeClass("Hover").next().addClass("Hover") : a("li:first", this.dropdown).addClass("Hover")
        }, dropdownAddItem: function (b, c, d) {
            if (void 0 == d && (d = c), a('li[data-value="' + b + '"]', this.tokensContainer).length)return !1;
            var e = this, f = a("<li />").attr("data-value", b).attr("data-text", c).html(d).on("click", function (b) {
                b.stopImmediatePropagation(), e.tokenAdd(a(this).attr("data-value"), a(this).attr("data-text"))
            }).on("mouseover", function () {
                a(this).addClass("Hover")
            }).on("mouseout", function () {
                a("li", e.dropdown).removeClass("Hover")
            });
            return this.dropdown.append(f), !0
        }, dropdownHide: function () {
            this.dropdownReset(), this.dropdown.hide()
        }, dropdownReset: function () {
            this.dropdown.html("")
        }, resizeSearchInput: function () {
            var b = a("<div />").css({
                position: "absolute",
                visibility: "hidden"
            }).addClass("TokenizeMeasure").html(this.searchInput.val());
            a("body").append(b), this.searchInput.width(b.width() + 25), b.remove()
        }, resetSearchInput: function () {
            this.searchInput.val(""), this.resizeSearchInput()
        }, resetPendingTokens: function () {
            a("li.PendingDelete", this.tokensContainer).removeClass("PendingDelete")
        }, keydown: function (b) {
            if (b.keyCode == c.COMMA)b.preventDefault(), this.tokenAdd(this.searchInput.val(), ""); else switch (b.keyCode) {
                case c.BACKSPACE:
                    0 == this.searchInput.val().length && (b.preventDefault(), a("li.Token.PendingDelete", this.tokensContainer).length ? this.tokenRemove(a("li.Token.PendingDelete").attr("data-value")) : a("li.Token:last", this.tokensContainer).addClass("PendingDelete"), this.dropdownHide());
                    break;
                case c.TAB:
                case c.ENTER:
                    if (a("li.Hover", this.dropdown).length) {
                        var d = a("li.Hover", this.dropdown);
                        b.preventDefault(), this.tokenAdd(d.attr("data-value"), d.attr("data-text"))
                    } else this.searchInput.val() && (b.preventDefault(), this.tokenAdd(this.searchInput.val(), ""));
                    this.resetPendingTokens();
                    break;
                case c.ESCAPE:
                    this.resetSearchInput(), this.dropdownHide(), this.resetPendingTokens();
                    break;
                case c.ARROW_UP:
                    b.preventDefault(), this.dropdownPrev();
                    break;
                case c.ARROW_DOWN:
                    b.preventDefault(), this.dropdownNext();
                    break;
                default:
                    this.resetPendingTokens()
            }
        }, keyup: function (a) {
            if (a.keyCode != this.options.validator)switch (a.keyCode) {
                case c.TAB:
                case c.ENTER:
                case c.ESCAPE:
                case c.ARROW_UP:
                case c.ARROW_DOWN:
                    break;
                case c.BACKSPACE:
                    this.searchInput.val() ? this.search() : this.dropdownHide();
                    break;
                default:
                    this.searchInput.val() && this.search()
            }
        }, search: function () {
            var b = this, c = 1;
            if (this.options.maxElements > 0 && a("li.Token", this.tokensContainer).length >= this.options.maxElements)return !1;
            if ("select" == this.options.datas) {
                var d = !1, e = new RegExp(this.searchInput.val().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
                this.dropdownReset(), a("option", this.select).not(":selected").each(function () {
                    return c <= b.options.nbDropdownElements ? (e.test(a(this).html()) && (b.dropdownAddItem(a(this).attr("value"), a(this).html()), d = !0, c++), void 0) : !1
                }), d ? (a("li:first", this.dropdown).addClass("Hover"), this.dropdownShow()) : this.dropdownHide()
            } else a.ajax({
                url: this.options.datas,
                data: this.options.searchParam + "=" + this.searchInput.val(),
                dataType: this.options.dataType,
                success: function (d) {
                    return d && (b.dropdownReset(), a.each(d, function (a, d) {
                        if (!(c <= b.options.nbDropdownElements))return !1;
                        var e = void 0;
                        d[b.options.htmlField] && (e = d[b.options.htmlField]), b.dropdownAddItem(d[b.options.valueField], d[b.options.textField], e), c++
                    }), a("li", b.dropdown).length) ? (a("li:first", b.dropdown).addClass("Hover"), b.dropdownShow(), !0) : (b.dropdownHide(), void 0)
                },
                error: function (a, b) {
                    console.log("Error : " + b)
                }
            })
        }, tokenAdd: function (b, c, d) {
            if (void 0 == b || "" == b)return !1;
            if ((void 0 == c || "" == c) && (c = b), void 0 == d && (d = !1), this.options.maxElements > 0 && a("li.Token", this.tokensContainer).length >= this.options.maxElements)return this.resetSearchInput(), !1;
            var e = this, f = a("<a />").addClass("Close").html("&#215;").on("click", function (a) {
                a.stopImmediatePropagation(), e.tokenRemove(b)
            });
            if (a('option[value="' + b + '"]', this.select).length)a('option[value="' + b + '"]', this.select).attr("selected", "selected"); else {
                if (!this.options.newElements)return this.resetSearchInput(), !1;
                var g = a("<option />").attr("selected", "selected").attr("value", b).attr("data-type", "custom").html(c);
                this.select.append(g)
            }
            return a('li.Token[data-value="' + b + '"]', this.tokensContainer).length > 0 ? !1 : (a("<li />").addClass("Token").attr("data-value", b).append("<span>" + c + "</span>").prepend(f).insertBefore(this.searchToken), d || this.options.onAddToken(b, c), this.resetSearchInput(), this.dropdownHide(), !0)
        }, tokenRemove: function (b) {
            var c = a('option[value="' + b + '"]', this.select);
            "custom" == c.attr("data-type") ? c.remove() : c.removeAttr("selected"), a('li.Token[data-value="' + b + '"]', this.tokensContainer).remove(), this.options.onRemoveToken(b), this.resizeSearchInput(), this.dropdownHide()
        }
    }), a.fn.tokenize = function (b) {
        return void 0 == b && (b = {}), this.each(function () {
            var c = new a.tokenize(a.extend({}, a.fn.tokenize.defaults, b));
            c.init(a(this)), a(this).data(d, c)
        }), this
    }, a.fn.tokenize.defaults = {
        datas: "select",
        searchParam: "search",
        searchMaxLength: 30,
        newElements: !0,
        nbDropdownElements: 10,
        maxElements: 0,
        dataType: "json",
        valueField: "value",
        textField: "text",
        htmlField: "html",
        onAddToken: function () {
        },
        onRemoveToken: function () {
        }
    }
}(jQuery, "tokenize"), !function (a, b, c) {
    !function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.qtip && a(jQuery)
    }(function (d) {
        "use strict";
        function e(a, b, c, e) {
            this.id = c, this.target = a, this.tooltip = E, this.elements = {target: a}, this._id = R + "-" + c, this.timers = {img: {}}, this.options = b, this.plugins = {}, this.cache = {
                event: {},
                target: d(),
                disabled: D,
                attr: e,
                onTooltip: D,
                lastClass: ""
            }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = D
        }

        function f(a) {
            return a === E || "object" !== d.type(a)
        }

        function g(a) {
            return !(d.isFunction(a) || a && a.attr || a.length || "object" === d.type(a) && (a.jquery || a.then))
        }

        function h(a) {
            var b, c, e, h;
            return f(a) ? D : (f(a.metadata) && (a.metadata = {type: a.metadata}), "content"in a && (b = a.content, f(b) || b.jquery || b.done ? b = a.content = {text: c = g(b) ? D : b} : c = b.text, "ajax"in b && (e = b.ajax, h = e && e.once !== D, delete b.ajax, b.text = function (a, b) {
                var f = c || d(this).attr(b.options.content.attr) || "Loading...", g = d.ajax(d.extend({}, e, {context: b})).then(e.success, E, e.error).then(function (a) {
                    return a && h && b.set("content.text", a), a
                }, function (a, c, d) {
                    b.destroyed || 0 === a.status || b.set("content.text", c + ": " + d)
                });
                return h ? f : (b.set("content.text", f), g)
            }), "title"in b && (f(b.title) || (b.button = b.title.button, b.title = b.title.text), g(b.title || D) && (b.title = D))), "position"in a && f(a.position) && (a.position = {
                my: a.position,
                at: a.position
            }), "show"in a && f(a.show) && (a.show = a.show.jquery ? {target: a.show} : a.show === C ? {ready: C} : {event: a.show}), "hide"in a && f(a.hide) && (a.hide = a.hide.jquery ? {target: a.hide} : {event: a.hide}), "style"in a && f(a.style) && (a.style = {classes: a.style}), d.each(Q, function () {
                this.sanitize && this.sanitize(a)
            }), a)
        }

        function i(a, b) {
            for (var c, d = 0, e = a, f = b.split("."); e = e[f[d++]];)d < f.length && (c = e);
            return [c || a, f.pop()]
        }

        function j(a, b) {
            var c, d, e;
            for (c in this.checks)for (d in this.checks[c])(e = new RegExp(d, "i").exec(a)) && (b.push(e), ("builtin" === c || this.plugins[c]) && this.checks[c][d].apply(this.plugins[c] || this, b))
        }

        function k(a) {
            return U.concat("").join(a ? "-" + a + " " : " ")
        }

        function l(c) {
            return c && {
                    type: c.type,
                    pageX: c.pageX,
                    pageY: c.pageY,
                    target: c.target,
                    relatedTarget: c.relatedTarget,
                    scrollX: c.scrollX || a.pageXOffset || b.body.scrollLeft || b.documentElement.scrollLeft,
                    scrollY: c.scrollY || a.pageYOffset || b.body.scrollTop || b.documentElement.scrollTop
                } || {}
        }

        function m(a, b) {
            return b > 0 ? setTimeout(d.proxy(a, this), b) : (a.call(this), void 0)
        }

        function n(a) {
            return this.tooltip.hasClass(_) ? D : (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = m.call(this, function () {
                this.toggle(C, a)
            }, this.options.show.delay), void 0)
        }

        function o(a) {
            if (this.tooltip.hasClass(_))return D;
            var b = d(a.relatedTarget), c = b.closest(V)[0] === this.tooltip[0], e = b[0] === this.options.show.target[0];
            if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== b[0] && "mouse" === this.options.position.target && c || this.options.hide.fixed && /mouse(out|leave|move)/.test(a.type) && (c || e))try {
                a.preventDefault(), a.stopImmediatePropagation()
            } catch (f) {
            } else this.timers.hide = m.call(this, function () {
                this.toggle(D, a)
            }, this.options.hide.delay, this)
        }

        function p(a) {
            return this.tooltip.hasClass(_) || !this.options.hide.inactive ? D : (clearTimeout(this.timers.inactive), this.timers.inactive = m.call(this, function () {
                this.hide(a)
            }, this.options.hide.inactive), void 0)
        }

        function q(a) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(a)
        }

        function r(a, c, e) {
            d(b.body).delegate(a, (c.split ? c : c.join(gb + " ")) + gb, function () {
                var a = x.api[d.attr(this, T)];
                a && !a.disabled && e.apply(a, arguments)
            })
        }

        function s(a, c, f) {
            var g, i, j, k, l, m = d(b.body), n = a[0] === b ? m : a, o = a.metadata ? a.metadata(f.metadata) : E, p = "html5" === f.metadata.type && o ? o[f.metadata.name] : E, q = a.data(f.metadata.name || "qtipopts");
            try {
                q = "string" == typeof q ? d.parseJSON(q) : q
            } catch (r) {
            }
            if (k = d.extend(C, {}, x.defaults, f, "object" == typeof q ? h(q) : E, h(p || o)), i = k.position, k.id = c, "boolean" == typeof k.content.text) {
                if (j = a.attr(k.content.attr), k.content.attr === D || !j)return D;
                k.content.text = j
            }
            if (i.container.length || (i.container = m), i.target === D && (i.target = n), k.show.target === D && (k.show.target = n), k.show.solo === C && (k.show.solo = i.container.closest("body")), k.hide.target === D && (k.hide.target = n), k.position.viewport === C && (k.position.viewport = i.container), i.container = i.container.eq(0), i.at = new z(i.at, C), i.my = new z(i.my), a.data(R))if (k.overwrite)a.qtip("destroy", !0); else if (k.overwrite === D)return D;
            return a.attr(S, c), k.suppress && (l = a.attr("title")) && a.removeAttr("title").attr(bb, l).attr("title", ""), g = new e(a, k, c, !!j), a.data(R, g), a.one("remove.qtip-" + c + " removeqtip.qtip-" + c, function () {
                var a;
                (a = d(this).data(R)) && a.destroy(!0)
            }), g
        }

        function t(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }

        function u(a, b) {
            var d, e, f = b.charAt(0).toUpperCase() + b.slice(1), g = (b + " " + rb.join(f + " ") + f).split(" "), h = 0;
            if (qb[b])return a.css(qb[b]);
            for (; d = g[h++];)if ((e = a.css(d)) !== c)return qb[b] = d, e
        }

        function v(a, b) {
            return Math.ceil(parseFloat(u(a, b)))
        }

        function w(a, b) {
            this._ns = "tip", this.options = b, this.offset = b.offset, this.size = [b.width, b.height], this.init(this.qtip = a)
        }

        var x, y, z, A, B, C = !0, D = !1, E = null, F = "x", G = "y", H = "width", I = "height", J = "top", K = "left", L = "bottom", M = "right", N = "center", O = "flipinvert", P = "shift", Q = {}, R = "qtip", S = "data-hasqtip", T = "data-qtip-id", U = ["ui-widget", "ui-tooltip"], V = "." + R, W = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), X = R + "-fixed", Y = R + "-default", Z = R + "-focus", $ = R + "-hover", _ = R + "-disabled", ab = "_replacedByqTip", bb = "oldtitle", cb = {
            ie: function () {
                for (var a = 3, c = b.createElement("div"); (c.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c.getElementsByTagName("i")[0];);
                return a > 4 ? a : 0 / 0
            }(),
            iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || D
        };
        y = e.prototype, y._when = function (a) {
            return d.when.apply(d, a)
        }, y.render = function (a) {
            if (this.rendered || this.destroyed)return this;
            var b, c = this, e = this.options, f = this.cache, g = this.elements, h = e.content.text, i = e.content.title, j = e.content.button, k = e.position, l = ("." + this._id + " ", []);
            return d.attr(this.target[0], "aria-describedby", this._id), this.tooltip = g.tooltip = b = d("<div/>", {
                id: this._id,
                "class": [R, Y, e.style.classes, R + "-pos-" + e.position.my.abbrev()].join(" "),
                width: e.style.width || "",
                height: e.style.height || "",
                tracking: "mouse" === k.target && k.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": D,
                "aria-describedby": this._id + "-content",
                "aria-hidden": C
            }).toggleClass(_, this.disabled).attr(T, this.id).data(R, this).appendTo(k.container).append(g.content = d("<div />", {
                "class": R + "-content",
                id: this._id + "-content",
                "aria-atomic": C
            })), this.rendered = -1, this.positioning = C, i && (this._createTitle(), d.isFunction(i) || l.push(this._updateTitle(i, D))), j && this._createButton(), d.isFunction(h) || l.push(this._updateContent(h, D)), this.rendered = C, this._setWidget(), d.each(Q, function (a) {
                var b;
                "render" === this.initialize && (b = this(c)) && (c.plugins[a] = b)
            }), this._unassignEvents(), this._assignEvents(), this._when(l).then(function () {
                c._trigger("render"), c.positioning = D, c.hiddenDuringWait || !e.show.ready && !a || c.toggle(C, f.event, D), c.hiddenDuringWait = D
            }), x.api[this.id] = this, this
        }, y.destroy = function (a) {
            function b() {
                if (!this.destroyed) {
                    this.destroyed = C;
                    var a = this.target, b = a.attr(bb);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), d.each(this.plugins, function () {
                        this.destroy && this.destroy()
                    }), clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this._unassignEvents(), a.removeData(R).removeAttr(T).removeAttr(S).removeAttr("aria-describedby"), this.options.suppress && b && a.attr("title", b).removeAttr(bb), this._unbind(a), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = E, delete x.api[this.id]
                }
            }

            return this.destroyed ? this.target : (a === C && "hide" !== this.triggering || !this.rendered ? b.call(this) : (this.tooltip.one("tooltiphidden", d.proxy(b, this)), !this.triggering && this.hide()), this.target)
        }, A = y.checks = {
            builtin: {
                "^id$": function (a, b, c, e) {
                    var f = c === C ? x.nextid : c, g = R + "-" + f;
                    f !== D && f.length > 0 && !d("#" + g).length ? (this._id = g, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : a[b] = e
                }, "^prerender": function (a, b, c) {
                    c && !this.rendered && this.render(this.options.show.ready)
                }, "^content.text$": function (a, b, c) {
                    this._updateContent(c)
                }, "^content.attr$": function (a, b, c, d) {
                    this.options.content.text === this.target.attr(d) && this._updateContent(this.target.attr(c))
                }, "^content.title$": function (a, b, c) {
                    return c ? (c && !this.elements.title && this._createTitle(), this._updateTitle(c), void 0) : this._removeTitle()
                }, "^content.button$": function (a, b, c) {
                    this._updateButton(c)
                }, "^content.title.(text|button)$": function (a, b, c) {
                    this.set("content." + b, c)
                }, "^position.(my|at)$": function (a, b, c) {
                    "string" == typeof c && (a[b] = new z(c, "at" === b))
                }, "^position.container$": function (a, b, c) {
                    this.rendered && this.tooltip.appendTo(c)
                }, "^show.ready$": function (a, b, c) {
                    c && (!this.rendered && this.render(C) || this.toggle(C))
                }, "^style.classes$": function (a, b, c, d) {
                    this.rendered && this.tooltip.removeClass(d).addClass(c)
                }, "^style.(width|height)": function (a, b, c) {
                    this.rendered && this.tooltip.css(b, c)
                }, "^style.widget|content.title": function () {
                    this.rendered && this._setWidget()
                }, "^style.def": function (a, b, c) {
                    this.rendered && this.tooltip.toggleClass(Y, !!c)
                }, "^events.(render|show|move|hide|focus|blur)$": function (a, b, c) {
                    this.rendered && this.tooltip[(d.isFunction(c) ? "" : "un") + "bind"]("tooltip" + b, c)
                }, "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function () {
                    if (this.rendered) {
                        var a = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === a.target && a.adjust.mouse), this._unassignEvents(), this._assignEvents()
                    }
                }
            }
        }, y.get = function (a) {
            if (this.destroyed)return this;
            var b = i(this.options, a.toLowerCase()), c = b[0][b[1]];
            return c.precedance ? c.string() : c
        };
        var db = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i, eb = /^prerender|show\.ready/i;
        y.set = function (a, b) {
            if (this.destroyed)return this;
            var c, e = this.rendered, f = D, g = this.options;
            return this.checks, "string" == typeof a ? (c = a, a = {}, a[c] = b) : a = d.extend({}, a), d.each(a, function (b, c) {
                if (e && eb.test(b))return delete a[b], void 0;
                var h, j = i(g, b.toLowerCase());
                h = j[0][j[1]], j[0][j[1]] = c && c.nodeType ? d(c) : c, f = db.test(b) || f, a[b] = [j[0], j[1], c, h]
            }), h(g), this.positioning = C, d.each(a, d.proxy(j, this)), this.positioning = D, this.rendered && this.tooltip[0].offsetWidth > 0 && f && this.reposition("mouse" === g.position.target ? E : this.cache.event), this
        }, y._update = function (a, b) {
            var c = this, e = this.cache;
            return this.rendered && a ? (d.isFunction(a) && (a = a.call(this.elements.target, e.event, this) || ""), d.isFunction(a.then) ? (e.waiting = C, a.then(function (a) {
                return e.waiting = D, c._update(a, b)
            }, E, function (a) {
                return c._update(a, b)
            })) : a === D || !a && "" !== a ? D : (a.jquery && a.length > 0 ? b.empty().append(a.css({
                display: "block",
                visibility: "visible"
            })) : b.html(a), this._waitForContent(b).then(function (a) {
                a.images && a.images.length && c.rendered && c.tooltip[0].offsetWidth > 0 && c.reposition(e.event, !a.length)
            }))) : D
        }, y._waitForContent = function (a) {
            var b = this.cache;
            return b.waiting = C, (d.fn.imagesLoaded ? a.imagesLoaded() : d.Deferred().resolve([])).done(function () {
                b.waiting = D
            }).promise()
        }, y._updateContent = function (a, b) {
            this._update(a, this.elements.content, b)
        }, y._updateTitle = function (a, b) {
            this._update(a, this.elements.title, b) === D && this._removeTitle(D)
        }, y._createTitle = function () {
            var a = this.elements, b = this._id + "-title";
            a.titlebar && this._removeTitle(), a.titlebar = d("<div />", {"class": R + "-titlebar " + (this.options.style.widget ? k("header") : "")}).append(a.title = d("<div />", {
                id: b,
                "class": R + "-title",
                "aria-atomic": C
            })).insertBefore(a.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function (a) {
                d(this).toggleClass("ui-state-active ui-state-focus", "down" === a.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function (a) {
                d(this).toggleClass("ui-state-hover", "mouseover" === a.type)
            }), this.options.content.button && this._createButton()
        }, y._removeTitle = function (a) {
            var b = this.elements;
            b.title && (b.titlebar.remove(), b.titlebar = b.title = b.button = E, a !== D && this.reposition())
        }, y.reposition = function (c, e) {
            if (!this.rendered || this.positioning || this.destroyed)return this;
            this.positioning = C;
            var f, g, h = this.cache, i = this.tooltip, j = this.options.position, k = j.target, l = j.my, m = j.at, n = j.viewport, o = j.container, p = j.adjust, q = p.method.split(" "), r = i.outerWidth(D), s = i.outerHeight(D), t = 0, u = 0, v = i.css("position"), w = {
                left: 0,
                top: 0
            }, x = i[0].offsetWidth > 0, y = c && "scroll" === c.type, z = d(a), A = o[0].ownerDocument, B = this.mouse;
            if (d.isArray(k) && 2 === k.length)m = {x: K, y: J}, w = {
                left: k[0],
                top: k[1]
            }; else if ("mouse" === k)m = {
                x: K,
                y: J
            }, !B || !B.pageX || !p.mouse && c && c.pageX ? c && c.pageX || ((!p.mouse || this.options.show.distance) && h.origin && h.origin.pageX ? c = h.origin : (!c || c && ("resize" === c.type || "scroll" === c.type)) && (c = h.event)) : c = B, "static" !== v && (w = o.offset()), A.body.offsetWidth !== (a.innerWidth || A.documentElement.clientWidth) && (g = d(b.body).offset()), w = {
                left: c.pageX - w.left + (g && g.left || 0),
                top: c.pageY - w.top + (g && g.top || 0)
            }, p.mouse && y && B && (w.left -= (B.scrollX || 0) - z.scrollLeft(), w.top -= (B.scrollY || 0) - z.scrollTop()); else {
                if ("event" === k ? c && c.target && "scroll" !== c.type && "resize" !== c.type ? h.target = d(c.target) : c.target || (h.target = this.elements.target) : "event" !== k && (h.target = d(k.jquery ? k : this.elements.target)), k = h.target, k = d(k).eq(0), 0 === k.length)return this;
                k[0] === b || k[0] === a ? (t = cb.iOS ? a.innerWidth : k.width(), u = cb.iOS ? a.innerHeight : k.height(), k[0] === a && (w = {
                    top: (n || k).scrollTop(),
                    left: (n || k).scrollLeft()
                })) : Q.imagemap && k.is("area") ? f = Q.imagemap(this, k, m, Q.viewport ? q : D) : Q.svg && k && k[0].ownerSVGElement ? f = Q.svg(this, k, m, Q.viewport ? q : D) : (t = k.outerWidth(D), u = k.outerHeight(D), w = k.offset()), f && (t = f.width, u = f.height, g = f.offset, w = f.position), w = this.reposition.offset(k, w, o), (cb.iOS > 3.1 && cb.iOS < 4.1 || cb.iOS >= 4.3 && cb.iOS < 4.33 || !cb.iOS && "fixed" === v) && (w.left -= z.scrollLeft(), w.top -= z.scrollTop()), (!f || f && f.adjustable !== D) && (w.left += m.x === M ? t : m.x === N ? t / 2 : 0, w.top += m.y === L ? u : m.y === N ? u / 2 : 0)
            }
            return w.left += p.x + (l.x === M ? -r : l.x === N ? -r / 2 : 0), w.top += p.y + (l.y === L ? -s : l.y === N ? -s / 2 : 0), Q.viewport ? (w.adjusted = Q.viewport(this, w, j, t, u, r, s), g && w.adjusted.left && (w.left += g.left), g && w.adjusted.top && (w.top += g.top)) : w.adjusted = {
                left: 0,
                top: 0
            }, this._trigger("move", [w, n.elem || n], c) ? (delete w.adjusted, e === D || !x || isNaN(w.left) || isNaN(w.top) || "mouse" === k || !d.isFunction(j.effect) ? i.css(w) : d.isFunction(j.effect) && (j.effect.call(i, this, d.extend({}, w)), i.queue(function (a) {
                d(this).css({opacity: "", height: ""}), cb.ie && this.style.removeAttribute("filter"), a()
            })), this.positioning = D, this) : this
        }, y.reposition.offset = function (a, c, e) {
            function f(a, b) {
                c.left += b * a.scrollLeft(), c.top += b * a.scrollTop()
            }

            if (!e[0])return c;
            var g, h, i, j, k = d(a[0].ownerDocument), l = !!cb.ie && "CSS1Compat" !== b.compatMode, m = e[0];
            do"static" !== (h = d.css(m, "position")) && ("fixed" === h ? (i = m.getBoundingClientRect(), f(k, -1)) : (i = d(m).position(), i.left += parseFloat(d.css(m, "borderLeftWidth")) || 0, i.top += parseFloat(d.css(m, "borderTopWidth")) || 0), c.left -= i.left + (parseFloat(d.css(m, "marginLeft")) || 0), c.top -= i.top + (parseFloat(d.css(m, "marginTop")) || 0), g || "hidden" === (j = d.css(m, "overflow")) || "visible" === j || (g = d(m))); while (m = m.offsetParent);
            return g && (g[0] !== k[0] || l) && f(g, 1), c
        };
        var fb = (z = y.reposition.Corner = function (a, b) {
            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, N).toLowerCase(), this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!b;
            var c = a.charAt(0);
            this.precedance = "t" === c || "b" === c ? G : F
        }).prototype;
        fb.invert = function (a, b) {
            this[a] = this[a] === K ? M : this[a] === M ? K : b || this[a]
        }, fb.string = function () {
            var a = this.x, b = this.y;
            return a === b ? a : this.precedance === G || this.forceY && "center" !== b ? b + " " + a : a + " " + b
        }, fb.abbrev = function () {
            var a = this.string().split(" ");
            return a[0].charAt(0) + (a[1] && a[1].charAt(0) || "")
        }, fb.clone = function () {
            return new z(this.string(), this.forceY)
        }, y.toggle = function (a, c) {
            var e = this.cache, f = this.options, g = this.tooltip;
            if (c) {
                if (/over|enter/.test(c.type) && /out|leave/.test(e.event.type) && f.show.target.add(c.target).length === f.show.target.length && g.has(c.relatedTarget).length)return this;
                e.event = l(c)
            }
            if (this.waiting && !a && (this.hiddenDuringWait = C), !this.rendered)return a ? this.render(1) : this;
            if (this.destroyed || this.disabled)return this;
            var h, i, j, k = a ? "show" : "hide", m = this.options[k], n = (this.options[a ? "hide" : "show"], this.options.position), o = this.options.content, p = this.tooltip.css("width"), q = this.tooltip.is(":visible"), r = a || 1 === m.target.length, s = !c || m.target.length < 2 || e.target[0] === c.target;
            return (typeof a).search("boolean|number") && (a = !q), h = !g.is(":animated") && q === a && s, i = h ? E : !!this._trigger(k, [90]), this.destroyed ? this : (i !== D && a && this.focus(c), !i || h ? this : (d.attr(g[0], "aria-hidden", !a), a ? (e.origin = l(this.mouse), d.isFunction(o.text) && this._updateContent(o.text, D), d.isFunction(o.title) && this._updateTitle(o.title, D), !B && "mouse" === n.target && n.adjust.mouse && (d(b).bind("mousemove." + R, this._storeMouse), B = C), p || g.css("width", g.outerWidth(D)), this.reposition(c, arguments[2]), p || g.css("width", ""), m.solo && ("string" == typeof m.solo ? d(m.solo) : d(V, m.solo)).not(g).not(m.target).qtip("hide", d.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete e.origin, B && !d(V + '[tracking="true"]:visible', m.solo).not(g).length && (d(b).unbind("mousemove." + R), B = D), this.blur(c)), j = d.proxy(function () {
                a ? (cb.ie && g[0].style.removeAttribute("filter"), g.css("overflow", ""), "string" == typeof m.autofocus && d(this.options.show.autofocus, g).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : g.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                }), this._trigger(a ? "visible" : "hidden")
            }, this), m.effect === D || r === D ? (g[k](), j()) : d.isFunction(m.effect) ? (g.stop(1, 1), m.effect.call(g, this), g.queue("fx", function (a) {
                j(), a()
            })) : g.fadeTo(90, a ? 1 : 0, j), a && m.target.trigger("qtip-" + this.id + "-inactive"), this))
        }, y.show = function (a) {
            return this.toggle(C, a)
        }, y.hide = function (a) {
            return this.toggle(D, a)
        }, y.focus = function (a) {
            if (!this.rendered || this.destroyed)return this;
            var b = d(V), c = this.tooltip, e = parseInt(c[0].style.zIndex, 10), f = x.zindex + b.length;
            return c.hasClass(Z) || this._trigger("focus", [f], a) && (e !== f && (b.each(function () {
                this.style.zIndex > e && (this.style.zIndex = this.style.zIndex - 1)
            }), b.filter("." + Z).qtip("blur", a)), c.addClass(Z)[0].style.zIndex = f), this
        }, y.blur = function (a) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(Z), this._trigger("blur", [this.tooltip.css("zIndex")], a), this)
        }, y.disable = function (a) {
            return this.destroyed ? this : ("toggle" === a ? a = !(this.rendered ? this.tooltip.hasClass(_) : this.disabled) : "boolean" != typeof a && (a = C), this.rendered && this.tooltip.toggleClass(_, a).attr("aria-disabled", a), this.disabled = !!a, this)
        }, y.enable = function () {
            return this.disable(D)
        }, y._createButton = function () {
            var a = this, b = this.elements, c = b.tooltip, e = this.options.content.button, f = "string" == typeof e, g = f ? e : "Close tooltip";
            b.button && b.button.remove(), b.button = e.jquery ? e : d("<a />", {
                "class": "qtip-close " + (this.options.style.widget ? "" : R + "-icon"),
                title: g,
                "aria-label": g
            }).prepend(d("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })), b.button.appendTo(b.titlebar || c).attr("role", "button").click(function (b) {
                return c.hasClass(_) || a.hide(b), D
            })
        }, y._updateButton = function (a) {
            if (!this.rendered)return D;
            var b = this.elements.button;
            a ? this._createButton() : b.remove()
        }, y._setWidget = function () {
            var a = this.options.style.widget, b = this.elements, c = b.tooltip, d = c.hasClass(_);
            c.removeClass(_), _ = a ? "ui-state-disabled" : "qtip-disabled", c.toggleClass(_, d), c.toggleClass("ui-helper-reset " + k(), a).toggleClass(Y, this.options.style.def && !a), b.content && b.content.toggleClass(k("content"), a), b.titlebar && b.titlebar.toggleClass(k("header"), a), b.button && b.button.toggleClass(R + "-icon", !a)
        }, y._storeMouse = function (a) {
            (this.mouse = l(a)).type = "mousemove"
        }, y._bind = function (a, b, c, e, f) {
            var g = "." + this._id + (e ? "-" + e : "");
            b.length && d(a).bind((b.split ? b : b.join(g + " ")) + g, d.proxy(c, f || this))
        }, y._unbind = function (a, b) {
            d(a).unbind("." + this._id + (b ? "-" + b : ""))
        };
        var gb = "." + R;
        d(function () {
            r(V, ["mouseenter", "mouseleave"], function (a) {
                var b = "mouseenter" === a.type, c = d(a.currentTarget), e = d(a.relatedTarget || a.target), f = this.options;
                b ? (this.focus(a), c.hasClass(X) && !c.hasClass(_) && clearTimeout(this.timers.hide)) : "mouse" === f.position.target && f.hide.event && f.show.target && !e.closest(f.show.target[0]).length && this.hide(a), c.toggleClass($, b)
            }), r("[" + T + "]", W, p)
        }), y._trigger = function (a, b, c) {
            var e = d.Event("tooltip" + a);
            return e.originalEvent = c && d.extend({}, c) || this.cache.event || E, this.triggering = a, this.tooltip.trigger(e, [this].concat(b || [])), this.triggering = D, !e.isDefaultPrevented()
        }, y._bindEvents = function (a, b, c, e, f, g) {
            if (e.add(c).length === e.length) {
                var h = [];
                b = d.map(b, function (b) {
                    var c = d.inArray(b, a);
                    return c > -1 ? (h.push(a.splice(c, 1)[0]), void 0) : b
                }), h.length && this._bind(c, h, function (a) {
                    var b = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                    (b ? g : f).call(this, a)
                })
            }
            this._bind(c, a, f), this._bind(e, b, g)
        }, y._assignInitialEvents = function (a) {
            function b(a) {
                return this.disabled || this.destroyed ? D : (this.cache.event = l(a), this.cache.target = a ? d(a.target) : [c], clearTimeout(this.timers.show), this.timers.show = m.call(this, function () {
                    this.render("object" == typeof a || e.show.ready)
                }, e.show.delay), void 0)
            }

            var e = this.options, f = e.show.target, g = e.hide.target, h = e.show.event ? d.trim("" + e.show.event).split(" ") : [], i = e.hide.event ? d.trim("" + e.hide.event).split(" ") : [];
            /mouse(over|enter)/i.test(e.show.event) && !/mouse(out|leave)/i.test(e.hide.event) && i.push("mouseleave"), this._bind(f, "mousemove", function (a) {
                this._storeMouse(a), this.cache.onTarget = C
            }), this._bindEvents(h, i, f, g, b, function () {
                clearTimeout(this.timers.show)
            }), (e.show.ready || e.prerender) && b.call(this, a)
        }, y._assignEvents = function () {
            var c = this, e = this.options, f = e.position, g = this.tooltip, h = e.show.target, i = e.hide.target, j = f.container, k = f.viewport, l = d(b), m = (d(b.body), d(a)), r = e.show.event ? d.trim("" + e.show.event).split(" ") : [], s = e.hide.event ? d.trim("" + e.hide.event).split(" ") : [];
            d.each(e.events, function (a, b) {
                c._bind(g, "toggle" === a ? ["tooltipshow", "tooltiphide"] : ["tooltip" + a], b, null, g)
            }), /mouse(out|leave)/i.test(e.hide.event) && "window" === e.hide.leave && this._bind(l, ["mouseout", "blur"], function (a) {
                /select|option/.test(a.target.nodeName) || a.relatedTarget || this.hide(a)
            }), e.hide.fixed ? i = i.add(g.addClass(X)) : /mouse(over|enter)/i.test(e.show.event) && this._bind(i, "mouseleave", function () {
                clearTimeout(this.timers.show)
            }), ("" + e.hide.event).indexOf("unfocus") > -1 && this._bind(j.closest("html"), ["mousedown", "touchstart"], function (a) {
                var b = d(a.target), c = this.rendered && !this.tooltip.hasClass(_) && this.tooltip[0].offsetWidth > 0, e = b.parents(V).filter(this.tooltip[0]).length > 0;
                b[0] === this.target[0] || b[0] === this.tooltip[0] || e || this.target.has(b[0]).length || !c || this.hide(a)
            }), "number" == typeof e.hide.inactive && (this._bind(h, "qtip-" + this.id + "-inactive", p), this._bind(i.add(g), x.inactiveEvents, p, "-inactive")), this._bindEvents(r, s, h, i, n, o), this._bind(h.add(g), "mousemove", function (a) {
                if ("number" == typeof e.hide.distance) {
                    var b = this.cache.origin || {}, c = this.options.hide.distance, d = Math.abs;
                    (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && this.hide(a)
                }
                this._storeMouse(a)
            }), "mouse" === f.target && f.adjust.mouse && (e.hide.event && this._bind(h, ["mouseenter", "mouseleave"], function (a) {
                this.cache.onTarget = "mouseenter" === a.type
            }), this._bind(l, "mousemove", function (a) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(_) && this.tooltip[0].offsetWidth > 0 && this.reposition(a)
            })), (f.adjust.resize || k.length) && this._bind(d.event.special.resize ? k : m, "resize", q), f.adjust.scroll && this._bind(m.add(f.container), "scroll", q)
        }, y._unassignEvents = function () {
            var c = [this.options.show.target[0], this.options.hide.target[0], this.rendered && this.tooltip[0], this.options.position.container[0], this.options.position.viewport[0], this.options.position.container.closest("html")[0], a, b];
            this._unbind(d([]).pushStack(d.grep(c, function (a) {
                return "object" == typeof a
            })))
        }, x = d.fn.qtip = function (a, b, e) {
            var f = ("" + a).toLowerCase(), g = E, i = d.makeArray(arguments).slice(1), j = i[i.length - 1], k = this[0] ? d.data(this[0], R) : E;
            return !arguments.length && k || "api" === f ? k : "string" == typeof a ? (this.each(function () {
                var a = d.data(this, R);
                if (!a)return C;
                if (j && j.timeStamp && (a.cache.event = j), !b || "option" !== f && "options" !== f)a[f] && a[f].apply(a, i); else {
                    if (e === c && !d.isPlainObject(b))return g = a.get(b), D;
                    a.set(b, e)
                }
            }), g !== E ? g : this) : "object" != typeof a && arguments.length ? void 0 : (k = h(d.extend(C, {}, a)), this.each(function (a) {
                var b, c;
                return c = d.isArray(k.id) ? k.id[a] : k.id, c = !c || c === D || c.length < 1 || x.api[c] ? x.nextid++ : c, b = s(d(this), c, k), b === D ? C : (x.api[c] = b, d.each(Q, function () {
                    "initialize" === this.initialize && this(b)
                }), b._assignInitialEvents(j), void 0)
            }))
        }, d.qtip = e, x.api = {}, d.each({
            attr: function (a, b) {
                if (this.length) {
                    var c = this[0], e = "title", f = d.data(c, "qtip");
                    if (a === e && f && "object" == typeof f && f.options.suppress)return arguments.length < 2 ? d.attr(c, bb) : (f && f.options.content.attr === e && f.cache.attr && f.set("content.text", b), this.attr(bb, b))
                }
                return d.fn["attr" + ab].apply(this, arguments)
            }, clone: function (a) {
                var b = (d([]), d.fn["clone" + ab].apply(this, arguments));
                return a || b.filter("[" + bb + "]").attr("title", function () {
                    return d.attr(this, bb)
                }).removeAttr(bb), b
            }
        }, function (a, b) {
            if (!b || d.fn[a + ab])return C;
            var c = d.fn[a + ab] = d.fn[a];
            d.fn[a] = function () {
                return b.apply(this, arguments) || c.apply(this, arguments)
            }
        }), d.ui || (d["cleanData" + ab] = d.cleanData, d.cleanData = function (a) {
            for (var b, c = 0; (b = d(a[c])).length; c++)if (b.attr(S))try {
                b.triggerHandler("removeqtip")
            } catch (e) {
            }
            d["cleanData" + ab].apply(this, arguments)
        }), x.version = "2.2.0", x.nextid = 0, x.inactiveEvents = W, x.zindex = 15e3, x.defaults = {
            prerender: D,
            id: D,
            overwrite: C,
            suppress: C,
            content: {text: C, attr: "title", title: D, button: D},
            position: {
                my: "top left",
                at: "bottom right",
                target: D,
                container: D,
                viewport: D,
                adjust: {x: 0, y: 0, mouse: C, scroll: C, resize: C, method: "flipinvert flipinvert"},
                effect: function (a, b) {
                    d(this).animate(b, {duration: 200, queue: D})
                }
            },
            show: {target: D, event: "mouseenter", effect: C, delay: 90, solo: D, ready: D, autofocus: D},
            hide: {
                target: D,
                event: "mouseleave",
                effect: C,
                delay: 0,
                fixed: D,
                inactive: D,
                leave: "window",
                distance: D
            },
            style: {classes: "", widget: D, width: D, height: D, def: C},
            events: {render: E, move: E, show: E, hide: E, toggle: E, visible: E, hidden: E, focus: E, blur: E}
        };
        var hb, ib = "margin", jb = "border", kb = "color", lb = "background-color", mb = "transparent", nb = " !important", ob = !!b.createElement("canvas").getContext, pb = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i, qb = {}, rb = ["Webkit", "O", "Moz", "ms"];
        if (ob)var sb = a.devicePixelRatio || 1, tb = function () {
            var a = b.createElement("canvas").getContext("2d");
            return a.backingStorePixelRatio || a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || 1
        }(), ub = sb / tb; else var vb = function (a, b, c) {
            return "<qtipvml:" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (b || "") + ' style="behavior: url(#default#VML); ' + (c || "") + '" />'
        };
        d.extend(w.prototype, {
            init: function (a) {
                var b, c;
                c = this.element = a.elements.tip = d("<div />", {"class": R + "-tip"}).prependTo(a.tooltip), ob ? (b = d("<canvas />").appendTo(this.element)[0].getContext("2d"), b.lineJoin = "miter", b.miterLimit = 1e5, b.save()) : (b = vb("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(b + b), a._bind(d("*", c).add(c), ["click", "mousedown"], function (a) {
                    a.stopPropagation()
                }, this._ns)), a._bind(a.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
            }, _swapDimensions: function () {
                this.size[0] = this.options.height, this.size[1] = this.options.width
            }, _resetDimensions: function () {
                this.size[0] = this.options.width, this.size[1] = this.options.height
            }, _useTitle: function (a) {
                var b = this.qtip.elements.titlebar;
                return b && (a.y === J || a.y === N && this.element.position().top + this.size[1] / 2 + this.options.offset < b.outerHeight(C))
            }, _parseCorner: function (a) {
                var b = this.qtip.options.position.my;
                return a === D || b === D ? a = D : a === C ? a = new z(b.string()) : a.string || (a = new z(a), a.fixed = C), a
            }, _parseWidth: function (a, b, c) {
                var d = this.qtip.elements, e = jb + t(b) + "Width";
                return (c ? v(c, e) : v(d.content, e) || v(this._useTitle(a) && d.titlebar || d.content, e) || v(d.tooltip, e)) || 0
            }, _parseRadius: function (a) {
                var b = this.qtip.elements, c = jb + t(a.y) + t(a.x) + "Radius";
                return cb.ie < 9 ? 0 : v(this._useTitle(a) && b.titlebar || b.content, c) || v(b.tooltip, c) || 0
            }, _invalidColour: function (a, b, c) {
                var d = a.css(b);
                return !d || c && d === a.css(c) || pb.test(d) ? D : d
            }, _parseColours: function (a) {
                var b = this.qtip.elements, c = this.element.css("cssText", ""), e = jb + t(a[a.precedance]) + t(kb), f = this._useTitle(a) && b.titlebar || b.content, g = this._invalidColour, h = [];
                return h[0] = g(c, lb) || g(f, lb) || g(b.content, lb) || g(b.tooltip, lb) || c.css(lb), h[1] = g(c, e, kb) || g(f, e, kb) || g(b.content, e, kb) || g(b.tooltip, e, kb) || b.tooltip.css(e), d("*", c).add(c).css("cssText", lb + ":" + mb + nb + ";" + jb + ":0" + nb + ";"), h
            }, _calculateSize: function (a) {
                var b, c, d, e = a.precedance === G, f = this.options.width, g = this.options.height, h = "c" === a.abbrev(), i = (e ? f : g) * (h ? .5 : 1), j = Math.pow, k = Math.round, l = Math.sqrt(j(i, 2) + j(g, 2)), m = [this.border / i * l, this.border / g * l];
                return m[2] = Math.sqrt(j(m[0], 2) - j(this.border, 2)), m[3] = Math.sqrt(j(m[1], 2) - j(this.border, 2)), b = l + m[2] + m[3] + (h ? 0 : m[0]), c = b / l, d = [k(c * f), k(c * g)], e ? d : d.reverse()
            }, _calculateTip: function (a, b, c) {
                c = c || 1, b = b || this.size;
                var d = b[0] * c, e = b[1] * c, f = Math.ceil(d / 2), g = Math.ceil(e / 2), h = {
                    br: [0, 0, d, e, d, 0],
                    bl: [0, 0, d, 0, 0, e],
                    tr: [0, e, d, 0, d, e],
                    tl: [0, 0, 0, e, d, e],
                    tc: [0, e, f, 0, d, e],
                    bc: [0, 0, d, 0, f, e],
                    rc: [0, 0, d, g, 0, e],
                    lc: [d, 0, d, e, 0, g]
                };
                return h.lt = h.br, h.rt = h.bl, h.lb = h.tr, h.rb = h.tl, h[a.abbrev()]
            }, _drawCoords: function (a, b) {
                a.beginPath(), a.moveTo(b[0], b[1]), a.lineTo(b[2], b[3]), a.lineTo(b[4], b[5]), a.closePath()
            }, create: function () {
                var a = this.corner = (ob || cb.ie) && this._parseCorner(this.options.corner);
                return (this.enabled = !!this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = a.clone(), this.update()), this.element.toggle(this.enabled), this.corner
            }, update: function (b, c) {
                if (!this.enabled)return this;
                var e, f, g, h, i, j, k, l, m = this.qtip.elements, n = this.element, o = n.children(), p = this.options, q = this.size, r = p.mimic, s = Math.round;
                b || (b = this.qtip.cache.corner || this.corner), r === D ? r = b : (r = new z(r), r.precedance = b.precedance, "inherit" === r.x ? r.x = b.x : "inherit" === r.y ? r.y = b.y : r.x === r.y && (r[b.precedance] = b[b.precedance])), f = r.precedance, b.precedance === F ? this._swapDimensions() : this._resetDimensions(), e = this.color = this._parseColours(b), e[1] !== mb ? (l = this.border = this._parseWidth(b, b[b.precedance]), p.border && 1 > l && !pb.test(e[1]) && (e[0] = e[1]), this.border = l = p.border !== C ? p.border : l) : this.border = l = 0, k = this.size = this._calculateSize(b), n.css({
                    width: k[0],
                    height: k[1],
                    lineHeight: k[1] + "px"
                }), j = b.precedance === G ? [s(r.x === K ? l : r.x === M ? k[0] - q[0] - l : (k[0] - q[0]) / 2), s(r.y === J ? k[1] - q[1] : 0)] : [s(r.x === K ? k[0] - q[0] : 0), s(r.y === J ? l : r.y === L ? k[1] - q[1] - l : (k[1] - q[1]) / 2)], ob ? (g = o[0].getContext("2d"), g.restore(), g.save(), g.clearRect(0, 0, 6e3, 6e3), h = this._calculateTip(r, q, ub), i = this._calculateTip(r, this.size, ub), o.attr(H, k[0] * ub).attr(I, k[1] * ub), o.css(H, k[0]).css(I, k[1]), this._drawCoords(g, i), g.fillStyle = e[1], g.fill(), g.translate(j[0] * ub, j[1] * ub), this._drawCoords(g, h), g.fillStyle = e[0], g.fill()) : (h = this._calculateTip(r), h = "m" + h[0] + "," + h[1] + " l" + h[2] + "," + h[3] + " " + h[4] + "," + h[5] + " xe", j[2] = l && /^(r|b)/i.test(b.string()) ? 8 === cb.ie ? 2 : 1 : 0, o.css({
                    coordsize: k[0] + l + " " + (k[1] + l),
                    antialias: "" + (r.string().indexOf(N) > -1),
                    left: j[0] - j[2] * Number(f === F),
                    top: j[1] - j[2] * Number(f === G),
                    width: k[0] + l,
                    height: k[1] + l
                }).each(function (a) {
                    var b = d(this);
                    b[b.prop ? "prop" : "attr"]({
                        coordsize: k[0] + l + " " + (k[1] + l),
                        path: h,
                        fillcolor: e[0],
                        filled: !!a,
                        stroked: !a
                    }).toggle(!(!l && !a)), !a && b.html(vb("stroke", 'weight="' + 2 * l + 'px" color="' + e[1] + '" miterlimit="1000" joinstyle="miter"'))
                })), a.opera && setTimeout(function () {
                    m.tip.css({display: "inline-block", visibility: "visible"})
                }, 1), c !== D && this.calculate(b, k)
            }, calculate: function (a, b) {
                if (!this.enabled)return D;
                var c, e, f = this, g = this.qtip.elements, h = this.element, i = this.options.offset, j = (g.tooltip.hasClass("ui-widget"), {});
                return a = a || this.corner, c = a.precedance, b = b || this._calculateSize(a), e = [a.x, a.y], c === F && e.reverse(), d.each(e, function (d, e) {
                    var h, k, l;
                    e === N ? (h = c === G ? K : J, j[h] = "50%", j[ib + "-" + h] = -Math.round(b[c === G ? 0 : 1] / 2) + i) : (h = f._parseWidth(a, e, g.tooltip), k = f._parseWidth(a, e, g.content), l = f._parseRadius(a), j[e] = Math.max(-f.border, d ? k : i + (l > h ? l : -h)))
                }), j[a[c]] -= b[c === F ? 0 : 1], h.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(j), j
            }, reposition: function (a, b, d) {
                function e(a, b, c, d, e) {
                    a === P && j.precedance === b && k[d] && j[c] !== N ? j.precedance = j.precedance === F ? G : F : a !== P && k[d] && (j[b] = j[b] === N ? k[d] > 0 ? d : e : j[b] === d ? e : d)
                }

                function f(a, b, e) {
                    j[a] === N ? p[ib + "-" + b] = o[a] = g[ib + "-" + b] - k[b] : (h = g[e] !== c ? [k[b], -g[b]] : [-k[b], g[b]], (o[a] = Math.max(h[0], h[1])) > h[0] && (d[b] -= k[b], o[b] = D), p[g[e] !== c ? e : b] = o[a])
                }

                if (this.enabled) {
                    var g, h, i = b.cache, j = this.corner.clone(), k = d.adjusted, l = b.options.position.adjust.method.split(" "), m = l[0], n = l[1] || l[0], o = {
                        left: D,
                        top: D,
                        x: 0,
                        y: 0
                    }, p = {};
                    this.corner.fixed !== C && (e(m, F, G, K, M), e(n, G, F, J, L), j.string() === i.corner.string() || i.cornerTop === k.top && i.cornerLeft === k.left || this.update(j, D)), g = this.calculate(j), g.right !== c && (g.left = -g.right), g.bottom !== c && (g.top = -g.bottom), g.user = this.offset, (o.left = m === P && !!k.left) && f(F, K, M), (o.top = n === P && !!k.top) && f(G, J, L), this.element.css(p).toggle(!(o.x && o.y || j.x === N && o.y || j.y === N && o.x)), d.left -= g.left.charAt ? g.user : m !== P || o.top || !o.left && !o.top ? g.left + this.border : 0, d.top -= g.top.charAt ? g.user : n !== P || o.left || !o.left && !o.top ? g.top + this.border : 0, i.cornerLeft = k.left, i.cornerTop = k.top, i.corner = j.clone()
                }
            }, destroy: function () {
                this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        }), hb = Q.tip = function (a) {
            return new w(a, a.options.style.tip)
        }, hb.initialize = "render", hb.sanitize = function (a) {
            if (a.style && "tip"in a.style) {
                var b = a.style.tip;
                "object" != typeof b && (b = a.style.tip = {corner: b}), /string|boolean/i.test(typeof b.corner) || (b.corner = C)
            }
        }, A.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function () {
                this.create(), this.qtip.reposition()
            }, "^style.tip.(height|width)$": function (a) {
                this.size = [a.width, a.height], this.update(), this.qtip.reposition()
            }, "^content.title|style.(classes|widget)$": function () {
                this.update()
            }
        }, d.extend(C, x.defaults, {
            style: {
                tip: {
                    corner: C,
                    mimic: D,
                    width: 6,
                    height: 6,
                    border: C,
                    offset: 0
                }
            }
        }), Q.viewport = function (c, d, e, f, g, h, i) {
            function j(a, b, c, e, f, g, h, i, j) {
                var k = d[f], m = v[a], t = w[a], u = c === P, x = m === f ? j : m === g ? -j : -j / 2, y = t === f ? i : t === g ? -i : -i / 2, z = r[f] + s[f] - (o ? 0 : n[f]), A = z - k, B = k + j - (h === H ? p : q) - z, C = x - (v.precedance === a || m === v[b] ? y : 0) - (t === N ? i / 2 : 0);
                return u ? (C = (m === f ? 1 : -1) * x, d[f] += A > 0 ? A : B > 0 ? -B : 0, d[f] = Math.max(-n[f] + s[f], k - C, Math.min(Math.max(-n[f] + s[f] + (h === H ? p : q), k + C), d[f], "center" === m ? k - x : 1e9))) : (e *= c === O ? 2 : 0, A > 0 && (m !== f || B > 0) ? (d[f] -= C + e, l.invert(a, f)) : B > 0 && (m !== g || A > 0) && (d[f] -= (m === N ? -C : C) + e, l.invert(a, g)), d[f] < r && -d[f] > B && (d[f] = k, l = v.clone())), d[f] - k
            }

            var k, l, m, n, o, p, q, r, s, t = e.target, u = c.elements.tooltip, v = e.my, w = e.at, x = e.adjust, y = x.method.split(" "), z = y[0], A = y[1] || y[0], B = e.viewport, C = e.container, E = c.cache, Q = {
                left: 0,
                top: 0
            };
            return B.jquery && t[0] !== a && t[0] !== b.body && "none" !== x.method ? (n = C.offset() || Q, o = "static" === C.css("position"), k = "fixed" === u.css("position"), p = B[0] === a ? B.width() : B.outerWidth(D), q = B[0] === a ? B.height() : B.outerHeight(D), r = {
                left: k ? 0 : B.scrollLeft(),
                top: k ? 0 : B.scrollTop()
            }, s = B.offset() || Q, ("shift" !== z || "shift" !== A) && (l = v.clone()), Q = {
                left: "none" !== z ? j(F, G, z, x.x, K, M, H, f, h) : 0,
                top: "none" !== A ? j(G, F, A, x.y, J, L, I, g, i) : 0
            }, l && E.lastClass !== (m = R + "-pos-" + l.abbrev()) && u.removeClass(c.cache.lastClass).addClass(c.cache.lastClass = m), Q) : Q
        }, Q.polys = {
            polygon: function (a, b) {
                var c, d, e, f = {
                    width: 0,
                    height: 0,
                    position: {top: 1e10, right: 0, bottom: 0, left: 1e10},
                    adjustable: D
                }, g = 0, h = [], i = 1, j = 1, k = 0, l = 0;
                for (g = a.length; g--;)c = [parseInt(a[--g], 10), parseInt(a[g + 1], 10)], c[0] > f.position.right && (f.position.right = c[0]), c[0] < f.position.left && (f.position.left = c[0]), c[1] > f.position.bottom && (f.position.bottom = c[1]), c[1] < f.position.top && (f.position.top = c[1]), h.push(c);
                if (d = f.width = Math.abs(f.position.right - f.position.left), e = f.height = Math.abs(f.position.bottom - f.position.top), "c" === b.abbrev())f.position = {
                    left: f.position.left + f.width / 2,
                    top: f.position.top + f.height / 2
                }; else {
                    for (; d > 0 && e > 0 && i > 0 && j > 0;)for (d = Math.floor(d / 2), e = Math.floor(e / 2), b.x === K ? i = d : b.x === M ? i = f.width - d : i += Math.floor(d / 2), b.y === J ? j = e : b.y === L ? j = f.height - e : j += Math.floor(e / 2), g = h.length; g-- && !(h.length < 2);)k = h[g][0] - f.position.left, l = h[g][1] - f.position.top, (b.x === K && k >= i || b.x === M && i >= k || b.x === N && (i > k || k > f.width - i) || b.y === J && l >= j || b.y === L && j >= l || b.y === N && (j > l || l > f.height - j)) && h.splice(g, 1);
                    f.position = {left: h[0][0], top: h[0][1]}
                }
                return f
            },
            rect: function (a, b, c, d) {
                return {
                    width: Math.abs(c - a),
                    height: Math.abs(d - b),
                    position: {left: Math.min(a, c), top: Math.min(b, d)}
                }
            },
            _angles: {tc: 1.5, tr: 7 / 4, tl: 5 / 4, bc: .5, br: .25, bl: .75, rc: 2, lc: 1, c: 0},
            ellipse: function (a, b, c, d, e) {
                var f = Q.polys._angles[e.abbrev()], g = 0 === f ? 0 : c * Math.cos(f * Math.PI), h = d * Math.sin(f * Math.PI);
                return {
                    width: 2 * c - Math.abs(g),
                    height: 2 * d - Math.abs(h),
                    position: {left: a + g, top: b + h},
                    adjustable: D
                }
            },
            circle: function (a, b, c, d) {
                return Q.polys.ellipse(a, b, c, c, d)
            }
        }, Q.svg = function (a, c, e) {
            for (var f, g, h, i, j, k, l, m, n, o, p, q = d(b), r = c[0], s = d(r.ownerSVGElement), t = 1, u = 1, v = !0; !r.getBBox;)r = r.parentNode;
            if (!r.getBBox || !r.parentNode)return D;
            f = s.attr("width") || s.width() || parseInt(s.css("width"), 10), g = s.attr("height") || s.height() || parseInt(s.css("height"), 10);
            var w = (parseInt(c.css("stroke-width"), 10) || 0) / 2;
            switch (w && (t += w / f, u += w / g), r.nodeName) {
                case"ellipse":
                case"circle":
                    o = Q.polys.ellipse(r.cx.baseVal.value, r.cy.baseVal.value, (r.rx || r.r).baseVal.value + w, (r.ry || r.r).baseVal.value + w, e);
                    break;
                case"line":
                case"polygon":
                case"polyline":
                    for (n = r.points || [{x: r.x1.baseVal.value, y: r.y1.baseVal.value}, {
                            x: r.x2.baseVal.value,
                            y: r.y2.baseVal.value
                        }], o = [], m = -1, k = n.numberOfItems || n.length; ++m < k;)l = n.getItem ? n.getItem(m) : n[m], o.push.apply(o, [l.x, l.y]);
                    o = Q.polys.polygon(o, e);
                    break;
                default:
                    o = r.getBoundingClientRect(), o = {
                        width: o.width,
                        height: o.height,
                        position: {left: o.left, top: o.top}
                    }, v = !1
            }
            return p = o.position, s = s[0], v && (s.createSVGPoint && (h = r.getScreenCTM(), n = s.createSVGPoint(), n.x = p.left, n.y = p.top, i = n.matrixTransform(h), p.left = i.x, p.top = i.y), s.viewBox && (j = s.viewBox.baseVal) && j.width && j.height && (t *= f / j.width, u *= g / j.height)), p.left += q.scrollLeft(), p.top += q.scrollTop(), o
        }
    })
}(window, document), function (a) {
    a.fn.drop = function (b) {
        var c = a(this);
        return b = void 0 != b ? b : !0, a("div:first-child", a(this)).addClass("First"), a(this).each(function () {
            a("a:first", a(this)).prepend(a("<span />").addClass("Nipple")).on("click", function (b) {
                b.preventDefault(), b.stopPropagation(), a("ul", a(this).parent()).toggle(), a("ul", a(this)).not(a("ul", a(this).parent())).hide()
            }), a("ul li:last-child", a(this)).addClass("Last"), a("ul", a(this)).css({minWidth: a("a:first", a(this)).outerWidth()})
        }), a(this).on("mouseover click", function () {
            a(".Drop ul:visible").not(a("ul", a(this))).length && (a(".Drop ul:visible").hide(), b && a("ul", a(this)).show())
        }), a(document).on("click", function () {
            a("ul", c).hide()
        }), a(this)
    }
}(jQuery), function (a) {
    function b(b) {
        this.input = b, "password" == b.attr("type") && this.handlePassword(), a(b[0].form).submit(function () {
            b.hasClass("Placeholder") && b[0].value == b.attr("placeholder") && (b[0].value = "")
        })
    }

    b.prototype = {
        show: function (a) {
            if ("" === this.input[0].value || a && this.valueIsPlaceholder()) {
                if (this.isPassword)try {
                    this.input[0].setAttribute("type", "text")
                } catch (b) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("Placeholder"), this.input[0].value = this.input.attr("placeholder")
            }
        }, hide: function () {
            if (this.valueIsPlaceholder() && this.input.hasClass("Placeholder") && (this.input.removeClass("Placeholder"), this.input[0].value = "", this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password")
                } catch (a) {
                }
                this.input.show(), this.input[0].focus()
            }
        }, valueIsPlaceholder: function () {
            return this.input[0].value == this.input.attr("placeholder")
        }, handlePassword: function () {
            var b = this.input;
            if (b.attr("realType", "password"), this.isPassword = !0, navigator.userAgent.match(/(msie|Trident)/i) && b[0].outerHTML) {
                var c = a(b[0].outerHTML.replace(/type=(['"])?password\1/gi, "type=$1text$1"));
                this.fakePassword = c.val(b.attr("placeholder")).addClass("Placeholder").focus(function () {
                    b.trigger("focus"), a(this).hide()
                }), a(b[0].form).submit(function () {
                    c.remove(), b.show()
                })
            }
        }
    }, a.fn.placeholder = function () {
        return this.each(function () {
            var c = a(this), d = new b(c);
            d.show(!0), c.focus(function () {
                d.hide()
            }), c.blur(function () {
                d.show(!1)
            }), navigator.userAgent.match(/(msie|Trident)/i) && (a(window).load(function () {
                c.val() && c.removeClass("Placeholder"), d.show(!0)
            }), c.focus(function () {
                if ("" == this.value) {
                    var a = this.createTextRange();
                    a.collapse(!0), a.moveStart("character", 0), a.select()
                }
            }))
        })
    }
}(jQuery), function (a) {
    "use strict";
    function b(b, c) {
        var d = this;
        this.$el = b.hide(), this.options = c, this.$parent = a('<div class="ms-parent"></div>').addClass(this.options.class), this.$choice = a('<button type="button" class="ms-choice"><div class="nipple"></div><span class="placeholder">' + c.placeholder + "</span><div></div></button>"), this.$drop = a('<div class="ms-drop ' + c.position + '"></div>'), this.$el.after(this.$parent), this.$parent.append(this.$choice), this.$parent.append(this.$drop), this.$el.prop("disabled") && this.$choice.addClass("disabled"), a("body").click(function (b) {
            a(b.target)[0] !== d.$choice[0] && a(b.target).parents(".ms-choice")[0] !== d.$choice[0] && (a(b.target)[0] !== d.$drop[0] && a(b.target).parents(".ms-drop")[0] === d.$drop[0] || !d.options.isOpen || d.close())
        }), this.options.isOpen && this.open()
    }

    b.prototype = {
        constructor: b, init: function () {
            var b = this, c = [];
            this.options.filter && c.push('<div class="ms-search">', '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">', "</div>"), this.options.selectAll && !this.options.single && c.push('<div class="select-all">', "<label>", '<input type="checkbox" name="selectAll" /> ', this.options.selectAllText, "</label>", "</div>"), c.push("<ul>"), a.each(this.$el.children(), function (a, d) {
                c.push(b.optionToHtml(a, d))
            }), c.push('<li class="ms-no-results">' + this.options.noMatchText + "</li>"), c.push("</ul>"), this.$drop.html(c.join("")), this.$drop.find("ul").css("max-height", this.options.maxHeight + "px"), this.$drop.find(".multiple").css("width", this.options.multipleWidth + "px"), this.$searchInput = this.$drop.find(".ms-search input"), this.$selectAll = this.$drop.find('input[name="selectAll"]'), this.$selectGroups = this.$drop.find('input[name="selectGroup"]'), this.$selectItems = this.$drop.find('input[name="selectItem"]:enabled'), this.$disableItems = this.$drop.find('input[name="selectItem"]:disabled'), this.$noResults = this.$drop.find(".ms-no-results"), this.events(), this.update()
        }, optionToHtml: function (b, c, d, e) {
            var j, f = this, g = a(c), h = [], i = this.options.multiple, k = this.options.single ? "radio" : "checkbox";
            if (g.is("option")) {
                var l = g.val(), m = g.text(), n = g.prop("selected");
                j = e || g.prop("disabled"), h.push("<li" + (i ? ' class="multiple"' : "") + ">", "<label" + (j ? ' class="disabled"' : "") + ">", '<input type="' + k + '" name="selectItem" value="' + l + '"' + (n ? ' checked="checked"' : "") + (j ? ' disabled="disabled"' : "") + (d ? ' data-group="' + d + '"' : "") + "/> ", m, "</label>", "</li>")
            } else if (!d && g.is("optgroup")) {
                var o = "group_" + b, p = g.attr("label");
                j = g.prop("disabled"), h.push('<li class="group">', '<label class="optgroup' + (j ? " disabled" : "") + '" data-group="' + o + '">', '<input type="checkbox" name="selectGroup"' + (j ? ' disabled="disabled"' : "") + " /> ", p, "</label>", "</li>"), a.each(g.children(), function (a, b) {
                    h.push(f.optionToHtml(a, b, o, j))
                })
            }
            return h.join("")
        }, events: function () {
            var b = this;
            this.$choice.off("click").on("click", function () {
                b[b.options.isOpen ? "close" : "open"]()
            }).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur), this.$parent.off("keydown").on("keydown", function (a) {
                switch (a.which) {
                    case 27:
                        b.close(), b.$choice.focus()
                }
            }), this.$searchInput.off("keyup").on("keyup", function () {
                b.filter()
            }), this.$selectAll.off("click").on("click", function () {
                var c = a(this).prop("checked"), d = b.$selectItems.filter(":visible");
                d.length === b.$selectItems.length ? b[c ? "checkAll" : "uncheckAll"]() : (b.$selectGroups.prop("checked", c), d.prop("checked", c), b.options[c ? "onCheckAll" : "onUncheckAll"](), b.update())
            }), this.$selectGroups.off("click").on("click", function () {
                var c = a(this).parent().attr("data-group"), d = b.$selectItems.filter(":visible"), e = d.filter('[data-group="' + c + '"]'), f = e.length !== e.filter(":checked").length;
                e.prop("checked", f), b.updateSelectAll(), b.update(), b.options.onOptgroupClick({
                    label: a(this).parent().text(),
                    checked: f,
                    children: e.get()
                })
            }), this.$selectItems.off("click").on("click", function () {
                b.updateSelectAll(), b.update(), b.updateOptGroupSelect(), b.options.onClick({
                    label: a(this).parent().text(),
                    value: a(this).val(),
                    checked: a(this).prop("checked")
                })
            })
        }, open: function () {
            if (this.$drop.css({width: this.$choice.outerWidth() + "px"}), !this.$choice.hasClass("disabled")) {
                if (this.options.isOpen = !0, this.$choice.find(">div").addClass("open"), this.$drop.show(), this.options.container) {
                    var b = this.$drop.offset();
                    this.$drop.appendTo(a(this.options.container)), this.$drop.offset({top: b.top, left: b.left})
                }
                a("option", this.$el).length, this.$noResults.hide(), 0 == a("option", this.$el).length && this.$noResults.show(), this.options.filter && (this.$searchInput.val(""), this.filter()), this.updateSelectAll(), this.changeValues = this.$el.val() ? this.$el.val().join(",") : void 0, this.options.filter && this.$searchInput.focus(), this.options.onOpen()
            }
        }, close: function () {
            this.options.isOpen = !1, this.$choice.find(">div").removeClass("open"), this.$drop.hide(), this.options.container && (this.$parent.append(this.$drop), this.$drop.css({
                top: "auto",
                left: "auto"
            })), this.options.onClose();
            var a = void 0;
            this.$el.val() && (a = this.$el.val().join(",")), a !== this.changeValues && this.options.onCloseChange()
        }, update: function () {
            var a = this.getSelects("text"), b = this.$choice.find(">span");
            a.length > 0 && a.length == this.$selectItems.length && this.options.allSelected ? b.removeClass("placeholder").html(this.options.allSelected) : a.length > this.options.minumimCountSelected && this.options.countSelected ? b.removeClass("placeholder").html(this.options.countSelected.replace("#", a.length).replace("%", this.$selectItems.length + this.$disableItems.length)) : a.length ? b.removeClass("placeholder").html(a.join(", ")) : b.addClass("placeholder").html(this.options.placeholder), this.$el.val(this.getSelects())
        }, updateSelectAll: function () {
            var a = this.$selectItems.filter(":visible");
            this.$selectAll.prop("checked", a.length && a.length === a.filter(":checked").length)
        }, updateOptGroupSelect: function () {
            var b = this.$selectItems.filter(":visible");
            a.each(this.$selectGroups, function (c, d) {
                var e = a(d).parent().attr("data-group"), f = b.filter('[data-group="' + e + '"]');
                a(d).prop("checked", f.length && f.length === f.filter(":checked").length)
            })
        }, getSelects: function (b) {
            var c = this, d = [], e = [];
            return this.$drop.find('input[name="selectItem"]:checked').each(function () {
                d.push(a(this).parent().text()), e.push(a(this).val())
            }), "text" === b && this.$selectGroups.length && (d = [], this.$selectGroups.each(function () {
                var b = [], e = a.trim(a(this).parent().text()), f = a(this).parent().data("group"), g = c.$drop.find('[name="selectItem"][data-group="' + f + '"]'), h = g.filter(":checked");
                if (0 !== h.length) {
                    if (b.push("["), b.push(e), g.length > h.length) {
                        var i = [];
                        h.each(function () {
                            i.push(a(this).parent().text())
                        }), b.push(": " + i.join(", "))
                    }
                    b.push("]"), d.push(b.join(""))
                }
            })), "text" === b ? d : e
        }, setSelects: function (b) {
            var c = this;
            this.$selectItems.prop("checked", !1), a.each(b, function (a, b) {
                c.$selectItems.filter('[value="' + b + '"]').prop("checked", !0)
            }), this.$selectAll.prop("checked", this.$selectItems.length === this.$selectItems.filter(":checked").length), this.update()
        }, enable: function () {
            this.$choice.removeClass("disabled")
        }, disable: function () {
            this.$choice.addClass("disabled")
        }, checkAll: function () {
            this.$selectItems.prop("checked", !0), this.$selectGroups.prop("checked", !0), this.$selectAll.prop("checked", !0), this.update(), this.options.onCheckAll()
        }, uncheckAll: function () {
            this.$selectItems.prop("checked", !1), this.$selectGroups.prop("checked", !1), this.$selectAll.prop("checked", !1), this.update(), this.options.onUncheckAll()
        }, focus: function () {
            this.$choice.focus(), this.options.onFocus()
        }, blur: function () {
            this.$choice.blur(), this.options.onBlur()
        }, refresh: function () {
            this.init()
        }, filter: function () {
            var b = this, c = a.trim(this.$searchInput.val()).toLowerCase();
            0 === c.length ? (this.$selectItems.parent().parent().show(), this.$disableItems.parent().parent().show(), this.$selectGroups.parent().parent().show()) : (this.$selectItems.each(function () {
                var b = a(this).parent().parent();
                b[b.text().toLowerCase().indexOf(c) < 0 ? "hide" : "show"]()
            }), this.$disableItems.parent().parent().hide(), this.$selectGroups.each(function () {
                var c = a(this).parent().parent(), d = c.attr("data-group"), e = b.$selectItems.filter(":visible");
                c[0 === e.filter('[data-group="' + d + '"]').length ? "hide" : "show"]()
            }), this.$selectItems.filter(":visible").length ? (this.$selectAll.parent().parent().show(), this.$noResults.hide()) : (this.$selectAll.parent().parent().hide(), this.$noResults.show())), this.updateOptGroupSelect(), this.updateSelectAll()
        }
    }, a.fn.multipleSelect = function () {
        var e, c = arguments[0], d = arguments, f = ["getSelects", "setSelects", "enable", "disable", "checkAll", "uncheckAll", "focus", "blur", "refresh"];
        return this.each(function () {
            var g = a(this), h = g.data("multipleSelect"), i = a.extend({}, a.fn.multipleSelect.defaults, "object" == typeof c && c);
            if (h || (h = new b(g, i), g.data("multipleSelect", h)), "string" == typeof c) {
                if (a.inArray(c, f) < 0)throw"Unknown method: " + c;
                e = h[c](d[1])
            } else h.init()
        }), e ? e : this
    }, a.fn.multipleSelect.defaults = {
        isOpen: !1,
        placeholder: "",
        selectAll: !0,
        selectAllText: "Select all",
        noMatchText: "No match found",
        allSelected: "All selected",
        minumimCountSelected: 5e3,
        countSelected: "# of % selected",
        multiple: !1,
        multipleWidth: 80,
        single: !1,
        filter: !1,
        width: void 0,
        maxHeight: 250,
        container: null,
        position: "bottom",
        "class": "",
        onOpen: function () {
        },
        onClose: function () {
        },
        onCloseChange: function () {
        },
        onCheckAll: function () {
        },
        onUncheckAll: function () {
        },
        onFocus: function () {
        },
        onBlur: function () {
        },
        onOptgroupClick: function () {
        },
        onClick: function () {
        }
    }
}(jQuery), function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function (a) {
    function c(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function d(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function e(a) {
        return c(h.json ? JSON.stringify(a) : String(a))
    }

    function f(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
        } catch (c) {
        }
    }

    function g(b, c) {
        var d = h.raw ? b : f(b);
        return a.isFunction(c) ? c(d) : d
    }

    var b = /\+/g, h = a.cookie = function (b, f, i) {
        if (void 0 !== f && !a.isFunction(f)) {
            if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires, k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="), q = d(p.shift()), r = p.join("=");
            if (b && b === q) {
                l = g(r, f);
                break
            }
            b || void 0 === (r = g(r)) || (l[q] = r)
        }
        return l
    };
    h.defaults = {}, a.removeCookie = function (b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {expires: -1})), !a.cookie(b))
    }
}), function (a) {
    a.fn.toggleButton = function (b) {
        void 0 == b && (b = {}), a("label[for=" + a(this).attr("id") + "]", a(this).parent()).remove();
        var c = a.extend({}, a.fn.toggleButton.defaults, b), d = a(this), e = a("<div />").addClass(a(this).attr("class")).addClass("ToggleContainer TableLayout"), f = a("<div />").addClass("Row"), g = a("<div />").addClass("ToggleOn Cell"), h = a("<div />").addClass("ToggleOff Cell");
        return g.html(c.textYes), h.html(c.textNo), a(this).is(":checked") ? g.addClass("Selected") : h.addClass("Selected"), f.append(g), f.append(h), e.append(f), a(this).hide(), a(this).after(e), g.on("click", function () {
            d.prop("checked", !0), d.trigger("change")
        }), h.on("click", function () {
            d.prop("checked", !1), d.trigger("change")
        }), a(this).on("change", function () {
            d.prop("checked") ? (h.removeClass("Selected"), g.addClass("Selected")) : (g.removeClass("Selected"), h.addClass("Selected"))
        }), !1
    }, a.fn.toggleButton.defaults = {textYes: "On", textNo: "Off"}
}(jQuery), function (a) {
    a.fn.inputfile = function () {
        a(this).each(function () {
            if (a(this).data("formated") !== !0 && 1 != a(this).attr("data-ignore")) {
                var b = a("<div />").addClass("InputFile TableLayout"), c = a("<div />").addClass("Row"), d = a("<div />").addClass("Button").html(a(this).attr("data-buttonText") ? a(this).attr("data-buttonText") : "Browse"), e = a("<input />").attr("type", "text").prop("readonly", !0), f = a(this), g = a("<div />").addClass("Cell Input"), h = a("<div />").addClass("Cell");
                b.addClass(a(this).attr("class")).insertAfter(a(this).hide()), b.append(c), c.append(g.append(e)).append(h.append(d)), d.click(function () {
                    f.click()
                }), a(this).change(function () {
                    var b = [];
                    a.each(this.files, function () {
                        b.push(a(this)[0].name)
                    });
                    var c = "";
                    b.length > 1 ? c = b.length + " files selected" : 1 == b.length && (c = b[0]), "" == c ? (c = "", e.removeClass("Filled")) : (c = c.replace("C:\\fakepath\\", ""), e.addClass("Filled")), e.val(c)
                }), a(this).data("formated", !0)
            }
        })
    }
}(jQuery), function (a, b) {
    a.spin = function (b, c) {
        this.el = b, this.el.css("text-align", "center"), this.options = c, this.flags = {}, this.el.val() || this.options.initvalue !== !0 || this.el.val(this.firstNum(this.options.min, this.options.reset));
        var d = a("<div />").addClass("Cell Input"), e = a("<div />").addClass("Cell");
        this.buttonPlus = a('<span class="spin-btn plus"></span>'), this.buttonMinus = a('<span class="spin-btn minus"></span>'), e.append(this.buttonPlus).append(this.buttonMinus), this.el.wrap(d), this.el.parent().parent().append(e);
        var f = this;
        this.el.bind("keydown", function (a) {
            return f.keydown(a)
        }), this.el.bind("keyup", function (a) {
            f.keyup(a)
        }), this.buttonMinus.bind("mousedown", function (a) {
            f.mousedown(a, -1)
        }), this.buttonPlus.bind("mousedown", function (a) {
            f.mousedown(a, 1)
        }), this.buttonMinus.bind("mouseup", function (a) {
            f.mouseup(a)
        }), this.buttonPlus.bind("mouseup", function (a) {
            f.mouseup(a)
        })
    }, a.extend(a.spin.prototype, {
        adjustValue: function (a) {
            var b = this.firstNum(this.el.val(), this.options.min, this.options.reset, 0), c = this.firstNum(this.options.step, 0), d = this.firstNum(this.options.min), e = this.firstNum(this.options.max);
            a > 0 ? b = this.options.increment(b, c) : 0 > a && (b = this.options.decrement(b, c)), this.isNum(e) && (b = Math.min(b, e)), this.isNum(d) && (b = Math.max(b, d)), b != this.el.val() && this.el.val(b)
        }, mouseup: function () {
            this.stopAutorepeat(), this.adjustValue(0), this.flags.type = 0
        }, mousedown: function (a, b) {
            this.flags.type = b, this.startAutorepeat(), this.adjustValue(b)
        }, keyup: function () {
            this.stopAutorepeat(), this.adjustValue(0), this.flags.type = 0
        }, keydown: function (b) {
            if (!this.options.keys || a.grep(this.options.keys, function (a) {
                    return a === b.keyCode || a instanceof RegExp && a.test(String.fromCharCode(b.keyCode))
                }).length) {
                var c = {up: 38, down: 40, pageUp: 33, pageDown: 34};
                switch (this.startAutorepeat(), b.keyCode) {
                    case c.up:
                    case c.pageUp:
                        this.flags.type = 1, this.adjustValue(1);
                        break;
                    case c.down:
                    case c.pageDown:
                        this.flags.type = -1, this.adjustValue(-1)
                }
            } else b.preventDefault()
        }, startAutorepeat: function () {
            var a = this;
            this.stopAutorepeat(), this.flags.delayId = window.setTimeout(function () {
                a.adjustValue(a.flags.type), a.flags.intervalId = window.setInterval(function () {
                    a.adjustValue(a.flags.type)
                }, a.options.interval)
            }, this.options.delay)
        }, stopAutorepeat: function () {
            window.clearTimeout(this.flags.delayId), window.clearInterval(this.flags.intervalId)
        }, isNum: function (a) {
            return !isNaN(parseFloat(a))
        }, firstNum: function () {
            for (var b = 0; b < arguments.length; b++)if (this.isNum(arguments[b]))return Number(parseFloat(arguments[b]));
            return null
        }
    }), a.fn.spin = function (c) {
        var d = a.extend({}, a.fn.spin.defaults, c), e = new a.spin(this, d);
        return a(this).data(b, e), this
    }, a.fn.spin.defaults = {
        min: 0,
        max: null,
        step: 1,
        reset: null,
        initvalue: !0,
        increment: function (a, b) {
            return a + b
        },
        decrement: function (a, b) {
            return a - b
        },
        keys: [/[0-9]/, 9, 13, 8, 46, 33, 34, 37, 38, 39, 40, 109, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
        delay: 500,
        interval: 100
    }
}(jQuery, "spin"), function (a) {
    a.fn.observe = function (b, c) {
        return this.each(function () {
            var d = a(this), e = d.val();
            setInterval(function () {
                e != d.val() && c.call(d), e = d.val()
            }, b)
        })
    }
}(jQuery);
var nexus = {
    init: function () {
        var a = this;
        this.before(), $(window).load(function () {
            a.preload(), a.hotkeys(), a.initTabs(), a.initTree(), a.initActions(), a.formatContent(), a.errorInTabs()
        })
    }, before: function () {
        this.isMac() ? $("html").addClass("Macos") : $("html").addClass("Windows")
    }, isMac: function () {
        return -1 != navigator.appVersion.indexOf("Mac")
    }, preload: function () {
        var a=this.getBasePath(),b=new Image,c=new Image;
        b.src="images/action_loading.gif";
        c.src="images/global_loading.gif";
    }, hotkeys: function () {
        $(document).on("keydown", function (a) {
            39 == a.which ? $("div.DatagridContainer div.Pager a.Next:visible").click() : 37 == a.which && $("div.DatagridContainer div.Pager a.Previous:visible").click()
        })
    }, getBasePath: function () {
        return $('head script[src*="nexus.js"]').attr("src").replace(/nexus\.js.*/, "")
    }, initTabs: function () {
        if ($("div.SectionTabs").length) {
            var b, a = document.location.hash, c = this;
            a = a.substring(1, a.length), $("a#tab_" + a).length <= 0 && (a = "", document.location.hash = ""), a ? ($("a#tab_" + a).addClass("Selected"), $("div#panel_" + a + ", div#action_" + a + ", div#summary_" + a).show().trigger("panelShow")) : $("div.SectionTabs a:first-child").length && (b = $("div.SectionTabs a:first-child").attr("href").substring(1), $("div.SectionTabs a:first-child").addClass("Selected"), $("div#panel_" + b + ", div#action_" + b + ", div#summary_" + b).show().trigger("panelShow")), $("div.SectionTabs a").bind("click", function () {
                a = $(this).attr("href").substring(1), c.switchTabs($(this).parent(), a)
            })
        }
    }, switchTabs: function (a, b) {
        var c = $("a", a).removeClass("Selected");
        c.each(function () {
            var a = $(this).attr("id").replace("tab_", "");
            $("#panel_" + a + ", #action_" + a + ", #summary_" + a).hide()
        }), document.location.hash = b, $("#tab_" + b).addClass("Selected"), $("#panel_" + b + ", #action_" + b + ", #summary_" + b).show().trigger("panelShow")
    }, errorInTabs: function () {
        var a = !1;
        $("div.Panel").each(function () {
            if ($("table.FormLayout div.Error", $(this)).length && ($("#" + $(this).attr("id").replace("panel_", "tab_")).addClass("Error"), !a)) {
                var b = $(this).attr("id").replace("panel_", "");
                nexus.switchTabs($("#tab_" + b).parent(), b), a = !0
            }
        })
    }, resizeModalContent: function () {
        var a = $("#modal_content"), b = 0;
        $("div.ModalHeader", a).length && (b += $("div.ModalHeader", a).outerHeight()), $("div.SectionTabs", a).length && (b += $("div.SectionTabs", a).outerHeight()), $("div.ModalFooter", a).length && (b += $("div.ModalFooter", a).outerHeight()), $("div.ModalContent", a).css({maxHeight: $(window).height() - b - 70})
    }, initTree: function () {
        $("ul.Tree").length && (this.parseTree($("ul.Tree:first-child"), $("ul.Tree:first-child").hasClass("Expandable")), $(".Expandable ul.Tree").hide(), $(".Expandable li div.Tick").each(function () {
            $(this).siblings("ul.Tree").is(":hidden") ? $(this).removeClass("Minus").addClass("Plus") : $(this).removeClass("Plus").addClass("Minus"), $(this).bind("click", function () {
                $(this).siblings("ul.Tree").is(":hidden") ? ($(this).siblings("ul.Tree").slideDown("fast"), $(this).removeClass("Plus").addClass("Minus")) : ($(this).siblings("ul.Tree").slideUp("fast"), $(this).removeClass("Minus").addClass("Plus"))
            })
        }))
    }, parseTree: function (a, b) {
        var c = this;
        a.find("li ul.Tree").each(function () {
            c.parseTree($(this), b)
        }), b && a.parent().is("li") && a.parent().prepend('<div class="Tick Plus" />')
    }, datagridSelection: function (a, b, c, d, e, f, g, h) {
        var i = $(a), j = "", k = 0;
        if ($('input[name="' + b + 'Selector"]').each(function () {
                $(this).prop("checked") && (j += $(this).val() + "|", k++)
            }), $("#" + f).hide(), 1 > k)alert(e.no_elements); else if (c && k > 1)alert(e.only_one); else {
            if (g && !confirm(g))return !1;
            $("#" + f).show();
            var l = i.attr("href") + j.substring(0, j.length - 1);
            d ? $.ajax({
                url: l, context: document.body, type: "POST", success: function (a) {
                    $("#" + b).html(a)
                }, complete: function () {
                    $("#" + +f).hide()
                }
            }) : h ? ($("#" + f).hide(), window.open(l)) : window.location.href ? window.location.href = l : window.location.replace(l)
        }
        return !1
    }, datagridSearch: function (a, b, c) {
        return $("form#" + a + " table.Datagrid input[type=text]").each(function () {
            $(this).val() == $(this).attr("placeholder") && $(this).val("")
        }), $.ajax({
            type: "POST", dataType: "html", url: c, data: $("#" + a).serialize(), beforeSend: function () {
                $("#SmallLoading").show(), $("#" + b).fadeTo("fast", .5)
            }, success: function (a) {
                $("#" + b).html(a)
            }
        }), !1
    }, datagridSearchKeydown: function (a, b, c, d) {
        13 == d.keyCode && nexus.datagridSearch(a, b, c)
    }, initActions: function () {
        $("div.SectionActions .Drop").drop(), $("ul.HeaderNavigation .Drop").drop(), $(".SearchContainer").not(".NoClean").each(function () {
            var a = $("input", $(this));
            $("<div />").addClass("SearchClean").bind("click", function () {
                a.hasClass("Placeholder") || (a.val(""), a.parent().submit(), a.trigger("change").addClass("Placeholder"))
            }).appendTo($(this))
        })
    }, formatContent: function () {
        $("body").append('<div id="SmallLoading" class="SmallLoading"></div>'), $("body").append('<div id="Loading" class="Loading"><span></span></div>'), this.formatContentCallable()
    }, formatContentCallable: function () {
        $("#Loading").hide(), $("#SmallLoading").hide(), $("a.ShowLoading").each(function (a, b) {
            var c = $(this).attr("data-style") ? $(this).attr("data-style") : "Loading";
            if ($(this).attr("onclick")) {
                var d = b.onclick;
                b.onclick = null, null != d && $(b).bind("click", function (a) {
                    d() ? $("#" + c).show() : a.preventDefault()
                })
            } else $(b).bind("click", function (a) {
                1 == a.which && $("#" + c).show()
            })
        }), $("form.ShowLoading").on("submit", function () {
            var a = void 0 == $(this).attr("data-style") ? "Loading" : $(this).attr("data-style");
            $("button[type=submit]", $(this)).attr("disabled", "disabled"), "none" != a && $("#" + a).show()
        }), $(".Help").each(function () {
            var a, b = {
                top: {my: "bottom center", at: "top center", effect: !1},
                bottom: {my: "top center", at: "bottom center", effect: !1},
                left: {my: "right center", at: "left center", effect: !1},
                right: {my: "left center", at: "right center", effect: !1}
            };
            a = {
                style: {classes: "qtip-" + ("undefined" != typeof $(this).attr("data-style") ? $(this).attr("data-style") : "tipsy")},
                position: "undefined" != typeof $(this).attr("data-position") ? b[$(this).attr("data-position")] : b.right
            }, $(this).qtip(a)
        }), $("a.Modal").fancybox({
            type: "ajax",
            fitToView: !1,
            padding: 0,
            modal: !0,
            openEffect: "none",
            topRatio: .1
        }), this.formatInputs(), this.resizeModalContent()
    }, formatInputs: function () {
        $("input[placeholder], textarea[placeholder]").placeholder(), $("input[type=file]").not(".NoFormat").inputfile()
    }
};
nexus.init();