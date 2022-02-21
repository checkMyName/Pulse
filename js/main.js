/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/classes/Component.js":
/*!*************************************!*\
  !*** ./src/js/classes/Component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _Model2 = _interopRequireDefault(__webpack_require__(/*! ./Model */ "./src/js/classes/Model.js"));

var _data = __webpack_require__(/*! ../helpers/data */ "./src/js/helpers/data.js");

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var merge = _data.$data.merge;
var exist = _dom.$dom.exist;

var Component = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Component, _Model);

  var _super = _createSuper(Component);

  function Component(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Component);
    _this = _super.call(this, options);
    _this.defaults = {
      requiredSelector: null
    };
    _this.options = merge(_this.defaults, options);
    return _this;
  }

  (0, _createClass2["default"])(Component, [{
    key: "initialized",
    get: function get() {
      return exist(this.options.requiredSelector) || _is_js["default"].undefined(this.options.requiredSelector) || _is_js["default"]["function"](this.options.requiredSelector) && this.options.requiredSelector() === true;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.initialized) (0, _get2["default"])((0, _getPrototypeOf2["default"])(Component.prototype), "init", this).call(this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.initialized) (0, _get2["default"])((0, _getPrototypeOf2["default"])(Component.prototype), "destroy", this).call(this);
    }
  }]);
  return Component;
}(_Model2["default"]);

exports["default"] = Component;

/***/ }),

/***/ "./src/js/classes/Model.js":
/*!*********************************!*\
  !*** ./src/js/classes/Model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _data = __webpack_require__(/*! ../helpers/data */ "./src/js/helpers/data.js");

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var merge = _data.$data.merge;

var Model = /*#__PURE__*/function () {
  function Model() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Model);
    this.defaults = {
      onCreate: null,
      onInit: null,
      onDestroy: null,
      name: null,
      rootElementId: null,
      debug: true
    };
    this.options = merge(this.defaults, options);
    this.name = options.name;
    this.rootElement = this.rootEl;
    this.checkAndRunCallback(this.options.onCreate);
  }

  (0, _createClass2["default"])(Model, [{
    key: "rootEl",
    get: function get() {
      var rootElementId = this.options.rootElementId,
          el = document.getElementById(rootElementId);
      if (_is_js["default"].string(rootElementId) && Boolean(rootElementId) && (0, _utilities.isElement)(el)) return el;
      return null;
    }
  }, {
    key: "checkAndRunCallback",
    value: function checkAndRunCallback(cb) {
      if (_is_js["default"]["function"](cb)) cb.call(this, this);
      return this;
    }
  }, {
    key: "init",
    value: function init() {
      this.checkAndRunCallback(this.options.onInit);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.checkAndRunCallback(this.options.onDestroy);
    }
  }, {
    key: "update",
    value: function update() {
      this.destroy();
      this.init();
    }
  }]);
  return Model;
}();

exports["default"] = Model;

/***/ }),

/***/ "./src/js/classes/Page.js":
/*!********************************!*\
  !*** ./src/js/classes/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _classPrivateFieldGet2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js"));

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _data = __webpack_require__(/*! ../helpers/data */ "./src/js/helpers/data.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _Model2 = _interopRequireDefault(__webpack_require__(/*! ./Model */ "./src/js/classes/Model.js"));

var _lazyLoad = __webpack_require__(/*! ../components/lazyLoad */ "./src/js/components/lazyLoad.js");

var _Component = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./src/js/classes/Component.js"));

var _formValidation = __webpack_require__(/*! ../components/formValidation */ "./src/js/components/formValidation.js");

var _modal = _interopRequireDefault(__webpack_require__(/*! ../components/modal */ "./src/js/components/modal/index.js"));

var _toasts = _interopRequireDefault(__webpack_require__(/*! ../components/toasts */ "./src/js/components/toasts/index.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _selectDropdown = _interopRequireDefault(__webpack_require__(/*! ../components/selectDropdown */ "./src/js/components/selectDropdown.js"));

var _fixedHeader = __webpack_require__(/*! ../components/fixedHeader */ "./src/js/components/fixedHeader.js");

var _siteMenu = __webpack_require__(/*! ../components/siteMenu */ "./src/js/components/siteMenu.js");

var _smartScroll = __webpack_require__(/*! ../components/smartScroll */ "./src/js/components/smartScroll.js");

var _procedureSlider = __webpack_require__(/*! ../components/procedureSlider */ "./src/js/components/procedureSlider.js");

var _plansSlider = __webpack_require__(/*! ../components/plansSlider */ "./src/js/components/plansSlider.js");

var _siteScrollProgressBar = __webpack_require__(/*! ../components/siteScrollProgressBar */ "./src/js/components/siteScrollProgressBar.js");

var _siteSearch = __webpack_require__(/*! ../components/siteSearch */ "./src/js/components/siteSearch.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var merge = _data.$data.merge;
var globalSettingsAttrName = _variables["default"].globalSettingsAttrName;

var _components = /*#__PURE__*/new WeakMap();

var Page = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Page, _Model);

  var _super = _createSuper(Page);

  function Page(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Page);
    _this = _super.call(this, options);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _components, {
      writable: true,
      value: {}
    });

    _this.initialized = true;

    if (_is_js["default"].not.domNode(_this.rootElement)) {
      if (_this.options.debug) {
        (0, _utilities.warn)("Instance Page with name \"".concat(_this.name, "\" has no root element provided"), 'Class Page');
      }

      _this.initialized = false;
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    _this.defaults = {
      resizeMethods: []
    };
    _this.options = merge(_this.defaults, options);
    _this[globalSettingsAttrName] = _this.rootEl.dataset[globalSettingsAttrName] && JSON.parse(_this.rootEl.dataset[globalSettingsAttrName]);

    if (_is_js["default"].undefined(_this[globalSettingsAttrName])) {
      (0, _utilities.warn)("Global settings is not provided to root element as \"data-".concat(globalSettingsAttrName, "\" attribute"), 'Class Page');
    } else {
      _this.rootEl.removeAttribute("data-".concat(globalSettingsAttrName));
    }

    _this.addComponent(_lazyLoad.lazyLoad, [50, 'data-error']).addComponent(_formValidation.formValidation).addComponent(_modal["default"]).addComponent(_toasts["default"]).addComponent(_selectDropdown["default"]).addComponent(_fixedHeader.fixedHeader).addComponent(_siteMenu.siteMenu).addComponent(_smartScroll.smartScroll).addComponent(_procedureSlider.procedureSlider).addComponent(_plansSlider.plansSlider).addComponent(_siteScrollProgressBar.siteScrollProgressBar).addComponent(_siteSearch.siteSearch);

    return _this;
  }

  (0, _createClass2["default"])(Page, [{
    key: "addComponent",
    value: function addComponent(fn) {
      var initialArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (_is_js["default"]["function"](fn)) {
        var component = fn.call.apply(fn, [this].concat((0, _toConsumableArray2["default"])(initialArgs)));
        if (component instanceof _Component["default"]) (0, _classPrivateFieldGet2["default"])(this, _components)[component.name] = component;
      }

      return this;
    }
  }, {
    key: "processComponents",
    value: function processComponents(action) {
      var _this2 = this;

      var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _classPrivateFieldGet2["default"])(this, _components);
      (0, _utilities.forIn)(components, function (key, component) {
        if (_is_js["default"].undefined(_this2[key])) _this2[key] = component;

        if (_is_js["default"]["function"](component[action])) {
          component[action]();
        }
      });
    }
  }, {
    key: "processResizeMethod",
    value: function processResizeMethod(action, method) {
      switch (action) {
        case 'add':
          method.call(this);

          _events.$events.resize('on', method);

          break;

        case 'remove':
          _events.$events.resize('off', method);

          break;
      }
    }
  }, {
    key: "resizeDependentMethods",
    value: function resizeDependentMethods(action) {
      var _this3 = this;

      this.options.resizeMethods = this.options.resizeMethods.map(function (target) {
        if (_is_js["default"]["function"](target)) {
          _this3.processResizeMethod(action, target);

          if (action === 'add') {
            var _ref;

            var fnName = Boolean(target.name) ? target.name : (0, _utilities.generateId)();
            return _ref = {}, (0, _defineProperty2["default"])(_ref, fnName, target), (0, _defineProperty2["default"])(_ref, "processed", true), _ref;
          }

          return {};
        } else {
          return action === 'add' ? target : {};
        }
      });
    }
  }, {
    key: "addResizeDependMethod",
    value: function addResizeDependMethod(method) {
      this.options.resizeMethods = [].concat((0, _toConsumableArray2["default"])(this.options.resizeMethods), [method]);
      this.resizeDependentMethods('add');
    }
  }, {
    key: "removeResizeDependMethod",
    value: function removeResizeDependMethod(method) {
      if (Boolean(method.name)) {
        var target = this.options.resizeMethods.find(function (obj) {
          return obj.hasOwnProperty(method.name) && _is_js["default"]["function"](obj[method.name]);
        });

        if (Boolean(target) && target.processed && _is_js["default"]["function"](target[method.name])) {
          this.processResizeMethod('remove', method);
          this.options.resizeMethods = this.options.resizeMethods.filter(function (m) {
            return m !== target;
          });
        } else {
          (0, _utilities.warn)('Required method not found!', 'Page class, removeResizeDependMethod');
        }
      } else {
        (0, _utilities.warn)('When deleting a resize depend method please use named functions', 'Page class, removeResizeDependMethod');
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.processComponents('init');
      this.resizeDependentMethods('add');
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Page.prototype), "init", this).call(this, this);
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.processComponents('destroy');
      this.resizeDependentMethods('remove');
      this.initialized = false;
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Page.prototype), "destroy", this).call(this, this);
      return this;
    }
  }]);
  return Page;
}(_Model2["default"]);

exports["default"] = Page;

/***/ }),

/***/ "./src/js/components/bootstrap.js":
/*!****************************************!*\
  !*** ./src/js/components/bootstrap.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.BootstrapOffcanvas = void 0;

var _offcanvas = _interopRequireDefault(__webpack_require__(/*! bootstrap/js/dist/offcanvas */ "./node_modules/bootstrap/js/dist/offcanvas.js"));

