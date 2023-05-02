"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalCreateEmployee;
var _react = _interopRequireDefault(require("react"));
require("./ModalCreateEmployee.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalCreateEmployee(_ref) {
  let {
    showModal,
    closeModal,
    response
  } = _ref;
  const modalParameter = {
    "backgroundColor": "#EEEEEE",
    "borderRadius": 10,
    "boxShadow": "0 0 5px #1B1919",
    "color": "#1B1919",
    "fontSize": 18,
    "height": "fit-content",
    "padding": "20px 50px",
    "width": "fit-content"
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showModal && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalParameter
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-close-icon",
    onClick: closeModal
  }, "\u2716"), /*#__PURE__*/_react.default.createElement("span", null, response))));
}