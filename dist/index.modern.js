/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'intersection-observer';
import 'element-closest-polyfill';
import 'regenerator-runtime/runtime';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import { KetSerializer, MolSerializer, Ketcher, FormatterFactory, StereLabelStyleType, StereoColoringType, Bond as Bond$2, Elements, AtomList, StereoLabel, findStereoAtoms, RxnArrowMode, SimpleObjectMode, SGroup, Pile, getStereoAtomsMap, identifyStructFormat, SupportedFormat, ChemicalMimeType, SdfSerializer, FunctionalGroupsProvider, SaltsAndSolventsProvider, KetcherAsyncEvents, ElementColor, formatProperties, fromAtomsAttrs, Vec2, FunctionalGroup, Fragment as Fragment$1, OperationType, fracAngle, Action, fromSgroupDeletion, fromFragmentDeletion, fromAtomAddition, fromBondAddition, Atom as Atom$2, bondChangingAction, fromBondsAttrs, fromChain, getItemsToFuse, getHoverToFuse, fromItemsFuse, fromStereoFlagUpdate, Scale, checkOverlapping, fromSeveralSgroupAddition, SgContexts, fromSgroupAction, fromSimpleObjectResizing, fromArrowResizing, fromMultipleMove, fromTextDeletion, fromTextUpdating, fromOneAtomDeletion, fromOneBondDeletion, fromArrowDeletion, fromPlusDeletion, fromSimpleObjectDeletion, fromPaste, RGroup as RGroup$2, fromRGroupFragment, fromUpdateIfThen, fromRGroupAttrs, fromArrowAddition, fromPlusAddition, fromRotate, fromFlip, fromBondAlign, fromSimpleObjectAddition, fromTemplateOnBondAction, fromTemplateOnCanvas, fromTemplateOnAtom, fromTextCreation, fromHighlightCreate, fromHighlightClear, fromNewCanvas, Struct, Render, fromDescriptorsAlign, setExpandSGroup, getPropertiesByFormat, StereoFlag, getPropertiesByImgFormat, Generics, TextCommand } from 'ketcher-core';
import * as React from 'react';
import React__default, { createRef, Component, useState, useEffect, useRef, useMemo, createElement, forwardRef, useCallback, useLayoutEffect, Fragment as Fragment$2 } from 'react';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import clsx from 'clsx';
import _typeof from '@babel/runtime/helpers/typeof';
import Ajv from 'ajv';
import { pick, range, capitalize, omit, without, findLastIndex, findIndex, pickBy, isEmpty, isEqual, throttle, debounce, xor, upperFirst, escapeRegExp, flow, filter, reduce } from 'lodash/fp';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import ReactDOM from 'react-dom';
import { connect, useDispatch, useSelector, Provider } from 'react-redux';
import { combineReducers, createStore as createStore$1, applyMiddleware } from 'redux';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import 'redux-logger';
import thunk from 'redux-thunk';
import { throttle as throttle$1, inRange, isEqual as isEqual$1, range as range$1 } from 'lodash';
import useResizeObserver from 'use-resize-observer/polyfilled';
import { useInView } from 'react-intersection-observer';
import styled from '@emotion/styled';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import { IconButton as IconButton$1, Collapse, ClickAwayListener, Button as Button$1, Popover, createTheme, ThemeProvider } from '@mui/material';
import * as KN from 'w3c-keyname';
import { isIE } from 'react-device-detect';
import { ContextMenu, MenuItem, ContextMenuTrigger, hideMenu } from 'react-contextmenu';
import _classPrivateFieldSet from '@babel/runtime/helpers/classPrivateFieldSet';
import _classPrivateFieldGet from '@babel/runtime/helpers/classPrivateFieldGet';
import { Subscription, PipelineSubscription, DOMSubscription } from 'subscription';
import _toArray from '@babel/runtime/helpers/toArray';
import MuiSelect from '@mui/material/Select';
import MenuItem$1 from '@mui/material/MenuItem';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { saveAs } from 'file-saver';
import FontFaceObserver from 'font-face-observer';
import Viewer from 'miew-react';
import { useDropzone } from 'react-dropzone';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import { css } from '@emotion/react';
import Accordion$1 from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { createSelector } from 'reselect';
import Tabs$1 from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'draft-js/dist/Draft.css';
import { Modifier, EditorState, convertFromRaw, RichUtils, Editor as Editor$4, convertToRaw, getDefaultKeyBinding } from 'draft-js';
import createStyles from 'draft-js-custom-styles';
import _extends$2X from '@babel/runtime/helpers/extends';

function createApi(structServiceProvider, defaultOptions) {
  var structService = structServiceProvider.createStructService(defaultOptions);
  var info = structService.info();
  return Object.assign(info, {
    info: structService.info.bind(structService),
    convert: structService.convert.bind(structService),
    layout: structService.layout.bind(structService),
    clean: structService.clean.bind(structService),
    aromatize: structService.aromatize.bind(structService),
    dearomatize: structService.dearomatize.bind(structService),
    calculateCip: structService.calculateCip.bind(structService),
    automap: structService.automap.bind(structService),
    check: structService.check.bind(structService),
    calculate: structService.calculate.bind(structService),
    recognize: structService.recognize.bind(structService),
    generateImageAsBase64: structService.generateImageAsBase64.bind(structService),
    generateInchIKey: structService.generateInchIKey.bind(structService)
  });
}

var appContext = React__default.createContext({});

var errorsContext = React__default.createContext({});

var settingsContext = React__default.createContext({});

var formContext = React__default.createContext(null);

var basicAtoms = ['H', 'C', 'N', 'O', 'S', 'P', 'F', 'Cl', 'Br', 'I'];
var atomCuts = {
  H: 'h',
  C: 'c',
  N: 'n',
  O: 'o',
  S: 's',
  P: 'p',
  F: 'f',
  Cl: 'Shift+c',
  Br: 'b',
  I: 'i',
  A: 'a',
  Q: 'q',
  R: 'r',
  K: 'k',
  M: 'm',
  Si: 'Shift+s',
  Na: 'Shift+n',
  X: 'x',
  D: 'd',
  B: 'Shift+b'
};
var atoms = Object.keys(atomCuts).reduce(function (res, label) {
  res["atom-".concat(label.toLowerCase())] = {
    title: "Atom ".concat(label),
    shortcut: atomCuts[label],
    action: {
      tool: 'atom',
      opts: {
        label: label
      }
    }
  };
  return res;
}, {});

function copyAs(type) {
  var state = global.currentState;
  var editor = state.editor;
  var struct = editor.structSelected();
  var errorHandler = editor.errorHandler;
  var serializer;
  try {
    switch (type) {
      case 'mol':
        {
          serializer = new MolSerializer();
          break;
        }
      case 'ket':
        {
          serializer = new KetSerializer();
          break;
        }
      default:
        {
          serializer = new KetSerializer();
          break;
        }
    }
    var simpleObjectOrText = Boolean(struct.simpleObjects.size || struct.texts.size);
    if (simpleObjectOrText && serializer instanceof MolSerializer) {
      errorHandler('This feature is not available for Simple objects and Text objects');
      return null;
    }
    var structData = serializer.serialize(struct);
    if (window.clipboardData) {
      window.clipboardData.setData('text', structData);
    } else {
      navigator.clipboard.writeText(structData);
    }
  } catch (_unused) {
    errorHandler('This feature is not available in your browser');
  }
}

function copyImageToClipboard() {
  return _copyImageToClipboard.apply(this, arguments);
}
function _copyImageToClipboard() {
  _copyImageToClipboard = _asyncToGenerator( _regeneratorRuntime.mark(function _callee() {
    var state, editor, server, options, struct, errorHandler, factory, service, structStr, ketcher, image, item;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = global.currentState;
            editor = state.editor;
            server = state.server;
            options = state.options;
            struct = editor.structSelected();
            errorHandler = editor.errorHandler;
            _context.prev = 6;
            factory = new FormatterFactory(server);
            service = factory.create('ket', options);
            _context.next = 11;
            return service.getStructureFromStructAsync(struct);
          case 11:
            structStr = _context.sent;
            ketcher = new Ketcher(editor, server, {}, factory);
            _context.next = 15;
            return ketcher.generateImage(structStr, {
              outputFormat: 'png',
              backgroundColor: '255, 255, 255'
            });
          case 15:
            image = _context.sent;
            item = new ClipboardItem(_defineProperty({}, image.type, image));
            _context.next = 19;
            return navigator.clipboard.write([item]);
          case 19:
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](6);
            errorHandler('This feature is not available in your browser');
          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 21]]);
  }));
  return _copyImageToClipboard.apply(this, arguments);
}

function isHidden(options, buttonName) {
  var _options$buttons, _options$buttons$butt;
  return Boolean((_options$buttons = options.buttons) === null || _options$buttons === void 0 ? void 0 : (_options$buttons$butt = _options$buttons[buttonName]) === null || _options$buttons$butt === void 0 ? void 0 : _options$buttons$butt.hidden);
}

var debugObj = {
  'force-update': {
    shortcut: 'Ctrl+Shift+r',
    action: function action(editor) {
      editor.update(true);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'force-update');
    }
  },
  'qs-serialize': {
    shortcut: 'Alt+Shift+r',
    action: function action(editor) {
      var molSerializer = new MolSerializer();
      var molStr = molSerializer.serialize(editor.struct());
      var molQs = 'mol=' + encodeURIComponent(molStr).replace(/%20/g, '+');
      var qs = document.location.search;
      document.location.search = !qs ? '?' + molQs
      : qs.search('mol=') === -1 ? qs + '&' + molQs : qs.replace(/mol=[^&$]*/, molQs);
    }
  },
  hidden: function hidden(options) {
    return isHidden(options, 'qs-serialize');
  }
};

var classes$O = {"cliparea":"cliparea-module_cliparea__GdPrN"};

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ieCb = window.clipboardData;
var ClipArea = function (_Component) {
  _inherits(ClipArea, _Component);
  var _super = _createSuper$c(ClipArea);
  function ClipArea(props) {
    var _this;
    _classCallCheck(this, ClipArea);
    _this = _super.call(this, props);
    _this.textAreaRef = createRef();
    return _this;
  }
  _createClass(ClipArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var el = this.textAreaRef.current;
      this.target = this.props.target || el.parentNode;
      this.listeners = {
        mouseup: function mouseup(event) {
          if (el === event.target || !isActiveElement(event.target) && _this2.props.focused()) {
            autoselect(el);
          }
        },
        mousedown: function mousedown(event) {
          if (event.shiftKey && !isActiveElement(event.target)) event.preventDefault();
        },
        copy: function copy(event) {
          if (_this2.props.focused() && _this2.props.onCopy) {
            var data = _this2.props.onCopy();
            if (data) _copy(event.clipboardData, data);
            event.preventDefault();
          }
        },
        cut: function cut(event) {
          if (_this2.props.focused() && _this2.props.onCut) {
            var data = _this2.props.onCut();
            if (data) _copy(event.clipboardData, data);
            event.preventDefault();
          }
        },
        paste: function paste(event) {
          if (_this2.props.focused() && _this2.props.onPaste) {
            var data = _paste(event.clipboardData, _this2.props.formats);
            if (data) _this2.props.onPaste(data);
            event.preventDefault();
          }
        }
      };
      Object.keys(this.listeners).forEach(function (en) {
        _this2.target.addEventListener(en, _this2.listeners[en]);
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;
      Object.keys(this.listeners).forEach(function (en) {
        _this3.target.removeEventListener(en, _this3.listeners[en]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return jsx("textarea", {
        ref: this.textAreaRef,
        className: clsx('cliparea', classes$O.cliparea),
        contentEditable: true,
        autoFocus: true
        ,
        suppressContentEditableWarning: true
      });
    }
  }]);
  return ClipArea;
}(Component);
function isActiveElement(el) {
  if (el.tagName === 'INPUT' && el.type === 'button') return false;
  return ['INPUT', 'SELECT', 'TEXTAREA', 'OPTION', 'LABEL'].includes(el.tagName);
}
function autoselect(cliparea) {
  cliparea.value = ' ';
  cliparea.select();
}
function _copy(cb, data) {
  if (!cb && ieCb) {
    ieCb.setData('text', data['text/plain']);
  } else {
    var curFmt = null;
    cb.setData('text/plain', data['text/plain']);
    try {
      Object.keys(data).forEach(function (fmt) {
        curFmt = fmt;
        cb.setData(fmt, data[fmt]);
      });
    } catch (ex) {
    }
  }
}
function _paste(cb, formats) {
  var data = {};
  if (!cb && ieCb) {
    data['text/plain'] = ieCb.getData('text');
  } else {
    data['text/plain'] = cb.getData('text/plain');
    data = formats.reduce(function (res, fmt) {
      var d = cb.getData(fmt);
      if (d) res[fmt] = d;
      return res;
    }, data);
  }
  return data;
}
var actions = ['cut', 'copy', 'paste'];
function exec(action) {
  var enabled = document.queryCommandSupported(action);
  if (enabled) {
    try {
      enabled = document.execCommand(action) || window.ClipboardEvent || ieCb;
    } catch (ex) {
      enabled = false;
    }
  }
  return enabled;
}

function ownKeys$15(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$15(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$15(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$15(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var editor = {
  resetToSelect: {
    title: 'Reset to Select Tool',
    "enum": [true, 'paste', false],
    enumNames: ['on', 'After Paste', 'off'],
    "default": 'paste'
  },
  rotationStep: {
    title: 'Rotation Step, ??',
    type: 'integer',
    minimum: 1,
    maximum: 90,
    "default": 15
  }
};
var render = {
  showValenceWarnings: {
    title: 'Show valence warnings',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  atomColoring: {
    title: 'Atom coloring',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  showStereoFlags: {
    title: 'Show the Stereo flags',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  stereoLabelStyle: {
    title: "Label display at\xA0stereogenic\xA0centers",
    "enum": [StereLabelStyleType.IUPAC, StereLabelStyleType.Classic, StereLabelStyleType.On, StereLabelStyleType.Off],
    enumNames: ['IUPAC style', 'Classic', 'On', 'Off'],
    "default": StereLabelStyleType.IUPAC
  },
  colorOfAbsoluteCenters: {
    title: ' Absolute Center color',
    type: 'string',
    "default": '#ff0000'
  },
  colorOfAndCenters: {
    title: 'AND Centers color',
    type: 'string',
    "default": '#0000cd'
  },
  colorOfOrCenters: {
    title: 'OR Centers color',
    type: 'string',
    "default": '#228b22'
  },
  colorStereogenicCenters: {
    title: 'Color stereogenic centers',
    "enum": [StereoColoringType.LabelsOnly, StereoColoringType.BondsOnly, StereoColoringType.LabelsAndBonds, StereoColoringType.Off],
    enumNames: ['Labels Only', 'Bonds Only', 'Labels And Bonds', 'Off'],
    "default": StereoColoringType.LabelsOnly
  },
  autoFadeOfStereoLabels: {
    title: 'Auto fade And/Or center labels',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  absFlagLabel: {
    title: 'Text of Absolute flag',
    type: 'string',
    "default": 'ABS (Chiral)'
  },
  andFlagLabel: {
    title: 'Text of AND flag',
    type: 'string',
    "default": 'AND Enantiomer'
  },
  mixedFlagLabel: {
    title: 'Text of Mixed flag',
    type: 'string',
    "default": 'Mixed'
  },
  orFlagLabel: {
    title: 'Text of OR flag',
    type: 'string',
    "default": 'OR Enantiomer'
  },
  font: {
    title: 'Font',
    type: 'string',
    "default": '30px Arial'
  },
  fontsz: {
    title: 'Font size',
    type: 'integer',
    "default": 13,
    minimum: 1,
    maximum: 96
  },
  fontszsub: {
    title: 'Sub font size',
    type: 'integer',
    "default": 13,
    minimum: 1,
    maximum: 96
  },
  carbonExplicitly: {
    title: 'Display carbon explicitly',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  showCharge: {
    title: 'Display charge',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  showValence: {
    title: 'Display valence',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  showHydrogenLabels: {
    title: 'Show hydrogen labels',
    "enum": ['off', 'Hetero', 'Terminal', 'Terminal and Hetero', 'on'],
    "default": 'on'
  },
  aromaticCircle: {
    title: 'Aromatic Bonds as circle',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  doubleBondWidth: {
    title: 'Double bond width',
    type: 'integer',
    "default": 6,
    minimum: 1,
    maximum: 96
  },
  bondThickness: {
    title: 'Bond thickness',
    type: 'integer',
    "default": 2,
    minimum: 1,
    maximum: 96
  },
  stereoBondWidth: {
    title: 'Stereo (Wedge) bond width',
    type: 'integer',
    "default": 6,
    minimum: 1,
    maximum: 96
  }
};
var server = {
  'dearomatize-on-load': {
    title: 'dearomatize-on-load',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  'smart-layout': {
    title: 'Smart-layout',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  'ignore-stereochemistry-errors': {
    title: 'Ignore stereochemistry errors',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  'mass-skip-error-on-pseudoatoms': {
    title: 'Ignore pseudoatoms at mass',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  'gross-formula-add-rsites': {
    title: 'Add Rsites at mass calculation',
    type: 'boolean',
    description: 'slider',
    "default": true
  },
  'gross-formula-add-isotopes': {
    title: "Add Isotopes at\xA0mass\xA0calculation",
    type: 'boolean',
    description: 'slider',
    "default": true
  }
};
var SERVER_OPTIONS = Object.keys(server);
var debug = {
  showAtomIds: {
    title: 'Show atom Ids',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  showBondIds: {
    title: 'Show bonds Ids',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  showHalfBondIds: {
    title: 'Show half bonds Ids',
    type: 'boolean',
    description: 'slider',
    "default": false
  },
  showLoopIds: {
    title: 'Show loop Ids',
    type: 'boolean',
    description: 'slider',
    "default": false
  }
};
var miew = {
  miewMode: {
    title: 'Display mode',
    "enum": ['LN', 'BS', 'LC'],
    enumNames: ['Lines', 'Balls and Sticks', 'Licorice'],
    "default": 'LN'
  },
  miewTheme: {
    title: 'Background color',
    "enum": ['light', 'dark'],
    enumNames: ['Light', 'Dark'],
    "default": 'light'
  },
  miewAtomLabel: {
    title: 'Label coloring',
    "enum": ['no', 'bright', 'blackAndWhite', 'black'],
    enumNames: ['No', 'Bright', 'Black and White', 'Black'],
    "default": 'bright'
  }
};
var MIEW_OPTIONS = Object.keys(miew);
var optionsSchema = {
  title: 'Settings',
  type: 'object',
  required: [],
  properties: _objectSpread$15(_objectSpread$15(_objectSpread$15(_objectSpread$15(_objectSpread$15({}, editor), render), server), debug), miew)
};
function getDefaultOptions() {
  if (!optionsSchema.properties) return {};
  return Object.keys(optionsSchema.properties).reduce(function (res, prop) {
    res[prop] = optionsSchema.properties[prop]["default"];
    return res;
  }, {});
}
function validation(settings) {
  if (_typeof(settings) !== 'object' || settings === null) return null;
  var ajv = new Ajv({
    allErrors: true,
    keywords: [{
      keyword: 'enumNames',
      schemaType: 'array'
    }]
  });
  var validate = ajv.compile(optionsSchema);
  validate(settings);
  var errors = validate.errors || [];
  var errorsProps = errors.map(function (el) {
    return el.instancePath.slice(1);
  });
  return Object.keys(settings).reduce(function (res, prop) {
    if (!optionsSchema.properties) return res;
    if (optionsSchema.properties[prop] && errorsProps.indexOf(prop) === -1) res[prop] = settings[prop];
    return res;
  }, {});
}

var storage = {
  warningMessage: 'Your changes will be lost after the tab closing. See Help (Note 2).',
  isAvailable: function isAvailable() {
    try {
      var _storage = global.localStorage;
      return _storage;
    } catch (ex) {
      return false;
    }
  },
  getItem: function getItem(key) {
    var item = null;
    try {
      item = JSON.parse(localStorage.getItem(key));
    } catch (ex) {
    }
    return item;
  },
  setItem: function setItem(key, data) {
    var isSet = null;
    try {
      localStorage.setItem(key, JSON.stringify(data));
      isSet = true;
    } catch (ex) {
      isSet = false;
    }
    return isSet;
  }
};

function ownKeys$14(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$14(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$14(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$14(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initOptionsState = {
  app: {
    server: false,
    templates: false,
    functionalGroups: false,
    saltsAndSolvents: false
  },
  analyse: {
    values: null,
    roundWeight: 3,
    roundMass: 3,
    roundElAnalysis: 1
  },
  check: {
    checkOptions: ['valence', 'radicals', 'pseudoatoms', 'stereo', 'query', 'overlapping_atoms', 'overlapping_bonds', 'rgroups', 'chiral', '3d', 'chiral_flag']
  },
  recognize: {
    file: null,
    structStr: null,
    fragment: false,
    version: null
  },
  settings: Object.assign(getDefaultOptions(), validation(storage.getItem('ketcher-opts'))),
  getServerSettings: function getServerSettings() {
    return pick(SERVER_OPTIONS, this.settings);
  }
};
function appUpdate(data) {
  return function (dispatch) {
    dispatch({
      type: 'APP_OPTIONS',
      data: data
    });
    dispatch({
      type: 'UPDATE'
    });
  };
}
function saveSettings(newSettings) {
  storage.setItem('ketcher-opts', newSettings);
  return {
    type: 'SAVE_SETTINGS',
    data: newSettings
  };
}
function changeRound(roundName, value) {
  return {
    type: 'CHANGE_ANALYSE',
    data: _defineProperty({}, roundName, value)
  };
}
var recognizeActions = ['SET_RECOGNIZE_STRUCT', 'CHANGE_RECOGNIZE_FILE', 'CHANGE_IMAGO_VERSION', 'IS_FRAGMENT_RECOGNIZE'];
function setStruct(str) {
  return {
    type: 'SET_RECOGNIZE_STRUCT',
    data: {
      structStr: str
    }
  };
}
function changeVersion(version) {
  return {
    type: 'CHANGE_IMAGO_VERSION',
    data: {
      version: version
    }
  };
}
function changeImage(file) {
  return {
    type: 'CHANGE_RECOGNIZE_FILE',
    data: {
      file: file,
      structStr: null
    }
  };
}
function shouldFragment(isFrag) {
  return {
    type: 'IS_FRAGMENT_RECOGNIZE',
    data: {
      fragment: isFrag
    }
  };
}
function checkOpts(data) {
  return {
    type: 'SAVE_CHECK_OPTS',
    data: data
  };
}
function optionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;
  if (type === 'APP_OPTIONS') return _objectSpread$14(_objectSpread$14({}, state), {}, {
    app: _objectSpread$14(_objectSpread$14({}, state.app), data)
  });
  if (type === 'SAVE_SETTINGS') return _objectSpread$14(_objectSpread$14({}, state), {}, {
    settings: data
  });
  if (type === 'SAVE_CHECK_OPTS') return _objectSpread$14(_objectSpread$14({}, state), {}, {
    check: data
  });
  if (type === 'CHANGE_ANALYSE') return _objectSpread$14(_objectSpread$14({}, state), {}, {
    analyse: _objectSpread$14(_objectSpread$14(_objectSpread$14({}, state.analyse), data), {}, {
      loading: false
    })
  });
  if (type === 'ANALYSE_LOADING') return _objectSpread$14(_objectSpread$14({}, state), {}, {
    analyse: _objectSpread$14(_objectSpread$14({}, state.analyse), {}, {
      loading: true
    })
  });
  if (recognizeActions.includes(type)) return _objectSpread$14(_objectSpread$14({}, state), {}, {
    recognize: _objectSpread$14(_objectSpread$14({}, state.recognize), data)
  });
  return state;
}

function constant(schema, prop) {
  var desc = schema.properties[prop];
  return desc.constant || desc["enum"][0];
}
function mapOf(schema, prop) {
  return schema.oneOf.reduce(function (res, desc) {
    res[constant(desc, prop)] = desc;
    return res;
  }, {});
}

var radioButtonsSchema = {
  "enum": ['Absolute', 'Relative', 'Attached'],
  "default": 'Absolute'
};
var contextSchema = {
  title: 'Context',
  "enum": ['Fragment', 'Multifragment', 'Bond', 'Atom', 'Group'],
  "default": 'Fragment'
};
var sData = {
  Fragment: {
    title: 'Fragment',
    type: 'Object',
    oneOf: [{
      key: 'FRG_STR',
      title: 'MDLBG_FRAGMENT_STEREO',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_FRAGMENT_STEREO'],
          "default": 'MDLBG_FRAGMENT_STEREO'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['abs', '(+)-enantiomer', '(-)-enantiomer', 'racemate', 'steric', 'rel', 'R(a)', 'S(a)', 'R(p)', 'S(p)'],
          "default": 'abs'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }, {
      key: 'FRG_COEFF',
      title: 'MDLBG_FRAGMENT_COEFFICIENT',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_FRAGMENT_COEFFICIENT'],
          "default": 'MDLBG_FRAGMENT_COEFFICIENT'
        },
        fieldValue: {
          title: 'Field value',
          type: 'string',
          "default": '',
          minLength: 1,
          invalidMessage: 'Please, specify field value'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }, {
      key: 'FRG_CHRG',
      title: 'MDLBG_FRAGMENT_CHARGE',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_FRAGMENT_CHARGE'],
          "default": 'MDLBG_FRAGMENT_CHARGE'
        },
        fieldValue: {
          title: 'Field value',
          type: 'string',
          "default": '',
          minLength: 1,
          invalidMessage: 'Please, specify field value'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }, {
      key: 'FRG_RAD',
      title: 'MDLBG_FRAGMENT_RADICALS',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_FRAGMENT_RADICALS'],
          "default": 'MDLBG_FRAGMENT_RADICALS'
        },
        fieldValue: {
          title: 'Field value',
          type: 'string',
          "default": '',
          minLength: 1,
          invalidMessage: 'Please, specify field value'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }]
  },
  Multifragment: {
    title: 'Multifragment',
    type: 'Object',
    oneOf: [{
      key: 'MLT_FRG',
      title: 'KETCHER_MULTIPLE_FRAGMENT',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['KETCHER_MULTIPLE_FRAGMENT'],
          "default": 'KETCHER_MULTIPLE_FRAGMENT'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['aerosol', 'alloy', 'catenane', 'complex', 'composite', 'co-polymer', 'emulsion', 'host-guest complex', 'mixture', 'rotaxane', 'suspension'],
          "default": 'aerosol'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }]
  },
  Bond: {
    title: 'Bond',
    type: 'Object',
    oneOf: [{
      key: 'SB_STR',
      title: 'MDLBG_STEREO_KEY',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_STEREO_KEY'],
          "default": 'MDLBG_STEREO_KEY'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['erythro', 'threo', 'alpha', 'beta', 'endo', 'exo', 'anti', 'syn', 'ECL', 'STG'],
          "default": 'erythro'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }, {
      key: 'SB_BND',
      title: 'MDLBG_BOND_KEY',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_BOND_KEY'],
          "default": 'MDLBG_BOND_KEY'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['Value=4'],
          "default": 'Value=4'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }]
  },
  Atom: {
    title: 'Atom',
    type: 'Object',
    oneOf: [{
      key: 'AT_STR',
      title: 'MDLBG_STEREO_KEY',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_STEREO_KEY'],
          "default": 'MDLBG_STEREO_KEY'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['RS', 'SR', 'P-3', 'P-3-PI', 'SP-4', 'SP-4-PI', 'T-4', 'T-4-PI', 'SP-5', 'SP-5-PI', 'TB-5', 'TB-5-PI', 'OC-6', 'TP-6', 'PB-7', 'CU-8', 'SA-8', 'DD-8', 'HB-9', 'TPS-9'],
          "default": 'RS'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }]
  },
  Group: {
    title: 'Group',
    type: 'Object',
    oneOf: [{
      key: 'GRP_STR',
      title: 'MDLBG_STEREO_KEY',
      type: 'object',
      properties: {
        type: {
          "enum": ['DAT']
        },
        fieldName: {
          title: 'Field name',
          "enum": ['MDLBG_STEREO_KEY'],
          "default": 'MDLBG_STEREO_KEY'
        },
        fieldValue: {
          title: 'Field value',
          "enum": ['cis', 'trans'],
          "default": 'cis'
        },
        radiobuttons: radioButtonsSchema
      },
      required: ['fieldName', 'fieldValue', 'radiobuttons']
    }]
  }
};
var sdataCustomSchema = {
  key: 'Custom',
  type: 'object',
  properties: {
    type: {
      "enum": ['DAT']
    },
    context: {
      title: 'Context',
      "enum": ['Atom', 'Bond', 'Fragment', 'Group', 'Multifragment'],
      "default": 'Fragment'
    },
    fieldName: {
      title: 'Field name',
      type: 'string',
      "default": '',
      minLength: 1,
      invalidMessage: 'Please, specify field name'
    },
    fieldValue: {
      title: 'Field value',
      type: 'string',
      "default": '',
      minLength: 1,
      invalidMessage: 'Please, specify field value'
    },
    radiobuttons: {
      "enum": ['Absolute', 'Relative', 'Attached'],
      "default": 'Absolute'
    }
  },
  required: ['context', 'fieldName', 'fieldValue', 'radiobuttons']
};
var sdataSchema = Object.keys(sData).reduce(function (acc, title) {
  acc[title] = mapOf(sData[title], 'fieldName');
  Object.keys(acc[title]).forEach(function (fieldName) {
    acc[title][fieldName].properties.context = contextSchema;
  });
  return acc;
}, {});
function firstKeyOf(obj) {
  return Object.keys(obj)[0];
}
function getSdataDefault() {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sdataSchema;
  var context = arguments.length > 1 ? arguments[1] : undefined;
  var fieldName = arguments.length > 2 ? arguments[2] : undefined;
  if (schema.key === 'Custom') {
    var _schema$properties$co;
    return (_schema$properties$co = schema.properties[context]) === null || _schema$properties$co === void 0 ? void 0 : _schema$properties$co["default"];
  }
  if (!context && !fieldName) return firstKeyOf(schema);
  if (!fieldName) return firstKeyOf(schema[context]);
  return schema[context][fieldName] ? schema[context][fieldName].properties.fieldValue["default"] : '';
}

function ownKeys$13(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$13(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$13(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$13(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initSdata = function initSdata(schema) {
  var isCustomShema = schema.key === 'Custom';
  var context = isCustomShema ? getSdataDefault(sdataCustomSchema, 'context') : getSdataDefault(sdataSchema);
  var fieldName = isCustomShema ? getSdataDefault(sdataCustomSchema, 'fieldName') : getSdataDefault(sdataSchema, context);
  var fieldValue = isCustomShema ? getSdataDefault(sdataCustomSchema, 'fieldValue') : getSdataDefault(sdataSchema, context, fieldName);
  var radiobuttons = 'Absolute';
  return {
    errors: {},
    valid: true,
    result: {
      context: context,
      fieldName: fieldName,
      fieldValue: fieldValue,
      radiobuttons: radiobuttons,
      type: 'DAT'
    }
  };
};
function sdataReducer(state, action) {
  if (action.data.result.init) {
    return correctErrors(_objectSpread$13(_objectSpread$13({}, state), {}, {
      result: Object.assign({}, state.result, action.data.result)
    }), action.data);
  }
  var actionContext = action.data.result.context;
  var actionFieldName = action.data.result.fieldName;
  var newstate = null;
  if (actionContext !== state.result.context) newstate = onContextChange(state, action.data.result);else if (actionFieldName !== state.result.fieldName) newstate = onFieldNameChange(state, action.data.result);
  newstate = newstate || _objectSpread$13(_objectSpread$13({}, state), {}, {
    result: Object.assign({}, state.result, action.data.result)
  });
  return correctErrors(newstate, action.data);
}
var correctErrors = function correctErrors(state, payload) {
  var valid = payload.valid,
      errors = payload.errors;
  var _state$result = state.result,
      fieldName = _state$result.fieldName,
      fieldValue = _state$result.fieldValue;
  return {
    result: state.result,
    valid: valid && !!fieldName && !!fieldValue,
    errors: errors
  };
};
var onContextChange = function onContextChange(state, payload) {
  var context = payload.context,
      fieldValue = payload.fieldValue;
  var fieldName = getSdataDefault(sdataCustomSchema, 'fieldName');
  var fValue = fieldValue;
  if (fValue === state.result.fieldValue) fValue = getSdataDefault(sdataCustomSchema, 'fieldValue');
  return {
    result: _objectSpread$13(_objectSpread$13({}, payload), {}, {
      context: context,
      fieldName: fieldName,
      fieldValue: fValue
    })
  };
};
var onFieldNameChange = function onFieldNameChange(state, payload) {
  var fieldName = payload.fieldName;
  var context = state.result.context;
  var fieldValue = payload.fieldValue;
  if (sdataSchema[context][fieldName]) fieldValue = getSdataDefault(sdataSchema, context, fieldName);
  if (fieldValue === state.result.fieldValue && sdataSchema[context][state.result.fieldName]) fieldValue = '';
  return {
    result: _objectSpread$13(_objectSpread$13({}, payload), {}, {
      fieldName: fieldName,
      fieldValue: fieldValue
    })
  };
};

var formsState = {
  atomProps: {
    errors: {},
    valid: true,
    result: {
      label: '',
      charge: 0,
      explicitValence: -1,
      hCount: 0,
      invRet: 0,
      isotope: 0,
      radical: 0,
      ringBondCount: 0,
      substitutionCount: 0
    }
  },
  attachmentPoints: {
    errors: {},
    valid: true,
    result: {
      primary: false,
      secondary: false
    }
  },
  automap: {
    errors: {},
    valid: true,
    result: {
      mode: 'discard'
    }
  },
  bondProps: {
    errors: {},
    valid: true,
    result: {
      type: 'single',
      topology: 0,
      center: 0
    }
  },
  check: {
    errors: {},
    moleculeErrors: {}
  },
  labelEdit: {
    errors: {},
    valid: true,
    result: {
      label: ''
    }
  },
  rgroup: {
    errors: {},
    valid: true,
    result: {
      values: []
    }
  },
  rgroupLogic: {
    errors: {},
    valid: true,
    result: {
      ifthen: 0,
      range: '>0',
      resth: false
    }
  },
  save: {
    errors: {},
    valid: true,
    result: {
      filename: 'ketcher',
      format: 'mol'
    }
  },
  settings: {
    errors: {},
    valid: true,
    result: getDefaultOptions()
  },
  sgroup: {
    errors: {},
    valid: true,
    result: {
      type: 'GEN'
    }
  },
  text: {
    errors: {},
    valid: true,
    result: {}
  },
  attach: {
    errors: {},
    valid: true,
    result: {}
  },
  sdata: initSdata(sdataCustomSchema)
};
function updateFormState(data) {
  return {
    type: 'UPDATE_FORM',
    data: data
  };
}
function checkErrors(errors) {
  return {
    type: 'UPDATE_FORM',
    data: {
      moleculeErrors: errors
    }
  };
}
function setDefaultSettings() {
  return {
    type: 'UPDATE_FORM',
    data: {
      result: getDefaultOptions(),
      valid: true,
      errors: {}
    }
  };
}
function formReducer(state, action, formName) {
  if (formName === 'sdata') return sdataReducer(state, action);
  return Object.assign({}, state, action.data);
}

var INDIGO_VERIFICATION = 'INDIGO_VERIFICATION';
var ANALYZING_FILE = 'ANALYZING_FILE';

function ownKeys$12(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$12(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$12(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$12(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function indigoVerification(data) {
  return {
    type: INDIGO_VERIFICATION,
    data: data
  };
}
function setAnalyzingFile(data) {
  return {
    type: ANALYZING_FILE,
    data: data
  };
}
var initialState$2 = {
  indigoVerification: false,
  isAnalyzingFile: false
};
function requestReducer () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$2;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;
  switch (type) {
    case INDIGO_VERIFICATION:
      {
        return _objectSpread$12(_objectSpread$12({}, state), {}, {
          indigoVerification: data
        });
      }
    case ANALYZING_FILE:
      {
        return _objectSpread$12(_objectSpread$12({}, state), {}, {
          isAnalyzingFile: data
        });
      }
    default:
      return state;
  }
}

var supportedSGroupTypes = {
  MUL: 'MUL',
  SRU: 'SRU',
  SUP: 'SUP',
  DAT: 'DAT',
  GEN: 'GEN'
};

var atom = {
  title: 'Atom',
  type: 'object',
  required: ['label'],
  properties: {
    label: {
      title: 'Label',
      type: 'string',
      maxLength: 3,
      invalidMessage: 'Wrong label'
    },
    alias: {
      title: 'Alias',
      type: 'string',
      invalidMessage: 'Leading and trailing spaces are not allowed'
    },
    charge: {
      title: 'Charge',
      type: 'string',
      pattern: '^([+-]?)([0-9]{1,3}|1000)([+-]?)$',
      maxLength: 5,
      "default": '0',
      invalidMessage: 'Invalid charge value'
    },
    explicitValence: {
      title: 'Valence',
      "enum": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
      enumNames: ['', '0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
      "default": -1
    },
    isotope: {
      title: 'Isotope',
      type: 'integer',
      minimum: 0,
      "default": 0,
      invalidMessage: 'There must be integer'
    },
    radical: {
      title: 'Radical',
      "enum": [0, 2, 1, 3],
      enumNames: ['', 'Monoradical', 'Diradical (singlet)', 'Diradical (triplet)'],
      "default": 0
    },
    ringBondCount: {
      title: 'Ring bond count',
      "enum": [0, -2, -1, 2, 3, 4],
      enumNames: ['', 'As drawn', '0', '2', '3', '4'],
      "default": 0
    },
    hCount: {
      title: 'H count',
      "enum": [0, 1, 2, 3, 4, 5],
      enumNames: ['', '0', '1', '2', '3', '4'],
      "default": 0
    },
    substitutionCount: {
      title: 'Substitution count',
      "enum": [0, -2, -1, 1, 2, 3, 4, 5, 6],
      enumNames: ['', 'As drawn', '0', '1', '2', '3', '4', '5', '6'],
      "default": 0
    },
    unsaturatedAtom: {
      title: 'Unsaturated',
      type: 'boolean',
      "default": false
    },
    invRet: {
      title: 'Inversion',
      "enum": [0, 1, 2],
      enumNames: ['', 'Inverts', 'Retains'],
      "default": 0
    },
    exactChangeFlag: {
      title: 'Exact change',
      type: 'boolean',
      "default": false
    }
  }
};
var rgroupSchema = {
  title: 'R-group',
  type: 'object',
  properties: {
    values: {
      type: 'array',
      items: {
        type: 'string',
        "enum": range(1, 33),
        enumNames: range(1, 33).map(function (item) {
          return 'R' + item;
        })
      }
    }
  }
};
var labelEdit = {
  title: 'Label Edit',
  type: 'object',
  required: ['label'],
  properties: {
    label: {
      title: 'Atom',
      "default": '',
      invalidMessage: 'Wrong atom symbol',
      type: 'string'
    }
  }
};
var attachmentPoints = {
  title: 'Attachment Points',
  type: 'object',
  properties: {
    primary: {
      title: 'Primary attachment point',
      type: 'boolean'
    },
    secondary: {
      title: 'Secondary attachment point',
      type: 'boolean'
    }
  }
};
var bond = {
  title: 'Bond',
  type: 'object',
  required: ['type'],
  properties: {
    type: {
      title: 'Type',
      "enum": ['single', 'up', 'down', 'updown', 'double', 'crossed', 'triple', 'aromatic', 'any', 'hydrogen', 'singledouble', 'singlearomatic', 'doublearomatic', 'dative'],
      enumNames: ['Single', 'Single Up', 'Single Down', 'Single Up/Down', 'Double', 'Double Cis/Trans', 'Triple', 'Aromatic', 'Any', 'Hydrogen', 'Single/Double', 'Single/Aromatic', 'Double/Aromatic', 'Dative'],
      "default": 'single'
    },
    topology: {
      title: 'Topology',
      "enum": [0, 1, 2],
      enumNames: ['Either', 'Ring', 'Chain'],
      "default": 0
    },
    center: {
      title: 'Reacting Center',
      "enum": [0, -1, 1, 2, 4, 8, 12],
      enumNames: ['Unmarked', 'Not center', 'Center', 'No change', 'Made/broken', 'Order changes', 'Made/broken and changes'],
      "default": 0
    }
  }
};
var sgroup = {
  title: 'SGroup',
  type: 'object',
  required: ['type'],
  oneOf: [{
    key: 'GEN',
    title: 'Generic',
    type: 'object',
    properties: {
      type: {
        "enum": ['GEN']
      }
    }
  }, {
    key: 'MUL',
    title: 'Multiple group',
    type: 'object',
    properties: {
      type: {
        "enum": ['MUL']
      },
      mul: {
        title: 'Repeat count',
        type: 'integer',
        "default": 1,
        minimum: 1
      }
    },
    required: ['mul']
  }, {
    key: 'SRU',
    title: 'SRU polymer',
    type: 'object',
    properties: {
      type: {
        "enum": ['SRU']
      },
      subscript: {
        title: 'Polymer label',
        type: 'string',
        "default": 'n',
        pattern: '^[a-zA-Z]$',
        invalidMessage: 'SRU subscript should consist of a single letter'
      },
      connectivity: {
        title: 'Repeat Pattern',
        "enum": ['ht', 'hh', 'eu'],
        enumNames: ['Head-to-tail', 'Head-to-head', 'Either unknown'],
        "default": 'ht'
      }
    },
    required: ['subscript', 'connectivity']
  }, {
    key: 'SUP',
    title: 'Superatom',
    type: 'object',
    properties: {
      type: {
        "enum": ['SUP']
      },
      name: {
        title: 'Name',
        type: 'string',
        "default": '',
        minLength: 1,
        invalidMessage: 'Please, provide a name for the superatom'
      }
    },
    required: ['name']
  }]
};
var sgroupMap = mapOf(sgroup, 'type');
var rgroupLogic = {
  title: 'R-Group',
  type: 'object',
  properties: {
    range: {
      title: 'Occurrence',
      type: 'string',
      maxLength: 50,
      invalidMessage: 'Wrong value'
    },
    resth: {
      title: 'RestH',
      type: 'boolean'
    },
    ifthen: {
      title: 'Condition',
      type: 'integer',
      minium: 0
    }
  }
};
var attachSchema = {
  title: 'Template edit',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      title: 'Molecule name',
      type: 'string',
      minLength: 1,
      maxLength: 128,
      invalidMessage: 'Template must have a unique name and no more than 128 symbols in length'
    }
  }
};

var _excluded$E = ["type", "radiobuttons"];
function ownKeys$11(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$11(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$11(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$11(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DefaultStereoGroupNumber = 1;
function fromElement(selem) {
  if (selem.label === 'R#') {
    return _objectSpread$11({
      type: 'rlabel',
      values: fromRlabel(selem.rglabel)
    }, selem);
  }
  if (selem.label === 'L#') return fromAtomList(selem);
  if (Elements.get(selem.label)) return fromAtom(selem);
  if (!selem.label && 'attpnt' in selem) return {
    ap: fromApoint(selem.attpnt)
  };
  return selem;
}
function toElement(elem) {
  if (elem.type === 'rlabel') {
    return {
      label: elem.values.length ? 'R#' : 'C',
      rglabel: elem.values.length === 0 ? null : toRlabel(elem.values)
    };
  }
  if (elem.type === 'list' || elem.type === 'not-list') return toAtomList(elem);
  if (!elem.label && 'ap' in elem) return {
    attpnt: toApoint(elem.ap)
  };
  if (Elements.get(capitalize(elem.label))) return toAtom(elem);
  if (elem.label === 'A' || elem.label === '*' || elem.label === 'Q' || elem.label === 'X' || elem.label === 'R') {
    elem.pseudo = elem.label;
    return toAtom(elem);
  }
  return elem;
}
function fromAtom(satom) {
  var alias = satom.alias || '';
  var charge = satom.charge.toString();
  return {
    alias: alias,
    label: satom.label,
    charge: charge,
    isotope: satom.isotope,
    explicitValence: satom.explicitValence,
    radical: satom.radical,
    invRet: satom.invRet,
    exactChangeFlag: !!satom.exactChangeFlag,
    ringBondCount: satom.ringBondCount,
    substitutionCount: satom.substitutionCount,
    unsaturatedAtom: !!satom.unsaturatedAtom,
    hCount: satom.hCount,
    stereoParity: satom.stereoParity
  };
}
function toAtom(atom$1) {
  var _atom$exactChangeFlag, _atom$unsaturatedAtom;
  var chargeRegexp = new RegExp(atom.properties.charge.pattern);
  var pch = chargeRegexp.exec(atom$1.charge);
  var charge = pch ? parseInt(pch[1] + pch[3] + pch[2]) : atom$1.charge;
  var conv = Object.assign({}, atom$1, {
    label: capitalize(atom$1.label),
    alias: atom$1.alias || null,
    exactChangeFlag: +((_atom$exactChangeFlag = atom$1.exactChangeFlag) !== null && _atom$exactChangeFlag !== void 0 ? _atom$exactChangeFlag : false),
    unsaturatedAtom: +((_atom$unsaturatedAtom = atom$1.unsaturatedAtom) !== null && _atom$unsaturatedAtom !== void 0 ? _atom$unsaturatedAtom : false)
  });
  if (charge !== undefined) conv.charge = charge;
  return conv;
}
function fromAtomList(satom) {
  return {
    type: satom.atomList.notList ? 'not-list' : 'list',
    values: satom.atomList.ids.map(function (i) {
      return Elements.get(i).label;
    })
  };
}
function toAtomList(atom) {
  return {
    pseudo: null,
    label: 'L#',
    atomList: new AtomList({
      notList: atom.type === 'not-list',
      ids: atom.values.map(function (el) {
        return Elements.get(el).number;
      })
    })
  };
}
function fromStereoLabel(stereoLabel) {
  if (stereoLabel === null) return {
    type: null
  };
  var type = stereoLabel.match(/\D+/g)[0];
  var number = +stereoLabel.replace(type, '');
  if (type === StereoLabel.Abs) {
    return {
      type: stereoLabel,
      orNumber: DefaultStereoGroupNumber,
      andNumber: DefaultStereoGroupNumber
    };
  }
  if (type === StereoLabel.And) {
    return {
      type: type,
      orNumber: DefaultStereoGroupNumber,
      andNumber: number
    };
  }
  if (type === StereoLabel.Or) {
    return {
      type: type,
      orNumber: number,
      andNumber: DefaultStereoGroupNumber
    };
  }
}
function toStereoLabel(stereoLabel) {
  switch (stereoLabel.type) {
    case StereoLabel.And:
      return "".concat(StereoLabel.And).concat(stereoLabel.andNumber || 1);
    case StereoLabel.Or:
      return "".concat(StereoLabel.Or).concat(stereoLabel.orNumber || 1);
    default:
      return stereoLabel.type;
  }
}
function fromApoint(sap) {
  return {
    primary: ((sap || 0) & 1) > 0,
    secondary: ((sap || 0) & 2) > 0
  };
}
function toApoint(ap) {
  return (ap.primary && 1) + (ap.secondary && 2);
}
function fromRlabel(rg) {
  var res = [];
  var rgi;
  var val;
  for (rgi = 0; rgi < 32; rgi++) {
    if (rg & 1 << rgi) {
      val = rgi + 1;
      res.push(val);
    }
  }
  return res;
}
function toRlabel(values) {
  var res = 0;
  values.forEach(function (val) {
    var rgi = val - 1;
    res |= 1 << rgi;
  });
  return res;
}
function fromBond(sbond) {
  var type = sbond.type;
  var stereo = sbond.stereo;
  return {
    type: fromBondType(type, stereo),
    topology: sbond.topology || 0,
    center: sbond.reactingCenterStatus || 0
  };
}
function toBond(bond) {
  return _objectSpread$11({
    topology: bond.topology,
    reactingCenterStatus: bond.center
  }, toBondType(bond.type));
}
function toBondType(caption) {
  return Object.assign({}, bondCaptionMap[caption]);
}
function fromBondType(type, stereo) {
  for (var caption in bondCaptionMap) {
    if (bondCaptionMap[caption].type === type && bondCaptionMap[caption].stereo === stereo) return caption;
  }
  throw Error('No such bond caption');
}
var bondCaptionMap = {
  single: {
    type: Bond$2.PATTERN.TYPE.SINGLE,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  up: {
    type: Bond$2.PATTERN.TYPE.SINGLE,
    stereo: Bond$2.PATTERN.STEREO.UP
  },
  down: {
    type: Bond$2.PATTERN.TYPE.SINGLE,
    stereo: Bond$2.PATTERN.STEREO.DOWN
  },
  updown: {
    type: Bond$2.PATTERN.TYPE.SINGLE,
    stereo: Bond$2.PATTERN.STEREO.EITHER
  },
  "double": {
    type: Bond$2.PATTERN.TYPE.DOUBLE,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  crossed: {
    type: Bond$2.PATTERN.TYPE.DOUBLE,
    stereo: Bond$2.PATTERN.STEREO.CIS_TRANS
  },
  triple: {
    type: Bond$2.PATTERN.TYPE.TRIPLE,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  aromatic: {
    type: Bond$2.PATTERN.TYPE.AROMATIC,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  singledouble: {
    type: Bond$2.PATTERN.TYPE.SINGLE_OR_DOUBLE,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  singlearomatic: {
    type: Bond$2.PATTERN.TYPE.SINGLE_OR_AROMATIC,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  doublearomatic: {
    type: Bond$2.PATTERN.TYPE.DOUBLE_OR_AROMATIC,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  any: {
    type: Bond$2.PATTERN.TYPE.ANY,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  hydrogen: {
    type: Bond$2.PATTERN.TYPE.HYDROGEN,
    stereo: Bond$2.PATTERN.STEREO.NONE
  },
  dative: {
    type: Bond$2.PATTERN.TYPE.DATIVE,
    stereo: Bond$2.PATTERN.STEREO.NONE
  }
};
function fromSgroup(ssgroup) {
  var type = ssgroup.type || 'GEN';
  var _ssgroup$attrs = ssgroup.attrs,
      context = _ssgroup$attrs.context,
      fieldName = _ssgroup$attrs.fieldName,
      fieldValue = _ssgroup$attrs.fieldValue,
      absolute = _ssgroup$attrs.absolute,
      attached = _ssgroup$attrs.attached;
  if (absolute === false && attached === false) ssgroup.attrs.radiobuttons = 'Relative';else ssgroup.attrs.radiobuttons = attached ? 'Attached' : 'Absolute';
  if (sdataSchema[context][fieldName] && sdataSchema[context][fieldName].properties.fieldValue.items) ssgroup.attrs.fieldValue = fieldValue.split('\n');
  return Object.assign({
    type: type
  }, ssgroup.attrs);
}
function toSgroup(sgroup) {
  var type = sgroup.type,
      radiobuttons = sgroup.radiobuttons,
      props = _objectWithoutProperties(sgroup, _excluded$E);
  var attrs = _objectSpread$11({}, props);
  var absolute = 'absolute';
  var attached = 'attached';
  switch (radiobuttons) {
    case 'Absolute':
      attrs[absolute] = true;
      attrs[attached] = false;
      break;
    case 'Attached':
      attrs[absolute] = false;
      attrs[attached] = true;
      break;
    case 'Relative':
      attrs[absolute] = false;
      attrs[attached] = false;
      break;
  }
  if (attrs.fieldName) attrs.fieldName = attrs.fieldName.trim();
  if (attrs.fieldValue) {
    attrs.fieldValue = typeof attrs.fieldValue === 'string' ? attrs.fieldValue.trim() : attrs.fieldValue;
  }
  return {
    type: type,
    attrs: attrs
  };
}

var toolActions = {
  hand: {
    title: 'Hand tool',
    shortcut: 'Mod+h',
    action: {
      tool: 'hand'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'hand');
    }
  },
  'select-lasso': {
    title: 'Lasso Selection',
    shortcut: 'Escape',
    action: {
      tool: 'select',
      opts: 'lasso'
    }
  },
  'select-rectangle': {
    title: 'Rectangle Selection',
    shortcut: 'Escape',
    action: {
      tool: 'select',
      opts: 'rectangle'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'select-rectangle');
    }
  },
  'select-fragment': {
    title: 'Fragment Selection',
    shortcut: 'Escape',
    action: {
      tool: 'select',
      opts: 'fragment'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'select-fragment');
    }
  },
  erase: {
    title: 'Erase',
    shortcut: ['Delete', 'Backspace'],
    action: {
      tool: 'eraser',
      opts: 1
    },
    hidden: function hidden(options) {
      return isHidden(options, 'erase');
    }
  },
  chain: {
    title: 'Chain',
    action: {
      tool: 'chain'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'chain');
    }
  },
  'enhanced-stereo': {
    shortcut: 'Alt+e',
    title: 'Stereochemistry',
    action: {
      tool: 'enhancedStereo'
    },
    disabled: function disabled(editor) {
      return findStereoAtoms(editor === null || editor === void 0 ? void 0 : editor.struct(), Array.from(editor === null || editor === void 0 ? void 0 : editor.struct().atoms.keys())).length === 0;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'enhanced-stereo');
    }
  },
  'charge-plus': {
    shortcut: '5',
    title: 'Charge Plus',
    action: {
      tool: 'charge',
      opts: 1
    },
    hidden: function hidden(options) {
      return isHidden(options, 'charge-plus');
    }
  },
  'charge-minus': {
    shortcut: '5',
    title: 'Charge Minus',
    action: {
      tool: 'charge',
      opts: -1
    },
    hidden: function hidden(options) {
      return isHidden(options, 'charge-minus');
    }
  },
  transforms: {
    hidden: function hidden(options) {
      return isHidden(options, 'transforms');
    }
  },
  'transform-rotate': {
    shortcut: 'Alt+r',
    title: 'Rotate Tool',
    action: {
      tool: 'rotate'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'transform-rotate');
    }
  },
  'transform-flip-h': {
    shortcut: 'Alt+h',
    title: 'Horizontal Flip',
    action: {
      tool: 'rotate',
      opts: 'horizontal'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'transform-flip-h');
    }
  },
  'transform-flip-v': {
    shortcut: 'Alt+v',
    title: 'Vertical Flip',
    action: {
      tool: 'rotate',
      opts: 'vertical'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'transform-flip-v');
    }
  },
  sgroup: {
    shortcut: 'Mod+g',
    title: 'S-Group',
    action: {
      tool: 'sgroup'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'sgroup');
    }
  },
  'sgroup-data': {
    shortcut: 'Mod+g',
    title: 'Data S-Group',
    action: {
      tool: 'sgroup',
      opts: 'DAT'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'sgroup-data');
    }
  },
  arrows: {
    hidden: function hidden(options) {
      return isHidden(options, 'arrows');
    }
  },
  'reaction-arrow-open-angle': {
    title: 'Arrow Open Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.OpenAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-open-angle');
    }
  },
  'reaction-arrow-filled-triangle': {
    title: 'Arrow Filled Triangle',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.FilledTriangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-filled-triangle');
    }
  },
  'reaction-arrow-filled-bow': {
    title: 'Arrow Filled Bow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.FilledBow
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-filled-bow');
    }
  },
  'reaction-arrow-dashed-open-angle': {
    title: 'Arrow Dashed Open Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.DashedOpenAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-dashed-open-angle');
    }
  },
  'reaction-arrow-failed': {
    title: 'Failed Arrow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.Failed
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-failed');
    }
  },
  'reaction-arrow-both-ends-filled-triangle': {
    title: 'Arrow Both Ends Filled Triangle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.BothEndsFilledTriangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-both-ends-filled-triangle');
    }
  },
  'reaction-arrow-equilibrium-filled-half-bow': {
    title: 'Arrow Equilibrium Filled Half Bow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EquilibriumFilledHalfBow
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-equilibrium-filled-half-bow');
    }
  },
  'reaction-arrow-equilibrium-filled-triangle': {
    title: 'Arrow Equilibrium Filled Triangle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EquilibriumFilledTriangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-equilibrium-filled-triangle');
    }
  },
  'reaction-arrow-equilibrium-open-angle': {
    title: 'Arrow Equilibrium Open Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EquilibriumOpenAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-equilibrium-open-angle');
    }
  },
  'reaction-arrow-unbalanced-equilibrium-filled-half-bow': {
    title: 'Arrow Unbalanced Equilibrium Filled Half Bow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.UnbalancedEquilibriumFilledHalfBow
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-unbalanced-equilibrium-filled-half-bow');
    }
  },
  'reaction-arrow-unbalanced-equilibrium-open-half-angle': {
    title: 'Arrow Unbalanced Equilibrium Open Half Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.UnbalancedEquilibriumOpenHalfAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-unbalanced-equilibrium-open-half-angle');
    }
  },
  'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow': {
    title: 'Arrow Unbalanced Equilibrium Large Filled Half Bow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.UnbalancedEquilibriumLargeFilledHalfBow
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow');
    }
  },
  'reaction-arrow-unbalanced-equilibrium-filled-half-triangle': {
    title: 'Arrow Unbalanced Equilibrium Filled Half Triangle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.UnbalancedEquilibriumFilledHalfTriangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-unbalanced-equilibrium-filled-half-triangle');
    }
  },
  'reaction-arrow-elliptical-arc-arrow-filled-bow': {
    title: 'Arrow Elliptical Arc Filled Bow Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EllipticalArcFilledBow
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-elliptical-arc-arrow-filled-bow');
    }
  },
  'reaction-arrow-elliptical-arc-arrow-filled-triangle': {
    title: 'Arrow Elliptical Arc Filled Triangle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EllipticalArcFilledTriangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-elliptical-arc-arrow-filled-triangle');
    }
  },
  'reaction-arrow-elliptical-arc-arrow-open-angle': {
    title: 'Arrow Elliptical Arc Open Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EllipticalArcOpenAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-elliptical-arc-arrow-open-angle');
    }
  },
  'reaction-arrow-elliptical-arc-arrow-open-half-angle': {
    title: 'Arrow Elliptical Arc Open Half Angle Tool',
    action: {
      tool: 'reactionarrow',
      opts: RxnArrowMode.EllipticalArcOpenHalfAngle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-arrow-elliptical-arc-arrow-open-half-angle');
    }
  },
  'reaction-plus': {
    title: 'Reaction Plus Tool',
    action: {
      tool: 'reactionplus'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-plus');
    }
  },
  'reaction-mapping-tools': {
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-mapping-tools');
    }
  },
  'reaction-map': {
    title: 'Reaction Mapping Tool',
    action: {
      tool: 'reactionmap'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-map');
    }
  },
  'reaction-unmap': {
    title: 'Reaction Unmapping Tool',
    action: {
      tool: 'reactionunmap'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-unmap');
    }
  },
  rgroup: {
    hidden: function hidden(options) {
      return isHidden(options, 'rgroup');
    }
  },
  'rgroup-label': {
    shortcut: 'Mod+r',
    title: 'R-Group Label Tool',
    action: {
      tool: 'rgroupatom'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'rgroup-label');
    }
  },
  'rgroup-fragment': {
    shortcut: ['Mod+Shift+r', 'Mod+r'],
    title: 'R-Group Fragment Tool',
    action: {
      tool: 'rgroupfragment'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'rgroup-fragment');
    }
  },
  'rgroup-attpoints': {
    shortcut: 'Mod+r',
    title: 'Attachment Point Tool',
    action: {
      tool: 'apoint'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'rgroup-attpoints');
    }
  },
  shapes: {
    hidden: function hidden(options) {
      return isHidden(options, 'shapes');
    }
  },
  'shape-ellipse': {
    title: 'Shape Ellipse',
    action: {
      tool: 'simpleobject',
      opts: SimpleObjectMode.ellipse
    },
    hidden: function hidden(options) {
      return isHidden(options, 'shape-ellipse');
    }
  },
  'shape-rectangle': {
    title: 'Shape Rectangle',
    action: {
      tool: 'simpleobject',
      opts: SimpleObjectMode.rectangle
    },
    hidden: function hidden(options) {
      return isHidden(options, 'shape-rectangle');
    }
  },
  'shape-line': {
    title: 'Shape Line',
    action: {
      tool: 'simpleobject',
      opts: SimpleObjectMode.line
    },
    hidden: function hidden(options) {
      return isHidden(options, 'shape-line');
    }
  },
  text: {
    title: 'Add text',
    action: {
      tool: 'text'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'text');
    }
  },
  bonds: {
    hidden: function hidden(options) {
      return isHidden(options, 'bonds');
    }
  }
};
var bondCuts = {
  single: '1',
  "double": '2',
  triple: '3',
  up: '1',
  down: '1',
  updown: '1',
  crossed: '2',
  any: '0',
  aromatic: '4'
};
var typeSchema$1 = bond.properties.type;
var tools$1 = typeSchema$1["enum"].reduce(function (res, type, i) {
  res["bond-".concat(type)] = {
    title: "".concat(typeSchema$1.enumNames[i], " Bond"),
    shortcut: bondCuts[type],
    action: {
      tool: 'bond',
      opts: toBondType(type)
    },
    hidden: function hidden(options) {
      return isHidden(options, "bond-".concat(type));
    }
  };
  return res;
}, toolActions);

var _excluded$D = ["rescale", "fragment"];
function ownKeys$10(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$10(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$10(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$10(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function onAction(action) {
  if (action && action.dialog) {
    return {
      type: 'MODAL_OPEN',
      data: {
        name: action.dialog,
        prop: action.prop
      }
    };
  }
  if (action && action.thunk) {
    return action.thunk;
  }
  return {
    type: 'ACTION',
    action: action
  };
}
function parseStruct(struct, server, options) {
  if (typeof struct === 'string') {
    options = options || {};
    var _options = options;
        _options.rescale;
        _options.fragment;
        var formatterOptions = _objectWithoutProperties(_options, _excluded$D);
    var format = identifyStructFormat(struct);
    if (format === SupportedFormat.cdx) {
      struct = "base64::".concat(struct.replace(/\s/g, ''));
    }
    var factory = new FormatterFactory(server);
    var service = factory.create(format, formatterOptions);
    return service.getStructureFromStringAsync(struct);
  } else {
    return Promise.resolve(struct);
  }
}
function load(struct, options) {
  return function () {
    var _ref = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var state, editor, server, errorHandler, parsedStruct, _options2, fragment, hasUnsupportedGroups, oldStruct, stereAtomsMap;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              editor = state.editor;
              server = state.server;
              errorHandler = editor.errorHandler;
              options = options || {};
              options = _objectSpread$10(_objectSpread$10({}, options), {}, {
                'dearomatize-on-load': editor.options()['dearomatize-on-load']
              });
              dispatch(setAnalyzingFile(true));
              _context.prev = 7;
              _context.next = 10;
              return parseStruct(struct, server, options);
            case 10:
              parsedStruct = _context.sent;
              _options2 = options, fragment = _options2.fragment;
              hasUnsupportedGroups = parsedStruct.sgroups.some(function (sGroup) {
                return !supportedSGroupTypes[sGroup.type];
              });
              if (!hasUnsupportedGroups) {
                _context.next = 17;
                break;
              }
              _context.next = 16;
              return editor.event.confirm.dispatch();
            case 16:
              parsedStruct.sgroups = parsedStruct.sgroups.filter(function (_key, sGroup) {
                return supportedSGroupTypes[sGroup.type];
              });
            case 17:
              parsedStruct.rescale();
              if (editor.struct().atoms.size) {
                oldStruct = editor.struct().clone();
                parsedStruct.sgroups.forEach(function (sg, sgId) {
                  var offset = SGroup.getOffset(oldStruct.sgroups.get(sgId));
                  var atomSet = new Pile(sg.atoms);
                  var crossBonds = SGroup.getCrossBonds(parsedStruct, atomSet);
                  SGroup.bracketPos(sg, parsedStruct, crossBonds);
                  if (offset) sg.updateOffset(offset);
                });
              }
              parsedStruct.findConnectedComponents();
              parsedStruct.setImplicitHydrogen();
              stereAtomsMap = getStereoAtomsMap(parsedStruct, Array.from(parsedStruct.bonds.values()));
              parsedStruct.atoms.forEach(function (atom, id) {
                var _parsedStruct$atomGet;
                if ((parsedStruct === null || parsedStruct === void 0 ? void 0 : (_parsedStruct$atomGet = parsedStruct.atomGetNeighbors(id)) === null || _parsedStruct$atomGet === void 0 ? void 0 : _parsedStruct$atomGet.length) === 0) {
                  atom.stereoLabel = null;
                  atom.stereoParity = 0;
                } else {
                  var stereoProp = stereAtomsMap.get(id);
                  if (stereoProp) {
                    atom.stereoLabel = stereoProp.stereoLabel;
                    atom.stereoParity = stereoProp.stereoParity;
                  }
                }
              });
              parsedStruct.markFragments();
              if (fragment) {
                if (parsedStruct.isBlank()) {
                  dispatch({
                    type: 'ACTION',
                    action: tools$1['select-rectangle'].action
                  });
                } else {
                  dispatch(onAction({
                    tool: 'paste',
                    opts: parsedStruct
                  }));
                }
              } else {
                editor.struct(parsedStruct);
              }
              dispatch(setAnalyzingFile(false));
              dispatch({
                type: 'MODAL_CLOSE'
              });
              _context.next = 33;
              break;
            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](7);
              dispatch(setAnalyzingFile(false));
              _context.t0 && errorHandler(_context.t0.message);
            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 29]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function checkServer() {
  return function (dispatch, getState) {
    var _getState = getState(),
        editor = _getState.editor,
        server = _getState.server;
    server.then(function (res) {
      return dispatch(appUpdate({
        indigoVersion: res === null || res === void 0 ? void 0 : res.indigoVersion,
        imagoVersions: res === null || res === void 0 ? void 0 : res.imagoVersions,
        server: res === null || res === void 0 ? void 0 : res.isAvailable
      }));
    }, function (e) {
      return editor.errorHandler(e);
    });
  };
}
function recognize(file, version) {
  return function (dispatch, getState) {
    var rec = getState().server.recognize;
    var editor = getState().editor;
    var process = rec(file, version).then(function (res) {
      dispatch(setStruct(res.struct));
    }, function (e) {
      dispatch(setStruct(null));
      editor.errorHandler(e);
    });
    dispatch(setStruct(process));
  };
}
function ketcherCheck(struct, checkParams) {
  var errors = {};
  if (checkParams.includes('chiral_flag')) {
    var isAbs = Array.from(struct.frags.values()).some(function (fr) {
      return fr ? fr.enhancedStereoFlag === 'abs' : false;
    });
    if (isAbs) errors.chiral_flag = 'Chiral flag is present on the canvas';
  }
  if (checkParams.includes('valence')) {
    var badVal = 0;
    struct.atoms.forEach(function (atom) {
      return atom.badConn && badVal++;
    });
    if (badVal > 0) errors.valence = "Structure contains ".concat(badVal, " atom").concat(badVal !== 1 ? 's' : '', " with bad valence");
  }
  return errors;
}
function check(optsTypes) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        editor = _getState2.editor,
        server = _getState2.server;
    var ketcherErrors = ketcherCheck(editor.struct(), optsTypes);
    var options = getState().options.getServerSettings();
    options.data = {
      types: without(['valence', 'chiral_flag'], optsTypes)
    };
    return serverCall(editor, server, 'check', options).then(function (res) {
      res = Object.assign(res, ketcherErrors);
      dispatch(checkErrors(res));
    })["catch"](function (e) {
      editor.errorHandler(e);
    });
  };
}
function automap(res) {
  return serverTransform('automap', res);
}
function analyse() {
  return function (dispatch, getState) {
    dispatch({
      type: 'ANALYSE_LOADING'
    });
    var _getState3 = getState(),
        editor = _getState3.editor,
        server = _getState3.server,
        options = _getState3.options;
    var serverSettings = options.getServerSettings();
    serverSettings.data = {
      properties: ['molecular-weight', 'most-abundant-mass', 'monoisotopic-mass', 'gross', 'mass-composition']
    };
    return serverCall(editor, server, 'calculate', serverSettings).then(function (values) {
      return dispatch({
        type: 'CHANGE_ANALYSE',
        data: {
          values: values
        }
      });
    })["catch"](function (e) {
      editor.errorHandler(e);
    });
  };
}
function serverTransform(method, data, struct) {
  return function (dispatch, getState) {
    var state = getState();
    var opts = state.options.getServerSettings();
    opts.data = data;
    dispatch(indigoVerification(true));
    serverCall(state.editor, state.server, method, opts, struct).then(function (res) {
      var loadedStruct = new KetSerializer().deserialize(res.struct);
      return dispatch(load(loadedStruct, {
        rescale: method === 'layout',
        reactionRelayout: method === 'clean'
      }));
    })["catch"](function (e) {
      state.editor.errorHandler(e);
    })["finally"](function () {
      dispatch(indigoVerification(false));
    });
  };
}
function serverCall(editor, server, method, options, struct) {
  var selection = editor.selection();
  var selectedAtoms = [];
  var aidMap = new Map();
  var currentStruct = (struct || editor.struct()).clone(null, null, false, aidMap);
  if (selection) {
    selectedAtoms = (selection.atoms ? selection.atoms : editor.explicitSelected().atoms).map(function (aid) {
      return aidMap.get(aid);
    });
  }
  var ketSerializer = new KetSerializer();
  return server.then(function () {
    return server[method](Object.assign({
      struct: ketSerializer.serialize(currentStruct)
    }, method !== 'calculate' && method !== 'check' ? {
      output_format: ChemicalMimeType.KET
    } : null, selectedAtoms && selectedAtoms.length > 0 ? {
      selected: selectedAtoms
    } : null, options.data), omit('data', options));
  });
}

var config$1 = {
  layout: {
    shortcut: 'Mod+l',
    title: 'Layout',
    action: {
      thunk: serverTransform('layout')
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'layout');
    }
  },
  clean: {
    shortcut: 'Mod+Shift+l',
    title: 'Clean Up',
    action: {
      thunk: serverTransform('clean')
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'clean');
    }
  },
  arom: {
    title: 'Aromatize',
    action: {
      thunk: serverTransform('aromatize')
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'arom');
    }
  },
  dearom: {
    title: 'Dearomatize',
    action: {
      thunk: serverTransform('dearomatize')
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'dearom');
    }
  },
  cip: {
    shortcut: 'Mod+p',
    title: 'Calculate CIP',
    action: {
      thunk: serverTransform('calculateCip')
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'cip');
    }
  },
  check: {
    title: 'Check Structure',
    action: {
      dialog: 'check'
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'check');
    }
  },
  analyse: {
    title: 'Calculated Values',
    action: {
      dialog: 'analyse'
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'analyse');
    }
  },
  recognize: {
    title: 'Recognize Molecule',
    action: {
      dialog: 'recognize'
    },
    disabled: function disabled(editor, server, options) {
      var _options$app$imagoVer;
      return (
        !options.app.server || !((_options$app$imagoVer = options.app.imagoVersions) !== null && _options$app$imagoVer !== void 0 && _options$app$imagoVer.length) > 0
      );
    },
    hidden: function hidden(options) {
      return isHidden(options, 'recognize');
    }
  },
  miew: {
    title: '3D Viewer',
    action: {
      dialog: 'miew'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'miew');
    }
  }
};

var molSerializer = new MolSerializer();
var templates$1 = ["Benzene\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  6  6  0  0  0  0            999 V2000\n    0.6548    2.2452    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0813    2.2456    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3694    2.6575    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0813    1.4204    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.6548    1.4167    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3712    1.0086    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  3  1  2  0     0  0\n  4  2  2  0     0  0\n  1  5  1  0     0  0\n  2  3  1  0     0  0\n  5  6  2  0     0  0\n  6  4  1  0     0  0\nM  END", "Cyclopentadiene\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  5  5  0  0  0  0            999 V2000\n    3.8091    8.2444    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3091    6.7055    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.6181    7.6510    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.3091    6.7055    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0000    7.6510    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  5  1  0     0  0\n  2  3  2  0     0  0\n  3  1  1  0     0  0\n  4  2  1  0     0  0\n  5  4  2  0     0  0\nM  END", "Cyclohexane\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  6  6  0  0  0  0            999 V2000\n    2.5500    3.6722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5500    2.6722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4160    2.1722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2820    2.6722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2820    3.6722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4160    4.1722    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  6  1  0     0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  3  4  1  0     0  0\n  4  5  1  0     0  0\n  5  6  1  0     0  0\nM  END", "Cyclopentane\n  Ketcher 11161218352D 1   1.00000     0.00000     0\n\n  5  5  0     0  0            999 V2000\n    0.8090    1.5389    0.0000 C   0  0  0  0  0  0        0  0  0\n    1.6180    0.9511    0.0000 C   0  0  0  0  0  0        0  0  0\n    1.3090    0.0000    0.0000 C   0  0  0  0  0  0        0  0  0\n    0.3090    0.0000    0.0000 C   0  0  0  0  0  0        0  0  0\n    0.0000    0.9511    0.0000 C   0  0  0  0  0  0        0  0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  3  4  1  0     0  0\n  4  5  1  0     0  0\n  5  1  1  0     0  0\nM  END", "Cyclopropane\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  3  3  0  0  0  0            999 V2000\n    2.6123    1.5663    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.6098    1.5663    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1111    2.4280    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  1  3  1  0     0  0\n  2  3  1  0     0  0\nM  END", "Cyclobutane\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  4  4  0  0  0  0            999 V2000\n    3.4956    1.8862    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4919    2.8804    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4846    1.8991    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4821    2.8804    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  1  3  1  0     0  0\n  2  4  1  0     0  0\n  3  4  1  0     0  0\nM  END", "Cycloheptane\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  7  7  0  0  0  0            999 V2000\n   21.4111    6.3389    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   22.1938    6.9555    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   23.1653    6.7333    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   23.5987    5.8389    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   21.4166    5.3333    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   23.1660    4.9333    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   22.1938    4.7111    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  3  4  1  0     0  0\n  4  6  1  0     0  0\n  1  5  1  0     0  0\n  5  7  1  0     0  0\n  6  7  1  0     0  0\nM  END", "Cyclooctane\n  Ketcher  5112215552D 1   1.00000     0.00000     0\n\n  8  8  0  0  0  0            999 V2000\n    2.9268    2.2122    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.9270    3.2099    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.6288    3.9118    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.6290    1.5102    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.6266    1.5102    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.3286    2.2122    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.3285    3.2099    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.6266    3.9119    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  1  4  1  0     0  0\n  4  5  1  0     0  0\n  5  6  1  0     0  0\n  6  7  1  0     0  0\n  7  8  1  0     0  0\n  8  3  1  0     0  0\nM  END"].map(function (structStr) {
  return molSerializer.deserialize(structStr);
});

var templateLib = {
  'template-lib': {
    shortcut: 'Shift+t',
    title: 'Custom Templates',
    action: {
      dialog: 'templates'
    },
    selected: function selected(editor) {
      return editor._tool.mode === 'classic';
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.templates;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'template-lib');
    }
  }
};
var templates = templates$1.reduce(function (res, struct, i) {
  res["template-".concat(i)] = {
    title: "".concat(struct.name),
    shortcut: 't',
    action: {
      tool: 'template',
      opts: {
        struct: struct
      }
    }
  };
  return res;
}, templateLib);

var zoomList = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.7, 2, 2.5, 3, 3.5, 4];
var zoom = {
  zoom: {
    selected: function selected(editor) {
      return editor.zoom();
    },
    hidden: function hidden(options) {
      return isHidden(options, 'zoom');
    }
  },
  'zoom-out': {
    shortcut: ['-', '_', 'Shift+-'],
    title: 'Zoom Out',
    disabled: function disabled(editor) {
      return editor.zoom() <= zoomList[0];
    },
    action: function action(editor) {
      var zoom = editor.zoom();
      var i = findLastIndex(function (z) {
        return z <= zoom;
      }, zoomList);
      editor.zoom(zoomList[zoomList[i] === zoom && i > 0 ? i - 1 : i]);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'zoom-out');
    }
  },
  'zoom-in': {
    shortcut: ['+', '=', 'Shift+='],
    title: 'Zoom In',
    disabled: function disabled(editor) {
      return zoomList[zoomList.length - 1] <= editor.zoom();
    },
    action: function action(editor) {
      var zoom = editor.zoom();
      var i = findIndex(function (z) {
        return z >= zoom;
      }, zoomList);
      editor.zoom(zoomList[zoomList[i] === zoom && i < zoomList.length - 1 ? i + 1 : i]);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'zoom-in');
    }
  },
  'zoom-list': {
    hidden: function hidden(options) {
      return isHidden(options, 'zoom-list');
    }
  }
};

var openHelpLink = function openHelpLink() {
  var _window$open;
  return (_window$open = window.open("https://github.com/epam/ketcher/blob/".concat("master", "/documentation/help.md#ketcher-overview"))) === null || _window$open === void 0 ? void 0 : _window$open.focus();
};
var help = {
  help: {
    shortcut: ['?', '&', 'Shift+/'],
    action: function action() {
      return openHelpLink();
    },
    hidden: function hidden(options) {
      return isHidden(options, 'help');
    }
  }
};

var functionalGroupsLib = {
  'functional-groups': {
    shortcut: 'Shift+f',
    title: 'Functional Groups',
    action: {
      dialog: 'templates',
      prop: {
        tab: 1
      }
    },
    selected: function selected(editor) {
      return editor._tool.mode === 'fg';
    },
    disabled: function disabled(_, __, options) {
      return !options.app.functionalGroups;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'functional-groups');
    }
  }
};

var requestFullscreen = function requestFullscreen(element) {
  element.requestFullscreen && element.requestFullscreen() || element.msRequestFullscreen && element.msRequestFullscreen() || element.mozRequestFullScreen && element.mozRequestFullScreen() || element.webkitRequestFullscreen && element.webkitRequestFullscreen();
};
var exitFullscreen = function exitFullscreen() {
  document.exitFullscreen && document.exitFullscreen() || document.msExitFullscreen && document.msExitFullscreen() || document.mozCancelFullScreen && document.mozCancelFullScreen() || document.webkitExitFullscreen && document.webkitExitFullscreen();
};
var getIfFullScreen$1 = function getIfFullScreen() {
  return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
};
var toggleFullscreen = function toggleFullscreen() {
  var fullscreenElement = document.querySelector('.Ketcher-root') || document.documentElement;
  getIfFullScreen$1() ? exitFullscreen() : requestFullscreen(fullscreenElement);
};
var fullscreen = {
  fullscreen: {
    title: 'Fullscreen mode',
    action: function action() {
      return toggleFullscreen();
    },
    hidden: function hidden(options) {
      return isHidden(options, 'fullscreen');
    }
  }
};

function ownKeys$$(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$$(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$$(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$$(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var config = _objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$(_objectSpread$$({
  clear: {
    shortcut: 'Mod+Delete',
    title: 'Clear Canvas',
    action: {
      thunk: function thunk(dispatch, getState) {
        var editor = getState().editor;
        if (!editor.struct().isBlank()) editor.struct(null);
        dispatch({
          type: 'ACTION',
          action: tools$1['select-rectangle'].action
        });
      }
    },
    hidden: function hidden(options) {
      return isHidden(options, 'clear');
    }
  },
  open: {
    shortcut: 'Mod+o',
    title: 'Open???',
    action: {
      dialog: 'open'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'open');
    }
  },
  save: {
    shortcut: 'Mod+s',
    title: 'Save As???',
    action: {
      dialog: 'save'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'save');
    }
  },
  undo: {
    shortcut: 'Mod+z',
    title: 'Undo',
    action: function action(editor) {
      editor.undo();
    },
    disabled: function disabled(editor) {
      return editor.historySize().undo === 0;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'undo');
    }
  },
  redo: {
    shortcut: ['Mod+Shift+z', 'Mod+y'],
    title: 'Redo',
    action: function action(editor) {
      editor.redo();
    },
    disabled: function disabled(editor) {
      return editor.historySize().redo === 0;
    },
    hidden: function hidden(options) {
      return isHidden(options, 'redo');
    }
  },
  cut: {
    shortcut: 'Mod+x',
    title: 'Cut',
    action: function action(editor) {
      exec('cut') || dontClipMessage('Cut', editor.errorHandler);
    },
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'cut');
    }
  },
  copies: {
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'copies');
    }
  },
  copy: {
    shortcut: 'Mod+c',
    title: 'Copy',
    action: function action(editor) {
      exec('copy') || dontClipMessage('Copy', editor.errorHandler);
    },
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'copy');
    }
  },
  'copy-image': {
    shortcut: 'Mod+Shift+f',
    title: 'Copy Image',
    action: function action() {
      copyImageToClipboard();
    },
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'copy-image');
    }
  },
  'copy-mol': {
    shortcut: 'Mod+m',
    title: 'Copy as MOL',
    action: function action() {
      copyAs('mol');
    },
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'copy-mol');
    }
  },
  'copy-ket': {
    shortcut: 'Mod+Shift+k',
    title: 'Copy as KET',
    action: function action() {
      copyAs('ket');
    },
    disabled: function disabled(editor) {
      return !hasSelection(editor);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'copy-ket');
    }
  },
  paste: {
    shortcut: 'Mod+v',
    title: 'Paste',
    action: function action(editor) {
      exec('paste') || dontClipMessage('Paste', editor.errorHandler);
    },
    selected: function selected(_ref) {
      var actions = _ref.actions;
      return actions &&
      actions.active && actions.active.tool === 'paste';
    },
    hidden: function hidden(options) {
      return isHidden(options, 'paste');
    }
  },
  settings: {
    title: 'Settings',
    action: {
      dialog: 'settings'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'settings');
    }
  },
  about: {
    title: 'About',
    action: {
      dialog: 'about'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'about');
    }
  },
  'reaction-automap': {
    title: 'Reaction Auto-Mapping Tool',
    action: {
      dialog: 'automap'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'reaction-automap');
    },
    disabled: function disabled(editor, server, options) {
      return !options.app.server || !editor.struct().hasRxnArrow();
    }
  },
  'period-table': {
    title: 'Periodic Table',
    action: {
      dialog: 'period-table'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'period-table');
    }
  },
  'extended-table': {
    title: 'Extended Table',
    action: {
      dialog: 'extended-table'
    },
    hidden: function hidden(options) {
      return isHidden(options, 'extended-table');
    }
  },
  'select-all': {
    title: 'Select All',
    shortcut: 'Mod+a',
    action: {
      thunk: function thunk(dispatch, getState) {
        getState().editor.selection('all');
        var selectionTool = getState().toolbar.visibleTools.select;
        dispatch({
          type: 'ACTION',
          action: tools$1[selectionTool].action
        });
      }
    },
    hidden: function hidden(options) {
      return isHidden(options, 'select-all');
    }
  },
  'deselect-all': {
    title: 'Deselect All',
    shortcut: 'Mod+Shift+a',
    action: function action(editor) {
      editor.selection(null);
    },
    hidden: function hidden(options) {
      return isHidden(options, 'deselect-all');
    }
  },
  'select-descriptors': {
    title: 'Select descriptors',
    shortcut: 'Mod+d',
    action: {
      thunk: function thunk(dispatch, getState) {
        var selectionTool = getState().toolbar.visibleTools.select;
        var editor = getState().editor;
        editor.alignDescriptors();
        editor.selection('descriptors');
        dispatch({
          type: 'ACTION',
          action: tools$1[selectionTool].action
        });
      }
    },
    hidden: function hidden(options) {
      return isHidden(options, 'select-descriptors');
    }
  },
  'any-atom': {
    title: 'Any atom',
    action: {
      tool: 'atom',
      opts: {
        label: 'A',
        pseudo: 'A',
        type: 'gen'
      }
    },
    hidden: function hidden(options) {
      return isHidden(options, 'any-atom');
    }
  }
}, config$1), debugObj), tools$1), atoms), zoom), templates), functionalGroupsLib), fullscreen), help);
function hasSelection(editor) {
  var selection = editor.selection();
  return selection &&
  Object.keys(selection).filter(function (key) {
    return !['sgroupData'].includes(key);
  }).length > 0;
}
function dontClipMessage(title, errorHandler) {
  errorHandler('This action is unavailable via menu.\n' +
  'Instead, use shortcut to ' + title + '.');
}

var _path$2W, _rect, _rect2;

function _extends$2W() { _extends$2W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2W.apply(this, arguments); }

function SvgAbout(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2W({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2W || (_path$2W = /*#__PURE__*/React.createElement("path", {
    d: "M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 18c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z",
    fill: "currentcolor"
  })), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    x: 11.25,
    y: 9.5,
    width: 1.5,
    height: 7,
    rx: 0.75,
    fill: "currentcolor"
  })), _rect2 || (_rect2 = /*#__PURE__*/React.createElement("rect", {
    x: 11.25,
    y: 7.25,
    width: 1.5,
    height: 1.5,
    rx: 0.75,
    fill: "currentcolor"
  })));
}

var _path$2V, _path2$G, _path3$9, _path4$3;

function _extends$2V() { _extends$2V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2V.apply(this, arguments); }

function SvgAnalyse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2V({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2V || (_path$2V = /*#__PURE__*/React.createElement("path", {
    d: "M17.56 18.412a2.551 2.551 0 01-2.2 1.242H8.271a2.571 2.571 0 01-2.3-3.724l3.51-7a.99.99 0 00.1-.441V6.337h-.6v-2h5.705v2h-.846v2.1c.002.162.044.32.121.463l.05.094a4.448 4.448 0 00-1.61 1.239l-.214-.4a2.993 2.993 0 01-.343-1.388V6.554h-.26V8.49c-.001.464-.11.922-.317 1.338l-3.51 7a.57.57 0 00.51.827h7.087a.548.548 0 00.424-.19h.062a4.4 4.4 0 002.084-.521 2.558 2.558 0 01-.366 1.467z",
    fill: "currentcolor"
  })), _path2$G || (_path2$G = /*#__PURE__*/React.createElement("path", {
    d: "M15.842 17.465a4.436 4.436 0 110-8.872 4.436 4.436 0 010 8.872zm0-7.87a3.436 3.436 0 100 6.872 3.436 3.436 0 000-6.873z",
    fill: "currentcolor"
  })), _path3$9 || (_path3$9 = /*#__PURE__*/React.createElement("path", {
    d: "M16.6 12.089l-1.007.028c-.16 1.472-.162 3.537-1.806 3.29-.38-.056-.218-.634.16-.578.983.147.915-1.35 1.042-2.695l-.76.02c-.386.012-.385-.588 0-.6l.837-.022c.151-.882.494-1.554 1.458-1.394.38.063.218.64-.16.578-.4-.065-.578.275-.683.8l.918-.026c.386-.011.386.589 0 .599z",
    fill: "currentcolor"
  })), _path4$3 || (_path4$3 = /*#__PURE__*/React.createElement("path", {
    d: "M18.16 13.222c-.265.26-.514.537-.76.815.166.264.346.518.541.76.24.3-.182.725-.424.424A8.779 8.779 0 0117 14.5c-.213.244-.429.487-.654.722-.268.279-.692-.146-.424-.424.268-.278.507-.553.753-.835a9.057 9.057 0 01-.46-.963c-.146-.358.434-.513.578-.16.09.22.19.437.3.648.21-.235.424-.467.65-.69.27-.272.693.153.418.424z",
    fill: "currentcolor"
  })));
}

var _path$2U, _path2$F;

function _extends$2U() { _extends$2U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2U.apply(this, arguments); }

function SvgArom(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2U({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2U || (_path$2U = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.53 3.626a.94.94 0 01.939 0l6.561 3.781c.291.168.47.477.47.812v7.562a.937.937 0 01-.47.812l-6.562 3.781a.94.94 0 01-.938 0l-6.56-3.781a.937.937 0 01-.47-.812V8.219c0-.335.179-.644.47-.812l6.56-3.781zM12 5.52L6.377 8.76v6.48L12 18.48l5.623-3.24V8.76l-5.623-3.24z",
    fill: "currentcolor"
  })), _path2$F || (_path2$F = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.005 9.7A2.3 2.3 0 009.702 12a2.3 2.3 0 002.303 2.298 2.3 2.3 0 002.302-2.299 2.3 2.3 0 00-2.302-2.298zM7.825 12a4.177 4.177 0 014.18-4.174 4.177 4.177 0 014.18 4.173 4.177 4.177 0 01-4.18 4.174 4.177 4.177 0 01-4.18-4.174z",
    fill: "currentcolor"
  })));
}

var _path$2T;

function _extends$2T() { _extends$2T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2T.apply(this, arguments); }

function SvgArrowUpward(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2T({
    width: 21,
    height: 27,
    viewBox: "0 0 21 27",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2T || (_path$2T = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.898 8.972L9.54.395a1.365 1.365 0 011.92 0l8.642 8.577c.53.527.53 1.38 0 1.906-.53.527-1.39.527-1.92 0l-6.324-6.276V26.5H9.142V4.602l-6.324 6.276c-.53.527-1.39.527-1.92 0a1.34 1.34 0 010-1.906z"
  })));
}

var _path$2S;

function _extends$2S() { _extends$2S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2S.apply(this, arguments); }

function SvgBondAny(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2S({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2S || (_path$2S = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.942 32.078a2 2 0 01-.02 2.828l-3.646 3.595a2 2 0 01-2.808-2.85l3.646-3.593a2 2 0 012.828.02zM23.457 24.538a2 2 0 01-.02 2.829l-3.647 3.592a2 2 0 11-2.807-2.85l3.646-3.592a2 2 0 012.828.021zM31.013 17.036a2 2 0 01-.021 2.829l-3.646 3.592a2 2 0 11-2.807-2.85l3.646-3.592a2 2 0 012.828.021zM38.553 9.52a2 2 0 01-.02 2.828l-3.647 3.594a2 2 0 11-2.808-2.848L35.724 9.5a2 2 0 012.829.02z",
    fill: "#231F20"
  })));
}

var _path$2R;

function _extends$2R() { _extends$2R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2R.apply(this, arguments); }

function SvgBondAromatic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2R({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2R || (_path$2R = /*#__PURE__*/React.createElement("path", {
    d: "M15.886 40.04a2 2 0 01-1.4-3.424l19.6-19.324a2 2 0 012.8 2.85l-19.6 19.322a2 2 0 01-1.4.576zM17.456 27.214l-3.544 3.494a1.998 1.998 0 01-2.896.045 2 2 0 01.095-2.895l3.544-3.494a1.998 1.998 0 012.896-.044 2 2 0 01-.095 2.894zM28.568 15.454a2 2 0 01-1.4-3.424l3.546-3.494a2 2 0 012.8 2.848l-3.542 3.494a2 2 0 01-1.404.576zM20.539 23.368a1.999 1.999 0 01-1.4-3.424l3.542-3.494a2.001 2.001 0 013.286 2.203 2 2 0 01-.486.645L21.943 22.8a2 2 0 01-1.404.568z",
    fill: "#231F20"
  })));
}

var _path$2Q;

function _extends$2Q() { _extends$2Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2Q.apply(this, arguments); }

function SvgBondCrossed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2Q({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2Q || (_path$2Q = /*#__PURE__*/React.createElement("path", {
    d: "M39.563 18.718l-14.098 6.8-7.25 13.866a2 2 0 01-3.546-1.852l4.762-9.11-9.26 4.464a2.001 2.001 0 11-1.735-3.6l14.098-6.8 7.25-13.87a2 2 0 113.546 1.852l-4.762 9.11 9.26-4.464a2 2 0 111.735 3.6v.004z",
    fill: "#231F20"
  })));
}

var _path$2P;

function _extends$2P() { _extends$2P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2P.apply(this, arguments); }

function SvgBondDative(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2P({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2P || (_path$2P = /*#__PURE__*/React.createElement("path", {
    d: "M38.2 11.278l-5.554 11.76c-.234.494-.914.558-1.346.126l-1.65-1.65-15.278 15.054a2.001 2.001 0 01-3.468-1.423 2.002 2.002 0 01.668-1.427l15.252-15.032-1.728-1.728c-.432-.434-.368-1.112.126-1.346l11.76-5.554c.708-.338 1.55.504 1.218 1.22z",
    fill: "#231F20"
  })));
}

var _path$2O;

function _extends$2O() { _extends$2O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2O.apply(this, arguments); }

function SvgBondDoublearomatic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2O({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2O || (_path$2O = /*#__PURE__*/React.createElement("path", {
    d: "M17.572 27.342l-3.544 3.494a2 2 0 11-2.8-2.85l3.544-3.494a1.999 1.999 0 112.8 2.85zM24.427 19.6a1.999 1.999 0 01-1.4-3.424l3.544-3.494a2 2 0 012.8 2.848l-3.54 3.502a2 2 0 01-1.404.568zM32.102 11.96a2 2 0 100-4 2 2 0 000 4zM20.298 23.762a2 2 0 100-4 2 2 0 000 4zM20.888 36.036l-3.544 3.494a2 2 0 11-2.8-2.85l3.536-3.494a1.999 1.999 0 112.8 2.85h.008zM27.744 28.302a2 2 0 01-1.4-3.424l3.544-3.494a2 2 0 112.8 2.848l-3.544 3.494a2 2 0 01-1.4.576zM35.418 20.654a2 2 0 100-4 2 2 0 000 4zM23.614 32.456a2 2 0 100-4 2 2 0 000 4z",
    fill: "#231F20"
  })));
}

var _path$2N;

function _extends$2N() { _extends$2N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2N.apply(this, arguments); }

function SvgBondDouble(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2N({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2N || (_path$2N = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M36.916 17.314a2 2 0 01-.02 2.828L17.29 39.465a2 2 0 01-2.808-2.85l19.606-19.322a2 2 0 012.828.021zM33.538 8.556a2 2 0 01-.02 2.829L13.912 30.706a2 2 0 01-2.808-2.85L30.71 8.536a2 2 0 012.828.021z",
    fill: "#231F20"
  })));
}

var _path$2M, _path2$E;

function _extends$2M() { _extends$2M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2M.apply(this, arguments); }

function SvgBondDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2M({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2M || (_path$2M = /*#__PURE__*/React.createElement("path", {
    d: "M14.531 35.178l-1.132.658a.866.866 0 01-1.183-1.18l.655-1.14 1.66 1.662zM17.896 33.23l-1.79 1.038-2.33-2.33 1.032-1.796 3.088 3.088zM21.146 31.348l-1.79 1.038-3.706-3.706 1.032-1.796 4.464 4.464zM24.398 29.468l-1.793 1.036-5.084-5.082 1.032-1.798 5.845 5.844zM27.648 27.586l-1.793 1.036-6.46-6.46 1.032-1.796 7.22 7.22zM30.897 25.704l-1.792 1.038-7.836-7.838 1.032-1.796 8.596 8.596zM34.147 23.822l-1.792 1.038-9.212-9.214 1.032-1.796 9.972 9.972zM37.394 21.94l-1.79 1.038-10.59-10.59 1.032-1.796L37.394 21.94zM39.42 20.768l-.566.328L26.888 9.13l.324-.566a.866.866 0 011.362-.18L39.6 19.4a.863.863 0 01-.18 1.368z",
    fill: "#231F20"
  })), _path2$E || (_path2$E = /*#__PURE__*/React.createElement("path", {
    d: "M37.394 21.94l-1.79 1.038-10.59-10.59 1.032-1.796L37.394 21.94zM39.42 20.768l-.566.328L26.888 9.13l.324-.566a.866.866 0 011.362-.18L39.6 19.4a.863.863 0 01-.18 1.368zM34.147 23.822l-1.792 1.038-9.212-9.214 1.032-1.796 9.972 9.972zM30.897 25.704l-1.792 1.038-7.836-7.838 1.032-1.796 8.596 8.596zM27.648 27.586l-1.793 1.036-6.46-6.46 1.032-1.796 7.22 7.22zM24.398 29.468l-1.793 1.036-5.084-5.082 1.032-1.798 5.845 5.844zM21.146 31.348l-1.79 1.038-3.706-3.706 1.032-1.796 4.464 4.464zM17.896 33.23l-1.79 1.038-2.33-2.33 1.032-1.796 3.088 3.088zM14.531 35.178l-1.132.658a.866.866 0 01-1.183-1.18l.655-1.14 1.66 1.662z",
    fill: "#231F20"
  })));
}

var _path$2L;

function _extends$2L() { _extends$2L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2L.apply(this, arguments); }

function SvgBondHydrogen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2L({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2L || (_path$2L = /*#__PURE__*/React.createElement("path", {
    d: "M14.261 35.726a2 2 0 01-1.4-3.424l1.012-1a2 2 0 112.8 2.848l-1.012 1a2 2 0 01-1.4.576zM18.875 31.108a2 2 0 01-1.4-3.424l1.012-1a2 2 0 012.8 2.85l-1 1a2 2 0 01-1.412.574zM23.486 26.49a2 2 0 01-1.4-3.426l1-1a2 2 0 012.8 2.848l-1 1a2 2 0 01-1.4.578zM28.112 21.886a2 2 0 01-1.4-3.426l1.01-1a2 2 0 112.8 2.848l-1 1a2 2 0 01-1.41.578zM32.726 17.27a2 2 0 01-1.4-3.424l1.012-1a2 2 0 012.8 2.85l-1.012 1a2 2 0 01-1.4.574z",
    fill: "#231F20"
  })));
}

var _path$2K;

function _extends$2K() { _extends$2K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2K.apply(this, arguments); }

function SvgBondSinglearomatic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2K({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2K || (_path$2K = /*#__PURE__*/React.createElement("path", {
    d: "M15.886 40.04a2 2 0 01-1.4-3.424l19.6-19.324a2 2 0 112.8 2.85l-19.6 19.322a2 2 0 01-1.4.576zM17.584 27.342l-3.544 3.494a2 2 0 11-2.8-2.85l3.544-3.494a1.998 1.998 0 012.896-.044 1.998 1.998 0 01-.096 2.894zM24.441 19.6a2 2 0 01-1.4-3.424l3.54-3.486a1.998 1.998 0 013.343.623 2.001 2.001 0 01-.543 2.225l-3.536 3.494a2 2 0 01-1.404.568zM32.113 11.96a2 2 0 100-4 2 2 0 000 4zM20.31 23.762a2 2 0 100-4 2 2 0 000 4z",
    fill: "#231F20"
  })));
}

var _path$2J;

function _extends$2J() { _extends$2J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2J.apply(this, arguments); }

function SvgBondSingledouble(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2J({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2J || (_path$2J = /*#__PURE__*/React.createElement("path", {
    d: "M19.078 31.6l-3.544 3.488a2 2 0 11-2.8-2.85l3.543-3.494a2 2 0 112.8 2.85v.006zM30.2 19.832a2 2 0 01-1.4-3.424l3.545-3.494a2 2 0 112.8 2.85L31.6 19.258a2 2 0 01-1.4.574zM22.16 27.748a2 2 0 01-1.4-3.426l3.544-3.494a2 2 0 012.8 2.85l-3.544 3.494a2 2 0 01-1.4.576zM22.4 16.352a2 2 0 01-1.4-3.424l3.544-3.494a2 2 0 112.8 2.848L23.8 15.776a2 2 0 01-1.4.576zM14.372 24.266a2 2 0 01-1.4-3.424l3.54-3.494A2.001 2.001 0 1119.32 20.2l-3.544 3.49a2 2 0 01-1.404.576zM29.946 31.228a2 2 0 01-1.4-3.424l3.546-3.494a2 2 0 112.8 2.848l-3.546 3.494a2 2 0 01-1.4.576zM21.916 39.142a2 2 0 01-1.4-3.424l3.547-3.494a2 2 0 112.8 2.848l-3.543 3.494a2 2 0 01-1.404.576z",
    fill: "#231F20"
  })));
}

var _path$2I;

function _extends$2I() { _extends$2I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2I.apply(this, arguments); }

function SvgBondSingle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2I({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2I || (_path$2I = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.227 12.934a2 2 0 01-.02 2.829L15.601 35.087a2 2 0 11-2.808-2.85l19.604-19.323a2 2 0 012.829.02z",
    fill: "#231F20"
  })));
}

var _path$2H;

function _extends$2H() { _extends$2H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2H.apply(this, arguments); }

function SvgBondTriple(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2H({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2H || (_path$2H = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.158 12.928a2 2 0 01-.02 2.829L15.532 35.078a2 2 0 11-2.808-2.849L32.33 12.908a2 2 0 012.828.021zM31.306 5.49a2 2 0 01-.02 2.829L11.678 27.64a2 2 0 11-2.807-2.849L28.477 5.47a2 2 0 012.829.02zM39.013 20.366a2 2 0 01-.02 2.829L19.385 42.517a2 2 0 01-2.807-2.85l19.606-19.322a2 2 0 012.828.021z",
    fill: "#231F20"
  })));
}

var _path$2G;

function _extends$2G() { _extends$2G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2G.apply(this, arguments); }

function SvgBondUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2G({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2G || (_path$2G = /*#__PURE__*/React.createElement("path", {
    d: "M19.71 10.384L6.7 17.918a.433.433 0 01-.592-.59l7.5-13.046a.433.433 0 01.68-.09L19.8 9.7a.432.432 0 01-.09.684z",
    fill: "#333"
  })));
}

var _path$2F;

function _extends$2F() { _extends$2F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2F.apply(this, arguments); }

function SvgBondUpdown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2F({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2F || (_path$2F = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.326 8.31a1 1 0 011.264.128l10.728 10.818a1 1 0 01-1.42 1.408l-7.14-7.2 3.81 9.17a1 1 0 01-1.479 1.216l-7.03-4.693 2.959 6.644a1 1 0 01-1.31 1.325l-5.921-2.562 1.467 4.91a1 1 0 01-1.218 1.251l-4.594-1.237-3.369 5.868a1 1 0 11-1.734-.996l3.752-6.536a1 1 0 011.127-.468l3.607.972-1.569-5.248a1 1 0 011.355-1.204l5.537 2.396-3.321-7.46a1 1 0 011.468-1.238l7.16 4.78-4.498-10.829a1 1 0 01.369-1.215z",
    fill: "#231F20"
  })));
}

var _path$2E;

function _extends$2E() { _extends$2E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2E.apply(this, arguments); }

function SvgCapitalT(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2E({
    width: 22,
    height: 23,
    viewBox: "0 0 22 23",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2E || (_path$2E = /*#__PURE__*/React.createElement("path", {
    d: "M.5 0v4.5h8.25v18h4.5v-18h8.25V0H.5z"
  })));
}

var _path$2D;

function _extends$2D() { _extends$2D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2D.apply(this, arguments); }

function SvgChain(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2D({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2D || (_path$2D = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26.323 10.62c.517.525.51 1.369-.014 1.886l-5.414 5.336c-.33.324-.804.455-1.254.345l-6.996-1.715-4.993 4.92a1.333 1.333 0 01-1.872-1.899l5.523-5.443c.33-.324.804-.455 1.253-.345l6.997 1.715 4.885-4.814a1.333 1.333 0 011.885.014z",
    fill: "#231F20"
  })));
}

var _path$2C, _path2$D;

function _extends$2C() { _extends$2C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2C.apply(this, arguments); }

function SvgChargeMinus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2C({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2C || (_path$2C = /*#__PURE__*/React.createElement("path", {
    d: "M20 4h-8v2h8V4z",
    fill: "#231F20"
  })), _path2$D || (_path2$D = /*#__PURE__*/React.createElement("path", {
    d: "M5.82 19.32a1 1 0 01-.948.68h-.45a1 1 0 01-.942-1.338l3.228-9A1 1 0 017.65 9h1.707a1 1 0 01.941.663l3.224 9A1 1 0 0112.58 20h-.451a1 1 0 01-.948-.68l-2.62-7.764a.062.062 0 00-.117 0L5.819 19.32zm-.392-2.736c0-.501.406-.908.907-.908h4.302a.908.908 0 010 1.816H6.335a.908.908 0 01-.907-.908z",
    fill: "#000"
  })));
}

var _path$2B, _path2$C;

function _extends$2B() { _extends$2B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2B.apply(this, arguments); }

function SvgChargePlus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2B({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2B || (_path$2B = /*#__PURE__*/React.createElement("path", {
    d: "M21.5 6.499v2h-4V12.5h-2V8.499h-4v-2h4V2.5h2v3.999h4z",
    fill: "#231F20"
  })), _path2$C || (_path2$C = /*#__PURE__*/React.createElement("path", {
    d: "M5.82 19.32a1 1 0 01-.948.68h-.45a1 1 0 01-.942-1.338l3.228-9A1 1 0 017.65 9h1.707a1 1 0 01.941.663l3.224 9A1 1 0 0112.58 20h-.451a1 1 0 01-.948-.68l-2.62-7.764a.062.062 0 00-.117 0L5.819 19.32zm-.392-2.736c0-.501.406-.908.907-.908h4.302a.908.908 0 010 1.816H6.335a.908.908 0 01-.907-.908z",
    fill: "#000"
  })));
}

var _path$2A, _path2$B;

function _extends$2A() { _extends$2A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2A.apply(this, arguments); }

function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2A({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2A || (_path$2A = /*#__PURE__*/React.createElement("path", {
    d: "M12 5a7 7 0 11-7 7 7.008 7.008 0 017-7zm0-2a9 9 0 100 18 9 9 0 000-18z",
    fill: "currentcolor"
  })), _path2$B || (_path2$B = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.73 9.555l-5.838 5.837-3.314-3.54 1.46-1.367 1.902 2.031 4.376-4.375 1.414 1.414z",
    fill: "currentcolor"
  })));
}

var _path$2z, _path2$A;

function _extends$2z() { _extends$2z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2z.apply(this, arguments); }

function SvgChiralFlag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2z({
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -5 70 35"
  }, props), _path$2z || (_path$2z = /*#__PURE__*/React.createElement("path", {
    d: "M0 25h69V0H0zM68 1v23H1V1z"
  })), _path2$A || (_path2$A = /*#__PURE__*/React.createElement("path", {
    d: "M21 18.14a3.85 3.85 0 002.71-.93 3.07 3.07 0 001-2.43H23.1a2.09 2.09 0 01-.53 1.54 2.09 2.09 0 01-1.55.53 1.94 1.94 0 01-1.64-.8 3.31 3.31 0 01-.6-2v-1.98a3.33 3.33 0 01.59-2 1.89 1.89 0 011.6-.8 2.18 2.18 0 011.59.53 2 2 0 01.54 1.53h1.61a3 3 0 00-1-2.45A4 4 0 0021 7.9a3.58 3.58 0 00-2.78 1.18 4.3 4.3 0 00-1.07 3V14a4.25 4.25 0 001.08 3A3.65 3.65 0 0021 18.14zM27.77 12.54a1.67 1.67 0 01.64-.52 2.09 2.09 0 01.92-.19 1.26 1.26 0 011 .39 1.91 1.91 0 01.34 1.26V18h1.66v-4.51a3.36 3.36 0 00-.66-2.29 2.33 2.33 0 00-1.84-.74 2.42 2.42 0 00-1.17.29 2.63 2.63 0 00-.9.81V7.34h-1.65V18h1.66zM34.16 7.34h1.66V8.8h-1.66zM34.16 10.6h1.66V18h-1.66zM39.32 12.86a1.35 1.35 0 01.5-.58 1.49 1.49 0 01.81-.21h.71l.2-1.55-.24-.06h-.28a1.68 1.68 0 00-1 .32 2.38 2.38 0 00-.72.89l-.11-1.07h-1.53V18h1.66zM45.49 13.65a4.08 4.08 0 00-2.39.6 1.93 1.93 0 00-.85 1.67 2.16 2.16 0 00.62 1.63 2.46 2.46 0 001.77.59 2.3 2.3 0 001.25-.35 2.85 2.85 0 00.9-.87 4 4 0 00.08.53q.06.27.15.55h1.68a4.59 4.59 0 01-.2-.82 6 6 0 01-.06-.88V13a2.31 2.31 0 00-.79-1.89 3.17 3.17 0 00-2.08-.66 3.32 3.32 0 00-2.16.68 1.83 1.83 0 00-.78 1.55h1.6a.86.86 0 01.33-.7 1.39 1.39 0 01.9-.27 1.35 1.35 0 011 .33 1.21 1.21 0 01.34.91v.65zm1.29 2.13a1.59 1.59 0 01-.67.72 2.07 2.07 0 01-1.12.31 1.15 1.15 0 01-.8-.25.86.86 0 01-.28-.67 1.09 1.09 0 01.41-.84 1.67 1.67 0 011.13-.36h1.32zM50.27 7.34h1.66V18h-1.66z"
  })));
}

var _path$2y;

function _extends$2y() { _extends$2y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2y.apply(this, arguments); }

function SvgCip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2y({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2y || (_path$2y = /*#__PURE__*/React.createElement("path", {
    d: "M11.998 19.27L4.607 7.949a.7.7 0 01.347-1.042L9.447 5.27a.7.7 0 01.934.574l1.617 13.426zM5.65 7.718l4.848 7.419-1.06-8.8-3.788 1.38zM19.392 7.947L12 19.27l1.617-13.426a.7.7 0 01.935-.574l4.493 1.635a.7.7 0 01.347 1.041z",
    fill: "currentcolor"
  })));
}

var _path$2x;

function _extends$2x() { _extends$2x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2x.apply(this, arguments); }

function SvgClean(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2x({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2x || (_path$2x = /*#__PURE__*/React.createElement("path", {
    d: "M19.848 16.312a2.437 2.437 0 11-4.843-.386l-1.987-1.147-1-.578-1 .577-1.687.974a2.437 2.437 0 11-1.234-1.596l1.922-1.109 1-.578V9.16a2.437 2.437 0 112 0v3.31l1 .577 2.09 1.207a2.436 2.436 0 013.741 2.058h-.002z",
    fill: "currentcolor"
  })));
}

var _path$2w;

function _extends$2w() { _extends$2w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2w.apply(this, arguments); }

function SvgCopy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2w({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2w || (_path$2w = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 18.75H9V8.25h8.25v10.5zm0-12H9a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h8.25a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5zm-2.25-3H6a1.5 1.5 0 00-1.5 1.5v10.5H6V5.25h9v-1.5z",
    fill: "currentcolor"
  })));
}

var _path$2v, _path2$z, _path3$8;

function _extends$2v() { _extends$2v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2v.apply(this, arguments); }

function SvgCopyImage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2v({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2v || (_path$2v = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 18.75H9V8.25h8.25v10.5zm0-12H9a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h8.25a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5zm-2.25-3H6a1.5 1.5 0 00-1.5 1.5v10.5H6V5.25h9v-1.5z",
    fill: "currentColor"
  })), _path2$z || (_path2$z = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.2 10a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2.469c0 .298-.26.527-.559.531a4.497 4.497 0 00-4.124 2.84 4.496 4.496 0 00-.29 1.161c-.03.274-.252.499-.528.499a.5.5 0 01-.5-.5v-7zm3 1.5a1 1 0 11-2 0 1 1 0 012 0z",
    fill: "currentColor"
  })), _path3$8 || (_path3$8 = /*#__PURE__*/React.createElement("path", {
    d: "M11.855 17.001c-.035.274.192.499.468.499H15.7a.5.5 0 00.5-.5v-2.905c0-.25-.186-.467-.438-.47a3.88 3.88 0 00-3.664 2.445c-.12.3-.2.613-.242.931z",
    fill: "currentColor"
  })));
}

var _path$2u, _path2$y;

function _extends$2u() { _extends$2u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2u.apply(this, arguments); }

function SvgCopyKet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2u({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2u || (_path$2u = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 18.75H9V8.25h8.25v10.5zm0-12H9a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h8.25a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5zm-2.25-3H6a1.5 1.5 0 00-1.5 1.5v10.5H6V5.25h9v-1.5z",
    fill: "currentColor"
  })), _path2$y || (_path2$y = /*#__PURE__*/React.createElement("path", {
    d: "M11.3 16.318a.3.3 0 01-.3-.3V10.8a.3.3 0 01.3-.3h.63a.3.3 0 01.3.3v2.213a.052.052 0 00.092.033l1.989-2.436a.3.3 0 01.232-.11h.694a.3.3 0 01.23.491l-1.607 1.94a.3.3 0 00-.017.36l1.739 2.559a.3.3 0 01-.248.468h-.744a.3.3 0 01-.25-.134l-1.28-1.92a.3.3 0 00-.482-.024l-.28.342a.3.3 0 00-.068.19v1.246a.3.3 0 01-.3.3h-.63z",
    fill: "currentColor"
  })));
}

var _path$2t, _path2$x;

function _extends$2t() { _extends$2t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2t.apply(this, arguments); }

function SvgCopyMol(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2t({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2t || (_path$2t = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 18.75H9V8.25h8.25v10.5zm0-12H9a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h8.25a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5zm-2.25-3H6a1.5 1.5 0 00-1.5 1.5v10.5H6V5.25h9v-1.5z",
    fill: "currentColor"
  })), _path2$x || (_path2$x = /*#__PURE__*/React.createElement("path", {
    d: "M10 11a.5.5 0 01.5-.5h.682a.5.5 0 01.462.31l1.462 3.567a.05.05 0 00.094 0l1.463-3.567a.5.5 0 01.462-.31h.682a.5.5 0 01.5.5v4.818a.5.5 0 01-.5.5h-.193a.5.5 0 01-.5-.5V12.56a.029.029 0 00-.03-.029.029.029 0 00-.026.018l-1.373 3.427a.5.5 0 01-.464.314h-.135a.5.5 0 01-.464-.315l-1.373-3.44a.029.029 0 00-.056.01v3.273a.5.5 0 01-.5.5H10.5a.5.5 0 01-.5-.5V11z",
    fill: "currentColor"
  })));
}

var _path$2s;

function _extends$2s() { _extends$2s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2s.apply(this, arguments); }

function SvgCut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2s({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2s || (_path$2s = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 5.25l-4.5 4.5 1.5 1.5L19.5 6v-.75h-2.25zM12 12.375a.375.375 0 110-.75.375.375 0 010 .75zM7.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm2.73-.27c.172-.375.27-.788.27-1.23a3 3 0 10-3 3c.442 0 .855-.098 1.23-.27L10.5 12l-1.77 1.77a2.923 2.923 0 00-1.23-.27 3 3 0 103 3c0-.442-.098-.855-.27-1.23L12 13.5l5.25 5.25h2.25V18l-9.27-9.27z",
    fill: "currentcolor"
  })));
}

var _path$2r, _path2$w;

function _extends$2r() { _extends$2r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2r.apply(this, arguments); }

function SvgDearom(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2r({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2r || (_path$2r = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.53 3.626a.94.94 0 01.94 0l6.56 3.781c.291.168.47.477.47.812v7.562a.937.937 0 01-.47.812l-6.56 3.781a.94.94 0 01-.94 0l-6.56-3.781a.937.937 0 01-.47-.812V8.219c0-.335.179-.644.47-.812l6.56-3.781zM6.378 8.76v6.48L12 18.48l5.622-3.24V8.76L12 5.52 6.378 8.76z",
    fill: "currentcolor"
  })), _path2$w || (_path2$w = /*#__PURE__*/React.createElement("path", {
    d: "M15.565 9.812v4.363l.935.569V9.243l-.935.569zM11.998 6.5C10.5 7.412 9.001 8.325 7.5 9.241l.934.57 3.564-2.173V6.5zM7.5 14.751l4.498 2.749v-1.138L8.434 14.17l-.934.58z",
    fill: "currentcolor"
  })));
}

var _path$2q;

function _extends$2q() { _extends$2q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2q.apply(this, arguments); }

function SvgDelete(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2q({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2q || (_path$2q = /*#__PURE__*/React.createElement("path", {
    d: "M15.813 20.483h-7.63a1.8 1.8 0 01-1.8-1.8V7.357h11.23v11.326a1.8 1.8 0 01-1.8 1.8zm-7.43-2h7.23V9.357h-7.23v9.126zM19.305 4.613v2H4.695v-2h3.433l1.034-1.13h5.676l1.034 1.13h3.433z",
    fill: "currentColor"
  })));
}

var _path$2p;

function _extends$2p() { _extends$2p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2p.apply(this, arguments); }

function SvgDropdown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2p({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1000,
    height: 1000,
    viewBox: "0 0 1000 1000"
  }, props), _path$2p || (_path$2p = /*#__PURE__*/React.createElement("path", {
    d: "M876.337 751.055c0 70.936-57.736 128.672-128.672 128.672H201.297c-70.936 0-128.557-57.736-128.557-128.672L747.55 76.36c70.936 0 128.672 57.506 128.672 128.557v546.138z"
  })));
}

var _path$2o;

function _extends$2o() { _extends$2o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2o.apply(this, arguments); }

function SvgEnhancedStereo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2o({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2o || (_path$2o = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 4.5c0 1.138-.76 2.098-1.8 2.4v2.963a2.53 2.53 0 011.54 1.333l1.766-.758A1.501 1.501 0 1118.5 10.3a1.5 1.5 0 01-2.417 1.187l-2.084.894c-.003.301-.057.59-.152.858l1.476 1.273a3 3 0 11-.988 1.108l-1.367-1.18a2.433 2.433 0 01-2.656.184l-2.35 1.442a2.5 2.5 0 11-.683-1.322l1.993-1.223A2.649 2.649 0 019 12.347c0-1.14.711-2.107 1.7-2.452V6.87A2.501 2.501 0 1114 4.5zm-3.635 0a1.134 1.134 0 102.27 0 1.134 1.134 0 00-2.27 0zm1.135 8.955c-.592 0-1.071-.496-1.071-1.108 0-.612.48-1.108 1.07-1.108.592 0 1.072.496 1.072 1.108 0 .612-.48 1.108-1.071 1.108zM4.298 16.5a1.201 1.201 0 102.403 0 1.201 1.201 0 00-2.403 0zM17 18.513a1.513 1.513 0 110-3.026 1.513 1.513 0 010 3.026zM17 11a.7.7 0 110-1.398.7.7 0 010 1.398z",
    fill: "currentColor"
  })));
}

var _path$2n;

function _extends$2n() { _extends$2n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2n.apply(this, arguments); }

function SvgEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2n({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2n || (_path$2n = /*#__PURE__*/React.createElement("path", {
    d: "M11.796 7.265l-1.06-1.06L3.75 13.19v1.06h1.06l6.986-6.985zm1.06-1.06l1.061-1.061-1.06-1.06-1.061 1.06 1.06 1.06zM5.432 15.75H2.25v-3.182L12.326 2.492a.75.75 0 011.06 0l2.123 2.121a.75.75 0 010 1.06L5.431 15.75z",
    fill: "currentColor"
  })));
}

var _path$2m;

function _extends$2m() { _extends$2m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2m.apply(this, arguments); }

function SvgElementsGroup(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2m({
    width: 18,
    height: 15,
    viewBox: "0 0 18 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2m || (_path$2m = /*#__PURE__*/React.createElement("path", {
    d: "M16.2 2.579H8.705L7.026.899H.768A.768.768 0 000 1.669v11.207a1.8 1.8 0 001.8 1.8h14.4a1.8 1.8 0 001.8-1.8v-8.5a1.8 1.8 0 00-1.8-1.796zm-.2 10.1H2v-8.1h14v8.1z",
    fill: "currentcolor"
  })));
}

var _path$2l;

function _extends$2l() { _extends$2l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2l.apply(this, arguments); }

function SvgErase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2l({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2l || (_path$2l = /*#__PURE__*/React.createElement("path", {
    d: "M40.284 18.458L30.37 8.546a2 2 0 00-2.828 0L7.716 28.372a2 2 0 000 2.828l7.084 7.082a6.001 6.001 0 008.488 0l17-17a2 2 0 000-2.828l-.004.004zm-19.824 17a2 2 0 01-2.832 0l-5.67-5.672 7.824-7.824 7.084 7.086-6.406 6.41z",
    fill: "#231F20"
  })));
}

var _path$2k;

function _extends$2k() { _extends$2k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2k.apply(this, arguments); }

function SvgExtendedTable(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2k({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2k || (_path$2k = /*#__PURE__*/React.createElement("path", {
    d: "M7.445 15.5H4.146c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM13.652 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM19.855 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM5 13.5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h5.296a.5.5 0 01.5.5v.767a.5.5 0 01-.5.5H7.183a.5.5 0 00-.5.5v.845a.5.5 0 00.5.5h2.791a.5.5 0 01.5.5v.771a.5.5 0 01-.5.5H7.183a.5.5 0 00-.5.5v.85a.5.5 0 00.5.5h3.113a.5.5 0 01.5.5V13a.5.5 0 01-.5.5H5zM12.368 6.267a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5H19a.5.5 0 01.5.5v.767a.5.5 0 01-.5.5h-1.738a.5.5 0 00-.5.5V13a.5.5 0 01-.5.5H15.11a.5.5 0 01-.5-.5V6.767a.5.5 0 00-.5-.5h-1.742z",
    fill: "#333"
  })));
}

var _path$2j, _path2$v, _circle$1, _circle2$1, _circle3$1;

function _extends$2j() { _extends$2j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2j.apply(this, arguments); }

function SvgFileThumbnail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2j({
    width: 29,
    height: 37,
    viewBox: "0 0 29 37",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2j || (_path$2j = /*#__PURE__*/React.createElement("path", {
    d: "M19.872.583H3.747A3.594 3.594 0 00.164 4.167v28.666a3.594 3.594 0 003.583 3.584h21.5a3.594 3.594 0 003.584-3.584V9.543L19.872.583zM3.747 32.833V4.168h14.334v7.167h7.166v21.5h-21.5z",
    fill: "#005662"
  })), _path2$v || (_path2$v = /*#__PURE__*/React.createElement("path", {
    d: "M12.21 10.723l-3.66 9.15 10.065 6.404",
    stroke: "#005662",
    strokeWidth: 1.483
  })), _circle$1 || (_circle$1 = /*#__PURE__*/React.createElement("circle", {
    cx: 12.213,
    cy: 10.723,
    r: 1.83,
    fill: "#005662"
  })), _circle2$1 || (_circle2$1 = /*#__PURE__*/React.createElement("circle", {
    cx: 8.552,
    cy: 19.872,
    fill: "#005662",
    r: 1.83
  })), _circle3$1 || (_circle3$1 = /*#__PURE__*/React.createElement("circle", {
    cx: 18.619,
    cy: 26.277,
    r: 1.83,
    fill: "#005662"
  })));
}

var _path$2i;

function _extends$2i() { _extends$2i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2i.apply(this, arguments); }

function SvgGenericGroups(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2i({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 750",
    height: 1000,
    width: 1000
  }, props), _path$2i || (_path$2i = /*#__PURE__*/React.createElement("path", {
    d: "M73.129 209.914v403.543h403.226v73.371H62.133c-34.418 0-62.317-27.922-62.317-62.367V209.914zM304.07 343.45l103.004-103.086-48.754-49.89c-10.734-10.73-28.12-10.73-38.855 0l-63.05 64.199c-10.72 10.742-10.72 28.144 0 38.887zm132.696-73.37L334.859 373.53l311.95 313.297 103.375-103.086zm186.218 123.265V136.543c0-53.195-19.43-73.371-73.316-73.371H183.102c-56.454 0-73.317 16.875-73.317 73.371v366.855c0 54.297 16.863 73.372 73.317 73.372h293.253l-73.312-73.372H183.102V136.543h366.566v183.43zm0 0"
  })));
}

var _path$2h;

function _extends$2h() { _extends$2h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2h.apply(this, arguments); }

function SvgHand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2h({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2h || (_path$2h = /*#__PURE__*/React.createElement("path", {
    d: "M20.434 7.673c-.1-.6-.713-1.731-2.32-1.731-.126 0-.252.007-.377.023v-.79a1.01 1.01 0 00-.045-.3c-.177-.564-.876-1.631-2.262-1.631a2.599 2.599 0 00-.676.086 2.394 2.394 0 00-.146-.23c-.453-.645-1.186-1-2.063-1-.877 0-1.584.36-2.025 1.017a2.461 2.461 0 00-.361.85 2.663 2.663 0 00-.408-.03c-1.474 0-2.124 1.15-2.262 1.757a1.034 1.034 0 00-.024.222V11.1l-.13-.1c-.588-.5-2.034-1.121-3.391.029-1.357 1.15-1.015 2.664-.431 3.452.453.773 4.512 7.425 10.223 7.425 3.25 0 4.91-1.512 5.729-2.781a6.291 6.291 0 00.98-2.8V7.838c.001-.056-.003-.11-.011-.165zm-1.986 8.542a4.474 4.474 0 01-.7 1.887c-.805 1.2-2.153 1.8-4.008 1.8-4.768 0-8.484-6.412-8.52-6.476a.669.669 0 00-.09-.126c-.294-.408 0-.655.107-.748.267-.227.54-.237.81-.031l1.77 1.452a1 1 0 001.644-.763V6.08a.287.287 0 01.29-.148.44.44 0 01.372.16v4.7a1 1 0 102 0v-6.45c.068-.248.3-.248.422-.248.2 0 .414.032.482.255v6.44a1 1 0 102 0v-5.2a.75.75 0 01.074-.19c.049-.081.108-.15.325-.15a.35.35 0 01.307.15v5.39a1 1 0 102 0V8.047a.583.583 0 01.377-.1c.065 0 .258.006.334.078l.004 8.19z",
    fill: "currentcolor"
  })));
}

var _path$2g, _path2$u;

function _extends$2g() { _extends$2g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2g.apply(this, arguments); }

function SvgCompressedHand(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2g({
    width: 24,
    height: 24,
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2g || (_path$2g = /*#__PURE__*/React.createElement("path", {
    d: "M10.744 3C8.89 3 7.384 4.525 7.384 6.4v.22h-.012c-1.997 0-3.622 1.602-3.622 3.568l.001 7.02c0 1.77 1.512 3.515 3.112 5.361.72.83 1.919 2.216 2.034 2.731v1.522h13.442v-1.554c0-.59.618-1.77 1.163-2.81.938-1.789 1.998-3.815 1.998-5.991 0-3.258-.01-6.248-.01-6.248 0-1.696-1.39-3.08-3.1-3.08-.203 0-.4.02-.592.057a3.65 3.65 0 00-3.033-1.607c-.367 0-.72.053-1.055.153a3.636 3.636 0 00-3.09-1.705c-.444 0-.87.08-1.264.225A3.345 3.345 0 0010.744 3z",
    fill: "#fff"
  })), _path2$u || (_path2$u = /*#__PURE__*/React.createElement("path", {
    d: "M10.744 4.554c1 0 1.808.826 1.808 1.845v1.197c0-1.109.927-2.008 2.068-2.008 1.143 0 2.068.9 2.068 2.008v1.552c0-1.11.93-2.008 2.077-2.008 1.147 0 2.076.899 2.076 2.008v1.068A1.54 1.54 0 0122.39 8.69c.856 0 1.548.684 1.548 1.53 0 0 .01 2.988.01 6.244 0 3.257-3.161 6.636-3.161 8.802H10.45c0-1.94-5.146-5.773-5.146-8.061v-7.02c0-1.112.926-2.014 2.07-2.015v4.051c0 .342.35.62.781.62.432 0 .782-.278.782-.62V6.4c0-1.02.809-1.845 1.807-1.845zm0-1.554C8.89 3 7.384 4.525 7.384 6.4v.22h-.012c-1.997 0-3.622 1.602-3.622 3.568l.001 7.02c0 1.77 1.512 3.515 3.112 5.361.72.83 1.919 2.216 2.034 2.731v1.522h13.442v-1.554c0-.59.618-1.77 1.163-2.81.938-1.789 1.998-3.815 1.998-5.991 0-3.258-.01-6.248-.01-6.248 0-1.696-1.39-3.08-3.1-3.08-.203 0-.4.02-.592.057a3.65 3.65 0 00-3.033-1.607c-.367 0-.72.053-1.055.153a3.636 3.636 0 00-3.09-1.705c-.444 0-.87.08-1.264.225A3.345 3.345 0 0010.744 3z",
    fill: "#000"
  })));
}

var _path$2f;

function _extends$2f() { _extends$2f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2f.apply(this, arguments); }

function SvgHelp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2f({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2f || (_path$2f = /*#__PURE__*/React.createElement("path", {
    d: "M11.25 16.5h1.5V15h-1.5v1.5zm.75-12a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 18c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6zm0-10.5a3 3 0 00-3 3h1.5a1.5 1.5 0 113 0c0 1.5-2.25 1.313-2.25 3.75h1.5c0-1.688 2.25-1.875 2.25-3.75a3 3 0 00-3-3z",
    fill: "currentcolor"
  })));
}

var _path$2e, _path2$t, _path3$7;

function _extends$2e() { _extends$2e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2e.apply(this, arguments); }

function SvgHistory(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2e({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2e || (_path$2e = /*#__PURE__*/React.createElement("path", {
    d: "M17.814 16.537a3.452 3.452 0 00.416-1.649 3.492 3.492 0 00-5.13-3.078 3.48 3.48 0 00-1.422 1.406 3.457 3.457 0 00-.428 1.672 3.492 3.492 0 003.488 3.488c.58.001 1.15-.144 1.66-.422l2.328 2.337 1.417-1.412-2.329-2.342zm-1.586-1.592a1.487 1.487 0 01-1.4 1.427h-.085a1.49 1.49 0 01-1.488-1.488v-.09a1.49 1.49 0 011.432-1.4h.053a1.49 1.49 0 011.488 1.551z",
    fill: "currentcolor"
  })), _path2$t || (_path2$t = /*#__PURE__*/React.createElement("path", {
    d: "M11.047 20H5.8A1.8 1.8 0 014 18.2V5.8A1.8 1.8 0 015.8 4h12.4A1.8 1.8 0 0120 5.8v5.6h-2V6H6v12h5.047v2z",
    fill: "currentcolor"
  })), _path3$7 || (_path3$7 = /*#__PURE__*/React.createElement("path", {
    d: "M16.798 8.01H7.207v2h9.591v-2zM10.654 11.772H7.207v2h3.447v-2z",
    fill: "currentcolor"
  })));
}

var _path$2d, _path2$s, _path3$6, _path4$2, _path5;

function _extends$2d() { _extends$2d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2d.apply(this, arguments); }

function SvgImageFrame(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2d({
    width: 47,
    height: 38,
    viewBox: "0 0 47 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2d || (_path$2d = /*#__PURE__*/React.createElement("path", {
    d: "M0 33.778A4.228 4.228 0 004.222 38h38c2.333 0 4.222-1.9 4.222-4.222V4.222A4.228 4.228 0 0042.222 0h-38A4.228 4.228 0 000 4.222v29.555z",
    fill: "#EFF2F5"
  })), _path2$s || (_path2$s = /*#__PURE__*/React.createElement("path", {
    d: "M42.227 4.222h-38v29.556h38V4.222z",
    fill: "#AFDADF"
  })), _path3$6 || (_path3$6 = /*#__PURE__*/React.createElement("path", {
    d: "M32.986 11.875L11.148 33.778h31.074V21.11l-9.236-9.236z",
    fill: "#3498A4"
  })), _path4$2 || (_path4$2 = /*#__PURE__*/React.createElement("path", {
    d: "M21.114 14.778a7.389 7.389 0 11-14.778 0 7.389 7.389 0 0114.778 0z",
    fill: "#39BBCA"
  })), _path5 || (_path5 = /*#__PURE__*/React.createElement("path", {
    d: "M14.98 17.087L4.227 27.841v5.937H31.67l-16.69-16.69z",
    fill: "#167782"
  })));
}

var _path$2c, _path2$r;

function _extends$2c() { _extends$2c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2c.apply(this, arguments); }

function SvgLayout(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2c({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2c || (_path$2c = /*#__PURE__*/React.createElement("path", {
    d: "M20.055 15.057a2.153 2.153 0 11-4.307 0c0-.115.009-.229.028-.341L14.02 13.7l-.884-.511-.883.51-1.491.86a2.151 2.151 0 11-1.091-1.406l1.7-.98.884-.51V8.739a2.154 2.154 0 111.767 0v2.925l.883.509 1.847 1.067a2.152 2.152 0 013.3 1.818h.003z",
    fill: "currentcolor"
  })), _path2$r || (_path2$r = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 3a1 1 0 011 1v15h15a1 1 0 110 2H4a1 1 0 01-1-1V4a1 1 0 011-1z",
    fill: "currentcolor"
  })));
}

var _path$2b;

function _extends$2b() { _extends$2b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2b.apply(this, arguments); }

function SvgLogo$1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2b({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1000,
    height: 1000
  }, props), _path$2b || (_path$2b = /*#__PURE__*/React.createElement("path", {
    d: "M26.773 102.744h181.755c-.074 123.9-8.793 247.613-8.866 371.514 89.984-124.193 181.422-247.321 271.406-371.514H692.64C590.987 240.298 444.471 342.58 363.684 495.732c77.74 155.676 224.317 259.543 320.493 402.076h-215.4c-70.105-101.553-117.732-223.956-219.713-299.423-39.122-14.846-40.087 60.14-46.238 87.253-5.736 70.546-2.166 141.45-3.164 212.17H25c.007-265.023 1.766-530.041 1.773-795.064zm424.242 392.988c102.855-141.27 241.813-251.718 344.669-392.988 59.768-.743 119.55-1.267 179.316 0C872.393 239.74 719.748 333.773 632.325 482.93c-7.765 45.896 45.968 88.282 71.47 126.581 86.444 99.165 194.622 178.714 269.432 288.074-63.035-.013-126.069.437-189.104.437-100.95-142.27-232.05-260.11-333.108-402.29z"
  })));
}

var _path$2a;

function _extends$2a() { _extends$2a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2a.apply(this, arguments); }

function SvgMiew(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2a({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2a || (_path$2a = /*#__PURE__*/React.createElement("path", {
    d: "M19.702 7.246l-.464-.268-.268-.155-6.234-3.6-.464-.268a.535.535 0 00-.536 0l-.464.268-6.234 3.6-.268.155-.468.268a.537.537 0 00-.267.464v8.58a.537.537 0 00.267.464l.465.268 6.234 3.6.268.155.464.268a.535.535 0 00.536 0l.464-.268.268-.155 6.234-3.6.465-.268a.538.538 0 00.267-.464V7.71a.538.538 0 00-.265-.464zm-8.7 11.066l-4.966-2.867V9.71l4.966 2.867v5.735zm1-7.467L7.036 7.978l4.966-2.867 4.966 2.867-4.966 2.867zm1 1.732l4.966-2.867v5.735l-4.966 2.867v-5.735z",
    fill: "currentcolor"
  })));
}

var _path$29, _path2$q;

function _extends$29() { _extends$29 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$29.apply(this, arguments); }

function SvgClear(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$29({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$29 || (_path$29 = /*#__PURE__*/React.createElement("path", {
    d: "M18.655 7.529L15.02 3.893a1 1 0 00-.707-.293H6.398a1 1 0 00-1 1v14.548a1 1 0 001 1h11.55a.999.999 0 001-1V8.236a1 1 0 00-.293-.707zm-1.707 10.615h-9.55V5.596h5.952v3.6h3.6l-.002 8.948z",
    fill: "currentcolor"
  })), _path2$q || (_path2$q = /*#__PURE__*/React.createElement("path", {
    d: "M10.922 14.55h-2v2h2v-2zM10.922 7.92h-2v5.502h2V7.92z",
    fill: "currentcolor"
  })));
}

var _path$28, _path2$p;

function _extends$28() { _extends$28 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$28.apply(this, arguments); }

function SvgNotFound(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$28({
    width: 85,
    height: 85,
    viewBox: "0 0 85 85",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$28 || (_path$28 = /*#__PURE__*/React.createElement("path", {
    d: "M33.494 0a33 33 0 0125.362 54.12l24.762 24.757a3 3 0 01-3.828 4.59l-.42-.342-24.756-24.762A33 33 0 1133.494 0zm0 6a27 27 0 100 54 27 27 0 000-54z",
    fill: "#525252",
    fillOpacity: 0.4
  })), _path2$p || (_path2$p = /*#__PURE__*/React.createElement("path", {
    stroke: "#005662",
    strokeWidth: 6,
    strokeLinecap: "round",
    d: "M22.243 22.558L44.355 44.67M45.191 22.243L23.079 44.355"
  })));
}

var _path$27;

function _extends$27() { _extends$27 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$27.apply(this, arguments); }

function SvgOpen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$27({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$27 || (_path$27 = /*#__PURE__*/React.createElement("path", {
    d: "M7.575 10.5L6 16.5V9h12.75a1.5 1.5 0 00-1.5-1.5H12L10.5 6H6a1.5 1.5 0 00-1.5 1.5v9A1.5 1.5 0 006 18h11.25c.675 0 1.275-.45 1.425-1.125L20.4 10.5H7.575zm9.675 6H7.5L8.7 12h9.75l-1.2 4.5z",
    fill: "currentcolor"
  })));
}

var _path$26;

function _extends$26() { _extends$26 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$26.apply(this, arguments); }

function SvgPaste(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$26({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$26 || (_path$26 = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 18H6.75V6h1.5v2.25h7.5V6h1.5v12zM12 4.5A.75.75 0 1112 6a.75.75 0 010-1.5zm5.25 0h-3.135A2.258 2.258 0 0012 3c-.975 0-1.8.63-2.115 1.5H6.75A1.5 1.5 0 005.25 6v12a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5z",
    fill: "currentcolor"
  })));
}

var _path$25, _path2$o, _path3$5;

function _extends$25() { _extends$25 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$25.apply(this, arguments); }

function SvgOpenWindowPasteIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$25({
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$25 || (_path$25 = /*#__PURE__*/React.createElement("path", {
    d: "M33.973 40H6.027A6.027 6.027 0 010 33.973V6.027A6.027 6.027 0 016.027 0h27.946A6.027 6.027 0 0140 6.027v27.946A6.027 6.027 0 0133.973 40z",
    fill: "#EFF2F5"
  })), _path2$o || (_path2$o = /*#__PURE__*/React.createElement("path", {
    d: "M28.556 30.636H11.444V11.727h2.445v3.546H26.11v-3.546h2.445v18.91zM20 9.364c.324 0 .635.124.864.346.23.221.358.522.358.835 0 .314-.129.614-.358.836-.229.222-.54.346-.864.346-.324 0-.635-.124-.864-.346a1.162 1.162 0 01-.358-.835c0-.314.129-.615.358-.836.229-.222.54-.346.864-.346zm8.556 0h-5.11A3.673 3.673 0 0020 7a3.673 3.673 0 00-3.447 2.364h-5.109c-.648 0-1.27.249-1.728.692A2.325 2.325 0 009 11.727v18.91c0 .626.258 1.227.716 1.67.458.444 1.08.693 1.728.693h17.112c.648 0 1.27-.249 1.728-.692A2.325 2.325 0 0031 30.636V11.727c0-.627-.258-1.228-.716-1.671a2.487 2.487 0 00-1.728-.692z",
    fill: "#167782"
  })), _path3$5 || (_path3$5 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 20h10c.55 0 1-.45 1-1s-.45-1-1-1H15c-.55 0-1 .45-1 1s.45 1 1 1zm10 4H15c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H15c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z",
    fill: "#167782"
  })));
}

var _path$24, _path2$n;

function _extends$24() { _extends$24 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$24.apply(this, arguments); }

function SvgOpenWindowUploadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$24({
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$24 || (_path$24 = /*#__PURE__*/React.createElement("path", {
    d: "M33.973 40H6.027A6.027 6.027 0 010 33.973V6.027A6.027 6.027 0 016.027 0h27.946A6.027 6.027 0 0140 6.027v27.946A6.027 6.027 0 0133.973 40z",
    fill: "#EFF2F5"
  })), _path2$n || (_path2$n = /*#__PURE__*/React.createElement("path", {
    d: "M12.835 18.125l-2.477 9.5V15.75h20.048c0-.63-.249-1.234-.691-1.68a2.35 2.35 0 00-1.668-.695h-8.255L17.434 11h-7.076a2.35 2.35 0 00-1.667.696A2.383 2.383 0 008 13.375v14.25c0 .63.248 1.234.69 1.68a2.35 2.35 0 001.668.695h17.69a2.276 2.276 0 002.24-1.781L33 18.125H12.835zm15.212 9.5h-15.33l1.887-7.125h15.33l-1.887 7.125z",
    fill: "#167782"
  })));
}

var _path$23;

function _extends$23() { _extends$23 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$23.apply(this, arguments); }

function SvgPeriodTable(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$23({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$23 || (_path$23 = /*#__PURE__*/React.createElement("path", {
    d: "M7.445 15.5H4.146c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM13.652 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM19.855 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM5 13.5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h3.125c.657 0 1.224.132 1.7.396.48.26.85.625 1.11 1.094.26.466.39 1.008.39 1.626 0 .62-.133 1.164-.398 1.63A2.7 2.7 0 019.8 10.323c-.489.255-1.068.382-1.74.382H6.324a.5.5 0 01-.5-.5v-.714a.5.5 0 01.5-.5h1.342c.32 0 .587-.057.801-.171a1.16 1.16 0 00.493-.48c.112-.207.167-.449.167-.724 0-.279-.055-.519-.167-.721a1.134 1.134 0 00-.493-.475c-.217-.11-.484-.167-.8-.167H7.12a.5.5 0 00-.5.5V13a.5.5 0 01-.5.5H5zM12.584 6.267a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5H19a.5.5 0 01.5.5v.767a.5.5 0 01-.5.5h-1.66a.5.5 0 00-.5.5V13a.5.5 0 01-.5.5h-1.091a.5.5 0 01-.5-.5V6.767a.5.5 0 00-.5-.5h-1.665z",
    fill: "#333"
  })));
}

var _path$22;

function _extends$22() { _extends$22 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$22.apply(this, arguments); }

function SvgReactionArrowBothEndsFilledTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$22({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$22 || (_path$22 = /*#__PURE__*/React.createElement("path", {
    d: "M29.876 32.824v-6.81H18.124v6.81L9.3 24l8.824-8.822v6.838h11.752v-6.838L38.7 24l-8.824 8.824z",
    fill: "#231F20"
  })));
}

var _path$21, _path2$m;

function _extends$21() { _extends$21 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$21.apply(this, arguments); }

function SvgReactionArrowDashedOpenAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$21({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$21 || (_path$21 = /*#__PURE__*/React.createElement("path", {
    d: "M15.32 22h-4.6v4h4.6v-4zM22.045 22h-4.6v4h4.6v-4zM28.77 22h-4.6v4h4.6v-4z",
    fill: "#231F20"
  })), _path2$m || (_path2$m = /*#__PURE__*/React.createElement("path", {
    d: "M27.006 12.43L38.576 24l-11.57 11.57-2.83-2.828L32.92 24l-8.744-8.742 2.83-2.828z",
    fill: "#231F20"
  })));
}

var _path$20;

function _extends$20() { _extends$20 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$20.apply(this, arguments); }

function SvgReactionArrowEllipticalArcArrowFilledBow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$20({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$20 || (_path$20 = /*#__PURE__*/React.createElement("path", {
    d: "M39.6 26.298l-5.735 8.8-3.336-1.4c-.098-4.894-1.702-18.814-7.568-18.814h-.066c-1.948.034-4.67 1.614-6.572 8.95a52.695 52.695 0 00-1.464 9.894l-4-.142c.178-3.63.71-7.232 1.588-10.758C13.855 17.452 16.8 11 22.833 10.898c6.116-.11 8.966 6.388 10.286 11.856.4 1.656.688 3.306.894 4.8l2.24-3.44 3.346 2.184z",
    fill: "#231F20"
  })));
}

var _path$1$;

function _extends$1$() { _extends$1$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1$.apply(this, arguments); }

function SvgReactionArrowEllipticalArcArrowFilledTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1$({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1$ || (_path$1$ = /*#__PURE__*/React.createElement("path", {
    d: "M35.867 26.424l-3.332 7.248-4.612-6.51 1.958-.182c-.716-4.42-2.582-12.084-6.914-12.084h-.066c-1.948.034-4.67 1.614-6.572 8.95a52.71 52.71 0 00-1.464 9.894l-4-.142c.178-3.629.71-7.232 1.588-10.758C13.855 17.452 16.8 11 22.833 10.898h.144c3.934 0 8.906 2.8 10.896 15.714l1.994-.188z",
    fill: "#231F20"
  })));
}

var _path$1_;

function _extends$1_() { _extends$1_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1_.apply(this, arguments); }

function SvgReactionArrowEllipticalArcArrowOpenAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1_({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1_ || (_path$1_ = /*#__PURE__*/React.createElement("path", {
    d: "M37.54 25.236l-4.329 12-7.136-10.356 1.646-1.134 2.484 3.6C29.491 23.314 27.503 15 22.967 15h-.066c-6 .104-7.858 14-8.036 18.846l-4-.144c.178-3.629.71-7.231 1.588-10.756 1.4-5.4 4.334-11.84 10.376-11.946 6.116-.106 8.966 6.388 10.286 11.856a50.963 50.963 0 011.032 5.88l1.506-4.172 1.886.672z",
    fill: "#231F20"
  })));
}

var _path$1Z;

function _extends$1Z() { _extends$1Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Z.apply(this, arguments); }

function SvgReactionArrowEllipticalArcArrowOpenHalfAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1Z({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1Z || (_path$1Z = /*#__PURE__*/React.createElement("path", {
    d: "M39.764 27.682l-5.252 5.252-.4.4-.312.312-1.128 1.128-1.472-1.076-.156-.114-.512-.372-6.014-4.366 1.174-1.618 4.666 3.386c-.564-6.054-2.492-15.718-7.38-15.718h-.066c-1.948.034-4.67 1.614-6.572 8.95a52.695 52.695 0 00-1.464 9.894l-4-.142c.178-3.63.71-7.232 1.588-10.758C13.856 17.452 16.8 11 22.834 10.898c6.116-.11 8.966 6.388 10.286 11.856.578 2.48.979 4.999 1.2 7.536l4.022-4.022 1.422 1.414z",
    fill: "#231F20"
  })));
}

var _path$1Y;

function _extends$1Y() { _extends$1Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Y.apply(this, arguments); }

function SvgReactionArrowEquilibriumFilledHalfBow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1Y({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1Y || (_path$1Y = /*#__PURE__*/React.createElement("path", {
    d: "M36.915 21.6H11.083v-4l17.882.086a8.487 8.487 0 00-.866-3.774l-1.3-2.66L36.915 21.6zM11.083 26.4h25.832v4l-17.882-.086c-.006 1.308.29 2.6.866 3.774l1.3 2.66L11.083 26.4z",
    fill: "#231F20"
  })));
}

var _path$1X;

function _extends$1X() { _extends$1X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1X.apply(this, arguments); }

function SvgReactionArrowEquilibriumFilledTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1X({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1X || (_path$1X = /*#__PURE__*/React.createElement("path", {
    d: "M11.667 17.028v4h15.788v3.146l9.762-5.146-9.762-5.148v3.148H11.667zM36.334 27.012v4H20.546v3.146l-9.762-5.146 9.762-5.148v3.148h15.788z",
    fill: "#231F20"
  })));
}

var _path$1W;

function _extends$1W() { _extends$1W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1W.apply(this, arguments); }

function SvgReactionArrowEquilibriumOpenAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1W({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1W || (_path$1W = /*#__PURE__*/React.createElement("path", {
    d: "M36.478 21.6H11.522v-4h17.279l-5.042-3.39 2.23-3.32 10.49 7.05v3.66zM22.012 37.11l-10.49-7.05V26.4h24.956v4H19.201l5.041 3.39-2.23 3.32z",
    fill: "#231F20"
  })));
}

var _path$1V;

function _extends$1V() { _extends$1V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1V.apply(this, arguments); }

function SvgReactionArrowFailed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1V({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1V || (_path$1V = /*#__PURE__*/React.createElement("path", {
    d: "M27.471 28.774c.37-.895.653-1.824.844-2.774H24.43l2.022 2.022-1.414 1.414L21.6 26h-1.172L17 29.436l-1.414-1.414L17.6 26h-5.07v-4h5.07l-2.02-2.022L17 18.564 20.43 22h1.17l3.436-3.436 1.414 1.414L24.43 22h3.97a18.504 18.504 0 00-1.102-3.982l-3.01-7 12.98 12.98-12.98 12.98 3.184-8.204z",
    fill: "#231F20"
  })));
}

var _path$1U;

function _extends$1U() { _extends$1U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1U.apply(this, arguments); }

function SvgReactionArrowFilledBow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1U({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1U || (_path$1U = /*#__PURE__*/React.createElement("path", {
    d: "M25.14 28.774c.37-.895.653-1.824.844-2.774H10.2v-4h15.876a18.504 18.504 0 00-1.102-3.982l-3-7 12.98 12.98-12.98 12.98 3.166-8.204z",
    fill: "#231F20"
  })));
}

var _path$1T;

function _extends$1T() { _extends$1T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1T.apply(this, arguments); }

function SvgReactionArrowFilledTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1T({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1T || (_path$1T = /*#__PURE__*/React.createElement("path", {
    d: "M34.941 23.986l-1.244 1.244-.784.784L21.947 36.98V26.014h-11.75v-4h11.75V11.048l.028-.028L32.97 22.014l.728.728 1.244 1.244z",
    fill: "#231F20"
  })));
}

var _path$1S;

function _extends$1S() { _extends$1S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1S.apply(this, arguments); }

function SvgReactionArrowOpenAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1S({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1S || (_path$1S = /*#__PURE__*/React.createElement("path", {
    d: "M35.967 24l-.67.67-1.33 1.33-10.94 10.94-2.828-2.828 2.828-2.828 3.212-3.214L28.31 26H10.197v-4H28.31l-4.162-4.162-1.12-1.12L20.2 13.89l2.828-2.83L35.967 24z",
    fill: "#231F20"
  })));
}

var _path$1R;

function _extends$1R() { _extends$1R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1R.apply(this, arguments); }

function SvgReactionArrowUnbalancedEquilibriumFilledHalfBow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1R({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1R || (_path$1R = /*#__PURE__*/React.createElement("path", {
    d: "M36.289 21.6H12.513v-4l15.826.086a8.487 8.487 0 00-.866-3.774l-1.3-2.66L36.289 21.6zM31.368 30.4L23 30.236c.066.944.325 1.864.76 2.704l1.17 2.26-9.1-8.8h15.536l.002 4z",
    fill: "#231F20"
  })));
}

var _path$1Q;

function _extends$1Q() { _extends$1Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1Q.apply(this, arguments); }

function SvgReactionArrowUnbalancedEquilibriumFilledHalfTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1Q({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1Q || (_path$1Q = /*#__PURE__*/React.createElement("path", {
    d: "M32.928 26.4v4H22.644v4.024l-8.06-8.024h18.344zM36.313 21.6H11.688v-4h15.176v-5.41l9.448 9.41z",
    fill: "#231F20"
  })));
}

var _path$1P;

function _extends$1P() { _extends$1P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1P.apply(this, arguments); }

function SvgReactionArrowUnbalancedEquilibriumLargeFilledHalfBow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1P({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1P || (_path$1P = /*#__PURE__*/React.createElement("path", {
    d: "M39.234 21.6H9.2v-4l22.084.086a8.487 8.487 0 00-.866-3.774l-1.3-2.66L39.234 21.6zM33.022 30.4l-12.074-.164a6.94 6.94 0 00.762 2.704l1.168 2.26-9.1-8.8h19.244v4z",
    fill: "#231F20"
  })));
}

var _path$1O;

function _extends$1O() { _extends$1O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1O.apply(this, arguments); }

function SvgReactionArrowUnbalancedEquilibriumOpenHalfAngle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1O({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1O || (_path$1O = /*#__PURE__*/React.createElement("path", {
    d: "M36.478 21.6H11.522v-4h17.279l-5.042-3.39 2.23-3.32 10.49 7.05v3.66zM22.012 37.11l-10.49-7.05V26.4h24.956v4H19.201l5.041 3.39-2.23 3.32z",
    fill: "#231F20"
  })));
}

var _path$1N;

function _extends$1N() { _extends$1N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1N.apply(this, arguments); }

function SvgReactionAutomap(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1N({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1N || (_path$1N = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27.405 23.2v-2.86l4.858 4.86-4.858 4.86V27.2h-9.543v-4h9.543zM11.233 18.122H7.62v-4h7.614v20.156h-4V18.122zM35.874 18.122h-3.612v-4h7.612v20.156h-4V18.122z",
    fill: "#231F20"
  })));
}

var _path$1M, _path2$l;

function _extends$1M() { _extends$1M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1M.apply(this, arguments); }

function SvgReactionMap(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1M({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1M || (_path$1M = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.236 16.21h-5.154v-4h9.154v25.14h-4V16.21z",
    fill: "#231F20"
  })), _path2$l || (_path2$l = /*#__PURE__*/React.createElement("path", {
    d: "M18.312 27.086h-7.034v4h7.034v-4zM37.076 27.086h-7.034v4h7.034v-4z",
    fill: "#231F20"
  })));
}

var _path$1L;

function _extends$1L() { _extends$1L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1L.apply(this, arguments); }

function SvgReactionPlus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1L({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1L || (_path$1L = /*#__PURE__*/React.createElement("path", {
    d: "M22 12h4v10h10v4H26v10h-4V26H12v-4h10V12z",
    fill: "#231F20"
  })));
}

var _path$1K, _path2$k;

function _extends$1K() { _extends$1K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1K.apply(this, arguments); }

function SvgReactionUnmap(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1K({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1K || (_path$1K = /*#__PURE__*/React.createElement("path", {
    d: "M26.236 12.21v10.084l-4-3.998V16.21H20.15l-3.068-3.068v-.932h9.154zM18.312 27.086h-7.034v4h7.034v-4zM37.311 27.086v4h-2.284l-4-4h6.284z",
    fill: "#231F20"
  })), _path2$k || (_path2$k = /*#__PURE__*/React.createElement("path", {
    d: "M35.402 33.686l-2.828 2.828-6.338-6.338v7.174h-4V26.178L12.212 16.154l1.112-1.114 1.716-1.716 20.362 20.362z",
    fill: "#231F20"
  })));
}

var _path$1J;

function _extends$1J() { _extends$1J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1J.apply(this, arguments); }

function SvgRecognize(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1J({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1J || (_path$1J = /*#__PURE__*/React.createElement("path", {
    d: "M34.742 18.918L12.364 41.294H6.708v-5.656L29.084 13.26l5.658 5.658zM36.767 7.842l3.394 3.394a1.6 1.6 0 010 2.262l-3.648 3.65-5.657-5.658 3.648-3.648a1.6 1.6 0 012.263 0zM22.828 8.702l2.702 1.476-2.702 1.478-1.476 2.702-1.478-2.702-2.702-1.478 2.702-1.476L21.352 6l1.476 2.702zM11.318 17.126l1.13-3.866 1.132 3.866 3.864 1.13-3.864 1.13-1.132 3.866-1.13-3.866-3.864-1.13 3.864-1.13z",
    fill: "#231F20"
  })));
}

var _path$1I;

function _extends$1I() { _extends$1I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1I.apply(this, arguments); }

function SvgRedo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1I({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1I || (_path$1I = /*#__PURE__*/React.createElement("path", {
    d: "M16.801 10.95C15.414 9.75 13.614 9 11.626 9c-3.487 0-6.435 2.273-7.47 5.415l1.77.585a6.002 6.002 0 015.7-4.125 5.98 5.98 0 013.84 1.41L12.751 15h6.75V8.25l-2.7 2.7z",
    fill: "currentcolor"
  })));
}

var _path$1H, _path2$j, _path3$4;

function _extends$1H() { _extends$1H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1H.apply(this, arguments); }

function SvgRgroupAttpoints(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1H({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1H || (_path$1H = /*#__PURE__*/React.createElement("path", {
    d: "M24.963 13.335h-1.6v-4.26h-.764V7.473h2.364v5.862zM21.467 10.979a1.793 1.793 0 00.914-1.556c0-.934-.694-1.95-2.217-1.95h-2.43v5.867h1.6v-2.007h.542l.944 2h1.77l-1.123-2.354zm-2.134-1.246v-.666h.84c.144 0 .618.025.618.349 0 .203-.374.303-.639.31-.179.007-.51.007-.819.007z",
    fill: "#231F20"
  })), _path2$j || (_path2$j = /*#__PURE__*/React.createElement("path", {
    d: "M18.259 17.119h-1.694a1.619 1.619 0 01-1.616-1.616V5.959a1.617 1.617 0 011.616-1.615h1.694v2h-1.31v8.775h1.31v2zM26.196 17.119h-1.693v-2h1.31V6.344h-1.31v-2h1.693a1.617 1.617 0 011.616 1.615v9.544a1.619 1.619 0 01-1.616 1.616zM13.88 16.756L7.855 22.78l1.415 1.415 6.024-6.025-1.414-1.414z",
    fill: "#231F20"
  })), _path3$4 || (_path3$4 = /*#__PURE__*/React.createElement("path", {
    d: "M11.48 25.085l-6.165 1.652 1.651-6.165 4.513 4.513z",
    fill: "#231F20"
  })));
}

var _path$1G, _path2$i;

function _extends$1G() { _extends$1G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1G.apply(this, arguments); }

function SvgRgroupFragment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1G({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1G || (_path$1G = /*#__PURE__*/React.createElement("path", {
    d: "M24.267 19.801h-2v-6.389h-1.284v-2h3.284v8.39zM19.115 16.292c.852-.457 1.386-1.253 1.386-2.203a2.466 2.466 0 00-1.29-2.232 3.435 3.435 0 00-1.044-.373 3.977 3.977 0 00-.736-.072h-3.393v8.39h2v-3.085h1.067l1.458 3.086h2.211l-1.659-3.511zm-3.077-1.576v-1.304h1.393c.278-.002.552.062.8.187a.48.48 0 01.274.49c0 .435-.656.61-1.096.622-.287.008-.86.008-1.37.005zM5.17 19.515l-1.885-1.886 1.947-1.948-1.947-1.948 1.885-1.885 3.834 3.833-3.834 3.834z",
    fill: "#231F20"
  })), _path2$i || (_path2$i = /*#__PURE__*/React.createElement("path", {
    d: "M14.645 25.2h-2.472a2.236 2.236 0 01-2.232-2.233V9.033A2.235 2.235 0 0112.173 6.8h2.472v2.667h-2.037v13.066h2.037V25.2zM26.235 25.2h-2.472v-2.667H25.8V9.467h-2.037V6.8h2.472a2.234 2.234 0 012.232 2.233v13.934a2.236 2.236 0 01-2.232 2.233z",
    fill: "#231F20"
  })));
}

var _path$1F;

function _extends$1F() { _extends$1F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1F.apply(this, arguments); }

function SvgRgroupLabel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1F({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1F || (_path$1F = /*#__PURE__*/React.createElement("path", {
    d: "M27.927 22.052h-2.666v-10.77h-2.409V8.614h5.075v13.437zM19.396 16.176c1.458-.667 2.362-1.923 2.362-3.481 0-1.467-.696-2.678-1.958-3.391-1.1-.621-2.301-.688-2.765-.688H11.78v13.436h2.667v-5.359h2.244l2.533 5.362h2.95l-2.778-5.879zm-4.95-2.15v-2.743h2.589a3.163 3.163 0 011.452.342c.43.243.604.552.604 1.067 0 1.003-1.368 1.304-2.092 1.323a92.9 92.9 0 01-2.552.012zM6.35 19.137l-1.886-1.886 1.948-1.947-1.948-1.948 1.885-1.887 3.833 3.835-3.833 3.833z",
    fill: "#231F20"
  })));
}

var _path$1E;

function _extends$1E() { _extends$1E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1E.apply(this, arguments); }

function SvgSave(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1E({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1E || (_path$1E = /*#__PURE__*/React.createElement("path", {
    d: "M17.25 17.625h.375V8.717l-.11-.11-2.122-2.122-.11-.11H6.375v11.25H17.25zm-10.5-12h8.845l2.78 2.78v8.845a1.13 1.13 0 01-1.125 1.125H6.75a1.125 1.125 0 01-1.125-1.125V6.75c0-.62.5-1.125 1.125-1.125zm1.5 2.625h5.25v1.5H8.25v-1.5zm4.875 6a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z",
    fill: "currentcolor",
    stroke: "currentcolor",
    strokeWidth: 0.75
  })));
}

var _path$1D;

function _extends$1D() { _extends$1D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1D.apply(this, arguments); }

function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1D({
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1D || (_path$1D = /*#__PURE__*/React.createElement("path", {
    d: "M22.697 21.492l-5.68-5.68a6.503 6.503 0 001.358-4c0-1.754-.685-3.399-1.923-4.64a6.514 6.514 0 00-4.64-1.922 6.523 6.523 0 00-4.64 1.923 6.51 6.51 0 00-1.922 4.64c0 1.752.685 3.401 1.923 4.64a6.51 6.51 0 004.64 1.922 6.509 6.509 0 003.996-1.356l5.68 5.678a.18.18 0 00.255 0l.953-.951a.18.18 0 000-.254zm-7.42-6.215a4.874 4.874 0 01-3.464 1.435 4.874 4.874 0 01-3.466-1.434 4.874 4.874 0 01-1.435-3.466c0-1.308.51-2.54 1.435-3.465a4.874 4.874 0 013.466-1.435c1.308 0 2.54.508 3.464 1.435a4.874 4.874 0 011.435 3.466 4.87 4.87 0 01-1.434 3.464z",
    fill: "currentColor"
  })));
}

var _path$1C, _path2$h;

function _extends$1C() { _extends$1C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1C.apply(this, arguments); }

function SvgSelectFragment(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1C({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1C || (_path$1C = /*#__PURE__*/React.createElement("path", {
    d: "M36.085 41.896a.85.85 0 01-1.182-.458l-1.938-4.6-2.232 1.962a.8.8 0 01-.55.214.85.85 0 01-.628-.284 1.02 1.02 0 01-.262-.688V23.464c-.002-.254.092-.5.262-.688a.85.85 0 01.628-.284.86.86 0 01.568.224h.01l10.212 9.366a1.038 1.038 0 01.116 1.37.867.867 0 01-.508.33l-2.8.6 1.956 4.6a.978.978 0 01-.428 1.284l-3.224 1.63z",
    fill: "#231F20"
  })), _path2$h || (_path2$h = /*#__PURE__*/React.createElement("path", {
    d: "M34.37 14.838l-13.303-6.6a2 2 0 00-2.319.4l-10.4 10.614a2 2 0 00-.342 2.326l6.883 13.164A2 2 0 0017 35.772l10.29-1.742v-4.054l-9.523 1.612L12.23 21l8.358-8.536 10.703 5.312-.343 2.312 3.563 3.266.95-6.432a2 2 0 00-1.09-2.084z",
    fill: "#231F20"
  })));
}

var _path$1B, _path2$g;

function _extends$1B() { _extends$1B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1B.apply(this, arguments); }

function SvgSelectLasso(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1B({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1B || (_path$1B = /*#__PURE__*/React.createElement("path", {
    d: "M36.209 42.244a.85.85 0 01-1.182-.456l-1.938-4.6-2.23 1.962a.81.81 0 01-.552.214.849.849 0 01-.628-.284 1.023 1.023 0 01-.26-.688v-14.58a1.028 1.028 0 01.26-.688.851.851 0 01.628-.284c.21.003.414.082.57.224l10.212 9.366a1.036 1.036 0 01.116 1.37.87.87 0 01-.506.33l-2.8.6 1.956 4.6a.976.976 0 01-.426 1.282l-3.22 1.632zM30.673 8.504a2 2 0 00-1.174-.982 22.044 22.044 0 00-4.96-.942 2.012 2.012 0 00-2.14 1.848v.154a2 2 0 001.854 1.988 17.996 17.996 0 014.058.77 2 2 0 002.372-2.836h-.01zm-12.08.4a2 2 0 00-1.878-1.314c-.234 0-.466.042-.686.124a16.25 16.25 0 00-4.568 2.522 2 2 0 002.492 3.128 12.261 12.261 0 013.446-1.9 1.997 1.997 0 001.2-2.566l-.006.006zm21.51 7.252a14.249 14.249 0 00-3.118-4.306 2.001 2.001 0 10-2.77 2.884c.939.881 1.703 1.93 2.254 3.094a2 2 0 003.634-1.672zm-28.74 5.964a7.384 7.384 0 01-.546-2.748c0-.263.015-.526.044-.788a2 2 0 10-3.972-.456c-.048.413-.072.828-.072 1.244.005 1.45.288 2.885.834 4.228a2 2 0 003.712-1.488v.008zm27.866.6a2 2 0 00-2.634 1.032 7.638 7.638 0 01-.922 1.564l2.956 2.712a11.663 11.663 0 001.632-2.676 2 2 0 00-1.032-2.632zm-21.756 5.4a14.372 14.372 0 01-3.36-2.214 2 2 0 10-2.664 2.982 18.365 18.365 0 004.292 2.838 1.966 1.966 0 001.927-.11 2.01 2.01 0 00.937-1.692 2.014 2.014 0 00-1.132-1.806v.002z",
    fill: "#231F20"
  })), _path2$g || (_path2$g = /*#__PURE__*/React.createElement("path", {
    d: "M27.691 29.61v7.244c-1.33 1.234-3.494 2.026-5.69 1.888-1.088-.068-2.292-.458-3.564-.87-1.272-.412-2.726-.886-3.572-.818-1.5.116-3.054 1.366-3.524 1.836a2 2 0 01-2.83-2.828c.282-.28 2.834-2.748 6.046-3 1.634-.126 3.4.446 5.112 1 .982.318 2 .648 2.582.684 1.372.086 2.426-.51 2.762-.854 0-.026 0-.054-.014-.084-.318 0-.644-.01-.968-.026a2 2 0 01.098-3.998h.096c.288.012.574.02.85.02a16.92 16.92 0 002.616-.194z",
    fill: "#231F20"
  })));
}

var _path$1A;

function _extends$1A() { _extends$1A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1A.apply(this, arguments); }

function SvgSelectRectangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1A({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1A || (_path$1A = /*#__PURE__*/React.createElement("path", {
    d: "M36.21 42.244a.85.85 0 01-1.181-.456l-1.938-4.6-2.23 1.962a.81.81 0 01-.552.214.851.851 0 01-.628-.284 1.024 1.024 0 01-.26-.688v-14.58a1.028 1.028 0 01.26-.688.85.85 0 01.628-.284.866.866 0 01.57.224L41.09 32.43a1.036 1.036 0 01.116 1.37.87.87 0 01-.506.33l-2.8.6 1.956 4.6a.977.977 0 01-.426 1.282l-3.22 1.632zM8.56 20.102v5.478h4v-5.478h-4zm11.38 12.86v4h5.48v-4h-5.48zM31.526 8.72h-2.105v4h2.105A1.277 1.277 0 0132.8 14v2.102h4V14a5.282 5.282 0 00-5.273-5.28zm-17.69 0A5.282 5.282 0 008.562 14v2.102h4V14a1.276 1.276 0 011.275-1.276h2.104v-4l-2.104-.004zm6.104 0v4h5.48v-4h-5.48zM32.8 20.102V21.8l4 3.668v-5.366h-4zm-18.963 12.86a1.276 1.276 0 01-1.277-1.276V29.58h-4v2.106a5.282 5.282 0 005.276 5.276h2.104v-4h-2.104z",
    fill: "#231F20"
  })));
}

var _path$1z;

function _extends$1z() { _extends$1z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1z.apply(this, arguments); }

function SvgSettings(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1z({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1z || (_path$1z = /*#__PURE__*/React.createElement("path", {
    d: "M12 9a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-1.5 9a.38.38 0 01-.375-.315l-.277-1.987a5.209 5.209 0 01-1.268-.743l-1.867.758a.377.377 0 01-.458-.166l-1.5-2.595a.37.37 0 01.09-.48l1.583-1.245L6.375 12l.053-.75-1.583-1.223a.37.37 0 01-.09-.48l1.5-2.595c.09-.165.293-.232.458-.165l1.867.75c.39-.292.795-.547 1.268-.734l.277-1.988A.38.38 0 0110.5 4.5h3a.38.38 0 01.375.315l.278 1.987c.472.188.877.443 1.267.736l1.868-.75a.369.369 0 01.457.164l1.5 2.595a.37.37 0 01-.09.48l-1.582 1.223.052.75-.052.75 1.582 1.223a.37.37 0 01.09.48l-1.5 2.595a.369.369 0 01-.457.165l-1.868-.75c-.39.292-.795.547-1.267.735l-.278 1.987a.38.38 0 01-.375.315h-3zM11.438 6l-.278 1.957a4.12 4.12 0 00-2.272 1.336l-1.808-.78-.562.975L8.1 10.65c-.3.877-.3 1.83 0 2.7l-1.59 1.17.563.975 1.822-.78a4.083 4.083 0 002.258 1.32L11.43 18h1.14l.278-1.957a4.138 4.138 0 002.257-1.328l1.823.78.562-.975-1.59-1.162c.3-.878.3-1.83 0-2.708l1.583-1.162-.563-.976-1.807.78a4.065 4.065 0 00-2.273-1.327L12.563 6h-1.125z",
    fill: "currentcolor"
  })));
}

var _path$1y;

function _extends$1y() { _extends$1y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1y.apply(this, arguments); }

function SvgSgroupData(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1y({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1y || (_path$1y = /*#__PURE__*/React.createElement("path", {
    d: "M42.844 33.5v4h-4.818v4.818h-4V37.5h-4.818v-4h4.818v-4.818h4V33.5h4.818zM16 40h-4.4A3.6 3.6 0 018 36.4V11.6A3.6 3.6 0 0111.6 8H16v4h-4v24h4v4zM40 25.882h-4V12h-4V8h4.4a3.6 3.6 0 013.6 3.6v14.282zM24.134 32.276a7.671 7.671 0 01-5.918-2.818l3.068-2.566c1.4 1.678 3.528 1.616 4.458.93.256-.2.644-.476.066-1.37-.148-.222-.882-.776-1.876-1.24-.084-.038-.328-.124-.524-.2-1.182-.42-3.162-1.124-4.17-2.736-1.32-2.11-.6-4.77.812-6.306a5.73 5.73 0 014.15-1.816h.052c1.814.018 3.814.898 5.08 1.718l-2.168 3.358c-.964-.63-2.18-1.07-2.948-1.076A1.674 1.674 0 0023 18.68c-.386.422-.572 1.158-.37 1.48.27.432 1.566.892 2.12 1.088.332.118.618.22.872.34.966.448 2.708 1.4 3.546 2.692 1.568 2.424 1.146 5.142-1.05 6.762a6.756 6.756 0 01-3.984 1.234z",
    fill: "#231F20"
  })));
}

var _path$1x;

function _extends$1x() { _extends$1x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1x.apply(this, arguments); }

function SvgSgroup(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1x({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1x || (_path$1x = /*#__PURE__*/React.createElement("path", {
    d: "M16 40h-4.4A3.6 3.6 0 018 36.4V11.6A3.6 3.6 0 0111.6 8H16v4h-4v24h4v4zM36.627 40h-4.4v-4h4V12h-4V8h4.4a3.6 3.6 0 013.6 3.6v24.8a3.6 3.6 0 01-3.6 3.6zM24.134 32.276a7.671 7.671 0 01-5.918-2.818l3.068-2.566c1.4 1.678 3.528 1.616 4.458.93.256-.2.644-.476.066-1.37-.148-.222-.882-.776-1.876-1.24-.084-.038-.328-.124-.524-.2-1.182-.42-3.162-1.124-4.17-2.736-1.32-2.11-.6-4.77.812-6.306a5.73 5.73 0 014.15-1.816h.052c1.814.018 3.814.898 5.08 1.718l-2.168 3.358c-.964-.63-2.18-1.07-2.948-1.076A1.674 1.674 0 0023 18.68c-.386.422-.572 1.158-.37 1.48.27.432 1.566.892 2.12 1.088.332.118.618.22.872.34.966.448 2.708 1.4 3.546 2.692 1.568 2.424 1.146 5.142-1.05 6.762a6.756 6.756 0 01-3.984 1.234z",
    fill: "#231F20"
  })));
}

var _path$1w, _path2$f;

function _extends$1w() { _extends$1w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1w.apply(this, arguments); }

function SvgShapeEllipse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1w({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1w || (_path$1w = /*#__PURE__*/React.createElement("path", {
    d: "M40.718 13.822v4H35.9v4.818h-4v-4.818h-4.818v-4H31.9V9.004h4v4.818h4.818z",
    fill: "#231F20"
  })), _path2$f || (_path2$f = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.074 17.898C11.609 19.62 10.342 21.81 10.342 24c0 2.191 1.266 4.38 3.728 6.102 2.457 1.719 5.96 2.846 9.93 2.846 3.97 0 7.472-1.127 9.93-2.846 2.462-1.723 3.728-3.911 3.728-6.102h4c0 3.855-2.235 7.14-5.436 9.38-3.208 2.244-7.534 3.568-12.222 3.568s-9.015-1.324-12.222-3.568C8.576 31.14 6.342 27.854 6.342 24c0-3.856 2.238-7.142 5.44-9.38 3.208-2.244 7.534-3.568 12.218-3.568v4c-3.965 0-7.468 1.127-9.926 2.846z",
    fill: "#231F20"
  })));
}

var _path$1v, _path2$e;

function _extends$1v() { _extends$1v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1v.apply(this, arguments); }

function SvgShapeLine(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1v({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1v || (_path$1v = /*#__PURE__*/React.createElement("path", {
    d: "M41.9 12.916v4h-4.818v4.818h-4v-4.818h-4.818v-4h4.818V8.098h4v4.818H41.9z",
    fill: "#231F20"
  })), _path2$e || (_path2$e = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.292 12.756a2 2 0 012.828 0l23.376 23.376a2 2 0 11-2.828 2.828L10.292 15.584a2 2 0 010-2.828z",
    fill: "#231F20"
  })));
}

var _path$1u;

function _extends$1u() { _extends$1u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1u.apply(this, arguments); }

function SvgShapePolyline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1u({
    xmlns: "http://www.w3.org/2000/svg",
    width: 1000,
    height: 1000,
    viewBox: "0 0 1000 1000"
  }, props), _path$1u || (_path$1u = /*#__PURE__*/React.createElement("path", {
    d: "M200 210l100 590 80-600 140 600h180l150-650",
    fill: "#fff",
    stroke: "#000",
    strokeWidth: 40
  })));
}

var _path$1t;

function _extends$1t() { _extends$1t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1t.apply(this, arguments); }

function SvgShapeRectangle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1t({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1t || (_path$1t = /*#__PURE__*/React.createElement("path", {
    d: "M43.961 12.61v4h-4.818v4.818h-4V16.61h-4.818v-4h4.818V7.792h4v4.818h4.818zM35.14 25.43v5.97H12.86V16.61h13.462v-4H8.86V35.4h30.28v-9.96l-4-.01z",
    fill: "#231F20"
  })));
}

var _path$1s, _path2$d;

function _extends$1s() { _extends$1s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1s.apply(this, arguments); }

function SvgTemplate0(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1s({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1s || (_path$1s = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.333 4.536c.412-.238.92-.238 1.333 0l8.928 5.155c.413.238.667.678.667 1.154v10.31c0 .476-.254.916-.667 1.154l-8.928 5.155c-.412.238-.92.238-1.333 0L6.405 22.31a1.333 1.333 0 01-.667-1.155v-10.31c0-.476.254-.916.667-1.154l8.928-5.155zm-6.928 7.08v8.769L16 24.77l7.594-4.385v-8.77L16 7.23l-7.595 4.385z",
    fill: "#231F20"
  })), _path2$d || (_path2$d = /*#__PURE__*/React.createElement("path", {
    d: "M21.084 13.067v5.866l1.333.77v-7.41l-1.333.774zM16 8.587L9.58 12.294l1.333.77L16 10.133V8.588zM9.58 19.705L16 23.409v-1.542l-5.086-2.934-1.333.77z",
    fill: "#231F20"
  })));
}

var _path$1r, _path2$c;

function _extends$1r() { _extends$1r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1r.apply(this, arguments); }

function SvgTemplate1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1r({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1r || (_path$1r = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.216 5.416c.467-.34 1.1-.34 1.567 0l9.153 6.65c.468.34.663.942.485 1.491l-3.496 10.76c-.179.55-.69.922-1.268.922H10.342c-.578 0-1.09-.372-1.268-.922l-3.496-10.76a1.333 1.333 0 01.484-1.49l9.154-6.651zm-6.802 8.239l2.897 8.917h9.377l2.897-8.917L16 8.143l-7.585 5.512z",
    fill: "#231F20"
  })), _path2$c || (_path2$c = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.35 14.61l-2.184 6.717-1.268-.412 2.183-6.717 1.268.412zM11.834 21.327L9.651 14.61l1.268-.412 2.183 6.717-1.268.412z",
    fill: "#231F20"
  })));
}

var _path$1q;

function _extends$1q() { _extends$1q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1q.apply(this, arguments); }

function SvgTemplate2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1q({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1q || (_path$1q = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.333 4.536c.412-.238.92-.238 1.333 0l8.928 5.155c.413.238.667.678.667 1.154v10.31c0 .476-.254.916-.667 1.154l-8.928 5.155c-.412.238-.92.238-1.333 0L6.405 22.31a1.333 1.333 0 01-.667-1.155v-10.31c0-.476.254-.916.667-1.154l8.928-5.155zm-6.928 7.08v8.769L16 24.77l7.594-4.385v-8.77L16 7.23l-7.595 4.385z",
    fill: "#231F20"
  })));
}

var _path$1p;

function _extends$1p() { _extends$1p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1p.apply(this, arguments); }

function SvgTemplate3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1p({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1p || (_path$1p = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.216 6.216c.467-.34 1.1-.34 1.567 0l9.153 6.65c.468.34.663.942.485 1.491l-3.496 10.76c-.179.55-.69.922-1.268.922H10.342c-.578 0-1.09-.372-1.268-.922l-3.496-10.76a1.333 1.333 0 01.484-1.49l9.154-6.651zm-6.802 8.239l2.897 8.917h9.377l2.897-8.917L16 8.943l-7.585 5.512z",
    fill: "#231F20"
  })));
}

var _path$1o;

function _extends$1o() { _extends$1o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1o.apply(this, arguments); }

function SvgTemplate4(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1o({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1o || (_path$1o = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 6.71c.476 0 .916.255 1.154.667l8.662 15.003a1.333 1.333 0 01-1.155 2H7.338a1.333 1.333 0 01-1.154-2l8.66-15.003A1.333 1.333 0 0116 6.711zm0 4L9.647 21.714h12.704l-6.353-11.002z",
    fill: "#231F20"
  })));
}

var _path$1n;

function _extends$1n() { _extends$1n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1n.apply(this, arguments); }

function SvgTemplate5(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1n({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1n || (_path$1n = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.328 6.661c0-.736.597-1.333 1.333-1.333h18.68c.735 0 1.332.597 1.332 1.333V25.34c0 .736-.596 1.333-1.333 1.333H6.661a1.333 1.333 0 01-1.333-1.333V6.66zm2.667 1.334v16.012h16.012V7.995H7.995z",
    fill: "#231F20"
  })));
}

var _path$1m;

function _extends$1m() { _extends$1m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1m.apply(this, arguments); }

function SvgTemplate6(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1m({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1m || (_path$1m = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.422 5.625a1.333 1.333 0 011.157 0l7.436 3.58c.365.176.63.51.721.905l1.837 8.048c.09.395-.004.81-.257 1.128l-5.147 6.453a1.333 1.333 0 01-1.042.502h-8.253c-.406 0-.79-.184-1.043-.502l-5.147-6.453a1.333 1.333 0 01-.257-1.128l1.837-8.048c.09-.396.356-.729.722-.905l7.436-3.58zm-5.7 5.704L8.17 18.125l4.346 5.45h6.969l4.346-5.45-1.552-6.796L16 8.306 9.721 11.33z",
    fill: "#231F20"
  })));
}

var _path$1l;

function _extends$1l() { _extends$1l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1l.apply(this, arguments); }

function SvgTemplate7(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1l({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1l || (_path$1l = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.357 6.125c.25-.25.59-.39.943-.39h7.4c.353 0 .692.14.942.39l5.233 5.232c.25.25.39.59.39.943v7.4c0 .354-.14.693-.39.943l-5.233 5.232c-.25.25-.589.39-.942.39h-7.4c-.354 0-.693-.14-.943-.39l-5.232-5.232c-.25-.25-.39-.59-.39-.943v-7.4c0-.354.14-.693.39-.943l5.232-5.232zm1.495 2.276l-4.451 4.451v6.296l4.451 4.45h6.295l4.451-4.45v-6.296l-4.45-4.45h-6.296z",
    fill: "#231F20"
  })));
}

var _path$1k, _path2$b;

function _extends$1k() { _extends$1k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1k.apply(this, arguments); }

function SvgTemplateDialog(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1k({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1k || (_path$1k = /*#__PURE__*/React.createElement("path", {
    d: "M3.675 12.101l5.345 3.086.004-.002v-.794l-.004.003-4.658-2.69-.687.397zM13.69 11.69V6.31l.688-.397v6.174l-.687-.397zM9.024 2.815l-.004-.002-5.358 3.093.687.397 4.67-2.697.005.003v-.794z",
    fill: "currentColor"
  })), _path2$b || (_path2$b = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.02.75l7.144 4.125v8.25L9.02 17.25l-7.145-4.125v-8.25L9.02.75zM2.563 5.272L9.02 1.544l6.457 3.728v7.456L9.02 16.456l-6.457-3.728V5.272z",
    fill: "currentColor"
  })));
}

var _path$1j;

function _extends$1j() { _extends$1j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1j.apply(this, arguments); }

function SvgTemplateLib(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1j({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1j || (_path$1j = /*#__PURE__*/React.createElement("path", {
    d: "M7.445 15.5H4.146c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM13.652 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM19.855 15.5h-3.299c-.357 0-.646.269-.646.6v3.062c0 .331.29.6.646.6h3.299c.357 0 .646-.269.646-.6V16.1c0-.331-.29-.6-.646-.6zM5 6.267a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h6.282a.5.5 0 01.5.5v.767a.5.5 0 01-.5.5H9.669a.5.5 0 00-.5.5V13a.5.5 0 01-.5.5H7.617a.5.5 0 01-.5-.5V6.767a.5.5 0 00-.5-.5H5zM13.299 13.5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h3.059c.645 0 1.201.132 1.67.396.47.26.834.625 1.09 1.094.254.466.382 1.008.382 1.626 0 .62-.13 1.164-.391 1.63a2.674 2.674 0 01-1.107 1.077c-.48.255-1.048.382-1.707.382h-1.696a.5.5 0 01-.5-.5v-.714a.5.5 0 01.5-.5h1.309c.314 0 .576-.057.786-.171.213-.114.375-.274.484-.48.11-.207.164-.449.164-.724 0-.279-.055-.519-.164-.721a1.123 1.123 0 00-.484-.475c-.213-.11-.475-.167-.786-.167h-.527a.5.5 0 00-.5.5V13a.5.5 0 01-.5.5H13.3z",
    fill: "#333"
  })));
}

var _path$1i;

function _extends$1i() { _extends$1i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1i.apply(this, arguments); }

function SvgTextBold(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1i({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1i || (_path$1i = /*#__PURE__*/React.createElement("path", {
    d: "M9 18.87a1 1 0 01-1-1V6a1 1 0 011-1h3.465c1.406 0 2.527.323 3.363.969.836.633 1.254 1.495 1.254 2.584 0 .608-.146 1.14-.437 1.596-.279.456-.659.81-1.14 1.064-.469.253-.982.38-1.539.38v.057a3.71 3.71 0 011.691.342c.52.24.937.602 1.254 1.083.317.481.475 1.077.475 1.786 0 .81-.196 1.52-.589 2.128-.38.595-.925 1.058-1.634 1.387-.71.33-1.552.494-2.527.494H9zm1.755-2.299h1.767c.62 0 1.108-.165 1.463-.494.355-.33.532-.785.532-1.368 0-.583-.177-1.039-.532-1.368-.355-.342-.842-.513-1.463-.513h-1.767v3.743zm0-5.985h1.672c.557 0 .994-.146 1.311-.437.317-.304.475-.71.475-1.216 0-.52-.158-.918-.475-1.197-.317-.291-.754-.437-1.311-.437h-1.672v3.287z"
  })));
}

var _path$1h;

function _extends$1h() { _extends$1h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1h.apply(this, arguments); }

function SvgText(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1h({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1h || (_path$1h = /*#__PURE__*/React.createElement("path", {
    d: "M23.957 7.205v2.667h-6.624v14.923h-2.667V9.872H8.042V7.205h15.915z",
    fill: "#231F20"
  })));
}

var _path$1g;

function _extends$1g() { _extends$1g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1g.apply(this, arguments); }

function SvgTextItalic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1g({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1g || (_path$1g = /*#__PURE__*/React.createElement("path", {
    d: "M8.066 18.87a.912.912 0 010-1.824h2.031l1.615-10.222H9.977a.912.912 0 110-1.824h5.837a.912.912 0 010 1.824h-2.031l-1.615 10.222h1.735a.912.912 0 110 1.824H8.066z"
  })));
}

var _path$1f;

function _extends$1f() { _extends$1f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1f.apply(this, arguments); }

function SvgTextSubscript(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1f({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1f || (_path$1f = /*#__PURE__*/React.createElement("path", {
    d: "M16.65 20.735c-.061 0-.118-.091-.17-.274a1.927 1.927 0 01-.074-.493c0-.055.008-.099.025-.132l2.197-2.685c.221-.277.332-.555.332-.835 0-.225-.075-.397-.225-.518-.15-.123-.345-.185-.586-.185-.16 0-.3.024-.424.073-.12.049-.245.114-.372.195a1 1 0 01-.122.074.23.23 0 01-.097.029.378.378 0 01-.244-.098.739.739 0 01-.181-.239.602.602 0 01-.068-.259c0-.163.084-.304.254-.425a1.78 1.78 0 01.649-.278 3.47 3.47 0 01.825-.098c.397 0 .737.074 1.02.22.287.143.504.344.65.6.146.255.22.548.22.88 0 .267-.047.519-.142.757-.091.237-.22.457-.386.659l-1.63 2.016h2.002c.09 0 .157.036.2.108.042.068.063.177.063.327v.146c0 .15-.02.26-.063.332-.043.069-.11.103-.2.103H16.65zM7.03 17.615c-.687 0-1.03-.105-1.03-.315 0-.105.053-.241.158-.408l3.404-5.326-3.024-4.833c-.105-.192-.158-.331-.158-.418 0-.092.087-.167.26-.222C6.82 6.03 7.082 6 7.43 6h.677c.532 0 .86.105.983.315l1.884 3.071 1.976-3.07a.68.68 0 01.37-.251c.162-.043.375-.065.641-.065h.64c.693 0 1.04.105 1.04.315 0 .118-.053.257-.159.418l-3.117 4.87 3.294 5.289c.099.154.148.29.148.408 0 .21-.346.315-1.039.315h-.64c-.266 0-.48-.021-.64-.065a.524.524 0 01-.343-.25l-2.2-3.544L8.664 17.3a.563.563 0 01-.353.269 3.317 3.317 0 01-.65.046h-.63z"
  })));
}

var _path$1e;

function _extends$1e() { _extends$1e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1e.apply(this, arguments); }

function SvgTextSuperscript(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1e({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1e || (_path$1e = /*#__PURE__*/React.createElement("path", {
    d: "M7.03 17.615c-.687 0-1.03-.105-1.03-.315 0-.105.053-.241.158-.408l3.404-5.326-3.024-4.833c-.105-.192-.158-.331-.158-.418 0-.092.087-.167.26-.222C6.82 6.03 7.082 6 7.43 6h.677c.532 0 .86.105.983.315l1.884 3.071 1.976-3.07a.68.68 0 01.37-.251c.162-.043.375-.065.641-.065h.64c.693 0 1.04.105 1.04.315 0 .118-.053.257-.159.418l-3.117 4.87 3.294 5.289c.099.154.148.29.148.408 0 .21-.346.315-1.039.315h-.64c-.266 0-.48-.021-.64-.065a.524.524 0 01-.343-.25l-2.2-3.544L8.664 17.3a.563.563 0 01-.353.269 3.317 3.317 0 01-.65.046h-.63zM16.65 9.147c-.061 0-.118-.09-.17-.273a1.927 1.927 0 01-.074-.493c0-.055.008-.1.025-.132l2.197-2.686c.221-.276.332-.555.332-.834 0-.225-.075-.398-.225-.518-.15-.124-.345-.186-.586-.186-.16 0-.3.025-.424.074a2.28 2.28 0 00-.372.195c-.042.03-.083.054-.122.073a.23.23 0 01-.097.03.378.378 0 01-.244-.098.739.739 0 01-.181-.24.602.602 0 01-.068-.258c0-.163.084-.305.254-.425a1.78 1.78 0 01.649-.278A3.47 3.47 0 0118.369 3c.397 0 .737.073 1.02.22.287.143.504.343.65.6.146.254.22.547.22.88 0 .266-.047.518-.142.756-.091.238-.22.457-.386.66l-1.63 2.016h2.002c.09 0 .157.036.2.107.042.069.063.178.063.327v.147c0 .15-.02.26-.063.332-.043.068-.11.102-.2.102H16.65z"
  })));
}

var _path$1d;

function _extends$1d() { _extends$1d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1d.apply(this, arguments); }

function SvgTransformRotate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1d({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1d || (_path$1d = /*#__PURE__*/React.createElement("path", {
    d: "M30.49 35.566l-7.938 6.727-.623-3.439A15 15 0 0110.92 16.66l3.031 1.704a11.523 11.523 0 007.315 16.828l-.569-3.13 9.793 3.504zM37.082 31.341l-3.031-1.704a11.523 11.523 0 00-7.315-16.828l.569 3.14-9.793-3.514 7.937-6.727.623 3.439a15 15 0 0111.01 22.194z",
    fill: "#231F20"
  })));
}

var _path$1c;

function _extends$1c() { _extends$1c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1c.apply(this, arguments); }

function SvgTransformFlipH(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1c({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1c || (_path$1c = /*#__PURE__*/React.createElement("path", {
    d: "M22.001 6v36h4V6h-4zM18.271 40h-6.67a3.6 3.6 0 01-3.6-3.6V11.6a3.6 3.6 0 013.6-3.6h6.67v4h-6.27v24h6.27v4zM36.001 8h.4a3.6 3.6 0 013.6 3.6v.4h-4V8zM40.001 36v.4a3.6 3.6 0 01-3.6 3.6h-.4v-4h4zM34.535 36h-4.534v4h4.534v-4zM34.535 8h-4.534v4h4.534V8zM36.001 14.598v4.534h4v-4.534h-4zM36.001 21.732v4.534h4v-4.534h-4zM36.001 28.866V33.4h4v-4.534h-4z",
    fill: "#231F20"
  })));
}

var _path$1b;

function _extends$1b() { _extends$1b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1b.apply(this, arguments); }

function SvgTransformFlipV(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1b({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1b || (_path$1b = /*#__PURE__*/React.createElement("path", {
    d: "M42 22H6v4h36v-4zM40 18.27h-4V12H12v6.27H8V11.6A3.6 3.6 0 0111.6 8h24.8a3.6 3.6 0 013.6 3.6v6.67zM40 36.016v.4a3.6 3.6 0 01-3.6 3.6H36v-4h4zM12 40.016h-.4a3.6 3.6 0 01-3.6-3.6v-.4h4v4zM12 34.55v-4.534H8v4.534h4zM40 34.55v-4.534h-4v4.534h4zM33.4 36.016h-4.535v4H33.4v-4zM26.267 36.016h-4.534v4h4.534v-4zM19.135 36.016H14.6v4h4.534v-4z",
    fill: "#231F20"
  })));
}

var _path$1a;

function _extends$1a() { _extends$1a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1a.apply(this, arguments); }

function SvgUndo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1a({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1a || (_path$1a = /*#__PURE__*/React.createElement("path", {
    d: "M12.375 9c-1.988 0-3.787.75-5.175 1.95l-2.7-2.7V15h6.75l-2.715-2.715a5.965 5.965 0 013.84-1.41 6.009 6.009 0 015.7 4.125l1.777-.585C18.81 11.273 15.862 9 12.375 9z",
    fill: "currentcolor"
  })));
}

var _path$19;

function _extends$19() { _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$19.apply(this, arguments); }

function SvgZoomIn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$19({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$19 || (_path$19 = /*#__PURE__*/React.createElement("path", {
    d: "M12.665 8.667h-4v4H7.332v-4h-4V7.334h4v-4h1.333v4h4v1.333z",
    fill: "currentcolor"
  })));
}

var _path$18;

function _extends$18() { _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$18.apply(this, arguments); }

function SvgZoomOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$18({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$18 || (_path$18 = /*#__PURE__*/React.createElement("path", {
    d: "M12.665 8.667H3.332V7.334h9.333v1.333z",
    fill: "currentcolor"
  })));
}

var _path$17;

function _extends$17() { _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$17.apply(this, arguments); }

function SvgTextSpecialSymbols(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$17({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), _path$17 || (_path$17 = /*#__PURE__*/React.createElement("path", {
    d: "M19.15 19h-5.76v-2.13c2.11-1.62 3.2-3.63 3.2-6.03 0-1.5-.43-2.68-1.27-3.55C14.47 6.42 13.37 6 12.03 6c-1.35 0-2.46.42-3.32 1.3-.87.87-1.3 2.07-1.3 3.58 0 2.38 1.09 4.38 3.2 5.99V19H4.85v-2.13h3.56c-2.37-1.55-3.56-3.64-3.56-6.27 0-2.1.65-3.74 1.96-4.94 1.31-1.21 3.03-1.81 5.16-1.81 2.18 0 3.92.6 5.22 1.79 1.31 1.19 1.96 2.86 1.96 4.94 0 2.63-1.2 4.73-3.6 6.29h3.6V19z"
  })));
}

var _path$16;

function _extends$16() { _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$16.apply(this, arguments); }

function SvgSave1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$16({
    width: 10,
    height: 12,
    viewBox: "0 0 10 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$16 || (_path$16 = /*#__PURE__*/React.createElement("path", {
    d: "M9.667 4H7.001V0H3v4H.334l4.667 4.667L9.667 4zM.334 10v1.333h9.333V10H.334z",
    fill: "currentcolor"
  })));
}

var _path$15;

function _extends$15() { _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$15.apply(this, arguments); }

function SvgOpen1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$15({
    width: 14,
    height: 12,
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$15 || (_path$15 = /*#__PURE__*/React.createElement("path", {
    d: "M13.665 2H7L5.665.667H.332v10.666h13.333V2zm-1.333 8H1.665V3.333h10.667V10z",
    fill: "currentcolor"
  })));
}

var _path$14;

function _extends$14() { _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$14.apply(this, arguments); }

function SvgReset(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$14({
    width: 15,
    height: 12,
    viewBox: "0 0 15 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$14 || (_path$14 = /*#__PURE__*/React.createElement("path", {
    d: "M8.666 0a6 6 0 00-6 6h-2l2.667 2.66L5.999 6H4a4.663 4.663 0 014.667-4.667A4.663 4.663 0 0113.333 6a4.663 4.663 0 01-4.667 4.667 4.63 4.63 0 01-3.293-1.374l-.947.947A5.97 5.97 0 008.666 12a6 6 0 000-12zm-.667 3.333v3.334l2.834 1.68.513-.854L8.999 6.1V3.333H8z",
    fill: "currentcolor"
  })));
}

var _path$13;

function _extends$13() { _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$13.apply(this, arguments); }

function SvgClose(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$13({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$13 || (_path$13 = /*#__PURE__*/React.createElement("path", {
    d: "M13.462 12.046l6.37 6.37-1.413 1.415-6.371-6.371-6.327 6.326-1.414-1.414 6.327-6.326-6.372-6.372L5.676 4.26l6.372 6.372 6.417-6.418 1.414 1.414-6.417 6.418z",
    fill: "#333"
  })));
}

var _path$12;

function _extends$12() { _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$12.apply(this, arguments); }

function SvgGeneral(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$12({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$12 || (_path$12 = /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6.25H2a.5.5 0 00-.5.5v2.5a.5.5 0 00.5.5h2.5a.5.5 0 00.5-.5v-2.5a.5.5 0 00-.5-.5zM13.5 2.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3A.5.5 0 0014 6V3a.5.5 0 00-.5-.5zM13.5 9.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM5 8h2.5M10 11.5H9A1.5 1.5 0 017.5 10V6A1.5 1.5 0 019 4.5h1",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$11;

function _extends$11() { _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$11.apply(this, arguments); }

function SvgGeneralWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$11({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$11 || (_path$11 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.57 11.839v5.466h5.466v-5.466H32.57zm-4-1.2a2.8 2.8 0 012.8-2.8h7.866a2.8 2.8 0 012.8 2.8v7.866a2.8 2.8 0 01-2.8 2.8H31.37a2.8 2.8 0 01-2.8-2.8V16.57H26V26h-.009l-.023 5.422h2.602v-1.926a2.8 2.8 0 012.8-2.8h7.866a2.8 2.8 0 012.8 2.8v7.866a2.8 2.8 0 01-2.8 2.8H31.37a2.8 2.8 0 01-2.8-2.8v-1.94h-3.004a3.6 3.6 0 01-3.6-3.6v-.005l.025-5.817h-2.569v1.932a2.8 2.8 0 01-2.8 2.8H8.756a2.8 2.8 0 01-2.8-2.8v-7.866a2.8 2.8 0 012.8-2.8h7.866a2.8 2.8 0 012.8 2.8V22h2.579v-5.83a3.6 3.6 0 013.6-3.6h2.969v-1.932zM9.956 21.267v5.466h5.466v-5.466H9.956zM32.57 36.163v-5.466h5.466v5.466H32.57z",
    fill: "#FFF"
  })));
}

var _path$10, _defs$1;

function _extends$10() { _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$10.apply(this, arguments); }

function SvgStereo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$10({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _path$10 || (_path$10 = /*#__PURE__*/React.createElement("path", {
    fill: "url(#stereo_svg__pattern0)",
    d: "M0 0h16v16H0z"
  })), _defs$1 || (_defs$1 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "stereo_svg__pattern0",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#stereo_svg__image0_2343_3998",
    transform: "scale(.00195)"
  })), /*#__PURE__*/React.createElement("image", {
    id: "stereo_svg__image0_2343_3998",
    width: 512,
    height: 512,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d153F1Fffjxz/MkISRsCYQAYQ37vi+CiBiiIBJ31Fqr/dkKVvtya1WsrVqXFrWiuFVcqVRFcakGEBt2ZZFN2XcJu4EkBEJC9uf3x+S+SJ88y71n5py595zP+/WaP9CcOzPnuffM95wzM1+QJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJKlSfbkboEaZBuwCjF/73xsCTwJzgXmZ2iR1i42BPYFJa/97HLCM8Pt4BFiZp1mS1Jk+4HDgc8CVwAJgYISyFPg98GngGMLFT6qzbYH3ALOBPwFrGP73sQq4D/gWcDKweYb2StKItgFOBx5g5AF/tLJg7edsV23zpVKNA/4W+B2wmuK/j1XAz4AXVdt8SVrfVsAZhDv5mIF/cFkB/DewfXVdkZIbB/wN4U4/5e9jALgeeFl1XZGk550KPEv6C9u65RngvcCYivokpXIwcAfl/j4GCIHy1Ir6JKnhtgR+RfkXtnXLtYTJhFK36wc+BCynut/HAuDEKjonqbn2IsxMrnLwb5WHgP3L76JU2Hjgl+T5fawC3lV+FyU10YGEZXs5Lm6t8gxwXNkdlQqYCPwveX8fA4QVOJKUzAHAQvJf3FpBwAHldlfqyHjgCvL/Nlrlw+V2V1JTTCasRc59UVu3PIorBNQ9vkn+38S6ZQ3w5lJ7LKn2+gkbluS+oA1VrgPGltd1qS1/Tf7fwlBlKbBfed2WVHfvIf+FbKTyD+V1XRrVLqTfAyNluZoQxEtSRzZn9K18c5clwM5lnQBpFD8n/29gtPJ3pfVeUm19lfwXr3bKeWWdAGkEx5L/u99OWcTziYYkaVQ7ELKQ5b54tVNWAdPLOQ3SsH5H/u9+u8VXZZLa9nHyX7Q6KV8s5zRIQ9qT/N/5TspcnDArqQ39xGf1G1wWEe6Yfg5cBsxP/PlPAxPKOBnSEL5A2u/vKuAmwoqbC4B7En/+APDqUs6EpFo5lnQXnRuAk4ANBtXRD8wErkxY1wnpToE0rH7S7Yg5n/B4fsoQ9ewKfIWQGTNFXd9OdQIk1dcnSHPBOZ3RlyD1ERKnrElQ3xlx3Zbasg9pfh/XAFu3Ud+RwOMJ6ns4ptOSmiHFfuand1jnPyao8/YCfZU6dQrx39WbgY07qHNfYHGCevcu1GNJjTCG8D495iJzI51vPtIHXBxZ72rWf9UgpXY2cd/TlYSsmp16Z2S9A8CbCtQrqSGmEX+ReWXBul+YoO5dCtYttSt2+d/3C9Y7Fngwsu7TCtatGnFrSA1ni8jjnwEuKnjs1cS/p9wx8nhpNLG/kaIbV60CfhZZt78PGQBoWJtHHn87YdZyEQOEpVAxtoo8XhpNbADwh4hjb4ys29+HDAA0rNgtQ+dHHv9U5PGrIo+XRrNZ5PExvxF/H4pmAKDhLIs8ftPI42Mvrisjj5dGE/sb2STi2NjfR9Gnc6oRAwAN59nI4/cn7vt1YGT9yyOPl0YT+xs5KNOxYAAgDAA0vEcjj59M2OGviMOIT+rzYOTx0mhifyMnFzyuH3htZN3+PiQNqx9YStxSo98R1vV3anZkvcuBcQXqlTpxDnHf0+eAnQvU+7bIegeA1xWoV1KDXE/8habT9cYpdle7pUBfpU59iPjv6lXA+A7q3BVYkKDePQv1WFJjfJ74C80awoWynScBpxIm78XWabITVeFw4r+rA4Qttye3Ud9+hHS+sfUtwJTAkkZxPGkucAPApcCLGDoQOJyQ+jRVXSemOgHSCMYCC0nznX0Y+Btg4hD1bA38G2HVQYq6vpfqBKi3FXk/q+YYBzwCTE34mY8SNkCZT9hs6ADS7kq2iLDJibOcVYWzCK+tUlkKXEf4nfQBexBWxIxJWMdJhIBbkkb0RdLdmVdRzi7lLEhDS5G3osqygM7mHEhqsJ1J816+irKa8J5UqtJV5P/ut1v+paRzIKmmvk/+C1c75YdlnQBpBLPI/91vpywgfodOSQ2zA2HXs9wXsJHKSlzapHwuIf9vYLTykdJ6L6nWPkz+C9hI5V/L67o0qr0IG1Dl/h0MV/6A7/41iKsA1K4xhPXKM3I3ZAg3AEcxcgKgDQmzn48EtidkQ7sFuAj4Y9kNVNcaT3iEfzQwjbB65A7CLPmbO/ys9wNnJG1dGssIS21vzd0QSb1rW+DP5L+bWbcsIuyONpw+4J2EZYfDfcZlwBGFz4p60TjgfcDjDP+9uBzYt4PP7AN+PsLn5Sp/10EfJGlY+xNykee+qA0AS4BjRmjrGOC7bX7WGuAnhPkOqreZwG20/x3rZGOpCcBv2/zsKsqnO2i7JI3qWOAZ8l7YngOOG6WdRfYwWAJ8gvDKQPWyGyHI6/Q7sYywYVW7Nie8lso9+H+xgzZLUtsOAeaR58L2JKPPRTiCcFdftI4/Yca0upgEfIHwfr/o9+HGDuvcBJgTUV9MWQN8Cud4SSrRdlT/uPNGYKc22nZeovouJbz2UO8ZQ9im9wnSfBdGe+I02FjC06TViepvpzwNvLbDdkpSIWOBjxL2MC/zwvYc8O+0t5RpLLA4Yd2rCZshpcyJoHK9mLD0LeV3sOgM/5cC9yVuy1DlImCXgm2UpMKmA+eS/m6nNTlvegdt2T1xG1plIfBewgxydaedKPaev51ycUS7NgT+mXTZA9ctdwAvj2ibJCWxJ/AN4lcKLAC+TLHH7wdE1t3OBfeEAu1SeTYivPcu80nU7xK0cxPgg8CdkW1ZBcwGXkV44iVJXWND4DXA1wgXu9GeDKwkzJz+MvB64mbhbzVKXanKHGCfiHYqXh9wMjCX8v/e5yVu+2HAx4EraS9wmQv8AHg3YdMiKYqzRFWV8YRH89sS7oI2I9zlt8pcwhK8VOYCOyb8vOGsAL5CuPt8uoL69LzDgDMJuztW4TTgsyV9dj9hD4qdgCnAxoSthecTVr08Tlh1I0kaxaep5ilAq8wD3kG4kKtc2wBnU+3s+lW4SZQk9YTJ5Nmn4CZG3p1QxY0jTMJ8mur/rmdW0D9JUiLHky9D24+p5hVEU7wGuJ88f8vrCI/kJUk95ERGTgRUZlkKfJIwQ13F7AdcQp6/3wAhA+YWpfdSklSKaYTZ0zFbA8eUh4E346TbTmxBWEGykjx/s/nAu3BOhyTVwmHA1eS7m7yO6mas96qxpN2+t9OyEjgL2LLsjkqSqtVaN/4QeQaY1s6G25fd0R50HHAL+QK0SwivHCRJNbYRIVHLc+QZbJ7FtMMtu1Le9r3tlHsJQaEkqUG2JyT6yTX4PAS8tfRedqdWELaMvEFYOwmmJEk19RLgZvIFAk1KO9xHCHoeJ8+5XkMI+rYuu6OSpN7QTxiYcmwgNMDzaYfrPAHtcOAa8gVavwdeUHovJUk9aTJwOvk2EVoIfBjYoOyOVmhbQnCTaynmI4TgzqWYkqRR7QFcQL671bsIGxn1somEYGYxec7hUkIw505+kqSOzQRuJ18gMAfYu/RepjcLeIB85202IbueJEmFtRLRLCLPYLaCkJBms7I7msDBhBz3uQb+G4EXld5LSVKjbEEYiFeRZ3CbTwhExpTd0QI8N5Kk2vMu93k+HZEkNU7T33M7P0KS1FgTaN5Md1dISJK0VhPWurtHgiRJwzicvGmHy9jtrrVLYq40vU3YJVGSVAN12u/ePAmSJHWoW9IOF8l4twNmSpQkKUov5bzvlqBlwzbbK0lS15sB3EK+QOASYL9h2lan1xaSJHWdscAp5JtQtxI4i/87oe4w8k5cvA44stjplCSpt2wBfJUwIOcYdOcD7wN+QL6liw8Db8Y0vZKkBtoDuJB8d985Smvzok0SnD9JknraLOA+8g/OZZfZwPRE50ySpFpoJdZ5mvwDdepyE3BMulMlSVL9TCFvat2UxTS9kiR16GDgt+QfxIsU0/RKkhRpFjCX/IN6u2UOsE8ZJ0KSpKaZSN60w+2Uu4FXlHUCJElqsu3Im3Z4qPIUpumVJKkSRwDXkHfgb6XpnVpyXyVJ0jr6Cfv3/5nqB//LgAPK76IkSRrOxoQMessof+A3Ta8kSV1mN8pLO7wE0/RKktTVjgNuJc3Av4YQVOxQaQ8kSVIh4wh37DGD/zzCZENJktRDDiEuALih+iZLqkJ/7gZIkqTqGQBIktRABgCSJDWQAYAkSQ1kACBJUgMZAEiS1EAGAJIkNZABgCRJDWQAIElSAxkASJLUQAYAkiQ1kAGAJEkNZAAgSVIDGQBIktRABgCSJDWQAYAkSQ1kACBJUgMZAEiS1EAGAJIkNZABgCRJDWQAIElSAxkASJLUQAYAkiQ1kAGAJEkNZAAgSVIDGQBIktRABgCSJDWQAYAkSQ1kACBJUgMZAEiS1EAGAJIkNZABgCRJDWQAIElSAxkASJLUQAYAkiQ1kAGAJEkNZAAgSVIDGQBIktRABgCSJDWQAYAkSQ1kACBJUgMZAEiS1EAGAJIkNZABgCRJDWQAIElSAxkASJLUQAYAUr2tyny8pC5lACDV27zI4x9P0gpJXccAQKq3ecBjEcf/IVVDJElStc4EBgqUNcA+GdorSZISmAYsofMA4Ic5GitJktI5mXBH3+7g/wCwZZaWSpKkpN4BLGf0wf82YOdMbZQkSSXYHzifsLxv8MC/APgYsFG21kmqTF/uBkjKYkvgSGB74FngfuBaXPcvSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkVc6NgKRm2h04DNgJWAz8CbicsCmQJEmqmZcBlzB0YqBFhNTB22RrnSRJSmpX4Ce0lwnwWeATwIY5GipJkuJtRBjMl9F+KuBWeQh4a+UtliRJhfUTBu/H6XzgH1wuJWQRlCRJXexw4BriB/51y2rg+8DUCvshSZLasC1hkB5qgl+qshD4MLBBRX2SJEnDmEgYlBdT3sA/uNwFnFhF5yRJ0vpmAQ9Q3cA/uMwB9i69l5IkCYCDgSvJN/CvW1YQ9g/YrNQeS5LUYFsQBttV5B/4B5f5wHuBMaX1XpKkhhlHGFwXkX+gH63cCLyonNMgSVJzzATuIP/A3mmZTcg1IEmSOrAHcAH5B/KYshQ4Hdg48bmRJKl2JhMGzeXkH8BTlUcIOxOagVSSpEFa2/c+Qf4Bu6zye+AFqU6YJEm9bgZwM/kH6CrKGsKOhVsnOXOSJPWgXYBfkG8wfpB8rxqeBj6I2wpLkhqklab3OfIMvs+urX9DYFfgJ5naMQDcC5wcczIlSep2faRL01ukjPT4fQZwS6Z2DQCXAPt1djolSep+hwFXk2+AvQ44cpQ2jgVOId9ExJXAWcCWo59OSZK6WxVpekcqRZbgTSZsObwyU5sXEnY+HNtBmyVJ6goTCGl6nyHPINrahGeTiD7sCVyYqf0DwJ3AyyPaL0lSpWYBfyLfwDkbmJ64P/dl7s8uCfsjSVJSBwFXkG+gvAk4pqS+tRISPZ2pb620w5uW1D9JkjqWO01vlal4tyFM1MvV18cIExVNOyxJyiZ3mt7WXfFmZXd0CAcDv+2wvSnLDcDRpfdSkqRBZgK3kW8AnAPsU3ovRzcLmEuec7CGsInRjmV3UpKk3YHzyTfw3w28IqL9k4F3AucQNt/5X+ArwCsJCYmKmEhY8bB4lLaXVZZg2mFJUkkmkTdN71OEQbbo3vlj1h6/ZIQ6Yrfl3Y68ex48jGmHJUmJtNL0ziPPoLaaMKhOjejDeODnHdR5BXBgRH1HANd2UF/qcu3aNkiSVMixwB/JN5BdBhyQoB9fLlB3K/DYqmCdrcDpzwXqThk4FW2/JKmBticMHrkG/ocIg2cKhxH3SH4R8AHCiociNiZkHlwW0YaYsnht/eMLtl+S1AATyZumdwnPp+lN5UeJ2nYXcZMPdyNv2uF7MO2wJGmQPsLg8CB5BqfWcrYdSujXgsRtvRjYN6JNxwG3Jm5TJ2VOZPslSTVxKHAV+Qak64GjSurbtJLavAL4ImFlRBGttMNPltS+0Uor7fCUgu2XJPWwaYRBYDV5BqFHCYNg0bX37Zhech+eBE6l+La8m5N3C+UFVLeFsiQpsw0IF/1caXqXEwa9mDS97dqQagbXO4ATItq5F3BRBe0cqf3HR7RfktTlZgH3k2+gmQ3sXHov/6/rE7W9nfJT4tIQN/HvI0kqUZPvMP++zTamKs8Bn6H4trytJzS50g63ntCYdliSethY4PPke8f8BHHvyFPYALiT6vseO8dhW/JuK/wIYSMoSVKP2YR86WpXAGdQfJZ8avuSfjlgu+V64IURbc+5rfAq4N0RbZckZXAOeQaNbknTO9iBhEyCOc7JGuC/CCsvisi5T8Nq4GUF2y1JqtgrqX6guAs4sYrORdiI8H4+106Hi4F/ovhOhxtnav9DhNdJkqQuN4fqBodWmt5e2mu+lesg1/v12FwHOXI1vDaivZKkCkygmoFtFWEjoS2r6VYpjqW3sx2+BLi5orZ+L6KdkqQK7E35g8HlhHfqddBK2zuPPEFAK23v1C5v/xUF2ydJqsixlDcIPEB9M8pNAk4nX9re2Fcpk4EvEVZglNG+uwu2S5JUkZeQ/uLfStM7obpuZLM7YUe8HEFAa6A9qQvbbwAgSV0uZQDQStO7Y6U96A4zgdvIFwjELqdM3X4DAEnqcqkCgBuAoytue7cZR9iWdxF5goAVhG15N+uC9hsASFKXiw0AFgJvo9w0vb1mC/Km7Z1PXNreqcDZkW0wAJCkLhcbAFxafZN7xoGE2fA5goAB4CbgmIJt3z2ybgMA1Yp3OJI68UfgxYSdFh/IUP9BhABkNnFph6XGMwCQVMRswgS9jxFWSFTtJOB24O0Z6pZqwQBAUlHPAZ8C9gR+SHhMXqUJwHeAL1Rcr1QLBgCSYj0C/CUhbe81Ger/AGHSpqQOGABISuV6wrLJ/wc8XnHdZ9CMTZqkZAwAJKW0hrDcbg/gs8DyiurdHHhTRXVJtWAAIKkMi4HTgN2Acyqqc0ZF9Ui1YAAgqUwPEzL1zQBuKbmuXUr+fKlWDAAkVeEy4BDg74EFJdWxRUmfK9WSAYCkqqwCvkZ4LfBZwj7/kjIxAJBUtacI8wP2By7M3BapsQwAJOVyN/AK4KXAHZnbIjWOAYCk3C4m7PH/ydwNkZrEAEBSN1gB/CB3I6QmMQCQJKmBDAAkSWogAwBJkhrIAECSpAYyAJAkqYEMACRJaiADAEmSGsgAQJKkBjIAkCSpgQwAJElqIAMASZIayABAkqQGMgCQJKmBDAAkSWogAwBJkhpobMLPOQg4CjgQmAJssbYALAaeBO4D7gCuAm4FBhLVL0lSr9oNOBI4ApgGbE4YPycAi4BngXuBe4DrgGuA5VlautZY4JXAL4ElhMG8k/IE8C3gaKCv4rar3l5C59/Hdcul1TdZwO7E/d3uzvz5UicOAb4OzKPz7+JSYDbwBmDDKhu9EfBx4LECjR6u3AK8CRhTYT9UXwYAvckAQHXXB7wZ+CPpxs8ngH8CNiu74ScDDyZs+OByM/DCMjuhRjAA6E0GAKqzw4DfUd74uRB4LyXM7dsGuKLEhq9b1gBnAuNTd0KNYQDQmwwAVEfjCGPaGqoZQy8Htk3V+GOAxytq+LrlemD7VJ1QoxgA9CYDANXNtpR71z9ceRI4brTGjfao4K+AS4Ct2+trUocSVgvslaFuSZJi7APcSJ7X2lOACwlz64Y1UgDweuB7pFsqWMT2hFcPe2RsgyRJndgVmANslbENGwA/IEw6HNJwAcCJaw/shln5WwK/IayNlCSpm21PeHK+Te6GEMb4s4GXDfd/DrYdcA4heugWOwI/I0ymkCSpG/UTxs8dcjdkHeOAHwPTB/8fgwOAVuM3r6BRnXoBYf8BSZK60T8BL87diCFMAn7IoKf6gwOADwDHVtSgIj4E7Ju7EZIkDXII8LHcjRjBC4B3r/s/rBsATAI+WmlzOjcO+GruRkiSNMi/0f2vqT8JTG39x7oBwPsJQUC3ezEwI3cjJEla6yiGmWjXZTYjPOkHng8AJhG2EOwV3f6kQpLUHP+auwEdeBdrb/ZbAcAbKTmRQGIzCLt6SZKU03Ta2HWvi2zC2g2CWgHA6xJ++FzgE4RBejdgT+DVwDcJOY1T+YuEnyVJUhGvJ11K+8XAfwKvAvYmbCh0HOHd/dxEdUDY5RcIWwauJH7v4RXABxl558ApwLkJ6hoAbojpvWrNXAC9yVwA6kW/J82Y9kPCGDmccYSVcMsT1LW6VddfJPiw5cAJHZyw0xN1oBv3K1B+BgC9yQBAvWYKabL8nd5BnScAyxLUeXI/adbVfwC4qIN//xFgdmSd/cDhkZ8hSVJR+xD/+P9XhDGxXRcRnrbHOjJFAHAL4Z1FJwYIqw5WRda9Z+TxkiQVFTt+rgTeQxgTO/F14LbIuvfoJz7d7jcIj0A69QDw68i6d408XpKkovaOPP5C4MECx60Gzoqse7d+4jf/uSzi2Esi654cebwkSUXFLp+PGQOjx89+4rcufCDi2LmRdW8aebwkSUXFZs2dm+lYgE36ie9AzASI2OAjdg6BJElFxY5hOcfP1f2EJXwxdo44dqfIuhdEHi9JUlErIo/POn72Aw9FfshLI47tZO+AoTwZebwkSUXNjTw+5/g5v5/4DpwKjClw3N7AsZF1z4s8XpKkouZGHv8yiq1mGwf8bWTd8/qB+yM/ZC86zyQ4BvgyxQKHdbkdsFQfna6FTn281KnY8XMs8FU6nwvwj4RcOzFugJB0IHZLwRVrP6cd/cDXEtS5HNiwWL9Vc24F3Ju2IO7vdtUon+9WwEptE8L4FzuefYn2g4DXEybAx9b5cghL6VJ0YBUhC+CEERq+E3BBgroGgGvaPFlqHgOA3tRHmNhb9O929iifbwCgMlxBmjHtl8B2I9SzEfAZwiZAsXWtBiaNBZ4hDKbHRJ6EMcDHgVOAc4DfAg+vbfTOwCuA1wDjI+tp+Z9EnyOpOwwQbhD+arR/OIzzE7ZFatcc4sdPgFcSJgWeB/wGuJdwY70DMAN4I7BVgnogBC2LWv/xDtJEMFWVlcA2iU6E6scnAL1rf4rd4dzN6OuifQKgMuxEmkfyVZY3Q3gfD/B9emtG/fnA47kbISm5WwjvQzuxCvg7wo2BVLW5hIx+vWIRa5+gtwKA5cC3sjWnc6NdIKYAM4GTgVcTv2GCpOp8CDi3zX+7kvDa0ac2Sm0cIeX8yYTX13vz/Jg5WKdBa05fB5YO/h+3BOaT/9HEaOXnI3TsEMI7xKEex9xMeLc43B9Q9eErgN7XR1hePNKkwJuBF3Xwmb4CUDumAV8Anmb978CDwEcYegXanCH+fbeVPxNWLgzp7V3QwJHKcoZf+3ga7b2HuRE4ergToFowAKiPzYC3AN8mpE79JeHiPJPOg3kDAI1kQ8LgvpjRvwt3sv42vrsS7qxzj5MjlRE3D+ojpPfN3cjhyr8M0+7TOvycNYRHjDuMdDLUswwANBQDAA3ntYRNfTr5PjwKbD3ocz7a4WdUWa6gjc33diJMCMzd2MHlAoaO+A8mvAcs8plLCHsXTBztpKhnHA/cQdx3bQXhnd7kituu8hwJXEfc92I18D1cgVQn+wGXUPw7ceGgzxtHuIHIPV4OLkMFK8M6FHi2CxrdKnMJu4QN5X8SfP4jwFuJS82ovHYDfkLa790CwnvosRX2Q2lNA84izeYprfIs4cbBnUh71+bAmRS/eVy3vGDQZ28K3Jrgc1OVFXQ2VwaA19EdaxvnArsM08ZNE7fxd4SJhOodmwH/QZgfUtZ38GbCawX1jgnAP1Pujcz9hNnh6h3jgPcAC0n3PfjqEPVMJ0y4yz1+LifiO3oCQ8+ErKr8ae2JHM6MEupcDXyHDh6XKIt+wgZWVb6u+hlx+btVjZMJNw5VfS8uJjxKVndL8XpwqDJcUrqdCZMFc42fywi7C0Y5BHgsQ+OvYPRB+HUl1u9jvu51BHAteX5UywmPDjctvZfq1IGk25e907KasKHa1NJ7qU6V8Xpw3XLfCHVvDlxeYt3DlUdIuNptW9K8a2+nrCAsxWgnVfDLK2jPvSSIopTEjsCPyXOBH1wexXkj3WIq4T1/N7yyXEh4xOy8kfw2Az5Pua8HBwjv+0cyHvh0Be1olfMIgUdyryFEFmU1/Ao6ewe/XYltGVz+F9ing7YpnYnAv9Kda2x/z/qTgFSNccAHCFub5v4eDC63Ay8rr+saQT9hvXtV7+B/1Ga79iHMMyurHQ8Q9swo1UbAuwlrYlM1/CrguILtqfJR8ErCncaWBduqzs2i2ve5RcoawiPGHcs5BRrCTOA28v/tRytzCFvIqhqHE7LbVvk3PrmD9vUDJxHmjaSq/yHgVGCDDtoRrdWR71Ms0rqLkNv4oMh2vKZA3bFlPiEI8jFfeQ4lBIa5L+CdlGcJG4E4b6Q8exLWXuf+W3dSlgOfw3kjZdqB8HpwDdX+be+i+MC7P3AG4WlRp/U+Sdgd8wRGz4I5rFTvL/uAA4CjCBsJ7QhsTzgxy4DnCI/pbidE7TcT3q2nci4hV3LVbgPeT4jmlMbWwL8Bb6N38zbMBT4I/DRzO+pkEvBxQuBd+IKX2TzC0sTvEgYqxZsIfJjwe5tQcd0rgJcCVyb4rO0JS413IYyhOxGetq8GniEEkXcSVjHcCvyRMOdFhEkWs8kX4f+C4fcqUHvGE37Iz5D/ji1VuYwQGKu4MYTHm0+Q/++ZqpiPJF4f8BfAw+T5Gy4FXl96L9W2VvawXAPIMuB0Rsi0pGG9irCUJveFuYyyCvgGzhsp4ljCnU7uv2EZxXwkxeV+PXgD7vvQtaYQ1mnnWhL0JCEQaWcZY9PtQe+9zy1aniI84Rif5MzV2/aEuUVVv8/NUZbijUO7cl/b5+O1vWfkjhKvJ8yJ0Po2J2yfmWIf7qIX3Vzfi7sI+1dofRsRJgY/yBFTpQAAE9xJREFUR56/zXPkCzoeIjzSdl+J9eV+Pegkzh42i7A+MtcFfzZhQofCqolTyPc+d91lnLmXkc3BfSVa+ghLqR4kz9+itYxzB+Aw4OpM7RggZCw8Mu501sos8r4edBlnDbRmii4mz5doCeEx38Zld7SLzQBuId8P+RLWf283jhCQPJmpTSsIAcmUzk9nbRxKuZujjFauB144qE19hF0eH8/UpjWEVyBNzkeS+/XgXcCJpfdSldqOvO8WH6Z528fuSrn7cI9W7mX0jTpaqUFzvVtspR1u0rvFMtL0dlIeIwR/Iy013YiQDyTXK4km5iOZTLo0vUXKQsLNYqWb6qhaR1D9blHrliZsH9uLF8+9gIsytXeAsMb3+A7a24s2IAQ7ubKMFknm1AtBbK/L/XqwlczJ1ToN0U+4G8+Vs7n1hduq7I5WrA6PT2cRUlHnuuDPpp5ph2cB99O757UbXmPtH9H+bpX7vF5KPc+r2rAx4U5xGXm+fK071TosD6vTBKrWnWrOmcdnUo/lYXsBvybf9+JOwpapKeS+U61TPpLcT1YeJNysSKXnjB6t3EPvPubblrxzKx6hvLkVud9VP8ro76q7VbfMrSgjZ4fvqovrxdeDaojjCHst5/hiDhDyCuxbei/TmEDe9bmtTVSqWF3hvhLta90l51pd0bpLrmJ1hbPV21eH14NqgCZdwIpq4v4K3bRevVs1NYDuhvXqe5Xey+IOpz6vB9UQrUeYuR7zlfkIs6iDgCvI90O+CXhR6b0cWe5HmEvovkeYvkIL+0rkXOGwgs5XOJStzq8H1RB7Up9JTEVtgftwD9basz7X9+Ih8k9iyj2JdjFxk2jHAq8gpKA+F/gOcBpwSMHPg/x71ndDPpLW68Fcm6+ZY0HJ9foypiJadzWLIttetLTuajYru6MRXgLcTL7vxWVUn3a4Dsto30yYZDlcHVey/i6BnTgY+O0In192uZE8T8u64fXg9NJ7qUbqxY1MipoJ3F5x/9YtvbQPd2tAnEeec9UaEKeW3VHCRlrXVty/dcu1a9tQVB9wRgf1xc43mQXM7aC+1KWq+TIHE4KmXP28CTim9F5KwDZ0/1amRe0OnJ+pXwOEmc2vKKFfVZhEePS4nDznrpV2uIzlYXXZSvtfCtQdm8+jzvlIfD2oxjqEvMlMbiDuMeW6cg9evby2ebDcQdTdpAui6jR47UXcpN4HgTdQPAjJHUSlnBTn60GJ55eHzSXPD6G1PGzHgu1v0uPrqnXDa5SiaYdzf68HCI+vi36vh/KtRO26krAipqjcr1Fi85H08vdaKsVEwozkpeT5UbSWh03ooM25J7A1YR/uXrxTOoT8E9iO7qC97Uq5CU3sRMRenEi5B3BBpvYOkPbJllSK3I/52nlX6hK26vXCu9LW3JY6LmGbWlKbFwH/QPFXV7mXUraTj2Qy9Z3bIpXixcAfyPODGQAuBw4c1Kbcm9i4D3d3bKY0eLZ0Ezax2ankPtwNnBTRvtybKQ2VdtjXg1KEbnnMtzVuY9ttuiHt8HTyb2M7G9gl8ly2YyLVrNqJ3Y64G7ZT3o/ueD1Y9f4WUikmEdYeryDPjynXdsYDwDWEvcC1vonAxwnzN3L8bXI96h8gDHIz409hR6rKO78C+BLh0XkR44D3ER59N+17cT/w2oLnTepquxHueHL9uKosvZzKtmq590yvsiwkX46LDxVob0x5Engnxec05E6pXGXpxhwXUilmAreR/0dXRmntVug+3J07jLxZ08osrSyXWyY7W52bSJ5tamPzeewFXJSh3VUUXw+qkcaRN+1wGcV9uOPlzpteRrmE8F65GxxDvqW6PyXu95E7H0nqcj1wVMT5kHpeHR7z3QEcn/rENFzuFRspylAzy7vBceSb2f4c8BmK72yYOx9JiuLrQWmQXnzMtwD34S7bruRdHlak9MJyz62A/yLfvItHiduWdxp585EUKb4elEaRe3lYO6W1bntSSedA65tB3mVZ7ZQ1PL/stFf0ej6PQzO3v92SI5251JNaj/meIf8Pd3BxH+58xhIenT5B/u/B4HIdcGR5XS9V7rwHsRPhWu3Ptc/HSMXXg1JB3fSYL3anM6UzmfAEJuf+Dq2SMsNcbq18HrnmXcQuhcvd/nWLrwelRA4FriLPD7m1D/dIe4Urj5zJWZZSXo753Hohn8dIcub6WEG4aZlSsO2ShlD1Y77YbGeqzkzCo9aqLvKzCXvr192xwB/JM5AOAJcRtx1u1e339aBUsiqWh13O+omE1N2qSOgzVCKhuuv1hDhVtP8efD0oVaqMx3yxjx6V3xTS7yvRTirhuptEeOWRK21v7Ku4VvtTpvT19aCU2Qzik5w8C3wUmFBx21WeFPNGVgCfBzaruO3dbHfy5vOInYybYr+R1eTf1lnSWq8k7gf9y+qbrAocQtz34obqm9wzcufziHnfPi2y7kcL1qsu4jaMklTMxcBBhLS9T2eofybwB8LrHp/QqGMGAJJU3ErCALw78C3CssEqjQPeQ5iE9/KK61aPMwCQpHhPEHZoPBS4MkP9U4HzCRPypLYYAEhSOn8AXkyYk/NAxXX3A/8OvKbietWjDAAkKb3ZhAl6HyNs71uVPsLs/G7OwqguYQAgSeV4DvgUYX7AN6lufsCWwBsrqks9zABAksr1GHAq8CLg+orqdFc+jcoAQJKqcTVwBPAGwo6bZdq55M9XDRgASFJ1BoDzCPMDPkvYlrcMW5f0uaoRAwBJqt5i4DRgN+CczG1RQxkASFI+reRbrXweUmUMAKR6i92i9qkkrdBoLiNsK/w24MnMbVFDGABI9fYoYbvaouYmaodGt4aQ3ntP4BuZ26IGMACQ6u054IqI43+dqiFq20LC/gFSqQwApPr7asHj5gIXJGyHpC5iACDV3y/p/E5+AHgv5S1Tk5SZAYDUDG8mJKppxwBhidqvymuOpNwMAKRmWETYiva7jLwn/Z8J+8h/ropGScpnbO4GSKrMEuBvgDOAtwBHA9MIEwXvAy4Efgg8m6uBkqpjACA1z+3AR3I3QlJevgKQJKmBDAAkSWogAwBJkhrIAECSpAYyAJAkqYEMACRJaiADAEmSGsh9AKRmGg8cCGwDLAPuBe7P2iJJlTIAkJplB+BjwBuATQb9f3cDXwS+A6yquF2SKuYrAKk5TgRuJWwHPHjwB9gD+AZwJbB1he2SlIEBgNQMxxOy+23axr89ErikzX8rqUcZAEj1twVwLjCmg2P2Bj5fTnMkdQMDAKn+/hGYVOC4twO7JG6LpC5hACDV3xsLHjcWeH3KhkjqHgYAUr1NBaZHHH9EqoZI6i4GAFK9bRV5/DZJWiGp6xgASPW2QeTx45K0QlLXMQCQJKmBDAAkSWogAwBJkhrIAECSpAYyAJAkqYEMACRJaiADAEmSGsgAQJKkBjIAkCSpgQwAJElqIAMASZIayABAkqQGMgCQJKmBDAAkSWogAwBJkhrIAECSpAYyAJAkqYEMACRJaiADAEmSGsgAQJKkBjIAkCSpgQwAJKn7LIo8/qkkrVCtGQBIUvdZCjwZcfzcRO1QjRkASFJ3uiji2F8na4VqywBAkrrTV4CBAsc9BfwocVtUQwYAktSdrge+W+C4DwELE7dFNWQAIEnd693AJR38+zOAb5fUFtWMAYAkda/lwMuB/wBWjPDvFgLvAP6hikapHsbmboAkaUQrgQ8CXwf+EpgBTANWAw8QJgv+AJf+qUMGAJLUGx4APr22SNF8BSBpJHsR7j43yN0QJTMN+FzuRig/AwBJI5lIGCxuB07O3BbF2QB4L3An4VWCGs4AQFI7dgV+QpiRvl/mtqhzswgD/5eATTO3RV3CAEBSJ2YANwFnAVtmbotGtxdhV8BfATtnbou6jAFAfRTZMUz1V8b3YixwCuGO8l04mbgbTQH+E7gVOKGEz/d6I3WRFxJ+lEXLd6pvsiowjbjvRTvlTsJadeXXCs6epNy/+fVVdUjS6LYG1lD8B31a9U1WBfqAJZQfBAwAvwB2qaZbGsIJwB1U87c+t6I+SWrTdRT/Qe+bob2qxg+pZlAYAJYBpwObVNIzAewOnE91f+MB4E2V9ExS295AsR+zqUPr7Ujing4VKY8Bf43zjMq0GWGL4OVU+7d9FPeFkLpOH53fCTxFuINQvX2BageJVrmOEIAonX7Cvv/zqP7vuQo4rvwuSipiU+B3tPdjfpqwrEv1Nw44jzxBwBrgv4HtSu9l/R1DWIaZ4++4Enhn+V2UFGM84T3scwz/Y74U2DNXA5VFH/B+YCl5BpBngX8BJpTd0RraEfgxef5uA8Bc4OiyOykpna0JEfv3gd8APyUkEjkiZ6OU3Q6EwaTqeQHrDiZuK9yeicAnMWiTJCV0OHAN+e4qr8VgdCSzCMFSrr/PbMKTB0lSDfUDbwX+TJ5BZjXhCdVWZXe0hxwM/JZ8A/+N+LhfkhpjI+AThHX8OQadxWvrH19uN7vaFOBMwkz7HH+Dxwi7CI4pu6OSpO6zGyHrX667z3to3vyAcYQ0vU+T55yvIAQeZgmUJHEcIZFMrkDgYpqxO+Us4D7ynefZuH2zJGmQqhLLDFdWEtIOTym7oxnsAVxIvoHfBE5SDe1ImN39cuAthAleryNsILJtxnapd21OeES8kjyD1QLCI/I6vJueTN5zuZBwLk3hLNXAPoRMfr+ivTu1Z4CLgA8De2Vor3rXnoS8EbnuWu+gnNz2VWg9TXmCPOeu9TRly7I7KqlcGwN/C1xN/IXhurWfZXIPtWsWcD/5AoHZwM6l9zKdGcAt5DtflwD7ld5LSaUaQ0gCUsaa7YeBUzF7m9qzAXlnri+n+2eu70reFRX30rwVFVItHQn8kfIvGtcDB1bUJ/W+bQiPlleTZ5B7lPBovZsC19aeCiPl4iizPLu2/g3L7aakKpxCtTm/lxHu7vqq6Jxq4RDaz0JZVuD6wtJ7ObI+wqTbx8lzDtYQdlXcuuyOSirfBOBc8l1Uv009Zl6rGn2ER85zyTcA/oSQ7Khqh5FmTk7Rch3hKaGkGhhP3hnXrfILnCCozkwk7yPwJVT3CHxbwl13rsyKjxCeOvi0TqqJMeSdPDS4/Ijueseq3rAdeQfHhwiDYxkmEJbSPpOpb0uB04FNSuqfpEz+k/yD/uDymVJ7rDo7lmomsA5XLgMOSNifWcADGfszG9gpYX8kdYlXkX+wH6qsIVz4pCJaaYfnkef720o7PDWiDwcBV2Rq/wBwE2FHT0k1tDX5dgprpzwObFZa79UEkwiPrnOlHX6K8Oi+k7TDW5A3Te986rMVsqRh/ID8g/xo5Sul9V5NsjvhUXau7/HdwEmjtLGVpndRpja20vQadEs1txf57jA6KasIOeOlFGYCt5Hv+zyHkE9jqHbdnrlde3d4LiX1qB+Rf3Bvt3ynpHOgZuqmO+3dgfMztWOA8GTiFXGnU1IvmU6+rVSLXjBjJlNJQ5kKfJN8v4UFhO92jrpbaXrHRZ9FST3lQ6S9mDwHXAl8DzgbuIr0Wwm/p4wTIZF/tn2VJcXqBEk97DrSXEzmEwbmjYeoYzIh0Ej1mPXqZL2XhjYL+BP5B+myyqXA/snOlqSesyNpdkq7jvaSgOwE3JqgvpU4O1nly73jXhmlzB0KJfWQ1xN/QbmDsL66XVsCDyaod7RlVFIq08i7rXCKYppeSf/HJ4i7qKwGDi1Q78zIegeAjxSoV4qRO+tekZIzS6GkLnYecReX2RF1x+ZvPzuibqmoVtrhh8g/uI9WrgeOKuc0SOp1sRMA3xZR93sj654TUbcUayPyph0eqTwKnIJZNCWN4GbiLjQxWc6Oiaz72oi6pVS2J8wPyD3oDxCW256JaXolteEO4i44O0XUfWBk3TdH1C2l9hLiA+qYMhvYufReSqqNe4i76BwUUffLIuu+IqJuqQyttMNVZtW8Azi+is5JKfl+Kr95kccXWQHQcnBk3Qsij5dSW0N4HbAH8FnC1r5lWQi8D9gP+E2J9UiqqXOIu/u4uGC9fcBNkXV/q2DdUlX2AC4g7R3/CuAsYEqF/ZBUQ58i/oL04gL1vi5BvR8sUK+UQ6r0vnOAfStuu6SaOpn4i9IDwFYd1LkTad6RvrBIh6VMYtIO30P4rUpSMpsDq4gfjG8Ddmmjvv0JAUNsfctwS1P1pi0IS/Xa+d0tJuw1MD5HQyXV37XED8jrXqy2GaKO6cB/EAbuFHVdnqjvUi6HELboXcH63+8ngc9hml7VWF/uBgiAfybMBUhlDWFp0lzCY8/pwO4JPx/g7cD3En+mlMNWhNU004GlhBTE1xKCZUkq1VS6czvTkZ40bFzKmZAkVcJ9ALrDE8CPcjeiA/9NSG0qSZIi7UdI7Zv77n60sgTYrqRzIElSI32N/AP8aOUTZXVekqSm2hR4hPyD/HDlIUIKVkmSlNirCLP4cw/2g8sK4KgS+y1JUuN9jPwD/uDy96X2WJIk0QecTf5Bv1VM+iNJUkU2AH5G/sH/a7hhlCRJleonbN+ba/D/LA7+kiRlcyphi9KqBv4FmPlMkqSusCtwMeUP/hfjRj+SJHWVPuAtwN2kH/hvBE6qriuSJKlT/YTB+mLi9gxYDlwIvBrf9UuS1FO2Bt4K/ICwU99I+QRWALcD5649ZlKG9kqSuoB3ffWzAbADsC0wbu3/tgxYCNxHCAIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkqUr/H8I0K4akcBAqAAAAAElFTkSuQmCC"
  }))));
}

var _path$$, _path2$a, _path3$3, _path4$1, _circle, _circle2, _circle3, _circle4, _circle5;

function _extends$$() { _extends$$ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$$.apply(this, arguments); }

function SvgStereoWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$$({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$$ || (_path$$ = /*#__PURE__*/React.createElement("path", {
    d: "M6.269 3.233l1.733 1m0 0l1.767-1m-1.767 1v1.234M2.97 9.433l1.533.867m0 0l1.067-.633m-1.067.633v1.767",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$a || (_path2$a = /*#__PURE__*/React.createElement("path", {
    d: "M8.001 6.385l1.63.94v1.883l-1.63.94-1.63-.94V7.326l1.63-.941z",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinejoin: "round"
  })), _path3$3 || (_path3$3 = /*#__PURE__*/React.createElement("path", {
    d: "M9.6 9.185l1.63.94v1.883l-1.63.94-1.629-.94v-1.882l1.63-.941z",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinejoin: "round"
  })), _path4$1 || (_path4$1 = /*#__PURE__*/React.createElement("path", {
    d: "M8.135 7.467l.666.383v.817M9.8 10.267l.667.383v.817M11.232 10.167l1.734-1.034",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 5.268,
    cy: 2.6,
    r: 0.6,
    fill: "#fff"
  })), _circle2 || (_circle2 = /*#__PURE__*/React.createElement("circle", {
    cx: 10.735,
    cy: 2.6,
    r: 0.6,
    fill: "#fff"
  })), _circle3 || (_circle3 = /*#__PURE__*/React.createElement("circle", {
    cx: 1.934,
    cy: 8.8,
    r: 0.6,
    fill: "#fff"
  })), _circle4 || (_circle4 = /*#__PURE__*/React.createElement("circle", {
    cx: 4.467,
    cy: 13.333,
    r: 0.6,
    fill: "#fff"
  })), _circle5 || (_circle5 = /*#__PURE__*/React.createElement("circle", {
    cx: 14.067,
    cy: 8.533,
    r: 0.6,
    fill: "#fff"
  })));
}

var _path$_, _path2$9;

function _extends$_() { _extends$_ = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$_.apply(this, arguments); }

function SvgAtoms(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$_({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$_ || (_path$_ = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.082 24c-1.306-1.944-2.363-3.86-3.132-5.673-.885-2.086-1.432-4.132-1.474-5.986-.042-1.86.428-3.71 1.791-5.073 1.364-1.363 3.213-1.833 5.073-1.79 1.854.042 3.9.588 5.986 1.473 1.813.77 3.729 1.826 5.673 3.132 1.944-1.306 3.86-2.363 5.673-3.132 2.085-.885 4.132-1.431 5.985-1.474 1.86-.042 3.71.428 5.073 1.791 1.364 1.364 1.834 3.213 1.791 5.073-.042 1.854-.588 3.9-1.473 5.986-.77 1.813-1.826 3.729-3.132 5.673 1.306 1.944 2.363 3.86 3.132 5.673.885 2.086 1.431 4.132 1.473 5.986.043 1.86-.427 3.71-1.79 5.073-1.364 1.363-3.213 1.833-5.074 1.79-1.853-.042-3.9-.588-5.985-1.473-1.813-.77-3.729-1.826-5.673-3.132-1.944 1.306-3.86 2.363-5.673 3.132-2.086.885-4.133 1.431-5.986 1.474-1.86.042-3.71-.428-5.073-1.791-1.363-1.364-1.833-3.213-1.79-5.073.041-1.854.588-3.9 1.473-5.986.769-1.813 1.826-3.729 3.132-5.673zm2.545-3.433a28.55 28.55 0 01-1.995-3.802c-.767-1.807-1.13-3.337-1.157-4.515-.026-1.17.275-1.807.62-2.153.347-.346.983-.647 2.154-.62 1.178.026 2.708.39 4.514 1.156 1.2.51 2.48 1.178 3.803 1.995a54.476 54.476 0 00-4.171 3.768 54.458 54.458 0 00-3.768 4.171zm7.939 14.805a28.557 28.557 0 01-3.802 1.995c-1.807.767-3.337 1.13-4.515 1.157-1.171.026-1.807-.275-2.153-.62-.346-.347-.647-.983-.62-2.154.026-1.178.39-2.708 1.156-4.515.51-1.2 1.178-2.479 1.995-3.802a54.457 54.457 0 003.768 4.171 54.457 54.457 0 004.17 3.768zm3.433-2.384a49.694 49.694 0 01-4.776-4.212A49.694 49.694 0 0115.011 24a49.694 49.694 0 014.212-4.776 49.708 49.708 0 014.776-4.212 49.708 49.708 0 014.776 4.212A49.708 49.708 0 0132.987 24a49.708 49.708 0 01-4.212 4.776 49.694 49.694 0 01-4.776 4.212zm3.433 2.384a28.55 28.55 0 003.802 1.995c1.806.767 3.337 1.13 4.514 1.157 1.172.026 1.808-.275 2.154-.62.346-.347.647-.983.62-2.154-.026-1.178-.39-2.708-1.156-4.515a28.556 28.556 0 00-1.995-3.802 54.5 54.5 0 01-3.768 4.171 54.458 54.458 0 01-4.171 3.768zm7.939-14.805a28.563 28.563 0 001.995-3.802c.766-1.807 1.13-3.337 1.156-4.515.027-1.17-.274-1.807-.62-2.153-.346-.346-.983-.647-2.154-.62-1.177.026-2.708.39-4.514 1.156-1.2.51-2.479 1.178-3.802 1.995a54.457 54.457 0 014.171 3.768 54.5 54.5 0 013.767 4.171z",
    fill: "#231F20"
  })), _path2$9 || (_path2$9 = /*#__PURE__*/React.createElement("path", {
    d: "M23.998 25.998a2 2 0 100-4 2 2 0 000 4z",
    fill: "#231F20"
  })));
}

var _path$Z, _path2$8;

function _extends$Z() { _extends$Z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Z.apply(this, arguments); }

function SvgAtomsWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Z({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Z || (_path$Z = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.082 24c-1.306-1.944-2.363-3.86-3.132-5.673-.885-2.086-1.432-4.132-1.474-5.986-.042-1.86.428-3.71 1.791-5.073 1.364-1.363 3.213-1.833 5.073-1.79 1.854.042 3.9.588 5.986 1.473 1.813.77 3.729 1.826 5.673 3.132 1.944-1.306 3.86-2.363 5.673-3.132 2.085-.885 4.132-1.431 5.985-1.474 1.86-.042 3.71.428 5.073 1.791 1.364 1.364 1.834 3.213 1.791 5.073-.042 1.854-.588 3.9-1.473 5.986-.77 1.813-1.826 3.729-3.132 5.673 1.306 1.944 2.363 3.86 3.132 5.673.885 2.086 1.431 4.132 1.473 5.986.043 1.86-.427 3.71-1.79 5.073-1.364 1.363-3.213 1.833-5.074 1.79-1.853-.042-3.9-.588-5.985-1.473-1.813-.77-3.729-1.826-5.673-3.132-1.944 1.306-3.86 2.363-5.673 3.132-2.086.885-4.133 1.431-5.986 1.474-1.86.042-3.71-.428-5.073-1.791-1.363-1.364-1.833-3.213-1.79-5.073.041-1.854.588-3.9 1.473-5.986.769-1.813 1.826-3.729 3.132-5.673zm2.545-3.433a28.55 28.55 0 01-1.995-3.802c-.767-1.807-1.13-3.337-1.157-4.515-.026-1.17.275-1.807.62-2.153.347-.346.983-.647 2.154-.62 1.178.026 2.708.39 4.514 1.156 1.2.51 2.48 1.178 3.803 1.995a54.476 54.476 0 00-4.171 3.768 54.458 54.458 0 00-3.768 4.171zm7.939 14.805a28.557 28.557 0 01-3.802 1.995c-1.807.767-3.337 1.13-4.515 1.157-1.171.026-1.807-.275-2.153-.62-.346-.347-.647-.983-.62-2.154.026-1.178.39-2.708 1.156-4.515.51-1.2 1.178-2.479 1.995-3.802a54.457 54.457 0 003.768 4.171 54.457 54.457 0 004.17 3.768zm3.433-2.384a49.694 49.694 0 01-4.776-4.212A49.694 49.694 0 0115.011 24a49.694 49.694 0 014.212-4.776 49.708 49.708 0 014.776-4.212 49.708 49.708 0 014.776 4.212A49.708 49.708 0 0132.987 24a49.708 49.708 0 01-4.212 4.776 49.694 49.694 0 01-4.776 4.212zm3.433 2.384a28.55 28.55 0 003.802 1.995c1.806.767 3.337 1.13 4.514 1.157 1.172.026 1.808-.275 2.154-.62.346-.347.647-.983.62-2.154-.026-1.178-.39-2.708-1.156-4.515a28.556 28.556 0 00-1.995-3.802 54.5 54.5 0 01-3.768 4.171 54.458 54.458 0 01-4.171 3.768zm7.939-14.805a28.563 28.563 0 001.995-3.802c.766-1.807 1.13-3.337 1.156-4.515.027-1.17-.274-1.807-.62-2.153-.346-.346-.983-.647-2.154-.62-1.177.026-2.708.39-4.514 1.156-1.2.51-2.479 1.178-3.802 1.995a54.457 54.457 0 014.171 3.768 54.5 54.5 0 013.767 4.171z",
    fill: "#FFF"
  })), _path2$8 || (_path2$8 = /*#__PURE__*/React.createElement("path", {
    d: "M23.998 25.998a2 2 0 100-4 2 2 0 000 4z",
    fill: "#FFF"
  })));
}

var _path$Y;

function _extends$Y() { _extends$Y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Y.apply(this, arguments); }

function SvgBonds(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Y({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Y || (_path$Y = /*#__PURE__*/React.createElement("path", {
    d: "M8 2.5v11M3.238 5.25l9.527 5.5M3.238 10.75l9.527-5.5",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$X;

function _extends$X() { _extends$X = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }

function SvgBondsWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$X({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$X || (_path$X = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 6.044a2 2 0 012 2v12.492l10.818-6.246a2 2 0 112 3.464L28 24l10.818 6.246a2 2 0 01-2 3.464L26 27.464v12.492a2 2 0 01-4 0V27.464L11.182 33.71a2 2 0 01-2-3.464L20 24 9.182 17.754a2 2 0 012-3.464L22 20.536V8.044a2 2 0 012-2z",
    fill: "#FFF"
  })));
}

var _path$W, _path2$7, _path3$2;

function _extends$W() { _extends$W = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }

function SvgServer(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$W({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$W || (_path$W = /*#__PURE__*/React.createElement("path", {
    d: "M8 8c3.038 0 5.5-1.343 5.5-3S11.038 2 8 2 2.5 3.343 2.5 5 4.962 8 8 8z",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$7 || (_path2$7 = /*#__PURE__*/React.createElement("path", {
    d: "M2.5 5v3c0 1.657 2.462 3 5.5 3s5.5-1.343 5.5-3V5",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3$2 || (_path3$2 = /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8v3c0 1.657 2.462 3 5.5 3s5.5-1.343 5.5-3V8",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$V, _path2$6, _path3$1;

function _extends$V() { _extends$V = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }

function SvgServerWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$V({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$V || (_path$V = /*#__PURE__*/React.createElement("path", {
    d: "M8 8c3.038 0 5.5-1.343 5.5-3S11.038 2 8 2 2.5 3.343 2.5 5 4.962 8 8 8z",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React.createElement("path", {
    d: "M2.5 5v3c0 1.657 2.462 3 5.5 3s5.5-1.343 5.5-3V5",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8v3c0 1.657 2.462 3 5.5 3s5.5-1.343 5.5-3V8",
    stroke: "#fff",
    strokeWidth: 0.667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$U, _path2$5;

function _extends$U() { _extends$U = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }

function Svg3D(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$U({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$U || (_path$U = /*#__PURE__*/React.createElement("path", {
    d: "M14 11.081V4.916a.5.5 0 00-.255-.436l-5.5-3.094a.5.5 0 00-.49 0l-5.5 3.094A.5.5 0 002 4.916v6.165a.5.5 0 00.255.436l5.5 3.094a.5.5 0 00.49 0l5.5-3.094a.5.5 0 00.255-.436z",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "M13.932 4.665L8.06 8.001 2.07 4.664M8.059 8L8 14.676",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$T, _path2$4;

function _extends$T() { _extends$T = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }

function Svg3DWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$T({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$T || (_path$T = /*#__PURE__*/React.createElement("path", {
    d: "M14 11.081V4.916a.5.5 0 00-.255-.436l-5.5-3.094a.5.5 0 00-.49 0l-5.5 3.094A.5.5 0 002 4.916v6.165a.5.5 0 00.255.436l5.5 3.094a.5.5 0 00.49 0l5.5-3.094a.5.5 0 00.255-.436z",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    d: "M13.932 4.665L8.06 8.001 2.07 4.665M8.059 8L8 14.676",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$S;

function _extends$S() { _extends$S = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }

function SvgDebugging(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$S({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$S || (_path$S = /*#__PURE__*/React.createElement("path", {
    d: "M8 2h0a4.5 4.5 0 00-4.5 4.5v3A4.5 4.5 0 008 14h0a4.5 4.5 0 004.5-4.5v-3A4.5 4.5 0 008 2zM12.5 8.5H14M2 8.5h1.5M2 10.5h1.612M2 6.5h12M8 8.5V14M12.389 10.5H14M3.496 1.75l1.485 1.413M12.495 1.75l-1.481 1.409",
    stroke: "#5B6077",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$R;

function _extends$R() { _extends$R = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

function SvgDebuggingWhite(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$R({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$R || (_path$R = /*#__PURE__*/React.createElement("path", {
    d: "M8 2h0a4.5 4.5 0 00-4.5 4.5v3A4.5 4.5 0 008 14h0a4.5 4.5 0 004.5-4.5v-3A4.5 4.5 0 008 2zM12.5 8.5H14M2 8.5h1.5M2 10.5h1.612M2 6.5h12M8 8.5V14M12.389 10.5H14M3.496 1.75l1.485 1.413M12.495 1.75l-1.481 1.409",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

var _path$Q;

function _extends$Q() { _extends$Q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

function SvgDropdownIndicator(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Q({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Q || (_path$Q = /*#__PURE__*/React.createElement("path", {
    d: "M4.94 5.727L8 8.78l3.06-3.053.94.94-4 4-4-4 .94-.94z",
    fill: "#5B6077"
  })));
}

var _path$P;

function _extends$P() { _extends$P = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

function SvgChevron(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$P({
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$P || (_path$P = /*#__PURE__*/React.createElement("path", {
    d: "M24 33.23L9.782 19.012l2.828-2.828L24 27.574l11.388-11.39 2.83 2.828L24 33.23z",
    fill: "#231F20"
  })));
}

var _path$O;

function _extends$O() { _extends$O = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

function SvgFullscreenEnter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$O({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$O || (_path$O = /*#__PURE__*/React.createElement("path", {
    d: "M8.75 3.75h-5v5h1.5V6.312L9 10.063l1-1.124L6.312 5.25H8.75v-1.5zM15.25 3.75h5v5h-1.5V6.312L15 10.063l-1-1.124 3.688-3.688H15.25v-1.5zM15.25 20.25h5v-5h-1.5v2.438L15 13.938l-1 1.124 3.688 3.688H15.25v1.5zM8.75 20.25h-5v-5h1.5v2.438L9 13.938l1 1.124-3.688 3.688H8.75v1.5z",
    fill: "currentColor"
  })));
}

var _path$N;

function _extends$N() { _extends$N = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

function SvgFullscreenExit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$N({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$N || (_path$N = /*#__PURE__*/React.createElement("path", {
    d: "M19.25 14.25h-5v5h1.5v-2.438l3.75 3.75 1-1.125-3.688-3.687h2.438v-1.5zM5 14.25h5v5H8.5v-2.438l-3.75 3.75-1-1.125 3.688-3.687H5v-1.5zM5 10.063h5v-5H8.5V7.5L4.75 3.75l-1 1.125 3.688 3.688H5v1.5zM19.25 10.063h-5v-5h1.5V7.5l3.75-3.75 1 1.125-3.688 3.688h2.438v1.5z",
    fill: "currentColor"
  })));
}

var _path$M;

function _extends$M() { _extends$M = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

function Svg$n(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$M({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$M || (_path$M = /*#__PURE__*/React.createElement("path", {
    d: "M7.744 11.136a2.48 2.48 0 01-1.436-.443c-.412-.29-.733-.69-.963-1.202C5.115 8.98 5 8.391 5 7.727c0-.659.12-1.24.362-1.743A2.9 2.9 0 016.355 4.8c.423-.287.905-.43 1.445-.43.383 0 .72.072 1.01.216.29.143.537.341.741.597.208.256.378.553.511.89h.444l.251 1.637.835 3.29h-1.09l-.785-3.29a6.215 6.215 0 00-.191-.703 3.787 3.787 0 00-.337-.742 1.898 1.898 0 00-.528-.583 1.259 1.259 0 00-.763-.23c-.327 0-.614.098-.861.294a1.868 1.868 0 00-.575.805 3.195 3.195 0 00-.205 1.185c0 .437.065.83.196 1.18.134.35.318.625.554.827.236.199.511.298.827.298.287 0 .538-.078.754-.234.216-.157.4-.355.55-.597.15-.241.273-.493.366-.754.097-.264.168-.502.213-.712l.704-3.29h1.086l-.75 3.29-.251 1.658H10.1c-.137.338-.313.639-.529.903a2.268 2.268 0 01-.775.614c-.301.148-.652.22-1.053.217z"
  })));
}

var _path$L;

function _extends$L() { _extends$L = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

function Svg$m(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$L({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$L || (_path$L = /*#__PURE__*/React.createElement("path", {
    d: "M7.237 6.954h.84c.6 0 1.093.124 1.483.371.392.245.683.561.873.95.19.387.286.795.286 1.223 0 .498-.117.944-.35 1.339a2.53 2.53 0 01-.954.933c-.404.227-.862.34-1.377.34a2.75 2.75 0 01-.912-.157c-.298-.108-.568-.308-.81-.6l-.063.029V9.507c0 .264.064.508.192.733.127.224.31.403.545.537.236.133.517.2.844.2.338 0 .628-.07.87-.209.243-.142.432-.328.566-.558.133-.233.2-.487.2-.763 0-.272-.064-.522-.192-.75a1.44 1.44 0 00-1.3-.759h-.74v-.984zm.465-3.8c.397 0 .758.062 1.082.187.324.122.602.291.835.507.233.213.412.459.537.737.125.279.188.573.188.882 0 .375-.095.745-.286 1.108a2.313 2.313 0 01-.852.904c-.378.238-.852.358-1.423.358h-.546v-.96h.443c.316 0 .579-.063.789-.191.21-.13.368-.295.473-.494.105-.202.157-.41.157-.627a1.16 1.16 0 00-.4-.903c-.264-.239-.597-.358-.997-.358-.267 0-.51.055-.729.166-.219.11-.393.269-.524.473-.13.202-.196.438-.196.707v8.804H5V5.617c0-.483.118-.909.354-1.278.235-.372.557-.662.963-.87.409-.21.87-.315 1.385-.315z"
  })));
}

var _path$K;

function _extends$K() { _extends$K = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

function Svg$l(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$K({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$K || (_path$K = /*#__PURE__*/React.createElement("path", {
    d: "M5 4h1.338l1.573 4.828L9.44 4h1.337L8.52 10.435V13H7.276v-2.565L5 4z"
  })));
}

var _path$J;

function _extends$J() { _extends$J = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

function Svg$k(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$J({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$J || (_path$J = /*#__PURE__*/React.createElement("path", {
    d: "M6.271 4.585a1.474 1.474 0 01.614-1.244c.415-.313.983-.469 1.704-.469.299 0 .57.026.814.077.245.048.502.12.772.217v1.12a5.532 5.532 0 00-.678-.208 3.45 3.45 0 00-.848-.107c-.332 0-.585.057-.758.171a.517.517 0 00-.162.746c.062.105.177.214.345.328.167.11.41.223.729.336.897.313 1.555.745 1.973 1.296.417.551.626 1.223.626 2.016v.119c0 .6-.118 1.136-.354 1.61a2.693 2.693 0 01-1.005 1.117c-.435.273-.954.41-1.556.41-.616 0-1.145-.136-1.585-.406a2.67 2.67 0 01-1.006-1.108c-.233-.468-.35-.998-.35-1.589v-.12c0-.443.086-.85.257-1.222.17-.373.399-.686.686-.942.29-.256.609-.426.958-.511l-.004-.035a2.157 2.157 0 01-.86-.647 1.533 1.533 0 01-.312-.955zm.652 4.253v.11c0 .384.056.732.166 1.045.114.312.286.562.516.75.233.184.527.277.882.277.35 0 .638-.092.865-.277a1.67 1.67 0 00.507-.75c.111-.313.167-.66.167-1.044v-.111c0-.307-.064-.607-.192-.9a2.221 2.221 0 00-.541-.758 1.648 1.648 0 00-.806-.413c-.355 0-.648.095-.878.285-.23.188-.402.438-.515.75a3.01 3.01 0 00-.17 1.036z"
  })));
}

var _path$I;

function _extends$I() { _extends$I = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

function Svg$j(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$I({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$I || (_path$I = /*#__PURE__*/React.createElement("path", {
    d: "M8.06 8.582h1.027v.55h-.831c-.276 0-.52.043-.733.128-.21.085-.377.203-.499.353a.802.802 0 00-.179.52c0 .27.135.493.405.67.27.173.635.26 1.095.26.452 0 .797-.08 1.036-.24.238-.158.392-.4.46-.724h1.283a1.955 1.955 0 01-.269.844c-.148.25-.345.463-.592.64-.245.172-.53.306-.857.4-.324.09-.679.136-1.065.136a4.065 4.065 0 01-1.423-.234c-.418-.156-.749-.377-.993-.66a1.498 1.498 0 01-.362-1.002c0-.193.038-.387.115-.58.08-.193.211-.369.396-.528.187-.16.442-.287.763-.384.324-.1.731-.149 1.223-.149zm1.027.269H8.06c-.472 0-.863-.047-1.172-.141-.31-.094-.553-.216-.729-.366a1.332 1.332 0 01-.375-.508 1.557 1.557 0 01-.106-.554c0-.403.112-.747.336-1.03.225-.288.536-.506.933-.657.398-.15.858-.226 1.381-.226.503 0 .948.077 1.334.23.39.15.7.37.933.656.233.285.37.627.413 1.027H9.723a.957.957 0 00-.456-.634c-.245-.157-.567-.235-.968-.235-.42 0-.751.087-.993.26-.241.173-.363.392-.366.656.003.248.115.446.337.597.221.148.548.222.98.222h.83v.703z"
  })));
}

var _path$H;

function _extends$H() { _extends$H = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

function Svg$i(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$H({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$H || (_path$H = /*#__PURE__*/React.createElement("path", {
    d: "M10.04 3.273h.711v.835L8.69 6.746c-.299.386-.556.726-.772 1.018a3.98 3.98 0 00-.494.87c-.114.29-.17.628-.17 1.014 0 .281.085.526.255.733.17.204.408.35.712.439l.677.204c.515.154.914.354 1.198.601.284.245.426.514.426.81 0 .295-.105.604-.315.925-.21.32-.499.622-.865.903l-.712-.58c.176-.19.31-.374.4-.553.094-.18.143-.333.145-.46.003-.114-.068-.225-.213-.333a1.833 1.833 0 00-.596-.264l-.499-.141c-.6-.165-1.065-.439-1.398-.822a2.003 2.003 0 01-.498-1.356c0-.366.037-.7.11-1 .077-.305.187-.595.329-.87.142-.276.315-.55.52-.823.204-.275.437-.568.698-.878l2.412-2.91zm-4.505 0h4.709v1.13H5.535v-1.13z"
  })));
}

var _path$G;

function _extends$G() { _extends$G = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

function Svg$h(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$G({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$G || (_path$G = /*#__PURE__*/React.createElement("path", {
    d: "M6.13 7.113V11H4.855V4.454h1.223V5.52h.081c.154-.35.391-.628.712-.836.321-.21.727-.315 1.219-.315.449 0 .84.094 1.172.281.335.185.595.46.78.827.184.367.277.82.277 1.36v6.617H9.043V6.99c0-.475-.123-.845-.37-1.112-.245-.27-.584-.405-1.019-.405-.292 0-.554.064-.784.192a1.37 1.37 0 00-.545.562c-.131.244-.196.54-.196.886z"
  })));
}

var _path$F;

function _extends$F() { _extends$F = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

function Svg$g(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$F({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$F || (_path$F = /*#__PURE__*/React.createElement("path", {
    d: "M10.611 7.172v1.082H6.388V7.172h4.223zm.66-.09v1.193c0 .878-.116 1.601-.349 2.17-.23.568-.554.99-.971 1.265-.418.273-.907.41-1.466.41-.56 0-1.051-.137-1.475-.41-.423-.276-.753-.697-.988-1.266-.236-.568-.354-1.29-.354-2.169V7.082c0-.87.116-1.584.35-2.143.232-.56.56-.975.98-1.245.42-.27.91-.404 1.47-.404.565 0 1.056.134 1.474.404.42.27.747.685.98 1.245.233.56.35 1.274.35 2.143zm-1.27 1.398V6.873c0-.55-.063-1.011-.191-1.38-.128-.372-.307-.65-.537-.836a1.237 1.237 0 00-.805-.28c-.46 0-.833.212-1.117.638-.284.427-.426 1.046-.426 1.858V8.48c0 .818.144 1.447.43 1.888.29.44.667.66 1.13.66.307 0 .572-.096.797-.29.227-.193.403-.478.528-.856.128-.38.192-.848.192-1.402z"
  })));
}

var _path$E;

function _extends$E() { _extends$E = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

function Svg$f(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$E({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$E || (_path$E = /*#__PURE__*/React.createElement("path", {
    d: "M6.875 5.455h1.257l-.008 4.78c.002.293.076.484.221.572.148.085.318.128.512.128.093 0 .187-.009.28-.026a4.19 4.19 0 00.218-.043v1.079a3.083 3.083 0 01-.925.136c-.457 0-.83-.133-1.12-.4-.29-.268-.435-.725-.435-1.373V5.455z"
  })));
}

var _path$D;

function _extends$D() { _extends$D = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

function Svg$e(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$D({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$D || (_path$D = /*#__PURE__*/React.createElement("path", {
    d: "M6.354 5.455V12H4.969V5.455h1.385zm4.423 0L7.611 9.324H5.987l-.196-1.24h1.16l2.121-2.63h1.705zM9.009 12L6.805 9.226l1.002-.86L10.76 12H9.009z"
  })));
}

var _path$C;

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

function Svg$d(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$C({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$C || (_path$C = /*#__PURE__*/React.createElement("path", {
    d: "M10.18 12.094c-.35 0-.657-.097-.921-.29-.261-.196-.465-.492-.61-.886L7.236 6.873 6.792 5.8l-.252-.648c-.11-.281-.227-.492-.35-.63a.698.698 0 00-.447-.244c-.176-.022-.4.002-.673.073L4.763 3.29a2.02 2.02 0 01.337-.094c.142-.028.3-.043.477-.043.492 0 .908.128 1.249.384.34.253.606.632.797 1.138l2.151 5.774c.06.156.124.288.192.396.068.108.186.162.354.162.031 0 .07-.001.115-.004l.102-.013.205 1.035c-.083.023-.175.04-.277.052-.1.014-.195.02-.286.017zM4.37 12l2.57-6.916.652 2.267h-.265L5.722 12h-1.35z"
  })));
}

var _path$B;

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

function Svg$c(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$B({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$B || (_path$B = /*#__PURE__*/React.createElement("path", {
    d: "M4.855 14.429V5.455H6.13v3.83c0 .324.07.61.208.857.142.247.34.44.593.58.255.136.552.204.89.204.338 0 .634-.07.887-.209.255-.139.453-.33.592-.575.142-.247.213-.533.213-.856V5.455h1.274V12H9.534v-.959h-.05c-.16.324-.388.573-.687.746-.298.17-.623.256-.976.256-.352 0-.677-.086-.975-.256a1.774 1.774 0 01-.69-.746h-.052v3.388H4.855z"
  })));
}

var _path$A;

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

function Svg$b(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$A({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$A || (_path$A = /*#__PURE__*/React.createElement("path", {
    d: "M6.804 12L4.371 5.455h1.355l1.794 5.237h.068c.33-.529.6-1.013.81-1.453a8.19 8.19 0 00.494-1.27c.12-.406.205-.813.256-1.219.054-.406.09-.838.107-1.295h1.257a9.816 9.816 0 01-.631 3.34C9.471 9.913 8.867 10.98 8.066 12H6.804z"
  })));
}

var _path$z;

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

function Svg$a(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$z({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$z || (_path$z = /*#__PURE__*/React.createElement("path", {
    d: "M10.635 3.418l-.204 1.073c-.517-.147-.969-.221-1.355-.221-.324 0-.601.041-.831.123-.23.083-.407.205-.529.367a.945.945 0 00-.179.584c0 .36.147.636.44.826.292.19.707.286 1.244.286h.86v.805h-.89c-.628 0-1.17-.08-1.624-.238-.452-.162-.8-.392-1.044-.69a1.664 1.664 0 01-.366-1.083c0-.42.119-.787.358-1.1.241-.315.576-.56 1.005-.732.432-.177.933-.265 1.505-.265.3 0 .59.023.869.068.281.046.528.111.741.197zM9.203 6.784h.878v.793h-.843c-.458 0-.846.065-1.164.196-.315.127-.554.32-.716.575-.162.253-.243.57-.243.954 0 .42.127.77.38 1.049.255.278.633.476 1.133.592l.678.154c.568.13.974.298 1.219.502a.982.982 0 01.366.789c-.006.21-.058.429-.158.656a2.838 2.838 0 01-.405.665c-.173.219-.375.42-.605.605l-.758-.567c.238-.253.395-.459.469-.618a.963.963 0 00.11-.392.462.462 0 00-.183-.388c-.122-.093-.33-.173-.622-.238l-.575-.167c-.841-.193-1.458-.49-1.85-.89-.389-.4-.584-.938-.584-1.61 0-.873.297-1.534.891-1.982.597-.452 1.457-.678 2.582-.678z"
  })));
}

var _path$y;

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

function Svg$9(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$y({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$y || (_path$y = /*#__PURE__*/React.createElement("path", {
    d: "M7.614 12.132c-.614 0-1.15-.14-1.607-.422a2.845 2.845 0 01-1.065-1.18c-.253-.506-.38-1.097-.38-1.773 0-.68.127-1.273.38-1.781A2.84 2.84 0 016.007 5.79c.457-.281.993-.422 1.607-.422.613 0 1.149.14 1.606.422.458.281.813.676 1.066 1.185.252.508.379 1.102.379 1.78 0 .677-.127 1.268-.38 1.774-.252.505-.607.899-1.065 1.18-.457.281-.993.422-1.606.422zm.004-1.07c.398 0 .727-.105.989-.315.26-.21.454-.49.58-.84.127-.349.19-.734.19-1.154 0-.418-.063-.801-.19-1.15a1.874 1.874 0 00-.58-.849c-.262-.213-.591-.32-.99-.32-.4 0-.732.107-.996.32a1.904 1.904 0 00-.584.848c-.125.35-.188.733-.188 1.15 0 .421.063.806.188 1.155.128.35.322.63.584.84.264.21.596.315.997.315z"
  })));
}

var _path$x;

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

function Svg$8(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$x({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$x || (_path$x = /*#__PURE__*/React.createElement("path", {
    d: "M11.251 5.455v1.07H4.535v-1.07h6.716zm-4.457 0V12H5.537V5.455h1.257zm2.224 0h1.257v4.78c0 .197.033.345.098.444.068.1.157.168.264.205.111.034.23.05.358.05.094 0 .188-.008.282-.025.096-.017.173-.031.23-.043v1.07c-.108.031-.24.063-.397.094a2.579 2.579 0 01-.545.051c-.457 0-.83-.133-1.116-.4-.285-.268-.428-.725-.43-1.373V5.455z"
  })));
}

var _path$w;

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

function Svg$7(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$w({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$w || (_path$w = /*#__PURE__*/React.createElement("path", {
    d: "M5.805 14.437v-5.83c0-.715.116-1.313.35-1.793.235-.48.56-.841.975-1.083.415-.241.89-.362 1.423-.362.469 0 .878.087 1.228.26.349.17.642.413.877.729.236.315.412.689.529 1.12.12.43.179.902.179 1.42v.119c0 .608-.107 1.145-.32 1.61-.213.467-.517.832-.912 1.096-.392.264-.86.396-1.406.396-.466 0-.852-.1-1.16-.298a2.274 2.274 0 01-.75-.84 6.241 6.241 0 01-.498-1.274l.716-.66c0 .204.024.422.073.652.048.23.13.446.247.647.116.202.273.368.469.499.198.128.447.192.745.192.358 0 .648-.095.87-.286.224-.19.387-.439.49-.745.102-.307.153-.637.153-.99v-.118c0-.45-.054-.856-.162-1.22-.105-.363-.271-.651-.498-.864-.228-.213-.523-.32-.887-.32-.358 0-.649.107-.873.32-.222.21-.382.48-.482.81-.1.329-.148.671-.145 1.026l.026 5.787H5.805z"
  })));
}

var _path$v;

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

function Svg$6(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$v({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$v || (_path$v = /*#__PURE__*/React.createElement("path", {
    d: "M4.715 8.898V8.76c0-.585.115-1.112.345-1.58.23-.47.563-.84.997-1.113.435-.272.959-.409 1.573-.409a.659.659 0 01.315.18c.1.09.214.19.345.302.13.108.301.2.511.277.336.13.633.32.891.57.261.25.466.549.614.896.148.343.221.721.221 1.133v.12a3.25 3.25 0 01-.34 1.474 2.737 2.737 0 01-.98 1.095c-.43.276-.95.413-1.56.413-.62 0-1.148-.142-1.586-.426a2.79 2.79 0 01-1.001-1.155 3.786 3.786 0 01-.345-1.64zM6.1 8.76v.137c0 .383.05.736.153 1.057.105.32.271.58.499.775.227.193.525.29.895.29.355 0 .642-.097.86-.29.222-.196.383-.454.482-.775.102-.321.153-.674.153-1.057V8.76c0-.357-.05-.688-.153-.992a1.546 1.546 0 00-.486-.733c-.221-.185-.513-.277-.873-.277-.361 0-.654.092-.878.277-.225.184-.39.429-.495.733a3.02 3.02 0 00-.157.992zm4.913-3.102v1.1H7.63v-1.1h3.383z"
  })));
}

var _path$u;

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

function Svg$5(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$u({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$u || (_path$u = /*#__PURE__*/React.createElement("path", {
    d: "M10.769 5.455v1.099H5.246v-1.1h5.523zm-3.456 0H8.57v4.828c0 .224.031.388.094.49.062.1.14.163.234.191.097.026.195.039.294.039a.868.868 0 00.307-.051c.09-.034.172-.068.243-.102l.243.98c-.193.122-.378.2-.554.234a2.7 2.7 0 01-.563.055c-.503 0-.888-.147-1.155-.443-.267-.295-.4-.773-.4-1.432v-4.79z"
  })));
}

var _path$t;

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

function Svg$4(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$t({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$t || (_path$t = /*#__PURE__*/React.createElement("path", {
    d: "M4.855 5.455h1.258V9.51c0 .378.054.678.161.9.108.221.25.38.422.477.177.096.363.145.559.145.335 0 .629-.108.882-.324.253-.216.45-.502.592-.857.142-.358.213-.75.213-1.176a6.797 6.797 0 00-.106-1.057 11.837 11.837 0 00-.6-2.165h1.26c.122.24.234.536.337.891a8.5 8.5 0 01.345 2.331c0 .458-.056.894-.166 1.308a3.254 3.254 0 01-.512 1.104c-.233.318-.532.57-.899.754-.363.185-.798.277-1.304.277-.727 0-1.317-.21-1.768-.63-.45-.42-.674-1.086-.674-1.995v-4.04z"
  })));
}

var _path$s;

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

function Svg$3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$s({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$s || (_path$s = /*#__PURE__*/React.createElement("path", {
    d: "M6.945 13.454V5.861c0-.503.143-.877.43-1.121.29-.247.693-.37 1.21-.37.56 0 1.063.141 1.509.425.449.284.804.675 1.065 1.172.261.497.392 1.065.392 1.705 0 .451-.07.885-.213 1.3-.14.411-.364.78-.673 1.103-.31.324-.718.58-1.223.767-.506.185-1.124.277-1.854.277-.724 0-1.337-.095-1.837-.285-.5-.194-.903-.456-1.21-.789a3.037 3.037 0 01-.665-1.155 4.572 4.572 0 01-.204-1.376c0-.457.055-.884.166-1.278.114-.398.277-.755.49-1.07.216-.315.476-.581.78-.797l.805.814c-.207.196-.383.41-.528.644a2.99 2.99 0 00-.328.767c-.077.278-.12.585-.128.92 0 .438.087.848.26 1.232.173.38.454.688.844.924.389.233.907.35 1.555.35.642 0 1.162-.11 1.56-.328.397-.222.689-.512.873-.87.188-.358.282-.741.282-1.15a3.215 3.215 0 00-.222-1.121 1.906 1.906 0 00-.571-.805 1.352 1.352 0 00-.882-.303c-.15 0-.263.047-.337.14a.523.523 0 00-.11.342v7.53H6.944z"
  })));
}

var _path$r;

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

function Svg$2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$r({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$r || (_path$r = /*#__PURE__*/React.createElement("path", {
    d: "M4.697 13.454L7.518 8.17h.533l1.841 3.584c.097.19.18.328.252.413.073.086.16.14.26.162.099.023.24.034.421.034h.294v1.091h-.294c-.352 0-.643-.03-.873-.093a1.3 1.3 0 01-.597-.35c-.165-.17-.33-.419-.498-.746l-1.083-2.143-1.76 3.332H4.697zM7.4 9.436L5.67 6.159a3.734 3.734 0 00-.277-.46.424.424 0 00-.243-.175 1.87 1.87 0 00-.417-.034h-.295V4.399h.295c.352 0 .64.034.865.102.227.066.423.19.588.37.167.18.34.438.52.777l1.082 2.08L9.55 4.453h1.317L8.166 9.436H7.4z"
  })));
}

var _path$q;

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function Svg$1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$q({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$q || (_path$q = /*#__PURE__*/React.createElement("path", {
    d: "M3.855 4.455h1.249v3.072c0 .61.115 1.1.345 1.466.233.364.543.626.93.788.386.16.809.239 1.27.239.644 0 1.167-.115 1.567-.345.4-.233.693-.533.878-.9.188-.369.281-.758.281-1.167a6.924 6.924 0 00-.064-.784 9.256 9.256 0 00-.37-1.62 9.22 9.22 0 00-.269-.75h1.244c.091.177.18.381.265.614.085.23.16.483.226.759.065.272.116.56.153.86.04.299.06.606.06.921 0 .46-.068.9-.205 1.321-.136.42-.356.795-.66 1.125-.302.33-.704.59-1.206.78-.5.19-1.115.285-1.846.285-.78 0-1.46-.125-2.036-.375a2.85 2.85 0 01-1.339-1.172c-.315-.53-.473-1.215-.473-2.053V4.455zm3.248 0h1.244v9.34H7.103v-9.34z"
  })));
}

var _path$p;

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function Svg(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$p({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$p || (_path$p = /*#__PURE__*/React.createElement("path", {
    d: "M4.7 5.455h1.325A9.026 9.026 0 005.42 6.69a5.55 5.55 0 00-.298 1.053c-.054.332-.081.67-.081 1.014 0 .71.109 1.264.328 1.662.218.398.522.597.912.597.34 0 .613-.155.818-.465.204-.312.307-.765.307-1.36V7.113h.975v2.02c0 .625-.083 1.16-.251 1.607-.165.446-.412.788-.741 1.027-.327.236-.73.353-1.21.353-.506 0-.941-.132-1.305-.396-.36-.267-.637-.655-.83-1.163-.194-.509-.289-1.128-.286-1.858 0-.594.078-1.162.234-1.705.16-.542.395-1.057.708-1.542zm5.505 0h1.326c.31.485.544 1 .703 1.542.159.543.238 1.111.238 1.705.003.73-.093 1.35-.29 1.858-.193.508-.471.896-.835 1.163-.36.264-.794.396-1.3.396-.477 0-.88-.117-1.21-.353-.326-.239-.573-.581-.741-1.027-.165-.446-.247-.982-.247-1.607v-2.02h.971v2.08c0 .594.104 1.047.311 1.36.208.309.48.464.819.464.258 0 .48-.09.664-.269.185-.179.327-.436.426-.771.1-.338.15-.744.15-1.219a6.01 6.01 0 00-.085-1.014 5.32 5.32 0 00-.295-1.053 9.016 9.016 0 00-.605-1.235z"
  })));
}

var _path$o;

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function SvgDegreeCelseus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$o({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$o || (_path$o = /*#__PURE__*/React.createElement("path", {
    d: "M4.278 8.016c-.307 0-.588-.075-.841-.224a1.744 1.744 0 01-.604-.607 1.628 1.628 0 01-.224-.842c0-.308.075-.587.224-.838.152-.253.353-.454.604-.604.253-.151.534-.227.841-.227a1.677 1.677 0 011.445.831c.152.251.228.53.228.838 0 .308-.076.588-.227.842-.15.253-.35.455-.604.607-.253.15-.534.224-.842.224zm0-.81c.161 0 .307-.039.437-.117a.869.869 0 00.31-1.18.84.84 0 00-.31-.308.833.833 0 00-.437-.117.869.869 0 00-.746.426.846.846 0 00-.113.433.846.846 0 00.426.746c.13.078.275.117.433.117zm8.985-.114h-1.108a1.694 1.694 0 00-.664-1.083 1.836 1.836 0 00-.565-.284 2.204 2.204 0 00-.657-.096c-.419 0-.794.106-1.126.316-.329.211-.589.52-.78.927-.19.407-.285.905-.285 1.492 0 .592.095 1.091.284 1.498.192.408.454.715.785.924.331.208.704.312 1.119.312.23 0 .447-.03.653-.092.208-.064.397-.158.565-.28a1.718 1.718 0 00.67-1.07l1.109.004c-.06.357-.174.686-.345.987a2.725 2.725 0 01-.65.774 2.94 2.94 0 01-.902.501 3.338 3.338 0 01-1.107.178c-.63 0-1.191-.15-1.684-.448-.492-.3-.88-.73-1.164-1.289-.282-.559-.423-1.225-.423-2 0-.776.142-1.442.426-1.999.284-.558.672-.987 1.165-1.285a3.158 3.158 0 011.68-.451c.385 0 .745.056 1.08.167.335.109.637.27.905.483.267.21.489.469.664.774.175.303.293.65.355 1.04z"
  })));
}

var _path$n;

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function SvgDegreeFahreinheit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$n({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$n || (_path$n = /*#__PURE__*/React.createElement("path", {
    d: "M5.278 8.015c-.307 0-.588-.074-.841-.223a1.744 1.744 0 01-.604-.608 1.628 1.628 0 01-.224-.841c0-.308.075-.587.224-.838.152-.254.353-.455.604-.604.253-.151.534-.227.841-.227a1.677 1.677 0 011.445.831c.152.25.228.53.228.838 0 .308-.076.588-.227.841-.15.254-.35.456-.604.608-.253.149-.534.223-.842.223zm0-.81c.161 0 .307-.038.437-.116a.868.868 0 00.31-1.18.84.84 0 00-.31-.308.833.833 0 00-.437-.118.869.869 0 00-.746.426.846.846 0 00-.113.434.846.846 0 00.426.746c.13.078.275.117.433.117zM8.361 12V4.727h4.51v.945H9.458v2.216h3.09v.94h-3.09V12H8.361z"
  })));
}

var _path$m;

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function SvgAngstrom(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$m({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$m || (_path$m = /*#__PURE__*/React.createElement("path", {
    d: "M5.415 12H4.25l2.617-7.273h1.268L10.752 12H9.587L7.531 6.048h-.057L5.414 12zm.195-2.848h3.778v.923H5.61v-.923zm1.893-4.897c-.291 0-.54-.102-.746-.305a1.002 1.002 0 01-.305-.736 1.026 1.026 0 01.518-.902c.161-.094.339-.142.533-.142.192 0 .367.048.525.142.161.093.29.218.384.377.095.158.142.334.142.525 0 .192-.047.367-.142.526a1.082 1.082 0 01-.384.376 1.026 1.026 0 01-.525.139zm0-.543a.49.49 0 00.497-.5.485.485 0 00-.142-.353.476.476 0 00-.355-.145.487.487 0 00-.5.5c0 .138.046.256.141.356a.469.469 0 00.359.142z"
  })));
}

var _path$l;

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function SvgDegreeSymbol(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$l({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$l || (_path$l = /*#__PURE__*/React.createElement("path", {
    d: "M7.737 8.219c-.37 0-.706-.09-1.01-.269a2.093 2.093 0 01-.724-.728 1.954 1.954 0 01-.269-1.01c0-.37.09-.705.269-1.006.182-.304.423-.545.724-.724a1.93 1.93 0 011.01-.273c.37 0 .706.09 1.01.273.304.179.546.42.725.724.181.301.272.637.272 1.006 0 .37-.09.706-.272 1.01-.18.304-.42.547-.725.728-.304.18-.64.269-1.01.269zm0-.972a1 1 0 00.524-.14 1.042 1.042 0 00.371-1.415 1.009 1.009 0 00-.37-.37 1 1 0 00-.525-.141 1.042 1.042 0 00-.895.511c-.09.156-.136.33-.136.52a1.015 1.015 0 00.511.895c.157.093.33.14.52.14z"
  })));
}

var _path$k;

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function SvgPlanckDiracConstant(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$k({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$k || (_path$k = /*#__PURE__*/React.createElement("path", {
    d: "M6.13 9.114V13H4.858V4.273h1.257V7.52h.08c.154-.352.388-.632.704-.84.315-.207.727-.31 1.236-.31.448 0 .84.092 1.176.277.338.184.6.46.784.826.187.364.281.818.281 1.364V13H9.101V8.99c0-.48-.124-.852-.37-1.116-.248-.267-.592-.4-1.032-.4-.301 0-.571.063-.81.191a1.383 1.383 0 00-.558.562c-.134.245-.2.54-.2.887zM3.532 5.833V4.95h3.916v.882H3.531z"
  })));
}

var _path$j;

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function SvgPlusMinus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$j({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$j || (_path$j = /*#__PURE__*/React.createElement("path", {
    d: "M5.168 12.616V11.5h5.66v1.116h-5.66zm0-3.477V8.035h5.66V9.14h-5.66zm2.254 1.654V6.386H8.57v4.407H7.422z"
  })));
}

var _path$i;

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function SvgPromille(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$i({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$i || (_path$i = /*#__PURE__*/React.createElement("path", {
    d: "M7.397 11.364v-.46c0-.325.074-.618.222-.883.15-.264.362-.476.635-.635.273-.159.595-.238.967-.238.344 0 .64.08.89.238.25.16.443.371.576.635.136.264.205.558.205.882v.46c0 .325-.069.619-.205.883a1.589 1.589 0 01-.575.635c-.25.159-.547.238-.89.238-.373 0-.695-.08-.968-.238a1.703 1.703 0 01-.635-.635 1.776 1.776 0 01-.222-.882zm.976-.46v.46c0 .244.071.46.213.647.142.188.354.282.635.282s.49-.094.627-.282c.136-.187.204-.403.204-.647v-.46c0-.245-.07-.46-.209-.648-.139-.188-.346-.282-.622-.282-.281 0-.493.094-.635.282a1.044 1.044 0 00-.213.647zm1.85.46v-.46c0-.325.068-.618.204-.883.14-.264.334-.476.584-.635.253-.159.551-.238.895-.238.375 0 .699.08.971.238.273.16.483.371.631.635.148.264.222.558.222.882v.46c0 .325-.074.619-.222.883a1.64 1.64 0 01-.626.635c-.27.159-.59.238-.96.238-.346 0-.647-.08-.902-.238a1.642 1.642 0 01-.588-.635 1.931 1.931 0 01-.21-.882zm.835-.46v.46c0 .244.074.46.222.647.147.188.362.282.643.282.275 0 .483-.094.622-.282.14-.187.209-.403.209-.647v-.46c0-.245-.071-.46-.213-.648-.14-.188-.351-.282-.635-.282-.273 0-.482.094-.627.282a1.05 1.05 0 00-.221.647zM3.004 6.368v-.46c0-.33.068-.632.204-.908.14-.275.341-.495.606-.66.267-.165.59-.247.967-.247.386 0 .71.082.971.247.262.165.46.385.593.66.133.276.2.579.2.908v.46c0 .33-.068.632-.204.908a1.608 1.608 0 01-.597.66c-.261.165-.582.248-.963.248-.386 0-.712-.083-.976-.248a1.648 1.648 0 01-.597-.66 2.018 2.018 0 01-.204-.908zM4 5.91v.46c0 .245.057.466.17.665.117.199.32.298.61.298.284 0 .483-.1.596-.298.117-.199.175-.42.175-.665v-.46c0-.244-.055-.466-.166-.665-.11-.199-.312-.298-.605-.298-.284 0-.486.1-.605.298A1.29 1.29 0 004 5.91zM3.426 13l6-8.727h1.018l-6 8.727H3.426z"
  })));
}

var _path$h;

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function SvgRootSymbol(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$h({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$h || (_path$h = /*#__PURE__*/React.createElement("path", {
    d: "M7.494 11.611l2.484-7.338h1.27L8.201 13h-.89l.183-1.389zM6.65 8.449l1.112 3.196L7.958 13h-.852L5.351 8.45h1.3zM4.566 9.553V8.449h2.025v1.104H4.566z"
  })));
}

var _path$g;

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function SvgLeftArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$g({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/React.createElement("path", {
    d: "M7.16 12.158L3.183 8.182l3.975-3.976.767.759-2.663 2.663h6.69v1.108h-6.69l2.663 2.659-.767.763z"
  })));
}

var _path$f;

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function SvgRightArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/React.createElement("path", {
    d: "M8.294 12.158l-.767-.759 2.663-2.663H3.5V7.628h6.69l-2.663-2.66.767-.762 3.976 3.976-3.976 3.976z"
  })));
}

var _path$e, _path2$3;

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function SvgLeftArrowCrossedOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$e || (_path$e = /*#__PURE__*/React.createElement("path", {
    d: "M7.16 12.157L3.183 8.182l3.975-3.976.767.758-2.663 2.664h6.69v1.108h-6.69l2.663 2.659-.767.762z"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    d: "M11.665 3.102l-5.843 9.46h-.664L11 3.102h.665z"
  })));
}

var _path$d, _path2$2;

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function SvgRightArrowCrossedOut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$d || (_path$d = /*#__PURE__*/React.createElement("path", {
    d: "M8.294 12.157l-.767-.758 2.663-2.663H3.5V7.628h6.69l-2.663-2.66.767-.762 3.976 3.976-3.976 3.975z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M11.5 3.102l-5.842 9.46h-.665l5.842-9.46h.665z"
  })));
}

var _path$c;

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function SvgLeftAndRightArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$c || (_path$c = /*#__PURE__*/React.createElement("path", {
    d: "M5.057 12.055L1.184 8.182l3.873-3.874.767.759-2.56 2.56h9.562l-2.561-2.56.767-.759 3.873 3.874-3.873 3.873-.767-.767 2.56-2.552H3.264l2.561 2.552-.767.767z"
  })));
}

var _path$b;

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function SvgCapitalPi(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    d: "M10.413 3.727v8.377H9.255V4.636H6.123v7.468H4.969V3.727h5.444z"
  })));
}

var _path$a;

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function SvgSumSymbol(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M11.184 11.405v.916H5.978v-.916h5.206zm-.309-7.678v.92H5.889v-.92h4.986zM9.678 7.875v.295l-3.434 4.15h-.72v-.738L8.527 8.02 5.523 4.476v-.749h.721l3.434 4.148z"
  })));
}

var _path$9;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function SvgInfinitySign(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    d: "M5.042 5.842c.324 0 .62.047.886.14.27.095.513.217.729.367.219.148.41.302.575.46.091.086.174.17.247.252.074.082.145.165.213.247.063-.082.127-.162.192-.238.068-.08.154-.167.256-.26.247-.242.554-.463.92-.665.37-.202.797-.303 1.283-.303.455 0 .868.111 1.24.333.375.218.672.512.89.882.222.37.333.778.333 1.227 0 .341-.064.66-.192.959a2.49 2.49 0 01-.528.78 2.455 2.455 0 01-1.743.712c-.324 0-.622-.046-.895-.137a3.256 3.256 0 01-.733-.358 4.588 4.588 0 01-.57-.447 6.736 6.736 0 01-.252-.265 7.034 7.034 0 01-.2-.251l-.218.251a5.09 5.09 0 01-.247.265 4.203 4.203 0 01-.571.447 3.27 3.27 0 01-.729.354 2.66 2.66 0 01-.886.14c-.46 0-.877-.109-1.249-.328a2.5 2.5 0 01-.89-.882 2.378 2.378 0 01-.333-1.24c0-.338.063-.653.188-.946.128-.295.304-.555.528-.78.227-.224.49-.399.789-.524a2.45 2.45 0 01.967-.192zM3.746 8.284c0 .236.059.45.175.644a1.3 1.3 0 001.12.63c.268 0 .514-.06.738-.179.225-.12.433-.27.627-.451a3.717 3.717 0 00.545-.644 6.678 6.678 0 00-.243-.303 2.94 2.94 0 00-.302-.323 2.64 2.64 0 00-.618-.452 1.538 1.538 0 00-.746-.188c-.239 0-.456.059-.652.175a1.3 1.3 0 00-.469.46c-.116.19-.175.4-.175.631zm7.875 0c0-.23-.058-.44-.174-.63a1.276 1.276 0 00-.46-.46 1.222 1.222 0 00-.644-.176c-.182 0-.355.029-.52.086-.165.056-.32.133-.464.23a2.7 2.7 0 00-.392.324c-.128.119-.24.241-.337.366-.097.122-.166.209-.209.26.071.1.15.203.239.311.088.105.19.216.307.333.19.181.397.332.622.451.227.12.479.18.754.18a1.276 1.276 0 001.104-.63c.116-.195.174-.41.174-.645z"
  })));
}

var _path$8;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function SvgPartialDerivative(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M7.723 6.983c.335 0 .655.064.959.192.304.127.567.31.788.545-.07-.508-.209-.943-.413-1.304a2.336 2.336 0 00-.754-.83 1.746 1.746 0 00-.968-.29c-.278 0-.544.026-.797.08-.25.054-.507.13-.771.226l-.158-1.048c.256-.11.522-.205.797-.281.276-.08.63-.12 1.061-.12.739 0 1.354.196 1.846.588.494.392.863.946 1.107 1.662.248.713.371 1.55.371 2.51v.341c.003.744-.113 1.408-.35 1.99-.232.583-.569 1.041-1.01 1.377-.437.332-.964.498-1.58.498-.602 0-1.12-.135-1.556-.405a2.69 2.69 0 01-.997-1.108c-.23-.468-.345-.998-.345-1.589v-.136c0-.56.11-1.057.328-1.492.219-.437.534-.781.946-1.031.415-.25.914-.375 1.496-.375zm.17 1.1c-.366 0-.666.082-.899.246-.23.165-.4.387-.511.665a2.504 2.504 0 00-.162.92v.129c0 .363.054.694.162.992.11.299.278.537.503.716.227.18.518.269.873.269.358 0 .65-.104.878-.311.23-.21.4-.497.512-.861a4.22 4.22 0 00.166-1.232v-.494a1.371 1.371 0 00-.218-.426 1.443 1.443 0 00-.485-.426c-.213-.125-.486-.188-.819-.188z"
  })));
}

var _path$7;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgDeltaSign(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M4.297 13l3.14-8.727H8.96L12.099 13H4.297zm1.79-1.133h4.227l-2.08-6.009h-.068l-2.08 6.009z"
  })));
}

var _path$6;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgIntegral(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M8.35 12.473c0 .673-.171 1.189-.512 1.547-.341.358-.833.537-1.475.537a2.815 2.815 0 01-.75-.098l.098-1.07c.066.017.16.033.282.047.122.014.221.021.298.021.278 0 .483-.078.613-.234.131-.154.197-.392.197-.716V5.114c0-.722.178-1.276.536-1.662.361-.387.88-.58 1.556-.58.145 0 .29.011.434.034.148.023.3.053.457.09L9.943 4.03a2.127 2.127 0 00-.328-.038 6.799 6.799 0 00-.397-.013c-.298 0-.518.087-.66.26-.14.17-.209.439-.209.805v7.428z"
  })));
}

var _path$5;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgApproximatelyEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M4.965 8.178c-.003-.495.074-.894.23-1.198.16-.307.37-.531.635-.673.267-.142.558-.213.874-.213.29 0 .55.06.784.183.235.12.505.305.81.558.204.17.369.291.494.362a.814.814 0 00.409.107c.236 0 .42-.085.554-.256.136-.17.201-.42.196-.75h1.078c.008.489-.068.888-.23 1.198-.16.307-.374.534-.644.682-.267.144-.56.217-.878.217-.28 0-.54-.058-.78-.175-.238-.116-.512-.308-.822-.575a3.4 3.4 0 00-.477-.358.793.793 0 00-.4-.102.709.709 0 00-.55.234c-.142.153-.21.406-.205.759H4.965zm0 2.642c-.003-.495.074-.894.23-1.198.16-.307.37-.531.635-.673.267-.142.558-.213.874-.213.29 0 .55.06.784.183.235.12.505.305.81.558.204.17.369.291.494.362a.814.814 0 00.409.107c.236 0 .42-.085.554-.256.136-.17.201-.42.196-.75h1.078c.008.489-.068.888-.23 1.198-.16.307-.374.534-.644.682-.267.144-.56.217-.878.217-.28 0-.54-.058-.78-.175-.238-.116-.512-.308-.822-.575a3.405 3.405 0 00-.477-.358.793.793 0 00-.4-.102.709.709 0 00-.55.234c-.142.153-.21.406-.205.759H4.965z"
  })));
}

var _path$4;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgNotEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M8.67 5.399h1.164l-2.502 6.328H6.17L8.67 5.4zM5.266 7.81V6.69h5.458v1.12H5.266zm0 2.625v-1.12h5.458v1.12H5.266z"
  })));
}

var _path$3;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgLessOrEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M10.827 11.616H5.168V10.5h5.66v1.116zm-5.659-3.57V7.09l5.66-1.858v1.159l-3.879 1.16.043-.078v.188l-.043-.077 3.878 1.16v1.158L5.168 8.045z"
  })));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgMoreOrEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M5.168 11.616V10.5h5.66v1.116h-5.66zm5.66-3.57l-5.66 1.857V8.744l3.874-1.159-.039.077v-.188l.039.077-3.874-1.159v-1.16l5.66 1.859v.954z"
  })));
}

var _path$1, _path2$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgAnyAtom(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 22a.997.997 0 01-1-1v-6a1.5 1.5 0 011.5 1.5v4h4A1.5 1.5 0 019 22H3zM2 9a1.5 1.5 0 001.5-1.5v-4h4A1.5 1.5 0 009 2H3a.997.997 0 00-1 1v6zm13-7a1.5 1.5 0 001.5 1.5h4v4A1.5 1.5 0 0022 9V3a.997.997 0 00-1-1h-6zm7 13a1.5 1.5 0 00-1.5 1.5v4h-4A1.5 1.5 0 0015 22h6a.997.997 0 00.383-.076l.015-.006c.232-.101.419-.288.52-.52l.006-.015A.997.997 0 0022 21v-6z",
    fill: "currentColor"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M8.988 16.94a.838.838 0 11-1.576-.565l3.373-9.219a1 1 0 01.939-.656h.552a1 1 0 01.94.656l3.372 9.219a.837.837 0 11-1.576.565l-2.951-8.4a.062.062 0 00-.117 0l-2.956 8.4zm.104-3.05c0-.385.312-.698.698-.698h4.415a.698.698 0 110 1.397H9.79a.698.698 0 01-.698-.698z",
    fill: "#333"
  })));
}

var icons = {
  ??: Svg$n,
  ??: Svg$m,
  ??: Svg$l,
  ??: Svg$k,
  ??: Svg$j,
  ??: Svg$i,
  ??: Svg$h,
  ??: Svg$g,
  ??: Svg$f,
  ??: Svg$e,
  ??: Svg$d,
  ??: Svg$c,
  ??: Svg$b,
  ??: Svg$a,
  ??: Svg$9,
  ??: Svg$8,
  ??: Svg$7,
  ??: Svg$6,
  ??: Svg$5,
  ??: Svg$4,
  ??: Svg$3,
  ??: Svg$2,
  ??: Svg$1,
  ??: Svg,
  ???: SvgAngstrom,
  '??': SvgDegreeSymbol,
  ??: SvgPlanckDiracConstant,
  '??': SvgPlusMinus,
  '???': SvgPromille,
  '???': SvgRootSymbol,
  '???': SvgLeftArrow,
  '???': SvgRightArrow,
  '???/': SvgLeftArrowCrossedOut,
  '/???': SvgRightArrowCrossedOut,
  '???': SvgLeftAndRightArrow,
  '???': SvgCapitalPi,
  '???': SvgSumSymbol,
  '???': SvgInfinitySign,
  '???': SvgPartialDerivative,
  '???': SvgDeltaSign,
  '???': SvgIntegral,
  '???': SvgApproximatelyEqual,
  '=/': SvgNotEqual,
  '???': SvgLessOrEqual,
  '???': SvgMoreOrEqual,
  '???': SvgDegreeFahreinheit,
  '???': SvgDegreeCelseus,
  about: SvgAbout,
  analyse: SvgAnalyse,
  'any-atom': SvgAnyAtom,
  arom: SvgArom,
  'arrow-upward': SvgArrowUpward,
  'bond-any': SvgBondAny,
  'bond-aromatic': SvgBondAromatic,
  'bond-crossed': SvgBondCrossed,
  'bond-hydrogen': SvgBondHydrogen,
  'bond-dative': SvgBondDative,
  'bond-double': SvgBondDouble,
  'bond-doublearomatic': SvgBondDoublearomatic,
  'bond-down': SvgBondDown,
  'bond-single': SvgBondSingle,
  'bond-singlearomatic': SvgBondSinglearomatic,
  'bond-singledouble': SvgBondSingledouble,
  'bond-triple': SvgBondTriple,
  'bond-up': SvgBondUp,
  'bond-updown': SvgBondUpdown,
  'capital-t': SvgCapitalT,
  chain: SvgChain,
  'charge-minus': SvgChargeMinus,
  'charge-plus': SvgChargePlus,
  check: SvgCheck,
  'chiral-flag': SvgChiralFlag,
  cip: SvgCip,
  clean: SvgClean,
  copies: SvgCopy,
  copy: SvgCopy,
  'copy-image': SvgCopyImage,
  'copy-mol': SvgCopyMol,
  'copy-ket': SvgCopyKet,
  cut: SvgCut,
  dearom: SvgDearom,
  "delete": SvgDelete,
  dropdown: SvgDropdown,
  'enhanced-stereo': SvgEnhancedStereo,
  edit: SvgEdit,
  'elements-group': SvgElementsGroup,
  'extended-table': SvgExtendedTable,
  erase: SvgErase,
  'file-thumbnail': SvgFileThumbnail,
  'fullscreen-enter': SvgFullscreenEnter,
  'fullscreen-exit': SvgFullscreenExit,
  'generic-groups': SvgGenericGroups,
  hand: SvgHand,
  compressedhand: SvgCompressedHand,
  help: SvgHelp,
  history: SvgHistory,
  'image-frame': SvgImageFrame,
  layout: SvgLayout,
  logo: SvgLogo$1,
  miew: SvgMiew,
  clear: SvgClear,
  open: SvgOpen,
  paste: SvgPaste,
  'period-table': SvgPeriodTable,
  'reaction-arrow-elliptical-arc-arrow-filled-bow': SvgReactionArrowEllipticalArcArrowFilledBow,
  'reaction-arrow-elliptical-arc-arrow-filled-triangle': SvgReactionArrowEllipticalArcArrowFilledTriangle,
  'reaction-arrow-elliptical-arc-arrow-open-angle': SvgReactionArrowEllipticalArcArrowOpenAngle,
  'reaction-arrow-elliptical-arc-arrow-open-half-angle': SvgReactionArrowEllipticalArcArrowOpenHalfAngle,
  'reaction-arrow-open-angle': SvgReactionArrowOpenAngle,
  'reaction-arrow-filled-triangle': SvgReactionArrowFilledTriangle,
  'reaction-arrow-filled-bow': SvgReactionArrowFilledBow,
  'reaction-arrow-dashed-open-angle': SvgReactionArrowDashedOpenAngle,
  'reaction-arrow-failed': SvgReactionArrowFailed,
  'reaction-arrow-both-ends-filled-triangle': SvgReactionArrowBothEndsFilledTriangle,
  'reaction-arrow-equilibrium-filled-half-bow': SvgReactionArrowEquilibriumFilledHalfBow,
  'reaction-arrow-equilibrium-filled-triangle': SvgReactionArrowEquilibriumFilledTriangle,
  'reaction-arrow-equilibrium-open-angle': SvgReactionArrowEquilibriumOpenAngle,
  'reaction-arrow-unbalanced-equilibrium-filled-half-bow': SvgReactionArrowUnbalancedEquilibriumFilledHalfBow,
  'reaction-arrow-unbalanced-equilibrium-open-half-angle': SvgReactionArrowUnbalancedEquilibriumOpenHalfAngle,
  'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow': SvgReactionArrowUnbalancedEquilibriumLargeFilledHalfBow,
  'reaction-arrow-unbalanced-equilibrium-filled-half-triangle': SvgReactionArrowUnbalancedEquilibriumFilledHalfTriangle,
  'reaction-automap': SvgReactionAutomap,
  'reaction-map': SvgReactionMap,
  'reaction-plus': SvgReactionPlus,
  'reaction-unmap': SvgReactionUnmap,
  recognize: SvgRecognize,
  redo: SvgRedo,
  'rgroup-attpoints': SvgRgroupAttpoints,
  'rgroup-fragment': SvgRgroupFragment,
  'rgroup-label': SvgRgroupLabel,
  save: SvgSave,
  search: SvgSearch,
  'select-fragment': SvgSelectFragment,
  'select-lasso': SvgSelectLasso,
  'select-rectangle': SvgSelectRectangle,
  settings: SvgSettings,
  'sgroup-data': SvgSgroupData,
  sgroup: SvgSgroup,
  'template-0': SvgTemplate0,
  'template-1': SvgTemplate1,
  'template-2': SvgTemplate2,
  'template-3': SvgTemplate3,
  'template-4': SvgTemplate4,
  'template-5': SvgTemplate5,
  'template-6': SvgTemplate6,
  'template-7': SvgTemplate7,
  'template-dialog': SvgTemplateDialog,
  'template-lib': SvgTemplateLib,
  text: SvgText,
  'text-bold': SvgTextBold,
  'text-italic': SvgTextItalic,
  'text-subscript': SvgTextSubscript,
  'text-superscript': SvgTextSuperscript,
  'transform-flip-h': SvgTransformFlipH,
  'transform-flip-v': SvgTransformFlipV,
  'transform-rotate': SvgTransformRotate,
  undo: SvgUndo,
  'zoom-in': SvgZoomIn,
  'zoom-out': SvgZoomOut,
  'shape-ellipse': SvgShapeEllipse,
  'shape-rectangle': SvgShapeRectangle,
  'shape-polyline': SvgShapePolyline,
  'shape-line': SvgShapeLine,
  'not-found': SvgNotFound,
  'save-1': SvgSave1,
  'open-1': SvgOpen1,
  reset: SvgReset,
  close: SvgClose,
  general: SvgGeneral,
  'general-white': SvgGeneralWhite,
  stereo: SvgStereo,
  'stereo-white': SvgStereoWhite,
  atoms: SvgAtoms,
  'atoms-white': SvgAtomsWhite,
  bonds: SvgBonds,
  'bonds-white': SvgBondsWhite,
  server: SvgServer,
  'server-white': SvgServerWhite,
  '3dviewer': Svg3D,
  '3dviewer-white': Svg3DWhite,
  debugging: SvgDebugging,
  'debugging-white': SvgDebuggingWhite,
  'dropdown-indicator': SvgDropdownIndicator,
  'text-special-symbols': SvgTextSpecialSymbols,
  chevron: SvgChevron,
  'open-window-paste-icon': SvgOpenWindowPasteIcon,
  'open-window-upload-icon': SvgOpenWindowUploadIcon
};
function emptyIcon() {
  return null;
}
function findIconByName(name) {
  if (name && icons.hasOwnProperty(name)) {
    var component = icons[name];
    return component;
  } else {
    return emptyIcon;
  }
}

var _excluded$C = ["name"];
function ownKeys$_(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$_(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$_(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$_(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, _excluded$C);
  var Component = findIconByName(name);
  return jsx(Component, _objectSpread$_({}, props));
}

var classes$N = {"button-common-styles":"ActionButton-module_button-common-styles__y-hng","scrollbar":"ActionButton-module_scrollbar__lD3MH","button":"ActionButton-module_button__nfoWQ","selected":"ActionButton-module_selected__kPCxA"};

var isMac = /Mac/.test(navigator.platform);
var shortcutAliasMap = {
  Escape: 'Esc',
  Delete: 'Del',
  Mod: isMac ? '???' : 'Ctrl'
};
function shortcutStr(shortcut) {
  if (!shortcut) {
    return '';
  }
  var shortcutKey = Array.isArray(shortcut) ? shortcut[0] : shortcut;
  return shortcutKey.replace(/(\b[a-z]\b$|Mod|Escape|Delete)/g, function (key) {
    return shortcutAliasMap[key] || key.toUpperCase();
  });
}

var ActionButton = function ActionButton(props) {
  var name = props.name,
      action = props.action,
      _props$status = props.status,
      status = _props$status === void 0 ? {} : _props$status,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      disableableButtons = props.disableableButtons,
      indigoVerification = props.indigoVerification,
      className = props.className,
      onAction = props.onAction;
  if (status.hidden) {
    return null;
  }
  var shortcut = shortcutStr(action === null || action === void 0 ? void 0 : action.shortcut);
  var disabled = status.disabled || indigoVerification && disableableButtons.includes(name);
  var handleClick = function handleClick(event) {
    if (action !== null && action !== void 0 && action.action) {
      onAction(action.action);
    }
    event.stopPropagation();
  };
  return jsxs("button", {
    disabled: disabled,
    onClick: handleClick,
    title: shortcut ? "".concat(action === null || action === void 0 ? void 0 : action.title, " (").concat(shortcut, ")") : action === null || action === void 0 ? void 0 : action.title,
    className: clsx(classes$N.button, _defineProperty({}, classes$N.selected, selected), className),
    children: [jsx(Icon, {
      name: name
    }), jsx("kbd", {
      children: shortcut
    })]
  });
};

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CLASSNAME_SEPARATOR = ' ';
var Portal = function (_Component) {
  _inherits(Portal, _Component);
  var _super = _createSuper$b(Portal);
  function Portal(props) {
    var _this;
    _classCallCheck(this, Portal);
    _this = _super.call(this, props);
    _this.element = document.createElement('div');
    _this.isElementInDom = false;
    return _this;
  }
  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.isElementInDom && this.props.isOpen) {
        this.addElementInDOM();
      }
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      if (className) {
        this.addClassName(className);
      }
      if (style) {
        this.updateStyle(style);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isElementInDom) {
        this.removeElementFromDOM();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          className = _this$props2.className,
          style = _this$props2.style;
      if (className !== prevProps.className) {
        this.removeClassNames(prevProps.className);
        this.addClassName(className);
      }
      if (style !== prevProps.style) {
        this.updateStyle(style, prevProps.style);
      }
      if (isOpen === prevProps.isOpen) {
        return;
      }
      if (isOpen && !this.isElementInDom) {
        this.addElementInDOM();
      } else if (this.isElementInDom) {
        this.removeElementFromDOM();
      }
    }
  }, {
    key: "addElementInDOM",
    value: function addElementInDOM() {
      var _document$querySelect;
      (_document$querySelect = document.querySelector('.Ketcher-root')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.appendChild(this.element);
      this.isElementInDom = true;
    }
  }, {
    key: "removeElementFromDOM",
    value: function removeElementFromDOM() {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector('.Ketcher-root')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.removeChild(this.element);
      this.isElementInDom = false;
    }
  }, {
    key: "removeClassNames",
    value: function removeClassNames(classNames) {
      var _this2 = this;
      if (!classNames) {
        return;
      }
      classNames.split(CLASSNAME_SEPARATOR).forEach(function (className) {
        _this2.element.classList.remove(className);
      });
    }
  }, {
    key: "addClassName",
    value: function addClassName(classNames) {
      var _this3 = this;
      if (!classNames) {
        return;
      }
      classNames.split(CLASSNAME_SEPARATOR).forEach(function (className) {
        _this3.element.classList.add(className);
      });
    }
  }, {
    key: "updateStyle",
    value: function updateStyle(style, prevStyle) {
      var _this4 = this;
      if (prevStyle) {
        Object.keys(prevStyle).forEach(function (property) {
          _this4.element.style[property] = '';
        }, this);
      }
      if (!style) {
        return;
      }
      Object.keys(style).forEach(function (property) {
        _this4.element.style[property] = style[property];
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var component = ReactDOM.createPortal(children, this.element);
      return component;
    }
  }]);
  return Portal;
}(Component);

var defaultClasses = {"default":"DefaultMultiTool-module_default__zNTMe"};

var DefaultMultiTool = function DefaultMultiTool(props) {
  var options = props.options,
      status = props.status,
      disableableButtons = props.disableableButtons,
      indigoVerification = props.indigoVerification,
      onAction = props.onAction;
  return jsx(Fragment, {
    children: options.map(function (toolbarItem) {
      var currentStatus = status[toolbarItem.id];
      return jsx(ActionButton, {
        name: toolbarItem.id,
        action: config[toolbarItem.id],
        status: currentStatus,
        selected: !!(currentStatus !== null && currentStatus !== void 0 && currentStatus.selected),
        disableableButtons: disableableButtons,
        indigoVerification: indigoVerification,
        onAction: onAction
      }, toolbarItem.id);
    })
  });
};

var classes$M = {"group":"GroupedMultiTool-module_group__BJQAU"};

var GroupedMultiTool = function GroupedMultiTool(props) {
  var groups = props.groups,
      options = props.options,
      status = props.status,
      disableableButtons = props.disableableButtons,
      indigoVerification = props.indigoVerification,
      onAction = props.onAction;
  if (!groups) {
    return null;
  }
  return jsx(Fragment, {
    children: groups.map(function (descriptor) {
      return jsx("div", {
        className: classes$M.group,
        children: options.slice(descriptor.start, descriptor.end).map(function (toolbarItem) {
          var currentStatus = status[toolbarItem.id];
          return jsx(ActionButton, {
            name: toolbarItem.id,
            action: config[toolbarItem.id],
            status: currentStatus,
            selected: !!(currentStatus !== null && currentStatus !== void 0 && currentStatus.selected),
            disableableButtons: disableableButtons,
            indigoVerification: indigoVerification,
            onAction: onAction
          }, toolbarItem.id);
        })
      }, descriptor.start);
    })
  });
};

function chooseMultiTool() {
  var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  switch (variant) {
    case 'default':
      return [DefaultMultiTool, defaultClasses["default"]];
    case 'grouped':
      return [GroupedMultiTool];
    default:
      throw new Error("Unsupported variant ".concat(variant));
  }
}

var classes$L = {"button-common-styles":"ToolbarMultiToolItem-module_button-common-styles__Fuxbo","scrollbar":"ToolbarMultiToolItem-module_scrollbar__XTmfz","icon":"ToolbarMultiToolItem-module_icon__-HQal","iconSelected":"ToolbarMultiToolItem-module_iconSelected__hlO0J","portal":"ToolbarMultiToolItem-module_portal__2XJgz","portal-vertical":"ToolbarMultiToolItem-module_portal-vertical__A0DVe"};

function usePortalOpening(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      id = _ref2[0],
      opened = _ref2[1],
      options = _ref2[2];
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];
  useEffect(function () {
    var currentId = options.length && options[0].id || '';
    var newState = opened === id || opened === currentId;
    setIsOpen(newState);
  }, [opened, options]);
  return [isOpen];
}

function usePortalStyle(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      ref = _ref2[0],
      isOpen = _ref2[1];
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      portalStyle = _useState2[0],
      setPortalStyle = _useState2[1];
  useEffect(function () {
    var _document$querySelect;
    if (!ref.current) {
      return;
    }
    var editorRect = ((_document$querySelect = document.querySelector('.Ketcher-root')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getBoundingClientRect()) || {
      top: 0,
      left: 0
    };
    var menuItemRect = ref.current.getBoundingClientRect();
    var top = menuItemRect.top - editorRect.top;
    var spaceBetween = 4;
    var left = menuItemRect.left - editorRect.left + menuItemRect.width + spaceBetween;
    setPortalStyle({
      top: "".concat(top, "px"),
      left: "".concat(left, "px")
    });
  }, [ref, isOpen]);
  return [portalStyle];
}

function ownKeys$Z(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$Z(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$Z(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Z(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ToolbarMultiToolItem = function ToolbarMultiToolItem(props) {
  var id = props.id,
      options = props.options,
      groups = props.groups,
      variant = props.variant,
      status = props.status,
      opened = props.opened,
      indigoVerification = props.indigoVerification,
      disableableButtons = props.disableableButtons,
      className = props.className,
      vertical = props.vertical,
      onAction = props.onAction,
      onOpen = props.onOpen;
  var ref = useRef(null);
  var _usePortalOpening = usePortalOpening([id, opened, options]),
      _usePortalOpening2 = _slicedToArray(_usePortalOpening, 1),
      isOpen = _usePortalOpening2[0];
  var _usePortalStyle = usePortalStyle([ref, isOpen]),
      _usePortalStyle2 = _slicedToArray(_usePortalStyle, 1),
      portalStyle = _usePortalStyle2[0];
  var selected = false;
  var currentId = id;
  var selectedTool = options.find(function (toolbarItem) {
    var _status$toolbarItem$i;
    return (_status$toolbarItem$i = status[toolbarItem.id]) === null || _status$toolbarItem$i === void 0 ? void 0 : _status$toolbarItem$i.selected;
  });
  if (selectedTool) {
    currentId = selectedTool.id;
    selected = true;
  }
  var currentStatus = status[currentId];
  selected = selected || Boolean(currentStatus === null || currentStatus === void 0 ? void 0 : currentStatus.selected);
  var allInnerItemsHidden = options.every(function (option) {
    var _status$option$id;
    return (_status$option$id = status[option.id]) === null || _status$option$id === void 0 ? void 0 : _status$option$id.hidden;
  });
  var displayMultiToolItem = !(allInnerItemsHidden || currentStatus !== null && currentStatus !== void 0 && currentStatus.hidden);
  if (!currentStatus && options.length) {
    var _options$filter$;
    currentId = ((_options$filter$ = options.filter(function (option) {
      var _status$option$id2;
      return !((_status$option$id2 = status[option.id]) !== null && _status$option$id2 !== void 0 && _status$option$id2.hidden);
    })[0]) === null || _options$filter$ === void 0 ? void 0 : _options$filter$.id) || options[0].id;
  }
  var actionButtonProps = {
    disableableButtons: disableableButtons,
    indigoVerification: indigoVerification,
    onAction: selected ? function () {
      return onOpenOptions();
    } : onAction
  };
  var onOpenOptions = function onOpenOptions() {
    onOpen(id, Boolean(currentStatus === null || currentStatus === void 0 ? void 0 : currentStatus.selected));
  };
  var _chooseMultiTool = chooseMultiTool(variant),
      _chooseMultiTool2 = _slicedToArray(_chooseMultiTool, 2),
      Component = _chooseMultiTool2[0],
      portalClassName = _chooseMultiTool2[1];
  return displayMultiToolItem ? jsxs("div", {
    ref: ref,
    className: classes$L.root,
    children: [jsx(ActionButton, _objectSpread$Z(_objectSpread$Z({}, actionButtonProps), {}, {
      className: className,
      name: currentId,
      action: config[currentId],
      status: currentStatus,
      selected: selected
    })), !isOpen && jsx(Icon, {
      className: "".concat(classes$L.icon, " ").concat((currentStatus === null || currentStatus === void 0 ? void 0 : currentStatus.selected) && classes$L.iconSelected),
      name: "dropdown",
      onClick: onOpenOptions
    }), isOpen ? jsx(Portal, {
      isOpen: isOpen,
      className: clsx(classes$L.portal, vertical && classes$L['portal-vertical'], portalClassName),
      style: portalStyle,
      children: jsx(Component, {
        options: options,
        groups: groups,
        status: status,
        disableableButtons: disableableButtons,
        indigoVerification: indigoVerification,
        onAction: onAction
      })
    }) : null]
  }) : null;
};

var ToolbarGroupItem = function ToolbarGroupItem(props) {
  var id = props.id,
      options = props.options,
      status = props.status,
      className = props.className,
      opened = props.opened,
      indigoVerification = props.indigoVerification,
      disableableButtons = props.disableableButtons,
      vertical = props.vertical,
      onAction = props.onAction,
      onOpen = props.onOpen;
  if (!(options !== null && options !== void 0 && options.length)) {
    var _status$id;
    return jsx(ActionButton, {
      className: className,
      name: id,
      action: config[id],
      status: status[id],
      selected: !!((_status$id = status[id]) !== null && _status$id !== void 0 && _status$id.selected),
      indigoVerification: indigoVerification,
      disableableButtons: disableableButtons,
      onAction: onAction
    });
  }
  return jsx(ToolbarMultiToolItem, {
    className: className,
    id: id,
    options: options,
    status: status,
    opened: opened,
    disableableButtons: disableableButtons,
    indigoVerification: indigoVerification,
    onAction: onAction,
    onOpen: onOpen,
    vertical: vertical
  });
};

var TemplatesList = function TemplatesList(props) {
  var active = props.active,
      disableableButtons = props.disableableButtons,
      indigoVerification = props.indigoVerification,
      onAction = props.onAction;
  var isTemplate = active && active.tool === 'template';
  var makeAction = function makeAction(struct, index) {
    return {
      shortcut: config["template-".concat(index)].shortcut,
      action: {
        tool: 'template',
        opts: {
          struct: struct
        }
      },
      title: struct.name
    };
  };
  return jsx(Fragment, {
    children: templates$1.map(function (struct, index) {
      return jsx(ActionButton, {
        name: "template-".concat(index),
        action: makeAction(struct, index),
        onAction: onAction,
        selected: isTemplate && active && active.opts.struct === struct,
        status: config["template-".concat(index)],
        disableableButtons: disableableButtons,
        indigoVerification: indigoVerification
      }, "template-".concat(index));
    })
  });
};

var classes$K = {"button-common-styles":"BottomToolbar-module_button-common-styles__PbtE9","scrollbar":"BottomToolbar-module_scrollbar__i1f8P","group":"BottomToolbar-module_group__b-pGt","root":"BottomToolbar-module_root__kjkSm"};

var _excluded$B = ["className"];
function ownKeys$Y(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$Y(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$Y(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Y(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Group$1 = function Group(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return jsx("div", {
    className: clsx(classes$K.group, className),
    children: children
  });
};
var BottomToolbar = function BottomToolbar(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded$B);
  var active = rest.active,
      disableableButtons = rest.disableableButtons,
      indigoVerification = rest.indigoVerification,
      onAction = rest.onAction;
  return jsxs("div", {
    className: clsx(classes$K.root, className),
    children: [jsx(Group$1, {
      children: jsx(TemplatesList, {
        active: active,
        indigoVerification: indigoVerification,
        disableableButtons: disableableButtons,
        onAction: onAction
      })
    }), jsx(Group$1, {
      children: jsx(ToolbarGroupItem, _objectSpread$Y({
        id: "template-lib"
      }, rest))
    })]
  });
};

function initLib(lib) {
  return {
    type: 'TMPL_INIT',
    data: {
      lib: lib
    }
  };
}
function initTmplLib(dispatch, baseUrl, cacheEl) {
  var fileName = 'library.sdf';
  return deserializeSdfTemplates(baseUrl, cacheEl, fileName).then(function (res) {
    var lib = res.concat(userTmpls());
    dispatch(initLib(lib));
    dispatch(appUpdate({
      templates: true
    }));
  });
}
var deserializeSdfTemplates = function deserializeSdfTemplates(baseUrl, cacheEl, fileName) {
  var sdfSerializer = new SdfSerializer();
  return prefetchStatic("".concat(baseUrl, "/templates/").concat(fileName)).then(function (text) {
    var tmpls = sdfSerializer.deserialize(text);
    var prefetch = prefetchRender(tmpls, baseUrl + '/templates/', cacheEl);
    return prefetch.then(function (cachedFiles) {
      return tmpls.map(function (tmpl) {
        var pr = prefetchSplit(tmpl);
        if (pr.file) tmpl.props.prerender = cachedFiles.indexOf(pr.file) !== -1 ? "#".concat(pr.id) : '';
        return tmpl;
      });
    });
  });
};
function userTmpls() {
  var userLib = storage.getItem('ketcher-tmpls');
  if (!Array.isArray(userLib) || userLib.length === 0) return [];
  var ketSerializer = new KetSerializer();
  return userLib.map(function (tmpl) {
    try {
      if (tmpl.props === '') tmpl.props = {};
      tmpl.props.group = 'User Templates';
      return {
        struct: ketSerializer.deserialize(tmpl.struct),
        props: tmpl.props
      };
    } catch (ex) {
      return null;
    }
  }).filter(function (tmpl) {
    return tmpl !== null;
  });
}
function prefetchStatic(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function (resp) {
    if (resp.ok) return resp.text();
    throw Error('Could not fetch ' + url);
  });
}
function prefetchSplit(tmpl) {
  var pr = tmpl.props.prerender;
  var res = pr && pr.split('#', 2);
  return {
    file: pr && res[0],
    id: pr && res[1]
  };
}
function prefetchRender(tmpls, baseUrl, cacheEl) {
  var files = tmpls.reduce(function (res, tmpl) {
    var file = prefetchSplit(tmpl).file;
    if (file && res.indexOf(file) === -1) res.push(file);
    return res;
  }, []);
  var fetch = Promise.all(files.map(function (fn) {
    return prefetchStatic(baseUrl + fn)["catch"](function () {
      return null;
    });
  }));
  return fetch.then(function (svgs) {
    svgs.forEach(function (svgContent) {
      if (svgContent) cacheEl.innerHTML += svgContent;
    });
    return files.filter(function (file, i) {
      return !!svgs[i];
    });
  });
}

function ownKeys$X(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$X(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$X(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$X(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function openDialog(dispatch, dialogName, props) {
  return new Promise(function (resolve, reject) {
    dispatch({
      type: 'MODAL_OPEN',
      data: {
        name: dialogName,
        prop: _objectSpread$X(_objectSpread$X({}, props), {}, {
          onResult: resolve,
          onCancel: reject
        })
      }
    });
  });
}
function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;
  if (type === 'UPDATE_FORM') {
    if (!state) {
      return null;
    }
    var formState = formReducer(state.form, action, state.name);
    return _objectSpread$X(_objectSpread$X({}, state), {}, {
      form: formState
    });
  }
  switch (type) {
    case 'MODAL_CLOSE':
      return null;
    case 'MODAL_OPEN':
      return {
        name: data.name,
        form: formsState[data.name] || null,
        prop: data.prop || null
      };
    default:
      return state;
  }
}

function ownKeys$W(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$W(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$W(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$W(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function selectTmpl(tmpl) {
  return {
    type: 'TMPL_SELECT',
    data: {
      selected: tmpl
    }
  };
}
function changeGroup(group) {
  return {
    type: 'TMPL_CHANGE_GROUP',
    data: {
      group: group,
      selected: null
    }
  };
}
function changeFilter(filter) {
  return {
    type: 'TMPL_CHANGE_FILTER',
    data: {
      filter: filter,
      selected: null
    }
  };
}
function initAttach(name, attach) {
  return {
    type: 'INIT_ATTACH',
    data: {
      name: name,
      atomid: attach.atomid,
      bondid: attach.bondid
    }
  };
}
function setAttachPoints(attach) {
  return {
    type: 'SET_ATTACH_POINTS',
    data: {
      atomid: attach.atomid,
      bondid: attach.bondid
    }
  };
}
function setTmplName(name) {
  return {
    type: 'SET_TMPL_NAME',
    data: {
      name: name
    }
  };
}
function editTmpl(tmpl) {
  return function (dispatch, getState) {
    openDialog(dispatch, 'attach', {
      tmpl: tmpl
    }).then(function (formData) {
      tmpl.struct.name = formData ? formData.name.trim() : tmpl.struct.name;
      tmpl.props = formData ? Object.assign({}, tmpl.props, formData.attach) : tmpl.props;
      if (tmpl.props.group === 'User Templates') updateLocalStore(getState().templates.lib);
    }, function () {
      return null;
    }).then(function () {
      return openDialog(dispatch, 'templates')["catch"](function () {
        return null;
      });
    });
  };
}
function deleteUserTmpl(tmpl) {
  return {
    type: 'TMPL_DELETE',
    data: {
      tmpl: tmpl
    }
  };
}
function deleteTmpl(tmpl) {
  return function (dispatch, getState) {
    var lib = getState().templates.lib.filter(function (value) {
      return value !== tmpl;
    });
    dispatch(deleteUserTmpl(tmpl));
    updateLocalStore(lib);
  };
}
function saveUserTmpl(struct) {
  var tmpl = {
    struct: struct.clone(),
    props: {}
  };
  return function (dispatch, getState) {
    openDialog(dispatch, 'attach', {
      tmpl: tmpl
    }).then(function (_ref) {
      var name = _ref.name,
          attach = _ref.attach;
      tmpl.struct.name = name.trim();
      tmpl.props = _objectSpread$W(_objectSpread$W({}, attach), {}, {
        group: 'User Templates'
      });
      var lib = getState().templates.lib.concat(tmpl);
      dispatch(initLib(lib));
      updateLocalStore(lib);
    })["catch"](function () {
      return null;
    });
  };
}
function updateLocalStore(lib) {
  var ketSerializer = new KetSerializer();
  var userLib = lib.filter(function (item) {
    return item.props.group === 'User Templates';
  }).map(function (item) {
    return {
      struct: ketSerializer.serialize(item.struct),
      props: Object.assign({}, omit(['group'], item.props))
    };
  });
  storage.setItem('ketcher-tmpls', userLib);
}
var initTmplsState = {
  lib: [],
  selected: null,
  filter: '',
  group: null,
  attach: {},
  mode: 'classic'
};
var tmplActions = ['TMPL_INIT', 'TMPL_SELECT', 'TMPL_CHANGE_GROUP', 'TMPL_CHANGE_FILTER'];
var attachActions = ['INIT_ATTACH', 'SET_ATTACH_POINTS', 'SET_TMPL_NAME'];
function templatesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initTmplsState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (tmplActions.includes(action.type)) return Object.assign({}, state, action.data);
  if (attachActions.includes(action.type)) {
    var attach = Object.assign({}, state.attach, action.data);
    return _objectSpread$W(_objectSpread$W({}, state), {}, {
      attach: attach
    });
  }
  if (action.type === 'TMPL_DELETE') {
    var currentState = Object.assign({}, state);
    var lib = currentState.lib.filter(function (value) {
      return value !== action.data.tmpl;
    });
    return _objectSpread$W(_objectSpread$W({}, currentState), {}, {
      lib: lib
    });
  }
  return state;
}

var _excluded$A = ["type", "action"];
function ownKeys$V(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$V(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$V(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$V(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function execute(activeTool, _ref) {
  var action = _ref.action,
      editor = _ref.editor,
      server = _ref.server,
      options = _ref.options;
  if (action.tool) {
    if (editor.tool(action.tool, action.opts)) {
      return action;
    }
  } else if (typeof action === 'function') {
    action(editor, server, options);
  } else ;
  return activeTool;
}
function selected(actObj, activeTool, _ref2) {
  var editor = _ref2.editor,
      server = _ref2.server;
  if (typeof actObj.selected === 'function') return actObj.selected(editor, server);else if (actObj.action && actObj.action.tool) return isEqual(activeTool, actObj.action);
  return false;
}
function disabled(actObj, _ref3) {
  var editor = _ref3.editor,
      server = _ref3.server,
      options = _ref3.options;
  if (typeof actObj.disabled === 'function') return actObj.disabled(editor, server, options);
  return false;
}
function hidden(actObj, _ref4) {
  var options = _ref4.options;
  if (typeof actObj.hidden === 'function') return actObj.hidden(options);
  return false;
}
function status(actionName, activeTool, params) {
  var actObj = config[actionName];
  return pickBy(function (x) {
    return x;
  }, {
    selected: selected(actObj, activeTool, params),
    disabled: disabled(actObj, params),
    hidden: hidden(actObj, params)
  });
}
function actionStateReducer () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref5 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref5.type,
      action = _ref5.action,
      params = _objectWithoutProperties(_ref5, _excluded$A);
  var activeTool;
  switch (type) {
    case 'INIT':
      action = config['select-rectangle'].action;
    case 'ACTION':
      activeTool = execute(state && state.activeTool, _objectSpread$V(_objectSpread$V({}, params), {}, {
        action: action
      }));
    case 'UPDATE':
      return Object.keys(config).reduce(function (res, actionName) {
        var value = status(actionName, res.activeTool, params);
        if (!isEmpty(value)) res[actionName] = value;
        return res;
      }, {
        activeTool: activeTool || state.activeTool
      });
    default:
      return state;
  }
}

function ownKeys$U(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$U(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$U(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$U(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState$1 = {
  lib: [],
  functionalGroupInfo: null,
  mode: 'fg'
};
var functionalGroupsReducer = function functionalGroupsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;
  switch (type) {
    case 'FG_INIT':
      return _objectSpread$U(_objectSpread$U({}, state), payload);
    case 'FG_HIGHLIGHT':
      return _objectSpread$U(_objectSpread$U({}, state), {}, {
        functionalGroupInfo: payload
      });
    default:
      return state;
  }
};
var initFGroups = function initFGroups(lib) {
  return {
    type: 'FG_INIT',
    payload: {
      lib: lib
    }
  };
};
var highlightFGroup = function highlightFGroup(group) {
  return {
    type: 'FG_HIGHLIGHT',
    payload: group
  };
};
function highlightFG(dispatch, group) {
  dispatch(highlightFGroup(group));
}
function initFGTemplates(baseUrl) {
  return function () {
    var _ref2 = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(dispatch) {
      var fileName, url, provider, sdfSerializer, text, templates, functionalGroups;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileName = 'fg.sdf';
              url = "".concat(baseUrl, "/templates/").concat(fileName);
              provider = FunctionalGroupsProvider.getInstance();
              sdfSerializer = new SdfSerializer();
              _context.next = 6;
              return prefetchStatic(url);
            case 6:
              text = _context.sent;
              templates = sdfSerializer.deserialize(text);
              functionalGroups = templates.reduce(function (acc, _ref3) {
                var struct = _ref3.struct;
                return [].concat(_toConsumableArray(acc), [struct]);
              }, []);
              provider.setFunctionalGroupsList(functionalGroups);
              dispatch(initFGroups(templates));
              dispatch(appUpdate({
                functionalGroups: true
              }));
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function ownKeys$T(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$T(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$T(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$T(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  lib: [],
  mode: 'fg'
};
var saltsAndSolventsReducer = function saltsAndSolventsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;
  switch (type) {
    case 'SALTS_AND_SOLVENTS_INIT':
      return _objectSpread$T(_objectSpread$T({}, state), payload);
    default:
      return state;
  }
};
var initSaltsAndSolvents = function initSaltsAndSolvents(lib) {
  return {
    type: 'SALTS_AND_SOLVENTS_INIT',
    payload: {
      lib: lib
    }
  };
};
function initSaltsAndSolventsTemplates(baseUrl) {
  return function () {
    var _ref2 = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(dispatch) {
      var fileName, url, saltsAndSolventsProvider, functionalGroupsProvider, sdfSerializer, text, templates, saltsAndSolvents;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fileName = 'salts-and-solvents.sdf';
              url = "".concat(baseUrl, "/templates/").concat(fileName);
              saltsAndSolventsProvider = SaltsAndSolventsProvider.getInstance();
              functionalGroupsProvider = FunctionalGroupsProvider.getInstance();
              sdfSerializer = new SdfSerializer();
              _context.next = 7;
              return prefetchStatic(url);
            case 7:
              text = _context.sent;
              templates = sdfSerializer.deserialize(text);
              saltsAndSolvents = templates.reduce(function (acc, _ref3) {
                var struct = _ref3.struct,
                    props = _ref3.props;
                struct.abbreviation = String(props.abbreviation);
                acc.push(struct);
                return acc;
              }, []);
              saltsAndSolventsProvider.setSaltsAndSolventsList(saltsAndSolvents);
              functionalGroupsProvider.addToFunctionalGroupsList(saltsAndSolvents);
              dispatch(initSaltsAndSolvents(templates));
              dispatch(appUpdate({
                saltsAndSolvents: true
              }));
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function ownKeys$S(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$S(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$S(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$S(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initial = {
  freqAtoms: [],
  currentAtom: 0,
  opened: null,
  visibleTools: {
    select: 'select-rectangle'
  }
};
var MAX_ATOMS = 7;
function updateVisibleTools(visibleTool, activeTool) {
  var regExp = /(bond)(-)(common|stereo|query)/;
  var menuHeight = window.innerHeight;
  return Object.keys(visibleTool).reduce(function (res, key) {
    if (key === 'bond' && menuHeight > 700) return res;
    if (key === 'transform' && menuHeight > 800) return res;
    if (key === 'rgroup' && menuHeight > 850) return res;
    if (key === 'shape' && menuHeight > 900) return res;
    if (!key.match(regExp) || menuHeight > 700) res[key] = visibleTool[key];
    return res;
  }, _objectSpread$S({}, activeTool));
}
function initResize() {
  return function (dispatch, getState) {
    var onResize = throttle(250, function () {
      var state = getState();
      state.editor.render.update();
      dispatch({
        type: 'CLEAR_VISIBLE',
        data: state.actionState.activeTool
      });
    });
    addEventListener('resize', onResize);
  };
}
function toolbarReducer () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;
  switch (type) {
    case 'ACTION':
      {
        var visibleTool = toolInMenu(action.action);
        return visibleTool ? _objectSpread$S(_objectSpread$S({}, state), {}, {
          opened: null,
          visibleTools: _objectSpread$S(_objectSpread$S({}, state.visibleTools), visibleTool)
        }) : _objectSpread$S(_objectSpread$S({}, state), {}, {
          opened: null
        });
      }
    case 'ADD_ATOMS':
      {
        var newState = addFreqAtom(data, state.freqAtoms, state.currentAtom);
        return _objectSpread$S(_objectSpread$S({}, state), newState);
      }
    case 'CLEAR_VISIBLE':
      {
        var activeTool = toolInMenu(action.data);
        var correctTools = updateVisibleTools(state.visibleTools, activeTool);
        return _objectSpread$S(_objectSpread$S({}, state), {}, {
          opened: null,
          visibleTools: _objectSpread$S({}, correctTools)
        });
      }
    case 'OPENED':
      {
        return data.isSelected && state.opened ? _objectSpread$S(_objectSpread$S({}, state), {}, {
          opened: null
        }) : _objectSpread$S(_objectSpread$S({}, state), {}, {
          opened: data.menuName
        });
      }
    case 'UPDATE':
      return _objectSpread$S(_objectSpread$S({}, state), {}, {
        opened: null
      });
    case 'MODAL_OPEN':
      return _objectSpread$S(_objectSpread$S({}, state), {}, {
        opened: null
      });
    default:
      return state;
  }
}
function addFreqAtom(label, freqAtoms, index) {
  label = capitalize(label);
  if (basicAtoms.indexOf(label) > -1 || freqAtoms.indexOf(label) !== -1) return {
    freqAtoms: freqAtoms
  };
  freqAtoms[index] = label;
  index = (index + 1) % MAX_ATOMS;
  return {
    freqAtoms: freqAtoms,
    currentAtom: index
  };
}
function addAtoms(atomLabel) {
  return {
    type: 'ADD_ATOMS',
    data: atomLabel
  };
}
function toolInMenu(action) {
  var tool = Object.keys(tools$1).find(function (toolName) {
    return isEqual(action, tools$1[toolName].action);
  });
  var sel = document.getElementById(tool);
  var dropdown = sel && hiddenAncestor(sel);
  return dropdown && dropdown.id !== '' ? _defineProperty({}, dropdown.id, sel.id) : null;
}
function hiddenAncestor(el, base) {
  base = base || document.body;
  var findEl = el;
  while (findEl && window.getComputedStyle(findEl).overflow !== 'hidden' && !findEl.classList.contains('opened')) {
    if (findEl === base) return null;
    findEl = findEl.parentNode;
  }
  return findEl;
}

var _excluded$z = ["type"],
    _excluded2$5 = ["buttons"];
function ownKeys$R(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$R(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$R(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$R(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var shared = combineReducers({
  actionState: actionStateReducer,
  toolbar: toolbarReducer,
  modal: modalReducer,
  server: function server() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return store;
  },
  editor: function editor() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return store;
  },
  options: optionsReducer,
  templates: templatesReducer,
  functionalGroups: functionalGroupsReducer,
  saltsAndSolvents: saltsAndSolventsReducer,
  requestsStatuses: requestReducer
});
function getRootReducer(setEditor) {
  return function root(state, action) {
    switch (action.type) {
      case 'INIT':
        setEditor(action.editor);
      case 'UPDATE':
        action.type;
            var data = _objectWithoutProperties(action, _excluded$z);
        if (data) state = _objectSpread$R(_objectSpread$R({}, state), data);
    }
    var sh = shared(state, _objectSpread$R(_objectSpread$R({}, action), pick(['editor', 'server', 'options'], state)));
    var finalState = sh === state.shared ? state : _objectSpread$R(_objectSpread$R({}, state), sh);
    global.currentState = finalState;
    return finalState;
  };
}
function createStore (options, server, setEditor) {
  var _options$buttons = options.buttons,
      buttons = _options$buttons === void 0 ? {} : _options$buttons,
      restOptions = _objectWithoutProperties(options, _excluded2$5);
  var initState = {
    actionState: null,
    editor: null,
    modal: null,
    options: Object.assign(initOptionsState, {
      app: restOptions,
      buttons: buttons
    }),
    server: server || Promise.reject(new Error('Standalone mode!')),
    templates: initTmplsState
  };
  var middleware = [thunk];
  var rootReducer = getRootReducer(setEditor);
  return createStore$1(rootReducer, initState, applyMiddleware.apply(void 0, middleware));
}

var mapStateToProps$j = function mapStateToProps(state) {
  return {
    active: state.actionState && state.actionState.activeTool,
    status: state.actionState || {},
    opened: state.toolbar.opened,
    indigoVerification: state.requestsStatuses.indigoVerification,
    disableableButtons: []
  };
};
var mapDispatchToProps$i = function mapDispatchToProps(dispatch) {
  return {
    onAction: function onAction$1(action) {
      return dispatch(onAction(action));
    },
    onOpen: function onOpen(menuName, isSelected) {
      return dispatch({
        type: 'OPENED',
        data: {
          menuName: menuName,
          isSelected: isSelected
        }
      });
    }
  };
};
var BottomToolbarContainer = connect(mapStateToProps$j, mapDispatchToProps$i)(BottomToolbar);

function makeItems(ids) {
  return ids.map(function (id) {
    return {
      id: id
    };
  });
}

var bondCommon = makeItems(['bond-single', 'bond-double', 'bond-triple']);
var bondStereo = makeItems(['bond-up', 'bond-down', 'bond-updown', 'bond-crossed']);
var bondQuery = makeItems(['bond-any', 'bond-aromatic', 'bond-singledouble', 'bond-singlearomatic', 'bond-doublearomatic']);
var bondSpecial = makeItems(['bond-dative', 'bond-hydrogen']);
var groups = [bondCommon, bondStereo, bondQuery, bondSpecial];
var groupOptions = groups.flat();
var groupDescriptors = groups.reduce(function (accum, group, index) {
  var _accum;
  var start = ((_accum = accum[index - 1]) === null || _accum === void 0 ? void 0 : _accum.end) || 0;
  accum.push({
    start: start,
    end: start + group.length
  });
  return accum;
}, []);

var rGroupOptions = makeItems(['rgroup-label', 'rgroup-fragment', 'rgroup-attpoints']);
var shapeOptions = makeItems(['shape-ellipse', 'shape-rectangle', 'shape-line']);
var transformOptions = makeItems(['transform-rotate', 'transform-flip-h', 'transform-flip-v']);
var selectOptions$2 = makeItems(['select-rectangle', 'select-lasso', 'select-fragment']);
var arrowsOptions = makeItems(['reaction-arrow-open-angle', 'reaction-arrow-filled-triangle', 'reaction-arrow-filled-bow', 'reaction-arrow-dashed-open-angle', 'reaction-arrow-failed', 'reaction-arrow-both-ends-filled-triangle', 'reaction-arrow-equilibrium-filled-half-bow', 'reaction-arrow-equilibrium-filled-triangle', 'reaction-arrow-equilibrium-open-angle', 'reaction-arrow-unbalanced-equilibrium-filled-half-bow', 'reaction-arrow-unbalanced-equilibrium-open-half-angle', 'reaction-arrow-unbalanced-equilibrium-large-filled-half-bow', 'reaction-arrow-unbalanced-equilibrium-filled-half-triangle', 'reaction-arrow-elliptical-arc-arrow-filled-bow', 'reaction-arrow-elliptical-arc-arrow-filled-triangle', 'reaction-arrow-elliptical-arc-arrow-open-angle', 'reaction-arrow-elliptical-arc-arrow-open-half-angle']);
var mappingOptions = makeItems(['reaction-map', 'reaction-unmap', 'reaction-automap']);

var classes$J = {"scroll":"ArrowScroll-module_scroll__h9kCx","button":"ArrowScroll-module_button__ygMgL","down":"ArrowScroll-module_down__yDzZX","up":"ArrowScroll-module_up__Q1ubd"};

function useSettingsContext() {
  return React__default.useContext(settingsContext);
}

function ownKeys$Q(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$Q(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$Q(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Q(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var throttleMilliseconds = 100;
function useThrottleResizeObserver() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = useState({
    height: undefined,
    width: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];
  var onResize = useMemo(function () {
    return throttle$1(setSize, throttleMilliseconds);
  }, []);
  var _useResizeObserver = useResizeObserver(_objectSpread$Q({
    onResize: onResize
  }, options)),
      ref = _useResizeObserver.ref;
  return _objectSpread$Q({
    ref: ref
  }, size);
}

function useFormContext() {
  return React__default.useContext(formContext);
}

var useAppContext = function useAppContext() {
  return React__default.useContext(appContext);
};

var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(callback);
  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(function () {
    if (delay === null) {
      return;
    }
    var id = setInterval(function () {
      return savedCallback.current();
    }, delay);
    return function () {
      return clearInterval(id);
    };
  }, [delay]);
};

var KETCHER_INIT_EVENT_NAME = 'ketcher-init';

var useSubscriptionOnEvents = function useSubscriptionOnEvents() {
  var dispatch = useDispatch();
  var _useAppContext = useAppContext(),
      getKetcherInstance = _useAppContext.getKetcherInstance;
  var loadingHandler = function loadingHandler() {
    dispatch(indigoVerification(true));
  };
  var actionResultHandler = function actionResultHandler() {
    dispatch(indigoVerification(false));
  };
  var subscribe = function subscribe(ketcher) {
    ketcher.eventBus.addListener(KetcherAsyncEvents.LOADING, loadingHandler);
    ketcher.eventBus.addListener(KetcherAsyncEvents.SUCCESS, actionResultHandler);
    ketcher.eventBus.addListener(KetcherAsyncEvents.FAILURE, actionResultHandler);
  };
  var unsubscribe = function unsubscribe(ketcher) {
    ketcher.eventBus.removeListener(KetcherAsyncEvents.LOADING, loadingHandler);
    ketcher.eventBus.removeListener(KetcherAsyncEvents.SUCCESS, actionResultHandler);
    ketcher.eventBus.removeListener(KetcherAsyncEvents.FAILURE, actionResultHandler);
  };
  useEffect(function () {
    var subscribeOnInit = function subscribeOnInit() {
      subscribe(getKetcherInstance());
    };
    var unsubscribeOnUnMount = function unsubscribeOnUnMount() {
      unsubscribe(getKetcherInstance());
    };
    window.addEventListener(KETCHER_INIT_EVENT_NAME, function () {
      subscribeOnInit();
    });
    return function () {
      unsubscribeOnUnMount();
      window.removeEventListener(KETCHER_INIT_EVENT_NAME, subscribeOnInit);
    };
  }, []);
};

var ArrowScroll = function ArrowScroll(_ref) {
  var startInView = _ref.startInView,
      endInView = _ref.endInView,
      scrollUp = _ref.scrollUp,
      scrollDown = _ref.scrollDown;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isScrollDown = _useState2[0],
      setScrollDown = _useState2[1];
  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrollUp = _useState4[0],
      setScrollUp = _useState4[1];
  useInterval(scrollDown, isScrollDown ? 100 : null);
  useInterval(scrollUp, isScrollUp ? 100 : null);
  useEffect(function () {
    return function () {
      setScrollUp(false);
    };
  }, [startInView]);
  useEffect(function () {
    return function () {
      setScrollDown(false);
    };
  }, [endInView]);
  return jsxs("div", {
    className: classes$J.scroll,
    children: [endInView ? jsx(Fragment, {}) : jsx("button", {
      onClick: function onClick() {
        return scrollDown();
      },
      onMouseUp: function onMouseUp() {
        return setScrollDown(false);
      },
      onMouseDown: function onMouseDown() {
        return setScrollDown(true);
      },
      className: clsx(classes$J.button, classes$J.down),
      children: "\u25BC"
    }), startInView ? jsx(Fragment, {}) : jsx("button", {
      onClick: function onClick() {
        return scrollUp();
      },
      onMouseUp: function onMouseUp() {
        return setScrollUp(false);
      },
      onMouseDown: function onMouseDown() {
        return setScrollUp(true);
      },
      className: clsx(classes$J.button, classes$J.up),
      children: "\u25B2"
    })]
  });
};

var mediaSizes$2 = {
  topSeparatorsShowingWidth: 1080,
  bondCollapsableHeight: 770,
  rGroupCollapsableHeight: 1000,
  shapeCollapsableHeight: 1000,
  transformCollapsableHeight: 870
};

var _excluded$y = ["height"];
function ownKeys$P(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$P(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$P(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$P(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Bond$1 = function Bond(props) {
  var height = props.height,
      rest = _objectWithoutProperties(props, _excluded$y);
  if (height && height <= mediaSizes$2.bondCollapsableHeight) {
    return jsx(ToolbarMultiToolItem, _objectSpread$P({
      id: "bonds",
      options: groupOptions,
      variant: "grouped",
      groups: groupDescriptors
    }, rest));
  }
  return jsxs(Fragment, {
    children: [jsx(ToolbarMultiToolItem, _objectSpread$P({
      id: "bond-common",
      options: bondCommon
    }, rest)), jsx(ToolbarMultiToolItem, _objectSpread$P({
      id: "bond-stereo",
      options: bondStereo
    }, rest)), jsx(ToolbarMultiToolItem, _objectSpread$P({
      id: "bond-query",
      options: bondQuery
    }, rest)), jsx(ToolbarMultiToolItem, _objectSpread$P({
      id: "bond-special",
      options: bondSpecial
    }, rest))]
  });
};

function ownKeys$O(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$O(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$O(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$O(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var RGroup$1 = function RGroup(props) {
  return jsx(ToolbarGroupItem, _objectSpread$O({
    id: "rgroup",
    options: rGroupOptions
  }, props));
};

function ownKeys$N(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$N(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$N(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$N(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Shape = function Shape(props) {
  return jsx(ToolbarGroupItem, _objectSpread$N({
    id: "shapes",
    options: shapeOptions
  }, props));
};

var _excluded$x = ["height"];
function ownKeys$M(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$M(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$M(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$M(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Transform = function Transform(props) {
  var height = props.height,
      rest = _objectWithoutProperties(props, _excluded$x);
  if (height && height <= mediaSizes$2.transformCollapsableHeight) {
    return jsx(ToolbarGroupItem, _objectSpread$M({
      id: "transforms",
      options: transformOptions
    }, rest));
  }
  return jsxs(Fragment, {
    children: [jsx(ToolbarGroupItem, _objectSpread$M({
      id: "transform-rotate"
    }, rest)), jsx(ToolbarGroupItem, _objectSpread$M({
      id: "transform-flip-h"
    }, rest)), jsx(ToolbarGroupItem, _objectSpread$M({
      id: "transform-flip-v"
    }, rest))]
  });
};

var classes$I = {"button-common-styles":"LeftToolbar-module_button-common-styles__WgnON","scrollbar":"LeftToolbar-module_scrollbar__OBwid","group":"LeftToolbar-module_group__0s41t","root":"LeftToolbar-module_root__yhhZm","buttons":"LeftToolbar-module_buttons__lnIjn","borderOff":"LeftToolbar-module_borderOff__om425","groupItem":"LeftToolbar-module_groupItem__OqQu0"};

var _excluded$w = ["className"];
function ownKeys$L(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$L(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$L(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$L(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var LeftToolbar = function LeftToolbar(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded$w);
  var _useResizeObserver = useThrottleResizeObserver(),
      ref = _useResizeObserver.ref,
      height = _useResizeObserver.height;
  var scrollRef = useRef();
  var _useInView = useInView({
    threshold: 0.8
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      startRef = _useInView2[0],
      startInView = _useInView2[1];
  var _useInView3 = useInView({
    threshold: 0.8
  }),
      _useInView4 = _slicedToArray(_useInView3, 2),
      endRef = _useInView4[0],
      endInView = _useInView4[1];
  var sizeRef = useRef();
  var Item = function Item(_ref) {
    var id = _ref.id,
        options = _ref.options;
    return ToolbarGroupItem(_objectSpread$L({
      id: id,
      options: options
    }, rest));
  };
  var scrollUp = function scrollUp() {
    scrollRef.current.scrollTop -= sizeRef.current.offsetHeight;
  };
  var scrollDown = function scrollDown() {
    scrollRef.current.scrollTop += sizeRef.current.offsetHeight;
  };
  var status = rest.status;
  var Group = function Group(_ref2) {
    var items = _ref2.items,
        className = _ref2.className;
    var visibleItems = [];
    if (items) {
      items.forEach(function (item) {
        var _status$item$id, _item$options;
        var visible = true;
        if ((_status$item$id = status[item.id]) !== null && _status$item$id !== void 0 && _status$item$id.hidden) {
          visible = false;
        } else if ((_item$options = item.options) !== null && _item$options !== void 0 && _item$options.every(function (option) {
          var _status$option$id;
          return (_status$option$id = status[option.id]) === null || _status$option$id === void 0 ? void 0 : _status$option$id.hidden;
        })) {
          visible = false;
        }
        if (visible) visibleItems.push(item);
      });
    }
    return visibleItems.length ? jsx("div", {
      className: clsx(classes$I.group, className),
      children: visibleItems.map(function (item) {
        switch (item.id) {
          case 'bond-common':
            return createElement(Bond$1, _objectSpread$L(_objectSpread$L({}, rest), {}, {
              height: height,
              key: item.id
            }));
          case 'transform-rotate':
            return createElement(Transform, _objectSpread$L(_objectSpread$L({}, rest), {}, {
              height: height,
              key: item.id
            }));
          case 'rgroup':
            return createElement(RGroup$1, _objectSpread$L(_objectSpread$L({}, rest), {}, {
              key: item.id
            }));
          case 'shapes':
            return createElement(Shape, _objectSpread$L(_objectSpread$L({}, rest), {}, {
              key: item.id
            }));
          default:
            return jsx(Item, {
              id: item.id,
              options: item.options
            }, item.id);
        }
      })
    }) : null;
  };
  return jsxs("div", {
    className: clsx(classes$I.root, className),
    ref: ref,
    children: [jsxs("div", {
      className: classes$I.buttons,
      ref: scrollRef,
      children: [jsx("div", {
        className: classes$I.listener,
        ref: startRef,
        children: jsx(Group, {
          className: classes$I.groupItem,
          items: [{
            id: 'hand'
          }, {
            id: 'select',
            options: selectOptions$2
          }, {
            id: 'erase'
          }]
        })
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'bonds',
          options: [].concat(_toConsumableArray(bondCommon), _toConsumableArray(bondQuery), _toConsumableArray(bondSpecial), _toConsumableArray(bondStereo))
        }, {
          id: 'chain'
        }]
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'charge-plus'
        }, {
          id: 'charge-minus'
        }]
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'transforms',
          options: transformOptions
        }]
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'sgroup'
        }, {
          id: 'sgroup-data'
        }]
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'reaction-plus'
        }, {
          id: 'arrows',
          options: arrowsOptions
        }, {
          id: 'reaction-mapping-tools',
          options: mappingOptions
        }]
      }), jsx("div", {
        className: classes$I.listener,
        ref: sizeRef,
        children: jsx(Group, {
          className: classes$I.groupItem,
          items: [{
            id: 'rgroup',
            options: rGroupOptions
          }]
        })
      }), jsx(Group, {
        className: classes$I.groupItem,
        items: [{
          id: 'shapes',
          options: shapeOptions
        }]
      }), jsx("div", {
        ref: endRef,
        children: jsx(Group, {
          className: classes$I.groupItem,
          items: [{
            id: 'text'
          }]
        })
      })]
    }), jsx(ArrowScroll, {
      startInView: startInView,
      endInView: endInView,
      scrollUp: scrollUp,
      scrollDown: scrollDown
    })]
  });
};

var mapStateToProps$i = function mapStateToProps(state) {
  return {
    status: state.actionState || {},
    opened: state.toolbar.opened,
    indigoVerification: state.requestsStatuses.indigoVerification,
    disableableButtons: []
  };
};
var mapDispatchToProps$h = function mapDispatchToProps(dispatch) {
  return {
    onAction: function onAction$1(action) {
      return dispatch(onAction(action));
    },
    onOpen: function onOpen(menuName, isSelected) {
      return dispatch({
        type: 'OPENED',
        data: {
          menuName: menuName,
          isSelected: isSelected
        }
      });
    }
  };
};
var LeftToolbarContainer = connect(mapStateToProps$i, mapDispatchToProps$h)(LeftToolbar);

var classes$H = {"button-common-styles":"Atom-module_button-common-styles__j3EUJ","scrollbar":"Atom-module_scrollbar__iO-Ni","atom":"Atom-module_atom__g2RUu"};

var _excluded$v = ["el", "shortcut", "selected"];
function ownKeys$K(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$K(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$K(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$K(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Atom$1(_ref) {
  var el = _ref.el,
      shortcut = _ref.shortcut,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, _excluded$v);
  return jsx("button", _objectSpread$K(_objectSpread$K({
    title: shortcut ? "".concat(el.title, " (").concat(shortcut, ")") : el.title,
    className: clsx(classes$H.atom, {
      selected: selected
    }),
    value: el.number
  }, props), {}, {
    children: jsx("span", {
      children: el.label
    })
  }));
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/**
 * @module color-parse
 */

/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
};

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [], alpha = 1, space;

	if (typeof cstr === 'string') {
		//keyword
		if (colorName[cstr]) {
			parts = colorName[cstr].slice();
			space = 'rgb';
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0;
			space = 'rgb';
			parts = [0,0,0];
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.slice(1);
			var size = base.length;
			var isShort = size <= 4;
			alpha = 1;

			if (isShort) {
				parts = [
					parseInt(base[0] + base[0], 16),
					parseInt(base[1] + base[1], 16),
					parseInt(base[2] + base[2], 16)
				];
				if (size === 4) {
					alpha = parseInt(base[3] + base[3], 16) / 255;
				}
			}
			else {
				parts = [
					parseInt(base[0] + base[1], 16),
					parseInt(base[2] + base[3], 16),
					parseInt(base[4] + base[5], 16)
				];
				if (size === 8) {
					alpha = parseInt(base[6] + base[7], 16) / 255;
				}
			}

			if (!parts[0]) parts[0] = 0;
			if (!parts[1]) parts[1] = 0;
			if (!parts[2]) parts[2] = 0;

			space = 'rgb';
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1];
			var isRGB = name === 'rgb';
			var base = name.replace(/a$/, '');
			space = base;
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3;
			parts = m[2].trim()
				.split(/\s*[,\/]\s*|\s+/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100
						return parseFloat(x)
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x)
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x]
						}
					}
					return parseFloat(x)
				});

			if (name === base) parts.push(1);
			alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size];
			parts = parts.slice(0, size);
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value)
			});

			space = cstr.match(/([a-z])/ig).join('').toLowerCase();
		}
	}

	//numeric case
	else if (!isNaN(cstr)) {
		space = 'rgb';
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff];
	}

	//array-like
	else if (Array.isArray(cstr) || cstr.length) {
		parts = [cstr[0], cstr[1], cstr[2]];
		space = 'rgb';
		alpha = cstr.length === 4 ? cstr[3] : 1;
	}

	//object case - detects css cases of rgb and hsl
	else if (cstr instanceof Object) {
		if (cstr.r != null || cstr.red != null || cstr.R != null) {
			space = 'rgb';
			parts = [
				cstr.r || cstr.red || cstr.R || 0,
				cstr.g || cstr.green || cstr.G || 0,
				cstr.b || cstr.blue || cstr.B || 0
			];
		}
		else {
			space = 'hsl';
			parts = [
				cstr.h || cstr.hue || cstr.H || 0,
				cstr.s || cstr.saturation || cstr.S || 0,
				cstr.l || cstr.lightness || cstr.L || cstr.b || cstr.brightness
			];
		}

		alpha = cstr.a || cstr.alpha || cstr.opacity || 1;

		if (cstr.opacity != null) alpha /= 100;
	}

	return {
		space: space,
		values: parts,
		alpha: alpha
	}
}

/**
 * @module  color-alpha
 */

function alpha (color, value) {
	var obj = parse(color);

	if (value == null) value = obj.alpha;

	//catch percent
	if (obj.space[0] === 'h') {
		return obj.space + ['a(', obj.values[0], ',', obj.values[1], '%,', obj.values[2], '%,', value, ')'].join('');
	}

	return obj.space + ['a(', obj.values, ',', value, ')'].join('');
}

var StyledAtom = styled(Atom$1)(function (props) {
  var _props$el;
  var atomColor = props !== null && props !== void 0 && (_props$el = props.el) !== null && _props$el !== void 0 && _props$el.label ? ElementColor[props.el.label] : '#000';
  return "\n       color: ".concat(atomColor, ";\n       border: 1px solid ").concat(atomColor, ";\n       background-color: transparent;\n       cursor: pointer;\n       &:hover {\n         background-color: ").concat(alpha(atomColor, 0.2), ";\n       }\n       &:active {\n         color: #fff;\n         background-color: ").concat(alpha(atomColor, 0.8), ";\n       }\n       &.selected {\n         color: #fff;\n         background-color: ").concat(alpha(atomColor, 0.8), ";\n         &:hover {\n           background-color: ").concat(atomColor, ";\n         }\n       }\n   ");
});
var AtomsList = forwardRef(function (props, ref) {
  var atoms = props.atoms,
      active = props.active,
      onAction = props.onAction;
  var isAtom = active && active.tool === 'atom';
  return jsx("div", {
    ref: ref,
    children: atoms.map(function (label) {
      var element = Elements.get(label);
      var shortcut = atoms.indexOf(label) > -1 ? shortcutStr(atomCuts[label]) : null;
      var isSelected = isAtom && active && active.opts.label === label;
      return jsx(StyledAtom, {
        el: element,
        shortcut: shortcut,
        className: isSelected ? 'selected' : '',
        selected: isSelected,
        onClick: function onClick() {
          return onAction({
            tool: 'atom',
            opts: {
              label: label
            }
          });
        }
      }, label);
    })
  });
});

var classes$G = {"button-common-styles":"RightToolbar-module_button-common-styles__fNlqY","scrollbar":"RightToolbar-module_scrollbar__2Q0UU","group":"RightToolbar-module_group__3mhUx","root":"RightToolbar-module_root__1D5hp","atomsList":"RightToolbar-module_atomsList__ar08-","buttons":"RightToolbar-module_buttons__YxRHI"};

var _excluded$u = ["className"];
function ownKeys$J(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$J(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$J(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$J(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Group = function Group(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return jsx("div", {
    className: clsx(classes$G.group, className),
    children: children
  });
};
var RightToolbar = function RightToolbar(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded$u);
  var active = rest.active,
      onAction = rest.onAction,
      freqAtoms = rest.freqAtoms;
  var _useInView = useInView({
    threshold: 0.95
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      startRef = _useInView2[0],
      startInView = _useInView2[1];
  var _useInView3 = useInView({
    threshold: 0.8
  }),
      _useInView4 = _slicedToArray(_useInView3, 2),
      endRef = _useInView4[0],
      endInView = _useInView4[1];
  var sizeRef = useRef();
  var scrollRef = useRef();
  var scrollUp = function scrollUp() {
    scrollRef.current.scrollTop -= sizeRef.current.offsetHeight;
  };
  var scrollDown = function scrollDown() {
    scrollRef.current.scrollTop += sizeRef.current.offsetHeight;
  };
  return jsxs("div", {
    className: clsx(classes$G.root, className),
    children: [jsxs("div", {
      className: classes$G.buttons,
      ref: scrollRef,
      children: [jsxs(Group, {
        className: classes$G.atomsList,
        children: [jsx(AtomsList, {
          ref: startRef,
          atoms: basicAtoms,
          active: active,
          onAction: onAction
        }), jsx(AtomsList, {
          atoms: freqAtoms,
          active: active,
          onAction: onAction
        }), jsx(ToolbarGroupItem, _objectSpread$J({
          id: "period-table"
        }, rest))]
      }), jsx(Group, {
        children: jsxs("div", {
          ref: sizeRef,
          children: [jsx(ToolbarGroupItem, _objectSpread$J({
            id: "any-atom"
          }, rest)), jsx(ToolbarGroupItem, _objectSpread$J({
            id: "extended-table"
          }, rest))]
        })
      }), jsx("div", {
        ref: endRef
      })]
    }), jsx(ArrowScroll, {
      startInView: startInView,
      endInView: endInView,
      scrollUp: scrollUp,
      scrollDown: scrollDown
    })]
  });
};

var mapStateToProps$h = function mapStateToProps(state) {
  return {
    active: state.actionState && state.actionState.activeTool,
    status: state.actionState || {},
    freqAtoms: state.toolbar.freqAtoms,
    opened: state.toolbar.opened,
    indigoVerification: state.requestsStatuses.indigoVerification,
    disableableButtons: []
  };
};
var mapDispatchToProps$g = function mapDispatchToProps(dispatch) {
  return {
    onAction: function onAction$1(action) {
      return dispatch(onAction(action));
    },
    onOpen: function onOpen(menuName, isSelected) {
      return dispatch({
        type: 'OPENED',
        data: {
          menuName: menuName,
          isSelected: isSelected
        }
      });
    }
  };
};
var RightToolbarContainer = connect(mapStateToProps$h, mapDispatchToProps$g)(RightToolbar);

var _templateObject$8;
var Button = styled(IconButton$1)(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  display: block;\n  color: #333;\n  border: 0;\n  position: relative;\n  background: inherit;\n\n  flex-shrink: 0;\n\n  border-radius: 4px;\n  margin: 0px;\n  padding: 2px;\n  height: 28px;\n  width: 28px;\n\n  &:hover {\n    color: #006775;\n    transform: none;\n    box-shadow: none;\n    transition: none;\n    background: none;\n  }\n\n  &:active {\n    background-color: #006775;\n    color: white;\n    &:hover {\n      background-color: #188794;\n    }\n  }\n\n  & svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  &.Mui-disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    background-color: initial;\n    color: #333;\n    pointer-events: auto;\n  }\n\n  @media only screen and (min-width: 1024px) {\n    height: 32px;\n    width: 32px;\n    padding: 4px;\n  }\n\n  @media only screen and (min-width: 1920px) {\n    height: 40px;\n    width: 40px;\n    padding: 5px;\n  }\n"])));
var IconButton = function IconButton(_ref) {
  var onClick = _ref.onClick,
      iconName = _ref.iconName,
      title = _ref.title,
      shortcut = _ref.shortcut,
      _ref$isHidden = _ref.isHidden,
      isHidden = _ref$isHidden === void 0 ? false : _ref$isHidden,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var combinedTitle = shortcut ? "".concat(title, " (").concat(shortcut, ")") : title;
  if (isHidden) {
    return null;
  }
  return jsx(Button, {
    title: combinedTitle,
    onClick: onClick,
    disabled: disabled,
    children: jsx(Icon, {
      name: iconName
    })
  });
};

var FileControls = function FileControls(_ref) {
  var onFileOpen = _ref.onFileOpen,
      onSave = _ref.onSave,
      shortcuts = _ref.shortcuts,
      hiddenButtons = _ref.hiddenButtons;
  return jsxs(Fragment, {
    children: [jsx(IconButton, {
      title: "Open...",
      onClick: onFileOpen,
      iconName: "open",
      shortcut: shortcuts.open,
      isHidden: hiddenButtons.includes('open')
    }), jsx(IconButton, {
      title: "Save as...",
      onClick: onSave,
      iconName: "save",
      shortcut: shortcuts.save,
      isHidden: hiddenButtons.includes('save')
    })]
  });
};

var _templateObject$7, _templateObject2$2, _templateObject3$2, _templateObject4$2;
var ElementAndDropdown$1 = styled('div')(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var DropDownContent$1 = styled('div')(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  left: 5px;\n  border-radius: 2px;\n  flex-direction: column;\n  z-index: 20;\n  white-space: nowrap;\n  word-break: keep-all;\n  padding: 2px;\n  background: white; // TODO use variable\n  border: 1px solid #cad3dd; // TODO use variable\n  border-radius: 5px;\n  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\n"])));
var DropDownButton$1 = styled(IconButton$1)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 0;\n  right: 0;\n  bottom: 0;\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    background-color: initial;\n    color: #333;\n    pointer-events: auto;\n  }\n"])));
var DropDownArrow = styled(Icon)(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n  display: block;\n  width: 7px;\n  height: 7px;\n  margin: 1px;\n\n  &:hover {\n    fill: #005662;\n    transform: none;\n    box-shadow: none;\n    transition: none;\n    background: none;\n  }\n\n  &svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  &svg path {\n    fill: inherit;\n  }\n"])));
var MenuItemWithDropdown = function MenuItemWithDropdown(_ref) {
  var topElement = _ref.topElement,
      dropDownElements = _ref.dropDownElements,
      onToolOpen = _ref.onToolOpen;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];
  var collapse = function collapse() {
    setIsExpanded(false);
  };
  var expand = function expand() {
    onToolOpen();
    setIsExpanded(true);
  };
  return jsxs(ElementAndDropdown$1, {
    children: [topElement && topElement, dropDownElements.filter(function (element) {
      return !element.props.isHidden;
    }).length !== 0 && jsx(DropDownButton$1, {
      onClick: expand,
      className: "expanded ".concat(topElement !== null && topElement !== void 0 && topElement.props.disabled ? 'disabled' : ''),
      children: !isExpanded && jsx(DropDownArrow, {
        name: "dropdown"
      })
    }), jsx(Collapse, {
      "in": isExpanded,
      timeout: "auto",
      onClick: collapse,
      unmountOnExit: true,
      children: jsx(ClickAwayListener, {
        onClickAway: collapse,
        children: jsx(DropDownContent$1, {
          children: dropDownElements
        })
      })
    })]
  });
};
var mapDispatchToProps$f = function mapDispatchToProps(dispatch) {
  return {
    onToolOpen: function onToolOpen() {
      return dispatch({
        type: 'OPENED',
        data: {
          menuName: null,
          isSelected: null
        }
      });
    }
  };
};
var ElementWithDropdown = connect(null, mapDispatchToProps$f)(MenuItemWithDropdown);

var ClipboardControls = function ClipboardControls(_ref) {
  var onCopy = _ref.onCopy,
      onCopyMol = _ref.onCopyMol,
      onCopyKet = _ref.onCopyKet,
      onCopyImage = _ref.onCopyImage,
      onPaste = _ref.onPaste,
      onCut = _ref.onCut,
      shortcuts = _ref.shortcuts,
      disabledButtons = _ref.disabledButtons,
      hiddenButtons = _ref.hiddenButtons;
  var copyButtons = [{
    name: 'copy',
    title: 'Copy',
    handler: onCopy
  }, {
    name: 'copy-mol',
    title: 'Copy as MOL',
    handler: onCopyMol
  }, {
    name: 'copy-ket',
    title: 'Copy as KET',
    handler: onCopyKet
  }, {
    name: 'copy-image',
    title: 'Copy Image',
    handler: onCopyImage
  }];
  var getButtonElement = function getButtonElement(button) {
    return jsx(IconButton, {
      title: button.title,
      onClick: button.handler,
      iconName: button.name,
      shortcut: shortcuts[button.name],
      disabled: disabledButtons.includes(button.name),
      isHidden: hiddenButtons.includes(button.name)
    }, button.name);
  };
  var firstButtonObj = copyButtons.find(function (button) {
    return !hiddenButtons.includes(button.name);
  });
  var collapsibleElements = copyButtons.filter(function (button) {
    return button !== firstButtonObj;
  }).map(function (button) {
    return getButtonElement(button);
  });
  return jsxs(Fragment, {
    children: [!hiddenButtons.includes('copies') && jsx(ElementWithDropdown, {
      topElement: getButtonElement(firstButtonObj),
      dropDownElements: collapsibleElements
    }), jsx(IconButton, {
      title: "Paste",
      onClick: onPaste,
      iconName: "paste",
      shortcut: shortcuts.paste,
      disabled: disabledButtons.includes('paste'),
      isHidden: hiddenButtons.includes('paste')
    }), jsx(IconButton, {
      title: "Cut",
      onClick: onCut,
      iconName: "cut",
      shortcut: shortcuts.cut,
      disabled: disabledButtons.includes('cut'),
      isHidden: hiddenButtons.includes('cut')
    })]
  });
};

var _templateObject$6;
var VerticalDivider = styled('hr')(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  margin: 0px 3px;\n  flex-shrink: 0;\n  height: 45%;\n  align-self: center;\n  border-width: 0px thin 0px 0px;\n  border-style: solid;\n  border-color: #b4b9d6; // TODO: use variable\n"])));
var Divider = function Divider() {
  return jsx(VerticalDivider, {});
};

var UndoRedo = function UndoRedo(_ref) {
  var onUndo = _ref.onUndo,
      onRedo = _ref.onRedo,
      disabledButtons = _ref.disabledButtons,
      hiddenButtons = _ref.hiddenButtons,
      shortcuts = _ref.shortcuts;
  return jsxs(Fragment, {
    children: [jsx(Divider, {}), jsx(IconButton, {
      title: "Undo",
      onClick: onUndo,
      iconName: "undo",
      disabled: disabledButtons.includes('undo'),
      isHidden: hiddenButtons.includes('undo'),
      shortcut: shortcuts.undo
    }), jsx(IconButton, {
      title: "Redo",
      onClick: onRedo,
      iconName: "redo",
      disabled: disabledButtons.includes('redo'),
      isHidden: hiddenButtons.includes('redo'),
      shortcut: shortcuts.redo
    }), jsx(Divider, {})]
  });
};

var _templateObject$5;
var StyledInput = styled('input')(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  border: 1px solid #cad3dd;\n  border-radius: 4px;\n  padding: 3px 8px;\n  color: #585858;\n  font-size: 14px;\n  line-height: 16px;\n  caret-color: #43b5c0;\n  margin-bottom: 8px;\n\n  &:hover {\n    border-color: #43b5c0;\n  }\n\n  &:active,\n  &:focus {\n    border-color: #167782;\n    outline: none;\n  }\n\n  &::after,\n  &::before {\n    display: none;\n  }\n"])));
var onFocusHandler = function onFocusHandler(event) {
  var el = event.target;
  el.select();
};
var updateInputString = function updateInputString(zoom, inputElement) {
  if (!inputElement) return;
  inputElement.value = "".concat(zoom, "%");
};
var ZoomInput = function ZoomInput(_ref) {
  var onZoomSubmit = _ref.onZoomSubmit,
      currentZoom = _ref.currentZoom,
      inputRef = _ref.inputRef,
      shortcuts = _ref.shortcuts;
  useEffect(function () {
    var inputEl = inputRef.current;
    updateInputString(currentZoom, inputEl);
    if (document.activeElement === inputEl) {
      inputEl === null || inputEl === void 0 ? void 0 : inputEl.select();
    }
  }, [currentZoom, inputRef]);
  var onKeyDown = useCallback(function (event) {
    var inputEl = inputRef.current;
    if (!inputEl) {
      return;
    }
    var zoomShortcuts = [shortcuts['zoom-out'], shortcuts['zoom-in']];
    if (!zoomShortcuts.includes(event.key)) {
      event.nativeEvent.stopImmediatePropagation();
    }
    if (event.key === 'Enter') {
      onZoomSubmit();
      inputEl.select();
    }
  }, [onZoomSubmit, inputRef, shortcuts]);
  useEffect(function () {
    var inputEl = inputRef.current;
    inputEl === null || inputEl === void 0 ? void 0 : inputEl.focus();
    inputEl === null || inputEl === void 0 ? void 0 : inputEl.select();
  }, [inputRef]);
  return jsx(StyledInput, {
    ref: inputRef,
    onFocus: onFocusHandler,
    onKeyDown: onKeyDown
  });
};

var _templateObject$4, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1;
var ElementAndDropdown = styled('div')(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var DropDownButton = styled(Button$1)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #000000;\n  padding-right: 0;\n  padding-left: 0;\n\n  & svg {\n    margin-left: 2px;\n    width: 16px;\n    height: 16px;\n  }\n"])));
var ZoomLabel = styled('span')(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  width: 35px;\n"])));
var Dropdown = styled(Popover)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  & .MuiPopover-paper {\n    padding: 8px;\n    width: 135px;\n    border: none;\n    border-radius: 0px 0px 4px 4px;\n    box-shadow: 0px 30px 48px -17px rgba(160, 165, 174, 0.3);\n    box-sizing: border-box;\n  }\n"])));
var DropDownContent = styled('div')(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  white-space: nowrap;\n  word-break: keep-all;\n  background: white;\n"])));
var ZoomControlButton = styled(Button$1)(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 7px 8px;\n  text-transform: none;\n  color: #333333;\n"])));
var ShortcutLabel = styled('span')(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n  color: #cad3dd;\n"])));
var getIntegerFromString = function getIntegerFromString(zoomInput) {
  var zoomNumber = parseInt(zoomInput || '');
  if (isNaN(zoomNumber)) {
    return 0;
  }
  return zoomNumber;
};
var getValidZoom = function getValidZoom(zoom, currentZoom) {
  if (zoom === 0) {
    return currentZoom;
  }
  var minAllowed = Math.min.apply(Math, _toConsumableArray(zoomList)) * 100;
  var maxAllowed = Math.max.apply(Math, _toConsumableArray(zoomList)) * 100;
  if (zoom < minAllowed) {
    return minAllowed;
  }
  if (zoom > maxAllowed) {
    return maxAllowed;
  }
  return zoom;
};
var ZoomControls = function ZoomControls(_ref) {
  var currentZoom = _ref.currentZoom,
      onZoom = _ref.onZoom,
      onZoomIn = _ref.onZoomIn,
      onZoomOut = _ref.onZoomOut,
      disabledButtons = _ref.disabledButtons,
      hiddenButtons = _ref.hiddenButtons,
      shortcuts = _ref.shortcuts;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];
  var containerRef = useRef(null);
  var inputRef = useRef(null);
  var onZoomSubmit = useCallback(function () {
    var inputEl = inputRef.current;
    if (!inputEl) {
      return;
    }
    var userInput = getIntegerFromString(inputEl.value);
    if (userInput && userInput !== currentZoom) {
      var zoomToSet = getValidZoom(userInput, currentZoom);
      updateInputString(zoomToSet, inputEl);
      onZoom(zoomToSet);
    } else {
      updateInputString(currentZoom, inputEl);
    }
  }, [onZoom, currentZoom]);
  var onClose = function onClose(_, reason) {
    if (reason === 'backdropClick') {
      onZoomSubmit();
    }
    setIsExpanded(false);
  };
  var onExpand = function onExpand() {
    setIsExpanded(true);
  };
  var resetZoom = function resetZoom() {
    onZoom(100);
  };
  return jsxs(ElementAndDropdown, {
    ref: containerRef,
    children: [jsxs(DropDownButton, {
      onClick: onExpand,
      children: [jsxs(ZoomLabel, {
        children: [Math.round(currentZoom), "%"]
      }), jsx(Icon, {
        name: "chevron"
      })]
    }), jsx(Dropdown, {
      open: isExpanded,
      onClose: onClose,
      anchorEl: containerRef.current,
      container: containerRef.current,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      children: jsxs(DropDownContent, {
        children: [jsx(ZoomInput, {
          onZoomSubmit: onZoomSubmit,
          inputRef: inputRef,
          currentZoom: currentZoom,
          shortcuts: shortcuts
        }), !hiddenButtons.includes('zoom-out') && jsxs(ZoomControlButton, {
          title: "Zoom Out",
          onClick: onZoomOut,
          disabled: disabledButtons.includes('zoom-out'),
          children: [jsx("span", {
            children: "Zoom out"
          }), jsx(ShortcutLabel, {
            children: shortcuts['zoom-out']
          })]
        }), !hiddenButtons.includes('zoom-in') && jsxs(ZoomControlButton, {
          title: "Zoom In",
          onClick: onZoomIn,
          disabled: disabledButtons.includes('zoom-in'),
          children: [jsx("span", {
            children: "Zoom in"
          }), jsx(ShortcutLabel, {
            children: shortcuts['zoom-in']
          })]
        }), jsx(ZoomControlButton, {
          onClick: resetZoom,
          children: jsx("span", {
            children: "Zoom 100%"
          })
        })]
      })
    })]
  });
};

var _templateObject$3;
var getIfFullScreen = function getIfFullScreen() {
  return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
};
var ControlsPanel$1 = styled('div')(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: flex-end;\n"])));
var SystemControls = function SystemControls(_ref) {
  var disabledButtons = _ref.disabledButtons,
      hiddenButtons = _ref.hiddenButtons,
      onSettingsOpen = _ref.onSettingsOpen,
      onFullscreen = _ref.onFullscreen,
      onHelp = _ref.onHelp,
      onAboutOpen = _ref.onAboutOpen,
      className = _ref.className;
  return jsxs(ControlsPanel$1, {
    className: className,
    children: [jsx(IconButton, {
      title: "Settings",
      onClick: onSettingsOpen,
      iconName: "settings",
      disabled: disabledButtons.includes('settings'),
      isHidden: hiddenButtons.includes('settings')
    }), jsx(IconButton, {
      title: "Help (".concat(shortcutStr(['?', '&', 'Shift+/']), ")"),
      onClick: onHelp,
      iconName: "help",
      disabled: disabledButtons.includes('help'),
      isHidden: hiddenButtons.includes('help')
    }), jsx(IconButton, {
      title: "About",
      onClick: onAboutOpen,
      iconName: "about",
      disabled: disabledButtons.includes('about'),
      isHidden: hiddenButtons.includes('about')
    }), jsx(IconButton, {
      title: "Fullscreen mode",
      onClick: onFullscreen,
      iconName: getIfFullScreen() ? 'fullscreen-exit' : 'fullscreen-enter',
      disabled: disabledButtons.includes('fullscreen'),
      isHidden: hiddenButtons.includes('fullscreen')
    })]
  });
};

var ExternalFuncControls = function ExternalFuncControls(_ref) {
  var isCollapsed = _ref.isCollapsed,
      onLayout = _ref.onLayout,
      onClean = _ref.onClean,
      onAromatize = _ref.onAromatize,
      onDearomatize = _ref.onDearomatize,
      onCalculate = _ref.onCalculate,
      onCheck = _ref.onCheck,
      onAnalyse = _ref.onAnalyse,
      onStereo = _ref.onStereo,
      onMiew = _ref.onMiew,
      disabledButtons = _ref.disabledButtons,
      indigoVerification = _ref.indigoVerification,
      hiddenButtons = _ref.hiddenButtons,
      shortcuts = _ref.shortcuts;
  var externalFuncButtons = [{
    name: 'arom',
    title: 'Aromatize',
    handler: onAromatize
  }, {
    name: 'dearom',
    title: 'Dearomatize',
    handler: onDearomatize
  }, {
    name: 'layout',
    title: 'Layout',
    handler: onLayout
  }, {
    name: 'clean',
    title: 'Clean Up',
    handler: onClean
  }, {
    name: 'cip',
    title: 'Calculate CIP',
    handler: onCalculate
  }, {
    name: 'check',
    title: 'Check Structure',
    handler: onCheck
  }, {
    name: 'analyse',
    title: 'Calculated Values',
    handler: onAnalyse
  }, {
    name: 'enhanced-stereo',
    title: 'Stereochemistry',
    handler: onStereo
  }, {
    name: 'miew',
    title: '3D Viewer',
    handler: onMiew
  }];
  var getButtonElement = function getButtonElement(button) {
    return jsx(IconButton, {
      title: button.title,
      onClick: button.handler,
      iconName: button.name,
      shortcut: shortcuts[button.name],
      disabled: indigoVerification || disabledButtons.includes(button.name),
      isHidden: hiddenButtons.includes(button.name)
    }, button.name);
  };
  var firstButtonObj = externalFuncButtons.find(function (button) {
    return !hiddenButtons.includes(button.name);
  });
  var collapsibleElements = externalFuncButtons.filter(function (button) {
    return button !== firstButtonObj;
  }).map(function (button) {
    return getButtonElement(button);
  });
  if (isCollapsed) {
    return jsx(ElementWithDropdown, {
      topElement: getButtonElement(firstButtonObj),
      dropDownElements: collapsibleElements
    });
  }
  return jsxs(Fragment, {
    children: [firstButtonObj && getButtonElement(firstButtonObj), jsx(Fragment, {
      children: collapsibleElements
    })]
  });
};

var _templateObject$2;
var collapseLimit = 650;
var ControlsPanel = styled('div')(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0px;\n  height: 36px;\n  padding: 0px 8px;\n\n  .group {\n    display: flex;\n    flex-direction: row;\n    gap: 0px;\n  }\n\n  & * {\n    box-sizing: border-box;\n  }\n\n  @media only screen and (min-width: 1024px) {\n    height: 40px;\n    gap: 4px;\n\n    .group {\n      gap: 4px;\n    }\n  }\n\n  @media only screen and (min-width: 1920px) {\n    height: 64px;\n    gap: 12px;\n  }\n"])));
var TopToolbar = function TopToolbar(_ref) {
  var className = _ref.className,
      disabledButtons = _ref.disabledButtons,
      indigoVerification = _ref.indigoVerification,
      hiddenButtons = _ref.hiddenButtons,
      shortcuts = _ref.shortcuts,
      onClear = _ref.onClear,
      onFileOpen = _ref.onFileOpen,
      onSave = _ref.onSave,
      onUndo = _ref.onUndo,
      onRedo = _ref.onRedo,
      onCopy = _ref.onCopy,
      onCopyMol = _ref.onCopyMol,
      onCopyKet = _ref.onCopyKet,
      onCopyImage = _ref.onCopyImage,
      onCut = _ref.onCut,
      onPaste = _ref.onPaste,
      currentZoom = _ref.currentZoom,
      onZoom = _ref.onZoom,
      onZoomIn = _ref.onZoomIn,
      onZoomOut = _ref.onZoomOut,
      onSettingsOpen = _ref.onSettingsOpen,
      onLayout = _ref.onLayout,
      onClean = _ref.onClean,
      onAromatize = _ref.onAromatize,
      onDearomatize = _ref.onDearomatize,
      onCalculate = _ref.onCalculate,
      onCheck = _ref.onCheck,
      onAnalyse = _ref.onAnalyse,
      onStereo = _ref.onStereo,
      onMiew = _ref.onMiew,
      onFullscreen = _ref.onFullscreen,
      onAbout = _ref.onAbout,
      onHelp = _ref.onHelp;
  var _useResizeObserver = useThrottleResizeObserver(),
      resizeRef = _useResizeObserver.ref,
      _useResizeObserver$wi = _useResizeObserver.width,
      width = _useResizeObserver$wi === void 0 ? 50 : _useResizeObserver$wi;
  return jsxs(ControlsPanel, {
    className: className,
    ref: resizeRef,
    children: [jsx(IconButton, {
      title: "Clear Canvas",
      onClick: onClear,
      iconName: "clear",
      shortcut: shortcuts.clear,
      isHidden: hiddenButtons.includes('clear')
    }), jsx(FileControls, {
      onFileOpen: onFileOpen,
      onSave: onSave,
      shortcuts: shortcuts,
      hiddenButtons: hiddenButtons
    }), jsx(ClipboardControls, {
      onCopy: onCopy,
      onCopyMol: onCopyMol,
      onCopyKet: onCopyKet,
      onCopyImage: onCopyImage,
      onPaste: onPaste,
      onCut: onCut,
      shortcuts: shortcuts,
      disabledButtons: disabledButtons,
      hiddenButtons: hiddenButtons
    }), jsx(UndoRedo, {
      onUndo: onUndo,
      onRedo: onRedo,
      disabledButtons: disabledButtons,
      hiddenButtons: hiddenButtons,
      shortcuts: shortcuts
    }), jsx(ExternalFuncControls, {
      onLayout: onLayout,
      onClean: onClean,
      onAromatize: onAromatize,
      onDearomatize: onDearomatize,
      onCalculate: onCalculate,
      onCheck: onCheck,
      onAnalyse: onAnalyse,
      onStereo: onStereo,
      onMiew: onMiew,
      disabledButtons: disabledButtons,
      hiddenButtons: hiddenButtons,
      shortcuts: shortcuts,
      indigoVerification: indigoVerification,
      isCollapsed: width < collapseLimit
    }), jsx(SystemControls, {
      onHistoryClick: function onHistoryClick() {
      },
      onSettingsOpen: onSettingsOpen,
      onFullscreen: onFullscreen,
      onHelp: onHelp,
      onAboutOpen: onAbout,
      disabledButtons: disabledButtons,
      hiddenButtons: hiddenButtons
    }), jsx(Divider, {}), !hiddenButtons.includes('zoom-list') && jsx(ZoomControls, {
      currentZoom: currentZoom || 1,
      onZoomIn: onZoomIn,
      onZoomOut: onZoomOut,
      onZoom: onZoom,
      shortcuts: shortcuts,
      disabledButtons: disabledButtons,
      hiddenButtons: hiddenButtons
    })]
  });
};

var shortcuts = Object.keys(config).reduce(function (acc, key) {
  var _action$key;
  if ((_action$key = config[key]) !== null && _action$key !== void 0 && _action$key.shortcut) {
    var shortcut = config[key].shortcut;
    var processedShortcut = shortcutStr(shortcut);
    acc[key] = processedShortcut;
  }
  return acc;
}, {});
var mapStateToProps$g = function mapStateToProps(state) {
  var _state$actionState, _state$actionState$zo;
  var actionState = state.actionState || {};
  var disabledButtons = Object.keys(actionState).reduce(function (acc, item) {
    var _actionState$item;
    if ((_actionState$item = actionState[item]) !== null && _actionState$item !== void 0 && _actionState$item.disabled) {
      acc.push(item);
    }
    return acc;
  }, []);
  var hiddenButtons = Object.keys(actionState).reduce(function (acc, item) {
    var _actionState$item2;
    if ((_actionState$item2 = actionState[item]) !== null && _actionState$item2 !== void 0 && _actionState$item2.hidden) {
      acc.push(item);
    }
    return acc;
  }, []);
  return {
    currentZoom: Math.round(((_state$actionState = state.actionState) === null || _state$actionState === void 0 ? void 0 : (_state$actionState$zo = _state$actionState.zoom) === null || _state$actionState$zo === void 0 ? void 0 : _state$actionState$zo.selected) * 100),
    disabledButtons: disabledButtons,
    hiddenButtons: hiddenButtons,
    shortcuts: shortcuts,
    status: state.actionState || {},
    opened: state.toolbar.opened,
    indigoVerification: state.requestsStatuses.indigoVerification,
    disableableButtons: ['layout', 'clean', 'arom', 'dearom', 'cip', 'enhanced-stereo']
  };
};
var mapDispatchToProps$e = function mapDispatchToProps(dispatch) {
  var dispatchAction = function dispatchAction(actionName) {
    dispatch(onAction(config[actionName].action));
  };
  return {
    onClear: function onClear() {
      return dispatchAction('clear');
    },
    onFileOpen: function onFileOpen() {
      return dispatchAction('open');
    },
    onSave: function onSave() {
      return dispatchAction('save');
    },
    onUndo: function onUndo() {
      return dispatchAction('undo');
    },
    onRedo: function onRedo() {
      return dispatchAction('redo');
    },
    onCopy: function onCopy() {
      return dispatchAction('copy');
    },
    onCopyMol: function onCopyMol() {
      return dispatchAction('copy-mol');
    },
    onCopyKet: function onCopyKet() {
      return dispatchAction('copy-ket');
    },
    onCopyImage: function onCopyImage() {
      return dispatchAction('copy-image');
    },
    onCut: function onCut() {
      return dispatchAction('cut');
    },
    onPaste: function onPaste() {
      return dispatchAction('paste');
    },
    onZoomIn: function onZoomIn() {
      return dispatchAction('zoom-in');
    },
    onZoomOut: function onZoomOut() {
      return dispatchAction('zoom-out');
    },
    onZoom: function onZoom(zoomValue) {
      return dispatch(onAction(function (editor) {
        return editor.zoom(zoomValue / 100);
      }));
    },
    onSettingsOpen: function onSettingsOpen() {
      return dispatchAction('settings');
    },
    onLayout: function onLayout() {
      return dispatchAction('layout');
    },
    onClean: function onClean() {
      return dispatchAction('clean');
    },
    onAromatize: function onAromatize() {
      return dispatchAction('arom');
    },
    onDearomatize: function onDearomatize() {
      return dispatchAction('dearom');
    },
    onCalculate: function onCalculate() {
      return dispatchAction('cip');
    },
    onCheck: function onCheck() {
      return dispatchAction('check');
    },
    onAnalyse: function onAnalyse() {
      return dispatchAction('analyse');
    },
    onStereo: function onStereo() {
      return dispatchAction('enhanced-stereo');
    },
    onMiew: function onMiew() {
      return dispatchAction('miew');
    },
    onAction: function onAction$1(action) {
      return dispatch(onAction(action));
    },
    onOpen: function onOpen(menuName, isSelected) {
      return dispatch({
        type: 'OPENED',
        data: {
          menuName: menuName,
          isSelected: isSelected
        }
      });
    },
    onFullscreen: function onFullscreen() {
      return dispatchAction('fullscreen');
    },
    onHelp: function onHelp() {
      return dispatchAction('help');
    },
    onAbout: function onAbout() {
      return dispatchAction('about');
    }
  };
};
var TopToolbarContainer = connect(mapStateToProps$g, mapDispatchToProps$e)(TopToolbar);

var mac = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
function normalizeKeyName(name) {
  var parts = name.split(/\+(?!$)/);
  var result = parts[parts.length - 1];
  if (result === 'Space') result = ' ';
  var alt;
  var ctrl;
  var shift;
  var meta;
  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (mac) meta = true;else ctrl = true;
    } else throw new Error('Unrecognized modifier name: ' + mod);
  }
  if (alt) result = 'Alt+' + result;
  if (ctrl) result = 'Ctrl+' + result;
  if (meta) result = 'Meta+' + result;
  if (shift) result = 'Shift+' + result;
  return result;
}
function normalizeKeyMap(map) {
  var copy = Object.create(null);
  Object.keys(map).forEach(function (prop) {
    copy[normalizeKeyName(prop)] = map[prop];
  });
  return copy;
}
function modifiers(name, event, shift) {
  if (event.altKey) name = 'Alt+' + name;
  if (event.ctrlKey) name = 'Ctrl+' + name;
  if (event.metaKey) name = 'Meta+' + name;
  if (shift !== false && event.shiftKey) name = 'Shift+' + name;
  return name;
}
function rusToEng(name, event) {
  return name.replace(/[??-??]/, KN.base[event.keyCode]).replace(/[??-??]/, KN.shift[event.keyCode]);
}
function normalizeKeyEvent(event) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var name = rusToEng(KN.keyName(event), event);
  var isChar = name.length === 1 && name !== ' ';
  return isChar && !base ? modifiers(name, event, !isChar) : modifiers(KN.base[event.keyCode], event, true);
}
function keyNorm(obj) {
  if (obj instanceof KeyboardEvent)
    return normalizeKeyEvent.apply(void 0, arguments);
  return _typeof(obj) === 'object' ? normalizeKeyMap(obj) : normalizeKeyName(obj);
}
function lookup(map, event) {
  var name = rusToEng(KN.keyName(event), event);
  if (name === 'Add') name = '+';
  if (name === 'Subtract') name = '-';
  var isChar = name.length === 1 && name !== ' ';
  var res = map[modifiers(name, event, !isChar)];
  var baseName;
  if (event.shiftKey && isChar && (baseName = KN.base[event.keyCode])) res = map[modifiers(baseName, event, true)] || res;
  return res;
}
keyNorm.lookup = lookup;

function _createForOfIteratorHelper$e(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$e(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$e(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$e(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$e(o, minLen); }
function _arrayLikeToArray$e(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys$I(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$I(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$I(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$I(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function initKeydownListener(element) {
  return function (dispatch, getState) {
    var hotKeys = initHotKeys();
    element.addEventListener('keydown', function (event) {
      return keyHandle(dispatch, getState(), hotKeys, event);
    });
  };
}
function keyHandle(dispatch, state, hotKeys, event) {
  if (state.modal) return;
  var editor = state.editor;
  var render = editor.render;
  var actionState = state.actionState;
  var actionTool = actionState.activeTool;
  var key = keyNorm(event);
  var atomsSelected = editor.selection() && editor.selection().atoms;
  var group = null;
  if (key && key.length === 1 && atomsSelected && key.match(/\w/)) {
    openDialog(dispatch, 'labelEdit', {
      letter: key
    }).then(function (res) {
      dispatch(onAction({
        tool: 'atom',
        opts: res
      }));
    })["catch"](function () {
      return null;
    });
    event.preventDefault();
  } else if ((group = keyNorm.lookup(hotKeys, event)) !== undefined) {
    var index = checkGroupOnTool(group, actionTool);
    var groupLength = group !== null ? group.length : 1;
    index = (index + 1) % groupLength;
    var actName = group[index];
    if (actionState[actName] && actionState[actName].disabled === true) {
      event.preventDefault();
      return;
    }
    if (actions.indexOf(actName) === -1) {
      var newAction = config[actName].action;
      var hoverItemId = getHoveredAtomId(render.ctab.atoms);
      var isHoveringOverAtom = hoverItemId !== null;
      if (isHoveringOverAtom) {
        var atomProps = _objectSpread$I({}, newAction.opts);
        var updatedAtoms = fromAtomsAttrs(render.ctab, hoverItemId, atomProps, true);
        editor.update(updatedAtoms);
      } else {
        dispatch(onAction(newAction));
      }
      event.preventDefault();
    } else if (isIE) {
      exec(event);
    }
  }
}
function getHoveredAtomId(atoms) {
  var _iterator = _createForOfIteratorHelper$e(atoms.entries()),
      _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          id = _step$value[0],
          atom = _step$value[1];
      if (atom.hover) return id;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}
function setHotKey(key, actName, hotKeys) {
  if (Array.isArray(hotKeys[key])) hotKeys[key].push(actName);else hotKeys[key] = [actName];
}
function initHotKeys() {
  var hotKeys = {};
  var act;
  Object.keys(config).forEach(function (actName) {
    act = config[actName];
    if (!act.shortcut) return;
    if (Array.isArray(act.shortcut)) {
      act.shortcut.forEach(function (key) {
        setHotKey(key, actName, hotKeys);
      });
    } else {
      setHotKey(act.shortcut, actName, hotKeys);
    }
  });
  return keyNorm(hotKeys);
}
function checkGroupOnTool(group, actionTool) {
  var index = group.indexOf(actionTool.tool);
  group.forEach(function (actName, i) {
    if (isEqual(config[actName].action, actionTool)) index = i;
  });
  return index;
}
var rxnTextPlain = /\$RXN\n+\s+0\s+0\s+0\n*/;
function initClipboard(dispatch) {
  var formats = Object.keys(formatProperties).map(function (format) {
    return formatProperties[format].mime;
  });
  var debAction = debounce(0, function (action) {
    return dispatch(onAction(action));
  });
  var loadStruct = debounce(0, function (structStr, opts) {
    return dispatch(load(structStr, opts));
  });
  return {
    formats: formats,
    focused: function focused() {
      var state = global.currentState;
      return !state.modal;
    },
    onCut: function onCut() {
      var state = global.currentState;
      var editor = state.editor;
      var data = clipData(editor);
      if (data) debAction({
        tool: 'eraser',
        opts: 1
      });else editor.selection(null);
      return data;
    },
    onCopy: function onCopy() {
      var state = global.currentState;
      var editor = state.editor;
      var data = clipData(editor);
      editor.selection(null);
      return data;
    },
    onPaste: function onPaste(data) {
      var structStr = data[ChemicalMimeType.KET] || data[ChemicalMimeType.Mol] || data[ChemicalMimeType.Rxn] || data['text/plain'];
      if (structStr || !rxnTextPlain.test(data['text/plain'])) loadStruct(structStr, {
        fragment: true
      });
    }
  };
}
function clipData(editor) {
  var res = {};
  var struct = editor.structSelected();
  var errorHandler = editor.errorHandler;
  if (struct.isBlank()) return null;
  var simpleObjectOrText = Boolean(struct.simpleObjects.size || struct.texts.size);
  if (simpleObjectOrText && isIE) {
    errorHandler('The structure you are trying to copy contains Simple object or/and Text object.' + 'To copy Simple object or Text object in Internet Explorer try "Copy as KET" button');
    return null;
  }
  var molSerializer = new MolSerializer();
  try {
    var serializer = new KetSerializer();
    var ket = serializer.serialize(struct);
    res[ChemicalMimeType.KET] = ket;
    var type = struct.isReaction ? ChemicalMimeType.Mol : ChemicalMimeType.Rxn;
    var data = molSerializer.serialize(struct);
    res['text/plain'] = data;
    res[type] = data;
    return res;
  } catch (e) {
    errorHandler(e.message);
  }
  return null;
}

var AppClipArea = connect(null, function (dispatch) {
  return dispatch(initClipboard);
})(ClipArea);

var AppHidden = function AppHidden(props) {
  var onInitTmpls = props.onInitTmpls;
  var ref = useRef(null);
  var _useSettingsContext = useSettingsContext(),
      staticResourcesUrl = _useSettingsContext.staticResourcesUrl;
  useEffect(function () {
    onInitTmpls(ref.current, staticResourcesUrl);
  }, []);
  return jsx("div", {
    style: {
      display: 'none'
    },
    ref: ref
  });
};

var mapDispatchToProps$d = function mapDispatchToProps(dispatch) {
  return {
    onInitTmpls: function onInitTmpls(cacheEl, url) {
      initTmplLib(dispatch, url, cacheEl);
    }
  };
};
var AppHiddenContainer = connect(null, mapDispatchToProps$d)(AppHidden);

var classes$F = {"button-common-styles":"Modal-module_button-common-styles__ko9E5","scrollbar":"Modal-module_scrollbar__yPIJc","modalOverlay":"Modal-module_modalOverlay__AzVeg","animate":"Modal-module_animate__pnPNj","hide":"Modal-module_hide__0CTey","smallScreen":"Modal-module_smallScreen__nzt2L"};

var selectClasses = {"button-common-styles":"Select-module_button-common-styles__cgaVz","scrollbar":"Select-module_scrollbar__cA89D","dropdownList":"Select-module_dropdownList__rdcrH","selectContainer":"Select-module_selectContainer__yXT-t"};

var mediaSizes$1 = {
  smallWidth: 600,
  smallHeight: 600
};

var styles$c = {"button-common-styles":"Dialog-module_button-common-styles__HcaFV","scrollbar":"Dialog-module_scrollbar__9Iy27","dialog":"Dialog-module_dialog__IafFQ","hide":"Dialog-module_hide__6R16B","header":"Dialog-module_header__T7-24","btnContainer":"Dialog-module_btnContainer__TOLPx","buttonTop":"Dialog-module_buttonTop__ZhwZQ","closeButton":"Dialog-module_closeButton__Ch6UT","footer":"Dialog-module_footer__NTq5o","ok":"Dialog-module_ok__T4j7Z","cancel":"Dialog-module_cancel__RcR-D","withDivider":"Dialog-module_withDivider__8LsbA","body":"Dialog-module_body__YgzDR","withMargin":"Dialog-module_withMargin__SDH61"};

var _excluded$t = ["children", "title", "params", "result", "valid", "buttons", "headerContent", "footerContent", "className", "buttonsNameMap", "needMargin", "withDivider", "focusable"];
function ownKeys$H(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$H(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$H(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$H(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Dialog = function Dialog(props) {
  var children = props.children,
      title = props.title,
      params = props.params,
      _props$result = props.result,
      result = _props$result === void 0 ? function () {
    return null;
  } : _props$result,
      _props$valid = props.valid,
      valid = _props$valid === void 0 ? function () {
    return !!result();
  } : _props$valid,
      _props$buttons = props.buttons,
      buttons = _props$buttons === void 0 ? ['OK'] : _props$buttons,
      headerContent = props.headerContent,
      footerContent = props.footerContent,
      className = props.className,
      buttonsNameMap = props.buttonsNameMap,
      _props$needMargin = props.needMargin,
      needMargin = _props$needMargin === void 0 ? true : _props$needMargin,
      _props$withDivider = props.withDivider,
      withDivider = _props$withDivider === void 0 ? false : _props$withDivider,
      _props$focusable = props.focusable,
      focusable = _props$focusable === void 0 ? true : _props$focusable,
      rest = _objectWithoutProperties(props, _excluded$t);
  var dialogRef = useRef(null);
  useLayoutEffect(function () {
    if (focusable) {
      dialogRef.current.focus();
    }
    return function () {
      var _dialogRef$current, _dialogRef$current$cl;
      (_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 ? void 0 : (_dialogRef$current$cl = _dialogRef$current.closest('.Ketcher-root')) === null || _dialogRef$current$cl === void 0 ? void 0 : _dialogRef$current$cl.getElementsByClassName('cliparea')[0].focus();
    };
  }, [focusable]);
  var isButtonOk = function isButtonOk(button) {
    return button === 'OK' || button === 'Save';
  };
  var exit = function exit(mode) {
    var key = isButtonOk(mode) ? 'onOk' : 'onCancel';
    if (params && key in params && (key !== 'onOk' || valid())) params[key](result());
  };
  var keyDown = function keyDown(event) {
    var key = KN.keyName(event);
    var active = document.activeElement;
    var activeTextarea = active && active.tagName === 'TEXTAREA';
    if (key === 'Escape' || key === 'Enter' && !activeTextarea) {
      exit(key === 'Enter' ? 'OK' : 'Cancel');
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return jsxs("div", _objectSpread$H(_objectSpread$H({
    ref: dialogRef,
    role: "dialog",
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    },
    onKeyDown: keyDown,
    tabIndex: -1,
    className: clsx(styles$c.dialog, className, params.className)
  }, rest), {}, {
    children: [jsxs("header", {
      className: clsx(styles$c.header, withDivider && styles$c.withDivider),
      children: [headerContent || jsx("span", {
        children: title
      }), jsx("div", {
        className: styles$c.btnContainer,
        children: jsx("button", {
          className: styles$c.buttonTop,
          onClick: function onClick() {
            return exit('Cancel');
          },
          children: jsx(Icon, {
            name: 'close',
            className: styles$c.closeButton
          })
        })
      })]
    }), jsx("div", {
      className: clsx(styles$c.body, needMargin && styles$c.withMargin),
      children: children
    }), (footerContent || buttons.length > 0) && jsxs("footer", {
      className: styles$c.footer,
      children: [footerContent, buttons.length > 0 && buttons.map(function (button) {
        return typeof button !== 'string' ? button : jsx("input", {
          type: "button",
          className: clsx(isButtonOk(button) ? styles$c.ok : styles$c.cancel, button === 'Save' && styles$c.save),
          value: buttonsNameMap && buttonsNameMap[button] ? buttonsNameMap[button] : button,
          disabled: isButtonOk(button) && !valid(),
          onClick: function onClick() {
            return exit(button);
          }
        }, button);
      })]
    })]
  }));
};

var styles$b = {"container":"LoadingCircles-module_container__MPCs0","bounce":"LoadingCircles-module_bounce__gCepS"};

var LoadingCircles = function LoadingCircles() {
  return jsxs("div", {
    className: styles$b.container,
    children: [jsx("span", {}), jsx("span", {}), jsx("span", {})]
  });
};

var _excluded$s = ["id", "dist"];
function ownKeys$G(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$G(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$G(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$G(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SELECTION_DISTANCE_COEFFICIENT = 0.4;
var SELECTION_WITHIN_TEXT = 0;
var findMaps = {
  atoms: findClosestAtom,
  bonds: findClosestBond,
  enhancedFlags: findClosestEnhancedFlag,
  sgroupData: findClosestDataSGroupData,
  sgroups: findClosestSGroup,
  functionalGroups: findClosestFG,
  rxnArrows: findClosestRxnArrow,
  rxnPluses: findClosestRxnPlus,
  frags: findClosestFrag,
  rgroups: findClosestRGroup,
  simpleObjects: findClosestSimpleObject,
  texts: findClosestText
};
function findClosestText(restruct, cursorPosition) {
  var minDist = null;
  var ret = null;
  restruct.texts.forEach(function (text, id) {
    var referencePoints = text.getReferencePoints(restruct);
    var topX = referencePoints[0].x;
    var topY = referencePoints[0].y;
    var bottomX = referencePoints[2].x;
    var bottomY = referencePoints[2].y;
    var distances = [];
    if (cursorPosition.x >= topX && cursorPosition.x <= bottomX) {
      if (cursorPosition.y < topY) {
        distances.push(topY - cursorPosition.y);
      } else if (cursorPosition.y > bottomY) {
        distances.push(cursorPosition.y - bottomY);
      } else {
        distances.push(cursorPosition.y - topY, bottomY - cursorPosition.y);
      }
    }
    if (cursorPosition.x < topX && cursorPosition.y < topY) {
      distances.push(Vec2.dist(new Vec2(topX, topY), cursorPosition));
    }
    if (cursorPosition.x > bottomX && cursorPosition.y > bottomY) {
      distances.push(Vec2.dist(new Vec2(bottomX, bottomY), cursorPosition));
    }
    if (cursorPosition.x < topX && cursorPosition.y > bottomY) {
      distances.push(Vec2.dist(new Vec2(topX, bottomY), cursorPosition));
    }
    if (cursorPosition.x > bottomX && cursorPosition.y < topY) {
      distances.push(Vec2.dist(new Vec2(bottomX, topY), cursorPosition));
    }
    if (cursorPosition.y >= topY && cursorPosition.y <= bottomY) {
      if (cursorPosition.x < topX) {
        distances.push(topX - cursorPosition.x);
      } else if (cursorPosition.x > bottomX) {
        distances.push(cursorPosition.x - bottomX);
      } else {
        distances.push(SELECTION_WITHIN_TEXT);
      }
    }
    var dist = Math.min.apply(Math, distances);
    if (dist < SELECTION_DISTANCE_COEFFICIENT && (!ret || dist < minDist)) {
      minDist = dist;
      ret = {
        id: id,
        dist: minDist
      };
    }
  });
  return ret;
}
function findClosestSimpleObject(restruct, pos) {
  var minDist = null;
  var refPoint = null;
  var ret = null;
  restruct.simpleObjects.forEach(function (simpleObject, id) {
    var dist = simpleObject.calcDistance(pos, restruct.render.options.scale);
    if (dist.minDist < 0.3 && (!ret || dist.minDist < minDist)) {
      minDist = dist.minDist;
      refPoint = dist.refPoint;
      ret = {
        id: id,
        dist: minDist,
        ref: refPoint
      };
    }
  });
  return ret;
}
function findClosestAtom(restruct, pos, skip, minDist) {
  var closestAtom = null;
  var maxMinDist = SELECTION_DISTANCE_COEFFICIENT;
  var skipId = skip && skip.map === 'atoms' ? skip.id : null;
  var sGroups = restruct.sgroups;
  var functionalGroups = restruct.molecule.functionalGroups;
  minDist = minDist || maxMinDist;
  minDist = Math.min(minDist, maxMinDist);
  restruct.atoms.forEach(function (atom, aid) {
    if (FunctionalGroup.isAtomInContractedFunctionalGroup(atom.a, sGroups, functionalGroups, true)) return null;
    if (aid === skipId) return;
    var dist = Vec2.dist(pos, atom.a.pp);
    if (dist < minDist) {
      closestAtom = aid;
      minDist = dist;
    }
  });
  if (closestAtom !== null) {
    return {
      id: closestAtom,
      dist: minDist
    };
  }
  return null;
}
function findClosestBond(restruct, pos, skip, minDist, scale) {
  var closestBond = null;
  var closestBondCenter = null;
  var maxMinDist = 0.8 * SELECTION_DISTANCE_COEFFICIENT;
  var skipId = skip && skip.map === 'bonds' ? skip.id : null;
  var sGroups = restruct.sgroups;
  var functionalGroups = restruct.molecule.functionalGroups;
  minDist = minDist || maxMinDist;
  minDist = Math.min(minDist, maxMinDist);
  var minCDist = minDist;
  restruct.bonds.forEach(function (bond, bid) {
    if (bid === skipId) return;
    var a1 = restruct.atoms.get(bond.b.begin).a;
    var a2 = restruct.atoms.get(bond.b.end).a;
    if (FunctionalGroup.isBondInContractedFunctionalGroup(bond.b, sGroups, functionalGroups, true)) return null;
    var mid = Vec2.lc2(a1.pp, 0.5, a2.pp, 0.5);
    var cdist = Vec2.dist(pos, mid);
    if (cdist < minCDist) {
      minCDist = cdist;
      closestBondCenter = bid;
    }
  });
  restruct.bonds.forEach(function (bond, bid) {
    if (bid === skipId) return;
    if (FunctionalGroup.isBondInContractedFunctionalGroup(bond.b, sGroups, functionalGroups, true)) return null;
    var hb = restruct.molecule.halfBonds.get(bond.b.hb1);
    var dir = hb.dir;
    var norm = hb.norm;
    var p1 = restruct.atoms.get(bond.b.begin).a.pp;
    var p2 = restruct.atoms.get(bond.b.end).a.pp;
    var inStripe = Vec2.dot(pos.sub(p1), dir) * Vec2.dot(pos.sub(p2), dir) < 0;
    if (inStripe) {
      var dist = Math.abs(Vec2.dot(pos.sub(p1), norm));
      if (dist < minDist) {
        closestBond = bid;
        minDist = dist;
      }
    }
  });
  if (closestBondCenter !== null) {
    return {
      id: closestBondCenter,
      dist: minCDist
    };
  }
  if (closestBond !== null && minDist > SELECTION_DISTANCE_COEFFICIENT * scale) {
    return {
      id: closestBond,
      dist: minDist
    };
  }
  return null;
}
function findClosestEnhancedFlag(restruct, pos, skip, _minDist, options) {
  var minDist;
  var ret = null;
  restruct.enhancedFlags.forEach(function (item, id) {
    var fragment = restruct.molecule.frags.get(id);
    if (!fragment || !fragment.enhancedStereoFlag || !options.showStereoFlags) return;
    var p = fragment.stereoFlagPosition ? new Vec2(fragment.stereoFlagPosition.x, fragment.stereoFlagPosition.y) : Fragment$1.getDefaultStereoFlagPosition(restruct.molecule, id);
    if (!p || Math.abs(pos.x - p.x) >= 1.0) return;
    var dist = Math.abs(pos.y - p.y);
    if (dist < 0.3 && (!ret || dist < minDist)) {
      minDist = dist;
      ret = {
        id: id,
        dist: minDist
      };
    }
  });
  return ret;
}
function findClosestDataSGroupData(restruct, pos) {
  var minDist = null;
  var ret = null;
  restruct.sgroupData.forEach(function (item, id) {
    if (item.sgroup.type !== 'DAT') throw new Error('Data group expected');
    if (item.sgroup.data.fieldName !== 'MRV_IMPLICIT_H') {
      var box = item.sgroup.dataArea;
      var inBox = box.p0.y < pos.y && box.p1.y > pos.y && box.p0.x < pos.x && box.p1.x > pos.x;
      var xDist = Math.min(Math.abs(box.p0.x - pos.x), Math.abs(box.p1.x - pos.x));
      if (inBox && (ret === null || xDist < minDist)) {
        ret = {
          id: id,
          dist: xDist
        };
        minDist = xDist;
      }
    }
  });
  return ret;
}
function findClosestFrag(restruct, pos, skip, minDist, scale) {
  minDist = Math.min(minDist || SELECTION_DISTANCE_COEFFICIENT, SELECTION_DISTANCE_COEFFICIENT);
  var struct = restruct.molecule;
  var closestAtom = findClosestAtom(restruct, pos, skip, minDist);
  if (closestAtom) {
    return {
      id: struct.atoms.get(closestAtom.id).fragment,
      dist: closestAtom.dist
    };
  }
  var closestBond = findClosestBond(restruct, pos, skip, minDist, scale);
  if (closestBond) {
    var atomId = struct.bonds.get(closestBond.id).begin;
    return {
      id: struct.atoms.get(atomId).fragment,
      dist: closestBond.dist
    };
  }
  return null;
}
function findClosestRGroup(restruct, pos, skip, minDist) {
  minDist = Math.min(minDist || SELECTION_DISTANCE_COEFFICIENT, SELECTION_DISTANCE_COEFFICIENT);
  var ret = null;
  restruct.rgroups.forEach(function (rgroup, rgid) {
    if (rgid !== skip && rgroup.labelBox && rgroup.labelBox.contains(pos, 0.5)) {
      var dist = Vec2.dist(rgroup.labelBox.centre(), pos);
      if (!ret || dist < minDist) {
        minDist = dist;
        ret = {
          id: rgid,
          dist: minDist
        };
      }
    }
  });
  return ret;
}
function findClosestRxnArrow(restruct, pos) {
  var minDist = null;
  var refPoint = null;
  var ret = null;
  restruct.rxnArrows.forEach(function (rxnArrow, id) {
    var dist = rxnArrow.calcDistance(pos, restruct.render.options.scale);
    if (dist.minDist < 0.3 && (!ret || dist.minDist < minDist)) {
      minDist = dist.minDist;
      refPoint = dist.refPoint;
      ret = {
        id: id,
        dist: minDist,
        ref: refPoint
      };
    }
  });
  return ret;
}
function findClosestRxnPlus(restruct, pos) {
  var minDist = null;
  var ret = null;
  restruct.rxnPluses.forEach(function (plus, id) {
    var p = plus.item.pp;
    var dist = Math.max(Math.abs(pos.x - p.x), Math.abs(pos.y - p.y));
    if (dist < 0.3 && (!ret || dist < minDist)) {
      minDist = dist;
      ret = {
        id: id,
        dist: minDist
      };
    }
  });
  return ret;
}
function findClosestSGroup(restruct, pos) {
  var ret = null;
  var minDist = SELECTION_DISTANCE_COEFFICIENT;
  restruct.molecule.sgroups.forEach(function (sg, sgid) {
    if (sg.functionalGroup && !sg.expanded && sg.firstSgroupAtom) return null;
    var d = sg.bracketDir;
    var n = d.rotateSC(1, 0);
    var pg = new Vec2(Vec2.dot(pos, d), Vec2.dot(pos, n));
    sg.areas.forEach(function (box) {
      var inBox = box.p0.y < pg.y && box.p1.y > pg.y && box.p0.x < pg.x && box.p1.x > pg.x;
      var xDist = Math.min(Math.abs(box.p0.x - pg.x), Math.abs(box.p1.x - pg.x));
      if (inBox && (ret === null || xDist < minDist)) {
        ret = sgid;
        minDist = xDist;
      }
    });
  });
  if (ret !== null) {
    return {
      id: ret,
      dist: minDist
    };
  }
  return null;
}
function findClosestFG(restruct, pos) {
  var ret = null;
  var minDist = SELECTION_DISTANCE_COEFFICIENT;
  restruct.molecule.sgroups.forEach(function (sg, sgid) {
    if (sg.functionalGroup && !sg.data.expanded && sg.firstSgroupAtom) {
      var firstAtomPp = sg.firstSgroupAtom.pp;
      var shift = new Vec2(0.625, 0.625);
      var box = {
        p0: Vec2.diff(firstAtomPp, shift),
        p1: Vec2.sum(firstAtomPp, shift)
      };
      var inBox = box.p0.y < pos.y && box.p1.y > pos.y && box.p0.x < pos.x && box.p1.x > pos.x;
      var xDist = Math.min(Math.abs(box.p0.x - pos.x), Math.abs(box.p0.y - pos.y), Math.abs(box.p1.x - pos.x), Math.abs(box.p0.y - pos.y));
      if (inBox && (ret === null || xDist < minDist)) {
        ret = sgid;
        minDist = xDist;
      }
    }
  });
  if (ret !== null) {
    return {
      id: ret,
      dist: minDist
    };
  }
  return null;
}
function findClosestItem(restruct, pos, maps, skip, scale) {
  maps = maps || Object.keys(findMaps);
  return maps.reduce(function (res, mp) {
    var minDist = res ? res.dist : null;
    var item = findMaps[mp](restruct, pos, skip, minDist, scale);
    if (item !== null && (res === null || item.dist < res.dist)) {
      var id = item.id,
          dist = item.dist,
          other = _objectWithoutProperties(item, _excluded$s);
      return _objectSpread$G({
        map: mp,
        id: id,
        dist: dist
      }, other);
    }
    return res;
  }, null);
}
function findCloseMerge(restruct, selected) {
  var maps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['atoms', 'bonds'];
  var scale = arguments.length > 3 ? arguments[3] : undefined;
  var pos = {
    atoms: new Map(),
    bonds: new Map()
  };
  var struct = restruct.molecule;
  selected.atoms.forEach(function (aid) {
    pos.atoms.set(aid, struct.atoms.get(aid).pp);
  });
  selected.bonds.forEach(function (bid) {
    var bond = struct.bonds.get(bid);
    pos.bonds.set(bid, Vec2.lc2(struct.atoms.get(bond.begin).pp, 0.5, struct.atoms.get(bond.end).pp, 0.5));
  });
  var result = {};
  maps.forEach(function (mp) {
    result[mp] = Array.from(pos[mp].keys()).reduce(function (res, srcId) {
      var skip = {
        map: mp,
        id: srcId
      };
      var item = findMaps[mp](restruct, pos[mp].get(srcId), skip, null, scale);
      if (item && !selected[mp].includes(item.id)) res.set(srcId, item.id);
      return res;
    }, new Map());
  });
  return result;
}
var closest = {
  atom: findClosestAtom,
  item: findClosestItem,
  merge: findCloseMerge
};

function customOnChangeHandler(action, handler) {
  var data = [];
  action.operations.reverse().forEach(function (operation) {
    var op = operation._inverted;
    switch (op.type) {
      case OperationType.ATOM_ADD:
      case OperationType.ATOM_DELETE:
        data.push({
          operation: op.type,
          id: op.data.aid,
          label: op.data.atom.label ? op.data.atom.label : '',
          position: {
            x: +op.data.pos.x.toFixed(2),
            y: +op.data.pos.y.toFixed(2)
          }
        });
        break;
      case OperationType.ATOM_ATTR:
        data.push({
          operation: operation.type,
          id: operation.data.aid,
          attribute: operation.data.attribute,
          from: operation.data.value,
          to: operation.data2.value
        });
        break;
      case OperationType.ATOM_MOVE:
        data.push({
          operation: op.type,
          id: op.data.aid,
          position: {
            x: +op.data.d.x.toFixed(2),
            y: +op.data.d.y.toFixed(2)
          }
        });
        break;
      case OperationType.BOND_ADD:
      case OperationType.BOND_DELETE:
        data.push({
          operation: op.type,
          id: op.data.bid
        });
        break;
      case OperationType.FRAGMENT_ADD:
      case OperationType.FRAGMENT_DELETE:
        data.push({
          operation: op.type,
          id: op.frid
        });
        break;
      case OperationType.FRAGMENT_ADD_STEREO_ATOM:
      case OperationType.FRAGMENT_DELETE_STEREO_ATOM:
        data.push({
          operation: op.type,
          atomId: op.data.aid,
          fragId: op.data.frid
        });
        break;
      case OperationType.S_GROUP_ATOM_ADD:
      case OperationType.S_GROUP_ATOM_REMOVE:
        data.push({
          operation: op.type,
          atomId: op.data.aid,
          sGroupId: op.data.sgid
        });
        break;
      case OperationType.S_GROUP_CREATE:
      case OperationType.S_GROUP_DELETE:
        data.push({
          operation: op.type,
          type: op.data.type,
          sGroupId: op.data.sgid
        });
        break;
      case OperationType.RXN_ARROW_ADD:
      case OperationType.RXN_ARROW_DELETE:
        data.push({
          operation: op.type,
          id: op.data.id,
          mode: op.data.mode,
          position: op.data.pos.map(function (pos) {
            return {
              x: +pos.x.toFixed(2),
              y: +pos.y.toFixed(2)
            };
          })
        });
        break;
      case OperationType.RXN_ARROW_RESIZE:
        data.push({
          operation: op.type,
          id: op.data.id
        });
        break;
      case OperationType.RXN_ARROW_MOVE:
        data.push({
          operation: op.type,
          id: op.data.id,
          position: {
            x: +op.data.d.x.toFixed(2),
            y: +op.data.d.y.toFixed(2)
          }
        });
        break;
      case OperationType.R_GROUP_FRAGMENT:
        data.push({
          operation: operation.type,
          id: op.frid
        });
        break;
      case OperationType.SIMPLE_OBJECT_ADD:
      case OperationType.SIMPLE_OBJECT_DELETE:
        data.push({
          operation: op.type,
          id: op.data.id,
          mode: op.data.mode
        });
        break;
      case OperationType.SIMPLE_OBJECT_RESIZE:
        data.push({
          operation: op.type,
          id: op.data.id
        });
        break;
      case OperationType.SIMPLE_OBJECT_MOVE:
        data.push({
          operation: operation.type,
          id: operation.data.id,
          position: {
            x: +operation.data.d.x.toFixed(2),
            y: +operation.data.d.y.toFixed(2)
          }
        });
        break;
      default:
        data.push({
          operation: op.type
        });
    }
  });
  return handler(data);
}

function _createForOfIteratorHelper$d(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$d(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$d(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$d(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$d(o, minLen); }
function _arrayLikeToArray$d(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var APointTool = function () {
  function APointTool(editor) {
    _classCallCheck(this, APointTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(APointTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var struct = this.editor.render.ctab.molecule;
      var closestItem = this.editor.findItem(event, ['atoms']);
      if (closestItem) {
        var atom = struct.atoms.get(closestItem.id);
        if ((atom === null || atom === void 0 ? void 0 : atom.label) !== 'R#' && (atom === null || atom === void 0 ? void 0 : atom.rglabel) === null) this.editor.hover(closestItem);
      } else {
        this.editor.hover(null);
      }
    }
  }, {
    key: "click",
    value: function click(event) {
      var editor = this.editor;
      var struct = editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = editor.findItem(event, ['atoms']);
      var atomResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$d(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (ci && ci.map === 'atoms') {
        this.editor.hover(null);
        var atom = molecule.atoms.get(ci.id);
        if ((atom === null || atom === void 0 ? void 0 : atom.label) === 'R#' && (atom === null || atom === void 0 ? void 0 : atom.rglabel) !== null) return;
        var res = editor.event.elementEdit.dispatch({
          attpnt: atom === null || atom === void 0 ? void 0 : atom.attpnt
        });
        Promise.resolve(res).then(function (newatom) {
          if ((atom === null || atom === void 0 ? void 0 : atom.attpnt) !== newatom.attpnt) {
            var action = fromAtomsAttrs(editor.render.ctab, ci.id, newatom, null);
            editor.update(action);
          }
        })["catch"](function () {
          return null;
        });
        return true;
      }
      return true;
    }
  }]);
  return APointTool;
}();

function calcAngle$1(pos0, pos1) {
  var v = Vec2.diff(pos1, pos0);
  return Math.atan2(v.y, v.x);
}
function calcNewAtomPos(pos0, pos1, ctrlKey) {
  var v = new Vec2(1, 0).rotate(ctrlKey ? calcAngle$1(pos0, pos1) : fracAngle(pos0, pos1));
  v.add_(pos0);
  return v;
}
function degrees(angle) {
  var degree = Math.round(angle / Math.PI * 180);
  if (degree > 180) degree -= 360;else if (degree <= -180) degree += 360;
  return degree;
}
var BONDS_MERGE_ANGLE = 10;
var BONDS_MERGE_SCALE = 0.2;
function mergeBondsParams(struct1, bond1, struct2, bond2) {
  var begin1 = struct1.atoms.get(bond1.begin);
  var begin2 = struct2.atoms.get(bond2.begin);
  var end1 = struct1.atoms.get(bond1.end);
  var end2 = struct2.atoms.get(bond2.end);
  var angle = calcAngle$1(begin1.pp, end1.pp) - calcAngle$1(begin2.pp, end2.pp);
  var mergeAngle = Math.abs(degrees(angle) % 180);
  var scale = Vec2.dist(begin1.pp, end1.pp) / Vec2.dist(begin2.pp, end2.pp);
  var merged = !inRange(mergeAngle, BONDS_MERGE_ANGLE, 180 - BONDS_MERGE_ANGLE) && inRange(scale, 1 - BONDS_MERGE_SCALE, 1 + BONDS_MERGE_SCALE);
  return {
    merged: merged,
    angle: angle,
    scale: scale,
    cross: Math.abs(degrees(angle)) > 90
  };
}
var utils = {
  calcAngle: calcAngle$1,
  fracAngle: fracAngle,
  calcNewAtomPos: calcNewAtomPos,
  degrees: degrees,
  mergeBondsParams: mergeBondsParams
};

function _createForOfIteratorHelper$c(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$c(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$c(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$c(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$c(o, minLen); }
function _arrayLikeToArray$c(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classPrivateFieldInitSpec$2(obj, privateMap, value) { _checkPrivateRedeclaration$2(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration$2(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _bondProps = new WeakMap();
var AtomTool = function () {
  function AtomTool(editor, atomProps) {
    _classCallCheck(this, AtomTool);
    _classPrivateFieldInitSpec$2(this, _bondProps, {
      writable: true,
      value: void 0
    });
    this.editor = editor;
    this.atomProps = atomProps;
    _classPrivateFieldSet(this, _bondProps, {
      type: 1,
      stereo: Bond$2.PATTERN.STEREO.NONE
    });
    this.editor.hoverIcon.show().attr('text', "".concat(atomProps.label)).attr('fill', "".concat(ElementColor[atomProps.label]));
    if (editor.selection()) {
      var _editor$selection;
      if ((_editor$selection = editor.selection()) !== null && _editor$selection !== void 0 && _editor$selection.atoms) {
        var action = fromAtomsAttrs(editor.render.ctab, editor.selection().atoms, atomProps, true);
        editor.update(action);
        editor.selection(null);
      }
      this.isNotActiveTool = true;
    }
  }
  _createClass(AtomTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      this.editor.hover(null);
      this.editor.selection(null);
      var ci = this.editor.findItem(event, ['atoms', 'functionalGroups']);
      if (ci && ci.map === 'functionalGroups' && functionalGroups && FunctionalGroup.isContractedFunctionalGroup(ci.id, functionalGroups)) {
        var action = new Action();
        var selectedSgroup = sgroups.get(ci.id);
        var sGroupAtoms = SGroup.getAtoms(molecule, selectedSgroup === null || selectedSgroup === void 0 ? void 0 : selectedSgroup.item);
        var _sGroupAtoms = _toArray(sGroupAtoms),
            firstAtom = _sGroupAtoms[0],
            atoms = _sGroupAtoms.slice(1);
        var atomNeighbours = molecule.atomGetNeighbors(firstAtom);
        var extraNeighbour = atomNeighbours === null || atomNeighbours === void 0 ? void 0 : atomNeighbours.some(function (atom) {
          return !sGroupAtoms.includes(atom.aid);
        });
        if (extraNeighbour) {
          action.mergeWith(fromSgroupDeletion(struct, ci.id));
          action.mergeWith(fromFragmentDeletion(struct, {
            atoms: atoms
          }));
          action.mergeWith(fromAtomsAttrs(struct, firstAtom, this.atomProps, true));
        } else {
          var _struct$atoms$get;
          var firstAtomPp = (_struct$atoms$get = struct.atoms.get(firstAtom)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.a.pp;
          action.mergeWith(fromFragmentDeletion(struct, {
            atoms: SGroup.getAtoms(molecule, selectedSgroup === null || selectedSgroup === void 0 ? void 0 : selectedSgroup.item),
            bonds: SGroup.getBonds(molecule, selectedSgroup === null || selectedSgroup === void 0 ? void 0 : selectedSgroup.item)
          }));
          action.mergeWith(fromAtomAddition(struct, firstAtomPp, this.atomProps));
        }
        this.editor.update(action);
      }
      var atomResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) atomResult.push(atomId);
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$c(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) {
        this.dragCtx = {};
      } else if (ci.map === 'atoms') {
        this.dragCtx = {
          item: ci
        };
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.editor.hoverIcon.hide();
    }
  }, {
    key: "mouseover",
    value: function mouseover() {
      this.editor.hoverIcon.show();
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var rnd = this.editor.render;
      var layerX = event.layerX,
          layerY = event.layerY;
      if (!this.dragCtx || !this.dragCtx.item) {
        var _this$editor$hoverIco = this.editor.hoverIcon.getBBox(),
            height = _this$editor$hoverIco.height,
            width = _this$editor$hoverIco.width;
        this.editor.hoverIcon.attr({
          x: layerX - width / 2,
          y: layerY - height / 2
        });
        this.editor.hover(this.editor.findItem(event, ['atoms', 'functionalGroups']), null, event);
        return;
      }
      var dragCtx = this.dragCtx;
      var ci = this.editor.findItem(event, ['atoms']);
      if (ci && ci.map === 'atoms' && ci.id === dragCtx.item.id) {
        this.editor.hover(this.editor.findItem(event, ['atoms']));
        return;
      }
      var atom = rnd.ctab.molecule.atoms.get(dragCtx.item.id);
      var angle = utils.calcAngle(atom === null || atom === void 0 ? void 0 : atom.pp, rnd.page2obj(event));
      if (!event.ctrlKey) angle = utils.fracAngle(angle, null);
      var degrees = utils.degrees(angle);
      this.editor.event.message.dispatch({
        info: degrees + '??'
      });
      var newAtomPos = utils.calcNewAtomPos(atom === null || atom === void 0 ? void 0 : atom.pp, rnd.page2obj(event), event.ctrlKey);
      if (dragCtx.action) dragCtx.action.perform(rnd.ctab);
      dragCtx.action = fromBondAddition(rnd.ctab, _classPrivateFieldGet(this, _bondProps), dragCtx.item.id, Object.assign({}, this.atomProps), newAtomPos, newAtomPos)[0];
      this.editor.update(dragCtx.action, true);
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = this.editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var result = [];
      if (ci && functionalGroups && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) atomResult.push(atomId);
      }
      if (atomResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$c(atomResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var id = _step2.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (this.dragCtx) {
        var dragCtx = this.dragCtx;
        var rnd = this.editor.render;
        this.editor.update(dragCtx.action || (dragCtx.item ? fromAtomsAttrs(rnd.ctab, dragCtx.item.id, this.atomProps, true) : fromAtomAddition(rnd.ctab, rnd.page2obj(event), this.atomProps)));
        delete this.dragCtx;
      }
      this.editor.event.message.dispatch({
        info: false
      });
    }
  }]);
  return AtomTool;
}();
function atomLongtapEvent(tool, render) {
  var _dragCtx$item;
  var dragCtx = tool.dragCtx,
      editor = tool.editor;
  var atomid = (_dragCtx$item = dragCtx.item) === null || _dragCtx$item === void 0 ? void 0 : _dragCtx$item.id;
  var fgs = render.ctab.molecule.functionalGroups;
  var atom = atomid !== undefined && atomid !== null ? render.ctab.molecule.atoms.get(atomid) : new Atom$2({
    label: ''
  });
  var fgId = FunctionalGroup.findFunctionalGroupByAtom(fgs, atomid);
  dragCtx.timeout = setTimeout(function () {
    delete tool.dragCtx;
    if (fgId != null) {
      editor.event.removeFG.dispatch({
        fgIds: [fgId]
      });
      return;
    }
    editor.selection(null);
    var res = editor.event.quickEdit.dispatch(atom);
    Promise.resolve(res).then(function (newatom) {
      var action = atomid ? fromAtomsAttrs(render.ctab, atomid, newatom, null) : fromAtomAddition(render.ctab, dragCtx.xy0, newatom);
      editor.update(action);
    })["catch"](function () {
      return null;
    });
  }, 750);
  dragCtx.stopTapping = function () {
    if (dragCtx.timeout) {
      clearTimeout(dragCtx.timeout);
      delete dragCtx.timeout;
    }
  };
}

function _createForOfIteratorHelper$b(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$b(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$b(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$b(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$b(o, minLen); }
function _arrayLikeToArray$b(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var AttachTool = function () {
  function AttachTool(editor, attachPoints) {
    _classCallCheck(this, AttachTool);
    this.attach = {
      atomid: attachPoints.atomid || 0,
      bondid: attachPoints.bondid || 0
    };
    this.editor = editor;
    this.editor.selection({
      atoms: [this.attach.atomid],
      bonds: [this.attach.bondid]
    });
  }
  _createClass(AttachTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var _struct$atoms$get;
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['atoms', 'bonds']);
      var struct = rnd.ctab.molecule;
      if (ci && (ci.map === 'atoms' && Elements.get((_struct$atoms$get = struct.atoms.get(ci.id)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.label) || ci.map === 'bonds')) this.editor.hover(ci);else this.editor.hover(null);
      return true;
    }
  }, {
    key: "click",
    value: function click(event) {
      var _molecule$atoms$get;
      var editor = this.editor;
      var rnd = editor.render;
      var molecule = rnd.ctab.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (ci && functionalGroups.size && ci.map === 'bonds') {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        if (bondId !== null) {
          bondResult.push(bondId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$b(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$b(bondResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (ci && (ci.map === 'atoms' && Elements.get((_molecule$atoms$get = molecule.atoms.get(ci.id)) === null || _molecule$atoms$get === void 0 ? void 0 : _molecule$atoms$get.label) || ci.map === 'bonds')) {
        if (ci.map === 'atoms') {
          this.attach.atomid = ci.id;
        } else this.attach.bondid = ci.id;
        this.editor.selection({
          atoms: [this.attach.atomid],
          bonds: [this.attach.bondid]
        });
        this.editor.event.attachEdit.dispatch(this.attach);
      }
      return true;
    }
  }]);
  return AttachTool;
}();

function _createForOfIteratorHelper$a(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$a(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$a(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$a(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$a(o, minLen); }
function _arrayLikeToArray$a(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var BondTool = function () {
  function BondTool(editor, bondProps) {
    var _editor$selection;
    _classCallCheck(this, BondTool);
    this.editor = editor;
    this.atomProps = {
      label: 'C'
    };
    this.bondProps = bondProps;
    if (editor.selection() && (_editor$selection = editor.selection()) !== null && _editor$selection !== void 0 && _editor$selection.bonds) {
      var action = fromBondsAttrs(editor.render.ctab, editor.selection().bonds, bondProps);
      editor.update(action);
      editor.selection(null);
      this.isNotActiveTool = true;
    }
  }
  _createClass(BondTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      if (this.dragCtx) return;
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = this.editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) atomResult.push(atomId);
      }
      if (ci && functionalGroups.size && ci.map === 'bonds') {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        if (bondId !== null) bondResult.push(bondId);
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$a(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$a(bondResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      var rnd = this.editor.render;
      this.editor.hover(null);
      this.editor.selection(null);
      this.dragCtx = {
        xy0: rnd.page2obj(event),
        item: this.editor.findItem(event, ['atoms', 'bonds'])
      };
      if (!this.dragCtx.item)
        delete this.dragCtx.item;
      return true;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var editor = this.editor;
      var rnd = editor.render;
      if ('dragCtx' in this) {
        var dragCtx = this.dragCtx;
        var pos = rnd.page2obj(event);
        var angle = utils.calcAngle(dragCtx.xy0, pos);
        if (!event.ctrlKey) angle = utils.fracAngle(angle, null);
        var degrees = utils.degrees(angle);
        this.editor.event.message.dispatch({
          info: degrees + '??'
        });
        if (!('item' in dragCtx) || dragCtx.item.map === 'atoms') {
          if ('action' in dragCtx) dragCtx.action.perform(rnd.ctab);
          var beginAtom;
          var endAtom;
          var beginPos;
          var endPos;
          var extraNeighbour = [];
          if ('item' in dragCtx && dragCtx.item.map === 'atoms') {
            beginAtom = dragCtx.item.id;
            endAtom = editor.findItem(event, ['atoms'], dragCtx.item);
            var closestSGroup = editor.findItem(event, ['functionalGroups']);
            if (closestSGroup && FunctionalGroup.isContractedFunctionalGroup(closestSGroup.id, functionalGroups)) {
              var sGroup = sgroups.get(closestSGroup.id);
              var sGroupAtoms = SGroup.getAtoms(molecule, sGroup === null || sGroup === void 0 ? void 0 : sGroup.item);
              endAtom = {
                id: sGroupAtoms[0],
                map: 'atoms'
              };
            }
            var fGroupId = endAtom && FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, endAtom.id);
            var fGroup = typeof fGroupId === 'number' && sgroups.get(fGroupId);
            var fGroupAtoms = fGroup && SGroup.getAtoms(molecule, fGroup.item);
            if (endAtom && fGroup && endAtom.id !== (fGroupAtoms === null || fGroupAtoms === void 0 ? void 0 : fGroupAtoms[0])) {
              this.editor.event.removeFG.dispatch({
                fgIds: [fGroupId]
              });
              endAtom = null;
            }
            if (endAtom && fGroup && endAtom.id === (fGroupAtoms === null || fGroupAtoms === void 0 ? void 0 : fGroupAtoms[0])) {
              var atomNeighbours = molecule.atomGetNeighbors(endAtom.id);
              atomNeighbours === null || atomNeighbours === void 0 ? void 0 : atomNeighbours.forEach(function (nei) {
                !(fGroupAtoms !== null && fGroupAtoms !== void 0 && fGroupAtoms.includes(nei.aid)) && !extraNeighbour.includes(nei.aid) && extraNeighbour.push(nei.aid);
              });
            }
            if (extraNeighbour.length >= 1) {
              endAtom = null;
            }
          } else {
            beginAtom = this.atomProps;
            beginPos = dragCtx.xy0;
            endAtom = editor.findItem(event, ['atoms']);
            var atomResult = [];
            var result = [];
            if (endAtom && endAtom.map === 'atoms' && functionalGroups.size && this.dragCtx) {
              var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, endAtom.id);
              if (atomId !== null) atomResult.push(atomId);
            }
            if (atomResult.length > 0) {
              var _iterator3 = _createForOfIteratorHelper$a(atomResult),
                  _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var id = _step3.value;
                  var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
                  fgId !== null && !result.includes(fgId) && result.push(fgId);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
            if (result.length > 0) {
              this.editor.event.removeFG.dispatch({
                fgIds: result
              });
              delete this.dragCtx;
              return;
            }
          }
          var dist = Number.MAX_VALUE;
          if (endAtom && endAtom.map === 'atoms') {
            endAtom = endAtom.id;
          } else {
            endAtom = this.atomProps;
            var xy1 = rnd.page2obj(event);
            dist = Vec2.dist(dragCtx.xy0, xy1);
            if (beginPos) {
              endPos = utils.calcNewAtomPos(beginPos, xy1, event.ctrlKey);
            } else {
              var atom = rnd.ctab.molecule.atoms.get(beginAtom);
              beginPos = utils.calcNewAtomPos(atom === null || atom === void 0 ? void 0 : atom.pp.get_xy0(), xy1, event.ctrlKey);
            }
          }
          if (dist > 0.3) {
            dragCtx.action = fromBondAddition(rnd.ctab, this.bondProps, beginAtom, endAtom, beginPos, endPos)[0];
          } else {
            delete dragCtx.action;
          }
          this.editor.update(dragCtx.action, true);
          return true;
        }
      }
      this.editor.hover(this.editor.findItem(event, ['atoms', 'bonds']), null, event);
      return true;
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      if ('dragCtx' in this) {
        var dragCtx = this.dragCtx;
        var rnd = this.editor.render;
        var struct = rnd.ctab.molecule;
        if ('action' in dragCtx) {
          this.editor.update(dragCtx.action);
        } else if (!('item' in dragCtx)) {
          var xy = rnd.page2obj(event);
          var v = new Vec2(1.0 / 2, 0).rotate(this.bondProps.type === Bond$2.PATTERN.TYPE.SINGLE ? -Math.PI / 6 : 0);
          var bondAddition = fromBondAddition(rnd.ctab, this.bondProps, {
            label: 'C'
          }, {
            label: 'C'
          }, Vec2.diff(xy, v), Vec2.sum(xy, v));
          this.editor.update(bondAddition[0]);
        } else if (dragCtx.item.map === 'atoms') {
          this.editor.update(fromBondAddition(rnd.ctab, this.bondProps, dragCtx.item.id, undefined)[0]);
        } else if (dragCtx.item.map === 'bonds') {
          var bondProps = Object.assign({}, this.bondProps);
          var bond = struct.bonds.get(dragCtx.item.id);
          this.editor.update(bondChangingAction(rnd.ctab, dragCtx.item.id, bond, bondProps));
        }
        delete this.dragCtx;
      }
      this.editor.event.message.dispatch({
        info: false
      });
      return true;
    }
  }]);
  return BondTool;
}();

function _createForOfIteratorHelper$9(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$9(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$9(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$9(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$9(o, minLen); }
function _arrayLikeToArray$9(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ChainTool = function () {
  function ChainTool(editor) {
    _classCallCheck(this, ChainTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(ChainTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      if (this.dragCtx) return;
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (ci && functionalGroups.size && ci.map === 'bonds') {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        if (bondId !== null) {
          bondResult.push(bondId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$9(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$9(bondResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      this.editor.hover(null);
      this.dragCtx = {
        xy0: rnd.page2obj(event),
        item: ci
      };
      if (ci && ci.map === 'atoms') {
        this.editor.selection({
          atoms: [ci.id]
        });
        atomLongtapEvent(this, rnd);
      }
      if (!this.dragCtx.item)
        delete this.dragCtx.item;
      return true;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var editor = this.editor;
      var restruct = editor.render.ctab;
      var dragCtx = this.dragCtx;
      editor.hover(this.editor.findItem(event, ['atoms', 'bonds']), null, event);
      if (!dragCtx) {
        return true;
      }
      if (dragCtx && dragCtx.stopTapping) {
        dragCtx.stopTapping();
      }
      editor.selection(null);
      if (!dragCtx.item || dragCtx.item.map === 'atoms') {
        var _atoms$get;
        if (dragCtx.action) {
          dragCtx.action.perform(restruct);
        }
        var atoms = restruct.molecule.atoms;
        var pos0 = dragCtx.item ? (_atoms$get = atoms.get(dragCtx.item.id)) === null || _atoms$get === void 0 ? void 0 : _atoms$get.pp : dragCtx.xy0;
        var pos1 = editor.render.page2obj(event);
        var sectCount = Math.ceil(Vec2.diff(pos1, pos0).length());
        var angle = event.ctrlKey ? utils.calcAngle(pos0, pos1) : utils.fracAngle(pos0, pos1);
        var _fromChain = fromChain(restruct, pos0, angle, sectCount, dragCtx.item ? dragCtx.item.id : null),
            _fromChain2 = _slicedToArray(_fromChain, 2),
            action = _fromChain2[0],
            newItems = _fromChain2[1];
        editor.event.message.dispatch({
          info: sectCount + ' sectors'
        });
        dragCtx.action = action;
        editor.update(dragCtx.action, true);
        dragCtx.mergeItems = getItemsToFuse(editor, newItems);
        editor.hover(getHoverToFuse(dragCtx.mergeItems));
        return true;
      }
      return true;
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var atom;
      var atomResult = [];
      var result = [];
      if (this.dragCtx && this.dragCtx.mergeItems && functionalGroups.size) {
        atom = this.dragCtx.mergeItems.atoms.values().next().value;
      }
      if (atom) {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, atom);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator3 = _createForOfIteratorHelper$9(atomResult),
            _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var id = _step3.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      var dragCtx = this.dragCtx;
      if (!dragCtx) {
        return true;
      }
      delete this.dragCtx;
      var editor = this.editor;
      if (dragCtx.stopTapping) {
        dragCtx.stopTapping();
      }
      if (!dragCtx.action && dragCtx.item && dragCtx.item.map === 'bonds') {
        var bond = molecule.bonds.get(dragCtx.item.id);
        dragCtx.action = bondChangingAction(struct, dragCtx.item.id, bond, {
          type: Bond$2.PATTERN.TYPE.SINGLE,
          stereo: Bond$2.PATTERN.STEREO.NONE
        });
      } else {
        dragCtx.action = dragCtx.action ? fromItemsFuse(struct, dragCtx.mergeItems).mergeWith(dragCtx.action) : fromItemsFuse(struct, dragCtx.mergeItems);
      }
      editor.selection(null);
      editor.hover(null);
      if (dragCtx.action) {
        editor.update(dragCtx.action);
      }
      editor.event.message.dispatch({
        info: false
      });
      return true;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.mouseup();
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.mouseup();
    }
  }]);
  return ChainTool;
}();

function _createForOfIteratorHelper$8(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$8(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$8(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$8(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen); }
function _arrayLikeToArray$8(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ChargeTool = function () {
  function ChargeTool(editor, charge) {
    _classCallCheck(this, ChargeTool);
    this.editor = editor;
    this.editor.selection(null);
    this.charge = charge;
  }
  _createClass(ChargeTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var _molecule$atoms$get;
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var ci = this.editor.findItem(event, ['atoms']);
      if (ci && ci.map === 'atoms' && Elements.get((_molecule$atoms$get = molecule.atoms.get(ci.id)) === null || _molecule$atoms$get === void 0 ? void 0 : _molecule$atoms$get.label)) {
        this.editor.hover(ci);
      } else {
        this.editor.hover(null, null, event);
      }
      return true;
    }
  }, {
    key: "click",
    value: function click(event) {
      var _molecule$atoms$get2;
      var editor = this.editor;
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var rnd = editor.render;
      var ci = editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$8(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (ci && ci.map === 'atoms' && Elements.get((_molecule$atoms$get2 = molecule.atoms.get(ci.id)) === null || _molecule$atoms$get2 === void 0 ? void 0 : _molecule$atoms$get2.label)) {
        var _molecule$atoms$get3;
        this.editor.hover(null);
        this.editor.update(fromAtomsAttrs(rnd.ctab, ci.id, {
          charge: ((_molecule$atoms$get3 = molecule.atoms.get(ci.id)) === null || _molecule$atoms$get3 === void 0 ? void 0 : _molecule$atoms$get3.charge) + this.charge
        }, null));
      }
      return true;
    }
  }]);
  return ChargeTool;
}();

var EnhancedStereoTool = function () {
  function EnhancedStereoTool(editor) {
    _classCallCheck(this, EnhancedStereoTool);
    var selection = editor.selection();
    this.editor = editor;
    this.isNotActiveTool = true;
    this.stereoAtoms = findStereoAtoms(editor.struct(), selection ? selection.atoms || [] : Array.from(editor.struct().atoms.keys()));
    if (this.stereoAtoms.length === 0) {
      return;
    }
    this.changeAtomsStereoAction().then(function (action) {
      return action && editor.update(action);
    });
  }
  _createClass(EnhancedStereoTool, [{
    key: "changeAtomsStereoAction",
    value: function changeAtomsStereoAction() {
      var _this = this;
      var struct = this.editor.struct();
      var restruct = this.editor.render.ctab;
      var stereoLabels = this.stereoAtoms.map(function (stereoAtom) {
        var atom = struct.atoms.get(stereoAtom);
        return atom && atom.stereoLabel;
      });
      var hasAnotherLabel = stereoLabels.some(function (stereoLabel) {
        return stereoLabel !== stereoLabels[0];
      });
      var res = this.editor.event.enhancedStereoEdit.dispatch({
        stereoLabel: hasAnotherLabel ? null : stereoLabels[0]
      });
      return res.then(function (stereoLabel) {
        if (!stereoLabel) {
          return null;
        }
        var action = _this.stereoAtoms.reduce(function (acc, stereoAtom) {
          var _struct$atoms$get;
          return acc.mergeWith(fromStereoFlagUpdate(restruct, (_struct$atoms$get = struct.atoms.get(stereoAtom)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.fragment));
        }, fromAtomsAttrs(restruct, _this.stereoAtoms, {
          stereoLabel: stereoLabel
        }, false));
        action.operations.reverse();
        return action;
      });
    }
  }]);
  return EnhancedStereoTool;
}();

function getElementsInRectangle(restruct, p0, p1) {
  var bondList = [];
  var atomList = [];
  var sGroups = restruct.sgroups;
  var functionalGroups = restruct.molecule.functionalGroups;
  var x0 = Math.min(p0.x, p1.x);
  var x1 = Math.max(p0.x, p1.x);
  var y0 = Math.min(p0.y, p1.y);
  var y1 = Math.max(p0.y, p1.y);
  restruct.bonds.forEach(function (bond, bid) {
    var centre = Vec2.lc2(restruct.atoms.get(bond.b.begin).a.pp, 0.5, restruct.atoms.get(bond.b.end).a.pp, 0.5);
    if (centre.x > x0 && centre.x < x1 && centre.y > y0 && centre.y < y1 && !FunctionalGroup.isBondInContractedFunctionalGroup(bond.b, sGroups, functionalGroups, true)) {
      bondList.push(bid);
    }
  });
  restruct.atoms.forEach(function (atom, aid) {
    var relatedFGId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, aid);
    var sGroup = restruct.sgroups.get(relatedFGId);
    if (atom.a.pp.x > x0 && atom.a.pp.x < x1 && atom.a.pp.y > y0 && atom.a.pp.y < y1 && (!FunctionalGroup.isAtomInContractedFunctionalGroup(atom.a, sGroups, functionalGroups, true) || aid === sGroup.item.atoms[0])) {
      atomList.push(aid);
    }
  });
  var rxnArrowsList = [];
  var rxnPlusesList = [];
  var simpleObjectsList = [];
  restruct.rxnArrows.forEach(function (item, id) {
    if (item.item.center().x > x0 && item.item.center().x < x1 && item.item.center().y > y0 && item.item.center().y < y1) {
      rxnArrowsList.push(id);
    }
  });
  restruct.rxnPluses.forEach(function (item, id) {
    if (item.item.pp.x > x0 && item.item.pp.x < x1 && item.item.pp.y > y0 && item.item.pp.y < y1) {
      rxnPlusesList.push(id);
    }
  });
  restruct.simpleObjects.forEach(function (item, id) {
    var referencePoints = item.getReferencePoints(true);
    var referencePointInRectangle = referencePoints.find(function (point) {
      return point.x > x0 && point.x < x1 && point.y > y0 && point.y < y1;
    });
    if (referencePointInRectangle) {
      simpleObjectsList.push(id);
    }
  });
  var enhancedFlagList = [];
  restruct.enhancedFlags.forEach(function (item, id) {
    if (!item.pp) return;
    if (item.pp.x > x0 && item.pp.x < x1 && item.pp.y > y0 && item.pp.y < y1) {
      enhancedFlagList.push(id);
    }
  });
  var sgroupDataList = [];
  restruct.sgroupData.forEach(function (item, id) {
    if (item.sgroup.pp.x > x0 && item.sgroup.pp.x < x1 && item.sgroup.pp.y > y0 && item.sgroup.pp.y < y1) {
      sgroupDataList.push(id);
    }
  });
  var textsList = [];
  restruct.texts.forEach(function (item, id) {
    var referencePoints = item.getReferencePoints();
    var referencePointInRectangle = referencePoints.find(function (point) {
      return point.x > x0 && point.x < x1 && point.y > y0 && point.y < y1;
    });
    if (referencePointInRectangle) {
      textsList.push(id);
    }
  });
  return {
    atoms: atomList,
    bonds: bondList,
    rxnArrows: rxnArrowsList,
    rxnPluses: rxnPlusesList,
    enhancedFlags: enhancedFlagList,
    sgroupData: sgroupDataList,
    simpleObjects: simpleObjectsList,
    texts: textsList
  };
}
function getElementsInPolygon(restruct, rr) {
  var bondList = [];
  var atomList = [];
  var r = [];
  var sGroups = restruct.sgroups;
  var functionalGroups = restruct.molecule.functionalGroups;
  for (var i = 0; i < rr.length; ++i) {
    r[i] = new Vec2(rr[i].x, rr[i].y);
  }
  restruct.bonds.forEach(function (bond, bid) {
    var centre = Vec2.lc2(restruct.atoms.get(bond.b.begin).a.pp, 0.5, restruct.atoms.get(bond.b.end).a.pp, 0.5);
    if (isPointInPolygon(r, centre) && !FunctionalGroup.isBondInContractedFunctionalGroup(bond.b, sGroups, functionalGroups, true)) {
      bondList.push(bid);
    }
  });
  restruct.atoms.forEach(function (atom, aid) {
    var relatedFGId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, aid);
    var sGroup = restruct.sgroups.get(relatedFGId);
    if (isPointInPolygon(r, atom.a.pp) && (!FunctionalGroup.isAtomInContractedFunctionalGroup(atom.a, sGroups, functionalGroups, true) || aid === sGroup.item.atoms[0])) {
      atomList.push(aid);
    }
  });
  var rxnArrowsList = [];
  var rxnPlusesList = [];
  var simpleObjectsList = [];
  var textsList = [];
  restruct.rxnArrows.forEach(function (item, id) {
    var referencePoints = item.getReferencePoints(true);
    var referencePointInPolygon = referencePoints.find(function (point) {
      return isPointInPolygon(r, point);
    });
    if (referencePointInPolygon) {
      rxnArrowsList.push(id);
    }
  });
  restruct.rxnPluses.forEach(function (item, id) {
    if (isPointInPolygon(r, item.item.pp)) {
      rxnPlusesList.push(id);
    }
  });
  restruct.simpleObjects.forEach(function (item, id) {
    var referencePoints = item.getReferencePoints(true);
    var referencePointInPolygon = referencePoints.find(function (point) {
      return isPointInPolygon(r, point);
    });
    if (referencePointInPolygon) {
      simpleObjectsList.push(id);
    }
  });
  restruct.texts.forEach(function (item, id) {
    var referencePoints = item.getReferencePoints();
    var referencePointInPolygon = referencePoints.find(function (point) {
      return isPointInPolygon(r, point);
    });
    if (referencePointInPolygon) {
      textsList.push(id);
    }
  });
  var enhancedFlagList = [];
  restruct.enhancedFlags.forEach(function (item, id) {
    if (item.pp && isPointInPolygon(r, item.pp)) {
      enhancedFlagList.push(id);
    }
  });
  var sgroupDataList = [];
  restruct.sgroupData.forEach(function (item, id) {
    if (isPointInPolygon(r, item.sgroup.pp)) {
      sgroupDataList.push(id);
    }
  });
  return {
    atoms: atomList,
    bonds: bondList,
    rxnArrows: rxnArrowsList,
    rxnPluses: rxnPlusesList,
    enhancedFlags: enhancedFlagList,
    sgroupData: sgroupDataList,
    simpleObjects: simpleObjectsList,
    texts: textsList
  };
}
function isPointInPolygon(r, p) {
  var d = new Vec2(0, 1);
  var n = d.rotate(Math.PI / 2);
  var v0 = Vec2.diff(r[r.length - 1], p);
  var n0 = Vec2.dot(n, v0);
  var d0 = Vec2.dot(d, v0);
  var w0 = new Vec2(0, 0);
  var counter = 0;
  var eps = 1e-5;
  var flag1 = false;
  var flag0 = false;
  for (var i = 0; i < r.length; ++i) {
    var v1 = Vec2.diff(r[i], p);
    var w1 = Vec2.diff(v1, v0);
    var n1 = Vec2.dot(n, v1);
    var d1 = Vec2.dot(d, v1);
    flag1 = false;
    if (n1 * n0 < 0) {
      if (d1 * d0 > -eps) {
        if (d0 > -eps) flag1 = true;
      } else if ((Math.abs(n0) * Math.abs(d1) - Math.abs(n1) * Math.abs(d0)) * d1 > 0) {
        flag1 = true;
      }
    }
    if (flag1 && flag0 && Vec2.dot(w1, n) * Vec2.dot(w0, n) >= 0) {
      flag1 = false;
    }
    if (flag1) {
      counter++;
    }
    v0 = v1;
    n0 = n1;
    d0 = d1;
    w0 = w1;
    flag0 = flag1;
  }
  return counter % 2 !== 0;
}
var locate = {
  inRectangle: getElementsInRectangle,
  inPolygon: getElementsInPolygon
};

var LassoHelper = function () {
  function LassoHelper(mode, editor, fragment) {
    _classCallCheck(this, LassoHelper);
    this.mode = mode;
    this.fragment = fragment;
    this.editor = editor;
  }
  _createClass(LassoHelper, [{
    key: "getSelection",
    value: function getSelection() {
      var rnd = this.editor.render;
      if (this.mode === 0) {
        return locate.inPolygon(rnd.ctab, this.points);
      }
      if (this.mode === 1) {
        return locate.inRectangle(rnd.ctab, this.points[0], this.points[1]);
      }
      throw new Error('Selector mode unknown');
    }
  }, {
    key: "begin",
    value: function begin(event) {
      var rnd = this.editor.render;
      this.points = [rnd.page2obj(event)];
      if (this.mode === 1) {
        this.points.push(this.points[0]);
      }
    }
  }, {
    key: "running",
    value: function running() {
      return !!this.points;
    }
  }, {
    key: "addPoint",
    value: function addPoint(event) {
      if (!this.points) {
        return null;
      }
      var rnd = this.editor.render;
      if (this.mode === 0) {
        this.points.push(rnd.page2obj(event));
      } else if (this.mode === 1) {
        this.points = [this.points[0], rnd.page2obj(event)];
      }
      this.update();
      return this.getSelection();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.selection) {
        this.selection.remove();
        this.selection = null;
      }
      if (this.points && this.points.length > 1) {
        var rnd = this.editor.render;
        var dp = this.points.map(function (p) {
          return Scale.obj2scaled(p, rnd.options).add(rnd.options.offset);
        });
        this.selection = this.mode === 0 ? rnd.selectionPolygon(dp) : rnd.selectionRectangle(dp[0], dp[1]);
      }
    }
  }, {
    key: "end",
    value: function end() {
      var ret = this.getSelection();
      this.points = null;
      this.update();
      return ret;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.points = null;
      this.update();
    }
  }]);
  return LassoHelper;
}();

function _createForOfIteratorHelper$7(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }
function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var searchMaps = ['atoms', 'bonds', 'sgroups', 'functionalGroups', 'sgroupData'];
var SGroupTool = function () {
  function SGroupTool(editor, type) {
    _classCallCheck(this, SGroupTool);
    this.editor = editor;
    this.type = type;
    this.lassoHelper = new LassoHelper(1, editor, null);
    this.checkSelection();
  }
  _createClass(SGroupTool, [{
    key: "checkSelection",
    value: function checkSelection() {
      var selection = this.editor.selection() || {};
      if (selection.atoms && selection.bonds) {
        var _this$editor$selectio;
        var selectedAtoms = (_this$editor$selectio = this.editor.selection()) === null || _this$editor$selectio === void 0 ? void 0 : _this$editor$selectio.atoms;
        var struct = this.editor.render.ctab;
        var molecule = struct.molecule;
        var sgroups = molecule.sgroups;
        var newSelected = {
          atoms: [],
          bonds: []
        };
        var actualSgroupId;
        var atomsResult = [];
        var extraAtoms;
        var functionalGroups = molecule.functionalGroups;
        var result = [];
        var id = sgroups.find(function (_, sgroup) {
          return isEqual(sgroup.atoms, selectedAtoms);
        });
        if (selectedAtoms && functionalGroups.size) {
          var _iterator = _createForOfIteratorHelper$7(selectedAtoms),
              _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _struct$atoms$get;
              var atom = _step.value;
              var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, atom);
              if (atomId == null) {
                extraAtoms = true;
              }
              var atomFromStruct = atomId !== null && ((_struct$atoms$get = struct.atoms.get(atomId)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.a);
              if (atomFromStruct) {
                var _iterator2 = _createForOfIteratorHelper$7(atomFromStruct.sgs.values()),
                    _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var sgId = _step2.value;
                    actualSgroupId = sgId;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              if (atomFromStruct && FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, false)) {
                var _newSelected$atoms, _newSelected$bonds;
                var sgroupAtoms = actualSgroupId !== undefined && SGroup.getAtoms(molecule, sgroups.get(actualSgroupId));
                var sgroupBonds = actualSgroupId !== undefined && SGroup.getBonds(molecule, sgroups.get(actualSgroupId));
                atom === sgroupAtoms[0] && (_newSelected$atoms = newSelected.atoms).push.apply(_newSelected$atoms, _toConsumableArray(sgroupAtoms)) && (_newSelected$bonds = newSelected.bonds).push.apply(_newSelected$bonds, _toConsumableArray(sgroupBonds));
              }
              if (atomFromStruct) {
                atomsResult.push(atomId);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (extraAtoms) {
          atomsResult = [];
        }
        if (atomsResult && atomsResult.length > 0) {
          var _iterator3 = _createForOfIteratorHelper$7(atomsResult),
              _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _id = _step3.value;
              var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, _id);
              if (fgId !== null && !result.includes(fgId)) {
                result.push(fgId);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        if (result.length) {
          this.editor.selection(null);
          this.editor.event.removeFG.dispatch({
            fgIds: result
          });
          return;
        }
        sgroupDialog(this.editor, id !== undefined ? id : null, this.type);
        this.isNotActiveTool = true;
      }
    }
  }, {
    key: "mousedown",
    value: function mousedown(event) {
      var ci = this.editor.findItem(event, searchMaps);
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups.size && ci.map === 'atoms') {
        var _struct$atoms$get2;
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        var atomFromStruct = atomId !== null && ((_struct$atoms$get2 = struct.atoms.get(atomId)) === null || _struct$atoms$get2 === void 0 ? void 0 : _struct$atoms$get2.a);
        if (atomFromStruct && !FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, true)) {
          atomResult.push(atomId);
        }
      }
      if (ci && functionalGroups.size && ci.map === 'bonds') {
        var _struct$bonds$get;
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        var bondFromStruct = bondId !== null && ((_struct$bonds$get = struct.bonds.get(bondId)) === null || _struct$bonds$get === void 0 ? void 0 : _struct$bonds$get.b);
        if (bondFromStruct && !FunctionalGroup.isBondInContractedFunctionalGroup(bondFromStruct, sgroups, functionalGroups, true)) {
          bondResult.push(bondId);
        }
      }
      if (ci && functionalGroups.size && ci.map === 'functionalGroups') {
        var sgroup = sgroups.get(ci.id);
        if (FunctionalGroup.isFunctionalGroup(sgroup === null || sgroup === void 0 ? void 0 : sgroup.item)) {
          this.editor.event.removeFG.dispatch({
            fgIds: [ci.id]
          });
          return;
        }
      }
      if (atomResult.length > 0) {
        var _iterator4 = _createForOfIteratorHelper$7(atomResult),
            _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var id = _step4.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator5 = _createForOfIteratorHelper$7(bondResult),
            _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _id2 = _step5.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id2);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) {
        this.lassoHelper.begin(event);
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      if (this.lassoHelper.running(event)) {
        this.editor.selection(this.lassoHelper.addPoint(event));
      } else {
        this.editor.hover(this.editor.findItem(event, searchMaps));
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(event) {
      if (this.lassoHelper.running(event)) {
        this.lassoHelper.end(event);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = this.editor.findItem(event, searchMaps);
      var selected = this.editor.selection();
      var newSelected = {
        atoms: [],
        bonds: []
      };
      var actualSgroupId;
      var atomsResult = [];
      var extraAtoms;
      var bondsResult = [];
      var extraBonds;
      var result = [];
      if (ci && ci.map === 'functionalGroups' && functionalGroups.size && FunctionalGroup.isContractedFunctionalGroup(ci.id, functionalGroups)) return;
      if (selected && functionalGroups.size && selected.atoms) {
        var _iterator6 = _createForOfIteratorHelper$7(selected.atoms),
            _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _struct$atoms$get3;
            var atom = _step6.value;
            var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, atom);
            if (atomId == null) {
              extraAtoms = true;
            }
            var atomFromStruct = atomId !== null && ((_struct$atoms$get3 = struct.atoms.get(atomId)) === null || _struct$atoms$get3 === void 0 ? void 0 : _struct$atoms$get3.a);
            if (atomFromStruct) {
              var _iterator7 = _createForOfIteratorHelper$7(atomFromStruct.sgs.values()),
                  _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var sgId = _step7.value;
                  actualSgroupId = sgId;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
            if (atomFromStruct && FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, true)) {
              var _struct$sgroups$get, _struct$sgroups$get2, _newSelected$atoms2, _newSelected$bonds2;
              var sgroupAtoms = actualSgroupId !== undefined && SGroup.getAtoms(molecule, (_struct$sgroups$get = struct.sgroups.get(actualSgroupId)) === null || _struct$sgroups$get === void 0 ? void 0 : _struct$sgroups$get.item);
              var sgroupBonds = actualSgroupId !== undefined && SGroup.getBonds(molecule, (_struct$sgroups$get2 = struct.sgroups.get(actualSgroupId)) === null || _struct$sgroups$get2 === void 0 ? void 0 : _struct$sgroups$get2.item);
              atom === sgroupAtoms[0] && (_newSelected$atoms2 = newSelected.atoms).push.apply(_newSelected$atoms2, _toConsumableArray(sgroupAtoms)) && (_newSelected$bonds2 = newSelected.bonds).push.apply(_newSelected$bonds2, _toConsumableArray(sgroupBonds));
            }
            if (atomFromStruct) {
              atomsResult.push(atomId);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      if (selected && functionalGroups.size && selected.bonds) {
        var _iterator8 = _createForOfIteratorHelper$7(selected.bonds),
            _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _struct$bonds$get2;
            var bond = _step8.value;
            var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, bond);
            if (bondId === null) {
              extraBonds = true;
            }
            var bondFromStruct = bondId !== null && ((_struct$bonds$get2 = struct.bonds.get(bondId)) === null || _struct$bonds$get2 === void 0 ? void 0 : _struct$bonds$get2.b);
            if (bondFromStruct) {
              bondsResult.push(bondId);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      if (atomsResult.length) {
        atomsResult.forEach(function (id) {
          var _struct$sgroups$get3, _newSelected$atoms3;
          var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
          var sgroupAtoms = SGroup.getAtoms(molecule, (_struct$sgroups$get3 = struct.sgroups.get(fgId)) === null || _struct$sgroups$get3 === void 0 ? void 0 : _struct$sgroups$get3.item);
          (_newSelected$atoms3 = newSelected.atoms).push.apply(_newSelected$atoms3, _toConsumableArray(sgroupAtoms));
        });
      }
      if (bondsResult.length) {
        bondsResult.forEach(function (id) {
          var _struct$sgroups$get4, _newSelected$bonds3;
          var fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, id);
          var sgroupBonds = SGroup.getBonds(molecule, (_struct$sgroups$get4 = struct.sgroups.get(fgId)) === null || _struct$sgroups$get4 === void 0 ? void 0 : _struct$sgroups$get4.item);
          (_newSelected$bonds3 = newSelected.bonds).push.apply(_newSelected$bonds3, _toConsumableArray(sgroupBonds));
        });
      }
      if (extraAtoms || extraBonds) {
        atomsResult = null;
        bondsResult = null;
      }
      if (atomsResult && atomsResult.length > 0) {
        var _iterator9 = _createForOfIteratorHelper$7(atomsResult),
            _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _id3 = _step9.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, _id3);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
      if (bondsResult && bondsResult.length > 0) {
        var _iterator10 = _createForOfIteratorHelper$7(bondsResult),
            _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _id4 = _step10.value;
            var _fgId2 = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id4);
            if (_fgId2 !== null && !result.includes(_fgId2)) {
              result.push(_fgId2);
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      if (result.length === 1) {
        this.editor.selection(null);
        this.lassoHelper.cancel();
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      var id = null;
      var selection = null;
      if (this.lassoHelper.running(event)) {
        selection = newSelected.atoms.length > 0 ? selMerge(this.lassoHelper.end(event), newSelected, false) : this.lassoHelper.end(event);
        this.editor.selection(selection);
      } else {
        if (!ci)
          return;
        this.editor.hover(null);
        if (ci.map === 'atoms') {
          selection = {
            atoms: [ci.id]
          };
        } else if (ci.map === 'bonds') {
          var _bond = this.editor.render.ctab.bonds.get(ci.id);
          selection = {
            atoms: [_bond === null || _bond === void 0 ? void 0 : _bond.b.begin, _bond === null || _bond === void 0 ? void 0 : _bond.b.end]
          };
        } else if (ci.map === 'sgroups' || ci.map === 'sgroupData') {
          id = ci.id;
        } else {
          return;
        }
      }
      if (id !== null || selection && selection.atoms) sgroupDialog(this.editor, id, this.type);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.lassoHelper.running()) {
        this.lassoHelper.end();
      }
      this.editor.selection(null);
    }
  }]);
  return SGroupTool;
}();
function sgroupDialog(editor, id, defaultType) {
  var restruct = editor.render.ctab;
  var struct = restruct.molecule;
  var selection = editor.selection() || {};
  var sg = id !== null ? struct.sgroups.get(id) : null;
  var type = sg ? sg.type : defaultType;
  var eventName = type === 'DAT' ? 'sdataEdit' : 'sgroupEdit';
  if (!selection.atoms && !selection.bonds && !sg) {
    return;
  }
  var attrs;
  if (sg) {
    attrs = sg.getAttrs();
    if (!attrs.context) attrs.context = getContextBySgroup(restruct, sg.atoms);
  } else {
    attrs = {
      context: getContextBySelection(restruct, selection)
    };
  }
  var res = editor.event[eventName].dispatch({
    type: type,
    attrs: attrs
  });
  Promise.resolve(res).then(function (newSg) {
    if (newSg.type !== 'DAT' &&
    checkOverlapping(struct, selection.atoms || [])) {
      editor.event.message.dispatch({
        error: 'Partial S-group overlapping is not allowed.'
      });
    } else {
      if (!sg && newSg.type !== 'DAT' && (!selection.atoms || selection.atoms.length === 0)) return;
      var isDataSg = sg && sg.getAttrs().context === newSg.attrs.context;
      if (isDataSg) {
        var action = fromSeveralSgroupAddition(restruct, newSg.type, sg.atoms, newSg.attrs).mergeWith(fromSgroupDeletion(restruct, id));
        editor.update(action);
        editor.selection(selection);
        return;
      }
      var result = fromContextType(id, editor, newSg, selection);
      editor.update(result.action);
      editor.selection(null);
    }
  })["catch"](function () {
    return null;
  });
}
function getContextBySgroup(restruct, sgAtoms) {
  var struct = restruct.molecule;
  if (sgAtoms.length === 1) {
    return SgContexts.Atom;
  }
  if (manyComponentsSelected(restruct, sgAtoms)) {
    return SgContexts.Multifragment;
  }
  if (singleComponentSelected(restruct, sgAtoms)) {
    return SgContexts.Fragment;
  }
  var atomSet = new Pile(sgAtoms);
  var sgBonds = Array.from(struct.bonds.values()).filter(function (bond) {
    return atomSet.has(bond.begin) && atomSet.has(bond.end);
  });
  return anyChainedBonds(sgBonds) ? SgContexts.Group : SgContexts.Bond;
}
function getContextBySelection(restruct, selection) {
  var struct = restruct.molecule;
  if (selection.atoms && !selection.bonds) {
    return SgContexts.Atom;
  }
  var bonds = selection.bonds.map(function (bondid) {
    return struct.bonds.get(bondid);
  });
  if (!anyChainedBonds(bonds)) {
    return SgContexts.Bond;
  }
  selection.atoms = selection.atoms || [];
  var atomSet = new Pile(selection.atoms);
  var allBondsSelected = bonds.every(function (bond) {
    return atomSet.has(bond.begin) && atomSet.has(bond.end);
  });
  if (singleComponentSelected(restruct, selection.atoms) && allBondsSelected) {
    return SgContexts.Fragment;
  }
  return manyComponentsSelected(restruct, selection.atoms) ? SgContexts.Multifragment : SgContexts.Group;
}
function fromContextType(id, editor, newSg, currSelection) {
  var restruct = editor.render.ctab;
  var sg = restruct.molecule.sgroups.get(id);
  var sourceAtoms = sg && sg.atoms || currSelection.atoms || [];
  var context = newSg.attrs.context;
  var result = fromSgroupAction(context, restruct, newSg, sourceAtoms, currSelection);
  result.selection = result.selection || currSelection;
  if (id !== null && id !== undefined) {
    result.action = result.action.mergeWith(fromSgroupDeletion(restruct, id));
  }
  editor.selection(result.selection);
  return result;
}
function anyChainedBonds(bonds) {
  if (bonds.length === 0) {
    return true;
  }
  for (var i = 0; i < bonds.length; ++i) {
    var fixedBond = bonds[i];
    for (var j = 0; j < bonds.length; ++j) {
      if (i === j) continue;
      var bond = bonds[j];
      if (fixedBond.end === bond.begin || fixedBond.end === bond.end) {
        return true;
      }
    }
  }
  return false;
}
function singleComponentSelected(restruct, atoms) {
  return countOfSelectedComponents(restruct, atoms) === 1;
}
function manyComponentsSelected(restruct, atoms) {
  return countOfSelectedComponents(restruct, atoms) > 1;
}
function countOfSelectedComponents(restruct, atoms) {
  var atomSet = new Pile(atoms);
  return Array.from(restruct.connectedComponents.values()).reduce(function (acc, component) {
    return acc + (atomSet.isSuperset(component) ? 1 : 0);
  }, 0);
}

function ownKeys$F(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$F(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$F(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$F(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }
function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classPrivateFieldInitSpec$1(obj, privateMap, value) { _checkPrivateRedeclaration$1(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration$1(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var _mode = new WeakMap();
var _lassoHelper = new WeakMap();
var SelectTool = function () {
  function SelectTool(editor, mode) {
    _classCallCheck(this, SelectTool);
    _classPrivateFieldInitSpec$1(this, _mode, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec$1(this, _lassoHelper, {
      writable: true,
      value: void 0
    });
    this.editor = editor;
    _classPrivateFieldSet(this, _mode, mode);
    _classPrivateFieldSet(this, _lassoHelper, new LassoHelper(_classPrivateFieldGet(this, _mode) === 'lasso' ? 0 : 1, editor, _classPrivateFieldGet(this, _mode) === 'fragment'));
  }
  _createClass(SelectTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var rnd = this.editor.render;
      var ctab = rnd.ctab;
      var molecule = ctab.molecule;
      var functionalGroups = molecule.functionalGroups;
      var selectedSgroups = [];
      var newSelected = {
        atoms: [],
        bonds: []
      };
      var actualSgroupId;
      this.editor.hover(null);
      var selectFragment = _classPrivateFieldGet(this, _lassoHelper).fragment || event.ctrlKey;
      var ci = this.editor.findItem(event, selectFragment ? ['frags', 'sgroups', 'functionalGroups', 'sgroupData', 'rgroups', 'rxnArrows', 'rxnPluses', 'enhancedFlags', 'simpleObjects', 'texts'] : ['atoms', 'bonds', 'sgroups', 'functionalGroups', 'sgroupData', 'rgroups', 'rxnArrows', 'rxnPluses', 'enhancedFlags', 'simpleObjects', 'texts'], null);
      if (ci && ci.map === 'atoms' && functionalGroups.size) {
        var _ctab$atoms$get;
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        var atomFromStruct = atomId !== null && ((_ctab$atoms$get = ctab.atoms.get(ci.id)) === null || _ctab$atoms$get === void 0 ? void 0 : _ctab$atoms$get.a);
        if (atomFromStruct) {
          var _iterator = _createForOfIteratorHelper$6(atomFromStruct.sgs.values()),
              _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sgId = _step.value;
              actualSgroupId = sgId;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (atomFromStruct && actualSgroupId !== undefined && !selectedSgroups.includes(actualSgroupId)) selectedSgroups.push(actualSgroupId);
      }
      if (ci && ci.map === 'bonds' && functionalGroups.size) {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        var sGroupId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, bondId);
        if (sGroupId !== null && !selectedSgroups.includes(sGroupId)) selectedSgroups.push(sGroupId);
      }
      if (selectedSgroups.length) {
        var _iterator2 = _createForOfIteratorHelper$6(selectedSgroups),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _sgId = _step2.value;
            var sgroup = ctab.sgroups.get(_sgId);
            if (sgroup) {
              var _newSelected$atoms, _newSelected$bonds;
              var sgroupAtoms = SGroup.getAtoms(molecule, sgroup.item);
              var sgroupBonds = SGroup.getBonds(molecule, sgroup.item);
              (_newSelected$atoms = newSelected.atoms).push.apply(_newSelected$atoms, _toConsumableArray(sgroupAtoms)) && (_newSelected$bonds = newSelected.bonds).push.apply(_newSelected$bonds, _toConsumableArray(sgroupBonds));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.selection(newSelected);
      }
      this.dragCtx = {
        item: ci,
        xy0: rnd.page2obj(event)
      };
      if (!ci || ci.map === 'atoms') {
        atomLongtapEvent(this, rnd);
      }
      if (!ci) {
        if (!event.shiftKey) this.editor.selection(null);
        delete this.dragCtx.item;
        if (!_classPrivateFieldGet(this, _lassoHelper).fragment) _classPrivateFieldGet(this, _lassoHelper).begin(event);
        return true;
      }
      var sel = closestToSel(ci);
      var sgroups = ctab.sgroups.get(ci.id);
      var selection = this.editor.selection();
      if (ci.map === 'frags') {
        var frag = ctab.frags.get(ci.id);
        sel = {
          atoms: frag.fragGetAtoms(ctab, ci.id),
          bonds: frag.fragGetBonds(ctab, ci.id)
        };
      } else if ((ci.map === 'sgroups' || ci.map === 'functionalGroups') && sgroups) {
        var _sgroup = sgroups.item;
        sel = {
          atoms: SGroup.getAtoms(molecule, _sgroup),
          bonds: SGroup.getBonds(molecule, _sgroup)
        };
      } else if (ci.map === 'rgroups') {
        var rgroup = ctab.rgroups.get(ci.id);
        sel = {
          atoms: rgroup.getAtoms(rnd),
          bonds: rgroup.getBonds(rnd)
        };
      } else if (ci.map === 'sgroupData') {
        if (isSelected(selection, ci)) return true;
      }
      if (event.shiftKey) {
        this.editor.selection(selMerge(sel, selection, true));
      } else {
        this.editor.selection(isSelected(selection, ci) ? selection : sel);
      }
      return true;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var editor = this.editor;
      var rnd = editor.render;
      var restruct = editor.render.ctab;
      var dragCtx = this.dragCtx;
      if (dragCtx && dragCtx.stopTapping) dragCtx.stopTapping();
      if (dragCtx && dragCtx.item) {
        var _atoms$get, _selection$atoms;
        var atoms = restruct.molecule.atoms;
        var selection = editor.selection();
        var shouldDisplayDegree = dragCtx.item.map === 'atoms' && (atoms === null || atoms === void 0 ? void 0 : (_atoms$get = atoms.get(dragCtx.item.id)) === null || _atoms$get === void 0 ? void 0 : _atoms$get.neighbors.length) === 1 && (selection === null || selection === void 0 ? void 0 : (_selection$atoms = selection.atoms) === null || _selection$atoms === void 0 ? void 0 : _selection$atoms.length) === 1 && !selection.bonds;
        if (shouldDisplayDegree) {
          var pos = rnd.page2obj(event);
          var angle = utils.calcAngle(dragCtx.xy0, pos);
          var degrees = utils.degrees(angle);
          this.editor.event.message.dispatch({
            info: degrees + '??'
          });
        }
        if (dragCtx.item.map === 'simpleObjects' && dragCtx.item.ref) {
          if (dragCtx !== null && dragCtx !== void 0 && dragCtx.action) dragCtx.action.perform(rnd.ctab);
          var current = rnd.page2obj(event);
          var diff = current.sub(this.dragCtx.xy0);
          dragCtx.action = fromSimpleObjectResizing(rnd.ctab, dragCtx.item.id, diff, current, dragCtx.item.ref, event.shiftKey);
          editor.update(dragCtx.action, true);
          return true;
        }
        if (dragCtx.item.map === 'rxnArrows' && dragCtx.item.ref) {
          if (dragCtx !== null && dragCtx !== void 0 && dragCtx.action) dragCtx.action.perform(rnd.ctab);
          var _current = rnd.page2obj(event);
          var _diff = _current.sub(dragCtx.xy0);
          dragCtx.previous = _current;
          dragCtx.action = fromArrowResizing(rnd.ctab, dragCtx.item.id, _diff, _current, dragCtx.item.ref);
          editor.update(dragCtx.action, true);
          return true;
        }
        if (dragCtx.action) {
          dragCtx.action.perform(restruct);
          editor.update(dragCtx.action, true);
        }
        var expSel = editor.explicitSelected();
        dragCtx.action = fromMultipleMove(restruct, expSel, editor.render.page2obj(event).sub(dragCtx.xy0));
        dragCtx.mergeItems = getItemsToFuse(editor, expSel);
        editor.hover(getHoverToFuse(dragCtx.mergeItems));
        editor.update(dragCtx.action, true);
        return true;
      }
      if (_classPrivateFieldGet(this, _lassoHelper).running()) {
        var sel = _classPrivateFieldGet(this, _lassoHelper).addPoint(event);
        editor.selection(!event.shiftKey ? sel : selMerge(sel, editor.selection(), false));
        return true;
      }
      var maps = _classPrivateFieldGet(this, _lassoHelper).fragment || event.ctrlKey ? ['frags', 'sgroups', 'functionalGroups', 'sgroupData', 'rgroups', 'rxnArrows', 'rxnPluses', 'enhancedFlags', 'simpleObjects', 'texts'] : ['atoms', 'bonds', 'sgroups', 'functionalGroups', 'sgroupData', 'rgroups', 'rxnArrows', 'rxnPluses', 'enhancedFlags', 'simpleObjects', 'texts'];
      editor.hover(editor.findItem(event, maps, null), null, event);
      return true;
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var editor = this.editor;
      var selected = editor.selection();
      var struct = editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var selectedSgroups = [];
      var newSelected = {
        atoms: [],
        bonds: []
      };
      var actualSgroupId;
      if (selected && functionalGroups.size && selected.atoms) {
        var _iterator3 = _createForOfIteratorHelper$6(selected.atoms),
            _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _struct$atoms$get;
            var atom = _step3.value;
            var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, atom);
            var atomFromStruct = atomId !== null && ((_struct$atoms$get = struct.atoms.get(atomId)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.a);
            if (atomFromStruct) {
              var _iterator4 = _createForOfIteratorHelper$6(atomFromStruct.sgs.values()),
                  _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var sgId = _step4.value;
                  actualSgroupId = sgId;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
            if (atomFromStruct && actualSgroupId !== undefined && !selectedSgroups.includes(actualSgroupId)) selectedSgroups.push(actualSgroupId);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (selected && functionalGroups.size && selected.bonds) {
        var _iterator5 = _createForOfIteratorHelper$6(selected.bonds),
            _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _atom = _step5.value;
            var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, _atom);
            var sGroupId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, bondId);
            if (sGroupId !== null && !selectedSgroups.includes(sGroupId)) selectedSgroups.push(sGroupId);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      if (selectedSgroups.length) {
        var _iterator6 = _createForOfIteratorHelper$6(selectedSgroups),
            _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _sgId2 = _step6.value;
            var sgroup = struct.sgroups.get(_sgId2);
            if (sgroup) {
              var _newSelected$atoms2, _newSelected$bonds2;
              var sgroupAtoms = SGroup.getAtoms(molecule, sgroup.item);
              var sgroupBonds = SGroup.getBonds(molecule, sgroup.item);
              (_newSelected$atoms2 = newSelected.atoms).push.apply(_newSelected$atoms2, _toConsumableArray(sgroupAtoms)) && (_newSelected$bonds2 = newSelected.bonds).push.apply(_newSelected$bonds2, _toConsumableArray(sgroupBonds));
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      var dragCtx = this.dragCtx;
      if (dragCtx && dragCtx.stopTapping) dragCtx.stopTapping();
      var possibleSaltOrSolvent = struct.sgroups.get(actualSgroupId);
      var isDraggingSaltOrSolventOnStructure = SGroup.isSaltOrSolvent(possibleSaltOrSolvent === null || possibleSaltOrSolvent === void 0 ? void 0 : possibleSaltOrSolvent.item.data.name);
      if ((isDraggingSaltOrSolventOnStructure || this.isDraggingStructureOnSaltOrSolvent(dragCtx, struct.sgroups)) && dragCtx) {
        preventSaltAndSolventsMerge(struct, dragCtx, editor);
        delete this.dragCtx;
        if (_classPrivateFieldGet(this, _lassoHelper).running()) {
          this.selectElementsOnCanvas(newSelected, editor, event);
        }
        return true;
      }
      if (dragCtx && dragCtx.item) {
        dragCtx.action = dragCtx.action ? fromItemsFuse(struct, dragCtx.mergeItems).mergeWith(dragCtx.action) : fromItemsFuse(struct, dragCtx.mergeItems);
        editor.hover(null);
        if (dragCtx.mergeItems) editor.selection(null);
        if (dragCtx.action.operations.length !== 0) editor.update(dragCtx.action);
        delete this.dragCtx;
      } else if (_classPrivateFieldGet(this, _lassoHelper).running()) {
        this.selectElementsOnCanvas(newSelected, editor, event);
      } else if (_classPrivateFieldGet(this, _lassoHelper).fragment) {
        if (!event.shiftKey) editor.selection(null);
      }
      editor.event.message.dispatch({
        info: false
      });
      return true;
    }
  }, {
    key: "dblclick",
    value: function dblclick(event) {
      var editor = this.editor;
      var struct = editor.render.ctab;
      var molecule = struct.molecule,
          sgroups = struct.sgroups;
      var functionalGroups = molecule.functionalGroups;
      var rnd = editor.render;
      var ci = editor.findItem(event, ['atoms', 'bonds', 'sgroups', 'functionalGroups', 'sgroupData', 'texts'], null);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups && ci.map === 'atoms') {
        var _struct$atoms$get2;
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        var atomFromStruct = atomId !== null && ((_struct$atoms$get2 = struct.atoms.get(atomId)) === null || _struct$atoms$get2 === void 0 ? void 0 : _struct$atoms$get2.a);
        if (atomId !== null && !FunctionalGroup.isAtomInContractedFunctionalGroup(
        atomFromStruct, sgroups, functionalGroups, true)) atomResult.push(atomId);
      }
      if (ci && functionalGroups && ci.map === 'bonds') {
        var _struct$bonds$get;
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        var bondFromStruct = bondId !== null && ((_struct$bonds$get = struct.bonds.get(bondId)) === null || _struct$bonds$get === void 0 ? void 0 : _struct$bonds$get.b);
        if (bondId !== null && !FunctionalGroup.isBondInContractedFunctionalGroup(
        bondFromStruct, sgroups, functionalGroups, true)) bondResult.push(bondId);
      }
      if (atomResult.length > 0) {
        var _iterator7 = _createForOfIteratorHelper$6(atomResult),
            _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var id = _step7.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator8 = _createForOfIteratorHelper$6(bondResult),
            _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _id = _step8.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) return true;
      var selection = this.editor.selection();
      if (ci.map === 'atoms') {
        var action = new Action();
        var atom = molecule.atoms.get(ci.id);
        var ra = editor.event.elementEdit.dispatch(atom);
        if (selection !== null && selection !== void 0 && selection.atoms) {
          var selectionAtoms = selection.atoms;
          Promise.resolve(ra).then(function (newatom) {
            selectionAtoms.forEach(function (aid) {
              action.mergeWith(fromAtomsAttrs(struct, aid, newatom, false));
            });
            editor.update(action);
          })["catch"](function () {
            return null;
          });
        }
      } else if (ci.map === 'bonds') {
        var _rnd$ctab$bonds$get;
        var bond = (_rnd$ctab$bonds$get = rnd.ctab.bonds.get(ci.id)) === null || _rnd$ctab$bonds$get === void 0 ? void 0 : _rnd$ctab$bonds$get.b;
        var rb = editor.event.bondEdit.dispatch(bond);
        if (selection !== null && selection !== void 0 && selection.bonds) {
          var _action = new Action();
          var bondsSelection = selection.bonds;
          Promise.resolve(rb).then(function (newbond) {
            bondsSelection.forEach(function (bid) {
              _action.mergeWith(fromBondsAttrs(struct, bid, newbond));
            });
            editor.update(_action);
          })["catch"](function () {
            return null;
          });
        }
      } else if (ci.map === 'sgroups' && !FunctionalGroup.isFunctionalGroup(molecule.sgroups.get(ci.id)) || ci.map === 'sgroupData') {
        editor.selection(closestToSel(ci));
        sgroupDialog(editor, ci.id, null);
      } else if (ci.map === 'texts') {
        editor.selection(closestToSel(ci));
        var text = molecule.texts.get(ci.id);
        var dialog = editor.event.elementEdit.dispatch(_objectSpread$F(_objectSpread$F({}, text), {}, {
          type: 'text'
        }));
        dialog.then(function (_ref) {
          var content = _ref.content;
          if (!content) {
            editor.update(fromTextDeletion(struct, ci.id));
          } else if (content !== (text === null || text === void 0 ? void 0 : text.content)) {
            editor.update(fromTextUpdating(struct, ci.id, content));
          }
        })["catch"](function () {
          return null;
        });
      }
      return true;
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(_) {
      if (this.dragCtx && this.dragCtx.stopTapping) this.dragCtx.stopTapping();
      if (this.dragCtx && this.dragCtx.action) {
        var action = this.dragCtx.action;
        this.editor.update(action);
      }
      if (_classPrivateFieldGet(this, _lassoHelper).running()) this.editor.selection(_classPrivateFieldGet(this, _lassoHelper).end());
      delete this.dragCtx;
      this.editor.hover(null);
    }
  }, {
    key: "selectElementsOnCanvas",
    value: function selectElementsOnCanvas(elements, editor, event) {
      var sel = elements.atoms.length > 0 ? selMerge(_classPrivateFieldGet(this, _lassoHelper).end(), elements, false) : _classPrivateFieldGet(this, _lassoHelper).end();
      editor.selection(!event.shiftKey ? sel : selMerge(sel, editor.selection(), false));
    }
  }, {
    key: "isDraggingStructureOnSaltOrSolvent",
    value: function isDraggingStructureOnSaltOrSolvent(dragCtx, sgroups) {
      var isDraggingOnSaltOrSolventAtom;
      var isDraggingOnSaltOrSolventBond;
      if (dragCtx !== null && dragCtx !== void 0 && dragCtx.mergeItems) {
        var mergeAtoms = Array.from(dragCtx.mergeItems.atoms.values());
        var mergeBonds = Array.from(dragCtx.mergeItems.bonds.values());
        var sgroupsOnCanvas = Array.from(sgroups.values()).map(function (_ref2) {
          var item = _ref2.item;
          return item;
        });
        isDraggingOnSaltOrSolventAtom = mergeAtoms.some(function (atomId) {
          return SGroup.isAtomInSaltOrSolvent(atomId, sgroupsOnCanvas);
        });
        isDraggingOnSaltOrSolventBond = mergeBonds.some(function (bondId) {
          return SGroup.isBondInSaltOrSolvent(bondId, sgroupsOnCanvas);
        });
      }
      return isDraggingOnSaltOrSolventAtom || isDraggingOnSaltOrSolventBond;
    }
  }]);
  return SelectTool;
}();
function closestToSel(ci) {
  var res = {};
  res[ci.map] = [ci.id];
  return res;
}
function selMerge(selection, add, reversible) {
  if (add) {
    Object.keys(add).forEach(function (item) {
      if (!selection[item]) selection[item] = add[item].slice();else selection[item] = uniqArray(selection[item], add[item], reversible);
    });
  }
  return selection;
}
function isSelected(selection, item) {
  return selection && selection[item.map] && selection[item.map].includes(item.id);
}
function uniqArray(dest, add, reversible) {
  return add.reduce(function (_, item) {
    if (reversible) dest = xor(dest, [item]);else if (!dest.includes(item)) dest.push(item);
    return dest;
  }, []);
}
function preventSaltAndSolventsMerge(struct, dragCtx, editor) {
  var action = dragCtx.action ? fromItemsFuse(struct, null).mergeWith(dragCtx.action) : fromItemsFuse(struct, null);
  editor.hover(null);
  if (dragCtx.mergeItems) {
    editor.selection(null);
  }
  editor.update(action);
  editor.event.message.dispatch({
    info: false
  });
}

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }
function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var EraserTool = function () {
  function EraserTool(editor, mode) {
    _classCallCheck(this, EraserTool);
    this.editor = editor;
    this.maps = ['atoms', 'bonds', 'rxnArrows', 'rxnPluses', 'sgroups', 'functionalGroups', 'sgroupData', 'simpleObjects', 'texts'];
    this.lassoHelper = new LassoHelper(mode || 0, editor, null);
    if (editor.selection()) {
      var action = fromFragmentDeletion(editor.render.ctab, editor.selection());
      editor.update(action);
      editor.selection(null);
      this.isNotActiveTool = true;
    }
  }
  _createClass(EraserTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var ci = this.editor.findItem(event, this.maps);
      if (!ci) {
        this.lassoHelper.begin(event);
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      if (this.lassoHelper.running()) {
        this.editor.selection(this.lassoHelper.addPoint(event));
      } else {
        this.editor.hover(this.editor.findItem(event, this.maps));
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var selected = this.editor.selection();
      var newSelected = {
        atoms: [],
        bonds: []
      };
      var actualSgroupId;
      var atomsResult = [];
      var bondsResult = [];
      var preResult = [];
      if (selected && functionalGroups.size && selected.atoms) {
        var _iterator = _createForOfIteratorHelper$5(selected.atoms),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _struct$atoms$get;
            var atom = _step.value;
            var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, atom);
            var atomFromStruct = atomId !== null && ((_struct$atoms$get = struct.atoms.get(atomId)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.a);
            if (atomFromStruct) {
              var _iterator2 = _createForOfIteratorHelper$5(atomFromStruct.sgs.values()),
                  _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var sgId = _step2.value;
                  actualSgroupId = sgId;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            if (atomFromStruct && FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, true)) {
              var _struct$sgroups$get, _struct$sgroups$get2, _newSelected$atoms, _newSelected$bonds;
              var sgroupAtoms = actualSgroupId !== undefined && SGroup.getAtoms(molecule, (_struct$sgroups$get = struct.sgroups.get(actualSgroupId)) === null || _struct$sgroups$get === void 0 ? void 0 : _struct$sgroups$get.item);
              var sgroupBonds = actualSgroupId !== undefined && SGroup.getBonds(molecule, (_struct$sgroups$get2 = struct.sgroups.get(actualSgroupId)) === null || _struct$sgroups$get2 === void 0 ? void 0 : _struct$sgroups$get2.item);
              atom === sgroupAtoms[0] && (_newSelected$atoms = newSelected.atoms).push.apply(_newSelected$atoms, _toConsumableArray(sgroupAtoms)) && (_newSelected$bonds = newSelected.bonds).push.apply(_newSelected$bonds, _toConsumableArray(sgroupBonds));
            }
            if (atomFromStruct && !FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, true)) {
              atomsResult.push(atomId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (selected && functionalGroups.size && selected.bonds) {
        var _iterator3 = _createForOfIteratorHelper$5(selected.bonds),
            _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _struct$bonds$get;
            var bond = _step3.value;
            var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, bond);
            var bondFromStruct = bondId !== null && ((_struct$bonds$get = struct.bonds.get(bondId)) === null || _struct$bonds$get === void 0 ? void 0 : _struct$bonds$get.b);
            if (bondFromStruct && !FunctionalGroup.isBondInContractedFunctionalGroup(bondFromStruct, sgroups, functionalGroups, true)) {
              bondsResult.push(bondId);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (atomsResult.length > 0) {
        var _iterator4 = _createForOfIteratorHelper$5(atomsResult),
            _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var id = _step4.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            fgId !== null && !preResult.includes(fgId) && preResult.push(fgId);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (bondsResult.length > 0) {
        var _iterator5 = _createForOfIteratorHelper$5(bondsResult),
            _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _id = _step5.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            _fgId !== null && !preResult.includes(_fgId) && preResult.push(_fgId);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      if (preResult.length > 0) {
        var result = [];
        preResult.forEach(function (fgId) {
          var _sgroups$get;
          var sgAtoms = (_sgroups$get = sgroups.get(fgId)) === null || _sgroups$get === void 0 ? void 0 : _sgroups$get.item.atoms;
          sgAtoms.forEach(function (atom) {
            !atomsResult.includes(atom) && !result.includes(fgId) && result.push(fgId);
          });
        });
        if (result.length > 0) {
          this.editor.selection(null);
          this.editor.event.removeFG.dispatch({
            fgIds: result
          });
          this.lassoHelper.cancel();
        }
      }
      var rnd = this.editor.render;
      if (this.lassoHelper.running()) {
        var sel = newSelected.atoms.length > 0 ? selMerge(this.lassoHelper.end(), newSelected, false) : this.lassoHelper.end();
        this.editor.update(fromFragmentDeletion(rnd.ctab, sel));
        this.editor.selection(null);
      }
    }
  }, {
    key: "click",
    value: function click(event) {
      var rnd = this.editor.render;
      var restruct = rnd.ctab;
      var struct = this.editor.render.ctab;
      var sgroups = struct.sgroups;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var ci = this.editor.findItem(event, this.maps);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ci && functionalGroups && ci.map === 'functionalGroups' && !FunctionalGroup.isContractedFunctionalGroup(ci.id, functionalGroups)) {
        var sGroup = sgroups.get(ci.id);
        if (FunctionalGroup.isFunctionalGroup(sGroup === null || sGroup === void 0 ? void 0 : sGroup.item)) {
          result.push(ci.id);
        }
      } else if (ci && functionalGroups && ci.map === 'atoms') {
        var _struct$atoms$get2;
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        var atomFromStruct = atomId !== null && ((_struct$atoms$get2 = struct.atoms.get(atomId)) === null || _struct$atoms$get2 === void 0 ? void 0 : _struct$atoms$get2.a);
        if (atomFromStruct && !FunctionalGroup.isAtomInContractedFunctionalGroup(atomFromStruct, sgroups, functionalGroups, true)) {
          atomResult.push(atomId);
        }
      } else if (ci && functionalGroups && ci.map === 'bonds') {
        var _struct$bonds$get2;
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ci.id);
        var bondFromStruct = bondId !== null && ((_struct$bonds$get2 = struct.bonds.get(bondId)) === null || _struct$bonds$get2 === void 0 ? void 0 : _struct$bonds$get2.b);
        if (bondFromStruct && !FunctionalGroup.isBondInContractedFunctionalGroup(bondFromStruct, sgroups, functionalGroups, true)) {
          bondResult.push(bondId);
        }
      }
      if (atomResult.length) {
        var _iterator6 = _createForOfIteratorHelper$5(atomResult),
            _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var id = _step6.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      } else if (bondResult.length) {
        var _iterator7 = _createForOfIteratorHelper$5(bondResult),
            _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _id2 = _step7.value;
            var _fgId2 = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id2);
            if (_fgId2 !== null && !result.includes(_fgId2)) {
              result.push(_fgId2);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      if (result.length) {
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) return;
      this.editor.hover(null);
      if (ci.map === 'atoms') {
        this.editor.update(fromOneAtomDeletion(restruct, ci.id));
      } else if (ci.map === 'bonds') {
        this.editor.update(fromOneBondDeletion(restruct, ci.id));
      } else if (ci.map === 'functionalGroups' && FunctionalGroup.isContractedFunctionalGroup(ci.id, functionalGroups)) {
        var _sGroup = sgroups.get(ci.id);
        this.editor.update(fromFragmentDeletion(rnd.ctab, {
          atoms: _toConsumableArray(SGroup.getAtoms(molecule, _sGroup === null || _sGroup === void 0 ? void 0 : _sGroup.item)),
          bonds: _toConsumableArray(SGroup.getBonds(molecule, _sGroup === null || _sGroup === void 0 ? void 0 : _sGroup.item))
        }));
      } else if (ci.map === 'sgroups' || ci.map === 'sgroupData') {
        var _sGroup2 = sgroups.get(ci.id);
        if (FunctionalGroup.isFunctionalGroup(_sGroup2 === null || _sGroup2 === void 0 ? void 0 : _sGroup2.item)) {
          this.editor.event.removeFG.dispatch({
            fgIds: [ci.id]
          });
        } else {
          this.editor.update(fromSgroupDeletion(restruct, ci.id));
        }
      } else if (ci.map === 'rxnArrows') {
        this.editor.update(fromArrowDeletion(restruct, ci.id));
      } else if (ci.map === 'rxnPluses') {
        this.editor.update(fromPlusDeletion(restruct, ci.id));
      } else if (ci.map === 'simpleObjects') {
        this.editor.update(fromSimpleObjectDeletion(restruct, ci.id));
      } else if (ci.map === 'texts') {
        this.editor.update(fromTextDeletion(restruct, ci.id));
      } else {
        return;
      }
      this.editor.selection(null);
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.mouseup();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.lassoHelper.running()) {
        this.lassoHelper.end();
      }
      this.editor.selection(null);
    }
  }]);
  return EraserTool;
}();

var HandTool = function () {
  function HandTool(editor) {
    _classCallCheck(this, HandTool);
    _defineProperty(this, "begPos", null);
    _defineProperty(this, "endPos", null);
    this.editor = editor;
    var _ref = this.editor.lastEvent || {
      clientX: 0,
      clientY: 0
    },
        clientX = _ref.clientX,
        clientY = _ref.clientY;
    this.editor.event.cursor.dispatch({
      status: 'enable',
      cursorPosition: {
        clientX: clientX,
        clientY: clientY
      }
    });
  }
  _createClass(HandTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var clientX = event.clientX,
          clientY = event.clientY;
      this.begPos = new Vec2(clientX, clientY);
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      this.editor.event.cursor.dispatch({
        status: 'move'
      });
      if (this.begPos == null) return;
      var clientX = event.clientX,
          clientY = event.clientY;
      this.endPos = new Vec2(clientX, clientY);
      var rnd = this.editor.render;
      var diff = Vec2.diff(this.endPos, this.begPos).scaled(1 / this.editor.zoom());
      this.begPos = this.endPos;
      rnd.ctab.translate(diff);
      rnd.options.offset = rnd.options.offset.add(diff);
      rnd.update(false);
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      if (this.begPos === null) return;
      var rnd = this.editor.render;
      this.endPos = rnd.page2obj(event);
      this.begPos = null;
      this.endPos = null;
      rnd.update(false);
    }
  }, {
    key: "mouseover",
    value: function mouseover() {
      this.editor.event.cursor.dispatch({
        status: 'mouseover'
      });
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.begPos = null;
      this.endPos = null;
      this.editor.event.cursor.dispatch({
        status: 'leave'
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.editor.event.cursor.dispatch({
        status: 'disable'
      });
    }
  }]);
  return HandTool;
}();

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }
function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var PasteTool = function () {
  function PasteTool(editor, struct) {
    _classCallCheck(this, PasteTool);
    this.editor = editor;
    this.editor.selection(null);
    this.struct = struct;
    var rnd = this.editor.render;
    var _rnd$clientArea = rnd.clientArea,
        clientHeight = _rnd$clientArea.clientHeight,
        clientWidth = _rnd$clientArea.clientWidth;
    var point = this.editor.lastEvent ? rnd.page2obj(this.editor.lastEvent) : rnd.page2obj({
      pageX: clientWidth / 2,
      pageY: clientHeight / 2
    });
    var _fromPaste = fromPaste(rnd.ctab, this.struct, point),
        _fromPaste2 = _slicedToArray(_fromPaste, 2),
        action = _fromPaste2[0],
        pasteItems = _fromPaste2[1];
    this.action = action;
    this.editor.update(this.action, true);
    this.mergeItems = getItemsToFuse(this.editor, pasteItems);
    this.editor.hover(getHoverToFuse(this.mergeItems), this);
  }
  _createClass(PasteTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var rnd = this.editor.render;
      if (this.action) {
        this.action.perform(rnd.ctab);
      }
      var _fromPaste3 = fromPaste(rnd.ctab, this.struct, rnd.page2obj(event)),
          _fromPaste4 = _slicedToArray(_fromPaste3, 2),
          action = _fromPaste4[0],
          pasteItems = _fromPaste4[1];
      this.action = action;
      this.editor.update(this.action, true);
      this.mergeItems = getItemsToFuse(this.editor, pasteItems);
      this.editor.hover(getHoverToFuse(this.mergeItems));
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var atomsResult = [];
      var bondsResult = [];
      var result = [];
      if (this.mergeItems && functionalGroups.size && this.mergeItems.atoms.size) {
        var _iterator = _createForOfIteratorHelper$4(this.mergeItems.atoms.values()),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, id);
            if (atomId !== null) {
              atomsResult.push(atomId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (this.mergeItems && functionalGroups.size && this.mergeItems.bonds.size) {
        var _iterator2 = _createForOfIteratorHelper$4(this.mergeItems.bonds.values()),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var bondId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, _id);
            if (bondId !== null) {
              bondsResult.push(bondId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (atomsResult.length > 0) {
        var _iterator3 = _createForOfIteratorHelper$4(atomsResult),
            _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _id2 = _step3.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, _id2);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondsResult.length > 0) {
        var _iterator4 = _createForOfIteratorHelper$4(bondsResult),
            _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _id3 = _step4.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id3);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      var editor = this.editor;
      var restruct = editor.render.ctab;
      editor.selection(null);
      this.action = this.action ? fromItemsFuse(restruct, this.mergeItems).mergeWith(this.action) : fromItemsFuse(restruct, this.mergeItems);
      editor.hover(null);
      if (this.action) {
        var action = this.action;
        delete this.action;
        this.editor.update(action);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var rnd = this.editor.render;
      this.editor.hover(null);
      if (this.action) {
        this.action.perform(rnd.ctab);
        delete this.action;
        rnd.update();
      }
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.cancel();
    }
  }]);
  return PasteTool;
}();

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var RGroupAtomTool = function () {
  function RGroupAtomTool(editor) {
    _classCallCheck(this, RGroupAtomTool);
    editor.selection(null);
    this.editor = editor;
  }
  _createClass(RGroupAtomTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var struct = this.editor.render.ctab.molecule;
      var ci = this.editor.findItem(event, ['atoms']);
      if (ci) {
        var atom = struct.atoms.get(ci.id);
        if ((atom === null || atom === void 0 ? void 0 : atom.attpnt) === null) this.editor.hover(ci);
      } else {
        this.editor.hover(null);
      }
    }
  }, {
    key: "click",
    value: function click(event) {
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['atoms']);
      var atomResult = [];
      var result = [];
      if (ci && functionalGroups && ci.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ci.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$3(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) {
        this.editor.hover(null);
        propsDialog$1(this.editor, null, rnd.page2obj(event));
        return true;
      } else if (ci.map === 'atoms') {
        this.editor.hover(null);
        var _struct = this.editor.render.ctab.molecule;
        var atom = _struct.atoms.get(ci.id);
        if ((atom === null || atom === void 0 ? void 0 : atom.attpnt) !== null) return;
        propsDialog$1(this.editor, ci.id, null);
        return true;
      }
      return true;
    }
  }]);
  return RGroupAtomTool;
}();
function propsDialog$1(editor, id, pos) {
  var struct = editor.render.ctab.molecule;
  var atom = id || id === 0 ? struct.atoms.get(id) : null;
  var rglabel = atom ? atom.rglabel : 0;
  var label = atom ? atom.label : 'R#';
  var res = editor.event.elementEdit.dispatch({
    label: 'R#',
    rglabel: rglabel,
    fragId: atom ? atom.fragment : null
  });
  Promise.resolve(res).then(function (elem) {
    elem = Object.assign({}, Atom$2.attrlist, elem);
    if (!id && id !== 0 && elem.rglabel) {
      editor.update(fromAtomAddition(editor.render.ctab, pos, elem));
    } else if (rglabel !== elem.rglabel) {
      elem.aam = atom.aam;
      elem.attpnt = atom.attpnt;
      if (!elem.rglabel && label !== 'R#') {
        elem.label = label;
      }
      editor.update(fromAtomsAttrs(editor.render.ctab, id, elem, false));
    }
  })["catch"](function () {
    return null;
  });
}

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var RGroupFragmentTool = function () {
  function RGroupFragmentTool(editor) {
    _classCallCheck(this, RGroupFragmentTool);
    editor.selection(null);
    this.editor = editor;
  }
  _createClass(RGroupFragmentTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      this.editor.hover(this.editor.findItem(event, ['frags', 'rgroups']));
    }
  }, {
    key: "click",
    value: function click(event) {
      var struct = this.editor.render.ctab;
      var molecule = struct.molecule;
      var functionalGroups = molecule.functionalGroups;
      var editor = this.editor;
      var ci = editor.findItem(event, ['frags', 'rgroups']);
      var ce = editor.findItem(event, ['atoms', 'bonds']);
      var atomResult = [];
      var bondResult = [];
      var result = [];
      if (ce && functionalGroups && ce.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, ce.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (ce && functionalGroups && ce.map === 'bonds') {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, ce.id);
        if (bondId !== null) {
          bondResult.push(bondId);
        }
      }
      if (atomResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$2(atomResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      } else if (bondResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$2(bondResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, functionalGroups, _id);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      if (!ci) {
        return true;
      }
      this.editor.hover(null);
      var label = ci.map === 'rgroups' ? ci.id : RGroup$2.findRGroupByFragment(molecule.rgroups, ci.id);
      var rg = Object.assign({
        label: label
      }, ci.map === 'frags' ? {
        fragId: ci.id
      } : molecule.rgroups.get(ci.id));
      var res = editor.event.rgroupEdit.dispatch(rg);
      Promise.resolve(res).then(function (newRg) {
        var action;
        if (ci.map !== 'rgroups') {
          var rgidOld = RGroup$2.findRGroupByFragment(struct.molecule.rgroups, ci.id);
          action = fromRGroupFragment(struct, newRg.label, ci.id).mergeWith(fromUpdateIfThen(struct, newRg.label, rgidOld));
        } else {
          action = fromRGroupAttrs(struct, ci.id, newRg);
        }
        editor.update(action);
      })["catch"](function () {
        return null;
      });
      return true;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.editor.hover(null);
    }
  }]);
  return RGroupFragmentTool;
}();

var ReactionArrowTool = function () {
  function ReactionArrowTool(editor, mode) {
    _classCallCheck(this, ReactionArrowTool);
    this.mode = mode;
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(ReactionArrowTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var rnd = this.editor.render;
      var p0 = rnd.page2obj(event);
      this.dragCtx = {
        p0: p0
      };
      var ci = this.editor.findItem(event, ['rxnArrows']);
      if (ci && ci.map === 'rxnArrows') {
        this.editor.hover(null);
        this.editor.selection({
          rxnArrows: [ci.id]
        });
        this.dragCtx.ci = ci;
      } else {
        this.dragCtx.isNew = true;
        this.editor.selection(null);
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var rnd = this.editor.render;
      if (this.dragCtx) {
        var current = rnd.page2obj(event);
        var diff = current.sub(this.dragCtx.p0);
        this.dragCtx.previous = current;
        if (this.dragCtx.ci) {
          if (this.dragCtx.action) {
            this.dragCtx.action.perform(rnd.ctab);
          }
          if (!this.dragCtx.ci.ref) {
            this.dragCtx.action = fromMultipleMove(rnd.ctab, this.editor.selection() || {}, diff);
          } else {
            this.dragCtx.action = fromArrowResizing(rnd.ctab, this.dragCtx.ci.id, diff, current, this.dragCtx.ci.ref);
          }
          this.editor.update(this.dragCtx.action, true);
        } else {
          if (!this.dragCtx.action) {
            var action = fromArrowAddition(rnd.ctab, [this.dragCtx.p0, this.dragCtx.p0], this.mode);
            var addOperation = action.operations[0];
            this.dragCtx.itemId = addOperation.data.id;
            this.dragCtx.action = action;
            this.editor.update(this.dragCtx.action, true);
          } else {
            this.dragCtx.action.perform(rnd.ctab);
          }
          this.dragCtx.action = fromArrowResizing(rnd.ctab, this.dragCtx.itemId, diff, current, null);
          this.editor.update(this.dragCtx.action, true);
        }
      } else {
        var items = this.editor.findItem(event, ['rxnArrows']);
        this.editor.hover(items, null, event);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      if (!this.dragCtx) {
        return true;
      }
      var rnd = this.editor.render;
      var p0 = this.dragCtx.p0;
      var p1 = getDefaultLengthPos(p0, this.dragCtx.previous);
      if (this.dragCtx.action) {
        if (this.dragCtx.isNew) {
          this.editor.update(fromArrowDeletion(rnd.ctab, this.dragCtx.itemId), true);
          this.dragCtx.action = fromArrowAddition(rnd.ctab, [p0, p1], this.mode);
        }
        this.editor.update(this.dragCtx.action);
      }
      delete this.dragCtx;
      return true;
    }
  }, {
    key: "click",
    value: function click(event) {
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['rxnArrows']);
      var p0 = rnd.page2obj(event);
      if (!ci) {
        var pos = [p0, getDefaultLengthPos(p0, null)];
        this.editor.update(fromArrowAddition(rnd.ctab, pos, this.mode));
      }
    }
  }]);
  return ReactionArrowTool;
}();
function getArrowParams(x1, y1, x2, y2) {
  var length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  var angle = calcAngle(x2, y2, x1, y1);
  return {
    length: length,
    angle: angle
  };
}
function getDefaultLengthPos(pos1, pos2) {
  var minLength = 1.5;
  var defaultLength = 2;
  if (!pos2) {
    return new Vec2(pos1.x + defaultLength, pos1.y);
  }
  var arrowParams = getArrowParams(pos1.x, pos1.y, pos2.x, pos2.y);
  if (arrowParams.length <= minLength) {
    var newPos = new Vec2();
    newPos.x = pos1.x + defaultLength * Math.cos(Math.PI * arrowParams.angle / 180);
    newPos.y = pos1.y + defaultLength * Math.sin(Math.PI * arrowParams.angle / 180);
    return newPos;
  }
  return pos2;
}
function calcAngle(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  if (!x && !y) {
    return 0;
  }
  return (180 + Math.atan2(-y, -x) * 180 / Math.PI + 360) % 360;
}

var ReactionMapTool = function () {
  function ReactionMapTool(editor) {
    _classCallCheck(this, ReactionMapTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(ReactionMapTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var rnd = this.editor.render;
      this.rcs = rnd.ctab.molecule.getComponents();
      var ci = this.editor.findItem(event, ['atoms']);
      if (ci && ci.map === 'atoms') {
        this.editor.hover(null);
        this.dragCtx = {
          item: ci,
          xy0: rnd.page2obj(event)
        };
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var editor = this.editor;
      var rnd = editor.render;
      if ('dragCtx' in this) {
        var ci = this.editor.findItem(event, ['atoms'], this.dragCtx.item);
        var atoms = rnd.ctab.molecule.atoms;
        if (ci && ci.map === 'atoms' && isValidMap(this.rcs, this.dragCtx.item.id, ci.id)) {
          var _atoms$get, _atoms$get2;
          editor.hover(ci);
          this.updateLine((_atoms$get = atoms.get(this.dragCtx.item.id)) === null || _atoms$get === void 0 ? void 0 : _atoms$get.pp, (_atoms$get2 = atoms.get(ci.id)) === null || _atoms$get2 === void 0 ? void 0 : _atoms$get2.pp);
        } else {
          var _atoms$get3;
          editor.hover(null);
          this.updateLine((_atoms$get3 = atoms.get(this.dragCtx.item.id)) === null || _atoms$get3 === void 0 ? void 0 : _atoms$get3.pp, rnd.page2obj(event));
        }
      } else {
        editor.hover(editor.findItem(event, ['atoms']));
      }
    }
  }, {
    key: "updateLine",
    value: function updateLine(p1, p2) {
      if (this.line) {
        this.line.remove();
        this.line = null;
      }
      if (p1 && p2) {
        var rnd = this.editor.render;
        this.line = rnd.selectionLine(Scale.obj2scaled(p1, rnd.options).add(rnd.options.offset), Scale.obj2scaled(p2, rnd.options).add(rnd.options.offset));
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var _this = this;
      if ('dragCtx' in this) {
        var rnd = this.editor.render;
        var ci = this.editor.findItem(event, ['atoms'], this.dragCtx.item);
        if (ci && ci.map === 'atoms' && isValidMap(this.rcs, this.dragCtx.item.id, ci.id)) {
          var action = new Action();
          var atoms = rnd.ctab.molecule.atoms;
          var atom1 = atoms.get(this.dragCtx.item.id);
          var atom2 = atoms.get(ci.id);
          var aam1 = atom1 === null || atom1 === void 0 ? void 0 : atom1.aam;
          var aam2 = atom2 === null || atom2 === void 0 ? void 0 : atom2.aam;
          if (!aam1 || aam1 !== aam2) {
            if (aam1 && aam1 !== aam2 || !aam1 && aam2) {
              atoms.forEach(function (atom, aid) {
                if (aid !== _this.dragCtx.item.id && (aam1 && atom.aam === aam1 || aam2 && atom.aam === aam2)) action.mergeWith(fromAtomsAttrs(rnd.ctab, aid, {
                  aam: 0
                }, null));
              });
            }
            if (aam1) {
              action.mergeWith(fromAtomsAttrs(rnd.ctab, ci.id, {
                aam: aam1
              }, null));
            } else {
              var aam = 0;
              atoms.forEach(function (atom) {
                aam = Math.max(aam, atom.aam || 0);
              });
              action.mergeWith(fromAtomsAttrs(rnd.ctab, this.dragCtx.item.id, {
                aam: aam + 1
              }, null));
              action.mergeWith(fromAtomsAttrs(rnd.ctab, ci.id, {
                aam: aam + 1
              }, null));
            }
            this.editor.update(action);
          }
        }
        this.updateLine(null, null);
        delete this.dragCtx;
      }
      this.editor.hover(null);
    }
  }]);
  return ReactionMapTool;
}();
function isValidMap(rcs, aid1, aid2) {
  var t1;
  var t2;
  for (var ri = 0; (!t1 || !t2) && ri < rcs.reactants.length; ri++) {
    var ro = Array.from(rcs.reactants[ri]);
    if (!t1 && ro.indexOf(aid1) >= 0) {
      t1 = 'r';
    }
    if (!t2 && ro.indexOf(aid2) >= 0) {
      t2 = 'r';
    }
  }
  for (var pi = 0; (!t1 || !t2) && pi < rcs.products.length; pi++) {
    var po = Array.from(rcs.products[pi]);
    if (!t1 && po.indexOf(aid1) >= 0) {
      t1 = 'p';
    }
    if (!t2 && po.indexOf(aid2) >= 0) {
      t2 = 'p';
    }
  }
  return t1 && t2 && t1 !== t2;
}

var ReactionPlusTool = function () {
  function ReactionPlusTool(editor) {
    _classCallCheck(this, ReactionPlusTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(ReactionPlusTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['rxnPluses']);
      if (ci && ci.map === 'rxnPluses') {
        this.editor.hover(null);
        this.editor.selection({
          rxnPluses: [ci.id]
        });
        this.dragCtx = {
          xy0: rnd.page2obj(event)
        };
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var editor = this.editor;
      var rnd = editor.render;
      if ('dragCtx' in this) {
        if (this.dragCtx.action) {
          this.dragCtx.action.perform(rnd.ctab);
        }
        this.dragCtx.action = fromMultipleMove(rnd.ctab, this.editor.selection() || {}, rnd.page2obj(event).sub(this.dragCtx.xy0));
        editor.update(this.dragCtx.action, true);
      } else {
        editor.hover(editor.findItem(event, ['rxnPluses']));
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      if (!this.dragCtx) {
        return true;
      }
      if (this.dragCtx.action) {
        this.editor.update(this.dragCtx.action);
      }
      delete this.dragCtx;
      return true;
    }
  }, {
    key: "click",
    value: function click(event) {
      var rnd = this.editor.render;
      var ci = this.editor.findItem(event, ['rxnPluses']);
      if (!ci) {
        this.editor.update(fromPlusAddition(rnd.ctab, rnd.page2obj(event)));
      }
    }
  }]);
  return ReactionPlusTool;
}();

var ReactionUnmapTool = function () {
  function ReactionUnmapTool(editor) {
    _classCallCheck(this, ReactionUnmapTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(ReactionUnmapTool, [{
    key: "mousemove",
    value: function mousemove(event) {
      var ci = this.editor.findItem(event, ['atoms']);
      if (ci && ci.map === 'atoms') {
        var _this$editor$render$c;
        this.editor.hover((_this$editor$render$c = this.editor.render.ctab.molecule.atoms.get(ci.id)) !== null && _this$editor$render$c !== void 0 && _this$editor$render$c.aam ? ci : null);
      } else {
        this.editor.hover(null);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var _atoms$get,
          _this = this;
      var ci = this.editor.findItem(event, ['atoms']);
      var atoms = this.editor.render.ctab.molecule.atoms;
      if (ci && ci.map === 'atoms' && (_atoms$get = atoms.get(ci.id)) !== null && _atoms$get !== void 0 && _atoms$get.aam) {
        var _atoms$get2;
        var action = new Action();
        var aam = (_atoms$get2 = atoms.get(ci.id)) === null || _atoms$get2 === void 0 ? void 0 : _atoms$get2.aam;
        atoms.forEach(function (atom, aid) {
          if (atom.aam === aam) {
            action.mergeWith(fromAtomsAttrs(_this.editor.render.ctab, aid, {
              aam: 0
            }, null));
          }
        });
        this.editor.update(action);
      }
      this.editor.hover(null);
    }
  }]);
  return ReactionUnmapTool;
}();

var RotateTool = function () {
  function RotateTool(editor, dir) {
    var _editor$selection;
    _classCallCheck(this, RotateTool);
    this.editor = editor;
    if (dir) {
      var restruct = editor.render.ctab;
      var selection = editor.selection();
      var singleBond = selection && selection.bonds && Object.keys(selection).length === 1 && selection.bonds.length === 1;
      var action = !singleBond ? fromFlip(restruct, selection, dir, null) : fromBondAlign(restruct, selection.bonds[0], dir);
      editor.update(action);
      this.isNotActiveTool = true;
      return;
    }
    if (!editor.selection() || !((_editor$selection = editor.selection()) !== null && _editor$selection !== void 0 && _editor$selection.atoms)) {
      this.editor.selection(null);
    }
  }
  _createClass(RotateTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var _struct$atoms;
      var xy0 = new Vec2();
      var selection = this.editor.selection();
      var rnd = this.editor.render;
      var struct = rnd.ctab.molecule;
      if (selection && selection.atoms) {
        var rotId = null;
        var rotAll = false;
        selection.atoms.forEach(function (aid) {
          var atom = struct.atoms.get(aid);
          xy0.add_(atom === null || atom === void 0 ? void 0 : atom.pp);
          if (rotAll) return;
          atom === null || atom === void 0 ? void 0 : atom.neighbors.find(function (nei) {
            var hb = struct.halfBonds.get(nei);
            if (hb) {
              var _selection$atoms;
              if (((_selection$atoms = selection.atoms) === null || _selection$atoms === void 0 ? void 0 : _selection$atoms.indexOf(hb.end)) === -1) {
                if (hb.loop >= 0) {
                  var neiAtom = struct.atoms.get(aid);
                  if (!(neiAtom !== null && neiAtom !== void 0 && neiAtom.neighbors.find(function (neiNei) {
                    var _selection$atoms2;
                    var neiHb = struct.halfBonds.get(neiNei);
                    return (neiHb === null || neiHb === void 0 ? void 0 : neiHb.loop) >= 0 && ((_selection$atoms2 = selection.atoms) === null || _selection$atoms2 === void 0 ? void 0 : _selection$atoms2.indexOf(neiHb === null || neiHb === void 0 ? void 0 : neiHb.end)) !== -1;
                  }))) {
                    rotAll = true;
                    return true;
                  }
                }
                if (rotId == null) {
                  rotId = aid;
                } else if (rotId !== aid) {
                  rotAll = true;
                  return true;
                }
              }
            }
            return false;
          });
        });
        if (!rotAll && rotId !== null) {
          var _struct$atoms$get;
          xy0 = (_struct$atoms$get = struct.atoms.get(rotId)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.pp;
        } else {
          xy0 = xy0.scaled(1 / selection.atoms.length);
        }
      } else if ((_struct$atoms = struct.atoms) !== null && _struct$atoms !== void 0 && _struct$atoms.size) {
        struct.atoms.forEach(function (atom) {
          xy0.add_(atom.pp);
        });
        xy0 = xy0.scaled(1 / struct.atoms.size);
      } else {
        xy0 = rnd.page2obj(event);
      }
      this.dragCtx = {
        xy0: xy0,
        angle1: utils.calcAngle(xy0, rnd.page2obj(event))
      };
      return true;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      if (!this.dragCtx) {
        return true;
      }
      var rnd = this.editor.render;
      var dragCtx = this.dragCtx;
      var pos = rnd.page2obj(event);
      var angle = utils.calcAngle(dragCtx.xy0, pos) - dragCtx.angle1;
      if (!event.ctrlKey) {
        angle = utils.fracAngle(angle, null);
      }
      var degrees = utils.degrees(angle);
      if ('angle' in dragCtx && dragCtx.angle === degrees) {
        return true;
      }
      if ('action' in dragCtx) {
        dragCtx.action.perform(rnd.ctab);
      }
      dragCtx.angle = degrees;
      dragCtx.action = fromRotate(rnd.ctab, this.editor.selection(), dragCtx.xy0, angle);
      this.editor.event.message.dispatch({
        info: degrees + '??'
      });
      var expSel = this.editor.explicitSelected();
      dragCtx.mergeItems = getItemsToFuse(this.editor, expSel);
      this.editor.hover(getHoverToFuse(dragCtx.mergeItems));
      this.editor.update(dragCtx.action, true);
      return true;
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      if (!this.dragCtx) {
        return true;
      }
      var dragCtx = this.dragCtx;
      var restruct = this.editor.render.ctab;
      var action = dragCtx.action ? fromItemsFuse(restruct, dragCtx.mergeItems).mergeWith(dragCtx.action) : fromItemsFuse(restruct, dragCtx.mergeItems);
      delete this.dragCtx;
      this.editor.update(action);
      this.editor.hover(null);
      if (dragCtx.mergeItems) {
        this.editor.selection(null);
      }
      this.editor.event.message.dispatch({
        info: false
      });
      return true;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.mouseup();
    }
  }, {
    key: "mouseleave",
    value: function mouseleave() {
      this.mouseup();
    }
  }]);
  return RotateTool;
}();

var SimpleObjectTool = function () {
  function SimpleObjectTool(editor, mode) {
    _classCallCheck(this, SimpleObjectTool);
    this.mode = mode;
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(SimpleObjectTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var rnd = this.editor.render;
      var p0 = rnd.page2obj(event);
      this.dragCtx = {
        p0: p0
      };
      var ci = this.editor.findItem(event, ['simpleObjects']);
      if (ci && ci.map === 'simpleObjects') {
        this.editor.hover(null);
        this.editor.selection({
          simpleObjects: [ci.id]
        });
        this.dragCtx.ci = ci;
      } else {
        this.dragCtx.isNew = true;
        this.editor.selection(null);
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var rnd = this.editor.render;
      if (this.dragCtx) {
        var current = rnd.page2obj(event);
        var diff = current.sub(this.dragCtx.p0);
        this.dragCtx.previous = current;
        if (this.dragCtx.ci) {
          if (this.dragCtx.action) {
            this.dragCtx.action.perform(rnd.ctab);
          }
          if (!this.dragCtx.ci.ref) {
            this.dragCtx.action = fromMultipleMove(rnd.ctab, this.editor.selection() || {}, diff);
          } else {
            this.dragCtx.action = fromSimpleObjectResizing(rnd.ctab, this.dragCtx.ci.id, diff, current, this.dragCtx.ci.ref, event.shiftKey);
          }
          this.editor.update(this.dragCtx.action, true);
        } else {
          if (!this.dragCtx.action) {
            var action = fromSimpleObjectAddition(rnd.ctab, [this.dragCtx.p0, this.dragCtx.p0], this.mode, false);
            var addOperation = action.operations[0];
            this.dragCtx.itemId = addOperation.data.id;
            this.dragCtx.action = action;
            this.editor.update(this.dragCtx.action, true);
          } else {
            this.dragCtx.action.perform(rnd.ctab);
          }
          this.dragCtx.action = fromSimpleObjectResizing(rnd.ctab, this.dragCtx.itemId, diff, current, null, event.shiftKey);
          this.editor.update(this.dragCtx.action, true);
        }
      } else {
        var items = this.editor.findItem(event, ['simpleObjects']);
        this.editor.hover(items);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      if (!this.dragCtx) {
        return true;
      }
      if (this.dragCtx.action) {
        if (this.dragCtx.isNew) {
          var rnd = this.editor.render;
          this.editor.update(fromSimpleObjectDeletion(rnd.ctab, this.dragCtx.itemId), true);
          this.dragCtx.action = fromSimpleObjectAddition(rnd.ctab, [this.dragCtx.p0, this.dragCtx.previous], this.mode, event.shiftKey);
        }
        this.editor.update(this.dragCtx.action);
      }
      delete this.dragCtx;
      return true;
    }
  }]);
  return SimpleObjectTool;
}();

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var TemplateTool = function () {
  function TemplateTool(editor, tmpl) {
    _classCallCheck(this, TemplateTool);
    this.editor = editor;
    this.mode = tmpl.mode;
    this.editor.selection(null);
    this.template = {
      aid: parseInt(tmpl.aid) || 0,
      bid: parseInt(tmpl.bid) || 0
    };
    var frag = tmpl.struct;
    frag.rescale();
    var xy0 = new Vec2();
    frag.atoms.forEach(function (atom) {
      xy0.add_(atom.pp);
    });
    this.template.molecule = frag;
    this.findItems = [];
    this.template.xy0 = xy0.scaled(1 / (frag.atoms.size || 1));
    var atom = frag.atoms.get(this.template.aid);
    if (atom) {
      this.template.angle0 = utils.calcAngle(atom.pp, this.template.xy0);
      this.findItems.push('atoms');
    }
    var bond = frag.bonds.get(this.template.bid);
    if (bond && this.mode !== 'fg') {
      this.template.sign = getSign(frag, bond, this.template.xy0);
      this.findItems.push('bonds');
    }
    var sgroup = frag.sgroups.size;
    if (sgroup) {
      this.findItems.push('sgroups');
    }
  }
  _createClass(TemplateTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var closestItem = this.editor.findItem(event, ['atoms', 'bonds', 'sgroups', 'functionalGroups']);
      var struct = this.editor.struct();
      var atomResult = [];
      var bondResult = [];
      var sGroupResult = [];
      var result = [];
      var ctab = this.editor.render.ctab;
      var molecule = ctab.molecule;
      var functionalGroups = molecule.functionalGroups;
      if (closestItem && functionalGroups.size && closestItem.map === 'functionalGroups' && FunctionalGroup.isContractedFunctionalGroup(closestItem.id, functionalGroups)) {
        sGroupResult.push(closestItem.id);
      }
      if (closestItem && functionalGroups.size && closestItem.map === 'atoms') {
        var atomId = FunctionalGroup.atomsInFunctionalGroup(functionalGroups, closestItem.id);
        if (atomId !== null) {
          atomResult.push(atomId);
        }
      }
      if (closestItem && functionalGroups.size && closestItem.map === 'bonds') {
        var bondId = FunctionalGroup.bondsInFunctionalGroup(molecule, functionalGroups, closestItem.id);
        if (bondId !== null) {
          bondResult.push(bondId);
        }
      }
      if (sGroupResult.length > 0) {
        var _iterator = _createForOfIteratorHelper$1(sGroupResult),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var id = _step.value;
            if (!result.includes(id)) result.push(id);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if (atomResult.length > 0) {
        var _iterator2 = _createForOfIteratorHelper$1(atomResult),
            _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _id = _step2.value;
            var fgId = FunctionalGroup.findFunctionalGroupByAtom(functionalGroups, _id);
            if (fgId !== null && !result.includes(fgId)) {
              result.push(fgId);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (bondResult.length > 0) {
        var _iterator3 = _createForOfIteratorHelper$1(bondResult),
            _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _id2 = _step3.value;
            var _fgId = FunctionalGroup.findFunctionalGroupByBond(molecule, struct.functionalGroups, _id2);
            if (_fgId !== null && !result.includes(_fgId)) {
              result.push(_fgId);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      if (result.length) {
        this.editor.event.removeFG.dispatch({
          fgIds: result
        });
        return;
      }
      var editor = this.editor;
      this.editor.hover(null);
      this.dragCtx = {
        xy0: editor.render.page2obj(event),
        item: editor.findItem(event, this.findItems)
      };
      var dragCtx = this.dragCtx;
      var ci = dragCtx.item;
      if (!ci) {
        delete dragCtx.item;
        return true;
      }
      if (ci.map === 'bonds' && this.mode !== 'fg') {
        var _molecule$atoms$get, _molecule$halfBonds$g;
        var _molecule = ctab.molecule;
        var xy0 = new Vec2();
        var bond = _molecule.bonds.get(ci.id);
        var frid = (_molecule$atoms$get = _molecule.atoms.get(bond === null || bond === void 0 ? void 0 : bond.begin)) === null || _molecule$atoms$get === void 0 ? void 0 : _molecule$atoms$get.fragment;
        var frIds = _molecule.getFragmentIds(frid);
        var count = 0;
        var loop = (_molecule$halfBonds$g = _molecule.halfBonds.get(bond === null || bond === void 0 ? void 0 : bond.hb1)) === null || _molecule$halfBonds$g === void 0 ? void 0 : _molecule$halfBonds$g.loop;
        if (loop && loop < 0) {
          var _molecule$halfBonds$g2;
          loop = (_molecule$halfBonds$g2 = _molecule.halfBonds.get(bond === null || bond === void 0 ? void 0 : bond.hb2)) === null || _molecule$halfBonds$g2 === void 0 ? void 0 : _molecule$halfBonds$g2.loop;
        }
        if (loop && loop >= 0) {
          var _molecule$loops$get;
          var loopHbs = (_molecule$loops$get = _molecule.loops.get(loop)) === null || _molecule$loops$get === void 0 ? void 0 : _molecule$loops$get.hbs;
          loopHbs === null || loopHbs === void 0 ? void 0 : loopHbs.forEach(function (hb) {
            var _molecule$halfBonds$g3;
            var halfBondBegin = (_molecule$halfBonds$g3 = _molecule.halfBonds.get(hb)) === null || _molecule$halfBonds$g3 === void 0 ? void 0 : _molecule$halfBonds$g3.begin;
            if (halfBondBegin) {
              var hbbAtom = _molecule.atoms.get(halfBondBegin);
              if (hbbAtom) {
                xy0.add_(hbbAtom.pp);
                count++;
              }
            }
          });
        } else {
          frIds.forEach(function (id) {
            var atomById = _molecule.atoms.get(id);
            if (atomById) {
              xy0.add_(atomById.pp);
              count++;
            }
          });
        }
        dragCtx.v0 = xy0.scaled(1 / count);
        var sign = getSign(_molecule, bond, dragCtx.v0);
        dragCtx.sign1 = sign || 1;
        dragCtx.sign2 = this.template.sign;
      }
      return true;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var restruct = this.editor.render.ctab;
      if (!this.dragCtx) {
        this.editor.hover(this.editor.findItem(event, this.findItems), null, event);
        return true;
      }
      var dragCtx = this.dragCtx;
      var ci = dragCtx.item;
      var pos0 = null;
      var pos1 = this.editor.render.page2obj(event);
      var struct = restruct.molecule;
      if (ci && ci.map === 'bonds' && this.mode !== 'fg') {
        var bond = struct.bonds.get(ci.id);
        var sign = getSign(struct, bond, pos1);
        if (dragCtx.sign1 * this.template.sign > 0) {
          sign = -sign;
        }
        if (sign !== dragCtx.sign2 || !dragCtx.action) {
          if (dragCtx.action) {
            dragCtx.action.perform(restruct);
          }
          dragCtx.sign2 = sign;
          var _fromTemplateOnBondAc = fromTemplateOnBondAction(restruct, this.template, ci.id, this.editor.event, dragCtx.sign1 * dragCtx.sign2 > 0, false),
              _fromTemplateOnBondAc2 = _slicedToArray(_fromTemplateOnBondAc, 2),
              _action = _fromTemplateOnBondAc2[0],
              _pasteItems = _fromTemplateOnBondAc2[1];
          dragCtx.action = _action;
          this.editor.update(dragCtx.action, true);
          dragCtx.mergeItems = getItemsToFuse(this.editor, _pasteItems);
          this.editor.hover(getHoverToFuse(dragCtx.mergeItems));
        }
        return true;
      }
      var extraBond = null;
      if (!ci) {
        pos0 = dragCtx.xy0;
      } else if (ci.map === 'atoms') {
        var _struct$atoms$get;
        pos0 = (_struct$atoms$get = struct.atoms.get(ci.id)) === null || _struct$atoms$get === void 0 ? void 0 : _struct$atoms$get.pp;
        if (pos0) {
          extraBond = this.mode === 'fg' ? true : Vec2.dist(pos0, pos1) > 1;
        }
      }
      var angle = utils.calcAngle(pos0, pos1);
      if (!event.ctrlKey) {
        angle = utils.fracAngle(angle, null);
      }
      var degrees = utils.degrees(angle);
      this.editor.event.message.dispatch({
        info: degrees + '??'
      });
      if (
      dragCtx.hasOwnProperty('angle') && dragCtx.angle === degrees && (
      !dragCtx.hasOwnProperty('extra_bond') || dragCtx.extra_bond === extraBond)) {
        return true;
      }
      if (dragCtx.action) {
        dragCtx.action.perform(restruct);
      }
      dragCtx.angle = degrees;
      var action = null;
      var pasteItems;
      if (!ci) {
        var _fromTemplateOnCanvas = fromTemplateOnCanvas(restruct, this.template, pos0, angle);
        var _fromTemplateOnCanvas2 = _slicedToArray(_fromTemplateOnCanvas, 2);
        action = _fromTemplateOnCanvas2[0];
        pasteItems = _fromTemplateOnCanvas2[1];
      } else if (ci.map === 'atoms') {
        var _fromTemplateOnAtom = fromTemplateOnAtom(restruct, this.template, ci.id, angle, extraBond);
        var _fromTemplateOnAtom2 = _slicedToArray(_fromTemplateOnAtom, 2);
        action = _fromTemplateOnAtom2[0];
        pasteItems = _fromTemplateOnAtom2[1];
        dragCtx.extra_bond = extraBond;
      }
      dragCtx.action = action;
      this.editor.update(dragCtx.action, true);
      if (this.mode !== 'fg') {
        dragCtx.mergeItems = getItemsToFuse(this.editor, pasteItems);
        this.editor.hover(getHoverToFuse(dragCtx.mergeItems));
      }
      return true;
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      var _this = this;
      var dragCtx = this.dragCtx;
      if (!dragCtx) {
        return true;
      }
      delete this.dragCtx;
      var restruct = this.editor.render.ctab;
      var struct = restruct.molecule;
      var ci = dragCtx.item;
      if (dragCtx.action && ci && ci.map === 'bonds' && this.mode !== 'fg') {
        dragCtx.action.perform(restruct);
        var promise = fromTemplateOnBondAction(restruct, this.template, ci.id, this.editor.event, dragCtx.sign1 * dragCtx.sign2 > 0, true);
        promise.then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              action = _ref2[0],
              pasteItems = _ref2[1];
          var mergeItems = getItemsToFuse(_this.editor, pasteItems);
          action = fromItemsFuse(restruct, mergeItems).mergeWith(action);
          _this.editor.update(action);
        });
        return true;
      }
      var action;
      var pasteItems = null;
      if (SGroup.isSaltOrSolvent(this.template.molecule.name)) {
        addSaltsAndSolventsOnCanvasWithoutMerge(restruct, this.template, dragCtx, this.editor);
        return true;
      }
      if (!dragCtx.action) {
        if (!ci) {
          var _fromTemplateOnCanvas3 = fromTemplateOnCanvas(restruct, this.template, dragCtx.xy0, 0);
          var _fromTemplateOnCanvas4 = _slicedToArray(_fromTemplateOnCanvas3, 2);
          action = _fromTemplateOnCanvas4[0];
          pasteItems = _fromTemplateOnCanvas4[1];
          dragCtx.action = action;
        } else if (ci.map === 'atoms') {
          var _restruct$atoms$get;
          var degree = (_restruct$atoms$get = restruct.atoms.get(ci.id)) === null || _restruct$atoms$get === void 0 ? void 0 : _restruct$atoms$get.a.neighbors.length;
          var angle;
          var extraBond;
          if (degree && degree > 1) {
            angle = null;
            extraBond = true;
          } else if (degree === 1) {
            var _struct$halfBonds$get;
            var atom = struct.atoms.get(ci.id);
            var neiId = atom && ((_struct$halfBonds$get = struct.halfBonds.get(atom.neighbors[0])) === null || _struct$halfBonds$get === void 0 ? void 0 : _struct$halfBonds$get.end);
            var nei = neiId && struct.atoms.get(neiId);
            angle = event.ctrlKey ? utils.calcAngle(nei === null || nei === void 0 ? void 0 : nei.pp, atom === null || atom === void 0 ? void 0 : atom.pp) : utils.fracAngle(utils.calcAngle(nei.pp, atom === null || atom === void 0 ? void 0 : atom.pp), null);
            extraBond = false;
          } else {
            angle = 0;
            extraBond = false;
          }
          var _fromTemplateOnAtom3 = fromTemplateOnAtom(restruct, this.template, ci.id, angle, extraBond);
          var _fromTemplateOnAtom4 = _slicedToArray(_fromTemplateOnAtom3, 2);
          action = _fromTemplateOnAtom4[0];
          pasteItems = _fromTemplateOnAtom4[1];
          dragCtx.action = action;
        } else if (ci.map === 'bonds' && this.mode !== 'fg') {
          var _promise = fromTemplateOnBondAction(restruct, this.template, ci.id, this.editor.event, dragCtx.sign1 * dragCtx.sign2 > 0, true);
          _promise.then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                action = _ref4[0],
                pasteItems = _ref4[1];
            if (_this.mode !== 'fg') {
              var mergeItems = getItemsToFuse(_this.editor, pasteItems);
              action = fromItemsFuse(restruct, mergeItems).mergeWith(action);
              _this.editor.update(action);
            }
          });
          return true;
        }
      }
      this.editor.selection(null);
      if (!dragCtx.mergeItems && pasteItems && this.mode !== 'fg') {
        dragCtx.mergeItems = getItemsToFuse(this.editor, pasteItems);
      }
      dragCtx.action = dragCtx.action ? fromItemsFuse(restruct, dragCtx.mergeItems).mergeWith(dragCtx.action) : fromItemsFuse(restruct, dragCtx.mergeItems);
      this.editor.hover(null);
      var completeAction = dragCtx.action;
      if (completeAction && !completeAction.isDummy()) {
        this.editor.update(completeAction);
      }
      this.editor.event.message.dispatch({
        info: false
      });
      return true;
    }
  }, {
    key: "cancel",
    value: function cancel(e) {
      this.mouseup(e);
    }
  }, {
    key: "mouseleave",
    value: function mouseleave(e) {
      this.mouseup(e);
    }
  }]);
  return TemplateTool;
}();
function addSaltsAndSolventsOnCanvasWithoutMerge(restruct, template, dragCtx, editor) {
  var _fromTemplateOnCanvas5 = fromTemplateOnCanvas(restruct, template, dragCtx.xy0, 0),
      _fromTemplateOnCanvas6 = _slicedToArray(_fromTemplateOnCanvas5, 1),
      action = _fromTemplateOnCanvas6[0];
  editor.update(action);
  editor.selection(null);
  editor.hover(null);
  editor.event.message.dispatch({
    info: false
  });
}
function getSign(molecule, bond, v) {
  var begin = molecule.atoms.get(bond.begin).pp;
  var end = molecule.atoms.get(bond.end).pp;
  var sign = Vec2.cross(Vec2.diff(begin, end), Vec2.diff(v, end));
  if (sign > 0) {
    return 1;
  }
  if (sign < 0) {
    return -1;
  }
  return 0;
}

var TextTool = function () {
  function TextTool(editor) {
    _classCallCheck(this, TextTool);
    this.editor = editor;
    this.editor.selection(null);
  }
  _createClass(TextTool, [{
    key: "mousedown",
    value: function mousedown(event) {
      var render = this.editor.render;
      var closestItem = this.editor.findItem(event, ['texts']);
      this.editor.selection(null);
      if (closestItem && closestItem.map === 'texts') {
        this.editor.hover(null);
        this.editor.selection({
          texts: [closestItem.id]
        });
        this.dragCtx = {
          xy0: render.page2obj(event),
          action: new Action()
        };
      }
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      var render = this.editor.render;
      if (this.dragCtx) {
        if (this.dragCtx.action) {
          this.dragCtx.action.perform(render.ctab);
        }
        this.dragCtx.action = fromMultipleMove(render.ctab, this.editor.selection() || {}, render.page2obj(event).sub(this.dragCtx.xy0));
        this.editor.update(this.dragCtx.action, true);
      } else {
        this.editor.hover(this.editor.findItem(event, ['texts']), null, event);
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup() {
      if (this.dragCtx) {
        this.editor.update(this.dragCtx.action);
        delete this.dragCtx;
      }
      return true;
    }
  }, {
    key: "click",
    value: function click(event) {
      var render = this.editor.render;
      var closestItem = this.editor.findItem(event, ['texts']);
      this.editor.hover(null);
      if (!closestItem) {
        propsDialog(this.editor, null, render.page2obj(event), []);
      }
      return true;
    }
  }, {
    key: "dblclick",
    value: function dblclick(event) {
      var closestItem = this.editor.findItem(event, ['texts']);
      this.editor.hover(null);
      if (closestItem.map === 'texts') {
        propsDialog(this.editor, closestItem.id, closestItem.position, closestItem.pos);
      }
      return true;
    }
  }]);
  return TextTool;
}();
function propsDialog(editor, id, position, pos) {
  var struct = editor.render.ctab.molecule;
  var text = id || id === 0 ? struct.texts.get(id) : null;
  var origilContent = text ? text.content : '';
  var res = editor.event.elementEdit.dispatch({
    content: origilContent,
    id: id,
    position: position,
    pos: pos,
    type: 'text'
  });
  res.then(function (_ref) {
    var content = _ref.content;
    if (!id && id !== 0 && content) {
      editor.update(fromTextCreation(editor.render.ctab, content, position, pos));
    } else if (!content) {
      editor.update(fromTextDeletion(editor.render.ctab, id));
    } else if (content !== origilContent) {
      editor.update(fromTextUpdating(editor.render.ctab, id, content));
    }
  })["catch"](function () {
    return null;
  });
}

var tools = {
  hand: HandTool,
  rgroupatom: RGroupAtomTool,
  select: SelectTool,
  sgroup: SGroupTool,
  eraser: EraserTool,
  atom: AtomTool,
  bond: BondTool,
  chain: ChainTool,
  template: TemplateTool,
  charge: ChargeTool,
  rgroupfragment: RGroupFragmentTool,
  apoint: APointTool,
  attach: AttachTool,
  reactionarrow: ReactionArrowTool,
  reactionplus: ReactionPlusTool,
  reactionmap: ReactionMapTool,
  reactionunmap: ReactionUnmapTool,
  paste: PasteTool,
  rotate: RotateTool,
  enhancedStereo: EnhancedStereoTool,
  simpleobject: SimpleObjectTool,
  text: TextTool
};

var Highlighter = function () {
  function Highlighter(editor) {
    _classCallCheck(this, Highlighter);
    this.editor = editor;
  }
  _createClass(Highlighter, [{
    key: "getAll",
    value: function getAll() {
      var highlightsMap = this.editor.render.ctab.molecule.highlights;
      var highlightsArray = _toConsumableArray(highlightsMap).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            highlight = _ref2[1];
        return {
          id: id,
          highlight: highlight
        };
      });
      return highlightsArray;
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      var createdHighlights = [];
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function (arg) {
        var atoms = arg.atoms,
            bonds = arg.bonds,
            color = arg.color;
        if (typeof color !== 'string') {
          return;
        }
        if (!atoms && !bonds) {
          return;
        }
        var restruct = _this.editor.render.ctab;
        var _getValidInputOnly = getValidInputOnly(restruct.molecule, atoms, bonds),
            validAtoms = _getValidInputOnly.validAtoms,
            validBonds = _getValidInputOnly.validBonds;
        if (validAtoms.length === 0 && validBonds.length === 0) {
          return;
        }
        createdHighlights.push({
          atoms: validAtoms,
          bonds: validBonds,
          color: color
        });
      });
      var action = fromHighlightCreate(this.editor.render.ctab, createdHighlights);
      this.editor.update(action);
    }
  }, {
    key: "clear",
    value: function clear() {
      var action = fromHighlightClear(this.editor.render.ctab);
      this.editor.update(action);
    }
  }]);
  return Highlighter;
}();
function getValidInputOnly(struct, atoms, bonds) {
  if (!Array.isArray(atoms)) {
    atoms = [];
  }
  if (!Array.isArray(bonds)) {
    bonds = [];
  }
  var structAtoms = struct.atoms,
      structBonds = struct.bonds;
  if (atoms.length > 0) {
    atoms = atoms.filter(function (aid) {
      return structAtoms.has(aid);
    });
  }
  if (bonds.length > 0) {
    bonds = bonds.filter(function (bid) {
      return structBonds.has(bid);
    });
  }
  return {
    validAtoms: atoms,
    validBonds: bonds
  };
}

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
var SCALE = 40;
var HISTORY_SIZE = 32;
var HOVER_ICON_OPACITY = 0.7;
var structObjects = ['atoms', 'bonds', 'frags', 'sgroups', 'sgroupData', 'rgroups', 'rxnArrows', 'rxnPluses', 'enhancedFlags', 'simpleObjects', 'texts'];
var highlightTargets = ['atoms', 'bonds', 'rxnArrows', 'rxnPluses', 'functionalGroups', 'frags', 'merge', 'rgroups', 'sgroups', 'sgroupData', 'enhancedFlags', 'simpleObjects', 'texts'];
function selectStereoFlagsIfNecessary(atoms, expAtoms) {
  var atomsOfFragments = {};
  atoms.forEach(function (atom, atomId) {
    atomsOfFragments[atom.fragment] ? atomsOfFragments[atom.fragment].push(atomId) : atomsOfFragments[atom.fragment] = [atomId];
  });
  var stereoFlags = [];
  Object.keys(atomsOfFragments).forEach(function (fragId) {
    var shouldSelSFlag = true;
    atomsOfFragments[fragId].forEach(function (atomId) {
      if (!expAtoms.includes(atomId)) shouldSelSFlag = false;
    });
    shouldSelSFlag && stereoFlags.push(Number(fragId));
  });
  return stereoFlags;
}
var _origin = new WeakMap();
var Editor$3 = function () {
  function Editor(clientArea, options) {
    _classCallCheck(this, Editor);
    _classPrivateFieldInitSpec(this, _origin, {
      writable: true,
      value: void 0
    });
    this.render = new Render(clientArea, Object.assign({
      scale: SCALE
    }, options));
    this._selection = null;
    this._tool = null;
    this.historyStack = [];
    this.historyPtr = 0;
    this.errorHandler = null;
    this.highlights = new Highlighter(this);
    this.renderAndRecoordinateStruct = this.renderAndRecoordinateStruct.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.hoverIcon = this.render.paper.text(0, 0, '').attr('font-size', options.fontsz).attr('opacity', HOVER_ICON_OPACITY);
    this.event = {
      message: new Subscription(),
      elementEdit: new PipelineSubscription(),
      bondEdit: new PipelineSubscription(),
      rgroupEdit: new PipelineSubscription(),
      sgroupEdit: new PipelineSubscription(),
      sdataEdit: new PipelineSubscription(),
      quickEdit: new PipelineSubscription(),
      attachEdit: new PipelineSubscription(),
      removeFG: new PipelineSubscription(),
      change: new Subscription(),
      selectionChange: new PipelineSubscription(),
      aromatizeStruct: new PipelineSubscription(),
      dearomatizeStruct: new PipelineSubscription(),
      enhancedStereoEdit: new PipelineSubscription(),
      confirm: new PipelineSubscription(),
      cursor: new PipelineSubscription(),
      showInfo: new PipelineSubscription()
    };
    domEventSetup(this, clientArea);
  }
  _createClass(Editor, [{
    key: "isDitrty",
    value: function isDitrty() {
      var position = this.historyPtr;
      var length = this.historyStack.length;
      if (!length || !_classPrivateFieldGet(this, _origin)) {
        return false;
      }
      return !isEqual(this.historyStack[position - 1], _classPrivateFieldGet(this, _origin));
    }
  }, {
    key: "setOrigin",
    value: function setOrigin() {
      var position = this.historyPtr;
      _classPrivateFieldSet(this, _origin, position ? this.historyStack[position - 1] : null);
    }
  }, {
    key: "tool",
    value: function tool(name, opts) {
      if (arguments.length === 0) {
        return this._tool;
      }
      if (this._tool && this._tool.cancel) {
        this._tool.cancel();
      }
      var tool = new tools[name](this, opts);
      var isAtomToolChosen = name === 'atom';
      if (!isAtomToolChosen) {
        this.hoverIcon.hide();
      }
      if (!tool || tool.isNotActiveTool) {
        return null;
      }
      this._tool = tool;
      return this._tool;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.struct(undefined);
    }
  }, {
    key: "renderAndRecoordinateStruct",
    value: function renderAndRecoordinateStruct(struct) {
      var action = fromNewCanvas(this.render.ctab, struct);
      this.update(action);
      var structCenter = getStructCenter(this.render.ctab);
      recoordinate(this, structCenter);
      return this.render.ctab.molecule;
    }
  }, {
    key: "struct",
    value: function struct(value) {
      if (arguments.length === 0) {
        return this.render.ctab.molecule;
      }
      this.selection(null);
      var struct = value || new Struct();
      return this.renderAndRecoordinateStruct(struct);
    }
  }, {
    key: "structToAddFragment",
    value: function structToAddFragment(value) {
      var superStruct = value.mergeInto(this.render.ctab.molecule);
      return this.renderAndRecoordinateStruct(superStruct);
    }
  }, {
    key: "setOptions",
    value: function setOptions(opts) {
      return this.render.updateOptions(opts);
    }
  }, {
    key: "options",
    value: function options(value) {
      if (arguments.length === 0) {
        return this.render.options;
      }
      var struct = this.render.ctab.molecule;
      var zoom = this.render.options.zoom;
      this.render.clientArea.innerHTML = '';
      this.render = new Render(this.render.clientArea, Object.assign({
        scale: SCALE
      }, value));
      this.render.setMolecule(struct);
      this.render.setZoom(zoom);
      this.render.update();
      return this.render.options;
    }
  }, {
    key: "zoom",
    value: function zoom(value) {
      if (arguments.length === 0) {
        return this.render.options.zoom;
      }
      this.render.setZoom(value);
      var selection = this.selection();
      var structCenter = getStructCenter(this.render.ctab, selection);
      recoordinate(this, structCenter);
      this.render.update();
      return this.render.options.zoom;
    }
  }, {
    key: "selection",
    value: function selection(ci) {
      if (arguments.length === 0) {
        return this._selection;
      }
      var ReStruct = this.render.ctab;
      this._selection = null;
      if (ci === 'all') {
        ci = structObjects.reduce(function (res, key) {
          res[key] = Array.from(ReStruct[key].keys());
          return res;
        }, {});
      }
      if (ci === 'descriptors') {
        ReStruct = this.render.ctab;
        ci = {
          sgroupData: Array.from(ReStruct.sgroupData.keys())
        };
      }
      if (ci) {
        var res = {};
        Object.keys(ci).forEach(function (key) {
          if (ci[key].length > 0)
            res[key] = ci[key].slice();
        });
        if (Object.keys(res).length !== 0) {
          this._selection = res;
        }
        var stereoFlags = selectStereoFlagsIfNecessary(this.struct().atoms, this.explicitSelected().atoms);
        if (stereoFlags.length !== 0) {
          this._selection && this._selection.enhancedFlags ? this._selection.enhancedFlags = Array.from(new Set([].concat(_toConsumableArray(this._selection.enhancedFlags), _toConsumableArray(stereoFlags)))) : res.enhancedFlags = stereoFlags;
        }
      }
      this.render.ctab.setSelection(this._selection);
      this.event.selectionChange.dispatch(this._selection);
      this.render.update();
      return this._selection;
    }
  }, {
    key: "hover",
    value: function hover(ci, newTool, event) {
      var tool = newTool || this._tool;
      var infoPanelData = null;
      if ('ci' in tool && (!ci || tool.ci.map !== ci.map || tool.ci.id !== ci.id)) {
        setHover(tool.ci, false, this.render);
        delete tool.ci;
      }
      if (ci && setHover(ci, true, this.render)) tool.ci = ci;
      if (!event) return;
      var checkFunctionGroupTypes = ['sgroups', 'functionalGroups'];
      var closestCollapsibleStructures = this.findItem(event, checkFunctionGroupTypes);
      if (closestCollapsibleStructures) {
        var _this$struct;
        var sGroup = (_this$struct = this.struct()) === null || _this$struct === void 0 ? void 0 : _this$struct.sgroups.get(closestCollapsibleStructures.id);
        if (sGroup && !sGroup.data.expanded) {
          var groupName = sGroup.data.name;
          var groupStruct = FunctionalGroup.getFunctionalGroupByName(groupName);
          infoPanelData = {
            groupStruct: groupStruct,
            event: event,
            sGroup: sGroup
          };
        }
      }
      if (infoPanelData) {
        this.event.showInfo.dispatch(infoPanelData);
      } else {
        this.event.showInfo.dispatch(null);
      }
    }
  }, {
    key: "update",
    value: function update(action, ignoreHistory) {
      if (action === true) {
        this.render.update(true);
      } else {
        if (!ignoreHistory && !action.isDummy()) {
          this.historyStack.splice(this.historyPtr, HISTORY_SIZE + 1, action);
          if (this.historyStack.length > HISTORY_SIZE) {
            this.historyStack.shift();
          }
          this.historyPtr = this.historyStack.length;
          this.event.change.dispatch(action);
        }
        this.render.update();
      }
    }
  }, {
    key: "historySize",
    value: function historySize() {
      return {
        undo: this.historyPtr,
        redo: this.historyStack.length - this.historyPtr
      };
    }
  }, {
    key: "undo",
    value: function undo() {
      if (this.historyPtr === 0) {
        throw new Error('Undo stack is empty');
      }
      if (this.tool() && this.tool().cancel) {
        this.tool().cancel();
      }
      this.selection(null);
      if (this._tool instanceof tools.paste) {
        this.event.change.dispatch();
        return;
      }
      this.historyPtr--;
      var stack = this.historyStack[this.historyPtr];
      var action = stack.perform(this.render.ctab);
      this.historyStack[this.historyPtr] = action;
      this.event.change.dispatch(action);
      this.render.update();
    }
  }, {
    key: "redo",
    value: function redo() {
      if (this.historyPtr === this.historyStack.length) {
        throw new Error('Redo stack is empty');
      }
      if (this.tool() && this.tool().cancel) {
        this.tool().cancel();
      }
      this.selection(null);
      if (this._tool instanceof tools.paste) {
        this.event.change.dispatch();
        return;
      }
      var action = this.historyStack[this.historyPtr].perform(this.render.ctab);
      this.historyStack[this.historyPtr] = action;
      this.historyPtr++;
      this.event.change.dispatch(action);
      this.render.update();
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventName, handler) {
      var subscriber = {
        handler: handler
      };
      switch (eventName) {
        case 'change':
          var subscribeFuncWrapper = function subscribeFuncWrapper(action) {
            return customOnChangeHandler(action, handler);
          };
          subscriber.handler = subscribeFuncWrapper;
          this.event[eventName].add(subscribeFuncWrapper);
          break;
        default:
          this.event[eventName].add(handler);
      }
      return subscriber;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, subscriber) {
      this.event[eventName].remove(subscriber.handler);
    }
  }, {
    key: "findItem",
    value: function findItem(event, maps) {
      var skip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var pos = new Vec2(this.render.page2obj(event));
      return closest.item(this.render.ctab, pos, maps, skip, this.render.options);
    }
  }, {
    key: "findMerge",
    value: function findMerge(srcItems, maps) {
      return closest.merge(this.render.ctab, srcItems, maps, this.render.options);
    }
  }, {
    key: "explicitSelected",
    value: function explicitSelected() {
      var selection = this.selection() || {};
      var res = structObjects.reduce(function (acc, key) {
        acc[key] = selection[key] ? selection[key].slice() : [];
        return acc;
      }, {});
      var struct = this.render.ctab.molecule;
      if (res.bonds) {
        res.bonds.forEach(function (bid) {
          var bond = struct.bonds.get(bid);
          res.atoms = res.atoms || [];
          if (res.atoms.indexOf(bond.begin) < 0) {
            res.atoms.push(bond.begin);
          }
          if (res.atoms.indexOf(bond.end) < 0) {
            res.atoms.push(bond.end);
          }
        });
      }
      if (res.atoms && res.bonds) {
        struct.bonds.forEach(function (bond, bid) {
          if (res.bonds.indexOf(bid) >= 0 && res.atoms.indexOf(bond.begin) >= 0 && res.atoms.indexOf(bond.end) >= 0) {
            res.bonds = res.bonds || [];
            res.bonds.push(bid);
          }
        });
      }
      return res;
    }
  }, {
    key: "structSelected",
    value: function structSelected() {
      var struct = this.render.ctab.molecule;
      var selection = this.explicitSelected();
      var dst = struct.clone(new Pile(selection.atoms), new Pile(selection.bonds), true, null, new Pile(selection.simpleObjects), new Pile(selection.texts));
      struct.rxnArrows.forEach(function (item, id) {
        if (selection.rxnArrows.indexOf(id) !== -1) dst.rxnArrows.add(item.clone());
      });
      struct.rxnPluses.forEach(function (item, id) {
        if (selection.rxnPluses.indexOf(id) !== -1) dst.rxnPluses.add(item.clone());
      });
      dst.isReaction = struct.isReaction && struct.isRxn();
      return dst;
    }
  }, {
    key: "alignDescriptors",
    value: function alignDescriptors() {
      this.selection(null);
      var action = fromDescriptorsAlign(this.render.ctab);
      this.update(action);
      this.render.update(true);
    }
  }]);
  return Editor;
}();
function isMouseRight(event) {
  return event.which && event.which === 3 || event.button && event.button === 2;
}
function domEventSetup(editor, clientArea) {
  ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup', 'mouseleave', 'mouseover'].forEach(function (eventName) {
    editor.event[eventName] = new DOMSubscription();
    var subs = editor.event[eventName];
    clientArea.addEventListener(eventName, subs.dispatch.bind(subs));
    subs.add(function (event) {
      if (eventName !== 'mouseup' && eventName !== 'mouseleave') {
        if (isMouseRight(event) || !event.target || event.target.nodeName === 'DIV') {
          editor.hover(null);
          return true;
        }
      }
      var EditorTool = editor.tool();
      editor.lastEvent = event;
      if (EditorTool && eventName in EditorTool) {
        EditorTool[eventName](event);
      }
      return true;
    }, -1);
  });
}
function recoordinate(editor, rp
) {
  if (rp) {
    editor.render.setScrollOffset(rp.x, rp.y);
  } else {
    editor.render.setScrollOffset(0, 0);
  }
}
function getStructCenter(ReStruct, selection) {
  var bb = ReStruct.getVBoxObj(selection || {});
  return Vec2.lc2(bb.p0, 0.5, bb.p1, 0.5);
}
function setHover(ci, visible, render) {
  if (highlightTargets.indexOf(ci.map) === -1) {
    return false;
  }
  var item = null;
  if (ci.map === 'merge') {
    Object.keys(ci.items).forEach(function (mp) {
      ci.items[mp].forEach(function (dstId) {
        item = render.ctab[mp].get(dstId);
        if (item) {
          item.setHover(visible, render);
        }
      });
    });
    return true;
  }
  if (ci.map === 'functionalGroups') ci.map = 'sgroups';
  item = render.ctab[ci.map].get(ci.id);
  if (!item) {
    return true;
  }
  if (ci.map === 'sgroups' && item.item.type === 'DAT' || ci.map === 'sgroupData') {
    var item1 = render.ctab.sgroups.get(ci.id);
    if (item1) {
      item1.setHover(visible, render);
    }
    var item2 = render.ctab.sgroupData.get(ci.id);
    if (item2) {
      item2.setHover(visible, render);
    }
  } else {
    item.setHover(visible, render);
  }
  return true;
}

var classes$E = {"isHidden":"ContextMenu-module_isHidden__eOjF4"};

var FGContextMenu = function FGContextMenu() {
  var _useAppContext = useAppContext(),
      getKetcherInstance = _useAppContext.getKetcherInstance;
  var dispatch = useDispatch();
  var handleExpand = function handleExpand() {
    var editor = getKetcherInstance().editor;
    var action = new Action();
    var expandData = targetItems[0].isExpanded;
    targetItems === null || targetItems === void 0 ? void 0 : targetItems.forEach(function (item) {
      action.mergeWith(setExpandSGroup(editor.render.ctab, item.relatedSGroupId, {
        expanded: !expandData
      }));
    });
    editor.update(action);
    setShowSGroupMenu(false);
    setTargetItems([]);
    highlightFG(dispatch, {
      group: null,
      id: null
    });
  };
  var handleRemove = function handleRemove() {
    var editor = getKetcherInstance().editor;
    var action = new Action();
    targetItems === null || targetItems === void 0 ? void 0 : targetItems.forEach(function (item) {
      action.mergeWith(fromSgroupDeletion(editor.render.ctab, item.relatedSGroupId));
    });
    editor.update(action);
    setShowSGroupMenu(false);
    setTargetItems([]);
  };
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSGroupMenu = _useState2[0],
      setShowSGroupMenu = _useState2[1];
  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      targetItems = _useState4[0],
      setTargetItems = _useState4[1];
  function showMenu(e) {
    var editor = getKetcherInstance().editor;
    var struct = editor.struct();
    var selection = editor.selection();
    setShowSGroupMenu(false);
    setTargetItems([]);
    var selectedItems = [];
    var fgId;
    var ci = editor.findItem({
      clientX: e.detail.position.x,
      clientY: e.detail.position.y
    }, ['sgroups', 'functionalGroups', 'atoms', 'bonds']);
    if (ci) {
      switch (ci.map) {
        case 'atoms':
          fgId = FunctionalGroup.findFunctionalGroupByAtom(struct.functionalGroups, ci.id);
          fgId !== null && struct.functionalGroups.forEach(function (fg) {
            fg.relatedSGroupId === fgId && !selectedItems.includes(fg) && selectedItems.push(fg);
          });
          break;
        case 'bonds':
          fgId = FunctionalGroup.findFunctionalGroupByBond(struct, struct.functionalGroups, ci.id);
          fgId !== null && struct.functionalGroups.forEach(function (fg) {
            fg.relatedSGroupId === fgId && !selectedItems.includes(fg) && selectedItems.push(fg);
          });
          break;
        case 'sgroups':
          var sgroup = struct.sgroups.get(ci.id);
          if (FunctionalGroup.isFunctionalGroup(sgroup)) {
            struct.functionalGroups.forEach(function (fg) {
              fg.relatedSGroupId === (sgroup === null || sgroup === void 0 ? void 0 : sgroup.id) && !selectedItems.includes(fg) && selectedItems.push(fg);
            });
          }
          break;
        case 'functionalGroups':
          var fgroup = struct.sgroups.get(ci.id);
          if (FunctionalGroup.isFunctionalGroup(fgroup)) {
            struct.functionalGroups.forEach(function (fg) {
              fg.relatedSGroupId === (fgroup === null || fgroup === void 0 ? void 0 : fgroup.id) && !selectedItems.includes(fg) && selectedItems.push(fg);
            });
          }
          break;
      }
    }
    if (selection && selection.atoms) {
      selection.atoms.forEach(function (aid) {
        var fgId = FunctionalGroup.findFunctionalGroupByAtom(struct.functionalGroups, aid);
        fgId !== null && struct.functionalGroups.forEach(function (fg) {
          fg.relatedSGroupId === fgId && !selectedItems.includes(fg) && selectedItems.push(fg);
        });
      });
    }
    if (selectedItems.length) {
      setTargetItems(selectedItems);
      setShowSGroupMenu(true);
    }
  }
  return jsxs(ContextMenu, {
    id: "contextmenu",
    onShow: function onShow(e) {
      return showMenu(e);
    },
    className: clsx(_defineProperty({}, classes$E.isHidden, !showSGroupMenu)),
    children: [jsxs(MenuItem, {
      onClick: handleExpand,
      children: [targetItems.length && targetItems[0].isExpanded ? 'Contract ' : 'Expand ', "Abbreviation"]
    }), jsx(MenuItem, {
      divider: true
    }), jsx(MenuItem, {
      onClick: handleRemove,
      children: "Remove Abbreviation"
    })]
  });
};

var classes$D = {"button-common-styles":"StructEditor-module_button-common-styles__3P7PO","scrollbar":"StructEditor-module_scrollbar__SUs-o","spinnerOverlay":"StructEditor-module_spinnerOverlay__5H1IM","canvas":"StructEditor-module_canvas__LLnzh","measureLog":"StructEditor-module_measureLog__B2wuy","visible":"StructEditor-module_visible__3eFNB","intermediateCanvas":"StructEditor-module_intermediateCanvas__fR3ws","enableCursor":"StructEditor-module_enableCursor__Qla0A"};

var Cursor = function Cursor(_ref) {
  var Icon = _ref.Icon,
      PressedIcon = _ref.PressedIcon,
      enableHandTool = _ref.enableHandTool;
  var _useState = useState({
    clientX: 50,
    clientY: 50
  }),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];
  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mousedown = _useState4[0],
      setMouseDown = _useState4[1];
  var updatePosition = function updatePosition(event) {
    event.pageX;
        event.pageY;
        var clientX = event.clientX,
        clientY = event.clientY;
    setPosition({
      clientX: clientX,
      clientY: clientY
    });
  };
  var handleMouseDown = function handleMouseDown() {
    setMouseDown(true);
  };
  var handleMouseUp = function handleMouseUp() {
    setMouseDown(false);
  };
  useEffect(function () {
    document.addEventListener('mousemove', updatePosition, false);
    document.addEventListener('mouseenter', updatePosition, false);
    document.addEventListener('mousedown', handleMouseDown, false);
    document.addEventListener('mouseup', handleMouseUp, false);
    return function () {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', updatePosition);
    };
  }, []);
  if (!enableHandTool) return null;
  return jsx("div", {
    style: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      pointerEvents: 'none'
    },
    children: mousedown ? jsx(PressedIcon, {
      style: {
        position: 'absolute',
        left: position.clientX,
        top: position.clientY
      }
    }) : jsx(Icon, {
      style: {
        position: 'absolute',
        left: position.clientX,
        top: position.clientY
      }
    })
  });
};

var _excluded$r = ["struct", "Tag"];
function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ownKeys$E(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$E(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$E(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$E(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function prepareStruct(struct) {
  if (struct.sgroups.size > 0) {
    var newStruct = struct.clone();
    newStruct.sgroups["delete"](0);
    return newStruct;
  }
  return struct;
}
var renderCache = new Map();
function renderStruct(el, struct) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (el && struct) {
    var _options$cachePrefix = options.cachePrefix,
        cachePrefix = _options$cachePrefix === void 0 ? '' : _options$cachePrefix;
    var cacheKey = "".concat(cachePrefix).concat(struct.name);
    if (renderCache.has(cacheKey)) {
      el.innerHTML = renderCache.get(cacheKey);
      return;
    }
    var preparedStruct = prepareStruct(struct);
    preparedStruct.initHalfBonds();
    preparedStruct.initNeighbors();
    preparedStruct.setImplicitHydrogen();
    preparedStruct.markFragments();
    var rnd = new Render(el, _objectSpread$E({
      autoScale: true
    }, options));
    rnd.setMolecule(preparedStruct);
    rnd.update(true, options.viewSz);
    renderCache.set(cacheKey, rnd.clientArea.innerHTML);
  }
}
var StructRender = function (_Component) {
  _inherits(StructRender, _Component);
  var _super = _createSuper$a(StructRender);
  function StructRender(props) {
    var _this;
    _classCallCheck(this, StructRender);
    _this = _super.call(this, props);
    _this.tagRef = createRef();
    return _this;
  }
  _createClass(StructRender, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(previousProps) {
      return Boolean(this.props.id && this.props.id !== previousProps.id);
    }
  }, {
    key: "update",
    value: function update() {
      var el = this.tagRef.current;
      var _this$props = this.props,
          struct = _this$props.struct,
          options = _this$props.options;
      var parsedStruct;
      if (!(struct instanceof Struct)) {
        try {
          var molSerialzer = new MolSerializer();
          parsedStruct = molSerialzer.deserialize(struct);
        } catch (e) {
          parsedStruct = null;
        }
      } else {
        parsedStruct = struct;
      }
      el === null || el === void 0 ? void 0 : el.childNodes.forEach(function (node) {
        node.remove();
      });
      renderStruct(el, parsedStruct, options);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          struct = _this$props2.struct,
          _this$props2$Tag = _this$props2.Tag,
          Tag = _this$props2$Tag === void 0 ? 'div' : _this$props2$Tag,
          props = _objectWithoutProperties(_this$props2, _excluded$r);
      return jsx(Tag, _objectSpread$E(_objectSpread$E({
        ref: this.tagRef
      }, props), {}, {
        children: struct ? null : 'No molecule'
      }));
    }
  }]);
  return StructRender;
}(Component);

var functionalGroupsSelector = function functionalGroupsSelector(state) {
  return state.functionalGroups.lib;
};
var functionGroupInfoSelector = function functionGroupInfoSelector(state) {
  return state.functionalGroups.functionalGroupInfo;
};

var classes$C = {"infoPanel":"InfoPanel-module_infoPanel__irvZL"};

function ownKeys$D(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$D(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$D(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$D(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var HOVER_DELAY = 400;
var HOVER_PANEL_PADDING = 20;
function getSGroupFirstAtom(sGroup, render) {
  var _render$ctab$atoms, _render$ctab$atoms$ge;
  var firstSgroupAtom = sGroup.firstSgroupAtom;
  if (firstSgroupAtom) return firstSgroupAtom.pp;
  var _sGroup$atoms = _slicedToArray(sGroup.atoms, 1),
      firstAtomId = _sGroup$atoms[0];
  return ((_render$ctab$atoms = render.ctab.atoms) === null || _render$ctab$atoms === void 0 ? void 0 : (_render$ctab$atoms$ge = _render$ctab$atoms.get(firstAtomId)) === null || _render$ctab$atoms$ge === void 0 ? void 0 : _render$ctab$atoms$ge.a.pp) || new Vec2(0, 0);
}
function getPanelPosition(clientX, clientY, render, sGroup) {
  var width = 0;
  var height = 0;
  var x = 0;
  var y = 0;
  if (sGroup) {
    var _render$clientArea, _render$clientArea2, _render$options$offse, _render$clientArea3, _render$options, _render$options$offse2, _render$clientArea4;
    var groupBoundingBox = sGroup.areas[0];
    var start = Scale.obj2scaled(groupBoundingBox.p0, render.options);
    var end = Scale.obj2scaled(groupBoundingBox.p1, render.options);
    width = end.x - start.x;
    height = end.y - start.y;
    var firstAtomPosition = getSGroupFirstAtom(sGroup, render);
    var panelPosition = Scale.obj2scaled(firstAtomPosition, {
      scale: render.options.scale * render.options.zoom
    });
    x = panelPosition.x - width / 2 - HOVER_PANEL_PADDING;
    y = panelPosition.y + HOVER_PANEL_PADDING;
    var viewportRightLimit = (render === null || render === void 0 ? void 0 : (_render$clientArea = render.clientArea) === null || _render$clientArea === void 0 ? void 0 : _render$clientArea.clientWidth) - width / 2;
    var viewportLeftLimit = HOVER_PANEL_PADDING * 2 + width / 2;
    var viewportBottomLimit = (render === null || render === void 0 ? void 0 : (_render$clientArea2 = render.clientArea) === null || _render$clientArea2 === void 0 ? void 0 : _render$clientArea2.clientHeight) - height;
    if (clientX > viewportRightLimit) {
      x = panelPosition.x - width - HOVER_PANEL_PADDING;
    } else if (clientX < viewportLeftLimit) {
      x = panelPosition.x - HOVER_PANEL_PADDING;
    }
    if (clientY > viewportBottomLimit) {
      y = panelPosition.y - height - HOVER_PANEL_PADDING * 3;
    }
    var scrollOffsetX = (render === null || render === void 0 ? void 0 : (_render$options$offse = render.options.offset) === null || _render$options$offse === void 0 ? void 0 : _render$options$offse.x) - (render === null || render === void 0 ? void 0 : (_render$clientArea3 = render.clientArea) === null || _render$clientArea3 === void 0 ? void 0 : _render$clientArea3.scrollLeft);
    var scrollOffsetY = (render === null || render === void 0 ? void 0 : (_render$options = render.options) === null || _render$options === void 0 ? void 0 : (_render$options$offse2 = _render$options.offset) === null || _render$options$offse2 === void 0 ? void 0 : _render$options$offse2.y) - (render === null || render === void 0 ? void 0 : (_render$clientArea4 = render.clientArea) === null || _render$clientArea4 === void 0 ? void 0 : _render$clientArea4.scrollTop);
    x += scrollOffsetX;
    y += scrollOffsetY;
  }
  return [new Vec2(x, y), new Vec2(width, height)];
}
var InfoPanel = function InfoPanel(props) {
  var _sGroup$data;
  var _props$clientX = props.clientX,
      clientX = _props$clientX === void 0 ? 0 : _props$clientX,
      _props$clientY = props.clientY,
      clientY = _props$clientY === void 0 ? 0 : _props$clientY,
      render = props.render,
      className = props.className,
      groupStruct = props.groupStruct,
      sGroup = props.sGroup;
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      molecule = _useState2[0],
      setMolecule = _useState2[1];
  var childRef = useRef(null);
  var groupName = sGroup === null || sGroup === void 0 ? void 0 : (_sGroup$data = sGroup.data) === null || _sGroup$data === void 0 ? void 0 : _sGroup$data.name;
  var timer;
  useEffect(function () {
    if (groupStruct) {
      timer = setTimeout(function () {
        setMolecule(groupStruct.clone());
      }, HOVER_DELAY);
    } else {
      setMolecule(null);
    }
    return function () {
      return clearTimeout(timer);
    };
  }, [groupName]);
  var _getPanelPosition = getPanelPosition(clientX, clientY, render, sGroup),
      _getPanelPosition2 = _slicedToArray(_getPanelPosition, 2),
      position = _getPanelPosition2[0],
      size = _getPanelPosition2[1];
  var x = position.x,
      y = position.y;
  var width = size.x;
  var height = size.y;
  return molecule && jsx("div", {
    style: {
      left: x + 'px',
      top: y + 'px'
    },
    className: clsx(classes$C.infoPanel, className),
    children: jsx(StructRender, _objectSpread$D(_objectSpread$D({
      struct: molecule
    }, props), {}, {
      id: groupName,
      ref: childRef,
      options: _objectSpread$D(_objectSpread$D({}, render.options), {}, {
        autoScale: true,
        autoScaleMargin: 0,
        rescaleAmount: 1,
        cachePrefix: 'infoPanel',
        viewSz: new Vec2(width, height),
        width: width,
        height: height
      })
    }))
  });
};
var InfoPanel$1 = connect(function (store) {
  var _functionGroupInfoSel, _functionGroupInfoSel2, _functionGroupInfoSel3, _functionGroupInfoSel4, _functionGroupInfoSel5, _functionGroupInfoSel6, _store$editor, _store$editor$render, _store$editor$render$;
  return {
    clientX: ((_functionGroupInfoSel = functionGroupInfoSelector(store)) === null || _functionGroupInfoSel === void 0 ? void 0 : (_functionGroupInfoSel2 = _functionGroupInfoSel.event) === null || _functionGroupInfoSel2 === void 0 ? void 0 : _functionGroupInfoSel2.clientX) || 0,
    clientY: ((_functionGroupInfoSel3 = functionGroupInfoSelector(store)) === null || _functionGroupInfoSel3 === void 0 ? void 0 : (_functionGroupInfoSel4 = _functionGroupInfoSel3.event) === null || _functionGroupInfoSel4 === void 0 ? void 0 : _functionGroupInfoSel4.clientY) || 0,
    groupStruct: ((_functionGroupInfoSel5 = functionGroupInfoSelector(store)) === null || _functionGroupInfoSel5 === void 0 ? void 0 : _functionGroupInfoSel5.groupStruct) || null,
    sGroup: ((_functionGroupInfoSel6 = functionGroupInfoSelector(store)) === null || _functionGroupInfoSel6 === void 0 ? void 0 : _functionGroupInfoSel6.sGroup) || null,
    render: (_store$editor = store.editor) === null || _store$editor === void 0 ? void 0 : (_store$editor$render = _store$editor.render) === null || _store$editor$render === void 0 ? void 0 : (_store$editor$render$ = _store$editor$render.ctab) === null || _store$editor$render$ === void 0 ? void 0 : _store$editor$render$.render
  };
})(InfoPanel);

var _excluded$q = ["Tag", "struct", "tool", "toolOpts", "options", "onInit", "onSelectionChange", "onElementEdit", "onEnhancedStereoEdit", "onQuickEdit", "onBondEdit", "onRgroupEdit", "onSgroupEdit", "onSdataEdit", "onRemoveFG", "onMessage", "onAromatizeStruct", "onDearomatizeStruct", "onAttachEdit", "indigoVerification", "onCipChange", "className", "onConfirm", "onShowInfo", "showAttachmentPoints"];
function ownKeys$C(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$C(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$C(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$C(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function setupEditor(editor, props) {
  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var struct = props.struct,
      tool = props.tool,
      toolOpts = props.toolOpts,
      options = props.options;
  if (struct !== oldProps.struct) editor.struct(struct);
  if (tool !== oldProps.tool || toolOpts !== oldProps.toolOpts) {
    editor.tool(tool, toolOpts);
    if (toolOpts !== oldProps.toolOpts) {
      editor.event.message.dispatch({
        info: JSON.stringify(toolOpts)
      });
    }
  }
  if (oldProps.options && options !== oldProps.options) editor.options(options);
  Object.keys(editor.event).forEach(function (name) {
    var eventName = "on".concat(upperFirst(name));
    if (props[eventName] !== oldProps[eventName]) {
      if (oldProps[eventName]) {
        editor.event[name].remove(oldProps[eventName]);
      }
      if (props[eventName]) {
        editor.event[name].add(props[eventName]);
      }
    }
  });
}
function removeEditorHandlers(editor, props) {
  Object.keys(editor.event).forEach(function (name) {
    var eventName = "on".concat(upperFirst(name));
    if (props[eventName]) editor.event[name].remove(props[eventName]);
  });
}
var StructEditor = function (_Component) {
  _inherits(StructEditor, _Component);
  var _super = _createSuper$9(StructEditor);
  function StructEditor(props) {
    var _this;
    _classCallCheck(this, StructEditor);
    _this = _super.call(this, props);
    _this.state = {
      enableCursor: false,
      clientX: 0,
      clientY: 0
    };
    _this.editorRef = createRef();
    _this.logRef = createRef();
    return _this;
  }
  _createClass(StructEditor, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.indigoVerification !== nextProps.indigoVerification || nextState.enableCursor !== this.state.enableCursor;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      setupEditor(this.editor, props, this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.editor = new Editor$3(this.editorRef.current, _objectSpread$C({}, this.props.options));
      setupEditor(this.editor, this.props);
      if (this.props.onInit) this.props.onInit(this.editor);
      this.editor.event.message.add(function (msg) {
        var el = _this2.logRef.current;
        if (msg.info && _this2.props.showAttachmentPoints) {
          try {
            var parsedInfo = JSON.parse(msg.info);
            el.innerHTML = "Atom Id: ".concat(parsedInfo.atomid, ", Bond Id: ").concat(parsedInfo.bondid);
          } catch (_unused) {
            el.innerHTML = msg.info;
          }
          el.classList.add(classes$D.visible);
        } else {
          el.classList.remove(classes$D.visible);
        }
      });
      this.editor.event.cursor.add(function (csr) {
        switch (csr.status) {
          case 'enable':
            _this2.editorRef.current.classList.add(classes$D.enableCursor);
            var _this2$editorRef$curr = _this2.editorRef.current.getBoundingClientRect(),
                left = _this2$editorRef$curr.left,
                top = _this2$editorRef$curr.top,
                right = _this2$editorRef$curr.right,
                bottom = _this2$editorRef$curr.bottom;
            var _csr$cursorPosition = csr.cursorPosition,
                clientX = _csr$cursorPosition.clientX,
                clientY = _csr$cursorPosition.clientY;
            var handShouldBeShown = clientX >= left && clientX <= right && clientY >= top && clientX <= bottom;
            if (!_this2.state.enableCursor && handShouldBeShown) {
              _this2.setState({
                enableCursor: true
              });
            }
            break;
          case 'move':
            _this2.editorRef.current.classList.add(classes$D.enableCursor);
            _this2.setState({
              enableCursor: true,
              clientX: clientX,
              clientY: clientY
            });
            break;
          case 'disable':
            _this2.editorRef.current.classList.remove(classes$D.enableCursor);
            _this2.setState({
              enableCursor: false
            });
            break;
          case 'leave':
            _this2.editorRef.current.classList.remove(classes$D.enableCursor);
            _this2.setState({
              enableCursor: false
            });
            break;
          case 'mouseover':
            _this2.editorRef.current.classList.add(classes$D.enableCursor);
            _this2.setState({
              enableCursor: true
            });
            break;
        }
      });
      this.editor.event.message.dispatch({
        info: JSON.stringify(this.props.toolOpts)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEditorHandlers(this.editor, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$Tag = _this$props.Tag,
          Tag = _this$props$Tag === void 0 ? 'div' : _this$props$Tag;
          _this$props.struct;
          _this$props.tool;
          _this$props.toolOpts;
          _this$props.options;
          _this$props.onInit;
          _this$props.onSelectionChange;
          _this$props.onElementEdit;
          _this$props.onEnhancedStereoEdit;
          _this$props.onQuickEdit;
          _this$props.onBondEdit;
          _this$props.onRgroupEdit;
          _this$props.onSgroupEdit;
          _this$props.onSdataEdit;
          _this$props.onRemoveFG;
          _this$props.onMessage;
          _this$props.onAromatizeStruct;
          _this$props.onDearomatizeStruct;
          _this$props.onAttachEdit;
          var indigoVerification = _this$props.indigoVerification;
          _this$props.onCipChange;
          var className = _this$props.className;
          _this$props.onConfirm;
          _this$props.onShowInfo;
          _this$props.showAttachmentPoints;
          var props = _objectWithoutProperties(_this$props, _excluded$q);
      return jsxs(Tag, _objectSpread$C(_objectSpread$C({
        className: clsx(classes$D.canvas, className),
        onMouseDown: function onMouseDown(event) {
          return event.preventDefault();
        }
      }, props), {}, {
        children: [jsxs(ContextMenuTrigger, {
          id: "contextmenu",
          attributes: {
            onClick: hideMenu
          },
          holdToDisplay: -1,
          children: [jsx("div", {
            ref: this.editorRef,
            className: clsx(classes$D.intermediateCanvas),
            onMouseDown: function onMouseDown(event) {
              return event.preventDefault();
            }
          }), jsx(Cursor, {
            Icon: SvgHand,
            PressedIcon: SvgCompressedHand,
            enableHandTool: this.state.enableCursor
          }), jsx("div", {
            className: classes$D.measureLog,
            ref: this.logRef
          }), indigoVerification && jsx("div", {
            className: classes$D.spinnerOverlay,
            children: jsx(LoadingCircles, {})
          })]
        }), jsx(InfoPanel$1, _objectSpread$C(_objectSpread$C({}, this.state), this.props)), jsx(FGContextMenu, {})]
      }));
    }
  }]);
  return StructEditor;
}(Component);

var _path, _path2, _path3, _path4, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 22,
    height: 24,
    viewBox: "0 0 22 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "transparent",
    d: "M0 0h21.503v24H0z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M13.507 18.936l-2.04-1.92c-.7-.659-1.403-1.317-2.108-1.983v3.097c0 .43.003.86.007 1.289 0 .049-.007.09-.007.126v2.04c0 .834 0 1.557.003 2.02l.278.163c.719.3 1.434.307 2.151.033l4.264-2.469c-.358-.326-1.395-1.31-2.548-2.396zM6.159 19.39v-1.091L6.163 2.23v-.002L1.26 5.059C.421 5.647.002 6.482.002 7.553c0 2.944.006 5.888-.002 8.831-.003 1.08.398 1.913 1.212 2.517l4.946 2.856v-2.318-.05z",
    fill: "#676767"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M18.642 4.137l1.672.966c.785.58 1.187 1.385 1.188 2.41v8.974c0 1-.385 1.79-1.133 2.367l-1.423.822h-.004c-.097-.097-6.384-6.375-6.513-6.386.044-.044.56-.582 1.278-1.33L20.3 5.097l-1.658-.96z",
    fill: "url(#logo_svg__paint0_linear_5175_84899)"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    d: "M17.335 3.383L11.849.216c-.718-.29-1.455-.29-2.219.011l-.27.139s0 10.346.041 11.106c.341-.346 7.808-7.96 7.934-8.09z",
    fill: "url(#logo_svg__paint1_linear_5175_84899)"
  })), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "logo_svg__paint0_linear_5175_84899",
    x1: 19.854,
    y1: 4.363,
    x2: 11.579,
    y2: 13.111,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#3BC2D7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.74,
    stopColor: "#1D9DB1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "logo_svg__paint1_linear_5175_84899",
    x1: 19.854,
    y1: 4.363,
    x2: 11.579,
    y2: 13.111,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#3BC2D7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.74,
    stopColor: "#1D9DB1"
  })))));
}

var classes$B = {"button-common-styles":"About-module_button-common-styles__XmSbT","scrollbar":"About-module_scrollbar__4-AeI","dialog_body":"About-module_dialog_body__ebQu-","about":"About-module_about__ZVesh","body":"About-module_body__8VOc3","versionName":"About-module_versionName__1gqJr","firstline":"About-module_firstline__h5XMW","links":"About-module_links__sMpyx","infoLinks":"About-module_infoLinks__4-Tot","indigoVersion":"About-module_indigoVersion__WKFlu","headerContent":"About-module_headerContent__YclOx","title":"About-module_title__k-6Zg","indigoFirstLine":"About-module_indigoFirstLine__-86rb","okButton":"About-module_okButton__FMcEk"};

function AboutDialog(props) {
  var indigoInfo = props.indigoVersion && props.indigoVersion.split('.r');
  return jsxs(Dialog, {
    className: "".concat(classes$B.about, " ").concat(classes$B.dialog_body),
    params: props,
    buttons: [jsx("button", {
      onClick: props.onOk,
      className: classes$B.okButton,
      children: "Ok"
    }, "ok")],
    children: [jsx("div", {
      className: classes$B.headerContent,
      children: jsxs("a", {
        href: props.overviewLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [jsx(SvgLogo, {}), jsx("span", {
          className: classes$B.title,
          children: "Ketcher"
        })]
      })
    }), jsx("div", {
      className: classes$B.body,
      children: jsx("div", {
        className: classes$B.verionsInfo,
        children: jsxs("dl", {
          className: classes$B.ketcherVersionInfo,
          children: [jsx("dt", {
            children: jsxs("a", {
              href: props.overviewLink,
              target: "_blank",
              rel: "noopener noreferrer",
              children: ["Version ", props.version]
            })
          }), jsxs("dd", {
            children: ["Build at ", jsx("time", {
              children: props.date
            })]
          }), jsxs("div", {
            className: classes$B.infoLinks,
            children: [jsx("dt", {
              children: jsx("a", {
                href: props.feedbackLink,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Feedback"
              })
            }), jsx("dt", {
              children: jsx("a", {
                href: props.lifeScienciesLink,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Epam Life Sciencies"
              })
            })]
          }), jsx("br", {}), jsxs("div", {
            "class": classes$B.indigoVersion,
            children: [jsxs("a", {
              href: "http://lifescience.opensource.epam.com/indigo/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [' ', "Indigo Toolkit"]
            }), props.indigoMachine && jsx("div", {
              children: props.indigoMachine
            })]
          }), jsx("div", {
            children: props.indigoVersion ? jsxs(Fragment$2, {
              children: [jsxs("dd", {
                children: ["Version ", indigoInfo[0]]
              }), indigoInfo[1] && jsxs("dd", {
                children: ["Build ", indigoInfo[1]]
              })]
            }) : jsx("p", {
              children: "Standalone"
            })
          })]
        })
      })
    })]
  });
}
var mapStateToProps$f = function mapStateToProps(state) {
  return {
    date: state.options.app.buildDate.replace('T', '; '),
    indigoVersion: state.options.app.indigoVersion,
    indigoMachine: state.options.app.indigoMachine,
    feedbackLink: 'http://lifescience.opensource.epam.com/ketcher/#feedback',
    overviewLink: 'https://lifescience.opensource.epam.com/ketcher/index.html',
    lifeScienciesLink: 'http://lifescience.opensource.epam.com/',
    version: state.options.app.version
  };
};
var mapDispatchToProps$c = function mapDispatchToProps(dispatch) {
  return {
    onOk: function onOk(_result) {
      dispatch({
        type: 'MODAL_CLOSE'
      });
    }
  };
};
var About = connect(mapStateToProps$f, mapDispatchToProps$c)(AboutDialog);

var _templateObject$1;
var ErrorMessage = styled(Popover)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  & .MuiPopover-paper {\n    padding: 0 8px;\n    box-shadow: 4px 0px, 2px rgba(0, 0, 0, 0.25);\n    font-size: 12px;\n    max-width: 160px;\n  }\n"])));
var ErrorPopover = function ErrorPopover(_ref) {
  var error = _ref.error,
      anchorEl = _ref.anchorEl,
      handleClose = _ref.handleClose;
  return jsx(ErrorMessage, {
    id: "form-error",
    open: true,
    anchorEl: anchorEl,
    disableAutoFocus: true,
    sx: {
      pointerEvents: 'none'
    },
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    children: jsx(Fragment, {
      children: jsx("p", {
        children: error
      })
    })
  });
};

var classes$A = {"fieldSetLabel":"input-module_fieldSetLabel__DxKa5","input":"input-module_input__WzHgL","checkbox":"input-module_checkbox__CowSc","radioButton":"input-module_radioButton__2eHO0","slider":"input-module_slider__-Xsc0","select":"input-module_select__GhgBs","genericInput":"input-module_genericInput__XdZ2R"};

var _excluded$p = ["schema", "value", "onChange", "type", "isFocused"],
    _excluded2$4 = ["schema", "value", "onChange"],
    _excluded3$1 = ["schema", "value", "onChange"],
    _excluded4$1 = ["schema", "value", "selected", "onSelect", "type", "checked"],
    _excluded5$1 = ["value", "onChange", "name"],
    _excluded6 = ["children", "onChange", "style"],
    _excluded7 = ["children", "onChange"];
function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ownKeys$B(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$B(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$B(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$B(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function GenericInput(_ref) {
  _ref.schema;
      var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$isFocused = _ref.isFocused,
      isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused,
      props = _objectWithoutProperties(_ref, _excluded$p);
  var inputRef = useRef(null);
  useEffect(function () {
    if (inputRef.current && isFocused) inputRef.current.focus();
  }, [inputRef, isFocused]);
  return jsxs(Fragment, {
    children: [jsx("input", _objectSpread$B({
      type: type,
      value: value,
      onInput: onChange,
      onChange: onChange,
      className: clsx(classes$A.input, classes$A.genericInput),
      ref: inputRef
    }, props)), type === 'checkbox' && jsx("span", {
      className: classes$A.checkbox
    }), type === 'radio' && jsx("span", {
      className: classes$A.radioButton
    })]
  });
}
GenericInput.val = function (ev, schema) {
  var input = ev.target;
  var isNumber = input.type === 'number' || input.type === 'range' || schema && (schema.type === 'number' || schema.type === 'integer');
  var value = isNumber ? input.value.replace(/,/g, '.') : input.value;
  return isNumber && !isNaN(value - 0) ? value - 0 : value;
};
function TextArea(_ref2) {
  _ref2.schema;
      var value = _ref2.value,
      onChange = _ref2.onChange,
      rest = _objectWithoutProperties(_ref2, _excluded2$4);
  return jsx("textarea", _objectSpread$B({
    value: value,
    onInput: onChange
  }, rest));
}
TextArea.val = function (ev) {
  return ev.target.value;
};
function CheckBox(_ref3) {
  _ref3.schema;
      var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? '' : _ref3$value,
      onChange = _ref3.onChange,
      rest = _objectWithoutProperties(_ref3, _excluded3$1);
  return jsxs("div", {
    className: classes$A.fieldSetItem,
    children: [jsx("input", _objectSpread$B({
      type: "checkbox",
      checked: value,
      onClick: onChange,
      onChange: onChange,
      className: classes$A.input
    }, rest)), jsx("span", {
      className: classes$A.checkbox
    })]
  });
}
CheckBox.val = function (ev) {
  ev.stopPropagation();
  return !!ev.target.checked;
};
function Select$1(_ref4) {
  var schema = _ref4.schema,
      value = _ref4.value,
      name = _ref4.name,
      onSelect = _ref4.onSelect,
      className = _ref4.className,
      _ref4$multiple = _ref4.multiple,
      multiple = _ref4$multiple === void 0 ? false : _ref4$multiple;
  return jsx("select", {
    onChange: onSelect,
    value: value,
    name: name,
    multiple: multiple,
    className: clsx(classes$A.select, className),
    children: enumSchema(schema, function (title, val) {
      return jsx("option", {
        value: val,
        children: title
      }, val);
    })
  });
}
Select$1.val = function (ev, schema) {
  var select = ev.target;
  if (!select.multiple) return enumSchema(schema, select.selectedIndex);
  return [].reduce.call(select.options, function (res, o, i) {
    return !o.selected ? res : [enumSchema(schema, i)].concat(_toConsumableArray(res));
  }, []);
};
function FieldSet(_ref5) {
  var schema = _ref5.schema,
      value = _ref5.value,
      selected = _ref5.selected,
      onSelect = _ref5.onSelect,
      _ref5$type = _ref5.type,
      type = _ref5$type === void 0 ? 'radio' : _ref5$type,
      checked = _ref5.checked,
      rest = _objectWithoutProperties(_ref5, _excluded4$1);
  return jsx("fieldset", {
    onClick: onSelect,
    children: enumSchema(schema, function (title, val) {
      return jsx("li", {
        className: classes$A.fieldSetItem,
        children: jsxs("label", {
          className: classes$A.fieldSetLabel,
          children: [jsx("input", _objectSpread$B({
            type: type,
            defaultChecked: type === 'radio' ? selected(val, checked) : selected(val, value),
            value: _typeof(val) !== 'object' && val,
            className: classes$A.input
          }, rest)), type === 'checkbox' && jsx("span", {
            className: classes$A.checkbox
          }), type === 'radio' && jsx("span", {
            className: classes$A.radioButton
          }), title]
        })
      }, title);
    })
  });
}
FieldSet.val = function (ev, schema) {
  var input = ev.target;
  if (ev.target.tagName !== 'INPUT') {
    ev.stopPropagation();
    return undefined;
  }
  var fieldset = input.parentNode.parentNode.parentNode;
  var result = [].reduce.call(fieldset.querySelectorAll('input'), function (res, inp, i) {
    return !inp.checked ? res : [enumSchema(schema, i)].concat(_toConsumableArray(res));
  }, []);
  return input.type === 'radio' ? result[0] : result;
};
function Slider(_ref6) {
  var value = _ref6.value,
      onChange = _ref6.onChange,
      name = _ref6.name,
      rest = _objectWithoutProperties(_ref6, _excluded5$1);
  return jsxs("div", {
    className: classes$A.slider,
    children: [jsx("input", _objectSpread$B({
      type: "checkbox",
      checked: value,
      onClick: onChange,
      onChange: onChange,
      name: name
    }, rest)), jsx("span", {})]
  }, name);
}
Slider.val = function (ev) {
  ev.stopPropagation();
  return !!ev.target.checked;
};
function enumSchema(schema, cbOrIndex) {
  var isTypeValue = Array.isArray(schema);
  if (!isTypeValue && schema.items) schema = schema.items;
  if (typeof cbOrIndex === 'function') {
    return (isTypeValue ? schema : schema["enum"]).map(function (item, i) {
      var title = isTypeValue ? item.title : schema.enumNames && schema.enumNames[i];
      return cbOrIndex(title !== undefined ? title : item, item && item.value !== undefined ? item.value : item);
    });
  }
  if (!isTypeValue) return schema["enum"][cbOrIndex];
  var res = schema[cbOrIndex];
  return res.value !== undefined ? res.value : res;
}
function inputCtrl(component, schema, _onChange) {
  var props = {};
  if (schema) {
    if (schema.type === 'number' || schema.type === 'integer') props = {
      type: 'text'
    };
  }
  return _objectSpread$B({
    onChange: function onChange(ev) {
      var val = !component.val ? ev : component.val(ev, schema);
      _onChange(val);
    }
  }, props);
}
function singleSelectCtrl(component, schema, onChange) {
  return {
    selected: function selected(testVal, value) {
      return value === testVal;
    },
    onSelect: function onSelect(ev) {
      var val = !component.val ? ev : component.val(ev, schema);
      if (val !== undefined) onChange(val);
    }
  };
}
function multipleSelectCtrl(component, schema, onChange) {
  return {
    multiple: true,
    selected: function selected(testVal, values) {
      return values && values.indexOf(testVal) >= 0;
    },
    onSelect: function onSelect(ev, values) {
      if (component.val) {
        var val = component.val(ev, schema);
        if (val !== undefined) onChange(val);
      } else {
        var i = values ? values.indexOf(ev) : -1;
        if (i < 0) onChange(values ? [ev].concat(_toConsumableArray(values)) : [ev]);else onChange([].concat(_toConsumableArray(values.slice(0, i)), _toConsumableArray(values.slice(i + 1))));
      }
    }
  };
}
function ctrlMap(component, _ref7) {
  var schema = _ref7.schema,
      multiple = _ref7.multiple,
      onChange = _ref7.onChange;
  if (!schema || !schema["enum"] && !schema.items && !Array.isArray(schema) || schema.type === 'string') return inputCtrl(component, schema, onChange);
  if (multiple || schema.type === 'array') return multipleSelectCtrl(component, schema, onChange);
  return singleSelectCtrl(component, schema, onChange);
}
function componentMap(_ref8) {
  var schema = _ref8.schema,
      type = _ref8.type,
      multiple = _ref8.multiple;
  if ((schema === null || schema === void 0 ? void 0 : schema.type) === 'boolean' && (schema === null || schema === void 0 ? void 0 : schema.description) === 'slider') {
    return Slider;
  }
  if (!schema || !schema["enum"] && !schema.items && !Array.isArray(schema)) {
    if (type === 'checkbox' || schema && schema.type === 'boolean') {
      return CheckBox;
    }
    return type === 'textarea' ? TextArea : GenericInput;
  }
  if (multiple || schema.type === 'array') return type === 'checkbox' ? FieldSet : Select$1;
  return type === 'radio' ? FieldSet : Select$1;
}
function shallowCompare(a, b) {
  for (var key in a) {
    if (!(key in b)) return true;
  }
  for (var _key in b) {
    if (a[_key] !== b[_key]) return true;
  }
  return false;
}
var Input = function (_Component) {
  _inherits(Input, _Component);
  var _super = _createSuper$8(Input);
  function Input() {
    _classCallCheck(this, Input);
    return _super.apply(this, arguments);
  }
  _createClass(Input, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref9) {
      _ref9.children;
          _ref9.onChange;
          _ref9.style;
          var nextProps = _objectWithoutProperties(_ref9, _excluded6);
      var oldProps = omit(this.props, ['children', 'onChange', 'style']);
      return shallowCompare(oldProps, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var component = this.props.component;
      this.component = component || componentMap(this.props);
      this.ctrl = ctrlMap(this.component, this.props);
      var _this$props = this.props;
          _this$props.children;
          _this$props.onChange;
          var props = _objectWithoutProperties(_this$props, _excluded7);
      var Component = this.component;
      return jsx(Component, _objectSpread$B(_objectSpread$B({}, this.ctrl), props));
    }
  }]);
  return Input;
}(Component);

var ChevronIcon = function ChevronIcon(_ref) {
  var className = _ref.className;
  return jsx(Icon, {
    name: "chevron",
    className: clsx(className, selectClasses.chevronIcon)
  });
};
var Select = function Select(_ref2) {
  var _currentValue$value;
  var className = _ref2.className,
      value = _ref2.value,
      onChange = _ref2.onChange,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
      disabled = _ref2.disabled,
      options = _ref2.options;
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];
  useEffect(function () {
    var option;
    if (options) {
      option = options.find(function (option) {
        return option.value === value;
      });
    }
    return setCurrentValue(option);
  }, [options, value]);
  var handleChange = function handleChange(event) {
    onChange(event.target.value);
  };
  return jsx(MuiSelect, {
    className: clsx(selectClasses.selectContainer, className),
    value: (_currentValue$value = currentValue === null || currentValue === void 0 ? void 0 : currentValue.value) !== null && _currentValue$value !== void 0 ? _currentValue$value : '',
    onChange: handleChange,
    multiple: multiple,
    disabled: disabled,
    MenuProps: {
      className: selectClasses.dropdownList
    },
    IconComponent: ChevronIcon,
    children: options && options.map(function (option) {
      return jsx(MenuItem$1, {
        value: option.value,
        disableRipple: true,
        children: option.label
      }, option.value);
    })
  });
};

var classes$z = {"button-common-styles":"form-module_button-common-styles__BvKSn","scrollbar":"form-module_scrollbar__MgLtc","dataError":"form-module_dataError__IXK1h","inputWrapper":"form-module_inputWrapper__sIDHH"};

function fileOpener(server) {
  return new Promise(function (resolve, reject) {
    if (global.FileReader) {
      resolve(throughFileReader);
    } else if (global.ActiveXObject) {
      try {
        var fso = new ActiveXObject('Scripting.FileSystemObject');
        resolve(function (file) {
          return Promise.resolve(throughFileSystemObject(fso, file));
        });
      } catch (e) {
        reject(e);
      }
    } else if (server) {
      resolve(server.then(function () {
        throw Error("Server doesn't still support echo method");
      }));
    } else {
      reject(new Error('Your browser does not support opening files locally'));
    }
  });
}
function throughFileReader(file) {
  var isCDX = file.name.endsWith('cdx');
  return new Promise(function (resolve, reject) {
    var rd = new FileReader();
    rd.onload = function () {
      var content = isCDX ? rd.result.slice(37) : rd.result;
      if (file.msClose) file.msClose();
      resolve(content);
    };
    rd.onerror = function (event) {
      reject(event);
    };
    isCDX ? rd.readAsDataURL(file) : rd.readAsText(file, 'UTF-8');
  });
}
function throughFileSystemObject(fso, file) {
  var fd = fso.OpenTextFile(file.name, 1);
  var content = fd.ReadAll();
  fd.Close();
  return content;
}

var GREEK_SIMBOLS = {
  Alpha: 'A',
  alpha: '??',
  Beta: 'B',
  beta: '??',
  Gamma: '??',
  gamma: '??'
};
var greekRe = new RegExp('\\b' + Object.keys(GREEK_SIMBOLS).join('\\b|\\b') + '\\b', 'g');
function greekify(str) {
  return str.replace(greekRe, function (sym) {
    return GREEK_SIMBOLS[sym];
  });
}
function filterLib(lib, filter$1) {
  var trimmedFilter = filter$1.trim();
  var re = new RegExp(escapeRegExp(greekify(trimmedFilter)), 'i');
  return flow(filter(function (item) {
    return !trimmedFilter || re.test(greekify(item.struct.name)) || re.test(greekify(item.props.group));
  }), reduce(function (res, item) {
    if (!res[item.props.group]) res[item.props.group] = [item];else res[item.props.group].push(item);
    return res;
  }, {}))(lib);
}
function filterFGLib(lib, filter$1) {
  var trimmedFilter = filter$1.trim();
  var re = new RegExp(escapeRegExp(greekify(trimmedFilter)), 'i');
  var searchFunction = function searchFunction(item) {
    var fields = [item.struct.name, item.props.abbreviation, item.props.name].filter(Boolean);
    return fields.some(function (field) {
      return re.test(greekify(field));
    });
  };
  return flow(filter(function (item) {
    return !trimmedFilter || searchFunction(item);
  }), reduce(function (res, item) {
    if (!res[item.props.group]) res[item.props.group] = [item];else res[item.props.group].push(item);
    return res;
  }, {}))(lib);
}
var getSelectOptionsFromSchema = function getSelectOptionsFromSchema(schema) {
  return schema["enum"].reduce(function (options, value, index) {
    var _schema$enumNames$ind, _schema$enumNames;
    options.push({
      value: value,
      label: (_schema$enumNames$ind = schema === null || schema === void 0 ? void 0 : (_schema$enumNames = schema.enumNames) === null || _schema$enumNames === void 0 ? void 0 : _schema$enumNames[index]) !== null && _schema$enumNames$ind !== void 0 ? _schema$enumNames$ind : value
    });
    return options;
  }, []);
};

var _excluded$o = ["schema", "result", "customValid"],
    _excluded2$3 = ["labelPos", "title", "children"],
    _excluded3 = ["name", "onChange", "component", "labelPos", "className"],
    _excluded4 = ["dataError"],
    _excluded5 = ["title", "name", "schema"];
function ownKeys$A(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$A(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$A(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$A(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Form = function (_Component) {
  _inherits(Form, _Component);
  var _super = _createSuper$7(Form);
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props);
    var _this$props = _this.props,
        onUpdate = _this$props.onUpdate,
        schema = _this$props.schema,
        init = _this$props.init;
    _this.schema = propSchema(schema, props);
    if (init) {
      var _this$schema$serializ = _this.schema.serialize(init),
          valid = _this$schema$serializ.valid,
          errors = _this$schema$serializ.errors;
      var errs = getErrorsObj(errors);
      var initialState = _objectSpread$A(_objectSpread$A({}, init), {}, {
        init: true
      });
      onUpdate(initialState, valid, errs);
    }
    return _this;
  }
  _createClass(Form, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          schema = _this$props2.schema,
          result = _this$props2.result;
          _this$props2.customValid;
          var rest = _objectWithoutProperties(_this$props2, _excluded$o);
      if (schema.key && schema.key !== prevProps.schema.key) {
        this.schema = propSchema(schema, rest);
        this.schema.serialize(result);
        this.updateState(result);
      }
    }
  }, {
    key: "updateState",
    value: function updateState(newState) {
      var onUpdate = this.props.onUpdate;
      var _this$schema$serializ2 = this.schema.serialize(newState),
          instance = _this$schema$serializ2.instance,
          valid = _this$schema$serializ2.valid,
          errors = _this$schema$serializ2.errors;
      var errs = getErrorsObj(errors);
      onUpdate(instance, valid, errs);
    }
  }, {
    key: "field",
    value: function field(name, _onChange) {
      var _this2 = this;
      var _this$props3 = this.props,
          result = _this$props3.result,
          errors = _this$props3.errors;
      var value = result[name];
      return {
        dataError: errors && errors[name],
        value: value,
        onChange: function onChange(val) {
          var newState = Object.assign({}, _this2.props.result, _defineProperty({}, name, val));
          _this2.updateState(newState);
          if (_onChange) _onChange(val);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          schema = _this$props4.schema,
          children = _this$props4.children;
      return jsx("form", {
        children: jsx(formContext.Provider, {
          value: {
            schema: schema,
            stateStore: this
          },
          children: children
        })
      });
    }
  }]);
  return Form;
}(Component);
var Form$1 = connect(null, function (dispatch) {
  return {
    onUpdate: function onUpdate(result, valid, errors) {
      dispatch(updateFormState({
        result: result,
        valid: valid,
        errors: errors
      }));
    }
  };
})(Form);
function Label(_ref) {
  var labelPos = _ref.labelPos,
      title = _ref.title,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded2$3);
  return jsxs("label", _objectSpread$A(_objectSpread$A({}, props), {}, {
    children: [title && labelPos !== 'after' ? jsx("span", {
      children: title
    }) : '', children, title && labelPos === 'after' ? jsx("span", {
      children: title
    }) : '']
  }));
}
function Field(props) {
  var name = props.name,
      onChange = props.onChange,
      component = props.component,
      labelPos = props.labelPos,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded3);
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];
  var handlePopoverOpen = useCallback(function (event) {
    setAnchorEl(event.currentTarget);
  }, []);
  var handlePopoverClose = useCallback(function () {
    setAnchorEl(null);
  }, []);
  var _useFormContext = useFormContext(),
      schema = _useFormContext.schema,
      stateStore = _useFormContext.stateStore;
  var desc = rest.schema || schema.properties[name];
  var _stateStore$field = stateStore.field(name, onChange),
      dataError = _stateStore$field.dataError,
      fieldOpts = _objectWithoutProperties(_stateStore$field, _excluded4);
  var Component = component;
  var formField = component ? jsx(Component, _objectSpread$A(_objectSpread$A({
    name: name,
    schema: desc
  }, fieldOpts), rest)) : jsx(Input, _objectSpread$A(_objectSpread$A({
    name: name,
    schema: desc
  }, fieldOpts), rest));
  if (labelPos === false) return formField;
  return jsxs(Label, {
    className: clsx(_defineProperty({}, classes$z.dataError, dataError), className),
    error: dataError,
    title: rest.title || desc.title,
    labelPos: labelPos,
    children: [jsx("span", {
      className: classes$z.inputWrapper,
      onMouseEnter: handlePopoverOpen,
      onMouseLeave: handlePopoverClose,
      children: formField
    }), dataError && anchorEl && jsx(ErrorPopover, {
      anchorEl: anchorEl,
      open: !!anchorEl,
      error: dataError,
      onClose: handlePopoverClose
    })]
  });
}
var SelectOneOf = function SelectOneOf(props) {
  var title = props.title,
      name = props.name,
      schema = props.schema,
      prop = _objectWithoutProperties(props, _excluded5);
  var selectDesc = {
    title: title,
    "enum": [],
    enumNames: []
  };
  Object.keys(schema).forEach(function (item) {
    selectDesc["enum"].push(item);
    selectDesc.enumNames.push(schema[item].title || item);
  });
  return jsx(Field, _objectSpread$A(_objectSpread$A({
    name: name,
    options: getSelectOptionsFromSchema(selectDesc),
    title: title
  }, prop), {}, {
    component: Select
  }));
};
function propSchema(schema, _ref2) {
  var customValid = _ref2.customValid,
      _ref2$serialize = _ref2.serialize,
      _serialize = _ref2$serialize === void 0 ? {} : _ref2$serialize,
      _ref2$deserialize = _ref2.deserialize,
      _deserialize = _ref2$deserialize === void 0 ? {} : _ref2$deserialize;
  var ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strictSchema: false
  });
  if (customValid) {
    schema = Object.assign({}, schema);
    schema.properties = Object.keys(customValid).reduce(function (res, prop) {
      ajv.addFormat(customValid[prop].name, customValid[prop]);
      res[prop] = _objectSpread$A({
        format: prop
      }, res[prop]);
      return res;
    }, schema.properties);
  }
  var validate = ajv.compile(schema);
  return {
    key: schema.key || '',
    serialize: function serialize(inst) {
      validate(inst);
      return {
        instance: serializeRewrite(_serialize, inst, schema),
        valid: validate(inst),
        errors: validate.errors || []
      };
    },
    deserialize: function deserialize(inst) {
      validate(inst);
      return deserializeRewrite(_deserialize, inst);
    }
  };
}
function serializeRewrite(serializeMap, instance, schema) {
  var res = {};
  if (_typeof(instance) !== 'object' || !schema.properties) {
    return instance !== undefined ? instance : schema["default"];
  }
  Object.keys(schema.properties).forEach(function (p) {
    if (p in instance) res[p] = instance[serializeMap[p]] || instance[p];
  });
  return res;
}
function deserializeRewrite(deserializeMap, instance) {
  return instance;
}
function getInvalidMessage(item) {
  if (!item.parentSchema.invalidMessage) return item.message;
  return typeof item.parentSchema.invalidMessage === 'function' ? item.parentSchema.invalidMessage(item.data) : item.parentSchema.invalidMessage;
}
function getErrorsObj(errors) {
  var errs = {};
  var field;
  errors.forEach(function (item) {
    field = item.instancePath.slice(1);
    if (!errs[field]) errs[field] = getInvalidMessage(item);
  });
  return errs;
}

var classes$y = {"colorPickerInput":"ColorPicker-module_colorPickerInput__voi2r","selectedInput":"ColorPicker-module_selectedInput__Ykcjd","colorPickerWrap":"ColorPicker-module_colorPickerWrap__IAQVo","withPalette":"ColorPicker-module_withPalette__gTwNu","colorPicker":"ColorPicker-module_colorPicker__Uz3PM","colorPickerBtn":"ColorPicker-module_colorPickerBtn__nr6ph","colorPickerPreview":"ColorPicker-module_colorPickerPreview__-Rf-i","colorPickerOverlay":"ColorPicker-module_colorPickerOverlay__WzC-w","colorContainer":"ColorPicker-module_colorContainer__ib5up","hex":"ColorPicker-module_hex__mE9my","presetColors":"ColorPicker-module_presetColors__J-ysq","chooseColor":"ColorPicker-module_chooseColor__fdzt8","clicked":"ColorPicker-module_clicked__8BNoN","expandIcon":"ColorPicker-module_expandIcon__oH4ka","turnedIcon":"ColorPicker-module_turnedIcon__-zaq-","colorPickerWrapper":"ColorPicker-module_colorPickerWrapper__GJm87"};

var presetColors = ['#FF4545', '#FFAD31', '#68D442', '#3ACACC', '#4434FF', '#9C9C9C', '#000000'];
var ColorPicker = function ColorPicker(props) {
  var _clsx, _clsx2;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];
  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPaletteOpen = _useState4[0],
      setIsPaletteOpen = _useState4[1];
  var onChange = props.onChange,
      value = props.value;
  var handleChange = useCallback(function (color) {
    onChange(color);
  }, [onChange]);
  var throttle = useCallback(function (func, limit) {
    var inThrottle;
    return function (e) {
      if (!inThrottle) {
        func(e);
        inThrottle = true;
        setTimeout(function () {
          return inThrottle = false;
        }, limit);
      }
    };
  }, []);
  var handleClick = useCallback(throttle(function (e) {
    e.preventDefault();
    setIsOpen(function (prev) {
      return !prev;
    });
    setIsPaletteOpen(false);
  }, 200), []);
  var handlePaletteOpen = function handlePaletteOpen() {
    setIsPaletteOpen(true);
  };
  var handleColorChange = function handleColorChange(color) {
    handleChange(color);
  };
  var handleBlur = function handleBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      handleClick(e);
    }
  };
  return jsxs("div", {
    className: classes$y.colorPickerWrapper,
    "data-testid": "color-picker-field",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    children: [jsxs("div", {
      className: clsx((_clsx = {}, _defineProperty(_clsx, classes$y.colorPickerInput, true), _defineProperty(_clsx, classes$y.selectedInput, isOpen), _clsx)),
      onClick: handleClick,
      children: [jsx("div", {
        className: classes$y.colorPickerPreview,
        "data-testid": "color-picker-preview",
        style: {
          backgroundColor: value
        }
      }), jsx(Icon, {
        className: clsx((_clsx2 = {}, _defineProperty(_clsx2, classes$y.expandIcon, true), _defineProperty(_clsx2, classes$y.turnedIcon, !isOpen), _clsx2)),
        name: "chevron"
      })]
    }), isOpen && jsxs("div", {
      className: clsx(classes$y.colorPickerWrap, isPaletteOpen && classes$y.withPalette),
      onBlur: handleBlur,
      "data-testid": "color-picker-preset",
      children: [jsxs("div", {
        className: classes$y.presetColors,
        children: [jsx("button", {
          className: clsx(classes$y.chooseColor, isPaletteOpen && classes$y.clicked),
          onClick: handlePaletteOpen,
          autoFocus: true,
          "data-testid": "color-picker-btn"
        }), presetColors.map(function (color) {
          return jsx("button", {
            onClick: function onClick() {
              return handleColorChange(color);
            },
            style: {
              backgroundColor: color
            },
            className: classes$y.presetColor
          }, color);
        })]
      }), isPaletteOpen && jsxs("div", {
        className: classes$y.colorPicker,
        children: [jsx(HexColorPicker, {
          color: value,
          onChange: handleChange
        }), jsxs("div", {
          className: classes$y.colorContainer,
          children: [jsx("span", {
            className: classes$y.hex,
            children: "HEX"
          }), jsx(HexColorInput, {
            "data-testid": "color-picker-input",
            color: value,
            onChange: handleChange
          })]
        })]
      })]
    })]
  });
};

var styles$a = {"measureInput":"measure-input-module_measureInput__uZQ-j","select":"measure-input-module_select__1ZFmv"};

var _excluded$n = ["schema", "value", "onChange", "name"];
function ownKeys$z(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$z(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$z(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$z(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var selectOptions$1 = getSelectOptionsFromSchema({
  "enum": ['cm', 'px', 'pt', 'inch']
});
var MeasureInput = function MeasureInput(_ref) {
  var schema = _ref.schema,
      value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      rest = _objectWithoutProperties(_ref, _excluded$n);
  var _useState = useState('px'),
      _useState2 = _slicedToArray(_useState, 2),
      measure = _useState2[0],
      setMeasure = _useState2[1];
  var _useState3 = useState(value || schema["default"]),
      _useState4 = _slicedToArray(_useState3, 2),
      cust = _useState4[0],
      setCust = _useState4[1];
  useEffect(function () {
    if (measure === 'px' && (cust === null || cust === void 0 ? void 0 : cust.toFixed()) - 0 !== value) {
      setMeasure('px');
      setCust(value);
    }
  }, []);
  var handleChange = function handleChange(value) {
    var convValue = convertValue(value, measure, 'px');
    setCust(value);
    onChange(convValue);
  };
  var handleMeasChange = function handleMeasChange(m) {
    setCust(function (prev) {
      convertValue(prev, measure, m);
    });
    setMeasure(m);
  };
  var calcValue = function calcValue() {
    var newValue = convertValue(value, 'px', measure);
    setCust(newValue);
  };
  useEffect(function () {
    calcValue();
  }, [value, measure, calcValue]);
  var desc = schema || schema.properties[name];
  return jsxs("div", _objectSpread$z(_objectSpread$z({
    className: styles$a.measureInput
  }, rest), {}, {
    children: [jsx("span", {
      children: rest.title || desc.title
    }), jsxs("div", {
      style: {
        display: 'flex'
      },
      children: [jsx(Input, {
        schema: schema,
        step: measure === 'px' || measure === 'pt' ? '1' : '0.001',
        value: cust,
        onChange: handleChange
      }), jsx(Select, {
        onChange: handleMeasChange,
        options: selectOptions$1,
        value: measure,
        className: styles$a.select
      })]
    })]
  }));
};
var measureMap = {
  px: 1,
  cm: 37.795278,
  pt: 1.333333,
  inch: 96
};
function convertValue(value, measureFrom, measureTo) {
  if (!value && value !== 0 || isNaN(value)) return null;
  return measureTo === 'px' || measureTo === 'pt' ? (value * measureMap[measureFrom] / measureMap[measureTo]).toFixed() - 0 : (value * measureMap[measureFrom] / measureMap[measureTo]).toFixed(3) - 0;
}

var classes$x = {"button-common-styles":"buttons-module_button-common-styles__qWDOz","scrollbar":"buttons-module_scrollbar__SpaVV","openButton":"buttons-module_openButton__wErm9"};

var _excluded$m = ["children", "type", "server", "className"];
function ownKeys$y(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$y(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$y(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$y(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OpenButton = function (_Component) {
  _inherits(OpenButton, _Component);
  var _super = _createSuper$6(OpenButton);
  function OpenButton(props) {
    var _this;
    _classCallCheck(this, OpenButton);
    _this = _super.call(this, props);
    _this.state = {};
    if (props.server) {
      fileOpener(props.server).then(function (opener) {
        _this.setState({
          opener: opener
        });
      });
    }
    return _this;
  }
  _createClass(OpenButton, [{
    key: "open",
    value: function open(ev) {
      var files = ev.target.files;
      var noop = function noop() {
        return null;
      };
      var _this$props = this.props,
          _this$props$onLoad = _this$props.onLoad,
          onLoad = _this$props$onLoad === void 0 ? noop : _this$props$onLoad,
          _this$props$onError = _this$props.onError,
          onError = _this$props$onError === void 0 ? noop : _this$props$onError;
      if (this.state.opener && files.length) this.state.opener(files[0]).then(onLoad, onError);else if (files.length) onLoad(files[0]);
      ev.target.value = null;
      ev.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type;
          _this$props2.server;
          var className = _this$props2.className,
          props = _objectWithoutProperties(_this$props2, _excluded$m);
      return jsxs("button", _objectSpread$y(_objectSpread$y({
        onClick: function onClick() {
          return _this2.btn.click();
        },
        className: clsx(classes$x.openButton, className)
      }, props), {}, {
        children: [jsx("input", {
          onChange: function onChange(ev) {
            return _this2.open(ev);
          },
          accept: type,
          type: "file",
          ref: function ref(el) {
            _this2.btn = el;
          }
        }), children]
      }));
    }
  }]);
  return OpenButton;
}(Component);

function ownKeys$x(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$x(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$x(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$x(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SaveButton$1 = function SaveButton(props) {
  var noop = function noop() {
    return null;
  };
  var server = props.server,
      _props$filename = props.filename,
      filename = _props$filename === void 0 ? 'unnamed' : _props$filename,
      outputFormat = props.outputFormat,
      data = props.data,
      type = props.type,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'saveFile' : _props$mode,
      _props$onSave = props.onSave,
      onSave = _props$onSave === void 0 ? noop : _props$onSave,
      _props$onError = props.onError,
      onError = _props$onError === void 0 ? noop : _props$onError,
      className = props.className;
  var _useAppContext = useAppContext(),
      getKetcherInstance = _useAppContext.getKetcherInstance;
  var save = function save(event) {
    event.preventDefault();
    switch (mode) {
      case 'saveImage':
        saveImage();
        break;
      case 'saveFile':
      default:
        saveFile();
    }
  };
  var saveFile = function saveFile() {
    if (data) {
      try {
        fileSaver(server).then(function (saver) {
          saver(data, filename, type);
          onSave();
        });
      } catch (error) {
        onError(error);
      }
    }
  };
  var saveImage = function saveImage() {
    var ketcherInstance = getKetcherInstance();
    ketcherInstance.generateImage(data, {
      outputFormat: outputFormat
    }).then(function (blob) {
      saveAs(blob, "".concat(filename, ".").concat(outputFormat));
      onSave();
    })["catch"](function (error) {
      onError(error);
    });
  };
  return jsx("button", _objectSpread$x(_objectSpread$x({
    className: className,
    onClick: function onClick(event) {
      save(event);
    }
  }, props), {}, {
    children: props.children
  }));
};
var fileSaver = function fileSaver(server) {
  return new Promise(function (resolve, reject) {
    if (global.Blob && saveAs) {
      resolve(function (data, fn, type) {
        var blob = new Blob([data], {
          type: type
        });
        saveAs(blob, fn);
      });
    } else if (server) {
      resolve(server.then(function () {
        throw Error("Server doesn't still support echo method");
      }));
    } else {
      reject(new Error('Your browser does not support opening files locally'));
    }
  });
};

var classes$w = {"button-common-styles":"Accordion-module_button-common-styles__enTfZ","scrollbar":"Accordion-module_scrollbar__lJTa6","accordionWrapper":"Accordion-module_accordionWrapper__RKk00","expandIcon":"Accordion-module_expandIcon__ncUKv","turnedIcon":"Accordion-module_turnedIcon__v1sCA","accordionSummaryWrapper":"Accordion-module_accordionSummaryWrapper__roIRd","accordionSummary":"Accordion-module_accordionSummary__1Gq0d","accordionDetailsWrapper":"Accordion-module_accordionDetailsWrapper__fnSnc","hiddenAccordion":"Accordion-module_hiddenAccordion__WZFcJ","accordionDetails":"Accordion-module_accordionDetails__g2RM0","groupIcon":"Accordion-module_groupIcon__1g1lx","groupLabel":"Accordion-module_groupLabel__23y4U","changeMarker":"Accordion-module_changeMarker__UPtGx"};

var Accordion = function Accordion(_ref) {
  var tabs = _ref.tabs,
      className = _ref.className,
      changedGroups = _ref.changedGroups;
  var _useState = useState(['General']),
      _useState2 = _slicedToArray(_useState, 2),
      expandedAccordions = _useState2[0],
      setExpandedAccordions = _useState2[1];
  var handleAccordionChange = function handleAccordionChange(accordion) {
    return function () {
      var isExpand = !expandedAccordions.includes(accordion);
      setExpandedAccordions(isExpand ? [].concat(_toConsumableArray(expandedAccordions), [accordion]) : _toConsumableArray(expandedAccordions).filter(function (expandedAccordion) {
        return expandedAccordion !== accordion;
      }));
    };
  };
  return jsx("div", {
    className: clsx(classes$w.accordionWrapper, className),
    children: tabs.map(function (_ref2) {
      var _clsx, _clsx2;
      var label = _ref2.label,
          content = _ref2.content,
          key = _ref2.key;
      var shouldGroupBeRended = expandedAccordions.includes(label);
      return jsxs("div", {
        children: [jsx("div", {
          onClick: handleAccordionChange(label),
          className: classes$w.accordionSummaryWrapper,
          children: jsxs("div", {
            className: classes$w.accordionSummary,
            children: [jsx(Icon, {
              className: clsx((_clsx = {}, _defineProperty(_clsx, classes$w.expandIcon, true), _defineProperty(_clsx, classes$w.turnedIcon, !shouldGroupBeRended), _clsx)),
              name: "chevron"
            }), jsxs("div", {
              className: classes$w.groupLabel,
              children: [jsx(Icon, {
                name: "elements-group",
                className: classes$w.groupIcon
              }), jsx("span", {
                children: label
              })]
            }), changedGroups.has(label) && jsx("span", {
              className: classes$w.changeMarker
            })]
          })
        }), jsx("div", {
          className: clsx((_clsx2 = {}, _defineProperty(_clsx2, classes$w.accordionDetailsWrapper, true), _defineProperty(_clsx2, classes$w.hiddenAccordion, !shouldGroupBeRended), _clsx2)),
          children: jsx("div", {
            className: classes$w.accordionDetails,
            children: content
          })
        })]
      }, key);
    })
  });
};

var commonFonts = ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Georgia', 'Impact', 'Charcoal', 'Lucida Console', 'Monaco', 'Palatino Linotype', 'Book Antiqua', 'Palatino', 'Tahoma', 'Geneva', 'Times New Roman', 'Times', 'Verdana', 'Symbol', 'MS Serif', 'MS Sans Serif', 'New York', 'Droid Sans', 'Droid Serif', 'Droid Sans Mono', 'Roboto'];
function checkInSystem() {
  var availableFontsPromises = commonFonts.map(function (fontName) {
    var observer = new FontFaceObserver(fontName);
    return observer.check().then(function () {
      return fontName;
    }, function () {
      return null;
    });
  });
  return Promise.all(availableFontsPromises);
}
function SystemFonts(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      availableFonts = _useState2[0],
      setAvailableFonts = _useState2[1];
  var value = props.value,
      onChange = props.onChange;
  var onChangeCallback = useCallback(function (value) {
    onChange(value);
  }, [onChange]);
  useEffect(function () {
    var mounted = true;
    checkInSystem().then(function (results) {
      var fonts = results.filter(function (i) {
        return i !== null;
      }).map(function (font) {
        return {
          value: "30px ".concat(font),
          label: font
        };
      });
      if (mounted) {
        setAvailableFonts(fonts);
      }
    });
    return function () {
      return mounted = false;
    };
  }, []);
  return jsx(Select, {
    onChange: onChangeCallback,
    value: value,
    disabled: availableFonts === null,
    options: availableFonts
  });
}

var classes$v = {"headerContent":"Settings-module_headerContent__wBYFf","title":"Settings-module_title__a6mod","button":"Settings-module_button__VZ2w7","accordion":"Settings-module_accordion__1uSYy","settings":"Settings-module_settings__Z5btc"};

var fieldGroups = {
  resetToSelect: 'General',
  rotationStep: 'General',
  showValenceWarnings: 'General',
  atomColoring: 'General',
  font: 'General',
  fontsz: 'General',
  fontszsub: 'General',
  showStereoFlags: 'Stereochemistry',
  stereoLabelStyle: 'Stereochemistry',
  colorOfAbsoluteCenters: 'Stereochemistry',
  colorOfAndCenters: 'Stereochemistry',
  colorOfOrCenters: 'Stereochemistry',
  colorStereogenicCenters: 'Stereochemistry',
  autoFadeOfStereoLabels: 'Stereochemistry',
  absFlagLabel: 'Stereochemistry',
  andFlagLabel: 'Stereochemistry',
  orFlagLabel: 'Stereochemistry',
  mixedFlagLabel: 'Stereochemistry',
  carbonExplicitly: 'Atoms',
  showCharge: 'Atoms',
  showValence: 'Atoms',
  showHydrogenLabels: 'Atoms',
  aromaticCircle: 'Bonds',
  doubleBondWidth: 'Bonds',
  bondThickness: 'Bonds',
  stereoBondWidth: 'Bonds',
  'smart-layout': 'Server',
  'ignore-stereochemistry-errors': 'Server',
  'mass-skip-error-on-pseudoatoms': 'Server',
  'gross-formula-add-rsites': 'Server',
  'gross-formula-add-isotopes': 'Server',
  miewMode: '3D Viewer',
  miewTheme: '3D Viewer',
  miewAtomLabel: '3D Viewer',
  showAtomIds: 'Options for Debugging',
  showBondIds: 'Options for Debugging',
  showHalfBondIds: 'Options for Debugging',
  showLoopIds: 'Options for Debugging'
};

var _excluded$l = ["initState", "formState", "server", "onOpenFile", "onReset", "appOpts"];
function ownKeys$w(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$w(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$w(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$w(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var defaultSettings = getDefaultOptions();
var HeaderContent$1 = function HeaderContent(_ref) {
  var server = _ref.server,
      onOpenFile = _ref.onOpenFile,
      onReset = _ref.onReset,
      formState = _ref.formState,
      initState = _ref.initState;
  var getIsResetDisabled = function getIsResetDisabled() {
    if (formState.result.init) return isEqual$1(defaultSettings, initState);else return isEqual$1(defaultSettings, formState.result);
  };
  return jsxs("div", {
    className: classes$v.headerContent,
    children: [jsx("span", {
      className: classes$v.title,
      children: " Settings"
    }), jsx(OpenButton, {
      title: "Open from File",
      server: server,
      onLoad: onOpenFile,
      className: classes$v.button,
      children: jsx(Icon, {
        name: "open-1"
      })
    }, "settings"), jsx(SaveButton$1, {
      title: "Save to File",
      data: JSON.stringify(formState.result),
      filename: "ketcher-settings",
      className: classes$v.button,
      children: jsx(Icon, {
        name: "save-1"
      })
    }, "ketcher-settings"), jsx("button", {
      title: "Reset",
      onClick: onReset,
      className: classes$v.button,
      disabled: getIsResetDisabled(),
      children: jsx(Icon, {
        name: "reset"
      })
    }, "settings-button")]
  });
};
var settingsProps = optionsSchema.properties;
var SettingsDialog = function SettingsDialog(props) {
  var initState = props.initState,
      formState = props.formState,
      server = props.server,
      onOpenFile = props.onOpenFile,
      onReset = props.onReset,
      appOpts = props.appOpts,
      prop = _objectWithoutProperties(props, _excluded$l);
  var _useState = useState(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      changedGroups = _useState2[0],
      setChangedGroups = _useState2[1];
  useEffect(function () {
    var changed = new Set();
    for (var key in initState) {
      if (initState[key] !== formState.result[key]) {
        var group = fieldGroups[key];
        changed.add(group);
      }
    }
    setChangedGroups(changed);
  }, [initState, formState.result]);
  var generalTab = {
    key: 'general',
    label: 'General',
    content: jsxs("fieldset", {
      children: [jsx(Field, {
        name: "resetToSelect",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.resetToSelect)
      }), jsx(Field, {
        name: "rotationStep"
      }), jsx(Field, {
        name: "showValenceWarnings"
      }), jsx(Field, {
        name: "atomColoring"
      }), jsx(Field, {
        name: "font",
        component: SystemFonts
      }), jsx(Field, {
        name: "fontsz",
        component: MeasureInput,
        labelPos: false
      }), jsx(Field, {
        name: "fontszsub",
        component: MeasureInput,
        labelPos: false
      })]
    })
  };
  var stereoTab = {
    key: 'stereo',
    label: 'Stereochemistry',
    content: jsxs("fieldset", {
      children: [jsx(Field, {
        name: "showStereoFlags"
      }), jsx(Field, {
        name: "stereoLabelStyle",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.stereoLabelStyle)
      }), jsx(Field, {
        name: "colorOfAbsoluteCenters",
        component: ColorPicker
      }), jsx(Field, {
        name: "colorOfAndCenters",
        component: ColorPicker
      }), jsx(Field, {
        name: "colorOfOrCenters",
        component: ColorPicker
      }), jsx(Field, {
        name: "colorStereogenicCenters",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.colorStereogenicCenters)
      }), jsx(Field, {
        name: "autoFadeOfStereoLabels"
      }), jsx(Field, {
        name: "absFlagLabel"
      }), jsx(Field, {
        name: "andFlagLabel"
      }), jsx(Field, {
        name: "orFlagLabel"
      }), jsx(Field, {
        name: "mixedFlagLabel"
      })]
    })
  };
  var atomsTab = {
    key: 'atoms',
    label: 'Atoms',
    content: jsxs("fieldset", {
      children: [jsx(Field, {
        name: "carbonExplicitly"
      }), jsx(Field, {
        name: "showCharge"
      }), jsx(Field, {
        name: "showValence"
      }), jsx(Field, {
        name: "showHydrogenLabels",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.showHydrogenLabels)
      })]
    })
  };
  var bondsTab = {
    key: 'bonds',
    label: 'Bonds',
    content: jsxs("fieldset", {
      children: [jsx(Field, {
        name: "aromaticCircle"
      }), jsx(Field, {
        name: "doubleBondWidth",
        component: MeasureInput,
        labelPos: false
      }), jsx(Field, {
        name: "bondThickness",
        component: MeasureInput,
        labelPos: false
      }), jsx(Field, {
        name: "stereoBondWidth",
        component: MeasureInput,
        labelPos: false
      })]
    })
  };
  var serverTab = {
    key: 'server',
    label: 'Server',
    content: jsxs("fieldset", {
      disabled: !appOpts.server,
      children: [jsx(Field, {
        name: "smart-layout"
      }), jsx(Field, {
        name: "ignore-stereochemistry-errors"
      }), jsx(Field, {
        name: "mass-skip-error-on-pseudoatoms"
      }), jsx(Field, {
        name: "gross-formula-add-rsites"
      }), jsx(Field, {
        name: "gross-formula-add-isotopes"
      })]
    })
  };
  var threeDViewerTab = {
    key: '3dviewer',
    label: '3D Viewer',
    content:
    jsxs("fieldset", {
      className: classes$v.viewer,
      children: [jsx(Field, {
        name: "miewMode",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.miewMode)
      }), jsx(Field, {
        name: "miewTheme",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.miewTheme)
      }), jsx(Field, {
        name: "miewAtomLabel",
        component: Select,
        options: getSelectOptionsFromSchema(settingsProps === null || settingsProps === void 0 ? void 0 : settingsProps.miewAtomLabel)
      })]
    })
  };
  var debuggingTab = {
    key: 'debugging',
    label: 'Options for Debugging',
    content: jsxs("fieldset", {
      children: [jsx(Field, {
        name: "showAtomIds"
      }), jsx(Field, {
        name: "showBondIds"
      }), jsx(Field, {
        name: "showHalfBondIds"
      }), jsx(Field, {
        name: "showLoopIds"
      })]
    })
  };
  var tabs = [generalTab, stereoTab, atomsTab, bondsTab, serverTab, threeDViewerTab, debuggingTab];
  return jsx(Dialog, {
    className: classes$v.settings,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: prop,
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    needMargin: false,
    headerContent: jsx(HeaderContent$1, {
      server: server,
      onOpenFile: onOpenFile,
      onReset: onReset,
      formState: formState,
      initState: initState
    }),
    children: jsx(Form$1, _objectSpread$w(_objectSpread$w({
      schema: optionsSchema,
      init: initState
    }, formState), {}, {
      children: jsx(Accordion, {
        tabs: tabs,
        className: classes$v.accordion,
        changedGroups: changedGroups
      })
    }))
  });
};
var mapStateToProps$e = function mapStateToProps(state) {
  return {
    server: state.options.app.server ? state.server : null,
    appOpts: state.options.app,
    initState: state.options.settings,
    formState: state.modal.form
  };
};
var mapDispatchToProps$b = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onOpenFile: function onOpenFile(newOpts) {
      try {
        dispatch(updateFormState({
          result: JSON.parse(newOpts)
        }));
      } catch (ex) {
      }
    },
    onReset: function onReset() {
      return dispatch(setDefaultSettings());
    },
    onOk: function onOk(res) {
      dispatch(saveSettings(res));
      ownProps.onOk(res);
    }
  };
};
var Settings = connect(mapStateToProps$e, mapDispatchToProps$b)(SettingsDialog);

function ErrorsCheck(props) {
  var moleculeErrors = props.moleculeErrors,
      checkSchema = props.checkSchema;
  var moleculeErrorsTypes = Object.keys(moleculeErrors);
  var getOptionName = function getOptionName(option) {
    var items = checkSchema.properties.checkOptions.items;
    var nameIndex = items["enum"].indexOf(option);
    return items.enumNames[nameIndex];
  };
  return jsx(Fragment, {
    children: jsx("fieldset", {
      children: moleculeErrorsTypes.length === 0 ? jsx("div", {
        children: jsx("dd", {
          children: "No errors detected"
        })
      }) : moleculeErrorsTypes.map(function (type, key) {
        return jsxs("div", {
          children: [jsxs("dt", {
            children: [getOptionName(type), " warning:"]
          }), jsx("dd", {
            children: moleculeErrors[type]
          })]
        }, key);
      })
    })
  });
}

var style = {"button-common-styles":"Check-module_button-common-styles__WPocW","scrollbar":"Check-module_scrollbar__3jzOc","dialog_body":"Check-module_dialog_body__wHZMM","buttons":"Check-module_buttons__cjuqO","buttonSecondary":"Check-module_buttonSecondary__2482r","buttonPrimary":"Check-module_buttonPrimary__1h5p1","buttonsRight":"Check-module_buttonsRight__L1v9A","wrapper":"Check-module_wrapper__27SOp","checkInfo":"Check-module_checkInfo__Iqq6t","settings":"Check-module_settings__knuQF","warnings":"Check-module_warnings__b4ozd","centeredContainer":"Check-module_centeredContainer__t61r8","warningsContainer":"Check-module_warningsContainer__vSbyK","checkBoxesDisabled":"Check-module_checkBoxesDisabled__EAdRo"};

var _excluded$k = ["formState", "checkState", "onCheck", "onApply", "onCancel"];
function ownKeys$v(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$v(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$v(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$v(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var checkSchema = {
  title: 'Check',
  type: 'object',
  properties: {
    checkOptions: {
      title: 'Settings',
      type: 'array',
      items: {
        type: 'string',
        "enum": ['valence', 'radicals', 'pseudoatoms', 'stereo', 'query', 'overlapping_atoms', 'overlapping_bonds', 'rgroups', 'chiral', '3d', 'chiral_flag'],
        enumNames: ['Valence', 'Radical', 'Pseudoatom', 'Stereochemistry', 'Query', 'Overlapping Atoms', 'Overlapping Bonds', 'R-Groups', 'Chirality', '3D Structure', 'Chiral flag']
      }
    }
  }
};
var getFormattedDateString = function getFormattedDateString(date) {
  var getFixedString = function getFixedString(num) {
    return (num + '').padStart(2, 0);
  };
  return "".concat(getFixedString(date.getHours()), ":").concat(getFixedString(date.getMinutes()), ":").concat(getFixedString(date.getSeconds()), "  ").concat(getFixedString(date.getDate()), ".").concat(getFixedString(date.getMonth() + 1), ".").concat(getFixedString(date.getFullYear()));
};
var FooterContent$4 = function FooterContent(_ref) {
  var handleCheck = _ref.handleCheck,
      handleApply = _ref.handleApply,
      onCancel = _ref.onCancel,
      isStuctureChecking = _ref.isStuctureChecking,
      isCheckedWithNewSettings = _ref.isCheckedWithNewSettings;
  return jsxs("div", {
    className: style.buttons,
    children: [jsx("div", {
      children: jsx("button", {
        className: isCheckedWithNewSettings ? style.buttonSecondary : style.buttonPrimary,
        onClick: handleCheck,
        disabled: !isStuctureChecking,
        children: "Check"
      })
    }), jsxs("div", {
      className: style.buttonsRight,
      children: [jsx("button", {
        className: style.buttonSecondary,
        onClick: onCancel,
        children: "Cancel"
      }), jsx("button", {
        className: style.buttonPrimary,
        onClick: handleApply,
        disabled: !isStuctureChecking,
        children: "Apply"
      })]
    })]
  });
};
function CheckDialog(props) {
  var formState = props.formState,
      checkState = props.checkState,
      onCheck = props.onCheck,
      onApply = props.onApply,
      onCancel = props.onCancel,
      restProps = _objectWithoutProperties(props, _excluded$k);
  var _formState$result = formState.result,
      result = _formState$result === void 0 ? checkState : _formState$result,
      moleculeErrors = formState.moleculeErrors;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isStuctureChecking = _useState2[0],
      setIsStructureChecking = _useState2[1];
  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      lastCheckDate = _useState4[0],
      setLastCheckDate = _useState4[1];
  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isCheckedWithNewSettings = _useState6[0],
      setIsCheckedWithNewSettings = _useState6[1];
  var handleApply = function handleApply() {
    return onApply(result);
  };
  var handleCheck = function handleCheck() {
    setIsStructureChecking(false);
    onCheck(result.checkOptions).then(function () {
      setIsStructureChecking(true);
      setLastCheckDate(new Date());
      setIsCheckedWithNewSettings(true);
    });
  };
  var handleSettingsChange = function handleSettingsChange() {
    return setIsCheckedWithNewSettings(false);
  };
  useEffect(function () {
    handleCheck();
  }, []);
  return jsx(Dialog, {
    title: "Structure Check",
    className: style.dialog_body,
    params: _objectSpread$v(_objectSpread$v({}, restProps), {}, {
      onCancel: onCancel
    }),
    buttons: [],
    footerContent: jsx(FooterContent$4, {
      handleCheck: handleCheck,
      handleApply: handleApply,
      onCancel: onCancel,
      isStuctureChecking: isStuctureChecking,
      isCheckedWithNewSettings: isCheckedWithNewSettings
    }),
    withDivider: true,
    children: jsx(Form$1, _objectSpread$v(_objectSpread$v({
      schema: checkSchema,
      init: checkState
    }, formState), {}, {
      result: result,
      children: jsxs("div", {
        className: style.wrapper,
        children: [jsxs("div", {
          className: style.settings,
          children: [jsx("label", {
            children: "Settings"
          }), jsx("div", {
            className: !isStuctureChecking ? style.checkBoxesDisabled : '',
            children: jsx(Field, {
              name: "checkOptions",
              labelPos: false,
              multiple: true,
              type: "checkbox",
              disabled: !isStuctureChecking,
              onChange: handleSettingsChange
            })
          })]
        }), jsxs("div", {
          className: style.checkInfo,
          children: [jsxs("span", {
            children: ["Last check:", ' ', lastCheckDate && getFormattedDateString(lastCheckDate)]
          }), jsx("div", {
            className: !Object.keys(moleculeErrors).length || !isStuctureChecking ? style.centeredContainer : style.warnings,
            children: isStuctureChecking ? jsx("div", {
              className: Object.keys(moleculeErrors).length ? style.warningsContainer : style.centeredContainer,
              children: jsx(ErrorsCheck, {
                moleculeErrors: moleculeErrors,
                checkSchema: checkSchema
              })
            }) : jsx(LoadingCircles, {})
          })]
        })]
      })
    }))
  });
}
var mapStateToProps$d = function mapStateToProps(state) {
  return {
    formState: state.modal.form,
    checkState: state.options.check
  };
};
var mapDispatchToProps$a = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCheck: function onCheck(opts) {
      return dispatch(check(opts))["catch"](ownProps.onCancel);
    },
    onApply: function onApply(res) {
      dispatch(checkOpts(res));
      ownProps.onOk(res);
    }
  };
};
var Check = connect(mapStateToProps$d, mapDispatchToProps$a)(CheckDialog);

var styles$9 = {"button-common-styles":"FormulaInput-module_button-common-styles__xQ8ZA","scrollbar":"FormulaInput-module_scrollbar__8TUkb","chem_input":"FormulaInput-module_chem_input__oprB3"};

var formulaRegexp = /\b(\d*)([A-Z][a-z]{0,3}#?)(\d*)\s*\b/g;
var errorRegexp = /error:.*/g;
function formulaInputMarkdown(contentData) {
  var content = contentData.content,
      contentEditable = contentData.contentEditable;
  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 8) {
      e.preventDefault();
      return false;
    }
  };
  return jsx("div", {
    className: styles$9.chem_input,
    onKeyPress: function onKeyPress(e) {
      return e.preventDefault();
    },
    onPaste: function onPaste(e) {
      return e.preventDefault();
    },
    onKeyDown: onKeyDown,
    contentEditable: contentEditable,
    suppressContentEditableWarning: true,
    children: content
  });
}
function FormulaInput(_ref) {
  var value = _ref.value,
      contentEditable = _ref.contentEditable;
  if (errorRegexp.test(value)) return formulaInputMarkdown(value);
  var content = [];
  var cnd;
  var pos = 0;
  while ((cnd = formulaRegexp.exec(value)) !== null) {
    if (cnd[1].length > 0) content.push( jsx("sup", {
      children: cnd[1]
    }, content.length));
    content.push(value.substring(pos, cnd.index) + cnd[2]);
    if (cnd[3].length > 0) content.push( jsx("sub", {
      children: cnd[3]
    }, content.length));
    pos = cnd.index + cnd[0].length;
  }
  if (pos === 0) content.push(value);else content.push(value.substring(pos, value.length));
  return formulaInputMarkdown({
    content: content,
    contentEditable: contentEditable
  });
}

function FrozenInput(_ref) {
  var value = _ref.value;
  return jsx("input", {
    type: "text",
    spellCheck: false,
    value: value,
    readOnly: true,
    onChange: function onChange(event) {
      return event.preventDefault();
    }
  });
}

var classes$u = {"button-common-styles":"Analyse-module_button-common-styles__8No07","scrollbar":"Analyse-module_scrollbar__UAaIN","analyse":"Analyse-module_analyse__MR-Tu","inputWrapper":"Analyse-module_inputWrapper__uR995","contentWrapper":"Analyse-module_contentWrapper__B4WCi","selectWrapper":"Analyse-module_selectWrapper__xEkKL","select":"Analyse-module_select__c6hFt"};

var _excluded$j = ["values", "round", "loading", "onAnalyse", "onChangeRound"];
function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function roundOff(value, round) {
  if (typeof value === 'number') return value.toFixed(round);
  return value.replace(/[0-9]*\.[0-9]+/g, function (str) {
    return (+str).toFixed(round);
  });
}
var selectOptions = getSelectOptionsFromSchema({
  "enum": range(0, 8)
});
var AnalyseDialog = function (_Component) {
  _inherits(AnalyseDialog, _Component);
  var _super = _createSuper$5(AnalyseDialog);
  function AnalyseDialog() {
    _classCallCheck(this, AnalyseDialog);
    return _super.apply(this, arguments);
  }
  _createClass(AnalyseDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onAnalyse();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          values = _this$props.values,
          round = _this$props.round,
          loading = _this$props.loading;
          _this$props.onAnalyse;
          var onChangeRound = _this$props.onChangeRound,
          props = _objectWithoutProperties(_this$props, _excluded$j);
      return jsx(Dialog, {
        title: "Calculated Values",
        className: classes$u.analyse,
        withDivider: true,
        needMargin: true,
        valid: function valid() {
          return true;
        },
        buttons: ['OK'],
        buttonsNameMap: {
          OK: 'Close'
        },
        params: props,
        children: jsx("ul", {
          children: [{
            name: 'Chemical Formula',
            key: 'gross',
            withSelector: false
          }, {
            name: 'Molecular Weight',
            key: 'molecular-weight',
            round: 'roundWeight',
            withSelector: true
          }, {
            name: 'Exact Mass',
            key: 'monoisotopic-mass',
            round: 'roundMass',
            withSelector: true
          }, {
            name: 'Elemental Analysis',
            key: 'mass-composition',
            round: 'roundElAnalysis',
            withSelector: false
          }].map(function (item) {
            return jsxs("li", {
              className: classes$u.contentWrapper,
              children: [jsxs("div", {
                className: classes$u.inputWrapper,
                children: [jsxs("label", {
                  children: [item.name, ":"]
                }), item.key === 'gross' ? jsx(FormulaInput, {
                  value: values && !loading ? values[item.key] : '',
                  contentEditable: false
                }) : item.key === 'mass-composition' ? jsx("textarea", {
                  readOnly: true,
                  value: values && !loading ? roundOff(values[item.key], round[item.round]) : 0
                }) : jsx(FrozenInput, {
                  value: values && !loading ? roundOff(values[item.key], round[item.round]) : 0
                })]
              }), item.withSelector ? jsxs("div", {
                className: classes$u.selectWrapper,
                children: [jsx("span", {
                  children: "Decimal places"
                }), jsx(Select, {
                  options: selectOptions,
                  value: round[item.round],
                  onChange: function onChange(val) {
                    return onChangeRound(item.round, val);
                  },
                  className: classes$u.select
                })]
              }) : null]
            }, item.key);
          })
        })
      });
    }
  }]);
  return AnalyseDialog;
}(Component);
_defineProperty(AnalyseDialog, "contextType", errorsContext);
var mapStateToProps$c = function mapStateToProps(state) {
  return {
    values: state.options.analyse.values,
    loading: state.options.analyse.loading,
    round: {
      roundWeight: state.options.analyse.roundWeight,
      roundMass: state.options.analyse.roundMass,
      roundElAnalysis: state.options.analyse.roundElAnalysis
    }
  };
};
var mapDispatchToProps$9 = function mapDispatchToProps(dispatch) {
  return {
    onAnalyse: function onAnalyse() {
      return dispatch(analyse());
    },
    onChangeRound: function onChangeRound(roundName, val) {
      return dispatch(changeRound(roundName, val));
    }
  };
};
var Analyse = connect(mapStateToProps$c, mapDispatchToProps$9)(AnalyseDialog);

var classes$t = {"button-common-styles":"Recognize-module_button-common-styles__B04E6","scrollbar":"Recognize-module_scrollbar__rohcP","recognize":"Recognize-module_recognize__66jG2","footerContent":"Recognize-module_footerContent__0MAC7","imagoVersion":"Recognize-module_imagoVersion__nBIj6","openButton":"Recognize-module_openButton__H-j5I","imagesContainer":"Recognize-module_imagesContainer__rXWWk","topBody":"Recognize-module_topBody__ZCCjN","output":"Recognize-module_output__WgRnP","picture":"Recognize-module_picture__x2Y7S","filename":"Recognize-module_filename__-1HIU","messageContainer":"Recognize-module_messageContainer__tMvyb","primaryButton":"Recognize-module_primaryButton__rzm03","secondaryButton":"Recognize-module_secondaryButton__H1Q28","struct":"Recognize-module_struct__W55TL"};

var DialogActionButton = function DialogActionButton(_ref) {
  var clickHandler = _ref.clickHandler,
      label = _ref.label,
      title = _ref.title,
      styles = _ref.styles,
      disabled = _ref.disabled;
  return jsx("input", {
    type: "button",
    className: styles,
    value: label,
    title: title || label,
    disabled: disabled,
    onClick: clickHandler
  }, "Open");
};

var _excluded$i = ["file", "structStr", "fragment", "version", "imagoVersions", "onOk"],
    _excluded2$2 = ["onRecognize", "isFragment", "onImage", "onChangeImago"];
function ownKeys$u(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$u(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$u(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$u(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function isImage(file) {
  var _file$type;
  return file === null || file === void 0 ? void 0 : (_file$type = file.type) === null || _file$type === void 0 ? void 0 : _file$type.includes('image');
}
function FooterContent$3(_ref) {
  var onImage = _ref.onImage,
      structStr = _ref.structStr,
      openHandler = _ref.openHandler,
      copyHandler = _ref.copyHandler;
  return jsxs("div", {
    className: classes$t.footerContent,
    children: [jsxs(OpenButton, {
      onLoad: onImage,
      type: "image/*",
      className: classes$t.openButton,
      children: [jsx(Icon, {
        name: "open"
      }), jsx("span", {
        children: "Change image"
      })]
    }, "choose"), jsxs("div", {
      children: [jsx(DialogActionButton, {
        disabled: !structStr,
        clickHandler: openHandler,
        styles: classes$t.secondaryButton,
        label: "Open as new Project"
      }, "openButton"), jsx(DialogActionButton, {
        disabled: !structStr,
        clickHandler: copyHandler,
        styles: classes$t.primaryButton,
        label: "Add to Canvas",
        title: "Structure will be loaded as fragment and added to Clipboard"
      }, "copyButton")]
    })]
  });
}
function RecognizeDialog(prop) {
  var file = prop.file,
      structStr = prop.structStr,
      fragment = prop.fragment,
      version = prop.version,
      imagoVersions = prop.imagoVersions,
      onOk = prop.onOk,
      partProps = _objectWithoutProperties(prop, _excluded$i);
  var onRecognize = partProps.onRecognize;
      partProps.isFragment;
      var onImage = partProps.onImage,
      onChangeImago = partProps.onChangeImago,
      props = _objectWithoutProperties(partProps, _excluded2$2);
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      canPreviewImage = _useState2[0],
      setCanPreviewImage = _useState2[1];
  var _result = function result() {
    return structStr && !(structStr instanceof Promise) ? {
      structStr: structStr,
      fragment: fragment
    } : null;
  };
  useEffect(function () {
    onRecognize(file, version);
  }, [file, version]);
  var clearFile = useCallback(function () {
    onImage(null);
    return true;
  }, [onImage]);
  var copyHandler = function copyHandler() {
    onOk({
      structStr: structStr,
      fragment: true
    });
  };
  var openHandler = function openHandler() {
    onOk({
      structStr: structStr,
      fragment: false
    });
  };
  return jsxs(Dialog, {
    title: "Import Structure from Image",
    className: classes$t.recognize,
    params: _objectSpread$u(_objectSpread$u({}, props), {}, {
      onOk: onOk
    }),
    result: function result() {
      return _result();
    },
    withDivider: true,
    needMargin: false,
    footerContent: jsx(FooterContent$3, {
      onImage: onImage,
      openHandler: openHandler,
      structStr: structStr,
      copyHandler: copyHandler
    }),
    buttons: [],
    children: [jsxs("div", {
      className: classes$t.topBody,
      children: [jsxs("label", {
        className: classes$t.imagoVersion,
        children: ["Imago version", jsx(Input, {
          schema: {
            "enum": imagoVersions,
            enumNames: range(1, imagoVersions.length + 1).map(function (i) {
              return "Version ".concat(i);
            })
          },
          value: version,
          onChange: onChangeImago
        })]
      }), jsx("span", {
        children: "Original image"
      }), jsx("span", {
        children: "Recognized structure preview"
      })]
    }), jsxs("div", {
      className: classes$t.imagesContainer,
      children: [jsxs("div", {
        className: classes$t.picture,
        children: [file && isImage(file) && canPreviewImage && jsx("img", {
          alt: "",
          id: "pic",
          src: url(file) || '',
          onError: function onError() {
            setCanPreviewImage(false);
          }
        }), jsxs("span", {
          className: classes$t.filename,
          children: [" ", file ? file.name : null, " "]
        }), file && isImage(file) && !canPreviewImage && jsx("div", {
          className: classes$t.messageContainer,
          children: jsxs("p", {
            children: ["Preview of '", file.type, "' MIME type is not supported by current browser"]
          })
        }), (!file || !isImage(file) && clearFile()) && jsx("div", {
          className: classes$t.messageContainer,
          children: jsx("p", {
            children: "Please choose image"
          })
        })]
      }), jsx("div", {
        className: classes$t.output,
        children: structStr && (
        structStr instanceof Promise || typeof structStr !== 'string' ? jsx("div", {
          className: classes$t.messageContainer,
          children: jsx(LoadingCircles, {})
        }) : jsx(StructRender, {
          className: classes$t.struct,
          struct: structStr
        }))
      })]
    })]
  });
}
function url(file) {
  if (!file) return null;
  var URL = window.URL || window.webkitURL;
  return URL ? URL.createObjectURL(file) : 'No preview';
}
var mapStateToProps$b = function mapStateToProps(state) {
  return {
    imagoVersions: state.options.app.imagoVersions,
    file: state.options.recognize.file,
    structStr: state.options.recognize.structStr,
    fragment: state.options.recognize.fragment,
    version: state.options.recognize.version || state.options.app.imagoVersions[1]
  };
};
var mapDispatchToProps$8 = function mapDispatchToProps(dispatch) {
  return {
    isFragment: function isFragment(v) {
      return dispatch(shouldFragment(v));
    },
    onImage: function onImage(file) {
      return dispatch(changeImage(file));
    },
    onRecognize: function onRecognize(file, ver) {
      return dispatch(recognize(file, ver));
    },
    onChangeImago: function onChangeImago(ver) {
      return dispatch(changeVersion(ver));
    },
    onOk: function onOk(res) {
      dispatch(load(res.structStr, {
        rescale: true,
        fragment: res.fragment
      })
      );
    }
  };
};
var Recognize = connect(mapStateToProps$b, mapDispatchToProps$8)(RecognizeDialog);

var classes$s = {"button-common-styles":"Miew-module_button-common-styles__8FE-p","scrollbar":"Miew-module_scrollbar__ZMWH-","warning":"Miew-module_warning__IDl5F","applyButton":"Miew-module_applyButton__ZDE-i","miewDialog":"Miew-module_miewDialog__gHvYc","miewContainer":"Miew-module_miewContainer__2SNw3","miewDarkTheme":"Miew-module_miewDarkTheme__kMFzc"};

var _excluded$h = ["miewOpts", "server", "struct", "onExportCML", "miewTheme"];
var BACKGROUND_COLOR = {
  dark: '0x202020',
  light: '0xcccccc'
};
var MIEW_TX_TYPES = {
  no: null,
  bright: {
    colorer: 'EL'
  },
  blackAndWhite: {
    colorer: ['UN', {
      color: 0xffffff
    }],
    bg: '0x000'
  },
  black: {
    colorer: ['UN', {
      color: 0x000000
    }]
  }
};
var TXoptions = function TXoptions(userOpts) {
  var type = userOpts.miewAtomLabel;
  if (MIEW_TX_TYPES[type] === null) return null;
  return {
    colorer: MIEW_TX_TYPES[type].colorer,
    selector: 'not elem C',
    mode: ['TX', {
      bg: MIEW_TX_TYPES[type].bg || BACKGROUND_COLOR[userOpts.miewTheme],
      showBg: true,
      template: '{{elem}}'
    }]
  };
};
function createMiewOptions(userOpts) {
  var options = {
    settings: {
      bg: {
        color: Number(BACKGROUND_COLOR[userOpts.miewTheme])
      },
      autoPreset: false,
      editing: true,
      inversePanning: true
    },
    reps: [{
      mode: userOpts.miewMode
    }]
  };
  var textMode = TXoptions(userOpts);
  if (textMode) options.reps.push(textMode);
  return options;
}
var CHANGING_WARNING = 'Stereocenters can be changed after the strong 3D rotation';
var FooterContent$2 = function FooterContent() {
  return jsx("div", {
    className: classes$s.warning,
    children: CHANGING_WARNING
  });
};
var MiewDialog = function MiewDialog(_ref) {
  var miewOpts = _ref.miewOpts,
      server = _ref.server,
      struct = _ref.struct,
      onExportCML = _ref.onExportCML,
      _ref$miewTheme = _ref.miewTheme,
      miewTheme = _ref$miewTheme === void 0 ? 'light' : _ref$miewTheme,
      prop = _objectWithoutProperties(_ref, _excluded$h);
  var miewRef = useRef();
  var onMiewInit = useCallback(function (miew) {
    miewRef.current = miew;
    var factory = new FormatterFactory(server);
    var service = factory.create(SupportedFormat.cml);
    service.getStructureFromStructAsync(struct).then(function (res) {
      return miew.load(res, {
        sourceType: 'immediate',
        fileType: 'cml'
      });
    }).then(function () {
      return miew.setOptions(miewOpts);
    })["catch"](function (ex) {
      return (void 0);
    });
  }, [miewOpts, server, struct]);
  var exportCML = useCallback(function () {
    var _miewRef$current;
    var cmlStruct = (_miewRef$current = miewRef.current) === null || _miewRef$current === void 0 ? void 0 : _miewRef$current.exportCML();
    if (!cmlStruct) {
      return;
    }
    onExportCML(cmlStruct);
  }, [onExportCML, miewRef]);
  return jsx(Dialog, {
    title: "Miew",
    needMargin: false,
    params: prop,
    buttons: ['Cancel', jsx("button", {
      onClick: exportCML,
      className: classes$s.applyButton,
      children: "Apply"
    }, "apply")],
    footerContent: jsx(FooterContent$2, {}),
    className: classes$s.miewDialog,
    children: jsx("div", {
      children: jsx("div", {
        className: "".concat(classes$s.miewContainer, " ").concat(miewTheme === 'dark' ? classes$s.miewDarkTheme : ''),
        children: jsx(Viewer, {
          onInit: onMiewInit
        })
      })
    })
  });
};
var mapStateToProps$a = function mapStateToProps(state) {
  return {
    miewOpts: createMiewOptions(pick(MIEW_OPTIONS, state.options.settings)),
    server: state.options.app.server ? state.server : null,
    struct: state.editor.struct(),
    miewTheme: state.options.settings.miewTheme
  };
};
var mapDispatchToProps$7 = function mapDispatchToProps(dispatch) {
  return {
    onExportCML: function onExportCML(cmlStruct) {
      dispatch(load(cmlStruct));
    }
  };
};
var Miew = connect(mapStateToProps$a, mapDispatchToProps$7)(MiewDialog);

var ElementNumber = function ElementNumber(props) {
  var _Elements$get;
  var label = props.label;
  var value = ((_Elements$get = Elements.get(capitalize(label))) === null || _Elements$get === void 0 ? void 0 : _Elements$get.number) || '';
  return jsxs("label", {
    children: [jsx("span", {
      children: "Number"
    }), jsx("input", {
      type: "text",
      readOnly: true,
      value: value
    })]
  });
};

var classes$r = {"button-common-styles":"Atom-module_button-common-styles__ipWaI","scrollbar":"Atom-module_scrollbar__z5cVx","atomProps":"Atom-module_atomProps__pqBjY","accordionWrapper":"Atom-module_accordionWrapper__MSuU7","expandIcon":"Atom-module_expandIcon__mPszC","turnedIcon":"Atom-module_turnedIcon__0Kzwy","accordionSummaryWrapper":"Atom-module_accordionSummaryWrapper__MGqsq","accordionSummary":"Atom-module_accordionSummary__HMKzl","accordionDetailsWrapper":"Atom-module_accordionDetailsWrapper__p6EI7","hiddenAccordion":"Atom-module_hiddenAccordion__pDNdM","accordionDetails":"Atom-module_accordionDetails__-B3jK","checkbox":"Atom-module_checkbox__Vup40","reactionFlags":"Atom-module_reactionFlags__gdNb1","querySpecific":"Atom-module_querySpecific__7XxMr"};

var _excluded$g = ["formState", "stereoParity"];
function ownKeys$t(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$t(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$t(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$t(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var atomProps = atom.properties;
var Atom = function Atom(props) {
  var formState = props.formState;
      props.stereoParity;
      var rest = _objectWithoutProperties(props, _excluded$g);
  var _useState = useState(rest.label),
      _useState2 = _slicedToArray(_useState, 2),
      currentLabel = _useState2[0],
      setCurrentLabel = _useState2[1];
  var _useState3 = useState(['General']),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedAccordions = _useState4[0],
      setExpandedAccordions = _useState4[1];
  var handleAccordionChange = function handleAccordionChange(accordion) {
    return function () {
      var isExpand = !expandedAccordions.includes(accordion);
      setExpandedAccordions(isExpand ? [].concat(_toConsumableArray(expandedAccordions), [accordion]) : _toConsumableArray(expandedAccordions).filter(function (expandedAccordion) {
        return expandedAccordion !== accordion;
      }));
    };
  };
  var onLabelChangeCallback = useCallback(function (newValue) {
    setCurrentLabel(newValue);
  }, []);
  var itemGroups = [{
    groupName: 'General',
    component: jsxs("div", {
      children: [jsx(Field, {
        name: "label",
        onChange: onLabelChangeCallback,
        autoFocus: true
      }), jsx(ElementNumber, {
        label: currentLabel
      }), jsx(Field, {
        name: "alias"
      }), jsx(Field, {
        name: "charge",
        maxLength: "5"
      }), jsx(Field, {
        name: "isotope"
      }), jsx(Field, {
        name: "explicitValence",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.explicitValence)
      }), jsx(Field, {
        name: "radical",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.radical)
      })]
    })
  }, {
    groupName: 'Query specific',
    component: jsxs("div", {
      className: classes$r.querySpecific,
      children: [jsx(Field, {
        name: "ringBondCount",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.ringBondCount)
      }), jsx(Field, {
        name: "hCount",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.hCount)
      }), jsx(Field, {
        name: "substitutionCount",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.substitutionCount)
      }), jsx(Field, {
        name: "unsaturatedAtom",
        labelPos: "before",
        className: classes$r.checkbox
      })]
    })
  }, {
    groupName: 'Reaction flags',
    component: jsxs("div", {
      className: classes$r.reactionFlags,
      children: [jsx(Field, {
        name: "invRet",
        component: Select,
        options: getSelectOptionsFromSchema(atomProps.invRet)
      }), jsx(Field, {
        name: "exactChangeFlag",
        labelPos: "before",
        className: classes$r.checkbox
      })]
    })
  }];
  return jsx(Dialog, {
    title: "Atom Properties",
    className: classes$r.atomProps,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: rest,
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: jsx(Form$1, _objectSpread$t(_objectSpread$t({
      schema: atom,
      customValid: {
        label: function label(_label) {
          return atomValid(_label);
        },
        charge: function charge(_charge) {
          return chargeValid(_charge);
        }
      },
      init: rest
    }, formState), {}, {
      children: jsx("div", {
        className: classes$r.accordionWrapper,
        children: itemGroups.map(function (_ref) {
          var _clsx, _clsx2;
          var groupName = _ref.groupName,
              component = _ref.component;
          var shouldGroupBeRended = expandedAccordions.includes(groupName);
          return jsxs("div", {
            children: [jsx("div", {
              onClick: handleAccordionChange(groupName),
              className: classes$r.accordionSummaryWrapper,
              children: jsxs("div", {
                className: classes$r.accordionSummary,
                children: [jsx("span", {
                  children: groupName
                }), jsx(Icon, {
                  className: clsx((_clsx = {}, _defineProperty(_clsx, classes$r.expandIcon, true), _defineProperty(_clsx, classes$r.turnedIcon, !shouldGroupBeRended), _clsx)),
                  name: "chevron"
                })]
              })
            }), jsx("div", {
              className: clsx((_clsx2 = {}, _defineProperty(_clsx2, classes$r.accordionDetailsWrapper, true), _defineProperty(_clsx2, classes$r.hiddenAccordion, !shouldGroupBeRended), _clsx2)),
              children: jsx("div", {
                className: classes$r.accordionDetails,
                children: component
              })
            })]
          }, groupName);
        })
      })
    }))
  });
};
function atomValid(label) {
  return label && !!Elements.get(capitalize(label));
}
function chargeValid(charge) {
  var regex = new RegExp(atom.properties.charge.pattern);
  var result = regex.exec(charge);
  return result && (result[1] === '' || result[3] === '');
}

var mapStateToProps$9 = function mapStateToProps(state) {
  return {
    formState: state.modal.form
  };
};
var AtomContainer = connect(mapStateToProps$9)(Atom);

var classes$q = {"attachPoints":"Attach-module_attachPoints__5QEAv"};

var _excluded$f = ["formState"];
function ownKeys$s(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$s(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$s(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$s(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var AttachPoints = function AttachPoints(props) {
  var formState = props.formState,
      rest = _objectWithoutProperties(props, _excluded$f);
  return jsx(Dialog, {
    title: "Attachment Points",
    className: classes$q.attachPoints,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: rest,
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: jsxs(Form$1, _objectSpread$s(_objectSpread$s({
      schema: attachmentPoints,
      init: rest
    }, formState), {}, {
      children: [jsx(Field, {
        name: "primary"
      }), jsx(Field, {
        name: "secondary"
      })]
    }))
  });
};

var mapStateToProps$8 = function mapStateToProps(state) {
  return {
    formState: state.modal.form
  };
};
var AttachPointsContainer = connect(mapStateToProps$8)(AttachPoints);

var classes$p = {"automap":"Automap-module_automap__531ko"};

var _excluded$e = ["formState"];
function ownKeys$r(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$r(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$r(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$r(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var automapSchema = {
  title: 'Reaction Auto-Mapping',
  type: 'object',
  required: ['mode'],
  properties: {
    mode: {
      title: 'Mode',
      "enum": ['discard', 'keep', 'alter', 'clear'],
      enumNames: ['Discard', 'Keep', 'Alter', 'Clear'],
      "default": 'discard'
    }
  }
};
var Automap = function Automap(props) {
  var formState = props.formState,
      rest = _objectWithoutProperties(props, _excluded$e);
  return jsx(Dialog, {
    title: "Reaction Auto-Mapping",
    className: classes$p.automap,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: rest,
    withDivider: true,
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Apply'
    },
    children: jsx(Form$1, _objectSpread$r(_objectSpread$r({
      schema: automapSchema
    }, formState), {}, {
      children: jsx(Field, _objectSpread$r(_objectSpread$r({
        name: "mode",
        options: getSelectOptionsFromSchema(automapSchema.properties.mode)
      }, props), {}, {
        component: Select
      }))
    }))
  });
};

var mapStateToProps$7 = function mapStateToProps(state) {
  return {
    formState: state.modal.form
  };
};
var mapDispatchToProps$6 = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onOk: function onOk(result) {
      dispatch(automap(result));
      ownProps.onOk(result);
    }
  };
};
var AutomapContainer = connect(mapStateToProps$7, mapDispatchToProps$6)(Automap);

var classes$o = {"bond":"Bond-module_bond__EDfLY"};

var _excluded$d = ["formState"];
function ownKeys$q(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$q(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$q(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$q(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Bond = function Bond(props) {
  var formState = props.formState,
      rest = _objectWithoutProperties(props, _excluded$d);
  var bondProps = bond.properties;
  return jsx(Dialog, {
    title: "Bond Properties",
    className: classes$o.bond,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: rest,
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: jsxs(Form$1, _objectSpread$q(_objectSpread$q({
      schema: bond,
      init: rest
    }, formState), {}, {
      children: [jsx(Field, {
        name: "type",
        component: Select,
        options: getSelectOptionsFromSchema(bondProps.type)
      }), jsx(Field, {
        name: "topology",
        component: Select,
        options: getSelectOptionsFromSchema(bondProps.topology)
      }), jsx(Field, {
        name: "center",
        component: Select,
        options: getSelectOptionsFromSchema(bondProps.center)
      })]
    }))
  });
};

var mapStateToProps$6 = function mapStateToProps(state) {
  return {
    formState: state.modal.form
  };
};
var BondContainer = connect(mapStateToProps$6)(Bond);

var classes$n = {"field":"IfThenSelect-module_field__9YaPA"};

function ownKeys$p(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$p(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$p(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$p(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var IfThenSelect = function IfThenSelect(props) {
  var rgroupLabels = props.rgroupLabels,
      label = props.label,
      name = props.name;
  var _useFormContext = useFormContext(),
      schema = _useFormContext.schema;
  var desc = {
    title: schema.properties[name].title,
    "enum": [0],
    enumNames: ['Always']
  };
  rgroupLabels.forEach(function (rgroupLabel) {
    if (label !== rgroupLabel) {
      desc["enum"].push(rgroupLabel);
      desc.enumNames.push("IF R".concat(label, " THEN R").concat(rgroupLabel));
    }
  });
  return jsx(Field, _objectSpread$p(_objectSpread$p({
    schema: desc,
    className: classes$n.field
  }, props), {}, {
    component: Select,
    options: getSelectOptionsFromSchema(desc)
  }));
};

var classes$m = {"button-common-styles":"RgroupLogic-module_button-common-styles__P-ABP","scrollbar":"RgroupLogic-module_scrollbar__gDniy","rgroupLogic":"RgroupLogic-module_rgroupLogic__q4RTy","resth":"RgroupLogic-module_resth__RL2qE"};

var _excluded$c = ["formState", "label", "rgroupLabels"];
function ownKeys$o(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$o(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$o(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$o(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var RgroupLogic = function RgroupLogic(props) {
  var formState = props.formState,
      label = props.label,
      rgroupLabels = props.rgroupLabels,
      rest = _objectWithoutProperties(props, _excluded$c);
  return jsx(Dialog, {
    title: "R-Group Logic Condition",
    className: classes$m.rgroupLogic,
    result: function result() {
      return formState.result;
    },
    valid: function valid() {
      return formState.valid;
    },
    params: rest,
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: jsxs(Form$1, _objectSpread$o(_objectSpread$o({
      schema: rgroupLogic,
      customValid: {
        range: function range(r) {
          return rangeConv(r);
        }
      },
      init: rest
    }, formState), {}, {
      children: [jsx(Field, {
        name: "range"
      }), jsx(Field, {
        name: "resth",
        labelPos: "after",
        className: classes$m.resth
      }), jsx(IfThenSelect, {
        name: "ifthen",
        label: label,
        rgroupLabels: rgroupLabels
      })]
    }))
  });
};
function rangeConv(range) {
  var res = range.replace(/\s*/g, '').replace(/,+/g, ',').replace(/^,/, '').replace(/,$/, '');
  return res.split(',').every(function (s) {
    return s.match(/^[>,<=]?[0-9]+$/g) || s.match(/^[0-9]+-[0-9]+$/g);
  });
}

var mapStateToProps$5 = function mapStateToProps(state) {
  return {
    formState: state.modal.form
  };
};
var RgroupLogicContainer = connect(mapStateToProps$5)(RgroupLogic);

var classes$l = {"button-common-styles":"Open-module_button-common-styles__NBSQP","scrollbar":"Open-module_scrollbar__sRvYM","open":"Open-module_open__m8V9g","textareaEditor":"Open-module_textareaEditor__ZbEVj","footerContent":"Open-module_footerContent__Q0hTw","buttonsContainer":"Open-module_buttonsContainer__L1HqU","openButton":"Open-module_openButton__cj3oU","cancelButton":"Open-module_cancelButton__0TQzA","copyButton":"Open-module_copyButton__KlXKd"};

var styles$8 = {"analyzingFileWrapper":"AnalyzingFile-module_analyzingFileWrapper__j0Ltf","fileBox":"AnalyzingFile-module_fileBox__ywFIh"};

var ICON_NAME = 'file-thumbnail';
var AnalyzingFile = function AnalyzingFile(_ref) {
  var fileName = _ref.fileName;
  return jsxs("div", {
    className: styles$8.analyzingFileWrapper,
    children: [fileName && jsxs("div", {
      className: styles$8.fileBox,
      children: [jsx(Icon, {
        name: ICON_NAME
      }), jsx("p", {
        children: fileName
      })]
    }), jsx(LoadingCircles, {})]
  });
};

var styles$7 = {"optionsContainer":"OpenOptions-module_optionsContainer__-WqT8","dropContainer":"OpenOptions-module_dropContainer__PL6Tg","buttonLabelWrapper":"OpenOptions-module_buttonLabelWrapper__h2YsI","buttonLabel":"OpenOptions-module_buttonLabel__LiY--","textLabelWrapper":"OpenOptions-module_textLabelWrapper__Vx8NF","textLabel":"OpenOptions-module_textLabel__TlOfz","dropIconWrapper":"OpenOptions-module_dropIconWrapper__ibBQx"};

var styles$6 = {"isHovered":"FileDrop-module_isHovered__c-CDn","isDisabled":"FileDrop-module_isDisabled__Ejuyq"};

var _excluded$b = ["buttonLabel", "textLabel", "iconName", "disabled", "disabledText"];
function ownKeys$n(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$n(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$n(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FileDrop = function FileDrop(_ref) {
  var buttonLabel = _ref.buttonLabel,
      textLabel = _ref.textLabel,
      iconName = _ref.iconName,
      disabled = _ref.disabled,
      disabledText = _ref.disabledText,
      rest = _objectWithoutProperties(_ref, _excluded$b);
  var _useDropzone = useDropzone(_objectSpread$n({
    multiple: false,
    disabled: disabled
  }, rest)),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      open = _useDropzone.open;
  var getClassesString = useMemo(function () {
    var classes = [styles$7.dropContainer, isDragActive ? styles$6.isHovered : null, disabled ? styles$6.isDisabled : null];
    return classes.join(' ');
  }, [isDragActive]);
  return jsxs("div", _objectSpread$n(_objectSpread$n({
    onKeyDown: open
  }, getRootProps({
    className: getClassesString
  })), {}, {
    children: [jsx("input", _objectSpread$n({}, getInputProps())), jsx("div", {
      className: styles$7.dropIconWrapper,
      children: jsx(Icon, {
        name: iconName
      })
    }), disabled ? jsx("p", {
      className: styles$7.textLabel,
      children: disabledText
    }) : jsxs(Fragment, {
      children: [jsx("div", {
        className: styles$7.textLabelWrapper,
        children: jsx("p", {
          className: styles$7.textLabel,
          children: textLabel
        })
      }), jsx("div", {
        className: styles$7.buttonLabelWrapper,
        children: jsx("p", {
          className: styles$7.buttonLabel,
          children: buttonLabel
        })
      })]
    })]
  }));
};

var ICON_NAMES = {
  PASTE: 'open-window-paste-icon',
  FILE: 'open-window-upload-icon',
  IMAGE: 'image-frame'
};
var OpenOptions = function OpenOptions(_ref) {
  var selectClipboard = _ref.selectClipboard,
      fileLoadHandler = _ref.fileLoadHandler,
      imageLoadHandler = _ref.imageLoadHandler,
      isRecognizeDisabled = _ref.isRecognizeDisabled,
      errorHandler = _ref.errorHandler;
  return jsxs("div", {
    className: styles$7.optionsContainer,
    children: [jsxs("div", {
      onClick: selectClipboard,
      className: styles$7.dropContainer,
      children: [jsx("div", {
        className: styles$7.dropIconWrapper,
        children: jsx(Icon, {
          name: ICON_NAMES.PASTE
        })
      }), jsx("div", {
        className: styles$7.textLabelWrapper
      }), jsx("div", {
        className: styles$7.buttonLabelWrapper,
        children: jsx("p", {
          className: styles$7.buttonLabel,
          children: "Paste from clipboard"
        })
      })]
    }), jsx(FileDrop, {
      onDropAccepted: fileLoadHandler,
      onDropRejected: function onDropRejected(e) {
        return errorHandler("Unable to accept file(s). ".concat(e));
      },
      buttonLabel: "Open from file",
      textLabel: "or drag file here",
      iconName: ICON_NAMES.FILE
    }), jsx(FileDrop, {
      accept: "image/*",
      disabled: isRecognizeDisabled,
      disabledText: "Image Recognition service is not available",
      onDropAccepted: imageLoadHandler,
      onDropRejected: function onDropRejected() {
        return errorHandler('Unable to accept file(s). Make sure you upload 1 image.');
      },
      buttonLabel: "Open from image",
      textLabel: "or drag file here",
      iconName: ICON_NAMES.IMAGE
    })]
  });
};

var TextEditor = function TextEditor(_ref) {
  var structStr = _ref.structStr,
      inputHandler = _ref.inputHandler,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;
  return jsx(Fragment, {
    children: jsx("textarea", {
      className: classes$l.textareaEditor,
      value: structStr,
      onChange: function onChange(event) {
        return inputHandler(event.target.value);
      },
      autoFocus: autoFocus
    })
  });
};

function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$m(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ViewSwitcher = function ViewSwitcher(props) {
  if (props.isAnalyzingFile) {
    return jsx(AnalyzingFile, {
      fileName: props.fileName
    });
  } else {
    switch (props.currentState) {
      case props.states.idle:
        return jsx(OpenOptions, _objectSpread$m({}, props));
      case props.states.textEditor:
        return jsx(TextEditor, _objectSpread$m({}, props));
      default:
        return null;
    }
  }
};

var _excluded$a = ["server", "onImageUpload", "errorHandler", "isAnalyzingFile", "isRecognizeDisabled"];
function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$l(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MODAL_STATES = {
  idle: 'idle',
  textEditor: 'textEditor',
  imageRec: 'imageRec'
};
var FooterContent$1 = function FooterContent(_ref) {
  var structStr = _ref.structStr,
      openHandler = _ref.openHandler,
      copyHandler = _ref.copyHandler,
      onCancel = _ref.onCancel;
  return jsxs("div", {
    className: classes$l.footerContent,
    children: [jsx("button", {
      onClick: onCancel,
      className: classes$l.cancelButton,
      children: "Cancel"
    }), jsxs("div", {
      className: classes$l.buttonsContainer,
      children: [jsx(DialogActionButton, {
        disabled: !structStr,
        clickHandler: openHandler,
        styles: classes$l.openButton,
        label: "Open as New Project"
      }, "openButton"), jsx(DialogActionButton, {
        disabled: !structStr,
        clickHandler: copyHandler,
        styles: classes$l.copyButton,
        label: "Add to Canvas",
        title: "Structure will be loaded as fragment and added to Clipboard"
      }, "copyButton")]
    })]
  });
};
var Open = function Open(props) {
  var server = props.server,
      onImageUpload = props.onImageUpload,
      errorHandler = props.errorHandler,
      isAnalyzingFile = props.isAnalyzingFile,
      isRecognizeDisabled = props.isRecognizeDisabled,
      rest = _objectWithoutProperties(props, _excluded$a);
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      structStr = _useState2[0],
      setStructStr = _useState2[1];
  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];
  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      opener = _useState6[0],
      setOpener = _useState6[1];
  var _useState7 = useState(MODAL_STATES.idle),
      _useState8 = _slicedToArray(_useState7, 2),
      currentState = _useState8[0],
      setCurrentState = _useState8[1];
  useEffect(function () {
    if (server) {
      fileOpener(server).then(function (chosenOpener) {
        setOpener({
          chosenOpener: chosenOpener
        });
      });
    }
  }, [server]);
  var onFileLoad = function onFileLoad(files) {
    var onLoad = function onLoad(fileContent) {
      setStructStr(fileContent);
      setCurrentState(MODAL_STATES.textEditor);
    };
    var onError = function onError() {
      return errorHandler('Error processing file');
    };
    setFileName(files[0].name);
    opener.chosenOpener(files[0]).then(onLoad, onError);
  };
  var onImageLoad = function onImageLoad(files) {
    onImageUpload(files[0]);
    setCurrentState(MODAL_STATES.imageRec);
  };
  var onOk = rest.onOk;
  var copyHandler = function copyHandler() {
    onOk({
      structStr: structStr,
      fragment: true
    });
  };
  var openHandler = function openHandler() {
    onOk({
      structStr: structStr,
      fragment: false
    });
  };
  var withFooterContent = currentState === MODAL_STATES.textEditor && !isAnalyzingFile;
  if (currentState === MODAL_STATES.imageRec) {
    return jsx(Recognize, _objectSpread$l({}, rest));
  }
  return jsx(Dialog, {
    title: "Open structure",
    className: classes$l.open,
    params: rest,
    result: function result() {
      return null;
    },
    footerContent: withFooterContent ? jsx(FooterContent$1, {
      structStr: structStr,
      openHandler: openHandler,
      copyHandler: copyHandler,
      onCancel: rest.onCancel
    }) : undefined,
    buttons: [],
    withDivider: true,
    children: jsx(ViewSwitcher, {
      isAnalyzingFile: isAnalyzingFile,
      fileName: fileName,
      currentState: currentState,
      states: MODAL_STATES,
      selectClipboard: function selectClipboard() {
        return setCurrentState(MODAL_STATES.textEditor);
      },
      fileLoadHandler: onFileLoad,
      imageLoadHandler: onImageLoad,
      errorHandler: errorHandler,
      isRecognizeDisabled: isRecognizeDisabled,
      structStr: structStr,
      inputHandler: setStructStr,
      autoFocus: true
    })
  });
};

var mapStateToProps$4 = function mapStateToProps(state) {
  var _state$actionState$re;
  return {
    server: state.server,
    errorHandler: state.editor.errorHandler,
    isRecognizeDisabled: (_state$actionState$re = state.actionState.recognize) === null || _state$actionState$re === void 0 ? void 0 : _state$actionState$re.disabled,
    isAnalyzingFile: state.requestsStatuses.isAnalyzingFile
  };
};
var mapDispatchToProps$5 = function mapDispatchToProps(dispatch) {
  return {
    onOk: function onOk(result) {
      if (result.fragment) exec('copy');
      dispatch(load(result.structStr, {
        badHeaderRecover: true,
        fragment: result.fragment
      })
      );
    },
    onImageUpload: function onImageUpload(file) {
      dispatch(changeImage(file));
    }
  };
};
var OpenContainer = connect(mapStateToProps$4, mapDispatchToProps$5)(Open);

function couldBeSaved(struct, format) {
  var warnings = [];
  var formatName = getPropertiesByFormat(format).name;
  var rxnArrowsSize = struct.rxnArrows.size;
  var hasRxnArrow = struct.hasRxnArrow();
  if (format === 'smiles' || format === 'smarts') {
    warnings.push("Structure contains query properties of atoms and bonds that are not supported in the ".concat(format === null || format === void 0 ? void 0 : format.toUpperCase(), ". Query properties will not be reflected in the file saved."));
  }
  if (format === 'smiles') {
    var arrayOfAtoms = Array.from(struct.atoms.values());
    var hasGenerics = arrayOfAtoms.some(function (atom) {
      return atom.pseudo;
    });
    if (hasGenerics) {
      warnings.push("Structure contains generic atoms. They will be saved as any atom (*).");
    }
  }
  if (format !== 'ket') {
    if (hasRxnArrow) {
      var arrayOfArrows = Array.from(struct.rxnArrows.values());
      var rxnArrowMode = arrayOfArrows[0].mode;
      if (rxnArrowMode !== RxnArrowMode.OpenAngle) {
        warnings.push("The ".concat(formatName, " format does not support drawn elements: the reaction ").concat(rxnArrowMode, " arrow will be replaced with the reaction arrow"));
      }
    }
    if (rxnArrowsSize > 1) {
      warnings.push("The ".concat(formatName, " format does not support drawn elements: reaction arrows will be lost."));
    }
  }
  if (['inChI', 'inChIAuxInfo', 'smiles', 'smilesExt'].includes(format)) {
    if (struct.rgroups.size !== 0) warnings.push("In ".concat(formatName, " the structure will be saved without R-group fragments"));
    struct = struct.clone();
    var isRg = struct.atoms.find(function (_ind, atom) {
      return atom.label === 'R#';
    });
    if (isRg !== null) warnings.push("In ".concat(formatName, " the structure will be saved without R-group members"));
    var isSg = struct.sgroups.find(function (_ind, sg) {
      return sg.type !== 'MUL' && !/^INDIGO_.+_DESC$/i.test(sg.data.fieldName);
    });
    if (isSg !== null) warnings.push("In ".concat(formatName, " the structure will be saved without S-groups"));
  }
  if (['smiles', 'smilesExt', 'smarts', 'inChI', 'inChIAuxInfo', 'cml'].includes(format)) {
    var isVal = struct.atoms.find(function (_ind, atom) {
      return atom.explicitValence >= 0;
    });
    if (isVal !== null) warnings.push("In ".concat(formatName, " valence is not supported"));
  }
  if (['mol', 'rxn'].includes(format) && Array.from(struct.frags.values()).some(function (fr) {
    if (fr !== null && fr !== void 0 && fr.enhancedStereoFlag) {
      return fr.enhancedStereoFlag !== StereoFlag.Abs;
    }
    return false;
  })) {
    warnings.push("Structure contains enhanced stereochemistry features. Information will be partly lost.");
  }
  if (['inChI', 'inChIAuxInfo', 'smiles', 'smilesExt'].includes(format)) {
    if (struct.functionalGroups.size !== 0) warnings.push("In ".concat(formatName, " the structure will be saved without functional groups."));
  }
  if (['cml'].includes(format)) {
    if (struct.functionalGroups.size !== 0) warnings.push("Structure contains functional groups. In ".concat(formatName, " information will be partly lost."));
  }
  if (warnings.length !== 0) return warnings.join('\n');
  return null;
}

var classes$k = {"tabs":"Tabs-module_tabs__PuztJ","active":"Tabs-module_active__eeyNd"};

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$k(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Tabs = function (_Component) {
  _inherits(Tabs, _Component);
  var _super = _createSuper$4(Tabs);
  function Tabs(props) {
    var _this;
    _classCallCheck(this, Tabs);
    _this = _super.call(this, props);
    _this.state = {};
    _this.state.tabIndex = props.tabIndex || 0;
    _this.props.changeTab(_this.state.tabIndex);
    return _this;
  }
  _createClass(Tabs, [{
    key: "changeTab",
    value: function changeTab(ev, index) {
      this.setState({
        tabIndex: index
      });
      if (this.props.changeTab) this.props.changeTab(index);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.tabIndex !== prevProps.tabIndex) {
        this.setState({
          tabIndex: this.props.tabIndex
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          tabs = _this$props.tabs,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex;
      var tabPanel = tabs[this.state.tabIndex];
      var Component = tabPanel === null || tabPanel === void 0 ? void 0 : tabPanel.component;
      var componentProps = tabPanel === null || tabPanel === void 0 ? void 0 : tabPanel.props;
      return jsxs("div", {
        children: [jsx("ul", {
          className: className,
          tabIndex: tabIndex,
          children: jsx("li", {
            className: classes$k.tabs,
            children: tabs.map(function (tabPanel, index) {
              return jsx("a", {
                className: clsx(_defineProperty({}, classes$k.active, _this2.state.tabIndex === index)),
                onClick: function onClick(ev) {
                  return _this2.changeTab(ev, index);
                },
                children: tabPanel.caption
              }, index);
            })
          })
        }), tabPanel && jsx("div", {
          className: contentClassName,
          children: jsx(Component, _objectSpread$k({}, componentProps))
        })]
      });
    }
  }]);
  return Tabs;
}(Component);

var classes$j = {"button-common-styles":"Save-module_button-common-styles__mpLS8","scrollbar":"Save-module_scrollbar__XMf7I","dialog":"Save-module_dialog__of-0M","formContainer":"Save-module_formContainer__v1pIq","tabs":"Save-module_tabs__TOB-R","warnings":"Save-module_warnings__1PxJT","warningsContainer":"Save-module_warningsContainer__-3yVy","warningsArr":"Save-module_warningsArr__bKUFY","previewBackground":"Save-module_previewBackground__AbaUf","previewArea":"Save-module_previewArea__-0SLb","loadingCirclesContainer":"Save-module_loadingCirclesContainer__COUKN","imageContainer":"Save-module_imageContainer__gFELk","previewMessage":"Save-module_previewMessage__CZfZB","ok":"Save-module_ok__SgeCM","cancel":"Save-module_cancel__SMkEV","saveTmpl":"Save-module_saveTmpl__O-d0T"};

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$j(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var saveSchema = {
  title: 'Save',
  type: 'object',
  properties: {
    filename: {
      title: 'File name:',
      type: 'string',
      maxLength: 128,
      pattern: '^[^.<>:?"*\\\\|\\/][^<>:?"*\\\\|\\/]*$',
      invalidMessage: function invalidMessage(res) {
        if (!res) return 'Filename should contain at least one character';
        if (res.length > 128) return 'Filename is too long';
        return "A filename cannot contain characters: \\ / : * ? \" < > | and cannot start with '.'";
      }
    },
    format: {
      title: 'File format:',
      "enum": Object.keys(formatProperties),
      enumNames: Object.keys(formatProperties).map(function (format) {
        return formatProperties[format].name;
      })
    }
  }
};
var SaveDialog = function (_Component) {
  _inherits(SaveDialog, _Component);
  var _super = _createSuper$3(SaveDialog);
  function SaveDialog(props) {
    var _this;
    _classCallCheck(this, SaveDialog);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "isImageFormat", function (format) {
      return !!getPropertiesByImgFormat(format);
    });
    _defineProperty(_assertThisInitialized(_this), "showStructWarningMessage", function (format) {
      var errors = _this.props.formState.errors;
      return format !== 'mol' && Object.keys(errors).length > 0;
    });
    _defineProperty(_assertThisInitialized(_this), "changeType", function (type) {
      var _this$props = _this.props,
          struct = _this$props.struct,
          server = _this$props.server,
          options = _this$props.options,
          formState = _this$props.formState;
      var errorHandler = _this.context.errorHandler;
      if (_this.isImageFormat(type)) {
        var ketSerialize = new KetSerializer();
        var structStr = ketSerialize.serialize(struct);
        _this.setState({
          disableControls: true,
          tabIndex: 0,
          imageFormat: type,
          structStr: structStr,
          isLoading: true
        });
        var _options = {};
        _options.outputFormat = type;
        return server.generateImageAsBase64(structStr, _options).then(function (base64) {
          _this.setState({
            disableControls: false,
            tabIndex: 0,
            imageSrc: base64,
            isLoading: false
          });
        })["catch"](function (e) {
          errorHandler(e);
          _this.props.onResetForm(formState);
          return e;
        });
      } else {
        _this.setState({
          disableControls: true,
          isLoading: true
        });
        var factory = new FormatterFactory(server);
        var service = factory.create(type, options);
        return service.getStructureFromStructAsync(struct).then(function (structStr) {
          _this.setState({
            tabIndex: 0,
            structStr: structStr
          });
        }, function (e) {
          errorHandler(e.message);
          _this.props.onResetForm(formState);
          return e;
        })["finally"](function () {
          _this.setState({
            disableControls: false,
            tabIndex: 0,
            isLoading: false
          });
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "changeTab", function (index) {
      _this.setState({
        tabIndex: index
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getWarnings", function (format) {
      var _this$props2 = _this.props,
          struct = _this$props2.struct,
          moleculeErrors = _this$props2.moleculeErrors;
      var warnings = [];
      var structWarning = 'Structure contains errors, please check the data, otherwise you ' + 'can lose some properties or the whole structure after saving in this format.';
      if (!_this.isImageFormat(format)) {
        var saveWarning = couldBeSaved(struct, format);
        var isStructInvalid = _this.showStructWarningMessage(format);
        if (isStructInvalid) {
          warnings.push(structWarning);
        }
        if (saveWarning) {
          warnings.push(saveWarning);
        }
      }
      if (moleculeErrors) {
        warnings.push.apply(warnings, _toConsumableArray(Object.values(moleculeErrors)));
      }
      return warnings;
    });
    _defineProperty(_assertThisInitialized(_this), "renderForm", function () {
      var formState = Object.assign({}, _this.props.formState);
      var _formState$result = formState.result,
          filename = _formState$result.filename,
          format = _formState$result.format;
      var warnings = _this.getWarnings(format);
      var tabs = warnings.length === 0 ? [{
        caption: 'Preview',
        component: _this.renderSaveFile,
        tabIndex: 0
      }] : [{
        caption: 'Preview',
        component: _this.renderSaveFile,
        tabIndex: 0
      }, {
        caption: 'Warnings',
        component: _this.renderWarnings,
        tabIndex: 1
      }];
      return jsxs("div", {
        className: classes$j.formContainer,
        children: [jsxs(Form$1, _objectSpread$j(_objectSpread$j({
          schema: _this.saveSchema,
          init: {
            filename: filename,
            format: _this.isRxn ? 'rxn' : 'mol'
          }
        }, formState), {}, {
          children: [jsx(Field, {
            name: "filename"
          }), jsx(Field, {
            name: "format",
            onChange: _this.changeType,
            options: getSelectOptionsFromSchema(_this.saveSchema.properties.format),
            component: Select
          })]
        })), jsx(Tabs, {
          className: classes$j.tabs,
          captions: tabs,
          tabIndex: _this.state.tabIndex,
          changeTab: _this.changeTab,
          tabs: tabs
        })]
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderSaveFile", function () {
      var formState = Object.assign({}, _this.props.formState);
      delete formState.moleculeErrors;
      var _formState$result2 = formState.result;
          _formState$result2.filename;
          var format = _formState$result2.format;
      var _this$state = _this.state,
          structStr = _this$state.structStr,
          imageSrc = _this$state.imageSrc,
          isLoading = _this$state.isLoading;
      var isCleanStruct = _this.props.struct.isBlank();
      return isLoading ? jsx("div", {
        className: classes$j.loadingCirclesContainer,
        children: jsx(LoadingCircles, {})
      }) : _this.isImageFormat(format) ? jsx("div", {
        className: classes$j.imageContainer,
        children: !isCleanStruct && jsx("img", {
          src: "data:image/".concat(format, "+xml;base64,").concat(imageSrc),
          alt: "".concat(format, " preview")
        })
      }) : jsx("div", {
        className: classes$j.previewBackground,
        children: jsx("textarea", {
          value: structStr,
          className: classes$j.previewArea,
          readOnly: true,
          ref: _this.textAreaRef
        })
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderWarnings", function () {
      var formState = Object.assign({}, _this.props.formState);
      var _formState$result3 = formState.result;
          _formState$result3.filename;
          var format = _formState$result3.format;
      var warnings = _this.getWarnings(format);
      return warnings.length ? jsx("div", {
        className: classes$j.warnings,
        children: warnings.map(function (warning) {
          return jsx("div", {
            className: classes$j.warningsContainer,
            children: jsx("span", {
              className: classes$j.warningsArr,
              children: warning
            })
          });
        })
      }) : null;
    });
    _defineProperty(_assertThisInitialized(_this), "getButtons", function () {
      var _this$state2 = _this.state,
          disableControls = _this$state2.disableControls,
          imageFormat = _this$state2.imageFormat,
          structStr = _this$state2.structStr;
      var formState = _this.props.formState;
      var _formState$result4 = formState.result,
          filename = _formState$result4.filename,
          format = _formState$result4.format;
      var isCleanStruct = _this.props.struct.isBlank();
      var isMoleculeContain = _this.props.struct.atoms.size && _this.props.struct.bonds.size;
      var buttons = [jsx("button", {
        className: classes$j.saveTmpl,
        disabled: disableControls || isCleanStruct || !isMoleculeContain,
        onClick: function onClick() {
          return _this.props.onTmplSave(_this.props.struct);
        },
        children: "Save to Templates"
      }, "save-tmpl")];
      buttons.push( jsx("button", {
        mode: "onCancel",
        className: classes$j.cancel,
        onClick: function onClick() {
          return _this.props.onOk({});
        },
        type: "button",
        children: "Cancel"
      }, "cancel"));
      if (_this.isImageFormat(format)) {
        buttons.push( jsx(SaveButton$1, {
          mode: "saveImage",
          data: structStr,
          filename: filename,
          outputFormat: imageFormat,
          type: "image/".concat(format, "+xml"),
          onSave: _this.props.onOk,
          disabled: disableControls || !formState.valid || isCleanStruct || !_this.props.server,
          className: classes$j.ok,
          children: "Save"
        }, "save-image-button"));
      } else {
        buttons.push( jsx(SaveButton$1, {
          mode: "saveFile",
          data: structStr,
          filename: filename + getPropertiesByFormat(format).extensions[0],
          type: format.mime,
          server: _this.props.server,
          onSave: _this.props.onOk,
          disabled: disableControls || !formState.valid || isCleanStruct,
          className: classes$j.ok,
          children: "Save"
        }, "save-file-button"));
      }
      return buttons;
    });
    _this.state = {
      disableControls: true,
      imageFormat: 'svg',
      tabIndex: 0,
      isLoading: true
    };
    _this.isRxn = _this.props.struct.hasRxnArrow();
    _this.textAreaRef = createRef();
    var formats = [_this.isRxn ? 'rxn' : 'mol', 'smiles', 'ket'];
    if (_this.props.server) formats.push(_this.isRxn ? 'rxnV3000' : 'molV3000', 'smilesExt', 'smarts', 'inChI', 'inChIAuxInfo', 'cml', 'svg', 'png', 'cdxml'
    );
    _this.saveSchema = saveSchema;
    _this.saveSchema.properties.format = Object.assign(_this.saveSchema.properties.format, {
      "enum": formats,
      enumNames: formats.map(function (format) {
        var formatProps = getPropertiesByFormat(format) || getPropertiesByImgFormat(format);
        return formatProps.name;
      })
    });
    return _this;
  }
  _createClass(SaveDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var checkOptions = this.props.checkState.checkOptions;
      this.props.onCheck(checkOptions);
      this.changeType(this.isRxn ? 'rxn' : 'mol').then(function (res) {
        return res instanceof Error && _this2.setState({
          disableControls: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return jsx(Dialog, {
        className: classes$j.dialog,
        title: "Save Structure",
        params: this.props,
        buttons: this.getButtons(),
        needMargin: false,
        withDivider: true,
        children: this.renderForm()
      });
    }
  }]);
  return SaveDialog;
}(Component);
_defineProperty(SaveDialog, "contextType", errorsContext);
var mapStateToProps$3 = function mapStateToProps(state) {
  return {
    server: state.options.app.server ? state.server : null,
    struct: state.editor.struct(),
    options: state.options.getServerSettings(),
    formState: state.modal.form,
    moleculeErrors: state.modal.form.moleculeErrors,
    checkState: state.options.check
  };
};
var mapDispatchToProps$4 = function mapDispatchToProps(dispatch) {
  return {
    onCheck: function onCheck(checkOptions) {
      return dispatch(check(checkOptions));
    },
    onTmplSave: function onTmplSave(struct) {
      return dispatch(saveUserTmpl(struct));
    },
    onResetForm: function onResetForm(prevState) {
      return dispatch(updateFormState(prevState));
    }
  };
};
var Save = connect(mapStateToProps$3, mapDispatchToProps$4)(SaveDialog);

var classes$i = {"enhancedStereo":"enhancedStereo-module_enhancedStereo__8FLSY","stereoLabelItem":"enhancedStereo-module_stereoLabelItem__lEf-0","labelGroupSelect":"enhancedStereo-module_labelGroupSelect__K7TYC"};

var _excluded$9 = ["struct", "formState", "init"];
function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$i(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var EnhancedStereo = function EnhancedStereo(props) {
  var struct = props.struct,
      formState = props.formState,
      init = props.init,
      rest = _objectWithoutProperties(props, _excluded$9);
  var _result = formState.result,
      _valid = formState.valid;
  var stereoLabels = findStereLabels(struct, Array.from(struct.atoms.keys()));
  var maxAnd = maxOfAnds(stereoLabels);
  var maxOr = maxOfOrs(stereoLabels);
  var enhancedStereoSchema = {
    title: 'Enhanced Stereo',
    type: 'object',
    properties: {
      type: {
        type: 'string'
      },
      andNumber: {
        type: 'integer'
      },
      orNumber: {
        type: 'integer'
      }
    }
  };
  return jsx(Dialog, {
    title: "Enhanced Stereochemistry",
    className: classes$i.enhancedStereo,
    params: rest,
    result: function result() {
      return _result;
    },
    valid: function valid() {
      return _valid;
    },
    withDivider: true,
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Apply'
    },
    children: jsx(Form$1, _objectSpread$i(_objectSpread$i({
      schema: enhancedStereoSchema,
      init: init
    }, formState), {}, {
      children: jsxs("fieldset", {
        children: [jsxs("label", {
          children: [jsx(Field, {
            name: "type",
            labelPos: false,
            type: "radio",
            value: StereoLabel.Abs,
            checked: _result.type === StereoLabel.Abs
          }), "ABS"]
        }), maxAnd !== 0 && jsxs("label", {
          children: [jsx(Field, {
            name: "type",
            labelPos: false,
            type: "radio",
            value: StereoLabel.And,
            checked: _result.type === StereoLabel.And
          }), "Add to AND", jsx(Field, {
            name: "andNumber",
            schema: range$1(1, maxAnd + 1),
            type: "text",
            className: classes$i.labelGroupSelect
          }), "Group"]
        }), maxOr !== 0 && jsxs("label", {
          children: [jsx(Field, {
            name: "type",
            labelPos: false,
            type: "radio",
            value: StereoLabel.Or,
            checked: _result.type === StereoLabel.Or
          }), "Add to OR", jsx(Field, {
            name: "orNumber",
            schema: range$1(1, maxOr + 1),
            type: "text",
            className: classes$i.labelGroupSelect
          }), "Group"]
        }), jsxs("label", {
          children: [jsx(Field, {
            name: "type",
            labelPos: false,
            type: "radio",
            value: "&".concat(maxAnd + 1)
          }), "Create new AND Group"]
        }), jsxs("label", {
          children: [jsx(Field, {
            name: "type",
            labelPos: false,
            type: "radio",
            value: "or".concat(maxOr + 1)
          }), "Create new OR Group"]
        })]
      })
    }))
  });
};
function findStereLabels(struct, aids) {
  var stereoIds = aids.filter(function (aid) {
    return struct.atoms.get(aid).stereoLabel !== null;
  });
  return stereoIds.map(function (aid) {
    return struct.atoms.get(aid).stereoLabel;
  });
}
function maxOfAnds(stereLabels) {
  var numbers = stereLabels.map(function (label) {
    var _label$match;
    return label.match(/&/) ? +((_label$match = label.match(/\d+/)) === null || _label$match === void 0 ? void 0 : _label$match.join()) : 0;
  });
  return Math.max.apply(Math, _toConsumableArray(numbers));
}
function maxOfOrs(stereLabels) {
  var numbers = stereLabels.map(function (label) {
    var _label$match2;
    return label.match(/or/) ? +((_label$match2 = label.match(/\d+/)) === null || _label$match2 === void 0 ? void 0 : _label$match2.join()) : 0;
  });
  return Math.max.apply(Math, _toConsumableArray(numbers));
}
var EnhancedStereo$1 = connect(function (state) {
  return {
    formState: state.modal.form || {
      result: {},
      valid: false
    },
    struct: state.editor.struct()
  };
})(EnhancedStereo);

var styles$5 = {"button-common-styles":"labelEdit-module_button-common-styles__S5XMA","scrollbar":"labelEdit-module_scrollbar__GFcQm","labelEdit":"labelEdit-module_labelEdit__9LnIH","labelEditInputField":"labelEdit-module_labelEditInputField__tb-J4"};

var _excluded$8 = ["formState"];
function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$h(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function serialize(lc) {
  var charge = Math.abs(lc.charge);
  var radical = ['', ':', '.', '^^'][lc.radical] || '';
  var sign = '';
  if (charge) sign = lc.charge < 0 ? '-' : '+';
  return (lc.isotope || '') + lc.label + radical + (charge > 1 ? charge : '') + sign;
}
function deserialize(value) {
  var match = value.match(/^(\d+)?([a-z*]{1,3})(\.|:|\^\^)?(\d+[-+]|[-+])?$/i);
  if (match) {
    var label = match[2] === '*' ? 'A' : capitalize(match[2]);
    var charge = 0;
    var isotope = 0;
    var radical = 0;
    if (match[1]) isotope = parseInt(match[1]);
    if (match[3]) radical = {
      ':': 1,
      '.': 2,
      '^^': 3
    }[match[3]];
    if (match[4]) {
      charge = parseInt(match[4]);
      if (isNaN(charge))
        charge = 1;
      if (match[4].endsWith('-')) charge = -charge;
    }
    if (label === 'A' || label === 'Q' || label === 'X' || label === 'M' || Elements.get(label)) return {
      label: label,
      charge: charge,
      isotope: isotope,
      radical: radical
    };
  }
  return null;
}
function LabelEdit(props) {
  var init = {
    label: props.letter || serialize(props)
  };
  var formState = props.formState,
      prop = _objectWithoutProperties(props, _excluded$8);
  var _result = formState.result,
      _valid = formState.valid;
  return jsx(Dialog, {
    title: "Label Edit",
    valid: function valid() {
      return _valid;
    },
    withDivider: true,
    needMargin: false,
    result: function result() {
      return deserialize(_result.label);
    },
    className: styles$5.labelEdit,
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Apply'
    },
    focusable: false,
    params: prop,
    children: jsx(Form$1, _objectSpread$h(_objectSpread$h({
      schema: labelEdit,
      customValid: {
        label: function label(l) {
          return deserialize(l);
        }
      },
      init: init
    }, formState), {}, {
      children: jsx(Field, {
        name: "label",
        maxLength: "20",
        size: "10",
        autoFocus: true,
        className: styles$5.labelEditInputField
      })
    }))
  });
}
var LabelEdit$1 = connect(function (store) {
  return {
    formState: store.modal.form
  };
})(LabelEdit);

var classes$h = {"button-common-styles":"AtomInfo-module_button-common-styles__x3ucv","scrollbar":"AtomInfo-module_scrollbar__8GiyC","ket_atom_info":"AtomInfo-module_ket_atom_info__GOuZ6","none":"AtomInfo-module_none__PRuzx"};

function AtomInfo(_ref) {
  var el = _ref.el,
      isInfo = _ref.isInfo;
  var numberStyle = {
    color: ElementColor[el.label] || 'black',
    fontSize: '12px'
  };
  var elemStyle = {
    color: ElementColor[el.label] || 'black',
    fontWeight: 'bold',
    fontSize: '18px'
  };
  return jsxs("div", {
    className: clsx(classes$h.ket_atom_info, !isInfo && classes$h.none),
    children: [jsx("div", {
      style: numberStyle,
      children: el.number
    }), jsx("span", {
      style: elemStyle,
      children: el.label
    }), jsx("br", {}), el.title, jsx("br", {}), el.mass]
  });
}

var PERIODIC_TABLE_COLUMNS = 19;
function Header() {
  return jsx("tbody", {
    children: jsx("tr", {
      children: range(0, PERIODIC_TABLE_COLUMNS).map(function (index) {
        return jsx("th", {
          children: index || ''
        }, index);
      })
    })
  });
}

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function MainRow(_ref) {
  var row = _ref.row,
      caption = _ref.caption,
      refer = _ref.refer,
      onAtomSelect = _ref.onAtomSelect,
      _onDoubleClick = _ref.onDoubleClick,
      currentEvents = _ref.currentEvents,
      atomClassNames = _ref.atomClassNames,
      className = _ref.className;
  return jsx("tbody", {
    children: jsxs("tr", {
      children: [jsx("th", {
        children: caption
      }), row.map(function (element, index) {
        return typeof element !== 'number' ?
        jsx("td", {
          children: jsx(Atom$1, _objectSpread$g({
            el: element,
            className: clsx.apply(void 0, _toConsumableArray(atomClassNames(element))),
            onClick: function onClick() {
              return onAtomSelect(element.label);
            },
            onDoubleClick: function onDoubleClick() {
              return _onDoubleClick();
            }
          }, currentEvents(element)))
        }, index) : refer(element) ? jsx("td", {
          className: className,
          children: refer(element)
        }, index) : jsx("td", {
          colSpan: element
        }, index);
      })]
    })
  });
}

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$f(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function OutinerRow(_ref) {
  var row = _ref.row,
      caption = _ref.caption,
      onAtomSelect = _ref.onAtomSelect,
      _onDoubleClick = _ref.onDoubleClick,
      currentEvents = _ref.currentEvents,
      atomClassNames = _ref.atomClassNames,
      className = _ref.className;
  return jsx("tbody", {
    children: jsxs("tr", {
      children: [jsx("th", {
        colSpan: "3",
        className: className,
        children: caption
      }), row.map(function (element) {
        return jsx("td", {
          children: jsx(Atom$1, _objectSpread$f({
            el: element,
            className: clsx.apply(void 0, _toConsumableArray(atomClassNames(element))),
            onClick: function onClick() {
              return onAtomSelect(element.label);
            },
            onDoubleClick: function onDoubleClick() {
              return _onDoubleClick();
            }
          }, currentEvents(element)))
        }, element.label);
      }), jsx("td", {})]
    })
  });
}

var styles$4 = {"button-common-styles":"ElementsTable-module_button-common-styles__-6eHN","scrollbar":"ElementsTable-module_scrollbar__0R-HA","table":"ElementsTable-module_table__iNPVY","main_row":"ElementsTable-module_main_row__csN5a","outiner_row":"ElementsTable-module_outiner_row__fzfGL","noble":"ElementsTable-module_noble__65B92","alkali":"ElementsTable-module_alkali__sM9z9","alkaline-earth":"ElementsTable-module_alkaline-earth__t2h2s","metalloid":"ElementsTable-module_metalloid__Ui4Y8","other-nonmetal":"ElementsTable-module_other-nonmetal__mbkMN","post-transition":"ElementsTable-module_post-transition__k4C-G","transition":"ElementsTable-module_transition__GCnID","lanthanide":"ElementsTable-module_lanthanide__wVoLa","actinide":"ElementsTable-module_actinide__bVCBg","halogen":"ElementsTable-module_halogen__W6EjM","unknown-props":"ElementsTable-module_unknown-props__d9rq4","unknown-state":"ElementsTable-module_unknown-state__lRBCp","button":"ElementsTable-module_button__xCaL4","selected":"ElementsTable-module_selected__B9LGf"};

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var metalPrefix = ['alkali', 'alkaline-earth', 'transition', 'post-transition'];
var atomClassNames = {
  metal: 'metal',
  unknownProps: 'unknown-props',
  unknownState: 'unknown-state',
  button: 'button',
  selected: 'selected'
};
var beforeSpan = {
  He: 16,
  B: 10,
  Al: 10,
  Hf: 1,
  Rf: 1
};
var ACTINIDE = 'actinide';
var LANTHANIDE = 'lanthanide';
var main = rowPartition(Elements.filter(function (item) {
  return item && item.type !== ACTINIDE && item.type !== LANTHANIDE && item.number !== 89 && item.number !== 57;
}));
var lanthanides = Elements.filter(function (item) {
  return item && (item.type === LANTHANIDE || item.number === 57);
});
var actinides = Elements.filter(function (item) {
  return item && (item.type === ACTINIDE || item.number === 89);
});
function rowPartition(elements) {
  return elements.reduce(function (result, item) {
    var row = result[item.period - 1];
    if (!row) {
      result.push([item]);
    } else {
      if (beforeSpan[item.label]) row.push(beforeSpan[item.label]);
      row.push(item);
    }
    return result;
  }, []);
}
var ElementsTable = function (_Component) {
  _inherits(ElementsTable, _Component);
  var _super = _createSuper$2(ElementsTable);
  function ElementsTable() {
    var _this;
    _classCallCheck(this, ElementsTable);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "getAtomClassNames", function (item) {
      var selected = _this.props.selected;
      var type = metalPrefix.includes(item.type) ? "".concat(item.type, " ").concat(atomClassNames.metal) : item.type || atomClassNames.unknownProps;
      var classes = [].concat(_toConsumableArray(type.split(' ')), [item.state || atomClassNames.unknownState, item.origin, atomClassNames.button, selected(item.label) && atomClassNames.selected]);
      return classes.map(function (className) {
        return styles$4[className];
      });
    });
    return _this;
  }
  _createClass(ElementsTable, [{
    key: "shouldComponentUpdate",
    value:
    function shouldComponentUpdate(nextProps) {
      return nextProps.value !== this.props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
          currentEvents = _this$props.currentEvents,
          onAtomSelect = _this$props.onAtomSelect,
          onDoubleClick = _this$props.onDoubleClick;
      var callbacks = {
        currentEvents: currentEvents,
        onAtomSelect: onAtomSelect,
        onDoubleClick: onDoubleClick
      };
      return jsxs("table", {
        className: styles$4.table,
        summary: "Periodic table of the chemical elements",
        children: [jsx(Header, {}), main.map(function (row, index) {
          return jsx(MainRow, _objectSpread$e({
            atomClassNames: _this2.getAtomClassNames,
            className: styles$4.main_row,
            row: row,
            caption: index + 1,
            refer: function refer(element) {
              return element === 1 && (index === 5 ? '*' : '**');
            }
          }, callbacks), index);
        }), jsx(OutinerRow, _objectSpread$e({
          atomClassNames: this.getAtomClassNames,
          className: styles$4.outiner_row,
          row: lanthanides,
          caption: "*"
        }, callbacks)), jsx(OutinerRow, _objectSpread$e({
          atomClassNames: this.getAtomClassNames,
          className: styles$4.outiner_row,
          row: actinides,
          caption: "**"
        }, callbacks))]
      });
    }
  }]);
  return ElementsTable;
}(Component);

var styles$3 = {"horizintalNodeLines":"BoxWithLines-module_horizintalNodeLines__QO-Su","upperLines":"BoxWithLines-module_upperLines__8pL-R","lowerLine":"BoxWithLines-module_lowerLine__tBZJd","verticalNodeLines":"BoxWithLines-module_verticalNodeLines__wBgwS"};

var HorizontalBoxWithLines = function HorizontalBoxWithLines() {
  return jsxs("div", {
    className: styles$3.horizintalNodeLines,
    children: [jsx("div", {
      className: styles$3.upperLines
    }), jsx("div", {
      className: styles$3.lowerLine
    })]
  });
};
var VerticalBoxWithLines = function VerticalBoxWithLines() {
  return jsxs("div", {
    className: styles$3.verticalNodeLines,
    children: [jsx("div", {
      className: styles$3.upperLines
    }), jsx("div", {
      className: styles$3.lowerLine
    })]
  });
};

var classes$g = {"button-common-styles":"GenSet-module_button-common-styles__0Ro-U","scrollbar":"GenSet-module_scrollbar__Ev8Uz","genGroupLegendBox":"GenSet-module_genGroupLegendBox__CSTQr","legendBox":"GenSet-module_legendBox__0zIAk","SpecialNodes":"GenSet-module_SpecialNodes__oFKp3","AtomGenerics":"GenSet-module_AtomGenerics__MoQCf","GroupGenerics":"GenSet-module_GroupGenerics__pFPtX","Cyclic":"GenSet-module_Cyclic__VJRtt","Acyclic":"GenSet-module_Acyclic__R97MM","CyclicCarbo":"GenSet-module_CyclicCarbo__Aanb0","AcyclicCarbo":"GenSet-module_AcyclicCarbo__nowGn","CyclicHetero":"GenSet-module_CyclicHetero__bbOnT","AcyclicHetero":"GenSet-module_AcyclicHetero__hnr4G","button":"GenSet-module_button__TCbeM","selected":"GenSet-module_selected__58d2u"};

var isGenericGroup = function isGenericGroup(group) {
  var cyclicGroups = ['Acyclic', 'Cyclic', 'Acyclic Carbo', 'Cyclic Carbo', 'Acyclic Hetero', 'Cyclic Hetero'];
  return cyclicGroups.includes(group);
};

var getGroupClassName = function getGroupClassName(groupName) {
  return groupName.replaceAll(' ', '');
};
function GenSet(_ref) {
  var labels = _ref.labels,
      selected = _ref.selected,
      onAtomSelect = _ref.onAtomSelect,
      className = _ref.className,
      group = _ref.group;
  return jsx(Fragment, {
    children: labels.map(function (item, index) {
      var buttons = item.items;
      var caption = item.displayName;
      return jsxs("fieldset", {
        className: className,
        children: [jsx("div", {
          className: classes$g[getGroupClassName(group)],
          children: buttons.map(function (button, index) {
            return jsx("button", {
              onClick: function onClick() {
                return onAtomSelect(button.label, false);
              },
              onDoubleClick: function onDoubleClick() {
                return onAtomSelect(button.label, true);
              },
              title: button.description || button.label,
              className: clsx(_defineProperty({}, classes$g.selected, selected(button.label)), classes$g.button),
              children: button.label
            }, index);
          })
        }), !isGenericGroup(group) && caption && jsx("div", {
          className: classes$g.legendBox,
          children: jsx("legend", {
            children: caption
          })
        }), isGenericGroup(group) && caption && jsx("div", {
          className: classes$g.genGroupLegendBox,
          children: jsx("legend", {
            className: classes$g.genGroupLegend,
            children: caption
          })
        })]
      }, index);
    })
  });
}

var styles$2 = {"fieldFlexWrapper":"GenGroup-module_fieldFlexWrapper__mBHRt","buttonContainer":"GenGroup-module_buttonContainer__7qTti","genButtonContainer":"GenGroup-module_genButtonContainer__6Bwe1","subGroup":"GenGroup-module_subGroup__afiEU","legendMain":"GenGroup-module_legendMain__h-Wl3","legend":"GenGroup-module_legend__JWafm","fieldset":"GenGroup-module_fieldset__JehYt"};

var getLegendClassname = function getLegendClassname(title) {
  var mainTitles = ['Atom Generics', 'Special Nodes', 'Group Generics', 'Acyclic', 'Cyclic'];
  if (mainTitles.includes(title)) return 'legendMain';
  return 'legend';
};
var GenGroup = function GenGroup(_ref) {
  var group = _ref.group,
      onAtomSelect = _ref.onAtomSelect,
      selected = _ref.selected;
  return jsx("div", {
    className: styles$2.fieldFlexWrapper,
    children: jsxs("fieldset", {
      className: styles$2.fieldset,
      children: [jsx("legend", {
        className: styles$2[getLegendClassname(group.title)],
        children: group.title
      }), jsx("div", {
        className: isGenericGroup(group.title) ? styles$2.genButtonContainer : styles$2.buttonContainer,
        children: group.itemSets && jsx(GenSet, {
          labels: group.itemSets,
          selected: selected,
          onAtomSelect: onAtomSelect,
          className: styles$2.subGroup,
          group: group.title
        })
      })]
    })
  });
};

var classes$f = {"button-common-styles":"GenericGroups-module_button-common-styles__nYUJe","scrollbar":"GenericGroups-module_scrollbar__5iavS","genericGroups":"GenericGroups-module_genericGroups__z4EaG","topGroupsContainer":"GenericGroups-module_topGroupsContainer__bMeoG","groupGenerics":"GenericGroups-module_groupGenerics__6UpH6","subgroupContainer":"GenericGroups-module_subgroupContainer__xULxX"};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getGenericsGroupsMap = function getGenericsGroupsMap(tree) {
  var newGroups = {};
  for (var _i = 0, _Object$keys = Object.keys(tree); _i < _Object$keys.length; _i++) {
    var _newGroups$groupName;
    var groupName = _Object$keys[_i];
    newGroups[groupName] = _objectSpread$d({}, tree[groupName]);
    if ((_newGroups$groupName = newGroups[groupName]) !== null && _newGroups$groupName !== void 0 && _newGroups$groupName.subGroups) {
      newGroups = _objectSpread$d(_objectSpread$d({}, newGroups), getGenericsGroupsMap(newGroups[groupName].subGroups));
    }
  }
  return newGroups;
};
var renderGenGroupComponent = function renderGenGroupComponent(group, selected, onAtomSelect) {
  return jsx(GenGroup, {
    group: groupsMap[group],
    selected: selected,
    onAtomSelect: onAtomSelect
  });
};
var groupsMap = getGenericsGroupsMap(Generics);
function GenericGroups(_ref) {
  var selected = _ref.selected,
      onAtomSelect = _ref.onAtomSelect;
  return jsxs("div", {
    className: classes$f.genericGroups,
    children: [jsxs("div", {
      className: classes$f.topGroupsContainer,
      children: [renderGenGroupComponent(groupNames.atomsGen, selected, onAtomSelect), renderGenGroupComponent(groupNames.specialNodes, selected, onAtomSelect)]
    }), renderGenGroupComponent(groupNames.groupGen, selected, onAtomSelect), jsx(HorizontalBoxWithLines, {}), jsxs("div", {
      className: classes$f.groupGenerics,
      children: [jsxs("div", {
        children: [renderGenGroupComponent(groupNames.groupAcyclic, selected, onAtomSelect), jsxs("div", {
          className: classes$f.subgroupContainer,
          children: [jsx(VerticalBoxWithLines, {}), jsxs("div", {
            children: [renderGenGroupComponent(groupNames.acyclicCarbo, selected, onAtomSelect), renderGenGroupComponent(groupNames.acyclicHetero, selected, onAtomSelect)]
          })]
        })]
      }), jsxs("div", {
        children: [renderGenGroupComponent(groupNames.groupCyclic, selected, onAtomSelect), jsxs("div", {
          className: classes$f.subgroupContainer,
          children: [jsx(VerticalBoxWithLines, {}), jsxs("div", {
            children: [renderGenGroupComponent(groupNames.cyclicCarbo, selected, onAtomSelect), renderGenGroupComponent(groupNames.cyclicHetero, selected, onAtomSelect)]
          })]
        })]
      })]
    })]
  });
}

var groupNames;
(function (groupNames) {
  groupNames["atomsGen"] = "atoms-gen";
  groupNames["specialNodes"] = "special-nodes";
  groupNames["groupGen"] = "group-gen";
  groupNames["groupAcyclic"] = "group-acyclic";
  groupNames["acyclicCarbo"] = "acyclic-carbo";
  groupNames["acyclicHetero"] = "acyclic-hetero";
  groupNames["groupCyclic"] = "group-cyclic";
  groupNames["cyclicHetero"] = "cyclic-hetero";
  groupNames["cyclicCarbo"] = "cyclic-carbo";
})(groupNames || (groupNames = {}));

var classes$e = {"fieldset":"TypeChoice-module_fieldset__yJqT7"};

var _excluded$7 = ["value", "onChange"];
function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var typeSchema = [{
  title: 'Single',
  value: 'atom'
}, {
  title: 'List',
  value: 'list'
}, {
  title: 'Not List',
  value: 'not-list'
}];
function TypeChoice(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded$7);
  return jsx("fieldset", {
    className: classes$e.fieldset,
    children: typeSchema.map(function (type) {
      return jsxs("label", {
        children: [jsx(GenericInput, _objectSpread$c({
          type: "radio",
          value: type.value,
          checked: type.value === value,
          onChange: function onChange() {
            return _onChange(type.value);
          }
        }, props)), type.title]
      }, type.title);
    })
  });
}

var classes$d = {"button-common-styles":"PeriodTable-module_button-common-styles__8JrOW","scrollbar":"PeriodTable-module_scrollbar__iG-vx","elementsTable":"PeriodTable-module_elementsTable__Vcz12","dialogHeader":"PeriodTable-module_dialogHeader__-Wgw4","tabs":"PeriodTable-module_tabs__q-2GL","tabsContent":"PeriodTable-module_tabsContent__5rij5","contentGeneral":"PeriodTable-module_contentGeneral__-XKPp","periodTable":"PeriodTable-module_periodTable__l-Uqx","addAtom":"PeriodTable-module_addAtom__ehSSN"};

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Table$1 = function (_Component) {
  _inherits(Table, _Component);
  var _super = _createSuper$1(Table);
  function Table(props) {
    var _this;
    _classCallCheck(this, Table);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "changeType", function (type) {
      var prevChoice = _this.state.type === 'list' || _this.state.type === 'not-list';
      var currentChoice = type === 'list' || type === 'not-list';
      if (prevChoice && currentChoice) {
        _this.setState({
          type: type
        });
      } else {
        _this.setState({
          type: type,
          value: type === 'atom' || type === 'gen' ? null : []
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "headerContent", function () {
      return jsxs("div", {
        className: classes$d.dialogHeader,
        children: [jsx(Icon, {
          name: "period-table"
        }), jsx("span", {
          children: "Periodic Table"
        })]
      });
    });
    _defineProperty(_assertThisInitialized(_this), "selected", function (label) {
      var _this$state = _this.state,
          type = _this$state.type,
          value = _this$state.value;
      return type === 'atom' || type === 'gen' ? value === label : value.includes(label);
    });
    _defineProperty(_assertThisInitialized(_this), "onAtomSelect", function (label) {
      var activateImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (activateImmediately) {
        var result = _this.result();
        var type = _this.state.type;
        if (result && type === 'atom') {
          _this.props.onOk(_this.result());
        }
      } else {
        var _this$state2 = _this.state,
            _type = _this$state2.type,
            value = _this$state2.value;
        _this.setState({
          value: _type === 'atom' || _type === 'gen' ? label : xor([label], value)
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "result", function () {
      var _this$state3 = _this.state,
          type = _this$state3.type,
          value = _this$state3.value;
      if (!value || !value.length) {
        return null;
      }
      if (type === 'atom') {
        return {
          label: value,
          pseudo: null
        };
      } else if (type === 'gen') {
        return {
          type: type,
          label: value,
          pseudo: value
        };
      }
      return {
        type: type,
        values: value
      };
    });
    _defineProperty(_assertThisInitialized(_this), "currentEvents", function (element) {
      return {
        onMouseEnter: function onMouseEnter() {
          return _this.setState({
            current: element,
            isInfo: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this.setState({
            isInfo: false
          });
        }
      };
    });
    _this.state = {
      type: props.type || 'atom',
      value: props.values || (!props.pseudo ? props.label : null) || null,
      current: Elements.get(2),
      isInfo: false
    };
    return _this;
  }
  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state4 = this.state;
          _this$state4.type;
          var value = _this$state4.value;
      var HeaderContent = this.headerContent;
      return jsx(Dialog, {
        headerContent: jsx(HeaderContent, {}),
        className: classes$d.elementsTable,
        params: this.props,
        result: this.result,
        buttons: ['Cancel', 'OK'],
        buttonsNameMap: {
          OK: 'Add'
        },
        needMargin: false,
        footerContent: jsx(TypeChoice, {
          value: this.state.type,
          onChange: this.changeType
        }),
        children: jsxs("div", {
          className: classes$d.periodTable,
          children: [jsx(AtomInfo, {
            el: this.state.current,
            isInfo: this.state.isInfo
          }), jsx(ElementsTable, {
            value: value,
            currentEvents: this.currentEvents,
            selected: this.selected,
            onAtomSelect: function onAtomSelect(label) {
              return _this2.onAtomSelect(label);
            },
            onDoubleClick: function onDoubleClick(label) {
              return _this2.onAtomSelect(label, true);
            }
          })]
        })
      });
    }
  }]);
  return Table;
}(Component);
function mapSelectionToProps$1(editor) {
  var selection = editor.selection();
  if (selection && Object.keys(selection).length === 1 && selection.atoms && Object.keys(selection.atoms).length === 1) {
    var struct = editor.struct();
    var atom = struct.atoms.get(selection.atoms[0]);
    return _objectSpread$b({}, fromElement(atom));
  }
  return {};
}
var mapStateToProps$2 = function mapStateToProps(state, ownProps) {
  if (ownProps.values || ownProps.label) {
    return {};
  }
  return mapSelectionToProps$1(state.editor);
};
var mapDispatchToProps$3 = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onOk: function onOk(result) {
      if (!result.type || result.type === 'atom') {
        dispatch(addAtoms(result.label));
      }
      dispatch(onAction({
        tool: 'atom',
        opts: toElement(result)
      }));
      ownProps.onOk(result);
    }
  };
};
var PeriodTable = connect(mapStateToProps$2, mapDispatchToProps$3)(Table$1);

var classes$c = {"extendedTable":"ExtendedTable-module_extendedTable__2-hjV"};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Table = function Table(props) {
  var _useState = useState(props.pseudo ? props.label : null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  var selected = function selected(label) {
    return value === label;
  };
  var result = function result() {
    if (!value || !value.length) {
      return null;
    }
    return {
      type: 'gen',
      label: value,
      pseudo: value
    };
  };
  var onAtomSelect = function onAtomSelect(label) {
    var activateImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setValue(label);
    if (activateImmediately) {
      props.onOk(result());
    }
  };
  return jsx(Dialog, {
    title: "Extended Table",
    withDivider: true,
    className: classes$c.extendedTable,
    params: props,
    result: result,
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Add'
    },
    needMargin: false,
    children: jsx(GenericGroups, {
      selected: selected,
      onAtomSelect: onAtomSelect
    })
  });
};
function mapSelectionToProps(editor) {
  var _selection$atoms;
  var selection = editor.selection();
  if ((selection === null || selection === void 0 ? void 0 : (_selection$atoms = selection.atoms) === null || _selection$atoms === void 0 ? void 0 : _selection$atoms.length) === 1) {
    var struct = editor.struct();
    var atom = struct.atoms.get(selection.atoms[0]);
    return _objectSpread$a({}, fromElement(atom));
  }
  return {};
}
var mapStateToProps$1 = function mapStateToProps(state, ownProps) {
  if (ownProps.values || ownProps.label) {
    return {};
  }
  return mapSelectionToProps(state.editor);
};
var mapDispatchToProps$2 = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onOk: function onOk(result) {
      dispatch(onAction({
        tool: 'atom',
        opts: toElement(result)
      }));
      ownProps.onOk(result);
    }
  };
};
var ExtendedTable = connect(mapStateToProps$1, mapDispatchToProps$2)(Table);

var classes$b = {"window":"RemoveFG-module_window__6PHH4","question":"RemoveFG-module_question__J8Qzx","header":"RemoveFG-module_header__1hBAs","footer":"RemoveFG-module_footer__8wImu","buttonOk":"RemoveFG-module_buttonOk__zR5x4","buttonCancel":"RemoveFG-module_buttonCancel__xCaJt"};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var RemoveFG = function RemoveFG(props) {
  var _useAppContext = useAppContext(),
      getKetcherInstance = _useAppContext.getKetcherInstance;
  var editor = getKetcherInstance().editor;
  var fgIds = props.fgIds;
  var remove = function remove() {
    if (fgIds.length > 0) {
      var _iterator = _createForOfIteratorHelper(fgIds),
          _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;
          editor.update(fromSgroupDeletion(editor.render.ctab, id));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return true;
  };
  var exit = function exit(key, res) {
    props[key](res);
  };
  return jsxs("div", {
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    },
    tabIndex: -1,
    className: classes$b.window,
    children: [jsx("header", {
      className: classes$b.header,
      children: "Edit Abbreviation"
    }), jsx("div", {
      className: classes$b.question,
      children: "A change was detected for the abbreviation. Do you want to remove the abbreviation information from the structure and continue work with separate atoms and bonds?"
    }), jsxs("footer", {
      className: classes$b.footer,
      children: [jsx("input", {
        type: "button",
        value: 'Cancel',
        className: classes$b.buttonCancel,
        onClick: function onClick() {
          return exit('onOk', false);
        }
      }), jsx("input", {
        type: "button",
        value: 'Remove Abbreviation',
        className: classes$b.buttonOk,
        onClick: function onClick() {
          return exit('onOk', remove());
        }
      })]
    })]
  });
};

function oneOrMore(multipl, values, item) {
  if (multipl) return xor(values, [item]);
  return xor(values, values.concat([item]));
}
function ButtonList(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      schema = _ref.schema,
      disabledIds = _ref.disabledIds,
      multiple = _ref.multiple,
      classes = _ref.classes;
  var className;
  var selected = classes.selected || 'selected';
  return jsx("ul", {
    children: schema.items["enum"].map(function (item, i) {
      className = value.includes(item) ? selected : '';
      return jsx("li", {
        children: jsx("button", {
          disabled: disabledIds.includes(item),
          type: "button",
          className: className,
          onClick: function onClick() {
            return onChange(oneOrMore(multiple, value, item));
          },
          children: schema.items.enumNames[i]
        })
      }, item);
    })
  });
}

var classes$a = {"button-common-styles":"rgroup-module_button-common-styles__O66iR","scrollbar":"rgroup-module_scrollbar__GmU8o","rgroup":"rgroup-module_rgroup__Pm-uA","selected":"rgroup-module_selected__hP5cM"};

var _excluded$6 = ["disabledIds", "values", "formState", "type"];
function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function RGroup(_ref) {
  var disabledIds = _ref.disabledIds,
      values = _ref.values,
      formState = _ref.formState,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded$6);
  return jsx(Dialog, {
    title: "R-Group",
    className: classes$a.rgroup,
    params: props,
    result: function result() {
      return formState.result;
    },
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: jsx(Form$1, _objectSpread$9(_objectSpread$9({
      schema: rgroupSchema,
      init: {
        values: values
      }
    }, formState), {}, {
      children: jsx(Field, {
        name: "values",
        multiple: type === 'atom',
        labelPos: false,
        component: ButtonList,
        disabledIds: disabledIds,
        classes: classes$a
      })
    }))
  });
}
var Rgroup = connect(function (store) {
  return {
    formState: store.modal.form
  };
})(RGroup);

var classes$9 = {"button-common-styles":"sgroup-module_button-common-styles__MAeEP","scrollbar":"sgroup-module_scrollbar__T3fpf","sgroup":"sgroup-module_sgroup__Kh2Xj"};

var _excluded$5 = ["context", "fieldName", "fieldValue", "type", "radiobuttons", "formState"];
function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function SData(_ref) {
  var context = _ref.context,
      fieldName = _ref.fieldName,
      fieldValue = _ref.fieldValue,
      type = _ref.type,
      radiobuttons = _ref.radiobuttons,
      formState = _ref.formState,
      prop = _objectWithoutProperties(_ref, _excluded$5);
  var _result = formState.result,
      _valid = formState.valid;
  var formSchema = sdataCustomSchema;
  var init = {
    context: context || getSdataDefault(formSchema, 'context'),
    fieldName: fieldName || getSdataDefault(formSchema, 'fieldName'),
    type: type,
    radiobuttons: radiobuttons || getSdataDefault(formSchema, 'radiobuttons')
  };
  init.fieldValue = fieldValue || getSdataDefault(formSchema, 'fieldValue');
  var serialize = {
    context: _result.context.trim(),
    fieldName: _result.fieldName.trim(),
    fieldValue: typeof _result.fieldValue === 'string' ? _result.fieldValue.trim() : _result.fieldValue
  };
  return jsx(Dialog, {
    title: "S-Group Properties",
    className: classes$9.sgroup,
    result: function result() {
      return _result;
    },
    valid: function valid() {
      return _valid;
    },
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Apply'
    },
    withDivider: true,
    needMargin: false,
    params: prop,
    children: jsx(Form$1, _objectSpread$8(_objectSpread$8({
      serialize: serialize,
      schema: formSchema,
      init: init
    }, formState), {}, {
      children: jsxs("fieldset", {
        className: "sdata",
        children: [jsx(Field, {
          name: "context",
          options: getSelectOptionsFromSchema(formSchema.properties.context),
          component: Select
        }), jsx(Field, {
          name: "fieldName",
          placeholder: "Enter name"
        }), content$1(formSchema, _result.context, _result.fieldName, _result.fieldValue, radiobuttons)]
      })
    }))
  });
}
var content$1 = function content(schema, context, fieldName, fieldValue, checked) {
  return Object.keys(schema.properties).filter(function (prop) {
    return prop !== 'type' && prop !== 'context' && prop !== 'fieldName';
  }).map(function (prop) {
    return prop === 'radiobuttons' ? jsx(Field, {
      name: prop,
      checked: checked,
      type: "radio",
      labelPos: false
    }, "".concat(context, "-").concat(fieldName, "-").concat(prop, "-radio")) : prop === 'fieldValue' ? jsx(Field, {
      name: prop,
      placeholder: "Enter value"
    }, "".concat(context, "-").concat(fieldName, "-").concat(prop, "-select")) : jsx(Field, {
      name: prop,
      type: "textarea"
    }, "".concat(context, "-").concat(fieldName, "-").concat(prop, "-select"));
  });
};
var Sdata = connect(function (store) {
  return {
    formState: store.modal.form
  };
})(SData);

var _excluded$4 = ["formState"];
function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Sgroup(_ref) {
  var formState = _ref.formState,
      prop = _objectWithoutProperties(_ref, _excluded$4);
  var _result = formState.result,
      _valid = formState.valid;
  var type = _result.type;
  return jsx(Dialog, {
    title: "S-Group Properties",
    className: classes$9.sgroup,
    result: function result() {
      return _result;
    },
    valid: function valid() {
      return _valid;
    },
    buttons: ['Cancel', 'OK'],
    buttonsNameMap: {
      OK: 'Apply'
    },
    withDivider: true,
    params: prop,
    children: jsxs(Form$1, _objectSpread$7(_objectSpread$7({
      schema: sgroupMap[type],
      init: prop
    }, formState), {}, {
      children: [jsx(SelectOneOf, {
        title: "Type",
        name: "type",
        schema: sgroupMap
      }), type !== 'GEN' && jsx("fieldset", {
        className: type === 'DAT' ? classes$9.data : 'base',
        children: content(type)
      })]
    }))
  });
}
var content = function content(type) {
  return Object.keys(sgroupMap[type].properties).filter(function (prop) {
    return prop !== 'type';
  }).map(function (prop) {
    var props = {};
    if (prop === 'name') props.maxLength = 15;
    if (prop === 'fieldName') props.maxLength = 30;
    if (prop === 'fieldValue') props.type = 'textarea';
    if (prop === 'radiobuttons') props.type = 'radio';
    if (prop === 'connectivity') return jsx(Field, _objectSpread$7(_objectSpread$7({
      name: prop
    }, props), {}, {
      component: Select,
      options: getSelectOptionsFromSchema(sgroupMap[type].properties[prop])
    }), "".concat(type, "-").concat(prop));
    return jsx(Field, _objectSpread$7({
      name: prop
    }, props), "".concat(type, "-").concat(prop));
  });
};
var Sgroup$1 = connect(function (store) {
  return {
    formState: store.modal.form
  };
})(Sgroup);

var classes$8 = {"button-common-styles":"template-lib-module_button-common-styles__9adxB","scrollbar":"template-lib-module_scrollbar__ZFwCC","warning":"template-lib-module_warning__UqgEG","dialogHeader":"template-lib-module_dialogHeader__-AmwE","button":"template-lib-module_button__LKf1c","dialog_body":"template-lib-module_dialog_body__QtL0J","inputContainer":"template-lib-module_inputContainer__dxoHA","searchIcon":"template-lib-module_searchIcon__o7cAy","accordionSummary":"template-lib-module_accordionSummary__2hIop","groupIcon":"template-lib-module_groupIcon__LBIRH","expandIcon":"template-lib-module_expandIcon__Fb1EU","tabsContent":"template-lib-module_tabsContent__1QMnN","resultsContainer":"template-lib-module_resultsContainer__KnPBZ","saveButton":"template-lib-module_saveButton__8PE6t","tabs":"template-lib-module_tabs__YkpEG"};

var _excluded$3 = ["onInit"],
    _excluded2$1 = ["name", "onNameEdit", "onAttachEdit"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TemplateEditDialog = styled(Dialog)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #fff;\n\n  & header {\n    text-transform: none;\n    border-bottom: 1px solid #e1e5ea;\n    margin: 0;\n    padding: 12px;\n  }\n\n  & form {\n    display: flex;\n\n    & label::after {\n      top: 92px;\n      margin-right: 12px;\n    }\n  }\n"])));
var Editor$2 = styled('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border: 1px solid #b4b9d6;\n  background-color: #ffff;\n  border-radius: 5px;\n  position: relative;\n  height: 300px;\n  width: 330px;\n  overflow: hidden;\n\n  & .structEditor {\n    height: 100%;\n    width: 100%;\n    border: none;\n  }\n"])));
var Warning = styled('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0 5px;\n"])));
var LeftColumn = styled('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 12px;\n  border-radius: 0 0 0 8px;\n  background-color: #eff2f5;\n"])));
var RightColumn = styled('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 40%;\n  min-width: 200px;\n  box-sizing: border-box;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n"])));
var NameInput = styled(Field)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n\n  & > input[type='text'] {\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 4px 16px 4px 8px;\n    border: 1px solid #cad3dd;\n    border-radius: 4px;\n    line-height: 16px;\n    font-size: 14px;\n    margin-top: 2px;\n\n    &:hover {\n      border-color: #43b5c0;\n    }\n\n    &:hover,\n    :focus {\n      box-shadow: none;\n    }\n  }\n\n  & span {\n    display: block;\n    width: 100%;\n  }\n"])));
var AttachmentOutput = styled('span')(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  height: 24px;\n  box-sizing: border-box;\n  padding: 4px 8px;\n  border: 1px solid #cad3dd;\n  border-radius: 4px;\n  line-height: 14px;\n  font-size: 14px;\n  background-color: #eff2f5;\n  margin-top: 2px;\n"])));
var Buttons = styled('div')(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  margin-top: auto;\n  justify-content: flex-end;\n  gap: 8px;\n"])));
var buttonCommonStyles = css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: fit-content;\n  padding: 5px 8px;\n  text-transform: none;\n  font-size: 12px;\n  line-height: 14px;\n  box-shadow: none;\n"])));
var SaveButton = styled(Button$1)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  background-color: #167782;\n\n  &:hover {\n    background-color: #43b5c0;\n    box-shadow: none;\n  }\n\n  &:disabled {\n    background-color: #e1e5ea;\n    color: #333333;\n  }\n"])), buttonCommonStyles);
var CancelButton = styled(Button$1)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n  border-color: #585858;\n  color: #585858;\n\n  &:hover {\n    border-color: #333333;\n    color: #333333;\n    box-shadow: none;\n  }\n"])), buttonCommonStyles);
var editorStyles = {
  selectionStyle: {
    fill: '#167782',
    'fill-opacity': '0.28',
    stroke: '#167782'
  },
  hoverStyle: {
    stroke: '#1a7090',
    'stroke-width': 1.2
  },
  hoverStyleSimpleObject: {
    'stroke-opacity': 0.3
  }
};
var Attach = function (_Component) {
  _inherits(Attach, _Component);
  var _super = _createSuper(Attach);
  function Attach(_ref) {
    var _this;
    var onInit = _ref.onInit,
        props = _objectWithoutProperties(_ref, _excluded$3);
    _classCallCheck(this, Attach);
    _this = _super.call(this);
    _this.tmpl = initTmpl(props.tmpl);
    onInit(_this.tmpl.struct.name, _this.tmpl.props);
    _this.onResult = _this.onResult.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Attach, [{
    key: "onResult",
    value: function onResult() {
      var _this$props = this.props,
          name = _this$props.name,
          atomid = _this$props.atomid,
          bondid = _this$props.bondid;
      return name && (name !== this.tmpl.struct.name || atomid !== this.tmpl.props.atomid || bondid !== this.tmpl.props.bondid) && name.trim().length ? {
        name: name,
        attach: {
          atomid: atomid,
          bondid: bondid
        }
      } : null;
    }
  }, {
    key: "checkIsValidName",
    value: function checkIsValidName(name) {
      return !!name && !this.props.templateLib.some(function (tmpl) {
        return tmpl.struct.name === name && tmpl.props.group === 'User Templates';
      }) && name.length <= 128;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
          name = _this$props2.name;
          _this$props2.onNameEdit;
          var onAttachEdit = _this$props2.onAttachEdit,
          prop = _objectWithoutProperties(_this$props2, _excluded2$1);
      var struct = this.tmpl.struct;
      var _ref2 = struct.atoms.get(this.props.atomid) && struct.bonds.get(this.props.bondid) ? this.props : this.tmpl.props,
          atomid = _ref2.atomid,
          bondid = _ref2.bondid;
      var options = Object.assign(editorStyles, this.props.globalSettings, {
        scale: getScale(struct)
      });
      return jsx(TemplateEditDialog, {
        title: "Template edit",
        result: this.onResult,
        valid: function valid() {
          return _this2.props.formState.valid && name;
        },
        params: prop,
        buttons: [],
        needMargin: false,
        children: jsxs(Form$1, _objectSpread$6(_objectSpread$6({
          schema: attachSchema,
          customValid: {
            name: function name(_name) {
              return _this2.checkIsValidName(_name);
            }
          }
        }, this.props.formState), {}, {
          children: [jsxs(LeftColumn, {
            children: [jsx(Editor$2, {
              children: jsx(StructEditor, {
                className: "structEditor",
                struct: struct,
                onAttachEdit: onAttachEdit,
                tool: "attach",
                toolOpts: {
                  atomid: atomid,
                  bondid: bondid
                },
                options: options,
                showAttachmentPoints: false
              })
            }), !storage.isAvailable() ? jsx(Warning, {
              children: storage.warningMessage
            }) : null]
          }), jsxs(RightColumn, {
            children: [jsx(NameInput, {
              name: "name",
              value: name,
              onChange: this.props.onNameEdit,
              placeholder: "template"
            }), jsx("span", {
              children: "Selected attachment points"
            }), jsxs(AttachmentOutput, {
              children: ["Atom ID: ", jsx("strong", {
                children: atomid
              }), " Bond ID:", ' ', jsx("strong", {
                children: bondid
              })]
            }), jsxs(Buttons, {
              children: [jsx(CancelButton, {
                variant: "outlined",
                onClick: this.props.onCancel,
                className: classes$8.button,
                children: "Cancel"
              }), jsx(SaveButton, {
                variant: "contained",
                onClick: function onClick() {
                  return _this2.props.onOk(_this2.onResult());
                },
                className: classes$8.button,
                disabled: !this.checkIsValidName(name),
                children: "Apply"
              })]
            })]
          })]
        }))
      });
    }
  }]);
  return Attach;
}(Component);
var TemplateAttach = connect(function (store) {
  return _objectSpread$6(_objectSpread$6({}, store.templates.attach), {}, {
    templateLib: store.templates.lib,
    formState: store.modal.form,
    globalSettings: store.options.settings
  });
}, function (dispatch) {
  return {
    onInit: function onInit(name, ap) {
      return dispatch(initAttach(name, ap));
    },
    onAttachEdit: function onAttachEdit(ap) {
      return dispatch(setAttachPoints(ap));
    },
    onNameEdit: function onNameEdit(name) {
      return dispatch(setTmplName(name));
    }
  };
})(Attach);
function initTmpl(tmpl) {
  var normTmpl = {
    struct: structNormalization(tmpl.struct),
    props: {
      atomid: +tmpl.props.atomid || 0,
      bondid: +tmpl.props.bondid || 0
    }
  };
  normTmpl.struct.name = tmpl.struct.name;
  return normTmpl;
}
function structNormalization(struct) {
  var normStruct = struct.clone();
  var cbb = normStruct.getCoordBoundingBox();
  normStruct.atoms.forEach(function (atom) {
    atom.pp = atom.pp.sub(cbb.min);
  });
  normStruct.sgroups.forEach(function (sg) {
    sg.pp = sg.pp ? sg.pp.sub(cbb.min) : cbb.min;
  });
  normStruct.rxnArrows.forEach(function (rxnArrow) {
    rxnArrow.pos = rxnArrow.pos.map(function (p) {
      return p.sub(cbb.min);
    });
  });
  normStruct.rxnPluses.forEach(function (rxnPlus) {
    rxnPlus.pp = rxnPlus.pp.sub(cbb.min);
  });
  normStruct.simpleObjects.forEach(function (simpleObject) {
    simpleObject.pos = simpleObject.pos.map(function (p) {
      return p.sub(cbb.min);
    });
  });
  normStruct.texts.forEach(function (text) {
    text.position = text.position.sub(cbb.min);
  });
  return normStruct;
}
function getScale(struct) {
  var cbb = struct.getCoordBoundingBox();
  var VIEW_SIZE = 220;
  var scale = VIEW_SIZE / Math.max(cbb.max.y - cbb.min.y, cbb.max.x - cbb.min.x);
  if (scale < 35) return 35;
  if (scale > 50) return 50;
  return 40;
}

var classes$7 = {"button-common-styles":"TemplateTable-module_button-common-styles__ZYUa5","scrollbar":"TemplateTable-module_scrollbar__aSGhu","tableContent":"TemplateTable-module_tableContent__dnVKg","structTitle":"TemplateTable-module_structTitle__2XUWI","twoRowsTitleTable":"TemplateTable-module_twoRowsTitleTable__ZYwHq","oneRowTitleTable":"TemplateTable-module_oneRowTitleTable__N8Ibd","struct":"TemplateTable-module_struct__lOLBI","selectedTitle":"TemplateTable-module_selectedTitle__J-cte","td":"TemplateTable-module_td__6LIhx","selected":"TemplateTable-module_selected__qZEF9","button":"TemplateTable-module_button__dpOF0","deleteButton":"TemplateTable-module_deleteButton__KfBpW","editButton":"TemplateTable-module_editButton__A0BoE","structure":"TemplateTable-module_structure__rI84W"};

var _excluded$2 = ["tmpl", "options"];
function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getSettingsSelector = function getSettingsSelector(state) {
  return state.options.settings;
};
var isSaltOrSolventTemplate = function isSaltOrSolventTemplate(template) {
  return template.props.group === 'Salts and Solvents';
};
var isFunctionalGroupTemplate = function isFunctionalGroupTemplate(template) {
  return template.props.group === 'Functional Groups';
};
function getTemplateTitle(template, index) {
  if (isSaltOrSolventTemplate(template)) {
    return template.props.name;
  }
  return template.struct.name || "".concat(template.props.group, " template ").concat(index + 1);
}
function tmplName(tmpl, i) {
  if (isSaltOrSolventTemplate(tmpl)) {
    return tmpl.props.abbreviation;
  }
  return tmpl.struct.name || "".concat(tmpl.props.group, " template ").concat(i + 1);
}
var RenderTmpl = function RenderTmpl(_ref) {
  var tmpl = _ref.tmpl,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, _excluded$2);
  return jsx(StructRender, _objectSpread$5({
    struct: tmpl.struct,
    options: _objectSpread$5(_objectSpread$5({}, options), {}, {
      autoScaleMargin: 15
    })
  }, props));
};
var TemplateTable = function TemplateTable(props) {
  var templates = props.templates,
      selected = props.selected,
      onSelect = props.onSelect,
      onDelete = props.onDelete,
      onAttach = props.onAttach,
      _props$titleRows = props.titleRows,
      titleRows = _props$titleRows === void 0 ? 2 : _props$titleRows;
  var options = useSelector(function (state) {
    return getSettingsSelector(state);
  });
  return jsx("div", {
    className: "".concat(classes$7.tableContent, " ").concat(titleRows === 1 ? classes$7.oneRowTitleTable : classes$7.twoRowsTitleTable),
    children: templates.map(function (tmpl, i) {
      return jsxs("div", {
        className: tmpl.struct !== (selected === null || selected === void 0 ? void 0 : selected.struct) ? classes$7.td : "".concat(classes$7.td, " ").concat(classes$7.selected),
        title: greekify(getTemplateTitle(tmpl, i)),
        onClick: function onClick() {
          return onSelect(tmpl);
        },
        children: [jsx(RenderTmpl, {
          tmpl: tmpl,
          options: options,
          className: classes$7.struct
        }), jsx("div", {
          className: "".concat(classes$7.structTitle, " ").concat((selected === null || selected === void 0 ? void 0 : selected.struct) === tmpl.struct ? classes$7.selectedTitle : ''),
          children: greekify(tmplName(tmpl, i))
        }), tmpl.props.group === 'User Templates' && jsx("button", {
          className: "".concat(classes$7.button, " ").concat(classes$7.deleteButton),
          onClick: function onClick() {
            return onDelete(tmpl);
          },
          children: jsx(Icon, {
            name: "delete"
          })
        }), !isFunctionalGroupTemplate(tmpl) && !isSaltOrSolventTemplate(tmpl) && jsx("button", {
          className: "".concat(classes$7.button, " ").concat(classes$7.editButton),
          onClick: function onClick() {
            return onAttach(tmpl);
          },
          children: jsx(Icon, {
            name: "edit"
          })
        })]
      }, tmpl.struct.name !== (selected === null || selected === void 0 ? void 0 : selected.struct.name) ? "".concat(tmpl.struct.name, "_").concat(i) : "".concat(tmpl.struct.name, "_").concat(i, "_selected"));
    })
  });
};

var saltsAndSolventsSelector = function saltsAndSolventsSelector(state) {
  return state.saltsAndSolvents.lib;
};

var classes$6 = {"emptySearch":"emptySearchResult-module_emptySearch__aUSew"};

var EmptySearchResult = function EmptySearchResult(_ref) {
  var textInfo = _ref.textInfo;
  return jsxs("div", {
    className: classes$6.emptySearch,
    children: [jsx("p", {
      children: textInfo
    }), jsx(Icon, {
      name: "not-found"
    })]
  });
};

var _excluded$1 = ["children", "value", "index"],
    _excluded2 = ["filter", "onFilter", "onChangeGroup", "mode", "initialTab", "functionalGroups", "lib", "saltsAndSolvents"];
function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, _excluded$1);
  return jsx("div", _objectSpread$4(_objectSpread$4({
    className: classes$8.tabPanel,
    component: "div",
    role: "tabpanel",
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other), {}, {
    children: value === index && children
  }));
}
function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    'aria-controls': "scrollable-auto-tabpanel-".concat(index)
  };
}
var TemplateTabs;
(function (TemplateTabs) {
  TemplateTabs[TemplateTabs["TemplateLibrary"] = 0] = "TemplateLibrary";
  TemplateTabs[TemplateTabs["FunctionalGroupLibrary"] = 1] = "FunctionalGroupLibrary";
  TemplateTabs[TemplateTabs["SaltsAndSolvents"] = 2] = "SaltsAndSolvents";
})(TemplateTabs || (TemplateTabs = {}));
var filterLibSelector = createSelector(function (props) {
  return props.lib;
}, function (props) {
  return props.filter;
}, filterLib);
var FUNCTIONAL_GROUPS = 'Functional Groups';
var SALTS_AND_SOLVENTS = 'Salts and Solvents';
var HeaderContent = function HeaderContent() {
  return jsxs("div", {
    className: classes$8.dialogHeader,
    children: [jsx(Icon, {
      name: "template-dialog"
    }), jsx("span", {
      children: "Templates"
    })]
  });
};
var FooterContent = function FooterContent(_ref) {
  var data = _ref.data,
      tab = _ref.tab;
  var clickToAddToCanvas = jsx("span", {
    children: "Click to add to canvas"
  });
  if (tab === TemplateTabs.SaltsAndSolvents) {
    return clickToAddToCanvas;
  }
  return jsxs("div", {
    style: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    children: [jsx(SaveButton$1, {
      data: data,
      className: classes$8.saveButton,
      filename: tab === TemplateTabs.TemplateLibrary ? 'ketcher-tmpls.sdf' : 'ketcher-fg-tmpls.sdf',
      children: "Save to SDF"
    }, "save-to-SDF"), clickToAddToCanvas]
  });
};
var TemplateDialog = function TemplateDialog(props) {
  var _serializerMapper;
  var filter = props.filter,
      onFilter = props.onFilter,
      onChangeGroup = props.onChangeGroup;
      props.mode;
      var initialTab = props.initialTab,
      functionalGroups = props.functionalGroups,
      templateLib = props.lib,
      saltsAndSolvents = props.saltsAndSolvents,
      rest = _objectWithoutProperties(props, _excluded2);
  var _useState = useState(initialTab !== null && initialTab !== void 0 ? initialTab : TemplateTabs.TemplateLibrary),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];
  var _useState3 = useState([props.group]),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedAccordions = _useState4[0],
      setExpandedAccordions = _useState4[1];
  var _useState5 = useState(functionalGroups[FUNCTIONAL_GROUPS]),
      _useState6 = _slicedToArray(_useState5, 2),
      filteredFG = _useState6[0],
      setFilteredFG = _useState6[1];
  var _useState7 = useState(saltsAndSolvents[SALTS_AND_SOLVENTS]),
      _useState8 = _slicedToArray(_useState7, 2),
      filteredSaltsAndSolvents = _useState8[0],
      setFilteredSaltsAndSolvents = _useState8[1];
  var filteredTemplateLib = filterLibSelector(props);
  useEffect(function () {
    setFilteredFG(filterFGLib(functionalGroups, filter)[FUNCTIONAL_GROUPS]);
  }, [functionalGroups, filter]);
  useEffect(function () {
    setFilteredSaltsAndSolvents(filterFGLib(saltsAndSolvents, filter)[SALTS_AND_SOLVENTS]);
  }, [saltsAndSolvents, filter]);
  var handleTabChange = function handleTabChange(_, tab) {
    setTab(tab);
    props.onSelect(null);
  };
  var handleAccordionChange = function handleAccordionChange(accordion) {
    return function (_, isExpanded) {
      setExpandedAccordions(isExpanded ? [].concat(_toConsumableArray(expandedAccordions), [accordion]) : _toConsumableArray(expandedAccordions).filter(function (expandedAccordion) {
        return expandedAccordion !== accordion;
      }));
    };
  };
  var sdfSerializer = new SdfSerializer();
  var serializerMapper = (_serializerMapper = {}, _defineProperty(_serializerMapper, TemplateTabs.TemplateLibrary, templateLib), _defineProperty(_serializerMapper, TemplateTabs.FunctionalGroupLibrary, functionalGroups), _defineProperty(_serializerMapper, TemplateTabs.SaltsAndSolvents, saltsAndSolvents), _serializerMapper);
  var data = sdfSerializer.serialize(serializerMapper[tab]);
  var select = function select(tmpl) {
    onChangeGroup(tmpl.props.group);
    props.onSelect(tmpl);
  };
  return jsxs(Dialog, {
    headerContent: jsx(HeaderContent, {}),
    footerContent: jsx(FooterContent, {
      tab: tab,
      data: data
    }),
    className: "".concat(classes$8.dialog_body),
    params: omit(['group'], rest),
    buttons: [],
    needMargin: false,
    children: [jsxs("div", {
      className: classes$8.inputContainer,
      children: [jsx(Input, {
        className: classes$8.input,
        type: "search",
        value: filter,
        onChange: function onChange(value) {
          return onFilter(value);
        },
        placeholder: "Search by elements...",
        isFocused: true
      }), jsx(Icon, {
        name: "search",
        className: classes$8.searchIcon
      })]
    }), jsxs(Tabs$1, {
      value: tab,
      onChange: handleTabChange,
      className: classes$8.tabs,
      children: [jsx(Tab, _objectSpread$4({
        label: "Template Library"
      }, a11yProps(TemplateTabs.TemplateLibrary))), jsx(Tab, _objectSpread$4({
        label: "Functional Groups"
      }, a11yProps(TemplateTabs.FunctionalGroupLibrary))), jsx(Tab, _objectSpread$4({
        label: "Salts and Solvents"
      }, a11yProps(TemplateTabs.SaltsAndSolvents)))]
    }), jsxs("div", {
      className: classes$8.tabsContent,
      children: [jsx(TabPanel, {
        value: tab,
        index: TemplateTabs.TemplateLibrary,
        children: jsx("div", {
          children: Object.keys(filteredTemplateLib).length ? Object.keys(filteredTemplateLib).map(function (groupName) {
            var shouldGroupBeRended = expandedAccordions.includes(groupName);
            return jsxs(Accordion$1, {
              square: true,
              onChange: handleAccordionChange(groupName),
              expanded: shouldGroupBeRended,
              children: [jsxs(AccordionSummary, {
                className: classes$8.accordionSummary,
                expandIcon: jsx(Icon, {
                  className: classes$8.expandIcon,
                  name: "chevron"
                }),
                children: [jsx(Icon, {
                  name: "elements-group",
                  className: classes$8.groupIcon
                }), "".concat(greekify(groupName), " (").concat(filteredTemplateLib[groupName].length, ")")]
              }), jsx(AccordionDetails, {
                children: jsx(TemplateTable, {
                  templates: shouldGroupBeRended ? filteredTemplateLib[groupName] : [],
                  onSelect: function onSelect(templ) {
                    return select(templ);
                  },
                  selected: props.selected,
                  onDelete: props.onDelete,
                  onAttach: props.onAttach
                })
              })]
            }, groupName);
          }) : jsx("div", {
            className: classes$8.resultsContainer,
            children: jsx(EmptySearchResult, {
              textInfo: "No items found"
            })
          })
        })
      }), jsx(TabPanel, {
        value: tab,
        index: TemplateTabs.FunctionalGroupLibrary,
        children: filteredFG !== null && filteredFG !== void 0 && filteredFG.length ? jsx("div", {
          className: classes$8.resultsContainer,
          children: jsx(TemplateTable, {
            titleRows: 1,
            templates: filteredFG,
            onSelect: function onSelect(templ) {
              return select(templ);
            },
            selected: props.selected
          })
        }) : jsx("div", {
          className: classes$8.resultsContainer,
          children: jsx(EmptySearchResult, {
            textInfo: "No items found"
          })
        })
      }), jsx(TabPanel, {
        value: tab,
        index: TemplateTabs.SaltsAndSolvents,
        children: filteredSaltsAndSolvents !== null && filteredSaltsAndSolvents !== void 0 && filteredSaltsAndSolvents.length ? jsx("div", {
          className: classes$8.resultsContainer,
          children: jsx(TemplateTable, {
            titleRows: 1,
            templates: filteredSaltsAndSolvents,
            onSelect: function onSelect(templ) {
              return select(templ);
            },
            selected: props.selected
          })
        }) : jsx("div", {
          className: classes$8.resultsContainer,
          children: jsx(EmptySearchResult, {
            textInfo: "No items found"
          })
        })
      })]
    })]
  });
};
var selectTemplate = function selectTemplate(template, props, dispatch) {
  dispatch(selectTmpl(null));
  if (!template) return;
  dispatch(selectTmpl(template));
  dispatch(onAction({
    tool: 'template',
    opts: template
  }));
  props.onOk(template);
};
var TemplatesDialog = connect(function (store) {
  var _store$modal, _store$modal$prop;
  return _objectSpread$4(_objectSpread$4({}, omit(['attach'], store.templates)), {}, {
    initialTab: (_store$modal = store.modal) === null || _store$modal === void 0 ? void 0 : (_store$modal$prop = _store$modal.prop) === null || _store$modal$prop === void 0 ? void 0 : _store$modal$prop.tab,
    functionalGroups: functionalGroupsSelector(store),
    saltsAndSolvents: saltsAndSolventsSelector(store)
  });
}, function (dispatch, props) {
  return {
    onFilter: function onFilter(filter) {
      return dispatch(changeFilter(filter));
    },
    onSelect: function onSelect(tmpl) {
      return selectTemplate(tmpl, props, dispatch);
    },
    onChangeGroup: function onChangeGroup(group) {
      return dispatch(changeGroup(group));
    },
    onAttach: function onAttach(tmpl) {
      return dispatch(editTmpl(tmpl));
    },
    onDelete: function onDelete(tmpl) {
      return dispatch(deleteTmpl(tmpl));
    }
  };
})(TemplateDialog);

var classes$5 = {"button-common-styles":"FontControl-module_button-common-styles__CMSGk","scrollbar":"FontControl-module_scrollbar__Vq3kt","fontSizeMenu":"FontControl-module_fontSizeMenu__4RvmP","fontSizeOption":"FontControl-module_fontSizeOption__eGz-q","fontBtn":"FontControl-module_fontBtn__zGgG3"};

var FontControl = function FontControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState,
      styles = _ref.styles;
  var defaultFontSize = '13px';
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowingFontSizeMenu = _useState2[0],
      setIsShowingFontSizeMenu = _useState2[1];
  var _useState3 = useState(defaultFontSize),
      _useState4 = _slicedToArray(_useState3, 2),
      currentFontSize = _useState4[0],
      setCurrentFontSize = _useState4[1];
  var setFontSize = function setFontSize(e, value) {
    e.preventDefault();
    setCurrentFontSize(value);
    var newEditorState = styles.fontSize.remove(editorState);
    setEditorState(styles.fontSize.add(newEditorState, value));
    setIsShowingFontSizeMenu(false);
  };
  var currentStyle = styles.fontSize.current(editorState);
  useEffect(function () {
    setCurrentFontSize(currentStyle || defaultFontSize);
  }, [currentStyle]);
  var MIN_FONT_SIZE = 4;
  var MAX_FONT_SIZE = 144;
  var fontSizes = range(MIN_FONT_SIZE, MAX_FONT_SIZE + 1);
  var fontSizeOptions = useMemo(function () {
    return fontSizes.map(function (fontSize) {
      return jsx("div", {
        className: classes$5.fontSizeOption,
        onMouseDown: function onMouseDown(e) {
          return setFontSize(e, "".concat(fontSize, "px"));
        },
        children: fontSize
      }, fontSize);
    });
  }, [isShowingFontSizeMenu]);
  return jsxs("div", {
    children: [jsx("button", {
      className: classes$5.fontBtn,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        setIsShowingFontSizeMenu(!isShowingFontSizeMenu);
      },
      children: parseFloat(currentFontSize)
    }), isShowingFontSizeMenu ? jsx("div", {
      className: classes$5.fontSizeMenu,
      children: fontSizeOptions
    }) : null]
  });
};

var classes$4 = {"window":"SpecialSymbolsList-module_window__4tD1N","button":"SpecialSymbolsList-module_button__uCp6O"};

var SpecialSymbolsList = function SpecialSymbolsList(_ref) {
  var select = _ref.select;
  var symbols = ['??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '??', '???', '???', '???', '??', '??', '??', '???', '???', '???', '???', '???/', '/???', '???', '???', '???', '???', '???', '???', '???', '???', '=/', '???', '???'];
  return jsx("div", {
    className: classes$4.window,
    children: symbols.map(function (symbol, id) {
      return jsx("button", {
        className: classes$4.button,
        value: symbol,
        onMouseDown: function onMouseDown(event) {
          select(event, symbol);
        },
        children: jsx(Icon, {
          name: symbol
        })
      }, "symbol-".concat(id));
    })
  });
};

var classes$3 = {"button-common-styles":"SpecialSymbolsButton-module_button-common-styles__OZY5u","scrollbar":"SpecialSymbolsButton-module_scrollbar__BGjVm","textButton":"SpecialSymbolsButton-module_textButton__1gh-c","activeTextButton":"SpecialSymbolsButton-module_activeTextButton__jbgHY"};

var SpecialSymbolsButton = function SpecialSymbolsButton(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState,
      styles = _ref.styles;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSpecialSymbols = _useState2[0],
      setShowSpecialSymbols = _useState2[1];
  var handleClose = function handleClose(event) {
    event.stopPropagation();
    event.preventDefault();
    setShowSpecialSymbols(false);
  };
  var closeSymbolsList = function closeSymbolsList(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleClose(event);
    }
  };
  var addSymbol = function addSymbol(e, value) {
    e.preventDefault();
    var selection = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var nextContentState = Modifier.replaceText(contentState, selection, value, styles);
    var nextEditorState = EditorState.push(editorState, nextContentState, 'insert-characters');
    setEditorState(nextEditorState);
    setShowSpecialSymbols(false);
  };
  return jsxs("div", {
    onBlur: closeSymbolsList,
    children: [jsx("button", {
      title: "symbols",
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        setShowSpecialSymbols(!showSpecialSymbols);
      },
      className: showSpecialSymbols ? classes$3.activeTextButton : classes$3.textButton,
      children: jsx(Icon, {
        name: "text-special-symbols"
      })
    }), showSpecialSymbols && jsx(SpecialSymbolsList, {
      select: addSymbol
    })]
  });
};

var styles$1 = {"button-common-styles":"TextButton-module_button-common-styles__7F1Uf","scrollbar":"TextButton-module_scrollbar__u11Yl","textButton":"TextButton-module_textButton__Ocny2","isActive":"TextButton-module_isActive__DQ-xh"};

var TextButton = function TextButton(props) {
  var toggleStyle = function toggleStyle(event, command) {
    event.preventDefault();
    props.toggleStyle(command);
  };
  return jsx("button", {
    className: clsx(styles$1.textButton, _defineProperty({}, styles$1.isActive, props.active)),
    title: props.button.command.toLowerCase(),
    onMouseDown: function onMouseDown(event) {
      toggleStyle(event, props.button.command);
    },
    children: jsx(Icon, {
      name: props.button.name
    })
  });
};

var classes$2 = {"button-common-styles":"Text-module_button-common-styles__dhz9O","scrollbar":"Text-module_scrollbar__0OhTV","textEditor":"Text-module_textEditor__EFR54","controlPanel":"Text-module_controlPanel__agLDc"};

var _createStyles = createStyles(['font-size']),
    styles = _createStyles.styles,
    customStyleFn = _createStyles.customStyleFn;
var buttons = [{
  command: TextCommand.Bold,
  name: 'text-bold'
}, {
  command: TextCommand.Italic,
  name: 'text-italic'
}, {
  command: TextCommand.Superscript,
  name: 'text-superscript'
}, {
  command: TextCommand.Subscript,
  name: 'text-subscript'
}];
var Text = function Text(props) {
  var formState = props.formState,
      position = props.position,
      id = props.id;
  var rawContentState = props.content ? JSON.parse(props.content) : null;
  var _useState = useState(EditorState.moveFocusToEnd(EditorState.createWithContent(convertFromRaw(rawContentState || {
    blocks: [],
    entityMap: {}
  })))),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];
  var result = function result() {
    var content = editorState.getCurrentContent();
    return {
      content: content.hasText() ? JSON.stringify(convertToRaw(content)) : '',
      position: position,
      id: id
    };
  };
  var keyBindingFn = function keyBindingFn(e) {
    if (e.key === 'Enter') {
      e.stopPropagation();
    }
    return getDefaultKeyBinding(e);
  };
  var onContentChange = function onContentChange(state) {
    setEditorState(state);
  };
  var currentStyle = editorState.getCurrentInlineStyle();
  var toggleStyle = useCallback(function (command) {
    var newEditorState = editorState;
    switch (command) {
      case TextCommand.Subscript:
        {
          if (currentStyle.has(TextCommand.Superscript)) {
            newEditorState = RichUtils.toggleInlineStyle(newEditorState, TextCommand.Superscript);
          }
          break;
        }
      case TextCommand.Superscript:
        {
          if (currentStyle.has(TextCommand.Subscript)) {
            newEditorState = RichUtils.toggleInlineStyle(newEditorState, TextCommand.Subscript);
          }
          break;
        }
    }
    newEditorState = RichUtils.toggleInlineStyle(newEditorState, command);
    setEditorState(newEditorState);
  }, [currentStyle, editorState]);
  var customStyleMap = {
    SUBSCRIPT: {
      verticalAlign: 'sub',
      transform: 'scale(0.7)',
      transformOrigin: 'left'
    },
    SUPERSCRIPT: {
      verticalAlign: 'super',
      transform: 'scale(0.7)',
      transformOrigin: 'left',
      lineHeight: 0
    }
  };
  var refEditor = useRef();
  var setFocusInEditor = useCallback(function () {
    refEditor.current.focus();
  }, [refEditor]);
  useEffect(function () {
    setFocusInEditor();
  }, [setFocusInEditor]);
  return jsxs(Dialog, {
    className: classes$2.textEditor,
    title: "Text Editor",
    params: props,
    result: result,
    valid: function valid() {
      return formState.form.valid;
    },
    buttonsNameMap: {
      OK: 'Apply'
    },
    buttons: ['Cancel', 'OK'],
    withDivider: true,
    children: [jsxs("div", {
      className: classes$2.controlPanel,
      onClick: setFocusInEditor,
      children: [buttons.map(function (button) {
        return jsx(TextButton, {
          button: button,
          active: currentStyle.has(button.command),
          toggleStyle: toggleStyle
        }, button.name);
      }), jsx(SpecialSymbolsButton, {
        editorState: editorState,
        setEditorState: setEditorState,
        styles: currentStyle
      }), jsx("span", {
        children: "Font Size"
      }), jsx(FontControl, {
        editorState: editorState,
        setEditorState: setEditorState,
        styles: styles
      })]
    }), jsx("span", {
      children: "Text:"
    }), jsx(Editor$4, {
      keyBindingFn: keyBindingFn,
      editorState: editorState,
      onChange: onContentChange,
      customStyleMap: customStyleMap,
      customStyleFn: customStyleFn,
      ref: refEditor
    })]
  });
};
var Text$1 = connect(function (store) {
  return {
    formState: store.modal
  };
})(Text);

var Confirm = function Confirm(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel;
  return jsxs("div", {
    className: classes$b.window,
    children: [jsx("header", {
      className: classes$b.header,
      children: "Warning!"
    }), jsx("div", {
      className: classes$b.question,
      children: "Unsupported S-group type found. Would you like to import structure without it?"
    }), jsxs("footer", {
      className: classes$b.footer,
      children: [jsx("input", {
        type: "button",
        value: 'Cancel',
        className: classes$b.buttonCancel,
        onClick: function onClick() {
          return onCancel();
        }
      }), jsx("input", {
        type: "button",
        value: 'OK',
        className: classes$b.buttonOk,
        onClick: function onClick() {
          return onOk();
        }
      })]
    })]
  });
};

var modals = {
  open: OpenContainer,
  analyse: Analyse,
  recognize: Recognize,
  'period-table': PeriodTable,
  'extended-table': ExtendedTable,
  rgroup: Rgroup,
  attach: TemplateAttach,
  templates: TemplatesDialog,
  about: About,
  miew: Miew,
  atomProps: AtomContainer,
  attachmentPoints: AttachPointsContainer,
  automap: AutomapContainer,
  bondProps: BondContainer,
  check: Check,
  enhancedStereo: EnhancedStereo$1,
  labelEdit: LabelEdit$1,
  rgroupLogic: RgroupLogicContainer,
  removeFG: RemoveFG,
  save: Save,
  settings: Settings,
  sgroup: Sgroup$1,
  sdata: Sdata,
  text: Text$1,
  confirm: Confirm
};

var _excluded = ["modal"];
function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Modal(props) {
  var modal = props.modal,
      rest = _objectWithoutProperties(props, _excluded);
  var containerRef = useRef(null);
  var _useResizeObserver = useResizeObserver({
    ref: containerRef
  }),
      height = _useResizeObserver.height,
      width = _useResizeObserver.width;
  if (!modal) return null;
  var Component = modals[modal.name];
  if (!Component) throw new Error("There is no modal window named ".concat(modal.name));
  return jsx("div", {
    className: clsx(classes$F.modalOverlay, selectClasses.selectContainer),
    ref: containerRef,
    children: jsx(Component, _objectSpread$3({
      className: clsx(_defineProperty({}, classes$F.smallScreen, height && height <= mediaSizes$1.smallHeight || width && width <= mediaSizes$1.smallWidth))
    }, rest))
  });
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mapStateToProps = function mapStateToProps(state) {
  return {
    modal: state.modal
  };
};
var mapDispatchToProps$1 = function mapDispatchToProps(dispatch) {
  return {
    onOk: function onOk(_result) {
      dispatch({
        type: 'MODAL_CLOSE'
      });
    },
    onCancel: function onCancel() {
      dispatch({
        type: 'MODAL_CLOSE'
      });
    }
  };
};
var mergeProps = function mergeProps(stateProps, dispatchProps) {
  var prop = stateProps.modal && stateProps.modal.prop;
  var initProps = prop ? omit(['onResult', 'onCancel'], prop) : {};
  return _objectSpread$2(_objectSpread$2({
    modal: stateProps.modal
  }, initProps), {}, {
    onOk: function onOk(result) {
      if (prop && prop.onResult) prop.onResult(result);
      dispatchProps.onOk(result);
    },
    onCancel: function onCancel() {
      if (prop && prop.onCancel) prop.onCancel();
      dispatchProps.onCancel();
    }
  });
};
var ModalContainer = connect(mapStateToProps, mapDispatchToProps$1, mergeProps)(Modal);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function initEditor(dispatch, getState) {
  var updateAction = debounce(100, function () {
    return dispatch({
      type: 'UPDATE'
    });
  });
  var sleep = function sleep(time) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, time);
    });
  };
  function resetToSelect(dispatch) {
    var state = global.currentState;
    var activeTool = state.actionState.activeTool.tool;
    if (activeTool === 'select') return;
    var selectMode = state.toolbar.visibleTools.select;
    var resetOption = state.options.settings.resetToSelect;
    if (resetOption === true || resetOption === activeTool)
      dispatch({
        type: 'ACTION',
        action: config[selectMode].action
      });else updateAction();
  }
  return {
    onInit: function onInit(editor) {
      dispatch({
        type: 'INIT',
        editor: editor
      });
    },
    onChange: function onChange(action) {
      if (action === undefined) sleep(0).then(function () {
        return dispatch(resetToSelect);
      });
      else dispatch(resetToSelect);
    },
    onSelectionChange: function onSelectionChange() {
      updateAction();
    },
    onElementEdit: function onElementEdit(selem) {
      var elem = selem.type === 'text' ? selem : fromElement(selem);
      var dlg = null;
      if (elem.type === 'text') {
        return openDialog(dispatch, 'text', elem);
      } else if (Elements.get(elem.label)) {
        dlg = openDialog(dispatch, 'atomProps', elem);
      } else if (Object.keys(elem).length === 1 && 'ap' in elem) {
        dlg = openDialog(dispatch, 'attachmentPoints', elem.ap).then(function (res) {
          return {
            ap: res
          };
        });
      } else if (elem.type === 'list' || elem.type === 'not-list') {
        dlg = openDialog(dispatch, !elem.pseudo ? 'period-table' : 'extended-table', _objectSpread$1(_objectSpread$1({}, elem), {}, {
          pseudo: elem.pseudo
        }));
      } else if (elem.type === 'rlabel') {
        var rgroups = getState().editor.struct().rgroups;
        var params = {
          type: 'atom',
          values: elem.values,
          disabledIds: Array.from(rgroups.entries()).reduce(function (acc, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                rgid = _ref2[0],
                rg = _ref2[1];
            if (rg.frags.has(elem.fragId)) acc.push(rgid);
            return acc;
          }, [])
        };
        dlg = openDialog(dispatch, 'rgroup', params).then(function (res) {
          return {
            values: res.values,
            type: 'rlabel'
          };
        });
      } else {
        dlg = openDialog(dispatch, !elem.pseudo ? 'period-table' : 'extended-table', _objectSpread$1(_objectSpread$1({}, elem), {}, {
          pseudo: elem.pseudo
        }));
      }
      return dlg.then(toElement);
    },
    onEnhancedStereoEdit: function onEnhancedStereoEdit(_ref3) {
      var init = _extends$2X({}, _ref3);
      return sleep(0).then(function () {
        init = fromStereoLabel(init.stereoLabel);
        return openDialog(dispatch, 'enhancedStereo', {
          init: init
        }).then(function (res) {
          return toStereoLabel(res);
        }, function () {
          return null;
        });
      });
    },
    onQuickEdit: function onQuickEdit(atom) {
      return openDialog(dispatch, 'labelEdit', atom);
    },
    onBondEdit: function onBondEdit(bond) {
      return openDialog(dispatch, 'bondProps', fromBond(bond)).then(toBond);
    },
    onRgroupEdit: function onRgroupEdit(rgroup) {
      var struct = getState().editor.struct();
      if (Object.keys(rgroup).length > 2) {
        var rgroupLabels = Array.from(struct.rgroups.keys());
        if (!rgroup.range) rgroup.range = '>0';
        return openDialog(dispatch, 'rgroupLogic', Object.assign({
          rgroupLabels: rgroupLabels
        }, rgroup));
      }
      var disabledIds = Array.from(struct.atoms.values()).reduce(function (acc, atom) {
        if (atom.fragment === rgroup.fragId && atom.rglabel !== null) return acc.concat(fromElement(atom).values);
        return acc;
      }, []);
      var params = {
        type: 'fragment',
        values: [rgroup.label],
        disabledIds: disabledIds
      };
      return openDialog(dispatch, 'rgroup', params).then(function (res) {
        return {
          label: res.values[0]
        };
      });
    },
    onSgroupEdit: function onSgroupEdit(sgroup) {
      return sleep(0)
      .then(function () {
        return openDialog(dispatch, 'sgroup', fromSgroup(sgroup));
      }).then(toSgroup);
    },
    onRemoveFG: function onRemoveFG(result) {
      return sleep(0).then(function () {
        return openDialog(dispatch, 'removeFG', result);
      });
    },
    onSdataEdit: function onSdataEdit(sgroup) {
      return sleep(0).then(function () {
        return openDialog(dispatch, sgroup.type === 'DAT' ? 'sdata' : 'sgroup', fromSgroup(sgroup));
      }).then(toSgroup);
    },
    onMessage: function onMessage(msg) {
      if (msg.error) ;
    },
    onAromatizeStruct: function onAromatizeStruct(struct) {
      var state = getState();
      var serverOpts = state.options.getServerSettings();
      return serverCall(state.editor, state.server, 'aromatize', serverOpts, struct)["catch"](function (e) {
        return state.editor.errorHandler(e);
      });
    },
    onDearomatizeStruct: function onDearomatizeStruct(struct) {
      var state = getState();
      var serverOpts = state.options.getServerSettings();
      return serverCall(state.editor, state.server, 'dearomatize', serverOpts, struct)["catch"](function (e) {
        return state.editor.errorHandler(e);
      });
    },
    onMouseDown: function onMouseDown() {
      updateAction();
    },
    onConfirm: function onConfirm() {
      return openDialog(dispatch, 'confirm');
    },
    onShowInfo: function onShowInfo(payload) {
      if (payload) {
        var groupStruct = payload.groupStruct,
            event = payload.event,
            sGroup = payload.sGroup;
        highlightFG(dispatch, {
          groupStruct: groupStruct,
          event: event,
          sGroup: sGroup
        });
      } else {
        highlightFG(dispatch, {
          groupStruct: null,
          event: null,
          sGroup: null
        });
      }
    }
  };
}

var Editor$1 = connect(function (state) {
  return {
    options: state.options.settings,
    indigoVerification: state.requestsStatuses.indigoVerification
  };
}, function (dispatch) {
  return dispatch(initEditor);
})(StructEditor);

var classes$1 = {"app":"App-module_app__8cgyF","canvas":"App-module_canvas__taJxn","top":"App-module_top__SBeSV","left":"App-module_left__2iz-i","right":"App-module_right__U7A5Q","bottom":"App-module_bottom__tQA2B"};

var muiTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});
var App = function App(props) {
  var dispatch = useDispatch();
  var checkServer = props.checkServer;
  var _useSettingsContext = useSettingsContext(),
      staticResourcesUrl = _useSettingsContext.staticResourcesUrl;
  useSubscriptionOnEvents();
  useEffect(function () {
    checkServer();
    dispatch(initFGTemplates(staticResourcesUrl));
    dispatch(initSaltsAndSolventsTemplates(staticResourcesUrl));
    window.scrollTo(0, 0);
  }, []);
  return jsx(ThemeProvider, {
    theme: muiTheme,
    children: jsxs("div", {
      className: classes$1.app,
      children: [jsx(AppHiddenContainer, {}), jsx(Editor$1, {
        className: classes$1.canvas
      }), jsx(TopToolbarContainer, {
        className: classes$1.top
      }), jsx(LeftToolbarContainer, {
        className: classes$1.left
      }), jsx(BottomToolbarContainer, {
        className: classes$1.bottom
      }), jsx(RightToolbarContainer, {
        className: classes$1.right
      }), jsx(AppClipArea, {}), jsx(ModalContainer, {})]
    })
  });
};

var mapDispatchToProps = {
  checkServer: checkServer
};
var AppContainer = connect(null, mapDispatchToProps)(App);

function initApp(element, staticResourcesUrl, options, server, setEditor) {
  var store = createStore(options, server, setEditor);
  store.dispatch(initKeydownListener(element));
  store.dispatch(initResize());
  ReactDOM.render(jsx(Provider, {
    store: store,
    children: jsx(settingsContext.Provider, {
      value: {
        staticResourcesUrl: staticResourcesUrl
      },
      children: jsx(errorsContext.Provider, {
        value: {
          errorHandler: options.errorHandler
        },
        children: jsx(appContext.Provider, {
          value: {
            getKetcherInstance: function getKetcherInstance() {
              return window.ketcher;
            }
          },
          children: jsx(AppContainer, {})
        })
      })
    })
  }), element);
}

var KetcherBuilder = function () {
  function KetcherBuilder() {
    _classCallCheck(this, KetcherBuilder);
    this.structService = null;
    this.editor = null;
    this.serviceMode = null;
    this.formatterFactory = null;
  }
  _createClass(KetcherBuilder, [{
    key: "appendApiAsync",
    value: function () {
      var _appendApiAsync = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(structServiceProvider) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.structService = createApi(structServiceProvider, {
                  'smart-layout': true,
                  'ignore-stereochemistry-errors': true,
                  'mass-skip-error-on-pseudoatoms': false,
                  'gross-formula-add-rsites': true,
                  'aromatize-skip-superatoms': true,
                  'dearomatize-on-load': false
                });
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function appendApiAsync(_x) {
        return _appendApiAsync.apply(this, arguments);
      }
      return appendApiAsync;
    }()
  }, {
    key: "appendServiceMode",
    value: function appendServiceMode(mode) {
      this.serviceMode = mode;
    }
  }, {
    key: "appendUiAsync",
    value: function () {
      var _appendUiAsync = _asyncToGenerator( _regeneratorRuntime.mark(function _callee2(element, staticResourcesUrl, errorHandler, buttons) {
        var structService, editor;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                structService = this.structService;
                _context2.next = 3;
                return new Promise(function (resolve) {
                  initApp(element, staticResourcesUrl, {
                    buttons: buttons || {},
                    errorHandler: errorHandler || null,
                    version: "2.6.4" ,
                    buildDate: "2022-12-20T08:56:34" ,
                    buildNumber: ''
                  }, structService, resolve);
                });
              case 3:
                editor = _context2.sent;
                this.editor = editor;
                this.editor.errorHandler = errorHandler && typeof errorHandler === 'function' ? errorHandler :
                function () {};
                this.formatterFactory = new FormatterFactory(structService);
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function appendUiAsync(_x2, _x3, _x4, _x5) {
        return _appendUiAsync.apply(this, arguments);
      }
      return appendUiAsync;
    }()
  }, {
    key: "build",
    value: function build() {
      if (!this.serviceMode) {
        throw new Error('You should append ServiceMode before building');
      }
      if (!this.structService) {
        throw new Error('You should append Api before building');
      }
      if (!this.formatterFactory) {
        throw new Error('You should append StructureServiceFactory before building');
      }
      var ketcher = new Ketcher(this.editor, this.structService, this.formatterFactory);
      ketcher[this.serviceMode] = true;
      var params = new URLSearchParams(document.location.search);
      var initialMol = params.get('moll');
      if (initialMol) {
        ketcher.setMolecule(initialMol);
      }
      return ketcher;
    }
  }]);
  return KetcherBuilder;
}();

function buildKetcherAsync(_x) {
  return _buildKetcherAsync.apply(this, arguments);
}
function _buildKetcherAsync() {
  _buildKetcherAsync = _asyncToGenerator( _regeneratorRuntime.mark(function _callee(_ref) {
    var element, staticResourcesUrl, structServiceProvider, buttons, errorHandler, builder;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element = _ref.element, staticResourcesUrl = _ref.staticResourcesUrl, structServiceProvider = _ref.structServiceProvider, buttons = _ref.buttons, errorHandler = _ref.errorHandler;
            builder = new KetcherBuilder();
            _context.next = 4;
            return builder.appendApiAsync(structServiceProvider);
          case 4:
            builder.appendServiceMode(structServiceProvider.mode);
            _context.next = 7;
            return builder.appendUiAsync(element, staticResourcesUrl, errorHandler, buttons);
          case 7:
            return _context.abrupt("return", builder.build());
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _buildKetcherAsync.apply(this, arguments);
}

var classes = {"button-common-styles":"Editor-module_button-common-styles__h4pal","scrollbar":"Editor-module_scrollbar__yVsY8","small":"Editor-module_small__8cgEX","editor":"Editor-module_editor__o0Gjz","-hidden":"Editor-module_-hidden__aKodt"};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mediaSizes = {
  smallWidth: 1040,
  smallHeight: 600
};
function Editor(props) {
  var rootElRef = useRef(null);
  var onInit = props.onInit;
  var _useResizeObserver = useThrottleResizeObserver({
    ref: rootElRef
  }),
      height = _useResizeObserver.height,
      width = _useResizeObserver.width;
  var ketcherInitEvent = new Event(KETCHER_INIT_EVENT_NAME);
  useEffect(function () {
    buildKetcherAsync(_objectSpread(_objectSpread({}, props), {}, {
      element: rootElRef.current
    })).then(function (ketcher) {
      if (typeof onInit === 'function') {
        onInit(ketcher);
        window.dispatchEvent(ketcherInitEvent);
      }
    });
  }, []);
  return jsx("div", {
    ref: rootElRef,
    className: clsx('Ketcher-root', classes.editor, _defineProperty({}, classes.small, height && height <= mediaSizes.smallHeight || width && width <= mediaSizes.smallWidth))
  });
}

export { Editor, KETCHER_INIT_EVENT_NAME };
//# sourceMappingURL=index.modern.js.map
