'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var Pane = function (_Component) {
    _inherits(Pane, _Component);

    function Pane() {
        var _ref;

        _classCallCheck(this, Pane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Pane.__proto__ || Object.getPrototypeOf(Pane)).call.apply(_ref, [this].concat(args)));

        _this.state = { size: _this.props.size };
        return _this;
    }

    _createClass(Pane, [{
        key: 'render',
        value: function render() {
            var split = this.props.split;
            var classes = ['Pane', split, this.props.className];

            var style = _extends({}, this.props.style || {}, {
                flex: 1,
                position: 'relative',
                outline: 'none'
            });

            if (this.state.size !== undefined) {
                if (split === 'vertical') {
                    style.width = this.state.size;
                } else {
                    style.height = this.state.size;
                    style.display = 'flex';
                }
                style.flex = 'none';
            }

            return _react2.default.createElement(
                'div',
                { className: classes.join(' '), style: this.props.prefixer.prefix(style) },
                this.props.children
            );
        }
    }]);

    return Pane;
}(_react.Component);

Pane.propTypes = {
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

Pane.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT })
};

exports.default = Pane;
module.exports = exports['default'];