'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentGobbet = require('@economist/component-gobbet');

var _economistComponentGobbet2 = _interopRequireDefault(_economistComponentGobbet);

var _economistComponentImagecaption = require('@economist/component-imagecaption');

var _economistComponentImagecaption2 = _interopRequireDefault(_economistComponentImagecaption);

var _economistComponentSharebar = require('@economist/component-sharebar');

var _economistComponentSharebar2 = _interopRequireDefault(_economistComponentSharebar);

var GobbetCollection = (function (_React$Component) {
  _inherits(GobbetCollection, _React$Component);

  function GobbetCollection() {
    _classCallCheck(this, GobbetCollection);

    _React$Component.apply(this, arguments);
  }

  GobbetCollection.prototype.render = function render() {
    var customHeader = _react2['default'].createElement(_economistComponentSharebar2['default'], { useFX: true,
      fxDirection: 'flip-to-top', fxType: 'cube', background: '#333333', fxDefaultStateBackground: '#999999' });
    return _react2['default'].createElement(
      'div',
      { className: 'span_12' },
      _react2['default'].createElement(
        'div',
        { className: 'section group span_10' },
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col span_4' },
          _react2['default'].createElement(
            _economistComponentGobbet2['default'],
            { className: 'gobbet', title: customHeader },
            _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
              src: 'http://lorempixel.com/g/300/169/food', textposition: 'top' })
          )
        )
      )
    );
  };

  return GobbetCollection;
})(_react2['default'].Component);

exports['default'] = GobbetCollection;
module.exports = exports['default'];

