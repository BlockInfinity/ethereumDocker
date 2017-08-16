'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}

var SplitPane = function (_Component) {
    _inherits(SplitPane, _Component);

    function SplitPane() {
        var _ref;

        _classCallCheck(this, SplitPane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).call.apply(_ref, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        _this.state = {
            active: false,
            resized: false
        };
        return _this;
    }

    _createClass(SplitPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setSize(this.props, this.state);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setSize(props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchStart(eventWithTouches);
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            if (this.props.allowResize) {
                unFocus(document, window);
                var position = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                if (typeof this.props.onDragStarted === 'function') {
                    this.props.onDragStarted();
                }
                this.setState({
                    active: true,
                    position: position
                });
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchMove(eventWithTouches);
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
            if (this.props.allowResize) {
                if (this.state.active) {
                    unFocus(document, window);
                    var isPrimaryFirst = this.props.primary === 'first';
                    var ref = isPrimaryFirst ? this.pane1 : this.pane2;
                    if (ref) {
                        var node = _reactDom2.default.findDOMNode(ref);

                        if (node.getBoundingClientRect) {
                            var width = node.getBoundingClientRect().width;
                            var height = node.getBoundingClientRect().height;
                            var current = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                            var size = this.props.split === 'vertical' ? width : height;
                            var position = this.state.position;
                            var newPosition = isPrimaryFirst ? position - current : current - position;

                            var maxSize = this.props.maxSize;
                            if (this.props.maxSize !== undefined && this.props.maxSize <= 0) {
                                var splPane = this.splitPane;
                                if (this.props.split === 'vertical') {
                                    maxSize = splPane.getBoundingClientRect().width + this.props.maxSize;
                                } else {
                                    maxSize = splPane.getBoundingClientRect().height + this.props.maxSize;
                                }
                            }

                            var newSize = size - newPosition;

                            if (newSize < this.props.minSize) {
                                newSize = this.props.minSize;
                            } else if (this.props.maxSize !== undefined && newSize > maxSize) {
                                newSize = maxSize;
                            } else {
                                this.setState({
                                    position: current,
                                    resized: true
                                });
                            }

                            if (this.props.onChange) {
                                this.props.onChange(newSize);
                            }
                            this.setState({
                                draggedSize: newSize
                            });
                            ref.setState({
                                size: newSize
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            if (this.props.allowResize) {
                if (this.state.active) {
                    if (typeof this.props.onDragFinished === 'function') {
                        this.props.onDragFinished(this.state.draggedSize);
                    }
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(props, state) {
            var ref = this.props.primary === 'first' ? this.pane1 : this.pane2;
            var newSize = void 0;
            if (ref) {
                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
                ref.setState({
                    size: newSize
                });
                if (props.size !== state.draggedSize) {
                    this.setState({
                        draggedSize: newSize
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                allowResize = _props.allowResize;

            var disabledClass = allowResize ? '' : 'disabled';

            var style = _extends({}, this.props.style || {}, {
                display: 'flex',
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                _extends(style, {
                    flexDirection: 'row',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    right: 0
                });
            } else {
                _extends(style, {
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%'
                });
            }

            var children = this.props.children;
            var classes = ['SplitPane', this.props.className, split, disabledClass];

            var pane1Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane1Style || {}));

            var pane2Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane2Style || {}));

            return _react2.default.createElement(
                'div',
                {
                    className: classes.join(' '),
                    style: this.props.prefixer.prefix(style),
                    ref: function ref(node) {
                        _this2.splitPane = node;
                    }
                },
                _react2.default.createElement(
                    _Pane2.default,
                    {
                        ref: function ref(node) {
                            _this2.pane1 = node;
                        },
                        key: 'pane1', className: 'Pane1',
                        style: pane1Style,
                        split: split,
                        size: this.props.primary === 'first' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
                    },
                    children[0]
                ),
                _react2.default.createElement(_Resizer2.default, {
                    ref: function ref(node) {
                        _this2.resizer = node;
                    },
                    key: 'resizer',
                    className: disabledClass,
                    resizerClassName: this.props.resizerClassName,
                    onMouseDown: this.onMouseDown,
                    onTouchStart: this.onTouchStart,
                    onTouchEnd: this.onMouseUp,
                    style: this.props.resizerStyle || {},
                    split: split
                }),
                _react2.default.createElement(
                    _Pane2.default,
                    {
                        ref: function ref(node) {
                            _this2.pane2 = node;
                        },
                        key: 'pane2',
                        className: 'Pane2',
                        style: pane2Style,
                        split: split,
                        size: this.props.primary === 'second' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
                    },
                    children[1]
                )
            );
        }
    }]);

    return SplitPane;
}(_react.Component);

SplitPane.propTypes = {
    primary: _react.PropTypes.oneOf(['first', 'second']),
    minSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    maxSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    // eslint-disable-next-line react/no-unused-prop-types
    defaultSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    allowResize: _react.PropTypes.bool,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    onDragStarted: _react.PropTypes.func,
    onDragFinished: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    resizerStyle: _reactStyleProptype2.default,
    paneStyle: _reactStyleProptype2.default,
    pane1Style: _reactStyleProptype2.default,
    pane2Style: _reactStyleProptype2.default,
    className: _react.PropTypes.string,
    resizerClassName: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
};

SplitPane.defaultProps = {
    split: 'vertical',
    minSize: 50,
    allowResize: true,
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    primary: 'first'
};

exports.default = SplitPane;
module.exports = exports['default'];