var _collapse = _interopRequireDefault(__webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js"));

var _modal = _interopRequireDefault(__webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js"));

var BootstrapOffcanvas = _offcanvas["default"];
exports.BootstrapOffcanvas = BootstrapOffcanvas;
var _default = {
  Offcanvas: _offcanvas["default"],
  Collapse: _collapse["default"],
  Dropdown: _dropdown["default"],
  Modal: _modal["default"]
};
exports["default"] = _default;

/***/ }),

/***/ "./src/js/components/fixedHeader.js":
/*!******************************************!*\
  !*** ./src/js/components/fixedHeader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fixedHeader = fixedHeader;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var header = _variables["default"].dom.header;
var hasClass = _dom.$dom.hasClass,
    addClass = _dom.$dom.addClass,
    removeClass = _dom.$dom.removeClass;
var headerHideClassName = 'header--hide';
var headerPaintClassName = 'header--paint';

function fixedHeader() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#js-header';
  var lastScroll = 0,
      defaultOffset = 100;

  var handleScroll = function handleScroll() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > lastScroll && !hasClass(header, headerHideClassName) && scrollPosition > defaultOffset) {
      addClass(header, headerHideClassName);
      addClass(header, headerPaintClassName);
    } else if (scrollPosition < lastScroll && hasClass(header, headerHideClassName)) {
      removeClass(header, headerHideClassName);
    } else if (scrollPosition < defaultOffset) {
      removeClass(header, headerPaintClassName);
    }

    lastScroll = scrollPosition;
  };

  return new _Component["default"]({
    name: 'fixedHeader',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      handleScroll();

      _events.$events.add('scroll', window, handleScroll);
    },
    onDestroy: function onDestroy() {
      _events.$events.remove('scroll', window, handleScroll);
    }
  });
}

/***/ }),

/***/ "./src/js/components/formValidation.js":
/*!*********************************************!*\
  !*** ./src/js/components/formValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formValidation = formValidation;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _validator = _interopRequireDefault(__webpack_require__(/*! @yaireo/validator */ "./node_modules/@yaireo/validator/validator.js"));

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var callAll = _dom.$dom.callAll,
    attr = _dom.$dom.attr,
    get = _dom.$dom.get,
    remove = _dom.$dom.remove,
    addClass = _dom.$dom.addClass,
    removeClass = _dom.$dom.removeClass,
    exist = _dom.$dom.exist;
var formValidationMessages = _variables["default"].formValidationMessages;

function formValidation() {
  var formSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-form-validate';
  var formGroupSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-group-validate';
  var formFieldSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-field-validate';
  var notifyClassName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'form__group-notify';
  var needValidateClassName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'is-need-validate';
  return new _Component["default"]({
    name: 'formValidation',
    requiredSelector: formSelector,
    onCreate: function onCreate() {
      this.validator = null;
    },
    onInit: function onInit() {
      var _this = this;

      this.validator = new _validator["default"]({
        classes: {
          item: formGroupSelector.replace('.', ''),
          bad: _variables["default"].classNames.invalid,
          alert: notifyClassName
        },
        texts: formValidationMessages
      });
      attr(formSelector, 'novalidate', '');

      this.checkField = function (formGroup) {
        if (formGroup instanceof Event) {
          var _formGroup = formGroup,
              target = _formGroup.target;
          if ((0, _utilities.isElement)(target)) formGroup = target.closest(formGroupSelector);
        }

        var field = get(formFieldSelector, formGroup);

        if ((0, _utilities.isElement)(field)) {
          var _this$validator$check = _this.validator.checkField(field),
              valid = _this$validator$check.valid,
              error = _this$validator$check.error;
        }
      };

      this.handleForm = function (event) {
        var form = event.target.closest(formSelector);
        event.preventDefault();
        callAll(formGroupSelector, _this.checkField, form);
        if (!_this.validator.checkAll(form).valid) event.preventDefault();
      };

      callAll(formGroupSelector, function (el) {
        return addClass(el, needValidateClassName);
      });

      _events.$events.add('focus blur', formFieldSelector, this.checkField).delegate.on('submit', formSelector, this.handleForm).on('input change', formGroupSelector, this.checkField);
    },
    onDestroy: function onDestroy() {
      this.validator = null;
      callAll(formSelector, function (form) {
        form.removeAttribute('novalidate');
        if (exist(formGroupSelector, form)) callAll(formGroupSelector, function (el) {
          return removeClass(el, needValidateClassName);
        }, form);
        if (exist('.' + notifyClassName, form)) callAll('.' + notifyClassName, function (el) {
          return remove(el);
        }, form);
      });

      _events.$events.remove('focus blur', formFieldSelector, this.checkField).delegate.off('submit', formSelector, this.handleForm).off('input change', formGroupSelector, this.checkField);
    }
  });
}

/***/ }),

/***/ "./src/js/components/lazyLoad.js":
/*!***************************************!*\
  !*** ./src/js/components/lazyLoad.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lazyLoad = lazyLoad;

var _vanillaLazyload = _interopRequireDefault(__webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js"));

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _variables$classNames = _variables["default"].classNames,
    lazyLoaded = _variables$classNames.lazyLoaded,
    error = _variables$classNames.error;
var get = _dom.$dom.get,
    attr = _dom.$dom.attr;

function lazyLoad() {
  var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var errorAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-error';
  var wrapperSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-lazy-image';
  var elements_selector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-lazy-image-element';
  var loaderSelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.js-lazy-image-loader';
  return new _Component["default"]({
    name: 'lazyLoad',
    requiredSelector: elements_selector,
    onCreate: function onCreate() {
      this.lazyInstance = null;
    },
    onInit: function onInit() {
      this.lazyInstance = new _vanillaLazyload["default"]({
        threshold: threshold,
        elements_selector: elements_selector,
        class_loaded: lazyLoaded,
        class_error: error,
        data_src: 'lazy-src',
        data_bg: 'lazy-bg',
        callback_loaded: function callback_loaded(el) {
          var wrapper = el.closest(wrapperSelector);
          el.removeAttribute(errorAttr);

          if ((0, _utilities.isElement)(wrapper)) {
            var preloader = get(loaderSelector, wrapper);
            if ((0, _utilities.isElement)(preloader)) preloader.remove();
          }
        },
        callback_error: function callback_error(el) {
          attr(el, errorAttr, _variables["default"].messages.lazyError);
          el.style.opacity = '1';
        }
      });
    },
    onDestroy: function onDestroy() {
      if (this.lazyInstance instanceof _vanillaLazyload["default"]) {
        this.lazyInstance.destroy();
        this.lazyInstance = null;
      }
    }
  });
}

/***/ }),

/***/ "./src/js/components/modal/index.js":
/*!******************************************!*\
  !*** ./src/js/components/modal/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = modal;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../../helpers/dom */ "./src/js/helpers/dom.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _utilities = __webpack_require__(/*! ../../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _bootstrap = _interopRequireDefault(__webpack_require__(/*! ../bootstrap */ "./src/js/components/bootstrap.js"));

var _notify = _interopRequireDefault(__webpack_require__(/*! ./notify */ "./src/js/components/modal/notify/index.js"));

var get = _dom.$dom.get,
    exist = _dom.$dom.exist,
    callAll = _dom.$dom.callAll;
var Modal = _bootstrap["default"].Modal;

function modal() {
  var modalSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-modal';
  var $Page = this;
  return new _Component["default"]({
    name: 'modal',
    requiredSelector: undefined,
    onCreate: function onCreate() {
      this.modals = {};
    },
    onInit: function onInit() {
      var _this = this;

      this.modalIsCashed = function (modalId) {
        return _this.modals.hasOwnProperty(modalId);
      };

      this.checkElementExist = function (id) {
        var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (exist('#' + id)) {
          if (_is_js["default"]["function"](cb)) {
            cb(get('#' + id));
          }
        } else {
          (0, _utilities.warn)("Modal element by id \"".concat(id, "\" is not found"), 'Modal Component');
        }
      };

      this.open = function (id) {
        _this.checkElementExist(id, function (elem) {
          if (_this.modalIsCashed(elem.modalId)) _this.modals[elem.modalId].show();
        });
      };

      this.close = function () {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (_is_js["default"]["null"](id)) {
          (0, _utilities.forIn)(_this.modals, function (_, modal) {
            return modal.hide();
          });
        } else {
          _this.checkElementExist(id, function (elem) {
            if (_this.modalIsCashed(elem.modalId)) _this.modals[elem.modalId].hide();
          });
        }
      };

      this.notify = _notify["default"].call($Page);

      if (exist(modalSelector)) {
        callAll(modalSelector, function (modalEl) {
          modalEl.modalId = (0, _utilities.generateId)();
          _this.modals[modalEl.modalId] = new Modal(modalEl);
        });
      }

      this.notify.addListeners();
    },
    onDestroy: function onDestroy() {
      this.close();
      this.notify.removeListeners();
      this.modals = {};
      this.open = Function.prototype;
      this.close = Function.prototype;
    }
  });
}

/***/ }),

/***/ "./src/js/components/modal/notify/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/modal/notify/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _templates = _interopRequireDefault(__webpack_require__(/*! ./templates */ "./src/js/components/modal/notify/templates.js"));

var _utilities = __webpack_require__(/*! ../../../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _dom = __webpack_require__(/*! ../../../helpers/dom */ "./src/js/helpers/dom.js");

var _bootstrap = _interopRequireDefault(__webpack_require__(/*! ../../bootstrap */ "./src/js/components/bootstrap.js"));

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _data = __webpack_require__(/*! ../../../helpers/data */ "./src/js/helpers/data.js");

