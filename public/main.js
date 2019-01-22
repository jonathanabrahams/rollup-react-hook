(function(React,reactDom){'use strict';var React__default='default'in React?React['default']:React;var AppContainer = function (_a) {
    var children = _a.children;
    return (React__default.createElement("div", { className: "app-container" },
        React__default.createElement("h1", null, "Explore Hooks"),
        children));
};var ClickMe = function (_a) {
    var count = _a.count, onClickMeHandler = _a.onClickMeHandler;
    return (React__default.createElement("div", null,
        React__default.createElement("p", null,
            "You clicked ",
            count,
            " times"),
        React__default.createElement("button", { onClick: onClickMeHandler }, "Click me")));
};var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Count = /** @class */ (function (_super) {
    __extends(Count, _super);
    function Count(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            count: 0
        };
        _this.clickMeHandler = function () {
            _this.setState(function (state, props) {
                var prevState = state;
                var nextState = { count: prevState.count + 1 };
                props.onChange(prevState.count, nextState.count);
                return nextState;
            });
        };
        _this.clickMeHandler = _this.clickMeHandler.bind(_this);
        return _this;
    }
    Count.prototype.componentDidMount = function () {
        console.log('Component did mount');
    };
    Count.prototype.componentWillUnmount = function () {
        console.log('Component will unmount');
    };
    Count.prototype.componentDidUpdate = function () {
        console.log('Component did update');
    };
    Count.prototype.render = function () {
        return React__default.createElement(ClickMe, { onClickMeHandler: this.clickMeHandler, count: this.state.count });
    };
    return Count;
}(React__default.Component));var Count$1 = function (props) {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    var clickMeHandler = function () {
        var prevCount = count;
        var nextCount = prevCount + 1;
        setCount(count + 1);
        props.onChange(prevCount, nextCount);
    };
    return React__default.createElement(ClickMe, { onClickMeHandler: clickMeHandler, count: count });
};var destroyNow = function (count) {
    return count == 3;
};
var onChange = function (setShow, label) { return function (prevCount, nextCount) {
    console.info("Changed " + label, { prev: prevCount, next: nextCount });
    if (destroyNow(nextCount)) {
        setShow(false);
        console.warn("Destroyed  " + label + "!");
    }
}; };var App = function () {
    var _a = React.useState(true), showComponent = _a[0], setShowComponent = _a[1];
    var _b = React.useState(true), showHook = _b[0], setShowHook = _b[1];
    return (React__default.createElement(AppContainer, null,
        React__default.createElement("h1", null, "Using Components"),
        showComponent && React__default.createElement(Count, { onChange: onChange(setShowComponent, "Component") }),
        React__default.createElement("h1", null, "Using Hooks"),
        showHook && React__default.createElement(Count$1, { onChange: onChange(setShowHook, "Hook") })));
};function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css = "body {\n  background: snow; }\n\n.app-container {\n  border: 1px solid green;\n  font-weight: bold;\n  color: blue; }\n";
styleInject(css);reactDom.render(React__default.createElement(App, null), document.getElementById('root'));}(React,ReactDOM));