webpackHotUpdatedash_video_player("main",{

/***/ "./src/lib/components/VideoPlayer.react.js":
/*!*************************************************!*\
  !*** ./src/lib/components/VideoPlayer.react.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * TODO update the docstring

 * VideoPlayer is a wrapper for a video component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var VideoPlayer = /*#__PURE__*/function (_Component) {
  _inherits(VideoPlayer, _Component);

  var _super = _createSuper(VideoPlayer);

  function VideoPlayer(props) {
    var _this;

    _classCallCheck(this, VideoPlayer);

    // From parent
    _this = _super.call(this, props); // Initial state

    _this.state = {
      played: 0,
      playedSeconds: 0,
      loaded: 0,
      loadedSeconds: 0,
      duration: 0
    }; // Binding all callbacks

    _this.handleDuration = _this.handleDuration.bind(_assertThisInitialized(_this));
    _this.handleProgress = _this.handleProgress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: "handleDuration",
    value: function handleDuration(duration) {
      // this.setState({ duration: duration });
      this.props.setProps({
        duration: durations
      });
    }
  }, {
    key: "handleProgress",
    value: function handleProgress(state) {
      /*
      TODO add the ability to only fire this callback 
      when the video is playing. Right now it fires constantly
      */
      this.setState({
        played: state.played,
        playedSeconds: state.playedSeconds,
        loaded: state.loaded,
        loadedSeconds: state.loadedSeconds
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: this.props.id,
        className: "react-player",
        url: this.props.url,
        playing: this.props.playing,
        loop: this.props.loop,
        controls: this.props.controls,
        volume: this.props.volumne,
        muted: this.props.muted,
        playbackRate: this.props.playbackRate,
        width: this.props.width,
        height: this.props.height,
        style: this.props.style,
        progressInterval: this.props.progressInterval,
        onDuration: this.handleDuration,
        onProgress: this.handleProgress
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Duration = ", this.props.duration));
    }
  }]);

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

VideoPlayer.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * The url of a video or song to play
   * Can be an array or MediaStream
   */
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Set to true or false to pause or play the media
   */
  playing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Set to true or false to loop the media
   */
  loop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Set to true or false to display native player controls
   * Controls cannot be hidden for Wistia videos
   */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Set the volume of the player, between 0 and 1
   * null uses default volume on all players
   */
  volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Mutes the player
   * Only works if volume is set
   */
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Set the playback rate of the player
   * Only supported by YouTube, Wistia, and file paths
   */
  playbackRate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Set the width of the player
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Set the height of the player
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Add inline styles to the root element
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * The time between onProgress callbacks, in milliseconds
   */
  progressInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Callback containing duration of the media, in seconds
   */
  onDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** 
   * Callback containing played and loaded progress as a fraction
   * and playedSeconds and loadedSeconds in seconds
   */
  onProgress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
VideoPlayer.defaultProps = {
  playing: false,
  loop: false,
  controls: true,
  volume: 0.8,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  progressInterval: 10
};
/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer); // end file

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3ZpZGVvX3BsYXllci8uL3NyYy9saWIvY29tcG9uZW50cy9WaWRlb1BsYXllci5yZWFjdC5qcyJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwic3RhdGUiLCJwbGF5ZWQiLCJwbGF5ZWRTZWNvbmRzIiwibG9hZGVkIiwibG9hZGVkU2Vjb25kcyIsImR1cmF0aW9uIiwiaGFuZGxlRHVyYXRpb24iLCJiaW5kIiwiaGFuZGxlUHJvZ3Jlc3MiLCJzZXRQcm9wcyIsImR1cmF0aW9ucyIsInNldFN0YXRlIiwiaWQiLCJ1cmwiLCJwbGF5aW5nIiwibG9vcCIsImNvbnRyb2xzIiwidm9sdW1uZSIsIm11dGVkIiwicGxheWJhY2tSYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsInByb2dyZXNzSW50ZXJ2YWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsInZvbHVtZSIsIm51bWJlciIsIm9iamVjdCIsIm9uRHVyYXRpb24iLCJvblByb2dyZXNzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7OztJQVNNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Y7QUFDQSw4QkFBTUEsS0FBTixFQUZlLENBSWY7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxDQURHO0FBRVhDLG1CQUFhLEVBQUUsQ0FGSjtBQUdYQyxZQUFNLEVBQUUsQ0FIRztBQUlYQyxtQkFBYSxFQUFFLENBSko7QUFLWEMsY0FBUSxFQUFFO0FBTEMsS0FBYixDQUxlLENBYWY7O0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQiwrQkFBdEI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtB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O0FBSXZCYyxRQUFNLEVBQUUsR0FKZTtBQUt2QlosT0FBSyxFQUFFLEtBTGdCO0FBTXZCQyxjQUFZLEVBQUUsQ0FOUztBQU92QkMsT0FBSyxFQUFFLE9BUGdCO0FBUXZCQyxRQUFNLEVBQUUsT0FSZTtBQVN2QkUsa0JBQWdCLEVBQUU7QUFUSyxDQUEzQjtBQVllekIsMEVBQWYsRSxDQUNBLFciLCJmaWxlIjoiYzc0NGI0Zi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xyXG5cclxuLyoqXHJcbiAqIFRPRE8gdXBkYXRlIHRoZSBkb2NzdHJpbmdcclxuXHJcbiAqIFZpZGVvUGxheWVyIGlzIGEgd3JhcHBlciBmb3IgYSB2aWRlbyBjb21wb25lbnQuXHJcbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxyXG4gKiBkaXNwbGF5cyBpdC5cclxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXHJcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxyXG4gKi9cclxuY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvLyBGcm9tIHBhcmVudFxyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBwbGF5ZWQ6IDAsXHJcbiAgICAgICAgICBwbGF5ZWRTZWNvbmRzOiAwLFxyXG4gICAgICAgICAgbG9hZGVkOiAwLCBcclxuICAgICAgICAgIGxvYWRlZFNlY29uZHM6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEJpbmRpbmcgYWxsIGNhbGxiYWNrc1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRHVyYXRpb24gPSB0aGlzLmhhbmRsZUR1cmF0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9ncmVzcyA9IHRoaXMuaGFuZGxlUHJvZ3Jlc3MuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEdXJhdGlvbihkdXJhdGlvbikge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBkdXJhdGlvbjogZHVyYXRpb24gfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7IGR1cmF0aW9uOiBkdXJhdGlvbnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvZ3Jlc3Moc3RhdGUpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIFRPRE8gYWRkIHRoZSBhYmlsaXR5IHRvIG9ubHkgZmlyZSB0aGlzIGNhbGxiYWNrIFxyXG4gICAgICAgIHdoZW4gdGhlIHZpZGVvIGlzIHBsYXlpbmcuIFJpZ2h0IG5vdyBpdCBmaXJlcyBjb25zdGFudGx5XHJcbiAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGxheWVkOiBzdGF0ZS5wbGF5ZWQsXHJcbiAgICAgICAgICAgIHBsYXllZFNlY29uZHM6IHN0YXRlLnBsYXllZFNlY29uZHMsXHJcbiAgICAgICAgICAgIGxvYWRlZDogc3RhdGUubG9hZGVkLFxyXG4gICAgICAgICAgICBsb2FkZWRTZWNvbmRzOiBzdGF0ZS5sb2FkZWRTZWNvbmRzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlYWN0LXBsYXllcidcclxuICAgICAgICAgICAgICAgICAgICB1cmw9e3RoaXMucHJvcHMudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlpbmc9e3RoaXMucHJvcHMucGxheWluZ31cclxuICAgICAgICAgICAgICAgICAgICBsb29wPXt0aGlzLnByb3BzLmxvb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM9e3RoaXMucHJvcHMuY29udHJvbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXt0aGlzLnByb3BzLnZvbHVtbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWQ9e3RoaXMucHJvcHMubXV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tSYXRlPXt0aGlzLnByb3BzLnBsYXliYWNrUmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzSW50ZXJ2YWw9e3RoaXMucHJvcHMucHJvZ3Jlc3NJbnRlcnZhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkR1cmF0aW9uPXt0aGlzLmhhbmRsZUR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3M9e3RoaXMuaGFuZGxlUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHA+RHVyYXRpb24gPSB7dGhpcy5wcm9wcy5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblZpZGVvUGxheWVyLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wbmVudCBpbiBEYXNoIGNhbGxiYWNrc1xyXG4gICAgICovXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIGFueSBvZiB0aGVcclxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgYSB2aWRlbyBvciBzb25nIHRvIHBsYXlcclxuICAgICAqIENhbiBiZSBhbiBhcnJheSBvciBNZWRpYVN0cmVhbVxyXG4gICAgICovXHJcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdG8gdHJ1ZSBvciBmYWxzZSB0byBwYXVzZSBvciBwbGF5IHRoZSBtZWRpYVxyXG4gICAgICovXHJcbiAgICBwbGF5aW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0byB0cnVlIG9yIGZhbHNlIHRvIGxvb3AgdGhlIG1lZGlhXHJcbiAgICAgKi9cclxuICAgIGxvb3A6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRvIHRydWUgb3IgZmFsc2UgdG8gZGlzcGxheSBuYXRpdmUgcGxheWVyIGNvbnRyb2xzXHJcbiAgICAgKiBDb250cm9scyBjYW5ub3QgYmUgaGlkZGVuIGZvciBXaXN0aWEgdmlkZW9zXHJcbiAgICAgKi9cclxuICAgIGNvbnRyb2xzOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdm9sdW1lIG9mIHRoZSBwbGF5ZXIsIGJldHdlZW4gMCBhbmQgMVxyXG4gICAgICogbnVsbCB1c2VzIGRlZmF1bHQgdm9sdW1lIG9uIGFsbCBwbGF5ZXJzXHJcbiAgICAgKi9cclxuICAgIHZvbHVtZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIE11dGVzIHRoZSBwbGF5ZXJcclxuICAgICAqIE9ubHkgd29ya3MgaWYgdm9sdW1lIGlzIHNldFxyXG4gICAgICovXHJcbiAgICBtdXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgdGhlIHBsYXllclxyXG4gICAgICogT25seSBzdXBwb3J0ZWQgYnkgWW91VHViZSwgV2lzdGlhLCBhbmQgZmlsZSBwYXRoc1xyXG4gICAgICovXHJcbiAgICBwbGF5YmFja1JhdGU6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZywgICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgaW5saW5lIHN0eWxlcyB0byB0aGUgcm9vdCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpbWUgYmV0d2VlbiBvblByb2dyZXNzIGNhbGxiYWNrcywgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAgKi9cclxuICAgIHByb2dyZXNzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBjb250YWluaW5nIGR1cmF0aW9uIG9mIHRoZSBtZWRpYSwgaW4gc2Vjb25kc1xyXG4gICAgICovXHJcbiAgICBvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLCBcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBDYWxsYmFjayBjb250YWluaW5nIHBsYXllZCBhbmQgbG9hZGVkIHByb2dyZXNzIGFzIGEgZnJhY3Rpb25cclxuICAgICAqIGFuZCBwbGF5ZWRTZWNvbmRzIGFuZCBsb2FkZWRTZWNvbmRzIGluIHNlY29uZHNcclxuICAgICAqL1xyXG4gICAgb25Qcm9ncmVzczogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcblZpZGVvUGxheWVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBsYXlpbmc6IGZhbHNlLCBcclxuICAgIGxvb3A6IGZhbHNlLCBcclxuICAgIGNvbnRyb2xzOiB0cnVlLFxyXG4gICAgdm9sdW1lOiAwLjgsXHJcbiAgICBtdXRlZDogZmFsc2UsXHJcbiAgICBwbGF5YmFja1JhdGU6IDEsXHJcbiAgICB3aWR0aDogJzY0MHB4JyxcclxuICAgIGhlaWdodDogJzM2MHB4JyxcclxuICAgIHByb2dyZXNzSW50ZXJ2YWw6IDEwICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XHJcbi8vIGVuZCBmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==