var _events = __webpack_require__(/*! ../../../helpers/events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../../../variables */ "./src/js/variables.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Modal = _bootstrap["default"].Modal;
var append = _dom.$dom.append,
    get = _dom.$dom.get,
    createElement = _dom.$dom.createElement,
    text = _dom.$dom.text,
    createElementFromString = _dom.$dom.createElementFromString,
    remove = _dom.$dom.remove,
    hasClass = _dom.$dom.hasClass;
var globalSettingsAttrName = _variables["default"].globalSettingsAttrName;

function _default() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    embedPoint: document.body,
    closeText: 'Закрыть',
    closeIcon: 'close'
  };
  var currentModal = null;
  var $Page = this;

  var show = function show() {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!$Page.initialized) return currentModal;
    var defaults = {
      title: {
        tag: 'h2',
        attrs: {},
        content: false
      },
      description: {
        tag: 'p',
        attrs: {},
        content: false
      },
      markup: false
    };
    append(opts.embedPoint, createTemplate());
    var modalEl = document.getElementById(id);
    if (hasClass(modalEl, 'show')) return;
    if (_is_js["default"]["null"](currentModal)) currentModal = new Modal('#' + id);

    var payload = _data.$data.merge(defaults, p),
        title = payload.title,
        description = payload.description,
        markup = payload.markup,
        body = get('.modal-body', modalEl);

    if (checkContent(markup)) {
      append(body, createElementFromString(markup));
      currentModal.show();
      return currentModal;
    }

    var isMustToShown = true;

    if (checkContent(title.content)) {
      append(body, text(createElement(title.tag, _objectSpread({}, title.attrs)), title.content));
    } else {
      isMustToShown = false;
    }

    if (checkContent(description.content)) {
      append(body, text(createElement(description.tag, _objectSpread({}, description.attrs)), description.content));
    }

    if (isMustToShown) currentModal.show();
    return currentModal;
  },
      hide = function hide() {
    if (currentModal instanceof Modal) {
      currentModal.hide();
      currentModal = null;
    }
  };

  var id = (0, _utilities.generateId)(false),
      createTemplate = function createTemplate() {
    var modal = _templates["default"].modal(id),
        dialog = _templates["default"].dialog(),
        content = _templates["default"].content(),
        body = _templates["default"].body(),
        close = _templates["default"].close(),
        closeText = _templates["default"].closeText(opts.closeText),
        closeIcon = _templates["default"].closeIcon($Page[globalSettingsAttrName].images, opts.closeIcon);

    append(close, closeText);
    append(close, closeIcon);
    append(dialog, content);
    append(content, close);
    append(content, body);
    append(modal, dialog);
    return modal;
  },
      checkContent = function checkContent(content) {
    return content && _is_js["default"].string(content) && _is_js["default"].not.empty(content);
  },
      removeTemplate = function removeTemplate(event) {
    var modalEl = event.target.closest('#' + id);

    if (modalEl && !hasClass(modalEl, 'show')) {
      remove(get('#' + id));
      currentModal = null;
    }
  },
      addListeners = function addListeners() {
    _events.$events.delegate.on('hidden.bs.modal', '#' + id, removeTemplate);
  },
      removeListeners = function removeListeners() {
    _events.$events.delegate.off('hidden.bs.modal', '#' + id, removeTemplate);
  };

  return {
    show: show,
    hide: hide,
    addListeners: addListeners,
    removeListeners: removeListeners
  };
}

/***/ }),

/***/ "./src/js/components/modal/notify/templates.js":
/*!*****************************************************!*\
  !*** ./src/js/components/modal/notify/templates.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _dom = __webpack_require__(/*! ../../../helpers/dom */ "./src/js/helpers/dom.js");

var createElement = _dom.$dom.createElement,
    createElementFromString = _dom.$dom.createElementFromString;
var _default = {
  modal: function modal(id) {
    return createElement('div', {
      "class": 'modal js-modal fade modal--dynamic',
      ariaHidden: 'true',
      id: id
    });
  },
  dialog: function dialog() {
    return createElement('div', {
      "class": 'modal-dialog modal-dialog-centered modal-dialog-scrollable'
    });
  },
  content: function content() {
    return createElement('div', {
      "class": 'modal-content'
    });
  },
  body: function body() {
    return createElement('div', {
      "class": 'modal-body'
    });
  },
  close: function close() {
    return createElement('button', {
      "class": 'modal-close ms-auto d-flex align-items-center',
      type: 'button',
      dataBsDismiss: 'modal',
      ariaLabel: 'Close'
    });
  },
  closeText: function closeText(text) {
    return _dom.$dom.text(createElement('span', {
      "class": 'me-3'
    }), text);
  },
  closeIcon: function closeIcon(iconPath, iconName) {
    return createElementFromString("<svg class=\"svg-icon\"><use xlink:href=\"".concat(iconPath, "/sprite.svg#").concat(iconName, "\"></use></svg>"));
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./src/js/components/plansSlider.js":
/*!******************************************!*\
  !*** ./src/js/components/plansSlider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.plansSlider = plansSlider;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _swiper = _interopRequireWildcard(__webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function plansSlider() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#plans';
  return new _Component["default"]({
    name: 'plansSlider',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      this.swiper = new _swiper["default"]('.plans-swiper', {
        modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Scrollbar],
        direction: 'horizontal',
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          992: {
            slidesPerView: 2
          }
        },
        autoHeight: true,
        simulateTouch: true
      });
    },
    onDestroy: function onDestroy() {
      this.swiper = null;
    }
  });
}

/***/ }),

/***/ "./src/js/components/procedureSlider.js":
/*!**********************************************!*\
  !*** ./src/js/components/procedureSlider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.procedureSlider = procedureSlider;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _swiper = _interopRequireWildcard(__webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function procedureSlider() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#procedure';
  return new _Component["default"]({
    name: 'procedureSlider',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      this.swiper = new _swiper["default"]('.procedure-swiper', {
        modules: [_swiper.Navigation, _swiper.Pagination, _swiper.Scrollbar],
        direction: 'horizontal',
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        },
        autoHeight: true,
        simulateTouch: true
      });
    },
    onDestroy: function onDestroy() {
      this.swiper = null;
    }
  });
}

/***/ }),

/***/ "./src/js/components/selectDropdown.js":
/*!*********************************************!*\
  !*** ./src/js/components/selectDropdown.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = selectDropdown;

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var attr = _dom.$dom.attr,
    get = _dom.$dom.get,
    getAll = _dom.$dom.getAll,
    html = _dom.$dom.html,
    callAll = _dom.$dom.callAll,
    hasClass = _dom.$dom.hasClass,
    removeClass = _dom.$dom.removeClass,
    addClass = _dom.$dom.addClass;

function selectDropdown() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-select-dropdown]';
  var buttonSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[data-select-dropdown-button]';
  var menuSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '[data-select-dropdown-menu]';
  var selectedOutputSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '[data-select-dropdown-selected]';
  var optionSelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '[data-select-dropdown-option]';
  var outputSelector = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '[data-select-dropdown-output]';
  var valueAttr = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'data-value';
  var selectedState = _variables["default"].classNames.selected;

  function checkOptions(root) {
    var options = getAll(optionSelector, root),
        button = get(buttonSelector, root),
        buttonContent = get(selectedOutputSelector, root),
        output = get(outputSelector, root),
        selectedOption = options.find(function (option) {
      return hasClass(option, selectedState);
    });

    if ((0, _utilities.isElement)(selectedOption)) {
      attr(button, valueAttr, attr(selectedOption, valueAttr));
      html(buttonContent, html(selectedOption));
      var val = attr(selectedOption, valueAttr);
      output.value = val;

      _events.$events.emit(_variables["default"].customEventNames.selectDropdownSelected, {
        value: val
      }, root);
    }
  }

  function handleClick(event) {
    var option = event.target.closest(optionSelector),
        options = getAll(optionSelector, this);

    if ((0, _utilities.isElement)(option)) {
      removeClass(options.filter(function (opt) {
        return opt !== option;
      }), selectedState);
      addClass(option, selectedState);
      checkOptions(this);
    }
  }

  function handleToggle() {
    _dom.$dom[hasClass(get(menuSelector, this), 'show') ? 'removeClass' : 'addClass'](this, _variables["default"].classNames.focused);
  }

  return new _Component["default"]({
    name: 'selectDropdown',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      callAll(rootSelector, checkOptions);

      _events.$events.delegate.on('click tap', rootSelector, handleClick).on('show.bs.dropdown', rootSelector, handleToggle).on('hide.bs.dropdown', rootSelector, handleToggle);
    },
    onDestroy: function onDestroy() {
      _events.$events.delegate.off('click tap', rootSelector, handleClick).off('show.bs.dropdown', rootSelector, handleToggle).off('hide.bs.dropdown', rootSelector, handleToggle);
    }
  });
}

/***/ }),

/***/ "./src/js/components/siteMenu.js":
/*!***************************************!*\
  !*** ./src/js/components/siteMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.siteMenu = siteMenu;

var _bootstrap = __webpack_require__(/*! ./bootstrap */ "./src/js/components/bootstrap.js");

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var menu = _variables["default"].dom.menu;
var attr = _dom.$dom.attr,
    get = _dom.$dom.get,
    addClass = _dom.$dom.addClass,
    removeClass = _dom.$dom.removeClass,
    hasClass = _dom.$dom.hasClass;

function siteMenu() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#siteMenu';

  var offcanvasMenu = _bootstrap.BootstrapOffcanvas.getOrCreateInstance(menu);

  var burgerButtonElement = get('.header__menu-burger');
  var burgerButtonClass = 'header__menu-burger--active';
  var lastAnchor = null;
  var hideMenuTimeout = null;

  function hideMenuHandler() {
    if (hasClass(burgerButtonElement, burgerButtonClass)) {
      removeClass(burgerButtonElement, burgerButtonClass);
    }

    if ((0, _utilities.isElement)(lastAnchor)) {
      var href = attr(lastAnchor, 'href');
      var section = get(href);
      var yScrollDistance = window.scrollY + section.getBoundingClientRect().top;
      hideMenuTimeout = setTimeout(function () {
        window.scrollTo({
          top: yScrollDistance,
          behavior: "smooth"
        });
        clearTimeout(hideMenuTimeout);
      }, 0);
    }
  }

  var clickHandler = function clickHandler(event) {
    var menuLink = event.target.closest('.menu-link');

    if (Boolean(menuLink)) {
      event.preventDefault();
      offcanvasMenu.hide();
      lastAnchor = menuLink;
    }
  };

  var openMenuHundler = function openMenuHundler() {
    if (!hasClass(burgerButtonElement, burgerButtonClass)) {
      addClass(burgerButtonElement, burgerButtonClass);
    }
  };

  return new _Component["default"]({
    name: 'siteMenu',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      _events.$events.delegate.on('click tap', rootSelector, clickHandler).on('hidden.bs.offcanvas', rootSelector, hideMenuHandler).on('show.bs.offcanvas', rootSelector, openMenuHundler);
    },
    onDestroy: function onDestroy() {
      _events.$events.delegate.off('click tap', rootSelector, clickHandler).off('hidden.bs.offcanvas', rootSelector, hideMenuHandler).off('show.bs.offcanvas', rootSelector, openMenuHundler);
    }
  });
}

