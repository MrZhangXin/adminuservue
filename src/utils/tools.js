!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.lutils = e() : t.lutils = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r])return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 2)
    }([function (t, e) {
        t.exports = function (t, e, n, r) {
            function o() {
                function o() {
                    u = Number(new Date), n.apply(c, l)
                }

                function a() {
                    i = void 0
                }

                var c = this, f = Number(new Date) - u, l = arguments;
                r && !i && o(), i && clearTimeout(i), void 0 === r && f > t ? o() : !0 !== e && (i = setTimeout(r ? a : o, void 0 === r ? t - f : t))
            }

            var i, u = 0;
            return "boolean" != typeof e && (r = n, n = e, e = void 0), o
        }
    }, function (t, e) {
        function n(t, e, n) {
            var r = new Date;
            r.setDate(r.getDate() + n), document.cookie = t + "=" + e + ";expires=" + r
        }

        t.exports = n
    }, function (t, e, n) {
        var r = n(3), o = n(17), i = n(25), u = n(32), a = n(38), c = n(39), f = n(43), l = n(44), s = n(46), p = n(47), d = n(48);
        t.exports = {
            cookie: d,
            json: r,
            str: o,
            file: i,
            date: u,
            validate: a,
            url: c,
            fun: l,
            random: f,
            num: s,
            clipboard: p
        }
    }, function (t, e, n) {
        var r = n(4), o = n(5), i = n(6), u = n(7), a = n(8), c = n(9), f = n(10), l = n(11), s = n(12), p = n(13), d = n(14), y = n(15), m = n(16);
        t.exports = {
            array2Tree: r,
            deepClone: o,
            isEmpty: i,
            copy: a,
            arrayEqual: c,
            isArray: f,
            reverse: u,
            optionArr2Obj: l,
            obj2OptionArr: s,
            countArray: p,
            initRangeArray: d,
            arrFind: y,
            objFields: m
        }
    }, function (t, e) {
        function n(t, e, n, r) {
            for (var o = [], i = {}, u = e, a = n, c = r, f = 0, l = 0, s = t.length; f < s; f++)i[t[f][u]] = t[f];
            for (; l < s; l++) {
                var p = t[l], d = i[p[a]];
                d ? (!d[c] && (d[c] = []), d[c].push(p)) : o.push(p)
            }
            return o
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var e;
            if (null == t || "object" != (void 0 === t ? "undefined" : r(t)))return t;
            if (t instanceof Date)return e = new Date, e.setTime(t.getTime()), e;
            if (t instanceof Array) {
                e = [];
                for (var o = 0, i = t.length; o < i; o++)e[o] = n(t[o]);
                return e
            }
            if (t instanceof Object) {
                e = {};
                for (var u in t)t.hasOwnProperty(u) && (e[u] = n(t[u]));
                return e
            }
            throw new Error("Unable to copy values! Its type isn't supported.")
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        t.exports = n
    }, function (t, e) {
        function n(t) {
            return "object" == (void 0 === t ? "undefined" : r(t)) && (Array.isArray(t) ? t.length <= 0 : !Object.keys(t).length)
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        t.exports = n
    }, function (t, e) {
        function n(t) {
            if ("object" == (void 0 === t ? "undefined" : r(t))) {
                if (Array.isArray(t))return t.reverse();
                var e = new Object;
                for (var n in t)e[t[n]] = n;
                return e
            }
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        t.exports = n
    }, function (t, e) {
        function n(t) {
            return JSON.parse(JSON.stringify({d: t})).d
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            if (t === e)return !0;
            if (t.length != e.length)return !1;
            for (var n = 0; n < t.length; ++n)if (t[n] !== e[n])return !1;
            return !0
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" == Object.prototype.toString.call(t)
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n) {
            var r = {}, o = !0, i = !1, u = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                    var f = a.value;
                    r[f[e]] || (r[f[e]] = f[n])
                }
            } catch (t) {
                i = !0, u = t
            } finally {
                try {
                    !o && c.return && c.return()
                } finally {
                    if (i)throw u
                }
            }
            return r
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n) {
            var r = [];
            for (var o in t) {
                var i = {};
                i[e] = o, i[n] = t[o], r.push(i)
            }
            return r
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            return Array.isArray(t) ? e ? t.reduce(function (t, n) {
                        return n === e ? t + 1 : t + 0
                    }, 0) : t.length : 0
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            return "number" != typeof e && (e = t, t = 0), Array.apply(null, Array(e - t)).map(function (e, n) {
                return n + t
            })
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n, r) {
            var o = void 0, i = void 0, u = void 0, a = !0, c = "function" == typeof e;
            c || (o = Object.keys(e), a = 1 === o.length, i = a ? o[0] : null, u = a ? e[i] : null);
            var f = t[r ? "filter" : "find"](c ? e : function (t) {
                    if (a)return t[i] === u;
                    for (i in e)if (t[i] !== e[i])return !1;
                    return !0
                });
            if (r) {
                if (f.length > 0 && Array.isArray(n))return f.map(function (t) {
                    return lutils.json.objFields(t, n)
                })
            } else if (f && Array.isArray(n))return this.objFields(f, n);
            return f
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            var n = {}, r = !0, o = !1, i = void 0;
            try {
                for (var u, a = e[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                    var c = u.value;
                    n[c] = t[c]
                }
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    !r && a.return && a.return()
                } finally {
                    if (o)throw i
                }
            }
            return n
        }

        t.exports = n
    }, function (t, e, n) {
        var r = n(18), o = n(19), i = n(20), u = n(21), a = n(22), c = n(23), f = n(24);
        t.exports = {replaceAll: r, digitUppercase: o, rtrim: i, ltrim: u, trim: a, reverse: c, ucfirst: f}
    }, function (t, e) {
        function n(t, e, n) {
            return t.replace(new RegExp(e, "gm"), n)
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var e = ["角", "分"], n = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"], r = [["元", "万", "亿"], ["", "拾", "佰", "仟"]], o = t < 0 ? "欠" : "";
            t = Math.abs(t);
            for (var i = "", u = 0; u < e.length; u++)i += (n[Math.floor(10 * t * Math.pow(10, u)) % 10] + e[u]).replace(/零./, "");
            i = i || "整", t = Math.floor(t);
            for (var u = 0; u < r[0].length && t > 0; u++) {
                for (var a = "", c = 0; c < r[1].length && t > 0; c++)a = n[t % 10] + r[1][c] + a, t = Math.floor(t / 10);
                i = a.replace(/(零.)*零$/, "").replace(/^$/, "零") + r[0][u] + i
            }
            return o + i.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            return t.replace(/(\s*$)/g, "")
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            return t.replace(/(^\s*)/g, "")
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            return t.replace(/(^\s*)|(\s*$)/g, "")
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            return t ? t.split("").reverse().join("") : ""
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var t = t.toLowerCase();
            return t = t.replace(/\b\w+\b/g, function (t) {
                return t.substring(0, 1).toUpperCase() + t.substring(1)
            })
        }

        t.exports = n
    }, function (t, e, n) {
        var r = n(26), o = n(27), i = n(28), u = n(29), a = n(30), c = n(31);
        t.exports = {
            toBlobURL: r,
            toDataURL: o,
            base64UrlToBlob: i,
            downloadByUrl: a,
            bytesToSize: c,
            base64UrlToFile: u
        }
    }, function (t, e) {
        function n(t) {
            var e = URL.createObjectURL(t);
            return setTimeout(function () {
                URL.revokeObjectURL(t)
            }, 10), e
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n) {
            var r = new FileReader;
            r.onload = function () {
                "function" == typeof e && e(n ? this.result.split(",")[1] : this.result)
            }, r.readAsDataURL(t)
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n) {
            for (var r = window.atob(t.split(",")[1]), o = new ArrayBuffer(r.length), i = new Uint8Array(o), u = 0; u < r.length; u++)i[u] = r.charCodeAt(u);
            return n ? o : new Blob([o], e || {type: "application/octet-stream"})
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e, n) {
            var r = window.atob(t.split(",")[1]);
            n = n || u.img.split(";")[0].split(":")[1];
            for (var o = new ArrayBuffer(r.length), i = new Uint8Array(o), u = 0; u < r.length; u++)i[u] = r.charCodeAt(u);
            return new File([o], e, {type: n})
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            if (!("string" != typeof t || t.length <= 0)) {
                var n = document.createElement("a");
                n.id = "download-" + Date.parse(new Date), n.href = t, n.download = e || "下载", n.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;", document.body.appendChild(n), document.querySelector("#" + n.id).click(), document.body.removeChild(document.getElementById(n.id))
            }
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            if (0 === t)return "0 B";
            sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            var n = Math.floor(Math.log(t) / Math.log(1024));
            return (t / Math.pow(1024, n)).toPrecision(2 + (e || 1)) + " " + sizes[n]
        }

        t.exports = n
    }, function (t, e, n) {
        var r = n(33), o = n(34), i = n(35), u = n(36), a = n(37);
        t.exports = {string2date: r, formatPassTime: o, formatRemainTime: i, isSameDay: u, getTimeStamp: a}
    }, function (t, e) {
        function n(t, e) {
            return new Date(Date.parse(t.replace(e || /-/g, "/")))
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var e = Date.parse(new Date), n = e - t, r = parseInt(n / 864e5), o = parseInt(n / 36e5), i = parseInt(n / 6e4), u = parseInt(r / 30), a = parseInt(u / 12);
            return a ? a + "年前" : u ? u + "个月前" : r ? r + "天前" : o ? o + "小时前" : i ? i + "分钟前" : "刚刚"
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var e = new Date, n = new Date(t), r = n.getTime() - e.getTime(), o = 0, i = 0, u = 0, a = 0;
            return r >= 0 && (o = Math.floor(r / 1e3 / 3600 / 24), i = Math.floor(r / 1e3 / 60 / 60 % 24), u = Math.floor(r / 1e3 / 60 % 60), a = Math.floor(r / 1e3 % 60)), o + "天 " + i + "小时 " + u + "分钟 " + a + "秒"
        }

        t.exports = n
    }, function (t, e) {
        function n(t, e) {
            e || (e = new Date);
            var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), i = e.getFullYear(), u = e.getMonth() + 1;
            return o === e.getDate() && r === u && n === i
        }

        t.exports = n
    }, function (t, e) {
    }, function (t, e) {
        t.exports = {
            messages: {
                required: "这是必填字段",
                remote: "请修正此字段",
                email: "请输入有效的电子邮件地址",
                url: "请输入有效的网址",
                date: "请输入有效的日期",
                dateISO: "请输入有效的日期 (YYYY-MM-DD)",
                number: "请输入有效的数字",
                digits: "只能输入数字",
                creditcard: "请输入有效的信用卡号码",
                equalTo: "你的输入不相同",
                extension: "请输入有效的后缀",
                minlength: "输入字数过短",
                maxlength: "输入字数过长",
                mphone: "请输入正确的手机号格式",
                tphone: "请输入正确的电话格式",
                idCard: "请输入正确的身份证格式",
                postal: "请输入正确的邮编格式"
            }, required: function (t, e) {
                if (this.isarr(t)) {
                    if (t.length > 0) {
                        var n = !0, r = !1, o = void 0;
                        try {
                            for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                                if (!i.value)return !1
                            }
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !n && u.return && u.return()
                            } finally {
                                if (r)throw o
                            }
                        }
                        return !0
                    }
                    return !1
                }
                return void 0 != t && t.toString().length > 0
            }, email: function (t) {
                return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            }, url: function (t) {
                return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            }, date: function (t) {
                return !/Invalid|NaN/.test(new Date(t).toString())
            }, dateISO: function (t) {
                return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            }, number: function (t) {
                return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t) {
                return /^\d+$/.test(t)
            }, isarr: function (t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }, minlength: function (t, e) {
                return t.length >= e
            }, maxlength: function (t, e) {
                return t.length <= e
            }, rangelength: function (t, e) {
                var n = $.isArray(t) ? t.length : this.getLength(t);
                return n >= e[0] && n <= e[1]
            }, min: function (t, e) {
                return t >= e
            }, max: function (t, e) {
                return t <= e
            }, range: function (t, e) {
                return t >= e[0] && t <= e[1]
            }, equalTo: function (t, e) {
                return t === e
            }, mphone: function (t) {
                return /^1[3|4|5|8][0-9]\d{4,8}$/.test(t)
            }, tphone: function (t) {
                return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(t)
            }, idCard: function (t) {
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)
            }, postal: function (t) {
                return /^[a-zA-Z0-9 ]{3,12}$/g.test(t)
            }
        }
    }, function (t, e, n) {
        var r = n(40), o = n(41), i = n(42);
        t.exports = {getQueryObject: r, stringfyQueryString: o, getQueryString: i}
    }, function (t, e) {
        function n(t) {
            t = null == t ? window.location.href : t;
            var e = "?" === t[0] ? t.substr(1) : t.substring(t.lastIndexOf("?") + 1);
            if ("" === e)return {};
            e = e.split("&");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r].split("=");
                n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "")
            }
            return n
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            if (!t)return "";
            var e = [];
            for (var n in t) {
                var r = t[n];
                if (r instanceof Array)for (var o = 0; o < r.length; ++o)e.push(encodeURIComponent(n + "[" + o + "]") + "=" + encodeURIComponent(r[o])); else e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
            }
            return e.join("&")
        }

        t.exports = n
    }, function (t, e) {
        function n(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(e);
            return Object, null != n ? decodeURI(n[2]) : null
        }

        t.exports = n
    }, function (t, e) {
        function n() {
            return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
        }

        function r(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }

        function o(t) {
            for (var e, n = "", r = function (t) {
                return Math.floor(Math.random() * (t[1] - t[0])) + t[0]
            }; t > 0; t--)e = r([[65, 91], [97, 123], [0, 10]][r([0, 3])]), n += e > 10 ? String.fromCharCode(e) : e.toString();
            return n
        }

        function i(t) {
            return t.sort(function () {
                return Math.random() - .5
            })
        }

        function u() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (t) {
                return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16)
            })
        }

        t.exports = {randomColor: n, randomNum: r, randomChars: o, randomSort: i, UUID: u}
    }, function (t, e, n) {
        var r = n(45), o = n(0);
        t.exports = {throttle: o, debounce: r}
    }, function (t, e, n) {
        function r(t, e, n) {
            return void 0 === n ? o(t, e, !1) : o(t, n, !1 !== e)
        }

        var o = n(0);
        t.exports = r
    }, function (t, e) {
        function n(t, e) {
            var n, r, o, i;
            try {
                n = t.toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                r = e.toString().split(".")[1].length
            } catch (t) {
                r = 0
            }
            if (i = Math.abs(n - r), o = Math.pow(10, Math.max(n, r)), i > 0) {
                var u = Math.pow(10, i);
                n > r ? (t = Number(t.toString().replace(".", "")), e = Number(e.toString().replace(".", "")) * u) : (t = Number(t.toString().replace(".", "")) * u, e = Number(e.toString().replace(".", "")))
            } else t = Number(t.toString().replace(".", "")), e = Number(e.toString().replace(".", ""));
            return (t + e) / o
        }

        function r(t, e) {
            var n, r, o, i;
            try {
                n = t.toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                r = e.toString().split(".")[1].length
            } catch (t) {
                r = 0
            }
            return o = Math.pow(10, Math.max(n, r)), i = n >= r ? n : r, ((t * o - e * o) / o).toFixed(i)
        }

        function o(t, e) {
            var n = 0, r = t.toString(), o = e.toString();
            try {
                n += r.split(".")[1].length
            } catch (t) {
            }
            try {
                n += o.split(".")[1].length
            } catch (t) {
            }
            return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n)
        }

        function i(t, e) {
            var n, r, o = 0, i = 0;
            try {
                o = t.toString().split(".")[1].length
            } catch (t) {
            }
            try {
                i = e.toString().split(".")[1].length
            } catch (t) {
            }
            if (Math)return n = Number(t.toString().replace(".", "")), r = Number(e.toString().replace(".", "")), n / r * Math.pow(10, i - o)
        }

        t.exports = {accAdd: n, accSub: r, accMul: o, accDiv: i}
    }, function (t, e) {
        function n(t) {
            t = t.toString();
            var e = document.createElement("form");
            e.id = "copy-" + Date.parse(new Date), e.onsubmit = function () {
                return !1
            }, e.style = "opacity: 0;height: 1px;width: 1px;overflow: hidden;position:fixed;top: -1;left: -1;z-index: -1;", e.innerHTML = '<button onclick=\'story.select();document.execCommand("Copy");\'></button>\n        <textarea name="story">' + t + "</textarea>", document.body.appendChild(e), document.querySelector("#" + e.id + ">button").click(), document.body.removeChild(document.getElementById(e.id))
        }

        t.exports = n
    }, function (t, e, n) {
        var r = n(49), o = n(50), i = n(1);
        t.exports = {getCookie: r, removeCookie: o, setCookie: i}
    }, function (t, e) {
        function n(t) {
            for (var e = document.cookie.replace(/\s/g, "").split(";"), n = 0; n < e.length; n++) {
                var r = e[n].split("=");
                if (r[0] == t)return decodeURIComponent(r[1])
            }
            return ""
        }

        t.exports = n
    }, function (t, e, n) {
        function r(t) {
            o(t, "1", -1)
        }

        var o = n(1);
        t.exports = r
    }])
});
