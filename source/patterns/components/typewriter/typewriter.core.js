/* eslint-disable */

!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define('Typewriter', [], t)
      : typeof exports === 'object'
        ? (exports.Typewriter = t())
        : (e.Typewriter = t());
})(typeof self !== 'undefined' ? self : this, () =>
  (() => {
    const e = {
      75(e) {
        (function () {
          let t;
          let n;
          let r;
          let o;
          let a;
          let i;
          typeof performance !== 'undefined' &&
          performance !== null &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : typeof process !== 'undefined' &&
                process !== null &&
                process.hrtime
              ? ((e.exports = function () {
                  return (t() - a) / 1e6;
                }),
                (n = process.hrtime),
                (o = (t = function () {
                  let e;
                  return 1e9 * (e = n())[0] + e[1];
                })()),
                (i = 1e9 * process.uptime()),
                (a = o - i))
              : Date.now
                ? ((e.exports = function () {
                    return Date.now() - r;
                  }),
                  (r = Date.now()))
                : ((e.exports = function () {
                    return new Date().getTime() - r;
                  }),
                  (r = new Date().getTime()));
        }).call(this);
      },
      4087: (e, t, n) => {
        for (
          var r = n(75),
            o = typeof window === 'undefined' ? n.g : window,
            a = ['moz', 'webkit'],
            i = 'AnimationFrame',
            s = o[`request${i}`],
            u = o[`cancel${i}`] || o[`cancelRequest${i}`],
            l = 0;
          !s && l < a.length;
          l++
        )
          (s = o[`${a[l]}Request${i}`]),
            (u = o[`${a[l]}Cancel${i}`] || o[`${a[l]}CancelRequest${i}`]);
        if (!s || !u) {
          let c = 0;
          let p = 0;
          const d = [];
          (s = function (e) {
            if (d.length === 0) {
              const t = r();
              const n = Math.max(0, 16.666666666666668 - (t - c));
              (c = n + t),
                setTimeout(function () {
                  const e = d.slice(0);
                  d.length = 0;
                  for (let t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(c);
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return d.push({ handle: ++p, callback: e, cancelled: !1 }), p;
          }),
            (u = function (e) {
              for (let t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return s.call(o, e);
        }),
          (e.exports.cancel = function () {
            u.apply(o, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = o),
              (e.requestAnimationFrame = s),
              (e.cancelAnimationFrame = u);
          });
      },
    };
    const t = {};
    function n(r) {
      const o = t[r];
      if (void 0 !== o) return o.exports;
      const a = (t[r] = { exports: {} });
      return e[r].call(a.exports, a, a.exports, n), a.exports;
    }
    (n.n = (e) => {
      const t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (const r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.g = (function () {
        if (typeof globalThis === 'object') return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if (typeof window === 'object') return window;
        }
      })()),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    const r = {};
    return (
      (() => {
        'use strict';

        n.d(r, { default: () => C });
        const e = n(4087);
        const t = n.n(e);
        const o = function (e) {
          return new RegExp(/<[a-z][\s\S]*>/i).test(e);
        };
        const a = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        };
        const i = 'TYPE_CHARACTER';
        const s = 'REMOVE_CHARACTER';
        const u = 'REMOVE_ALL';
        const l = 'REMOVE_LAST_VISIBLE_NODE';
        const c = 'PAUSE_FOR';
        const p = 'CALL_FUNCTION';
        const d = 'ADD_HTML_TAG_ELEMENT';
        const f = 'CHANGE_DELETE_SPEED';
        const v = 'CHANGE_DELAY';
        const h = 'CHANGE_CURSOR';
        const m = 'PASTE_STRING';
        const y = 'HTML_TAG';
        function g(e) {
          return (
            (g =
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      typeof Symbol === 'function' &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            g(e)
          );
        }
        function E(e, t) {
          const n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function w(e) {
          for (let t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2
              ? E(Object(n), !0).forEach(function (t) {
                  A(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : E(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function b(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return T(e);
            })(e) ||
            (function (e) {
              if (
                (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null) ||
                e['@@iterator'] != null
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if (typeof e === 'string') return T(e, t);
                let n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  n === 'Object' && e.constructor && (n = e.constructor.name),
                  n === 'Map' || n === 'Set'
                    ? Array.from(e)
                    : n === 'Arguments' ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? T(e, t)
                      : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        function T(e, t) {
          (t == null || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function S(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, N(r.key), r);
          }
        }
        function A(e, t, n) {
          return (
            (t = N(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function N(e) {
          const t = (function (e, t) {
            if (g(e) !== 'object' || e === null) return e;
            const n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              const r = n.call(e, 'string');
              if (g(r) !== 'object') return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(e);
          })(e);
          return g(t) === 'symbol' ? t : String(t);
        }
        const C = (function () {
          function n(r, g) {
            const E = this;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, n),
              A(this, 'state', {
                cursorAnimation: null,
                lastFrameTime: null,
                pauseUntil: null,
                eventQueue: [],
                eventLoop: null,
                eventLoopPaused: !1,
                reverseCalledEvents: [],
                calledEvents: [],
                visibleNodes: [],
                initialOptions: null,
                elements: {
                  container: null,
                  wrapper: document.createElement('span'),
                  cursor: document.createElement('span'),
                },
              }),
              A(this, 'options', {
                strings: null,
                cursor: '|',
                delay: 'natural',
                pauseFor: 1500,
                deleteSpeed: 'natural',
                loop: !1,
                autoStart: !1,
                devMode: !1,
                skipAddStyles: !1,
                wrapperClassName: 'Typewriter__wrapper',
                cursorClassName: 'Typewriter__cursor',
                stringSplitter: null,
                onCreateTextNode: null,
                onRemoveNode: null,
              }),
              A(this, 'setupWrapperElement', function () {
                E.state.elements.container &&
                  ((E.state.elements.wrapper.className =
                    E.options.wrapperClassName),
                  (E.state.elements.cursor.className =
                    E.options.cursorClassName),
                  (E.state.elements.cursor.innerHTML = E.options.cursor),
                  (E.state.elements.container.innerHTML = ''),
                  E.state.elements.container.appendChild(
                    E.state.elements.wrapper,
                  ),
                  E.state.elements.container.appendChild(
                    E.state.elements.cursor,
                  ));
              }),
              A(this, 'start', function () {
                return (E.state.eventLoopPaused = !1), E.runEventLoop(), E;
              }),
              A(this, 'pause', function () {
                return (E.state.eventLoopPaused = !0), E;
              }),
              A(this, 'stop', function () {
                return (
                  E.state.eventLoop &&
                    ((0, e.cancel)(E.state.eventLoop),
                    (E.state.eventLoop = null)),
                  E
                );
              }),
              A(this, 'pauseFor', function (e) {
                return E.addEventToQueue(c, { ms: e }), E;
              }),
              A(this, 'typeOutAllStrings', function () {
                return typeof E.options.strings === 'string'
                  ? (E.typeString(E.options.strings).pauseFor(
                      E.options.pauseFor,
                    ),
                    E)
                  : (E.options.strings.forEach(function (e) {
                      E.typeString(e)
                        .pauseFor(E.options.pauseFor)
                        .deleteAll(E.options.deleteSpeed);
                    }),
                    E);
              }),
              A(this, 'typeString', function (e) {
                const t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if (o(e)) return E.typeOutHTMLString(e, t);
                if (e) {
                  const n = (E.options || {}).stringSplitter;
                  const r = typeof n === 'function' ? n(e) : e.split('');
                  E.typeCharacters(r, t);
                }
                return E;
              }),
              A(this, 'pasteString', function (e) {
                const t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                return o(e)
                  ? E.typeOutHTMLString(e, t, !0)
                  : (e && E.addEventToQueue(m, { character: e, node: t }), E);
              }),
              A(this, 'typeOutHTMLString', function (e) {
                const t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                const n = arguments.length > 2 ? arguments[2] : void 0;
                const r = (function (e) {
                  const t = document.createElement('div');
                  return (t.innerHTML = e), t.childNodes;
                })(e);
                if (r.length > 0)
                  for (let o = 0; o < r.length; o++) {
                    const a = r[o];
                    const i = a.innerHTML;
                    a && a.nodeType !== 3
                      ? ((a.innerHTML = ''),
                        E.addEventToQueue(d, { node: a, parentNode: t }),
                        n ? E.pasteString(i, a) : E.typeString(i, a))
                      : a.textContent &&
                        (n
                          ? E.pasteString(a.textContent, t)
                          : E.typeString(a.textContent, t));
                  }
                return E;
              }),
              A(this, 'deleteAll', function () {
                const e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'natural';
                return E.addEventToQueue(u, { speed: e }), E;
              }),
              A(this, 'changeDeleteSpeed', function (e) {
                if (!e) throw new Error('Must provide new delete speed');
                return E.addEventToQueue(f, { speed: e }), E;
              }),
              A(this, 'changeDelay', function (e) {
                if (!e) throw new Error('Must provide new delay');
                return E.addEventToQueue(v, { delay: e }), E;
              }),
              A(this, 'changeCursor', function (e) {
                if (!e) throw new Error('Must provide new cursor');
                return E.addEventToQueue(h, { cursor: e }), E;
              }),
              A(this, 'deleteChars', function (e) {
                if (!e)
                  throw new Error(
                    'Must provide amount of characters to delete',
                  );
                for (let t = 0; t < e; t++) E.addEventToQueue(s);
                return E;
              }),
              A(this, 'callFunction', function (e, t) {
                if (!e || typeof e !== 'function')
                  throw new Error('Callback must be a function');
                return E.addEventToQueue(p, { cb: e, thisArg: t }), E;
              }),
              A(this, 'typeCharacters', function (e) {
                const t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                if (!e || !Array.isArray(e))
                  throw new Error('Characters must be an array');
                return (
                  e.forEach(function (e) {
                    E.addEventToQueue(i, { character: e, node: t });
                  }),
                  E
                );
              }),
              A(this, 'removeCharacters', function (e) {
                if (!e || !Array.isArray(e))
                  throw new Error('Characters must be an array');
                return (
                  e.forEach(function () {
                    E.addEventToQueue(s);
                  }),
                  E
                );
              }),
              A(this, 'addEventToQueue', function (e, t) {
                const n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return E.addEventToStateProperty(e, t, n, 'eventQueue');
              }),
              A(this, 'addReverseCalledEvent', function (e, t) {
                const n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return E.options.loop
                  ? E.addEventToStateProperty(e, t, n, 'reverseCalledEvents')
                  : E;
              }),
              A(this, 'addEventToStateProperty', function (e, t) {
                const n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                const r = arguments.length > 3 ? arguments[3] : void 0;
                const o = { eventName: e, eventArgs: t || {} };
                return (
                  (E.state[r] = n
                    ? [o].concat(b(E.state[r]))
                    : [].concat(b(E.state[r]), [o])),
                  E
                );
              }),
              A(this, 'runEventLoop', function () {
                E.state.lastFrameTime || (E.state.lastFrameTime = Date.now());
                const e = Date.now();
                const n = e - E.state.lastFrameTime;
                if (!E.state.eventQueue.length) {
                  if (!E.options.loop) return;
                  (E.state.eventQueue = b(E.state.calledEvents)),
                    (E.state.calledEvents = []),
                    (E.options = w({}, E.state.initialOptions));
                }
                if (
                  ((E.state.eventLoop = t()(E.runEventLoop)),
                  !E.state.eventLoopPaused)
                ) {
                  if (E.state.pauseUntil) {
                    if (e < E.state.pauseUntil) return;
                    E.state.pauseUntil = null;
                  }
                  let r;
                  const o = b(E.state.eventQueue);
                  const g = o.shift();
                  if (
                    !(
                      n <=
                      (r =
                        g.eventName === l || g.eventName === s
                          ? E.options.deleteSpeed === 'natural'
                            ? a(40, 80)
                            : E.options.deleteSpeed
                          : E.options.delay === 'natural'
                            ? a(120, 160)
                            : E.options.delay)
                    )
                  ) {
                    const T = g.eventName;
                    const S = g.eventArgs;
                    switch (
                      (E.logInDevMode({
                        currentEvent: g,
                        state: E.state,
                        delay: r,
                      }),
                      T)
                    ) {
                      case m:
                      case i:
                        var A = S.character;
                        var N = S.node;
                        var C = document.createTextNode(A);
                        var _ = C;
                        E.options.onCreateTextNode &&
                          typeof E.options.onCreateTextNode === 'function' &&
                          (_ = E.options.onCreateTextNode(A, C)),
                          _ &&
                            (N
                              ? N.appendChild(_)
                              : E.state.elements.wrapper.appendChild(_)),
                          (E.state.visibleNodes = [].concat(
                            b(E.state.visibleNodes),
                            [{ type: 'TEXT_NODE', character: A, node: _ }],
                          ));
                        break;
                      case s:
                        o.unshift({
                          eventName: l,
                          eventArgs: { removingCharacterNode: !0 },
                        });
                        break;
                      case c:
                        var O = g.eventArgs.ms;
                        E.state.pauseUntil = Date.now() + parseInt(O);
                        break;
                      case p:
                        var L = g.eventArgs;
                        var D = L.cb;
                        var M = L.thisArg;
                        D.call(M, { elements: E.state.elements });
                        break;
                      case d:
                        var x = g.eventArgs;
                        var P = x.node;
                        var j = x.parentNode;
                        j
                          ? j.appendChild(P)
                          : E.state.elements.wrapper.appendChild(P),
                          (E.state.visibleNodes = [].concat(
                            b(E.state.visibleNodes),
                            [
                              {
                                type: y,
                                node: P,
                                parentNode: j || E.state.elements.wrapper,
                              },
                            ],
                          ));
                        break;
                      case u:
                        var R = E.state.visibleNodes;
                        var k = S.speed;
                        var Q = [];
                        k &&
                          Q.push({
                            eventName: f,
                            eventArgs: { speed: k, temp: !0 },
                          });
                        for (let F = 0, H = R.length; F < H; F++)
                          Q.push({
                            eventName: l,
                            eventArgs: { removingCharacterNode: !1 },
                          });
                        k &&
                          Q.push({
                            eventName: f,
                            eventArgs: {
                              speed: E.options.deleteSpeed,
                              temp: !0,
                            },
                          }),
                          o.unshift.apply(o, Q);
                        break;
                      case l:
                        var I = g.eventArgs.removingCharacterNode;
                        if (E.state.visibleNodes.length) {
                          const U = E.state.visibleNodes.pop();
                          const q = U.type;
                          const G = U.node;
                          const Y = U.character;
                          E.options.onRemoveNode &&
                            typeof E.options.onRemoveNode === 'function' &&
                            E.options.onRemoveNode({ node: G, character: Y }),
                            G && G.parentNode.removeChild(G),
                            q === y &&
                              I &&
                              o.unshift({ eventName: l, eventArgs: {} });
                        }
                        break;
                      case f:
                        E.options.deleteSpeed = g.eventArgs.speed;
                        break;
                      case v:
                        E.options.delay = g.eventArgs.delay;
                        break;
                      case h:
                        (E.options.cursor = g.eventArgs.cursor),
                          (E.state.elements.cursor.innerHTML =
                            g.eventArgs.cursor);
                    }
                    E.options.loop &&
                      (g.eventName === l ||
                        (g.eventArgs && g.eventArgs.temp) ||
                        (E.state.calledEvents = [].concat(
                          b(E.state.calledEvents),
                          [g],
                        ))),
                      (E.state.eventQueue = o),
                      (E.state.lastFrameTime = e);
                  }
                }
              }),
              r)
            )
              if (typeof r === 'string') {
                const T = document.querySelector(r);
                if (!T) throw new Error('Could not find container element');
                this.state.elements.container = T;
              } else this.state.elements.container = r;
            g && (this.options = w(w({}, this.options), g)),
              (this.state.initialOptions = w({}, this.options)),
              this.init();
          }
          let r;
          let g;
          return (
            (r = n),
            (g = [
              {
                key: 'init',
                value() {
                  let e;
                  let t;
                  this.setupWrapperElement(),
                    this.addEventToQueue(
                      h,
                      { cursor: this.options.cursor },
                      !0,
                    ),
                    this.addEventToQueue(u, null, !0),
                    !window ||
                      window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                      this.options.skipAddStyles ||
                      ((e =
                        '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'),
                      (t = document.createElement('style')).appendChild(
                        document.createTextNode(e),
                      ),
                      document.head.appendChild(t),
                      (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                    !0 === this.options.autoStart &&
                      this.options.strings &&
                      this.typeOutAllStrings().start();
                },
              },
              {
                key: 'logInDevMode',
                value(e) {
                  this.options.devMode && console.log(e);
                },
              },
            ]) && S(r.prototype, g),
            Object.defineProperty(r, 'prototype', { writable: !1 }),
            n
          );
        })();
      })(),
      r.default
    );
  })(),
);
// # sourceMappingURL=core.js.map