/***/ }),

/***/ "./src/js/components/siteScrollProgressBar.js":
/*!****************************************************!*\
  !*** ./src/js/components/siteScrollProgressBar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.siteScrollProgressBar = siteScrollProgressBar;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _style = __webpack_require__(/*! ../helpers/style */ "./src/js/helpers/style.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var get = _dom.$dom.get;
var set = _style.$style.set;

function siteScrollProgressBar() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-progressbar';

  var htmlElement = _dom.$dom.get('html');

  var progressbar = get('.header__progressbar');

  var siteScrollHandler = function siteScrollHandler() {
    var documentScroll = htmlElement.scrollTop;
    var documentHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
    var currentScroll = documentScroll / documentHeight * 100;
    set(progressbar, 'width', currentScroll + "%");
  };

  return new _Component["default"]({
    name: 'siteScrollProgressBar',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      _events.$events.add('scroll', window, siteScrollHandler);
    },
    onDestroy: function onDestroy() {
      _events.$events.remove('scroll', window, siteScrollHandler);
    }
  });
}

/***/ }),

/***/ "./src/js/components/siteSearch.js":
/*!*****************************************!*\
  !*** ./src/js/components/siteSearch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.siteSearch = siteSearch;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _utilities = __webpack_require__(/*! ../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var get = _dom.$dom.get,
    addClass = _dom.$dom.addClass,
    removeClass = _dom.$dom.removeClass,
    hasClass = _dom.$dom.hasClass,
    attr = _dom.$dom.attr;

function siteSearch() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-search';
  var searchElement = get(rootSelector),
      activeClass = 'is-active',
      buttonSubmitSelector = '.js-search-submit',
      buttonCloseSelector = '.js-search-close';
  var buttonType = null;

  var clickHandler = function clickHandler(event) {
    var target = event.target;
    var submitButton = target.closest(buttonSubmitSelector);
    var closeButton = target.closest(buttonCloseSelector);

    if ((0, _utilities.isElement)(submitButton)) {
      addClass(searchElement, activeClass);
      buttonType = 'submit';
    }

    if ((0, _utilities.isElement)(closeButton)) {
      removeClass(searchElement, activeClass);
      buttonType = 'button';
    }
  };

  var buttonTypeSwapper = function buttonTypeSwapper(event) {
    attr(get(buttonSubmitSelector, event.target.closest(rootSelector)), 'type', buttonType);
  };

  return new _Component["default"]({
    name: 'siteSearch',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      _events.$events.delegate.on('click tap', rootSelector, clickHandler).on('transitionend', '.header__search-wrapper', buttonTypeSwapper);
    },
    onDestroy: function onDestroy() {
      _events.$events.delegate.off('click tap', rootSelector, clickHandler).off('transitionend', '.header__search-wrapper', buttonTypeSwapper);
    }
  });
}

/***/ }),

/***/ "./src/js/components/smartScroll.js":
/*!******************************************!*\
  !*** ./src/js/components/smartScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.smartScroll = smartScroll;

var _Component = _interopRequireDefault(__webpack_require__(/*! ../classes/Component */ "./src/js/classes/Component.js"));

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ../helpers/events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var getAll = _dom.$dom.getAll,
    hasClass = _dom.$dom.hasClass,
    addClass = _dom.$dom.addClass,
    removeClass = _dom.$dom.removeClass,
    each = _dom.$dom.each,
    attr = _dom.$dom.attr;
var headerLinkActiveClassName = 'header__nav-link--active';
var header = _variables["default"].dom.header;
var linkDomElements = getAll('.header__nav-link');
var sectionDomElements = getAll('.js-scroll-anchor');
var lastId = null;

function smartScroll() {
  var rootSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#js-header';

  var scrollHandler = function scrollHandler() {
    var scrollDistance = window.scrollY;
    var currentItem = sectionDomElements.filter(function (section) {
      return section.offsetTop - header.clientHeight < scrollDistance;
    });
    currentItem = currentItem[currentItem.length - 1];
    var currentId = attr(currentItem, 'id');

    if (lastId !== currentId) {
      lastId = currentId;
      each(linkDomElements, function (element) {
        if (hasClass(element, headerLinkActiveClassName)) {
          removeClass(element, headerLinkActiveClassName);
        }
      });
      var filteredLinks = linkDomElements.filter(function (element) {
        return attr(element, 'href') === "#".concat(currentId);
      });
      addClass(filteredLinks, headerLinkActiveClassName);
    }
  };

  return new _Component["default"]({
    name: 'smartScroll',
    requiredSelector: rootSelector,
    onInit: function onInit() {
      _events.$events.add('scroll', window, scrollHandler);
    },
    onDestroy: function onDestroy() {
      _events.$events.remove('scroll', window, scrollHandler);
    }
  });
}

/***/ }),

/***/ "./src/js/components/toasts/Toastify.js":
/*!**********************************************!*\
  !*** ./src/js/components/toasts/Toastify.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _utilities = __webpack_require__(/*! ../../helpers/_utilities */ "./src/js/helpers/_utilities.js");

var _dom = __webpack_require__(/*! ../../helpers/dom */ "./src/js/helpers/dom.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _style = __webpack_require__(/*! ../../helpers/style */ "./src/js/helpers/style.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../../variables */ "./src/js/variables.js"));

var createElementFromString = _dom.$dom.createElementFromString;

