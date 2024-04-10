var Mr = { exports: {} }, Ge = {}, hr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Ut() {
  if (ct)
    return g;
  ct = 1;
  var b = Symbol.for("react.element"), d = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), Z = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), q = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = q && n[q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, ge = {};
  function oe(n, s, h) {
    this.props = n, this.context = s, this.refs = ge, this.updater = h || H;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = oe.prototype;
  function j(n, s, h) {
    this.props = n, this.context = s, this.refs = ge, this.updater = h || H;
  }
  var ce = j.prototype = new ee();
  ce.constructor = j, se(ce, oe.prototype), ce.isPureReactComponent = !0;
  var fe = Array.isArray, N = Object.prototype.hasOwnProperty, K = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function le(n, s, h) {
    var C, _ = {}, k = null, x = null;
    if (s != null)
      for (C in s.ref !== void 0 && (x = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        N.call(s, C) && !ie.hasOwnProperty(C) && (_[C] = s[C]);
    var O = arguments.length - 2;
    if (O === 1)
      _.children = h;
    else if (1 < O) {
      for (var S = Array(O), G = 0; G < O; G++)
        S[G] = arguments[G + 2];
      _.children = S;
    }
    if (n && n.defaultProps)
      for (C in O = n.defaultProps, O)
        _[C] === void 0 && (_[C] = O[C]);
    return { $$typeof: b, type: n, key: k, ref: x, props: _, _owner: K.current };
  }
  function ve(n, s) {
    return { $$typeof: b, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function be(n) {
    return typeof n == "object" && n !== null && n.$$typeof === b;
  }
  function Oe(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var _e = /\/+/g;
  function J(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Oe("" + n.key) : s.toString(36);
  }
  function re(n, s, h, C, _) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var x = !1;
    if (n === null)
      x = !0;
    else
      switch (k) {
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case b:
            case d:
              x = !0;
          }
      }
    if (x)
      return x = n, _ = _(x), n = C === "" ? "." + J(x, 0) : C, fe(_) ? (h = "", n != null && (h = n.replace(_e, "$&/") + "/"), re(_, s, h, "", function(G) {
        return G;
      })) : _ != null && (be(_) && (_ = ve(_, h + (!_.key || x && x.key === _.key ? "" : ("" + _.key).replace(_e, "$&/") + "/") + n)), s.push(_)), 1;
    if (x = 0, C = C === "" ? "." : C + ":", fe(n))
      for (var O = 0; O < n.length; O++) {
        k = n[O];
        var S = C + J(k, O);
        x += re(k, s, h, S, _);
      }
    else if (S = ae(n), typeof S == "function")
      for (n = S.call(n), O = 0; !(k = n.next()).done; )
        k = k.value, S = C + J(k, O++), x += re(k, s, h, S, _);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return x;
  }
  function B(n, s, h) {
    if (n == null)
      return n;
    var C = [], _ = 0;
    return re(n, C, "", "", function(k) {
      return s.call(h, k, _++);
    }), C;
  }
  function de(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var p = { current: null }, ye = { transition: null }, Pe = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: ye, ReactCurrentOwner: K };
  return g.Children = { map: B, forEach: function(n, s, h) {
    B(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return B(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return B(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!be(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = oe, g.Fragment = te, g.Profiler = U, g.PureComponent = j, g.StrictMode = V, g.Suspense = D, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = se({}, n.props), _ = n.key, k = n.ref, x = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, x = K.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var O = n.type.defaultProps;
      for (S in s)
        N.call(s, S) && !ie.hasOwnProperty(S) && (C[S] = s[S] === void 0 && O !== void 0 ? O[S] : s[S]);
    }
    var S = arguments.length - 2;
    if (S === 1)
      C.children = h;
    else if (1 < S) {
      O = Array(S);
      for (var G = 0; G < S; G++)
        O[G] = arguments[G + 2];
      C.children = O;
    }
    return { $$typeof: b, type: n.type, key: _, ref: k, props: C, _owner: x };
  }, g.createContext = function(n) {
    return n = { $$typeof: Z, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: W, _context: n }, n.Consumer = n;
  }, g.createElement = le, g.createFactory = function(n) {
    var s = le.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Y, render: n };
  }, g.isValidElement = be, g.lazy = function(n) {
    return { $$typeof: I, _payload: { _status: -1, _result: n }, _init: de };
  }, g.memo = function(n, s) {
    return { $$typeof: ne, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = ye.transition;
    ye.transition = {};
    try {
      n();
    } finally {
      ye.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return p.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return p.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return p.current.useEffect(n, s);
  }, g.useId = function() {
    return p.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return p.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return p.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return p.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return p.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return p.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return p.current.useRef(n);
  }, g.useState = function(n) {
    return p.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return p.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return p.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var ft;
function Wt() {
  return ft || (ft = 1, function(b, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var te = "18.2.0", V = Symbol.for("react.element"), U = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), ne = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), oe = Symbol.iterator, ee = "@@iterator";
      function j(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ee];
        return typeof r == "function" ? r : null;
      }
      var ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {}, le = null;
      function ve(e) {
        le = e;
      }
      ie.setExtraStackFrame = function(e) {
        le = e;
      }, ie.getCurrentStack = null, ie.getStackAddendum = function() {
        var e = "";
        le && (e += le);
        var r = ie.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var be = !1, Oe = !1, _e = !1, J = !1, re = !1, B = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: fe,
        ReactCurrentOwner: K
      };
      B.ReactDebugCurrentFrame = ie, B.ReactCurrentActQueue = N;
      function de(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ye("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ye("error", e, a);
        }
      }
      function ye(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, u = o.getStackAddendum();
          u !== "" && (r += "%s", a = a.concat([u]));
          var v = a.map(function(l) {
            return String(l);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Pe = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", u = o + "." + r;
          if (Pe[u])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Pe[u] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, x = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in k)
          k.hasOwnProperty(O) && x(O, k[O]);
      }
      function S() {
      }
      S.prototype = _.prototype;
      function G(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var Re = G.prototype = new S();
      Re.constructor = G, h(Re, _.prototype), Re.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function Le(e) {
        return Xe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ne(e) {
        try {
          return ke(e), !1;
        } catch {
          return !0;
        }
      }
      function ke(e) {
        return "" + e;
      }
      function je(e) {
        if (Ne(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), ke(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var u = r.displayName || r.name || "";
        return u !== "" ? a + "(" + u + ")" : a;
      }
      function xe(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case W:
            return "Fragment";
          case U:
            return "Portal";
          case Y:
            return "Profiler";
          case Z:
            return "StrictMode";
          case q:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ne:
              var r = e;
              return xe(r) + ".Consumer";
            case D:
              var a = e;
              return xe(a._context) + ".Provider";
            case I:
              return Qe(e, e.render, "ForwardRef");
            case H:
              var o = e.displayName || null;
              return o !== null ? o : he(e.type) || "Memo";
            case se: {
              var u = e, v = u._payload, l = u._init;
              try {
                return he(l(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Ve;
      Ve = {};
      function Be(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function we(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          Ze || (Ze = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && K.current && e.__self && K.current.stateNode !== e.__self) {
          var r = he(K.current.type);
          Ve[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ve[r] = !0);
        }
      }
      var $e = function(e, r, a, o, u, v, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: V,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function _r(e, r, a) {
        var o, u = {}, v = null, l = null, y = null, R = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), we(r) && (je(r.key), v = "" + r.key), y = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Ae.call(r, o) && !Me.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          u.children = a;
        else if (P > 1) {
          for (var A = Array(P), $ = 0; $ < P; $++)
            A[$] = arguments[$ + 2];
          Object.freeze && Object.freeze(A), u.children = A;
        }
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (o in L)
            u[o] === void 0 && (u[o] = L[o]);
        }
        if (v || l) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && br(u, z), l && rr(u, z);
        }
        return $e(e, v, l, y, R, K.current, u);
      }
      function Er(e, r) {
        var a = $e(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = h({}, e.props), v = e.key, l = e.ref, y = e._self, R = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, P = K.current), we(r) && (je(r.key), v = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            Ae.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? u[o] = A[o] : u[o] = r[o]);
        }
        var $ = arguments.length - 2;
        if ($ === 1)
          u.children = a;
        else if ($ > 1) {
          for (var L = Array($), z = 0; z < $; z++)
            L[z] = arguments[z + 2];
          u.children = L;
        }
        return $e(e.type, v, l, y, R, P, u);
      }
      function Ce(e) {
        return typeof e == "object" && e !== null && e.$$typeof === V;
      }
      var nr = ".", wr = ":";
      function Cr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(u) {
          return a[u];
        });
        return "$" + o;
      }
      var Ue = !1, ar = /\/+/g;
      function Ee(e) {
        return e.replace(ar, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function Se(e, r, a, o, u) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (v) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case V:
                case U:
                  l = !0;
              }
          }
        if (l) {
          var y = e, R = u(y), P = o === "" ? nr + De(y, 0) : o;
          if (Le(R)) {
            var A = "";
            P != null && (A = Ee(P) + "/"), Se(R, r, A, "", function(Vt) {
              return Vt;
            });
          } else
            R != null && (Ce(R) && (R.key && (!y || y.key !== R.key) && je(R.key), R = Er(
              R,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (R.key && (!y || y.key !== R.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ee("" + R.key) + "/"
              ) : "") + P
            )), r.push(R));
          return 1;
        }
        var $, L, z = 0, Q = o === "" ? nr : o + wr;
        if (Le(e))
          for (var yr = 0; yr < e.length; yr++)
            $ = e[yr], L = Q + De($, yr), z += Se($, r, a, L, u);
        else {
          var Nr = j(e);
          if (typeof Nr == "function") {
            var it = e;
            Nr === it.entries && (Ue || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ue = !0);
            for (var Nt = Nr.call(it), ut, Mt = 0; !(ut = Nt.next()).done; )
              $ = ut.value, L = Q + De($, Mt++), z += Se($, r, a, L, u);
          } else if (v === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return z;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return Se(e, o, "", "", function(v) {
          return r.call(a, v, u++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function ir(e) {
        if (!Ce(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: ne,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: D,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var v = {
            $$typeof: ne,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                u || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), u = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = qe, l._result = v;
            }
          }, function(v) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = Or, l._result = v;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var u = e._result;
          return u === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Pr
        };
        {
          var o, u;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === H ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: I,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === W || e === Y || re || e === Z || e === q || e === ae || J || e === ge || be || Oe || _e || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === H || e.$$typeof === D || e.$$typeof === ne || e.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: H,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return a;
      }
      function f() {
        var e = ce.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function w(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function T(e) {
        var r = f();
        return r.useState(e);
      }
      function E(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function X(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function F(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function M(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function ue(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Te(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function pe(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function yt() {
        var e = f();
        return e.useTransition();
      }
      function ht(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function mt() {
        var e = f();
        return e.useId();
      }
      function gt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Ur, Wr, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function bt() {
        {
          if (He === 0) {
            Vr = console.log, Ur = console.info, Wr = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function _t() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Vr
              }),
              info: h({}, e, {
                value: Ur
              }),
              warn: h({}, e, {
                value: Wr
              }),
              error: h({}, e, {
                value: Yr
              }),
              group: h({}, e, {
                value: Br
              }),
              groupCollapsed: h({}, e, {
                value: zr
              }),
              groupEnd: h({}, e, {
                value: qr
              })
            });
          }
          He < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = B.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (u) {
              var o = u.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var $r = !1, fr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new Et();
      }
      function Gr(e, r) {
        if (!e || $r)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        $r = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = xr.current, xr.current = null, bt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (Q) {
                o = Q;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (Q) {
                o = Q;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Q) {
              o = Q;
            }
            e();
          }
        } catch (Q) {
          if (Q && o && typeof Q.stack == "string") {
            for (var y = Q.stack.split(`
`), R = o.stack.split(`
`), P = y.length - 1, A = R.length - 1; P >= 1 && A >= 0 && y[P] !== R[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== R[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== R[A]) {
                      var $ = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, $), $;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          $r = !1, xr.current = v, _t(), Error.prepareStackTrace = u;
        }
        var L = e ? e.displayName || e.name : "", z = L ? cr(L) : "";
        return typeof e == "function" && fr.set(e, z), z;
      }
      function Rt(e, r, a) {
        return Gr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, wt(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case q:
            return cr("Suspense");
          case ae:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              return Rt(e.render);
            case H:
              return lr(e.type, r, a);
            case se: {
              var o = e, u = o._payload, v = o._init;
              try {
                return lr(v(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = B.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(a);
        } else
          Jr.setExtraStackFrame(null);
      }
      function Ct(e, r, a, o, u) {
        {
          var v = Function.call.bind(Ae);
          for (var l in e)
            if (v(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (dr(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), dr(null)), y instanceof Error && !(y.message in Kr) && (Kr[y.message] = !0, dr(u), p("Failed %s type: %s", a, y.message), dr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          ve(a);
        } else
          ve(null);
      }
      var Dr;
      Dr = !1;
      function Xr() {
        if (K.current) {
          var e = he(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var Qr = {};
      function Ot(e) {
        var r = Xr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Zr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== K.current && (o = " It was passed a child from " + he(e._owner.type) + "."), We(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Ce(o) && Zr(o, r);
            }
          else if (Ce(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = j(e);
            if (typeof u == "function" && u !== e.entries)
              for (var v = u.call(e), l; !(l = v.next()).done; )
                Ce(l.value) && Zr(l.value, r);
          }
        }
      }
      function rt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === H))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = he(r);
            Ct(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var u = he(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function tt(e, r, a) {
        var o = i(e);
        if (!o) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Tt(r);
          v ? u += v : u += Xr();
          var l;
          e === null ? l = "null" : Le(e) ? l = "array" : e !== void 0 && e.$$typeof === V ? (l = "<" + (he(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, u);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            et(arguments[R], e);
        return e === W ? Pt(y) : rt(y), y;
      }
      var nt = !1;
      function kt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = Rr.apply(this, arguments), u = 2; u < arguments.length; u++)
          et(arguments[u], o.type);
        return rt(o), o;
      }
      function xt(e, r) {
        var a = fe.transition;
        fe.transition = {};
        var o = fe.transition;
        fe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (fe.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, pr = null;
      function At(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = b && b[r];
            pr = a.call(b, "timers").setImmediate;
          } catch {
            pr = function(u) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = u, v.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ye = 0, ot = !1;
      function $t(e) {
        {
          var r = Ye;
          Ye++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var u = N.current;
              u !== null && (N.didScheduleLegacyUpdate = !1, Lr(u));
            }
          } catch (L) {
            throw vr(r), L;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, l = !1, y = {
              then: function(L, z) {
                l = !0, v.then(function(Q) {
                  vr(r), Ye === 0 ? Ir(Q, L, z) : L(Q);
                }, function(Q) {
                  vr(r), z(Q);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ot = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var R = o;
            if (vr(r), Ye === 0) {
              var P = N.current;
              P !== null && (Lr(P), N.current = null);
              var A = {
                then: function(L, z) {
                  N.current === null ? (N.current = [], Ir(R, L, z)) : L(R);
                }
              };
              return A;
            } else {
              var $ = {
                then: function(L, z) {
                  L(R);
                }
              };
              return $;
            }
          }
        }
      }
      function vr(e) {
        e !== Ye - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Ir(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              Lr(o), At(function() {
                o.length === 0 ? (N.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var Fr = !1;
      function Lr(e) {
        if (!Fr) {
          Fr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Fr = !1;
          }
        }
      }
      var Dt = tt, It = jt, Ft = kt, Lt = {
        map: Ie,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ir
      };
      d.Children = Lt, d.Component = _, d.Fragment = W, d.Profiler = Y, d.PureComponent = G, d.StrictMode = Z, d.Suspense = q, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, d.cloneElement = It, d.createContext = ur, d.createElement = Dt, d.createFactory = Ft, d.createRef = mr, d.forwardRef = jr, d.isValidElement = Ce, d.lazy = kr, d.memo = c, d.startTransition = xt, d.unstable_act = $t, d.useCallback = ue, d.useContext = w, d.useDebugValue = pe, d.useDeferredValue = ht, d.useEffect = X, d.useId = mt, d.useImperativeHandle = sr, d.useInsertionEffect = F, d.useLayoutEffect = M, d.useMemo = Te, d.useReducer = E, d.useRef = m, d.useState = T, d.useSyncExternalStore = gt, d.useTransition = yt, d.version = te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var lt;
function vt() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? hr.exports = Ut() : hr.exports = Wt()), hr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Yt() {
  if (dt)
    return Ge;
  dt = 1;
  var b = vt(), d = Symbol.for("react.element"), te = Symbol.for("react.fragment"), V = Object.prototype.hasOwnProperty, U = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(Y, D, ne) {
    var I, q = {}, ae = null, H = null;
    ne !== void 0 && (ae = "" + ne), D.key !== void 0 && (ae = "" + D.key), D.ref !== void 0 && (H = D.ref);
    for (I in D)
      V.call(D, I) && !W.hasOwnProperty(I) && (q[I] = D[I]);
    if (Y && Y.defaultProps)
      for (I in D = Y.defaultProps, D)
        q[I] === void 0 && (q[I] = D[I]);
    return { $$typeof: d, type: Y, key: ae, ref: H, props: q, _owner: U.current };
  }
  return Ge.Fragment = te, Ge.jsx = Z, Ge.jsxs = Z, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Bt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var b = vt(), d = Symbol.for("react.element"), te = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), Y = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), se = Symbol.iterator, ge = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = se && t[se] || t[ge];
      return typeof i == "function" ? i : null;
    }
    var ee = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        ce("error", t, c);
      }
    }
    function ce(t, i, c) {
      {
        var f = ee.ReactDebugCurrentFrame, w = f.getStackAddendum();
        w !== "" && (i += "%s", c = c.concat([w]));
        var T = c.map(function(E) {
          return String(E);
        });
        T.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var fe = !1, N = !1, K = !1, ie = !1, le = !1, ve;
    ve = Symbol.for("react.module.reference");
    function be(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === V || t === W || le || t === U || t === ne || t === I || ie || t === H || fe || N || K || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === q || t.$$typeof === Z || t.$$typeof === Y || t.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ve || t.getModuleId !== void 0));
    }
    function Oe(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var w = i.displayName || i.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function _e(t) {
      return t.displayName || "Context";
    }
    function J(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case V:
          return "Fragment";
        case te:
          return "Portal";
        case W:
          return "Profiler";
        case U:
          return "StrictMode";
        case ne:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Y:
            var i = t;
            return _e(i) + ".Consumer";
          case Z:
            var c = t;
            return _e(c._context) + ".Provider";
          case D:
            return Oe(t, t.render, "ForwardRef");
          case q:
            var f = t.displayName || null;
            return f !== null ? f : J(t.type) || "Memo";
          case ae: {
            var w = t, T = w._payload, E = w._init;
            try {
              return J(E(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, B = 0, de, p, ye, Pe, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function _() {
      {
        if (B === 0) {
          de = console.log, p = console.info, ye = console.warn, Pe = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function k() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, t, {
              value: de
            }),
            info: re({}, t, {
              value: p
            }),
            warn: re({}, t, {
              value: ye
            }),
            error: re({}, t, {
              value: Pe
            }),
            group: re({}, t, {
              value: n
            }),
            groupCollapsed: re({}, t, {
              value: s
            }),
            groupEnd: re({}, t, {
              value: h
            })
          });
        }
        B < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = ee.ReactCurrentDispatcher, O;
    function S(t, i, c) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (w) {
            var f = w.stack.trim().match(/\n( *(at )?)/);
            O = f && f[1] || "";
          }
        return `
` + O + t;
      }
    }
    var G = !1, Re;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new mr();
    }
    function Xe(t, i) {
      if (!t || G)
        return "";
      {
        var c = Re.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      G = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = x.current, x.current = null, _();
      try {
        if (i) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (pe) {
              f = pe;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (pe) {
              f = pe;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            f = pe;
          }
          t();
        }
      } catch (pe) {
        if (pe && f && typeof pe.stack == "string") {
          for (var m = pe.stack.split(`
`), X = f.stack.split(`
`), F = m.length - 1, M = X.length - 1; F >= 1 && M >= 0 && m[F] !== X[M]; )
            M--;
          for (; F >= 1 && M >= 0; F--, M--)
            if (m[F] !== X[M]) {
              if (F !== 1 || M !== 1)
                do
                  if (F--, M--, M < 0 || m[F] !== X[M]) {
                    var ue = `
` + m[F].replace(" at new ", " at ");
                    return t.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", t.displayName)), typeof t == "function" && Re.set(t, ue), ue;
                  }
                while (F >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        G = !1, x.current = T, k(), Error.prepareStackTrace = w;
      }
      var Te = t ? t.displayName || t.name : "", sr = Te ? S(Te) : "";
      return typeof t == "function" && Re.set(t, sr), sr;
    }
    function Le(t, i, c) {
      return Xe(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ne(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, gr(t));
      if (typeof t == "string")
        return S(t);
      switch (t) {
        case ne:
          return S("Suspense");
        case I:
          return S("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case D:
            return Le(t.render);
          case q:
            return Ne(t.type, i, c);
          case ae: {
            var f = t, w = f._payload, T = f._init;
            try {
              return Ne(T(w), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, je = {}, Qe = ee.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function he(t, i, c, f, w) {
      {
        var T = Function.call.bind(ke);
        for (var E in t)
          if (T(t, E)) {
            var m = void 0;
            try {
              if (typeof t[E] != "function") {
                var X = Error((f || "React class") + ": " + c + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              m = t[E](i, E, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              m = F;
            }
            m && !(m instanceof Error) && (xe(w), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, E, typeof m), xe(null)), m instanceof Error && !(m.message in je) && (je[m.message] = !0, xe(w), j("Failed %s type: %s", c, m.message), xe(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Me(t) {
      return Ae(t);
    }
    function Ze(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Ve(t), !1;
      } catch {
        return !0;
      }
    }
    function Ve(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ve(t);
    }
    var we = ee.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, $e;
    $e = {};
    function _r(t) {
      if (ke.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (ke.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, i) {
      if (typeof t.ref == "string" && we.current && i && we.current.stateNode !== i) {
        var c = J(we.current.type);
        $e[c] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(we.current.type), t.ref), $e[c] = !0);
      }
    }
    function Ce(t, i) {
      {
        var c = function() {
          rr || (rr = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, i) {
      {
        var c = function() {
          tr || (tr = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, i, c, f, w, T, E) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: E,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Cr(t, i, c, f, w) {
      {
        var T, E = {}, m = null, X = null;
        c !== void 0 && (Be(c), m = "" + c), Er(i) && (Be(i.key), m = "" + i.key), _r(i) && (X = i.ref, Rr(i, w));
        for (T in i)
          ke.call(i, T) && !br.hasOwnProperty(T) && (E[T] = i[T]);
        if (t && t.defaultProps) {
          var F = t.defaultProps;
          for (T in F)
            E[T] === void 0 && (E[T] = F[T]);
        }
        if (m || X) {
          var M = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && Ce(E, M), X && nr(E, M);
        }
        return wr(t, m, X, w, f, we.current, E);
      }
    }
    var Ue = ee.ReactCurrentOwner, ar = ee.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Se(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Ie() {
      {
        if (Ue.current) {
          var t = J(Ue.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Tr(t) {
      {
        var i = Ie();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function ir(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(i);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Ue.current && (f = " It was passed a child from " + J(t._owner.type) + "."), Ee(t), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), Ee(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            Se(f) && ir(f, i);
          }
        else if (Se(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = oe(t);
          if (typeof w == "function" && w !== t.entries)
            for (var T = w.call(t), E; !(E = T.next()).done; )
              Se(E.value) && ir(E.value, i);
        }
      }
    }
    function Fe(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === q))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = J(i);
          he(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !De) {
          De = !0;
          var w = J(i);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            Ee(t), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), Ee(null);
            break;
          }
        }
        t.ref !== null && (Ee(t), j("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    function qe(t, i, c, f, w, T) {
      {
        var E = be(t);
        if (!E) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Sr(w);
          X ? m += X : m += Ie();
          var F;
          t === null ? F = "null" : Me(t) ? F = "array" : t !== void 0 && t.$$typeof === d ? (F = "<" + (J(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : F = typeof t, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, m);
        }
        var M = Cr(t, i, c, w, T);
        if (M == null)
          return M;
        if (E) {
          var ue = i.children;
          if (ue !== void 0)
            if (f)
              if (Me(ue)) {
                for (var Te = 0; Te < ue.length; Te++)
                  ur(ue[Te], t);
                Object.freeze && Object.freeze(ue);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(ue, t);
        }
        return t === V ? ze(M) : Fe(M), M;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = V, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Mr.exports = Yt() : Mr.exports = Bt();
var me = Mr.exports;
const zt = ({ width: b, color: d = "#04001b", style: te, cornerRadius: V }) => {
  if (isNaN(b) || b <= 0)
    throw new Error("Width must be a positive number");
  if (V != null && (V <= 0 || V > b / 3))
    throw new Error("Corner radius must be a positive number and less than one third the width");
  const U = V ? V * 2 : b / 3, W = te == "fill-square" ? b - U : Math.tan(60 * Math.PI / 180) * ((b - U) / 2), Z = W + U, Y = `M${U / 2},${W + U / 2} L${b / 2},${U / 2} L${b - U / 2},${W + U / 2} Z`;
  return me.jsx("svg", { width: b, height: Z, viewBox: `0 0 ${b} ${Z}`, xmlns: "http://www.w3.org/2000/svg", children: me.jsx("path", { d: Y, fill: d, stroke: d, strokeWidth: U, strokeLinejoin: "round" }) });
}, qt = ({ strokeWidth: b, percentage: d, indicatorPercentage: te, strokeColor: V = "#04001b", indicatorColor: U = "#04001b", width: W = 100, indicatorRelativeSize: Z, strokeLinecap: Y, percentageSeparator: D, includeText: ne = !1, fontStyle: I, hasBackground: q = !0, bgStrokeColor: ae = "#d3d3d3" }) => {
  if (d < 0 || d > 100)
    throw new Error("Percentage must be between 0 and 100");
  if (te != null && (te < 0 || te > 100))
    throw new Error("Indicator percentage must be between 0 and 100");
  if (isNaN(b) || b <= 0)
    throw new Error("Stroke width must be a positive number");
  if (isNaN(W) || W <= 0)
    throw new Error("Size must be a positive number");
  const H = b * (Z || 0.6), se = b * 0.1, ge = te !== void 0, oe = ge ? H + se : 0, ee = W - b - oe * 2, j = ee / 2, ce = 1.1 * Math.PI * j, fe = ce - d / 100 * ce, N = 0, K = b / 2 + oe, ie = j + b / 2 + oe, le = K + ee / 2, ve = `M${K},${ie} a1,1 0 0,1 ${ee},0`, be = "equilateral", Oe = ee / 2 + b / 2 + se, _e = (te || 0) / 100 * 180, J = me.jsx(zt, { width: H, color: U, style: be }), re = me.jsxs("g", { transform: `rotate(${_e}, ${le}, ${ie}) translate(-${Oe})`, children: [" ", me.jsxs("g", { transform: `translate(${le}, ${ie - H / 2}) rotate(90)`, children: [" ", J] })] }), B = ie + (Y === "round" || Y === "square" ? b / 2 : H / 2);
  return me.jsxs("svg", { width: W, height: B, viewBox: `0 0 ${W} ${B}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "_half-circular-progress", children: [q && me.jsx("path", { d: ve, style: {
    transition: "stroke-dashoffset 0.35s",
    stroke: ae,
    strokeLinecap: Y || "round",
    strokeDasharray: `${ce}`,
    strokeDashoffset: `${N}`,
    strokeWidth: `${b}`
  }, fill: "none" }), me.jsx("path", { d: ve, style: {
    transition: "stroke-dashoffset 0.35s",
    stroke: V,
    strokeLinecap: Y || "round",
    strokeDasharray: `${ce}`,
    strokeDashoffset: `${fe}`,
    strokeWidth: `${b}`
  }, fill: "none" }), ge && re, me.jsx("animate", { attributeName: "stroke-dashoffset", from: "283", to: "0", dur: "1s", fill: "freeze" }), ne && me.jsxs("text", { x: "50%", y: "98%", textAnchor: "middle", fontSize: "90", fontFamily: "Arial", fill: "#04001b", style: {
    ...I
  }, children: [d, D || "%"] })] });
};
export {
  qt as SemiCircleProgressWithIndicator
};
