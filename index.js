'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentWifgobbet = require('@economist/component-wifgobbet');

var _economistComponentWifgobbet2 = _interopRequireDefault(_economistComponentWifgobbet);

var _economistComponentImagecaption = require('@economist/component-imagecaption');

var _economistComponentImagecaption2 = _interopRequireDefault(_economistComponentImagecaption);

var GobbetCollection = (function (_React$Component) {
  _inherits(GobbetCollection, _React$Component);

  function GobbetCollection() {
    _classCallCheck(this, GobbetCollection);

    _React$Component.apply(this, arguments);
  }

  GobbetCollection.prototype.render = function render() {
    return _react2['default'].createElement(
      'section',
      { className: 'margin-l-1 margin-r-1 gutter-l GobbetCollection--list' },
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/cats', textposition: 'top' })
        )
      ),
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/food', textposition: 'top' })
        )
      ),
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/people', textposition: 'top' })
        )
      ),
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/city', textposition: 'top' })
        )
      ),
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/fashion', textposition: 'top' })
        )
      ),
      _react2['default'].createElement(
        'article',
        { className: 'col-4' },
        _react2['default'].createElement(
          _economistComponentWifgobbet2['default'],
          null,
          _react2['default'].createElement(_economistComponentImagecaption2['default'], { caption: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            src: 'http://lorempixel.com/g/288/420/food', textposition: 'top' })
        )
      )
    );
  };

  return GobbetCollection;
})(_react2['default'].Component);

exports['default'] = GobbetCollection;
module.exports = exports['default'];