(function (root, factory) {
  if (( false ? 0 : (0, _typeof2["default"])(module)) === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(void 0, function (global) {
  var Toastify = function Toastify(options) {
    return new Toastify.lib.init(options);
  },
      rootClassName = 'toast',
      activeClassName = _variables["default"].classNames.active;

  var adaptiveBreakpoint = null;
  Toastify.defaults = {
    oldestFirst: true,
    text: 'Текст уведомления по умолчанию',
    node: undefined,
    duration: 3000,
    selector: undefined,
    onDismiss: Function.prototype,
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "".concat(rootClassName, "-top"),
    position: '',
    icon: '',
    className: '',
    stopOnFocus: true,
    onClick: Function.prototype,
    offset: {
      x: 0,
      y: 0
    },
    escapeMarkup: true,
    style: {
      background: ''
    },
    breakpoint: _variables["default"].breakpoints.m
  };
  Toastify.lib = Toastify.prototype = {
    constructor: Toastify,
    init: function init(options) {
      if (!options) options = {};
      this.options = {};
      this.toastElement = null;
      this.options.text = options.text || Toastify.defaults.text;
      this.options.node = options.node || Toastify.defaults.node;
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration;
      this.options.selector = options.selector || Toastify.defaults.selector;
      this.options.onDismiss = options.onDismiss || Toastify.defaults.onDismiss;
      this.options.destination = options.destination || Toastify.defaults.destination;
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow;
      this.options.close = options.close || Toastify.defaults.close;
      this.options.gravity = options.gravity === 'bottom' ? "".concat(rootClassName, "-bottom") : Toastify.defaults.gravity;
      this.options.position = options.position || Toastify.defaults.position;
      this.options.icon = options.icon || Toastify.defaults.icon;
      this.options.className = options.className || Toastify.defaults.className;
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus;
      this.options.onClick = options.onClick || Toastify.defaults.onClick;
      this.options.offset = options.offset || Toastify.defaults.offset;
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.style = options.style || Toastify.defaults.style;
      this.options.style.background =  false || options.backgroundColor;
      this.options.breakpoint = options.breakpoint || Toastify.defaults.breakpoint;
      adaptiveBreakpoint = this.options.breakpoint;
      return this;
    },
    buildToast: function buildToast() {
      if (!this.options) throw "Toastify is not initialized";
      var divElement = document.createElement('div');
      divElement.className = "".concat(rootClassName, " ").concat(activeClassName, " ") + this.options.className;

      if (Boolean(this.options.position)) {
        divElement.className += " ".concat(rootClassName, "-") + this.options.position;
      }

      divElement.className += ' ' + this.options.gravity;

      for (var property in this.options.style) {
        if (this.options.style.hasOwnProperty(property)) {
          divElement.style[property] = this.options.style[property];
        }
      }

      if (this.options.node && (0, _utilities.isNode)(this.options.node)) {
        divElement.appendChild(this.options.node);
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = "<p class=\"".concat(rootClassName, "-text\">").concat(this.options.text, "</p>");
        }

        if (this.options.icon !== '') {
          var iconElement = createElementFromString(this.options.icon);

          if (!(0, _utilities.isElement)(iconElement)) {
            iconElement = document.createElement('img');
            iconElement.src = this.options.icon;
          }

          iconElement.classList.add("".concat(rootClassName, "-icon"));
          divElement.insertAdjacentElement(this.options.position === 'left' ? 'beforeend' : 'afterbegin', iconElement);
        }
      }

      if (this.options.close === true) {
        var closeElement = _dom.$dom.createElement('button', {
          type: 'button',
          "class": "".concat(rootClassName, "-close")
        });

        closeElement.innerHTML = '<svg class="svg-icon"><use xlink:href="img/sprite.svg#close"></use></svg>';
        closeElement.addEventListener('click', function (event) {
          event.stopPropagation();
          this.removeElement(this.toastElement);
          window.clearTimeout(this.toastElement.timeOutValue);
        }.bind(this));
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        divElement.insertAdjacentElement(this.options.position === 'left' && width > this.options.breakpoint ? 'afterbegin' : 'beforeend', closeElement);
      }

      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        divElement.addEventListener('mouseover', function () {
          window.clearTimeout(divElement.timeOutValue);
        });
        divElement.addEventListener('mouseleave', function () {
          divElement.timeOutValue = window.setTimeout(function () {
            self.removeElement(divElement);
          }, self.options.duration);
        });
      }

      if (_is_js["default"].not.undefined(this.options.destination) && _is_js["default"].string(this.options.destination)) {
        divElement.addEventListener('click', function (event) {
          event.stopPropagation();

          if (this.options.newWindow === true) {
            window.open(this.options.destination, '_blank');
          } else {
            window.location = this.options.destination;
          }
        }.bind(this));
      }

      if (_is_js["default"]["function"](this.options.onClick) && _is_js["default"].undefined(this.options.destination)) {
        divElement.addEventListener('click', function (event) {
          event.stopPropagation();
          this.options.onClick();
        }.bind(this));
      }

      if (_is_js["default"].object(this.options.offset)) {
        var x = getAxisOffsetAValue("x", this.options),
            y = getAxisOffsetAValue("y", this.options),
            xOffset = this.options.position === 'left' ? x : '-' + x,
            yOffset = this.options.gravity === "".concat(rootClassName, "-top") ? y : '-' + y;
        divElement.style.transform = "translate(".concat(xOffset, ", ").concat(yOffset, ")");
      }

      return divElement;
    },
    showToast: function showToast() {
      this.toastElement = this.buildToast();
      var rootElement;

      if (_is_js["default"].string(this.options.selector)) {
        rootElement = document.querySelector(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || this.options.selector instanceof ShadowRoot) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      if (!rootElement) throw 'Root element is not defined';
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(function () {
          this.removeElement(this.toastElement);
        }.bind(this), this.options.duration);
      }

      return this;
    },
    hideToast: function hideToast() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }

      this.removeElement(this.toastElement);
    },
    removeElement: function removeElement(toastElement) {
      toastElement.className = toastElement.className.replace(" ".concat(activeClassName), '');
      window.setTimeout(function () {
        if (this.options.node && this.options.node.parentNode) {
          this.options.node.parentNode.removeChild(this.options.node);
        }

        if (toastElement.parentNode) {
          toastElement.parentNode.removeChild(toastElement);
        }

        this.options.onDismiss.call(toastElement);
        Toastify.reposition();
      }.bind(this), _style.$style.get(toastElement, 'transition-duration', true) * 1000 || 0);
    }
  };

  Toastify.reposition = function () {
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15
    };
    var offsetSize = {
      top: 15,
      bottom: 15
    };
    var allToasts = document.getElementsByClassName(rootClassName);
    var classUsed;

    for (var i = 0; i < allToasts.length; i++) {
      if (containsClass(allToasts[i], "".concat(rootClassName, "-top")) === true) {
        classUsed = "".concat(rootClassName, "-top");
      } else {
        classUsed = "".concat(rootClassName, "-bottom");
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(rootClassName.length + 1, classUsed.length - 1); // 9 - обрезает toastify-

      var toastsBetweenOffset = 15,
          width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      if (width <= adaptiveBreakpoint) {
        allToasts[i].style[classUsed] = offsetSize[classUsed] + 'px';
        offsetSize[classUsed] += height + toastsBetweenOffset;
      } else {
        if (containsClass(allToasts[i], "".concat(rootClassName, "-left")) === true) {
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + 'px';
          topLeftOffsetSize[classUsed] += height + toastsBetweenOffset;
        } else {
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + 'px';
          topRightOffsetSize[classUsed] += height + toastsBetweenOffset;
        }
      }
    }

    return this;
  };

  function getAxisOffsetAValue(axis, options) {
    if (options.offset[axis]) {
      if (isNaN(options.offset[axis])) {
        return options.offset[axis];
      } else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';
  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== 'string') {
      return false;
    } else return elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1;
  }

  Toastify.lib.init.prototype = Toastify.lib;
  return Toastify;
});

/***/ }),

/***/ "./src/js/components/toasts/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/toasts/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

var _data = __webpack_require__(/*! ../../helpers/data */ "./src/js/helpers/data.js");

var _Component = _interopRequireDefault(__webpack_require__(/*! ../../classes/Component */ "./src/js/classes/Component.js"));

var _Toastify = _interopRequireDefault(__webpack_require__(/*! ./Toastify */ "./src/js/components/toasts/Toastify.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../../variables */ "./src/js/variables.js"));

var merge = _data.$data.merge;
var globalSettingsAttrName = _variables["default"].globalSettingsAttrName;

function _default() {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = {
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    escapeMarkup: false
  };
  var pluginOptions = merge(defaults, settings),
      icons = {
    success: 'check',
    warning: 'exclamation',
    info: 'info',
    danger: 'warning'
  };
  var $Page = this;
  return new _Component["default"]({
    name: 'toast',
    requiredSelector: undefined,
    onInit: function onInit() {
      this.show = function () {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
        return (0, _Toastify["default"])(merge(pluginOptions, {
          text: text,
          className: 'status--' + status,
          icon: "<svg class=\"svg-icon\"><use xlink:href=\"".concat($Page[globalSettingsAttrName].images, "/sprite.svg#").concat(icons[status], "\"></use></svg>")
        })).showToast();
      };
    }
  });
}

/***/ }),

/***/ "./src/js/helpers/_service.js":
/*!************************************!*\
  !*** ./src/js/helpers/_service.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _dom = __webpack_require__(/*! ./dom */ "./src/js/helpers/dom.js");

var _data = __webpack_require__(/*! ./data */ "./src/js/helpers/data.js");

var _events = __webpack_require__(/*! ./events */ "./src/js/helpers/events.js");

var _style = __webpack_require__(/*! ./style */ "./src/js/helpers/style.js");

var _ui = __webpack_require__(/*! ./ui */ "./src/js/helpers/ui.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var APIName = _variables["default"].$EXTERNAL_API_NAME;
window[APIName] = {};
[{
  name: 'dom',
  value: _dom.$dom
}, {
  name: 'data',
  value: _data.$data
}, {
  name: 'is',
  value: _is_js["default"]
}, {
  name: 'events',
  value: _events.$events
}, {
  name: 'style',
  value: _style.$style
}, {
  name: 'ui',
  value: _ui.$ui
}].forEach(function (item) {
  return window[APIName][item.name] = item.value;
});

/***/ }),

/***/ "./src/js/helpers/_utilities.js":
/*!**************************************!*\
  !*** ./src/js/helpers/_utilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.warn = warn;
exports.toDashesCase = toDashesCase;
exports.isElement = isElement;
exports.isNode = isNode;
exports.filterStringArgs = filterStringArgs;
exports.optimizeTarget = optimizeTarget;
exports.preventDefault = preventDefault;
exports.sleep = sleep;
exports.loop = loop;
exports.getRandomInt = getRandomInt;
exports.replaceAll = replaceAll;
exports.cssPropertyToCamelCase = cssPropertyToCamelCase;
exports.generateId = generateId;
exports.addZero = addZero;
exports.forIn = forIn;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

function warn(message, locationName) {
  if (_variables["default"].debugLogs) {
    console.warn(message + ". Warning source - ".concat(locationName));
  } else {
    if (_variables["default"].debugLogsDisabledNotify) {
      console.info('%cDebug mode is disabled. You will not see any error messages from "$helpers"', 'color: orange;');
    }
  }
}

function toDashesCase(string) {
  return string.replace(/[A-Z]/g, function (m) {
    return '-' + m.toLowerCase();
  });
}

function isElement(target) {
  return (typeof HTMLElement === "undefined" ? "undefined" : (0, _typeof2["default"])(HTMLElement)) === 'object' ? target instanceof HTMLElement : target && (0, _typeof2["default"])(target) === 'object' && target !== null && target.nodeType === 1 && typeof target.nodeName === 'string';
}

function isNode(target) {
  return (typeof Node === "undefined" ? "undefined" : (0, _typeof2["default"])(Node)) === "object" ? target instanceof Node : target && (0, _typeof2["default"])(target) === "object" && typeof target.nodeType === "number" && typeof target.nodeName === "string";
}

function filterStringArgs(targets) {
  return targets.toString().split(/[\s,]+/).filter(function (e) {
    return e.length;
  });
}

function optimizeTarget(target) {
  return _is_js["default"].not.array(target) && !isElement(target) && target !== window ? document.querySelector(target) : target;
}

function preventDefault(event) {
  (event.originalEvent || event).preventDefault();
  return event;
}

function sleep(ms) {
  var tm = null;
  return new Promise(function (resolve) {
    tm = setTimeout(resolve, ms);
  }).then(function () {
    clearTimeout(tm);
    tm = null;
  });
}

function loop(arr, cb) {
  if (_is_js["default"].not.array(arr) || _is_js["default"].not["function"](cb)) return;

  for (var i = 0; i < arr.length; i++) {
    cb.call(arr[i], arr[i], i);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function cssPropertyToCamelCase(string) {
  return string.replace(/-([a-z])/g, function (_all, letter) {
    return letter.toUpperCase();
  });
}

function generateId() {
  var usePostfix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var postfix = '--' + getRandomInt(0, 10000);
  return '_' + Math.random().toString(36).substr(2, 9) + (usePostfix ? postfix : '');
}

function addZero(val) {
  return ('0' + val).slice(-2);
}

function forIn(obj, cb) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      cb.call(obj[key], key, obj[key]);
    }
  }
}

/***/ }),

/***/ "./src/js/helpers/data.js":
/*!********************************!*\
  !*** ./src/js/helpers/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$data = void 0;

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js"));

var $data = function () {
  var localAPIs = {};
  localAPIs.merge = _deepmerge["default"];

  localAPIs.cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj));
  };

  return localAPIs;
}();

exports.$data = $data;

/***/ }),

