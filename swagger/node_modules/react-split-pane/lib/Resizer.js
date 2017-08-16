'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Resizer = function (_Component) {
    _inherits(Resizer, _Component);

    function Resizer() {
        _classCallCheck(this, Resizer);

        return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
    }

    _createClass(Resizer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                className = _props.className,
                resizerClassName = _props.resizerClassName;

            var classes = [resizerClassName, split, className];
            return _react2.default.createElement('span', {
                className: classes.join(' '),
                style: this.props.prefixer.prefix(this.props.style) || {},
                onMouseDown: function onMouseDown(event) {
                    _this2.props.onMouseDown(event);
                },
                onTouchStart: function onTouchStart(event) {
                    event.preventDefault();
                    _this2.props.onTouchStart(event);
                },
                onTouchEnd: function onTouchEnd(event) {
                    event.preventDefault();
                    _this2.props.onTouchEnd(event);
                }
            });
        }
    }]);

    return Resizer;
}(_react.Component);

Resizer.propTypes = {
    onMouseDown: _react.PropTypes.func.isRequired,
    onTouchStart: _react.PropTypes.func.isRequired,
    onTouchEnd: _react.PropTypes.func.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    resizerClassName: _react.PropTypes.string.isRequired,
    style: _reactStyleProptype2.default
};

Resizer.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    resizerClassName: 'Resizer'
};

exports.default = Resizer;
module.exports = exports['default'];