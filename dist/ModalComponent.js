"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconClose = _interopRequireDefault(require("./icon-close.svg"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backgroud = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n"])));

var Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 75px;\n  width: 500px;\n  background-color: white;\n  border: solid 1px black;\n  border-radius: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1001;\n  display: flex;\n  justify-content: center;\n"])));

var ImgBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 0.5rem;\n  & :hover {\n    cursor: pointer;\n    transform: scale(1.5);\n  }\n"])));

var Text = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-self: center;\n"])));

var Modal = function Modal(props) {
  var display = props.display,
      setDisplayTo = props.setDisplayTo,
      message = props.message;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, display ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Backgroud, {
    onClick: function onClick() {
      return setDisplayTo(false);
    }
  }), /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Text, null, " ", message, " "), /*#__PURE__*/_react.default.createElement(ImgBox, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconClose.default,
    onClick: function onClick() {
      return setDisplayTo(false);
    },
    alt: "close button"
  })))) : null);
};

var _default = Modal;
exports.default = _default;