/***/ "./src/js/helpers/dom.js":
/*!*******************************!*\
  !*** ./src/js/helpers/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$dom = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _utilities = __webpack_require__(/*! ./_utilities */ "./src/js/helpers/_utilities.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var $dom = function () {
  var localAPIs = {},
      defineContext = function defineContext(context) {
    var value = null;

    if (_is_js["default"].string(context)) {
      value = document.querySelector(context);
    } else if (_is_js["default"].domNode(context)) {
      value = context;
    } else if (_is_js["default"].undefined(context) || _is_js["default"]["null"](context)) {
      value = document;
    }

    if (value === null) (0, _utilities.warn)("The DOM-context for finding an element is not defined, context is specified as \"".concat(context, "\""), '$dom-helper');
    return value;
  },
      doWithClass = function doWithClass(target, className) {
    var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    className = (0, _utilities.filterStringArgs)(className);
    localAPIs.each(className, function (name) {
      return localAPIs.callAll(target, function (el) {
        return el.classList[action](name);
      });
    });
    return (0, _utilities.optimizeTarget)(target);
  },
      doWithInnerContent = function doWithInnerContent(target, options) {
    var results = [],
        setMode = _is_js["default"].not["null"](options.newContent);

    localAPIs.callAll(target, function (element) {
      if (_is_js["default"]["null"](options.newContent)) {
        results.push((0, _defineProperty2["default"])({
          element: element
        }, options.resultKey, element[options.resultMethod]));
      } else {
        element[options.resultMethod] = options.newContent;
      }
    });

    if (results.length === 0) {
      results = null;
    } else if (results.length === 1) {
      results = results[0][options.resultKey];
    }

    return setMode ? (0, _utilities.optimizeTarget)(target) : results;
  },
      doWithInsert = function doWithInsert(element, insertTarget, position) {
    if (!element || !insertTarget) return;
    if (_is_js["default"].string(element)) element = localAPIs.get(element);
    if (_is_js["default"].string(insertTarget)) insertTarget = localAPIs.get(insertTarget);
    var insertTargetElement;

    switch (position) {
      case 'after':
        insertTargetElement = insertTarget.nextSibling;
        break;

      case 'before':
        insertTargetElement = insertTarget;
        break;
    }

    insertTarget.parentNode.insertBefore(element, insertTargetElement);
    return element;
  },
      doWithAppend = function doWithAppend(target, element, position) {
    if (!element || !target) return;
    if (_is_js["default"].string(element)) element = localAPIs.get(element);
    if (_is_js["default"].string(target)) target = localAPIs.get(target);

    switch (position) {
      case 'start':
        target.insertBefore(element, target.childNodes[0] || null);
        break;

      case 'end':
        target.insertBefore(element, null);
        break;
    }

    return element;
  };

  localAPIs.get = function (selector, context) {
    context = defineContext(context);
    var target = null;

    try {
      target = context.querySelector(selector);
    } catch (e) {
      (0, _utilities.warn)("Could not find element by selector \"".concat(selector, "\" within context \"").concat(context, "\". A description of the original error follows"), e);
    }

    if (!(0, _utilities.isElement)(target)) (0, _utilities.warn)("Method \"get\" - element by selector \"".concat(selector, "\" not found"), '$dom-helper');
    return target;
  };

  localAPIs.getAll = function (selector, context) {
    context = defineContext(context);
    var target = [];

    try {
      target = Array.prototype.slice.call(context.querySelectorAll(selector));
    } catch (e) {
      (0, _utilities.warn)("Failed to execute array of elements by selector \"".concat(selector, "\" within context \"").concat(context, "\"\". A description of the original error follows"), e);
    }

    if (target.length === 0) (0, _utilities.warn)("Method \"getAll\" - array of elements by selector \"".concat(selector, "\" is empty"), '$dom-helper');
    return target;
  };

  localAPIs.each = function (collection, callback) {
    if (_is_js["default"].not.array(collection) || collection.length === 0) {
      (0, _utilities.warn)('Method each - collection is not a array or array is empty', '$dom-helper');
      return;
    }

    if (_is_js["default"].not["function"](callback)) {
      (0, _utilities.warn)('Method each - callback is not a function', '$dom-helper');
      return;
    }

    var l = collection.length;

    for (var i = 0; i < l; i++) {
      callback.call(collection[i], collection[i], i);
    }

    return collection;
  };

  localAPIs.callAll = function (target, callback) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

    if ((0, _utilities.isElement)(target) || (0, _utilities.isNode)(target) || target === window) {
      callback(target);
      return target;
    }

    if (_is_js["default"].string(target)) target = localAPIs.getAll(target, defineContext(context));

    if (_is_js["default"].array(target) && target.length > 0) {
      localAPIs.each(target, callback);
      return target;
    }

    return null;
  };

  localAPIs.addClass = function (target, className) {
    return doWithClass(target, className, 'add');
  };

  localAPIs.removeClass = function (target, className) {
    return doWithClass(target, className, 'remove');
  };

  localAPIs.hasClass = function (element, className) {
    return element.classList.contains(className);
  };

  localAPIs.toggleClass = function (target, className) {
    return doWithClass(target, className, 'toggle');
  };

  localAPIs.getParent = function (element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (_is_js["default"].not["null"](selector)) {
      do {
        if (element.matches(selector)) return element;
        element = element.parentElement || element.parentNode;
      } while (element !== null && element.nodeType === 1);
    } else {
      return element.parentNode;
    }

    return null;
  };

  localAPIs.attr = function (target, property) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var results = [],
        setMode = _is_js["default"].string(property) && _is_js["default"].string(value) || _is_js["default"].object(property) && _is_js["default"].not["function"](property);

    localAPIs.callAll(target, function (element) {
      if (_is_js["default"].string(property)) {
        if (_is_js["default"]["null"](value)) {
          results.push({
            element: element,
            value: element.getAttribute(property)
          });
        } else if (_is_js["default"].string(value)) {
          element.setAttribute((0, _utilities.toDashesCase)(property), value);
        }
      } else if (_is_js["default"].object(property) && _is_js["default"].not["function"](property)) {
        for (var _i = 0, _Object$entries = Object.entries(property); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              _value = _Object$entries$_i[1];

          element.setAttribute((0, _utilities.toDashesCase)(key), _value);
        }
      }
    });

    if (results.length === 0) {
      results = null;
    } else if (results.length === 1) {
      results = results[0].value;
    }

    return setMode ? (0, _utilities.optimizeTarget)(target) : results;
  };

  localAPIs.html = function (target) {
    var newHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return doWithInnerContent(target, {
      newContent: newHtml,
      resultKey: 'html',
      resultMethod: 'innerHTML'
    });
  };

  localAPIs.text = function (target) {
    var newText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return doWithInnerContent(target, {
      newContent: newText,
      resultKey: 'text',
      resultMethod: 'textContent'
    });
  };

  localAPIs.createElement = function (tagName) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isSVG = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (_is_js["default"].not.string(tagName)) return;
    var el = isSVG ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName);

    if (attrs !== null && _is_js["default"].object(attrs) && _is_js["default"].not.array(attrs)) {
      for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          el.setAttribute(isSVG ? key : (0, _utilities.toDashesCase)(key), attrs[key]);
        }
      }
    }

    return el;
  };

  localAPIs.createElementFromString = function (string) {
    var div = document.createElement('div');
    div.innerHTML = string.trim();
    return div.firstChild;
  };

  localAPIs.replace = function (element, newElement) {
    element.parentNode.replaceChild(newElement, element);
    return newElement;
  };

  localAPIs.wrap = function (element, wrapperElement) {
    element.parentNode.insertBefore(wrapperElement, element);
    wrapperElement.appendChild(element);
    return wrapperElement;
  };

  localAPIs.remove = function (target) {
    return localAPIs.callAll(target, function (element) {
      return element.parentNode.removeChild(element);
    });
  };

  localAPIs.insertAfter = function (element, insertTarget) {
    return doWithInsert(element, insertTarget, 'after');
  };

  localAPIs.insertBefore = function (element, insertTarget) {
    return doWithInsert(element, insertTarget, 'before');
  };

  localAPIs.append = function (appendTarget, element) {
    return doWithAppend(appendTarget, element, 'end');
  };

  localAPIs.prepend = function (prependTarget, element) {
    return doWithAppend(prependTarget, element, 'start');
  };

  localAPIs.clone = function (element) {
    return element.cloneNode(true);
  };

  localAPIs.ready = function (callback) {
    if (_is_js["default"].not["function"](callback)) {
      (0, _utilities.warn)('$dom.ready callback is not a function', '$dom-helper');
      return;
    }

    if (document.readyState === 'complete') callback.call(window);
    document.addEventListener('DOMContentLoaded', callback.bind(window), {
      once: true
    });
  };

  localAPIs.exist = function (target) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (_is_js["default"]["null"](target)) return false;

    if (Boolean(context)) {
      if (_is_js["default"].string(context)) {
        context = document.querySelector(context);
      }

      var elToBool = function elToBool(t) {
        return Boolean((0, _utilities.isElement)(context.querySelector(t)));
      };

      if ((0, _utilities.isElement)(context) || (0, _utilities.isNode)(context)) {
        if (_is_js["default"].string(target)) return elToBool(target);

        if (_is_js["default"].array(target) && target.length > 0) {
          return target.every(function (t) {
            return elToBool(t);
          });
        }
      }

      return false;
    } else {
      (0, _utilities.warn)('Context for exist-method is not defined', '$dom.exist');
    }

    return false;
  };

  return localAPIs;
}();

exports.$dom = $dom;

/***/ }),

/***/ "./src/js/helpers/events.js":
/*!**********************************!*\
  !*** ./src/js/helpers/events.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$events = void 0;

var _dom = __webpack_require__(/*! ./dom */ "./src/js/helpers/dom.js");

