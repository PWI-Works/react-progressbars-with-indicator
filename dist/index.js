var Mr = { exports: {} }, Ge = {}, hr = { exports: {} }, b = {};
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
    return b;
  ct = 1;
  var p = Symbol.for("react.element"), d = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), re = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), B = Symbol.iterator;
  function Q(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, pe = {};
  function q(n, s, m) {
    this.props = n, this.context = s, this.refs = pe, this.updater = m || z;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, q.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = q.prototype;
  function C(n, s, m) {
    this.props = n, this.context = s, this.refs = pe, this.updater = m || z;
  }
  var ae = C.prototype = new Z();
  ae.constructor = C, fe(ae, q.prototype), ae.isPureReactComponent = !0;
  var ue = Array.isArray, F = Object.prototype.hasOwnProperty, H = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function le(n, s, m) {
    var S, _ = {}, A = null, I = null;
    if (s != null)
      for (S in s.ref !== void 0 && (I = s.ref), s.key !== void 0 && (A = "" + s.key), s)
        F.call(s, S) && !te.hasOwnProperty(S) && (_[S] = s[S]);
    var k = arguments.length - 2;
    if (k === 1)
      _.children = m;
    else if (1 < k) {
      for (var T = Array(k), ee = 0; ee < k; ee++)
        T[ee] = arguments[ee + 2];
      _.children = T;
    }
    if (n && n.defaultProps)
      for (S in k = n.defaultProps, k)
        _[S] === void 0 && (_[S] = k[S]);
    return { $$typeof: p, type: n, key: A, ref: I, props: _, _owner: H.current };
  }
  function ve(n, s) {
    return { $$typeof: p, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function ye(n) {
    return typeof n == "object" && n !== null && n.$$typeof === p;
  }
  function Ee(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(m) {
      return s[m];
    });
  }
  var he = /\/+/g;
  function G(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ee("" + n.key) : s.toString(36);
  }
  function se(n, s, m, S, _) {
    var A = typeof n;
    (A === "undefined" || A === "boolean") && (n = null);
    var I = !1;
    if (n === null)
      I = !0;
    else
      switch (A) {
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case p:
            case d:
              I = !0;
          }
      }
    if (I)
      return I = n, _ = _(I), n = S === "" ? "." + G(I, 0) : S, ue(_) ? (m = "", n != null && (m = n.replace(he, "$&/") + "/"), se(_, s, m, "", function(ee) {
        return ee;
      })) : _ != null && (ye(_) && (_ = ve(_, m + (!_.key || I && I.key === _.key ? "" : ("" + _.key).replace(he, "$&/") + "/") + n)), s.push(_)), 1;
    if (I = 0, S = S === "" ? "." : S + ":", ue(n))
      for (var k = 0; k < n.length; k++) {
        A = n[k];
        var T = S + G(A, k);
        I += se(A, s, m, T, _);
      }
    else if (T = Q(n), typeof T == "function")
      for (n = T.call(n), k = 0; !(A = n.next()).done; )
        A = A.value, T = S + G(A, k++), I += se(A, s, m, T, _);
    else if (A === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return I;
  }
  function K(n, s, m) {
    if (n == null)
      return n;
    var S = [], _ = 0;
    return se(n, S, "", "", function(A) {
      return s.call(m, A, _++);
    }), S;
  }
  function me(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = m);
      }, function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = m);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var v = { current: null }, be = { transition: null }, Pe = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: be, ReactCurrentOwner: H };
  return b.Children = { map: K, forEach: function(n, s, m) {
    K(n, function() {
      s.apply(this, arguments);
    }, m);
  }, count: function(n) {
    var s = 0;
    return K(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return K(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!ye(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, b.Component = q, b.Fragment = J, b.Profiler = P, b.PureComponent = C, b.StrictMode = j, b.Suspense = $, b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, b.cloneElement = function(n, s, m) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var S = fe({}, n.props), _ = n.key, A = n.ref, I = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (A = s.ref, I = H.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var k = n.type.defaultProps;
      for (T in s)
        F.call(s, T) && !te.hasOwnProperty(T) && (S[T] = s[T] === void 0 && k !== void 0 ? k[T] : s[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      S.children = m;
    else if (1 < T) {
      k = Array(T);
      for (var ee = 0; ee < T; ee++)
        k[ee] = arguments[ee + 2];
      S.children = k;
    }
    return { $$typeof: p, type: n.type, key: _, ref: A, props: S, _owner: I };
  }, b.createContext = function(n) {
    return n = { $$typeof: re, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: M, _context: n }, n.Consumer = n;
  }, b.createElement = le, b.createFactory = function(n) {
    var s = le.bind(null, n);
    return s.type = n, s;
  }, b.createRef = function() {
    return { current: null };
  }, b.forwardRef = function(n) {
    return { $$typeof: U, render: n };
  }, b.isValidElement = ye, b.lazy = function(n) {
    return { $$typeof: D, _payload: { _status: -1, _result: n }, _init: me };
  }, b.memo = function(n, s) {
    return { $$typeof: ne, type: n, compare: s === void 0 ? null : s };
  }, b.startTransition = function(n) {
    var s = be.transition;
    be.transition = {};
    try {
      n();
    } finally {
      be.transition = s;
    }
  }, b.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, b.useCallback = function(n, s) {
    return v.current.useCallback(n, s);
  }, b.useContext = function(n) {
    return v.current.useContext(n);
  }, b.useDebugValue = function() {
  }, b.useDeferredValue = function(n) {
    return v.current.useDeferredValue(n);
  }, b.useEffect = function(n, s) {
    return v.current.useEffect(n, s);
  }, b.useId = function() {
    return v.current.useId();
  }, b.useImperativeHandle = function(n, s, m) {
    return v.current.useImperativeHandle(n, s, m);
  }, b.useInsertionEffect = function(n, s) {
    return v.current.useInsertionEffect(n, s);
  }, b.useLayoutEffect = function(n, s) {
    return v.current.useLayoutEffect(n, s);
  }, b.useMemo = function(n, s) {
    return v.current.useMemo(n, s);
  }, b.useReducer = function(n, s, m) {
    return v.current.useReducer(n, s, m);
  }, b.useRef = function(n) {
    return v.current.useRef(n);
  }, b.useState = function(n) {
    return v.current.useState(n);
  }, b.useSyncExternalStore = function(n, s, m) {
    return v.current.useSyncExternalStore(n, s, m);
  }, b.useTransition = function() {
    return v.current.useTransition();
  }, b.version = "18.2.0", b;
}
var Xe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Xe.exports;
var ft;
function Wt() {
  return ft || (ft = 1, function(p, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var J = "18.2.0", j = Symbol.for("react.element"), P = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ne = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), q = Symbol.iterator, Z = "@@iterator";
      function C(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = q && e[q] || e[Z];
        return typeof r == "function" ? r : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, F = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, te = {}, le = null;
      function ve(e) {
        le = e;
      }
      te.setExtraStackFrame = function(e) {
        le = e;
      }, te.getCurrentStack = null, te.getStackAddendum = function() {
        var e = "";
        le && (e += le);
        var r = te.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var ye = !1, Ee = !1, he = !1, G = !1, se = !1, K = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: H
      };
      K.ReactDebugCurrentFrame = te, K.ReactCurrentActQueue = F;
      function me(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          be("warn", e, a);
        }
      }
      function v(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          be("error", e, a);
        }
      }
      function be(e, r, a) {
        {
          var o = K.ReactDebugCurrentFrame, u = o.getStackAddendum();
          u !== "" && (r += "%s", a = a.concat([u]));
          var y = a.map(function(l) {
            return String(l);
          });
          y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
        }
      }
      var Pe = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", u = o + "." + r;
          if (Pe[u])
            return;
          v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Pe[u] = !0;
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
      }, m = Object.assign, S = {};
      Object.freeze(S);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = S, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var A = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, I = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              me("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var k in A)
          A.hasOwnProperty(k) && I(k, A[k]);
      }
      function T() {
      }
      T.prototype = _.prototype;
      function ee(e, r, a) {
        this.props = e, this.context = r, this.refs = S, this.updater = a || s;
      }
      var we = ee.prototype = new T();
      we.constructor = ee, m(we, _.prototype), we.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Je = Array.isArray;
      function Ne(e) {
        return Je(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
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
        if (Le(e))
          return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), ke(e);
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
      function _e(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case M:
            return "Fragment";
          case P:
            return "Portal";
          case U:
            return "Profiler";
          case re:
            return "StrictMode";
          case B:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ne:
              var r = e;
              return xe(r) + ".Consumer";
            case $:
              var a = e;
              return xe(a._context) + ".Provider";
            case D:
              return Qe(e, e.render, "ForwardRef");
            case z:
              var o = e.displayName || null;
              return o !== null ? o : _e(e.type) || "Memo";
            case fe: {
              var u = e, y = u._payload, l = u._init;
              try {
                return _e(l(y));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var $e = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Ve;
      Ve = {};
      function Be(e) {
        if ($e.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ce(e) {
        if ($e.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          Ze || (Ze = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = _e(H.current.type);
          Ve[r] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ve[r] = !0);
        }
      }
      var Ae = function(e, r, a, o, u, y, l) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: y
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function _r(e, r, a) {
        var o, u = {}, y = null, l = null, h = null, R = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), Ce(r) && (je(r.key), y = "" + r.key), h = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            $e.call(r, o) && !Me.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          u.children = a;
        else if (x > 1) {
          for (var N = Array(x), L = 0; L < x; L++)
            N[L] = arguments[L + 2];
          Object.freeze && Object.freeze(N), u.children = N;
        }
        if (e && e.defaultProps) {
          var Y = e.defaultProps;
          for (o in Y)
            u[o] === void 0 && (u[o] = Y[o]);
        }
        if (y || l) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && br(u, X), l && rr(u, X);
        }
        return Ae(e, y, l, h, R, H.current, u);
      }
      function Er(e, r) {
        var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = m({}, e.props), y = e.key, l = e.ref, h = e._self, R = e._source, x = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, x = H.current), Ce(r) && (je(r.key), y = "" + r.key);
          var N;
          e.type && e.type.defaultProps && (N = e.type.defaultProps);
          for (o in r)
            $e.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && N !== void 0 ? u[o] = N[o] : u[o] = r[o]);
        }
        var L = arguments.length - 2;
        if (L === 1)
          u.children = a;
        else if (L > 1) {
          for (var Y = Array(L), X = 0; X < L; X++)
            Y[X] = arguments[X + 2];
          u.children = Y;
        }
        return Ae(e.type, y, l, h, R, x, u);
      }
      function Se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
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
      var Ye = !1, ar = /\/+/g;
      function Re(e) {
        return e.replace(ar, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function Te(e, r, a, o, u) {
        var y = typeof e;
        (y === "undefined" || y === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (y) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case j:
                case P:
                  l = !0;
              }
          }
        if (l) {
          var h = e, R = u(h), x = o === "" ? nr + De(h, 0) : o;
          if (Ne(R)) {
            var N = "";
            x != null && (N = Re(x) + "/"), Te(R, r, N, "", function(Yt) {
              return Yt;
            });
          } else
            R != null && (Se(R) && (R.key && (!h || h.key !== R.key) && je(R.key), R = Er(
              R,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (R.key && (!h || h.key !== R.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Re("" + R.key) + "/"
              ) : "") + x
            )), r.push(R));
          return 1;
        }
        var L, Y, X = 0, ie = o === "" ? nr : o + wr;
        if (Ne(e))
          for (var yr = 0; yr < e.length; yr++)
            L = e[yr], Y = ie + De(L, yr), X += Te(L, r, a, Y, u);
        else {
          var Lr = C(e);
          if (typeof Lr == "function") {
            var it = e;
            Lr === it.entries && (Ye || me("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ye = !0);
            for (var Mt = Lr.call(it), ut, Vt = 0; !(ut = Mt.next()).done; )
              L = ut.value, Y = ie + De(L, Vt++), X += Te(L, r, a, Y, u);
          } else if (y === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return X;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return Te(e, o, "", "", function(y) {
          return r.call(a, y, u++);
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
        if (!Se(e))
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
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var y = {
            $$typeof: ne,
            _context: r
          };
          Object.defineProperties(y, {
            Provider: {
              get: function() {
                return o || (o = !0, v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
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
                return a || (a = !0, v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                u || (me("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), u = !0);
              }
            }
          }), r.Consumer = y;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(y) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = qe, l._result = y;
            }
          }, function(y) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = Or, l._result = y;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var u = e._result;
          return u === void 0 && v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
          $$typeof: fe,
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
              set: function(y) {
                v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = y, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(y) {
                v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = y, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === z ? v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? v("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && v("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: D,
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
        return !!(typeof e == "string" || typeof e == "function" || e === M || e === U || se || e === re || e === B || e === Q || G || e === pe || ye || Ee || he || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === z || e.$$typeof === $ || e.$$typeof === ne || e.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || v("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: z,
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
        var e = ae.current;
        return e === null && v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function w(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function O(e) {
        var r = f();
        return r.useState(e);
      }
      function E(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function g(e) {
        var r = f();
        return r.useRef(e);
      }
      function oe(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function V(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function W(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function de(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Oe(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ge(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function ht() {
        var e = f();
        return e.useTransition();
      }
      function mt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function gt() {
        var e = f();
        return e.useId();
      }
      function bt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Yr, Ur, Wr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function _t() {
        {
          if (He === 0) {
            Vr = console.log, Yr = console.info, Ur = console.warn, Wr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
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
      function Et() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: m({}, e, {
                value: Vr
              }),
              info: m({}, e, {
                value: Yr
              }),
              warn: m({}, e, {
                value: Ur
              }),
              error: m({}, e, {
                value: Wr
              }),
              group: m({}, e, {
                value: Br
              }),
              groupCollapsed: m({}, e, {
                value: zr
              }),
              groupEnd: m({}, e, {
                value: qr
              })
            });
          }
          He < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = K.ReactCurrentDispatcher, $r;
      function cr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (u) {
              var o = u.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Ar = !1, fr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new Rt();
      }
      function Gr(e, r) {
        if (!e || Ar)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ar = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var y;
        y = xr.current, xr.current = null, _t();
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
              } catch (ie) {
                o = ie;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (ie) {
                o = ie;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ie) {
              o = ie;
            }
            e();
          }
        } catch (ie) {
          if (ie && o && typeof ie.stack == "string") {
            for (var h = ie.stack.split(`
`), R = o.stack.split(`
`), x = h.length - 1, N = R.length - 1; x >= 1 && N >= 0 && h[x] !== R[N]; )
              N--;
            for (; x >= 1 && N >= 0; x--, N--)
              if (h[x] !== R[N]) {
                if (x !== 1 || N !== 1)
                  do
                    if (x--, N--, N < 0 || h[x] !== R[N]) {
                      var L = `
` + h[x].replace(" at new ", " at ");
                      return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, L), L;
                    }
                  while (x >= 1 && N >= 0);
                break;
              }
          }
        } finally {
          Ar = !1, xr.current = y, Et(), Error.prepareStackTrace = u;
        }
        var Y = e ? e.displayName || e.name : "", X = Y ? cr(Y) : "";
        return typeof e == "function" && fr.set(e, X), X;
      }
      function wt(e, r, a) {
        return Gr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, Ct(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case B:
            return cr("Suspense");
          case Q:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case D:
              return wt(e.render);
            case z:
              return lr(e.type, r, a);
            case fe: {
              var o = e, u = o._payload, y = o._init;
              try {
                return lr(y(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Xr = K.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Xr.setExtraStackFrame(a);
        } else
          Xr.setExtraStackFrame(null);
      }
      function St(e, r, a, o, u) {
        {
          var y = Function.call.bind($e);
          for (var l in e)
            if (y(e, l)) {
              var h = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                h = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (x) {
                h = x;
              }
              h && !(h instanceof Error) && (dr(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof h), dr(null)), h instanceof Error && !(h.message in Kr) && (Kr[h.message] = !0, dr(u), v("Failed %s type: %s", a, h.message), dr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          ve(a);
        } else
          ve(null);
      }
      var Dr;
      Dr = !1;
      function Jr() {
        if (H.current) {
          var e = _e(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Ot(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var Qr = {};
      function Pt(e) {
        var r = Jr();
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
          var a = Pt(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + _e(e._owner.type) + "."), Ue(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if (Ne(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Se(o) && Zr(o, r);
            }
          else if (Se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = C(e);
            if (typeof u == "function" && u !== e.entries)
              for (var y = u.call(e), l; !(l = y.next()).done; )
                Se(l.value) && Zr(l.value, r);
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
          else if (typeof r == "object" && (r.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === z))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = _e(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var u = _e(r);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function tt(e, r, a) {
        var o = i(e);
        if (!o) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = Ot(r);
          y ? u += y : u += Jr();
          var l;
          e === null ? l = "null" : Ne(e) ? l = "array" : e !== void 0 && e.$$typeof === j ? (l = "<" + (_e(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, u);
        }
        var h = _r.apply(this, arguments);
        if (h == null)
          return h;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            et(arguments[R], e);
        return e === M ? kt(h) : rt(h), h;
      }
      var nt = !1;
      function jt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, me("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return me("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function xt(e, r, a) {
        for (var o = Rr.apply(this, arguments), u = 2; u < arguments.length; u++)
          et(arguments[u], o.type);
        return rt(o), o;
      }
      function $t(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, pr = null;
      function At(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = p && p[r];
            pr = a.call(p, "timers").setImmediate;
          } catch {
            pr = function(u) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var y = new MessageChannel();
              y.port1.onmessage = u, y.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var We = 0, ot = !1;
      function Dt(e) {
        {
          var r = We;
          We++, F.current === null && (F.current = []);
          var a = F.isBatchingLegacy, o;
          try {
            if (F.isBatchingLegacy = !0, o = e(), !a && F.didScheduleLegacyUpdate) {
              var u = F.current;
              u !== null && (F.didScheduleLegacyUpdate = !1, Nr(u));
            }
          } catch (Y) {
            throw vr(r), Y;
          } finally {
            F.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var y = o, l = !1, h = {
              then: function(Y, X) {
                l = !0, y.then(function(ie) {
                  vr(r), We === 0 ? Ir(ie, Y, X) : Y(ie);
                }, function(ie) {
                  vr(r), X(ie);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ot = !0, v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), h;
          } else {
            var R = o;
            if (vr(r), We === 0) {
              var x = F.current;
              x !== null && (Nr(x), F.current = null);
              var N = {
                then: function(Y, X) {
                  F.current === null ? (F.current = [], Ir(R, Y, X)) : Y(R);
                }
              };
              return N;
            } else {
              var L = {
                then: function(Y, X) {
                  Y(R);
                }
              };
              return L;
            }
          }
        }
      }
      function vr(e) {
        e !== We - 1 && v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), We = e;
      }
      function Ir(e, r, a) {
        {
          var o = F.current;
          if (o !== null)
            try {
              Nr(o), At(function() {
                o.length === 0 ? (F.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var Fr = !1;
      function Nr(e) {
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
      var It = tt, Ft = xt, Nt = jt, Lt = {
        map: Ie,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ir
      };
      d.Children = Lt, d.Component = _, d.Fragment = M, d.Profiler = U, d.PureComponent = ee, d.StrictMode = re, d.Suspense = B, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, d.cloneElement = Ft, d.createContext = ur, d.createElement = It, d.createFactory = Nt, d.createRef = mr, d.forwardRef = jr, d.isValidElement = Se, d.lazy = kr, d.memo = c, d.startTransition = $t, d.unstable_act = Dt, d.useCallback = de, d.useContext = w, d.useDebugValue = ge, d.useDeferredValue = mt, d.useEffect = oe, d.useId = gt, d.useImperativeHandle = sr, d.useInsertionEffect = V, d.useLayoutEffect = W, d.useMemo = Oe, d.useReducer = E, d.useRef = g, d.useState = O, d.useSyncExternalStore = bt, d.useTransition = ht, d.version = J, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xe, Xe.exports)), Xe.exports;
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
function Bt() {
  if (dt)
    return Ge;
  dt = 1;
  var p = vt(), d = Symbol.for("react.element"), J = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, P = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(U, $, ne) {
    var D, B = {}, Q = null, z = null;
    ne !== void 0 && (Q = "" + ne), $.key !== void 0 && (Q = "" + $.key), $.ref !== void 0 && (z = $.ref);
    for (D in $)
      j.call($, D) && !M.hasOwnProperty(D) && (B[D] = $[D]);
    if (U && U.defaultProps)
      for (D in $ = U.defaultProps, $)
        B[D] === void 0 && (B[D] = $[D]);
    return { $$typeof: d, type: U, key: Q, ref: z, props: B, _owner: P.current };
  }
  return Ge.Fragment = J, Ge.jsx = re, Ge.jsxs = re, Ge;
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
function zt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var p = vt(), d = Symbol.for("react.element"), J = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), U = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), fe = Symbol.iterator, pe = "@@iterator";
    function q(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[pe];
      return typeof i == "function" ? i : null;
    }
    var Z = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        ae("error", t, c);
      }
    }
    function ae(t, i, c) {
      {
        var f = Z.ReactDebugCurrentFrame, w = f.getStackAddendum();
        w !== "" && (i += "%s", c = c.concat([w]));
        var O = c.map(function(E) {
          return String(E);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var ue = !1, F = !1, H = !1, te = !1, le = !1, ve;
    ve = Symbol.for("react.module.reference");
    function ye(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === j || t === M || le || t === P || t === ne || t === D || te || t === z || ue || F || H || typeof t == "object" && t !== null && (t.$$typeof === Q || t.$$typeof === B || t.$$typeof === re || t.$$typeof === U || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ve || t.getModuleId !== void 0));
    }
    function Ee(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var w = i.displayName || i.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function he(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case j:
          return "Fragment";
        case J:
          return "Portal";
        case M:
          return "Profiler";
        case P:
          return "StrictMode";
        case ne:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case U:
            var i = t;
            return he(i) + ".Consumer";
          case re:
            var c = t;
            return he(c._context) + ".Provider";
          case $:
            return Ee(t, t.render, "ForwardRef");
          case B:
            var f = t.displayName || null;
            return f !== null ? f : G(t.type) || "Memo";
          case Q: {
            var w = t, O = w._payload, E = w._init;
            try {
              return G(E(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, K = 0, me, v, be, Pe, n, s, m;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function _() {
      {
        if (K === 0) {
          me = console.log, v = console.info, be = console.warn, Pe = console.error, n = console.group, s = console.groupCollapsed, m = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
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
        K++;
      }
    }
    function A() {
      {
        if (K--, K === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, t, {
              value: me
            }),
            info: se({}, t, {
              value: v
            }),
            warn: se({}, t, {
              value: be
            }),
            error: se({}, t, {
              value: Pe
            }),
            group: se({}, t, {
              value: n
            }),
            groupCollapsed: se({}, t, {
              value: s
            }),
            groupEnd: se({}, t, {
              value: m
            })
          });
        }
        K < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = Z.ReactCurrentDispatcher, k;
    function T(t, i, c) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (w) {
            var f = w.stack.trim().match(/\n( *(at )?)/);
            k = f && f[1] || "";
          }
        return `
` + k + t;
      }
    }
    var ee = !1, we;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      we = new mr();
    }
    function Je(t, i) {
      if (!t || ee)
        return "";
      {
        var c = we.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      ee = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = I.current, I.current = null, _();
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
            } catch (ge) {
              f = ge;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (ge) {
              f = ge;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            f = ge;
          }
          t();
        }
      } catch (ge) {
        if (ge && f && typeof ge.stack == "string") {
          for (var g = ge.stack.split(`
`), oe = f.stack.split(`
`), V = g.length - 1, W = oe.length - 1; V >= 1 && W >= 0 && g[V] !== oe[W]; )
            W--;
          for (; V >= 1 && W >= 0; V--, W--)
            if (g[V] !== oe[W]) {
              if (V !== 1 || W !== 1)
                do
                  if (V--, W--, W < 0 || g[V] !== oe[W]) {
                    var de = `
` + g[V].replace(" at new ", " at ");
                    return t.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", t.displayName)), typeof t == "function" && we.set(t, de), de;
                  }
                while (V >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        ee = !1, I.current = O, A(), Error.prepareStackTrace = w;
      }
      var Oe = t ? t.displayName || t.name : "", sr = Oe ? T(Oe) : "";
      return typeof t == "function" && we.set(t, sr), sr;
    }
    function Ne(t, i, c) {
      return Je(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Le(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, gr(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ne:
          return T("Suspense");
        case D:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return Ne(t.render);
          case B:
            return Le(t.type, i, c);
          case Q: {
            var f = t, w = f._payload, O = f._init;
            try {
              return Le(O(w), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, je = {}, Qe = Z.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function _e(t, i, c, f, w) {
      {
        var O = Function.call.bind(ke);
        for (var E in t)
          if (O(t, E)) {
            var g = void 0;
            try {
              if (typeof t[E] != "function") {
                var oe = Error((f || "React class") + ": " + c + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              g = t[E](i, E, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              g = V;
            }
            g && !(g instanceof Error) && (xe(w), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, E, typeof g), xe(null)), g instanceof Error && !(g.message in je) && (je[g.message] = !0, xe(w), C("Failed %s type: %s", c, g.message), xe(null));
          }
      }
    }
    var $e = Array.isArray;
    function Me(t) {
      return $e(t);
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
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Ve(t);
    }
    var Ce = Z.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, Ae;
    Ae = {};
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
      if (typeof t.ref == "string" && Ce.current && i && Ce.current.stateNode !== i) {
        var c = G(Ce.current.type);
        Ae[c] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Ce.current.type), t.ref), Ae[c] = !0);
      }
    }
    function Se(t, i) {
      {
        var c = function() {
          rr || (rr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
          tr || (tr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, i, c, f, w, O, E) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: E,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Cr(t, i, c, f, w) {
      {
        var O, E = {}, g = null, oe = null;
        c !== void 0 && (Be(c), g = "" + c), Er(i) && (Be(i.key), g = "" + i.key), _r(i) && (oe = i.ref, Rr(i, w));
        for (O in i)
          ke.call(i, O) && !br.hasOwnProperty(O) && (E[O] = i[O]);
        if (t && t.defaultProps) {
          var V = t.defaultProps;
          for (O in V)
            E[O] === void 0 && (E[O] = V[O]);
        }
        if (g || oe) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          g && Se(E, W), oe && nr(E, W);
        }
        return wr(t, g, oe, w, f, Ce.current, E);
      }
    }
    var Ye = Z.ReactCurrentOwner, ar = Z.ReactDebugCurrentFrame;
    function Re(t) {
      if (t) {
        var i = t._owner, c = Le(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Te(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Ie() {
      {
        if (Ye.current) {
          var t = G(Ye.current.type);
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
        t && t._owner && t._owner !== Ye.current && (f = " It was passed a child from " + G(t._owner.type) + "."), Re(t), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), Re(null);
      }
    }
    function ur(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            Te(f) && ir(f, i);
          }
        else if (Te(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = q(t);
          if (typeof w == "function" && w !== t.entries)
            for (var O = w.call(t), E; !(E = O.next()).done; )
              Te(E.value) && ir(E.value, i);
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
        else if (typeof i == "object" && (i.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === B))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = G(i);
          _e(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !De) {
          De = !0;
          var w = G(i);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            Re(t), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), Re(null);
            break;
          }
        }
        t.ref !== null && (Re(t), C("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function qe(t, i, c, f, w, O) {
      {
        var E = ye(t);
        if (!E) {
          var g = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Sr(w);
          oe ? g += oe : g += Ie();
          var V;
          t === null ? V = "null" : Me(t) ? V = "array" : t !== void 0 && t.$$typeof === d ? (V = "<" + (G(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : V = typeof t, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, g);
        }
        var W = Cr(t, i, c, w, O);
        if (W == null)
          return W;
        if (E) {
          var de = i.children;
          if (de !== void 0)
            if (f)
              if (Me(de)) {
                for (var Oe = 0; Oe < de.length; Oe++)
                  ur(de[Oe], t);
                Object.freeze && Object.freeze(de);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(de, t);
        }
        return t === j ? ze(W) : Fe(W), W;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = j, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Mr.exports = Bt() : Mr.exports = zt();
var ce = Mr.exports;
const yt = ({ width: p, color: d = "#04001b", style: J, cornerRadius: j }) => {
  if (isNaN(p) || p <= 0)
    throw new Error("Width must be a positive number");
  if (j != null && (j <= 0 || j > p / 3))
    throw new Error("Corner radius must be a positive number and less than one third the width");
  const P = j ? j * 2 : p / 3, M = J == "fill-square" ? p - P : Math.tan(60 * Math.PI / 180) * ((p - P) / 2), re = M + P, U = `M${P / 2},${M + P / 2} L${p / 2},${P / 2} L${p - P / 2},${M + P / 2} Z`;
  return ce.jsx("svg", { width: p, height: re, viewBox: `0 0 ${p} ${re}`, xmlns: "http://www.w3.org/2000/svg", children: ce.jsx("path", { d: U, fill: d, stroke: d, strokeWidth: P, strokeLinejoin: "round" }) });
}, qt = ({ strokeWidth: p, percentage: d, indicatorPercentage: J, strokeColor: j = "#04001b", indicatorColor: P = "#04001b", width: M = 100, indicatorRelativeSize: re, strokeLinecap: U, percentageSeparator: $, includeText: ne = !1, fontStyle: D, hasBackground: B = !0, bgStrokeColor: Q = "#d3d3d3" }) => {
  if (d < 0 || d > 100)
    throw new Error("Percentage must be between 0 and 100");
  if (J != null && (J < 0 || J > 100))
    throw new Error("Indicator percentage must be between 0 and 100");
  if (isNaN(p) || p <= 0)
    throw new Error("Stroke width must be a positive number");
  if (isNaN(M) || M <= 0)
    throw new Error("Size must be a positive number");
  const z = p * (re || 0.6), fe = p * 0.1, pe = J !== void 0, q = pe ? z + fe : 0, Z = M - p - q * 2, C = Z / 2, ae = 1.1 * Math.PI * C, ue = ae - d / 100 * ae, F = 0, H = p / 2 + q, te = C + p / 2 + q, le = H + Z / 2, ve = `M${H},${te} a1,1 0 0,1 ${Z},0`, ye = "equilateral", Ee = Z / 2 + p / 2 + fe, he = (J || 0) / 100 * 180, G = ce.jsx(yt, { width: z, color: P, style: ye }), se = ce.jsxs("g", { transform: `rotate(${he}, ${le}, ${te}) translate(-${Ee})`, children: [" ", ce.jsxs("g", { transform: `translate(${le}, ${te - z / 2}) rotate(90)`, children: [" ", G] })] }), K = te + (U === "round" || U === "square" ? p / 2 : z / 2);
  return ce.jsxs("svg", { width: M, height: K, viewBox: `0 0 ${M} ${K}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "_half-circular-progress", children: [B && ce.jsx("path", { d: ve, style: {
    transition: "stroke-dashoffset 0.35s",
    stroke: Q,
    strokeLinecap: U || "round",
    strokeDasharray: `${ae}`,
    strokeDashoffset: `${F}`,
    strokeWidth: `${p}`
  }, fill: "none" }), ce.jsx("path", { d: ve, style: {
    transition: "stroke-dashoffset 0.35s",
    stroke: j,
    strokeLinecap: U || "round",
    strokeDasharray: `${ae}`,
    strokeDashoffset: `${ue}`,
    strokeWidth: `${p}`
  }, fill: "none" }), pe && se, ce.jsx("animate", { attributeName: "stroke-dashoffset", from: "283", to: "0", dur: "1s", fill: "freeze" }), ne && ce.jsxs("text", { x: "50%", y: "98%", textAnchor: "middle", fontSize: "90", fontFamily: "Arial", fill: "#04001b", style: {
    ...D
  }, children: [d, $ || "%"] })] });
}, Ht = ({ strokeWidth: p, strokeLinecap: d = "round", percentage: J, indicatorPercentage: j, width: P = 100, strokeColor: M, indicatorColor: re, indicatorRelativeSize: U, customText: $, fontStyle: ne, hasBackground: D = !0, bgStrokeColor: B, textPosition: Q = "end" }) => {
  if (isNaN(P) || P <= 0)
    throw new Error("width must be a positive number");
  if (isNaN(p) || p <= 0)
    throw new Error("Stroke width must be a positive number");
  if (J < 0 || J > 100)
    throw new Error("Indicator percentage must be between 0 and 100");
  if (j != null && (j < 0 || j > 100))
    throw new Error("Indicator percentage must be between 0 and 100");
  const z = "#04001b", fe = "#d3d3d3", pe = j !== void 0, q = p * U, Z = pe ? q / 2 : 0, C = d === "round" || d === "square" ? p / 2 : Z, ae = P - (d === "round" || d === "square" ? p : Z), ue = ae - C, F = C + ue * (J / 100), H = C + ue * ((j || 0) / 100), te = p * 0.1, le = p + te, ve = ce.jsx(yt, { width: q, color: re }), ye = ce.jsxs("g", { transform: `translate(${H - q / 2}, ${le})`, children: [" ", ve] }), Ee = `M ${C} ${p / 2} L ${ae} ${p / 2}`, he = `M ${C} ${p / 2} L ${F} ${p / 2}`, G = p + q + te;
  return ce.jsxs("svg", { width: P, height: G, viewBox: `0 0 ${P} ${G}`, fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "_horizontal-progress", children: [D && ce.jsx("path", { d: Ee, style: {
    stroke: B || fe,
    strokeLinecap: d,
    strokeWidth: p
  }, fill: "none" }), ce.jsx("path", { d: he, style: {
    stroke: M || z,
    strokeLinecap: d,
    strokeWidth: p
  }, fill: "none" }), pe && ye, $ && ce.jsx("text", { x: Q === "start" ? C : Q === "end" ? ae : P / 2, y: p / 2 + p * 0.08, textAnchor: Q, dominantBaseline: "middle", fill: "white", fontFamily: "Arial", fontSize: p, style: {
    ...ne
  }, children: $ })] });
};
export {
  Ht as HorizontalProgressWithIndicator,
  qt as SemiCircleProgressWithIndicator
};