var _utilities = __webpack_require__(/*! ./_utilities */ "./src/js/helpers/_utilities.js");

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var $events = function () {
  var localAPIs = {},
      isTouch = _is_js["default"].touchDevice(),
      mouseEvents = ['click', 'dblclick'],
      touchEvents = ['tap', 'dbltap', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'longtap'],
      processEventTypes = function processEventTypes(types, callback) {
    return (0, _utilities.filterStringArgs)(types).forEach(function (type) {
      return callback(type);
    });
  },
      needToExcludeEventByDevice = function needToExcludeEventByDevice(type) {
    return isTouch && mouseEvents.includes(type) || !isTouch && touchEvents.includes(type);
  },
      createTouch = function () {
    if (typeof document.createEvent !== 'function') return false;
    var defaults = {
      swipeThreshold: 100,
      tapThreshold: 150,
      // range of time where a tap event could be detected
      dbltapThreshold: 200,
      // delay needed to detect a double tap
      longtapThreshold: 1000,
      // delay needed to detect a long tap
      tapPrecision: 30 // touch events boundaries

    };

    var pointerEvent = function pointerEvent(type) {
      var lo = type.toLowerCase(),
          ms = 'MS' + type;
      return navigator.msPointerEnabled ? ms : window.PointerEvent ? lo : false;
    },
        touchEvent = function touchEvent(name) {
      return 'on' + name in window ? name : false;
    },
        wasTouch = false,
        tapNum = 0,
        pointerId,
        currX,
        currY,
        cachedX,
        cachedY,
        timestamp,
        target,
        dblTapTimer,
        longtapTimer,
        touchEvents = {
      touchstart: touchEvent('touchstart') || pointerEvent('PointerDown'),
      touchend: touchEvent('touchend') || pointerEvent('PointerUp'),
      touchmove: touchEvent('touchmove') || pointerEvent('PointerMove')
    },
        isTheSameFingerId = function isTheSameFingerId(e) {
      return !e.pointerId || typeof pointerId === 'undefined' || e.pointerId === pointerId;
    },
        setListener = function setListener(elm, events, callback) {
      var eventsArray = events.split(' '),
          i = eventsArray.length;

      while (i--) {
        elm.addEventListener(eventsArray[i], callback, false);
      }
    },
        getPointerEvent = function getPointerEvent(event) {
      var hasTargetTouches = Boolean(event.targetTouches && event.targetTouches.length);

      switch (true) {
        case Boolean(event.target.touches):
          return event.target.touches[0];

        case hasTargetTouches && typeof event.targetTouches[0].pageX !== 'undefined':
          return event.targetTouches[0];

        case hasTargetTouches && Boolean(event.targetTouches[0].touches):
          return event.targetTouches[0].touches[0];

        default:
          return event;
      }
    },
        isMultipleTouches = function isMultipleTouches(event) {
      return (event.targetTouches || event.target.touches || []).length > 1;
    },
        getTimestamp = function getTimestamp() {
      return new Date().getTime();
    },
        sendEvent = function sendEvent(elm, eventName, originalEvent, data) {
      var customEvent = document.createEvent('Event');
      customEvent.originalEvent = originalEvent;
      data = data || {};
      data.x = currX;
      data.y = currY;

      if (customEvent.initEvent) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            customEvent[key] = data[key];
          }
        }

        customEvent.initEvent(eventName, true, true);
        elm.dispatchEvent(customEvent);
      }

      while (elm) {
        if (elm['on' + eventName]) elm['on' + eventName](customEvent);
        elm = elm.parentNode;
      }
    },
        onTouchStart = function onTouchStart(e) {
      if (!isTheSameFingerId(e) || isMultipleTouches(e)) return;
      pointerId = e.pointerId;
      if (e.type !== 'mousedown') wasTouch = true; // skip this event we don't need to track it now

      if (e.type === 'mousedown' && wasTouch) return;
      var pointer = getPointerEvent(e); // caching the current x

      cachedX = currX = pointer.pageX; // caching the current y

      cachedY = currY = pointer.pageY;
      longtapTimer = setTimeout(function () {
        sendEvent(e.target, 'longtap', e);
        target = e.target;
      }, defaults.longtapThreshold); // we will use these variables on the touchend events

      timestamp = getTimestamp();
      tapNum++;
    },
        onTouchEnd = function onTouchEnd(e) {
      if (!isTheSameFingerId(e) || isMultipleTouches(e)) return;
      pointerId = undefined; // skip the mouse events if previously a touch event was dispatched
      // and reset the touch flag

      if (e.type === 'mouseup' && wasTouch) {
        wasTouch = false;
        return;
      }

      var eventsArr = [],
          now = getTimestamp(),
          deltaY = cachedY - currY,
          deltaX = cachedX - currX; // clear the previous timer if it was set

      clearTimeout(dblTapTimer); // kill the long tap timer

      clearTimeout(longtapTimer);
      if (deltaX <= -defaults.swipeThreshold) eventsArr.push('swipeRight');
      if (deltaX >= defaults.swipeThreshold) eventsArr.push('swipeLeft');
      if (deltaY <= -defaults.swipeThreshold) eventsArr.push('swipeDown');
      if (deltaY >= defaults.swipeThreshold) eventsArr.push('swipeUp');

      if (eventsArr.length) {
        for (var i = 0; i < eventsArr.length; i++) {
          var eventName = eventsArr[i];
          sendEvent(e.target, eventName, e, {
            distance: {
              x: Math.abs(deltaX),
              y: Math.abs(deltaY)
            }
          });
        } // reset the tap counter


        tapNum = 0;
      } else {
        if (cachedX >= currX - defaults.tapPrecision && cachedX <= currX + defaults.tapPrecision && cachedY >= currY - defaults.tapPrecision && cachedY <= currY + defaults.tapPrecision) {
          if (timestamp + defaults.tapThreshold - now >= 0) {
            // Here you get the Tap event
            sendEvent(e.target, tapNum >= 2 && target === e.target ? 'dbltap' : 'tap', e);
            target = e.target;
          }
        } // reset the tap counter


        dblTapTimer = setTimeout(function () {
          tapNum = 0;
        }, defaults.dbltapThreshold);
      }
    },
        onTouchMove = function onTouchMove(e) {
      if (!isTheSameFingerId(e)) return; // skip the mouse move events if the touch events were previously detected

      if (e.type === 'mousemove' && wasTouch) return;
      var pointer = getPointerEvent(e);
      currX = pointer.pageX;
      currY = pointer.pageY;
    };

    setListener(document, touchEvents.touchstart + (defaults.justTouchEvents ? '' : ' mousedown'), onTouchStart);
    setListener(document, touchEvents.touchend + (defaults.justTouchEvents ? '' : ' mouseup'), onTouchEnd);
    setListener(document, touchEvents.touchmove + (defaults.justTouchEvents ? '' : ' mousemove'), onTouchMove);
    return function (options) {
      for (var opt in options) {
        if (options.hasOwnProperty(opt)) {
          defaults[opt] = options[opt];
        }
      }

      return defaults;
    };
  }();

  var resizeTimout;

  localAPIs.add = function (types, target, callback) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var defaults = {
      once: false
    };
    processEventTypes(types, function (type) {
      if (!needToExcludeEventByDevice(type)) {
        _dom.$dom.callAll(target, function (element) {
          element.addEventListener(type, callback, Object.assign(defaults, options));
        });
      }
    });
    return this;
  };

  localAPIs.remove = function (types, target, callback) {
    processEventTypes(types, function (type) {
      _dom.$dom.callAll(target, function (element) {
        return element.removeEventListener(type, callback);
      });
    });
    return this;
  };

  localAPIs.emit = function (type) {
    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
    if (!type) return;
    var event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true,
      detail: detail
    });
    element.dispatchEvent(event);
    return this;
  };

  localAPIs.debounce = function (targetFunction) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;
      if (timeout) window.cancelAnimationFrame(timeout);
      timeout = window.requestAnimationFrame(function () {
        return targetFunction.apply(context, args);
      });
    };
  };

  localAPIs.delegate = {
    processedEvents: {},
    isBubbleEvent: function isBubbleEvent(type) {
      return !['blur', 'error', 'focus', 'mouseenter', 'mouseleave', 'scroll'].includes(type);
    },
    exceptionElement: function exceptionElement(selector) {
      return ['*', 'window', 'document', 'document.documentElement', window, document, document.documentElement].indexOf(selector) > -1;
    },
    shouldDelegateRun: function shouldDelegateRun(target, selector) {
      if (this.exceptionElement(selector)) return true;

      if (typeof selector !== 'string' && (0, _utilities.isElement)(selector) && selector.contains) {
        return selector === target || selector.contains(target);
      }

      return (0, _utilities.isElement)(target) ? target.closest(selector) : false;
    },
    eventDelegateHandler: function eventDelegateHandler(event) {
      var _this = this;

      var target = event.target,
          type = event.type;
      if (!this.processedEvents[type] || needToExcludeEventByDevice(type)) return;
      this.processedEvents[type].forEach(function (listener) {
        var selector = listener.selector,
            callback = listener.callback;
        if (!_this.shouldDelegateRun(target, selector, type)) return;
        var returned = null;

        if (_this.exceptionElement(selector)) {
          if (selector === '*') {
            returned = _dom.$dom.getAll('*');
          } else if (selector === 'document' || selector === document) {
            returned = document;
          } else if (selector === 'window' || selector === window) {
            returned = window;
          } else if (selector === 'html' || selector === document.documentElement || selector === 'document.documentElement') {
            returned = document.documentElement;
          }
        } else {
          returned = (0, _utilities.isElement)(selector) ? selector : target.closest(selector);
        }

        callback.call(returned, event);
      });
    },
    getDelegateEventIndex: function getDelegateEventIndex(arr, selector, callback) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].selector === selector && arr[i].callback.toString() === callback.toString()) return i;
      }

      return -1;
    },
    processEventSetup: function processEventSetup(type, selector, callback) {
      if (!needToExcludeEventByDevice(type)) {
        if (!this.processedEvents[type]) {
          this.processedEvents[type] = [];
          window.addEventListener(type, this.eventDelegateHandler.bind(this), true);
        }

        this.processedEvents[type].push({
          selector: selector,
          callback: callback
        });
      }
    },
    on: function on(types, selector, callback) {
      var _this2 = this;

      processEventTypes(types, function (type) {
        if (_this2.isBubbleEvent(type)) {
          _this2.processEventSetup(type, selector, callback);
        } else {
          (0, _utilities.warn)("Warning! Event type \"".concat(type, "\" cannot be delegated! Please use the \"add\" method to not receive this notification. Method \"add\" was used automatically"), '$events-helper, delegate.on');
          localAPIs.add(type, selector, callback);
        }
      });
      return this;
    },
    off: function off(types, selector, callback) {
      var _this3 = this;

      processEventTypes(types, function (type) {
        if (!_this3.processedEvents[type]) return;

        if (_this3.processedEvents[type].length < 2 || !selector) {
          delete _this3.processedEvents[type];
          window.removeEventListener(type, _this3.eventDelegateHandler.bind(_this3), true);
          return;
        }

        var eventIndex = _this3.getDelegateEventIndex(_this3.processedEvents[type], selector, callback);

        if (eventIndex < 0) return;

        _this3.processedEvents[type].splice(eventIndex, 1);
      });
      return this;
    },
    once: function once(types, selector, callback) {
      localAPIs.delegate.on(types, selector, function temp(event) {
        var target = event.target;
        var returnedSelf = (0, _utilities.isElement)(selector) ? selector : target.closest(selector);
        callback.call(returnedSelf, event, returnedSelf);
        localAPIs.delegate.off(types, selector, temp);
      });
      return this;
    },

    get list() {
      var obj = {};

      for (var type in this.processedEvents) {
        if (this.processedEvents.hasOwnProperty(type)) {
          obj[type] = this.processedEvents[type];
        }
      }

      return obj;
    }

  };
  localAPIs.delegate.on(_is_js["default"].mobile() ? 'orientationchange' : 'resize', window, function (event) {
    clearTimeout(resizeTimout);
    resizeTimout = setTimeout(function () {
      localAPIs.emit(_variables["default"].customEventNames.resize, {
        originalEvent: event
      }, document.body);
    }, _variables["default"].resizeDebounce);
  });

  localAPIs.resize = function (action, callback) {
    action = action.trim();

    if (action === 'on' || action === 'off') {
      localAPIs.delegate[action](_variables["default"].customEventNames.resize, document.body, callback);
    } else {
      (0, _utilities.warn)('Action for resize-callback not specified or specified incorrectly', '$events-helper');
    }
  };

  localAPIs.touchConfigure = createTouch;
  return localAPIs;
}();

exports.$events = $events;

/***/ }),

/***/ "./src/js/helpers/style.js":
/*!*********************************!*\
  !*** ./src/js/helpers/style.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$style = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _dom = __webpack_require__(/*! ./dom */ "./src/js/helpers/dom.js");

var _events = __webpack_require__(/*! ./events */ "./src/js/helpers/events.js");

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _is_js = _interopRequireDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));

var _data = __webpack_require__(/*! ./data */ "./src/js/helpers/data.js");

var _utilities = __webpack_require__(/*! ./_utilities */ "./src/js/helpers/_utilities.js");

var $style = function () {
  var localAPIs = {},
      callAll = _dom.$dom.callAll,
      get = _dom.$dom.get;

  localAPIs.get = function (element) {
    var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var clean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (!Boolean(element)) return;
    if (_is_js["default"].string(element)) element = get(element);
    var styles = getComputedStyle(element);
    if (_is_js["default"].undefined(property)) return styles;
    return clean ? parseFloat(styles[property]) : styles[property];
  };

  localAPIs.set = function (target, property) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    callAll(target, function (el) {
      if (_is_js["default"].object(property)) {
        for (var _i = 0, _Object$entries = Object.entries(property); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              _value = _Object$entries$_i[1];

          el.style[key] = _value;
        }
      } else if (_is_js["default"].string(property) && _is_js["default"].string(value)) {
        el.style[(0, _utilities.cssPropertyToCamelCase)(property)] = value;
      }
    });
    return (0, _utilities.optimizeTarget)(target);
  };

  localAPIs.remove = function (target, property) {
    property = (0, _utilities.filterStringArgs)(property);
    callAll(target, function (el) {
      _dom.$dom.each(property, function (prop) {
        prop = (0, _utilities.toDashesCase)(prop.trim());
        el.style.removeProperty(prop);
      });
    });
    return (0, _utilities.optimizeTarget)(target);
  };

  localAPIs.offset = function (element) {
    var relativeTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'document';
    if (_is_js["default"].string(element)) element = get(element);

    switch (relativeTo) {
      case 'document':
        var rect = element.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          left: rect.left + scrollLeft,
          top: rect.top + scrollTop
        };

      case 'parent':
        return {
          left: element.offsetLeft,
          top: element.offsetTop
        };

      default:
        return null;
    }
  };

  return localAPIs;
}(window);

exports.$style = $style;

/***/ }),

/***/ "./src/js/helpers/ui.js":
/*!******************************!*\
  !*** ./src/js/helpers/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$ui = void 0;

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

var _utilities = __webpack_require__(/*! ./_utilities */ "./src/js/helpers/_utilities.js");

var _style = __webpack_require__(/*! ./style */ "./src/js/helpers/style.js");

var $ui = function () {
  var APIs = {},
      set = _style.$style.set,
      remove = _style.$style.remove;

  APIs.blockScroll = function (action) {
    switch (action) {
      case 'enable':
        var sbw = _variables["default"].scrollbarWidth;
        set(document.body, {
          overflow: 'hidden',
          paddingRight: sbw + 'px'
        });
        break;

      case 'disable':
        remove(document.body, 'overflow, padding-right');
        break;

      default:
        (0, _utilities.warn)('Missing argument in blockScroll function', '$ui-helper');
    }
  };

  return APIs;
}(window);

exports.$ui = $ui;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(/*! svgxuse */ "./node_modules/svgxuse/svgxuse.js");

__webpack_require__(/*! ./helpers/_service */ "./src/js/helpers/_service.js");

__webpack_require__(/*! ./modules/run */ "./src/js/modules/run.js");

__webpack_require__(/*! ./modules/backend */ "./src/js/modules/backend.js");

/***/ }),

/***/ "./src/js/modules/backend.js":
/*!***********************************!*\
  !*** ./src/js/modules/backend.js ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/modules/run.js":
/*!*******************************!*\
  !*** ./src/js/modules/run.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _dom = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

var _regular = _interopRequireDefault(__webpack_require__(/*! ../pages/regular */ "./src/js/pages/regular.js"));

var _home = _interopRequireDefault(__webpack_require__(/*! ../pages/home */ "./src/js/pages/home.js"));

var _variables = _interopRequireDefault(__webpack_require__(/*! ../variables */ "./src/js/variables.js"));

__webpack_require__(/*! ../components/bootstrap */ "./src/js/components/bootstrap.js");

_dom.$dom.ready(function () {
  this.currentPage = [_regular["default"], _home["default"]].find(function (page) {
    return page.initialized;
  });

  if (Boolean(this.currentPage)) {
    this.currentPage.variables = _variables["default"];
    this.currentPage.init();
  }
});

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _Page = _interopRequireDefault(__webpack_require__(/*! ../classes/Page */ "./src/js/classes/Page.js"));

var homePage = new _Page["default"]({
  onCreate: function onCreate() {// console.log('HomePage create')
  },
  onInit: function onInit() {// console.log('HomePage init')
  },
  onDestroy: function onDestroy() {// console.log('HomePage destroy')
  },
  name: 'home',
  rootElementId: 'js-page-home'
});
var _default = homePage;
exports["default"] = _default;

/***/ }),

/***/ "./src/js/pages/regular.js":
/*!*********************************!*\
  !*** ./src/js/pages/regular.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _Page = _interopRequireDefault(__webpack_require__(/*! ../classes/Page */ "./src/js/classes/Page.js"));

var regularPage = new _Page["default"]({
  name: 'regular',
  rootElementId: 'js-page-regular'
});
var _default = regularPage;
exports["default"] = _default;

/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var variables = {
  $EXTERNAL_API_NAME: '$HELPERS',
  gsapDefaultDuration: .25,
  carouselDefaultDuration: 800,
  resizeDebounce: 100,
  globalSettingsAttrName: 'paths',
  debugLogs: true,
  debugLogsDisabledNotify: true,
  customEventNames: {
    resize: 'resize-done',
    selectDropdownSelected: 'select-dropdown-selected'
  },
  classNames: {
    disabled: 'is-disabled',
    hover: 'is-hover',
    active: 'is-active',
    involved: 'is-involved',
    lazyLoading: 'is-loading',
    lazyPreloader: 'lazy__preloader',
    lazyImage: 'lazy__image',
    lazyLoaded: 'is-loaded',
    fixed: 'is-fixed',
    focused: 'is-focused',
    filled: 'is-filled',
    invalid: 'is-invalid',
    error: 'is-error',
    selected: 'is-selected'
  },
  formValidationMessages: {
    invalid: 'Некорректное значение',
    "short": 'input is too short',
    "long": 'input is too long',
    checked: 'Должно быть отмечено',
    empty: 'Пожалуйста, заполните это поле',
    select: 'Please select an option',
    number_min: 'too low',
    number_max: 'too high',
    url: 'invalid URL',
    number: 'not a number',
    email: 'Некорректный e-mail',
    email_repeat: 'emails do not match',
    date: 'invalid date',
    time: 'invalid time',
    password_repeat: 'Пароли не совпадают',
    no_match: 'no match',
    complete: 'Ввод не завершён'
  },

  get windowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  },

  get windowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  },

  scrollbarWidth: window.innerWidth - document.documentElement.clientWidth,
  breakpoints: {
    m: 375,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  dom: {
    header: document.getElementById('js-header'),
    wrapper: document.getElementById('js-page-wrapper'),
    footer: document.getElementById('js-footer'),
    menu: document.getElementById('siteMenu')
  },
  messages: {
    lazyError: 'Ошибка загрузки изображения'
  }
};
var _default = variables;
exports["default"] = _default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp4template"] = self["webpackChunkgulp4template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map