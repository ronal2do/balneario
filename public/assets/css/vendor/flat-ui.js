import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "[data-icon]:before": {
        "fontFamily": "'Flat-UI-Icons'",
        "content": "attr(data-icon)",
        "speak": "none",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-arrow-right": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-arrow-left": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-cmd": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-check-inverted": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-heart": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-location": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-plus": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-check": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-cross": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-list": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-new": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-video": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-photo": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-volume": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-time": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-eye": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-chat": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-search": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-user": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-mail": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-lock": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-gear": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-radio-unchecked": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-radio-checked": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-checkbox-unchecked": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-checkbox-checked": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-calendar-solid": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-pause": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-play": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-check-inverted-2": {
        "display": "inline-block",
        "fontFamily": "'Flat-UI-Icons'",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "fui-arrow-right:before": {
        "content": "\\e02c"
    },
    "fui-arrow-left:before": {
        "content": "\\e02d"
    },
    "fui-cmd:before": {
        "content": "\\e02f"
    },
    "fui-check-inverted:before": {
        "content": "\\e006"
    },
    "fui-heart:before": {
        "content": "\\e007"
    },
    "fui-location:before": {
        "content": "\\e008"
    },
    "fui-plus:before": {
        "content": "\\e009"
    },
    "fui-check:before": {
        "content": "\\e00a"
    },
    "fui-cross:before": {
        "content": "\\e00b"
    },
    "fui-list:before": {
        "content": "\\e00c"
    },
    "fui-new:before": {
        "content": "\\e00d"
    },
    "fui-video:before": {
        "content": "\\e00e"
    },
    "fui-photo:before": {
        "content": "\\e00f"
    },
    "fui-volume:before": {
        "content": "\\e010"
    },
    "fui-time:before": {
        "content": "\\e011"
    },
    "fui-eye:before": {
        "content": "\\e012"
    },
    "fui-chat:before": {
        "content": "\\e013"
    },
    "fui-search:before": {
        "content": "\\e01c"
    },
    "fui-user:before": {
        "content": "\\e01d"
    },
    "fui-mail:before": {
        "content": "\\e01e"
    },
    "fui-lock:before": {
        "content": "\\e01f"
    },
    "fui-gear:before": {
        "content": "\\e024"
    },
    "fui-radio-unchecked:before": {
        "content": "\\e02b"
    },
    "fui-radio-checked:before": {
        "content": "\\e032"
    },
    "fui-checkbox-unchecked:before": {
        "content": "\\e033"
    },
    "fui-checkbox-checked:before": {
        "content": "\\e034"
    },
    "fui-calendar-solid:before": {
        "content": "\\e022"
    },
    "fui-pause:before": {
        "content": "\\e03b"
    },
    "fui-play:before": {
        "content": "\\e03c"
    },
    "fui-check-inverted-2:before": {
        "content": "\\e000"
    },
    "dropdown-arrow-inverse": {
        "borderBottomColor": "#34495e !important",
        "borderTopColor": "#34495e !important"
    },
    "body": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontSize": 18,
        "lineHeight": 1.72222,
        "color": "#34495e",
        "backgroundColor": "#ffffff"
    },
    "a": {
        "color": "#16a085",
        "textDecoration": "none",
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "a:hover": {
        "color": "#1abc9c",
        "textDecoration": "none"
    },
    "a:focus": {
        "color": "#1abc9c",
        "textDecoration": "none"
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-comment": {
        "fontSize": 20,
        "lineHeight": 1.72222,
        "fontStyle": "italic",
        "marginTop": 24,
        "marginRight": 0,
        "marginBottom": 24,
        "marginLeft": 0
    },
    "p": {
        "fontSize": 18,
        "lineHeight": 1.72222,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "lead": {
        "marginBottom": 30,
        "fontSize": 28,
        "lineHeight": 1.46428571,
        "fontWeight": "300"
    },
    "small": {
        "fontSize": "83%",
        "lineHeight": 2.067
    },
    "text-muted": {
        "color": "#bdc3c7"
    },
    "text-inverse": {
        "color": "#ffffff"
    },
    "text-primary": {
        "color": "#1abc9c"
    },
    "text-primary:hover": {
        "color": "#15967d"
    },
    "text-warning": {
        "color": "#f1c40f"
    },
    "text-warning:hover": {
        "color": "#c19d0c"
    },
    "text-danger": {
        "color": "#e74c3c"
    },
    "text-danger:hover": {
        "color": "#b93d30"
    },
    "text-success": {
        "color": "#2ecc71"
    },
    "text-success:hover": {
        "color": "#25a35a"
    },
    "text-info": {
        "color": "#3498db"
    },
    "text-info:hover": {
        "color": "#2a7aaf"
    },
    "h1": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "700",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 30,
        "marginBottom": 15,
        "fontSize": 61
    },
    "h2": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "700",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 30,
        "marginBottom": 15,
        "fontSize": 53
    },
    "h3": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "700",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 30,
        "marginBottom": 15,
        "fontSize": 40
    },
    "h4": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "700",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 15,
        "marginBottom": 15,
        "fontSize": 29
    },
    "h5": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "700",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 15,
        "marginBottom": 15,
        "fontSize": 29
    },
    "h6": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontWeight": "normal",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 15,
        "marginBottom": 15,
        "fontSize": 24
    },
    "h1 small": {
        "color": "#e7e9ec"
    },
    "h2 small": {
        "color": "#e7e9ec"
    },
    "h3 small": {
        "color": "#e7e9ec"
    },
    "h4 small": {
        "color": "#e7e9ec"
    },
    "h5 small": {
        "color": "#e7e9ec"
    },
    "h6 small": {
        "color": "#e7e9ec"
    },
    "page-header": {
        "paddingBottom": 14,
        "marginTop": 60,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "borderBottom": "1px solid #e7e9ec"
    },
    "ul": {
        "marginBottom": 15
    },
    "ol": {
        "marginBottom": 15
    },
    "dl": {
        "marginBottom": 30
    },
    "dt": {
        "lineHeight": 1.72222
    },
    "dd": {
        "lineHeight": 1.72222
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #bdc3c7"
    },
    "abbr[data-original-title]": {
        "borderBottom": "1px dotted #bdc3c7"
    },
    "blockquote": {
        "borderLeft": "3px solid #e7e9ec",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "blockquote p": {
        "fontSize": 20,
        "lineHeight": 1.55,
        "fontWeight": "normal",
        "marginBottom": 0.4
    },
    "blockquote small": {
        "fontSize": 18,
        "lineHeight": 1.72222,
        "fontStyle": "italic",
        "color": "inherit"
    },
    "blockquote small:before": {
        "content": ""
    },
    "blockquotepull-right": {
        "paddingRight": 16,
        "paddingLeft": 0,
        "borderRight": "3px solid #e7e9ec",
        "borderLeft": 0
    },
    "blockquotepull-right small:after": {
        "content": ""
    },
    "address": {
        "marginBottom": 30,
        "lineHeight": 1.72222
    },
    "code": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace",
        "fontSize": "75%",
        "color": "#c7254e",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4
    },
    "kdb": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace"
    },
    "pre": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "fontSize": 13,
        "lineHeight": 1.72222,
        "color": "inherit",
        "backgroundColor": "#ffffff",
        "border": "2px solid #e7e9ec",
        "borderRadius": 6,
        "whiteSpace": "pre"
    },
    "samp": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace"
    },
    "pre-scrollable": {
        "maxHeight": 340
    },
    "btn": {
        "border": "none",
        "fontSize": 15,
        "fontWeight": "normal",
        "lineHeight": 1.4,
        "borderRadius": 4,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "WebkitFontSmoothing": "subpixel-antialiased",
        "WebkitTransition": "0.25s linear",
        "transition": "0.25s linear"
    },
    "btn:hover": {
        "color": "#ffffff"
    },
    "btn:focus": {
        "color": "#ffffff"
    },
    "btn:active": {
        "outline": "none",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btnactive": {
        "outline": "none",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btndisabled": {
        "backgroundColor": "#bdc3c7",
        "color": "rgba(255, 255, 255, 0.75)",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "btn[disabled]": {
        "backgroundColor": "#bdc3c7",
        "color": "rgba(255, 255, 255, 0.75)",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "fieldset[disabled] btn": {
        "backgroundColor": "#bdc3c7",
        "color": "rgba(255, 255, 255, 0.75)",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "btn > [class^=\"fui-\"]": {
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1,
        "position": "relative",
        "lineHeight": 1,
        "top": 1
    },
    "btn-xsbtn > [class^=\"fui-\"]": {
        "fontSize": 11,
        "top": 0
    },
    "btn-hgbtn > [class^=\"fui-\"]": {
        "top": 2
    },
    "btn-default": {
        "color": "#ffffff",
        "backgroundColor": "#bdc3c7"
    },
    "btn-default:hover": {
        "color": "#ffffff",
        "backgroundColor": "#cacfd2",
        "borderColor": "#cacfd2"
    },
    "btn-default:focus": {
        "color": "#ffffff",
        "backgroundColor": "#cacfd2",
        "borderColor": "#cacfd2"
    },
    "btn-default:active": {
        "color": "#ffffff",
        "backgroundColor": "#cacfd2",
        "borderColor": "#cacfd2",
        "background": "#a1a6a9"
    },
    "btn-defaultactive": {
        "color": "#ffffff",
        "backgroundColor": "#cacfd2",
        "borderColor": "#cacfd2",
        "background": "#a1a6a9"
    },
    "open dropdown-togglebtn-default": {
        "color": "#ffffff",
        "backgroundColor": "#cacfd2",
        "borderColor": "#cacfd2",
        "background": "#a1a6a9"
    },
    "btn-defaultdisabled": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-default[disabled]": {
        "backgroundColor": "#bdc3c7"
    },
    "fieldset[disabled] btn-default": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#bdc3c7"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#bdc3c7"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-defaultdisabled:active": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-default[disabled]:active": {
        "backgroundColor": "#bdc3c7"
    },
    "fieldset[disabled] btn-default:active": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-defaultdisabledactive": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-default[disabled]active": {
        "backgroundColor": "#bdc3c7"
    },
    "fieldset[disabled] btn-defaultactive": {
        "backgroundColor": "#bdc3c7"
    },
    "btn-primary": {
        "color": "#ffffff",
        "backgroundColor": "#1abc9c"
    },
    "btn-primary:hover": {
        "color": "#ffffff",
        "backgroundColor": "#48c9b0",
        "borderColor": "#48c9b0"
    },
    "btn-primary:focus": {
        "color": "#ffffff",
        "backgroundColor": "#48c9b0",
        "borderColor": "#48c9b0"
    },
    "btn-primary:active": {
        "color": "#ffffff",
        "backgroundColor": "#48c9b0",
        "borderColor": "#48c9b0",
        "background": "#16a085"
    },
    "btn-primaryactive": {
        "color": "#ffffff",
        "backgroundColor": "#48c9b0",
        "borderColor": "#48c9b0",
        "background": "#16a085"
    },
    "open dropdown-togglebtn-primary": {
        "color": "#ffffff",
        "backgroundColor": "#48c9b0",
        "borderColor": "#48c9b0",
        "background": "#16a085"
    },
    "btn-primarydisabled": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "#1abc9c"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#1abc9c"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#1abc9c"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#1abc9c"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#1abc9c"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#1abc9c"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#1abc9c"
    },
    "btn-info": {
        "color": "#ffffff",
        "backgroundColor": "#3498db"
    },
    "btn-info:hover": {
        "color": "#ffffff",
        "backgroundColor": "#5dade2",
        "borderColor": "#5dade2"
    },
    "btn-info:focus": {
        "color": "#ffffff",
        "backgroundColor": "#5dade2",
        "borderColor": "#5dade2"
    },
    "btn-info:active": {
        "color": "#ffffff",
        "backgroundColor": "#5dade2",
        "borderColor": "#5dade2",
        "background": "#2c81ba"
    },
    "btn-infoactive": {
        "color": "#ffffff",
        "backgroundColor": "#5dade2",
        "borderColor": "#5dade2",
        "background": "#2c81ba"
    },
    "open dropdown-togglebtn-info": {
        "color": "#ffffff",
        "backgroundColor": "#5dade2",
        "borderColor": "#5dade2",
        "background": "#2c81ba"
    },
    "btn-infodisabled": {
        "backgroundColor": "#3498db"
    },
    "btn-info[disabled]": {
        "backgroundColor": "#3498db"
    },
    "fieldset[disabled] btn-info": {
        "backgroundColor": "#3498db"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#3498db"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#3498db"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#3498db"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#3498db"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#3498db"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#3498db"
    },
    "btn-infodisabled:active": {
        "backgroundColor": "#3498db"
    },
    "btn-info[disabled]:active": {
        "backgroundColor": "#3498db"
    },
    "fieldset[disabled] btn-info:active": {
        "backgroundColor": "#3498db"
    },
    "btn-infodisabledactive": {
        "backgroundColor": "#3498db"
    },
    "btn-info[disabled]active": {
        "backgroundColor": "#3498db"
    },
    "fieldset[disabled] btn-infoactive": {
        "backgroundColor": "#3498db"
    },
    "btn-danger": {
        "color": "#ffffff",
        "backgroundColor": "#e74c3c"
    },
    "btn-danger:hover": {
        "color": "#ffffff",
        "backgroundColor": "#ec7063",
        "borderColor": "#ec7063"
    },
    "btn-danger:focus": {
        "color": "#ffffff",
        "backgroundColor": "#ec7063",
        "borderColor": "#ec7063"
    },
    "btn-danger:active": {
        "color": "#ffffff",
        "backgroundColor": "#ec7063",
        "borderColor": "#ec7063",
        "background": "#c44133"
    },
    "btn-dangeractive": {
        "color": "#ffffff",
        "backgroundColor": "#ec7063",
        "borderColor": "#ec7063",
        "background": "#c44133"
    },
    "open dropdown-togglebtn-danger": {
        "color": "#ffffff",
        "backgroundColor": "#ec7063",
        "borderColor": "#ec7063",
        "background": "#c44133"
    },
    "btn-dangerdisabled": {
        "backgroundColor": "#e74c3c"
    },
    "btn-danger[disabled]": {
        "backgroundColor": "#e74c3c"
    },
    "fieldset[disabled] btn-danger": {
        "backgroundColor": "#e74c3c"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#e74c3c"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#e74c3c"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#e74c3c"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#e74c3c"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#e74c3c"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#e74c3c"
    },
    "btn-dangerdisabled:active": {
        "backgroundColor": "#e74c3c"
    },
    "btn-danger[disabled]:active": {
        "backgroundColor": "#e74c3c"
    },
    "fieldset[disabled] btn-danger:active": {
        "backgroundColor": "#e74c3c"
    },
    "btn-dangerdisabledactive": {
        "backgroundColor": "#e74c3c"
    },
    "btn-danger[disabled]active": {
        "backgroundColor": "#e74c3c"
    },
    "fieldset[disabled] btn-dangeractive": {
        "backgroundColor": "#e74c3c"
    },
    "btn-success": {
        "color": "#ffffff",
        "backgroundColor": "#2ecc71"
    },
    "btn-success:hover": {
        "color": "#ffffff",
        "backgroundColor": "#58d68d",
        "borderColor": "#58d68d"
    },
    "btn-success:focus": {
        "color": "#ffffff",
        "backgroundColor": "#58d68d",
        "borderColor": "#58d68d"
    },
    "btn-success:active": {
        "color": "#ffffff",
        "backgroundColor": "#58d68d",
        "borderColor": "#58d68d",
        "background": "#27ad60"
    },
    "btn-successactive": {
        "color": "#ffffff",
        "backgroundColor": "#58d68d",
        "borderColor": "#58d68d",
        "background": "#27ad60"
    },
    "open dropdown-togglebtn-success": {
        "color": "#ffffff",
        "backgroundColor": "#58d68d",
        "borderColor": "#58d68d",
        "background": "#27ad60"
    },
    "btn-successdisabled": {
        "backgroundColor": "#2ecc71"
    },
    "btn-success[disabled]": {
        "backgroundColor": "#2ecc71"
    },
    "fieldset[disabled] btn-success": {
        "backgroundColor": "#2ecc71"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#2ecc71"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#2ecc71"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#2ecc71"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#2ecc71"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#2ecc71"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#2ecc71"
    },
    "btn-successdisabled:active": {
        "backgroundColor": "#2ecc71"
    },
    "btn-success[disabled]:active": {
        "backgroundColor": "#2ecc71"
    },
    "fieldset[disabled] btn-success:active": {
        "backgroundColor": "#2ecc71"
    },
    "btn-successdisabledactive": {
        "backgroundColor": "#2ecc71"
    },
    "btn-success[disabled]active": {
        "backgroundColor": "#2ecc71"
    },
    "fieldset[disabled] btn-successactive": {
        "backgroundColor": "#2ecc71"
    },
    "btn-warning": {
        "color": "#ffffff",
        "backgroundColor": "#f1c40f"
    },
    "btn-warning:hover": {
        "color": "#ffffff",
        "backgroundColor": "#f5d313",
        "borderColor": "#f5d313"
    },
    "btn-warning:focus": {
        "color": "#ffffff",
        "backgroundColor": "#f5d313",
        "borderColor": "#f5d313"
    },
    "btn-warning:active": {
        "color": "#ffffff",
        "backgroundColor": "#f5d313",
        "borderColor": "#f5d313",
        "background": "#cda70d"
    },
    "btn-warningactive": {
        "color": "#ffffff",
        "backgroundColor": "#f5d313",
        "borderColor": "#f5d313",
        "background": "#cda70d"
    },
    "open dropdown-togglebtn-warning": {
        "color": "#ffffff",
        "backgroundColor": "#f5d313",
        "borderColor": "#f5d313",
        "background": "#cda70d"
    },
    "btn-warningdisabled": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warning[disabled]": {
        "backgroundColor": "#f1c40f"
    },
    "fieldset[disabled] btn-warning": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#f1c40f"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#f1c40f"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warningdisabled:active": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warning[disabled]:active": {
        "backgroundColor": "#f1c40f"
    },
    "fieldset[disabled] btn-warning:active": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warningdisabledactive": {
        "backgroundColor": "#f1c40f"
    },
    "btn-warning[disabled]active": {
        "backgroundColor": "#f1c40f"
    },
    "fieldset[disabled] btn-warningactive": {
        "backgroundColor": "#f1c40f"
    },
    "btn-inverse": {
        "color": "#ffffff",
        "backgroundColor": "#34495e"
    },
    "btn-inverse:hover": {
        "color": "#ffffff",
        "backgroundColor": "#415b76",
        "borderColor": "#415b76"
    },
    "btn-inverse:focus": {
        "color": "#ffffff",
        "backgroundColor": "#415b76",
        "borderColor": "#415b76"
    },
    "btn-inverse:active": {
        "color": "#ffffff",
        "backgroundColor": "#415b76",
        "borderColor": "#415b76",
        "background": "#2c3e50"
    },
    "btn-inverseactive": {
        "color": "#ffffff",
        "backgroundColor": "#415b76",
        "borderColor": "#415b76",
        "background": "#2c3e50"
    },
    "open dropdown-togglebtn-inverse": {
        "color": "#ffffff",
        "backgroundColor": "#415b76",
        "borderColor": "#415b76",
        "background": "#2c3e50"
    },
    "btn-inversedisabled": {
        "backgroundColor": "#34495e"
    },
    "btn-inverse[disabled]": {
        "backgroundColor": "#34495e"
    },
    "fieldset[disabled] btn-inverse": {
        "backgroundColor": "#34495e"
    },
    "btn-inversedisabled:hover": {
        "backgroundColor": "#34495e"
    },
    "btn-inverse[disabled]:hover": {
        "backgroundColor": "#34495e"
    },
    "fieldset[disabled] btn-inverse:hover": {
        "backgroundColor": "#34495e"
    },
    "btn-inversedisabled:focus": {
        "backgroundColor": "#34495e"
    },
    "btn-inverse[disabled]:focus": {
        "backgroundColor": "#34495e"
    },
    "fieldset[disabled] btn-inverse:focus": {
        "backgroundColor": "#34495e"
    },
    "btn-inversedisabled:active": {
        "backgroundColor": "#34495e"
    },
    "btn-inverse[disabled]:active": {
        "backgroundColor": "#34495e"
    },
    "fieldset[disabled] btn-inverse:active": {
        "backgroundColor": "#34495e"
    },
    "btn-inversedisabledactive": {
        "backgroundColor": "#34495e"
    },
    "btn-inverse[disabled]active": {
        "backgroundColor": "#34495e"
    },
    "fieldset[disabled] btn-inverseactive": {
        "backgroundColor": "#34495e"
    },
    "btn-embossed": {
        "WebkitBoxShadow": "inset 0 -2px 0 rgba(0, 0, 0, 0.15)",
        "boxShadow": "inset 0 -2px 0 rgba(0, 0, 0, 0.15)"
    },
    "btn-embossedactive": {
        "WebkitBoxShadow": "inset 0 2px 0 rgba(0, 0, 0, 0.15)",
        "boxShadow": "inset 0 2px 0 rgba(0, 0, 0, 0.15)"
    },
    "btn-embossed:active": {
        "WebkitBoxShadow": "inset 0 2px 0 rgba(0, 0, 0, 0.15)",
        "boxShadow": "inset 0 2px 0 rgba(0, 0, 0, 0.15)"
    },
    "btn-wide": {
        "minWidth": 140,
        "paddingLeft": 30,
        "paddingRight": 30
    },
    "btn-link": {
        "color": "#16a085"
    },
    "btn-link:hover": {
        "color": "#1abc9c",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link:focus": {
        "color": "#1abc9c",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:hover": {
        "color": "#bdc3c7",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "#bdc3c7",
        "textDecoration": "none"
    },
    "btn-link[disabled]:focus": {
        "color": "#bdc3c7",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "#bdc3c7",
        "textDecoration": "none"
    },
    "btn-hg": {
        "paddingTop": 13,
        "paddingRight": 20,
        "paddingBottom": 13,
        "paddingLeft": 20,
        "fontSize": 22,
        "lineHeight": 1.227,
        "borderRadius": 6
    },
    "btn-lg": {
        "paddingTop": 10,
        "paddingRight": 19,
        "paddingBottom": 10,
        "paddingLeft": 19,
        "fontSize": 17,
        "lineHeight": 1.471,
        "borderRadius": 6
    },
    "btn-sm": {
        "paddingTop": 9,
        "paddingRight": 13,
        "paddingBottom": 9,
        "paddingLeft": 13,
        "fontSize": 13,
        "lineHeight": 1.385,
        "borderRadius": 4
    },
    "btn-xs": {
        "paddingTop": 6,
        "paddingRight": 9,
        "paddingBottom": 6,
        "paddingLeft": 9,
        "fontSize": 12,
        "lineHeight": 1.083,
        "borderRadius": 3
    },
    "btn-tip": {
        "fontWeight": "300",
        "paddingLeft": 10,
        "fontSize": "92%"
    },
    "btn-block": {
        "whiteSpace": "normal"
    },
    "btn-default caret": {
        "borderTopColor": "#ffffff"
    },
    "btn-primary caret": {
        "borderTopColor": "#ffffff"
    },
    "btn-success caret": {
        "borderTopColor": "#ffffff"
    },
    "btn-warning caret": {
        "borderTopColor": "#ffffff"
    },
    "btn-danger caret": {
        "borderTopColor": "#ffffff"
    },
    "btn-info caret": {
        "borderTopColor": "#ffffff"
    },
    "dropup btn-default caret": {
        "borderBottomColor": "#ffffff"
    },
    "dropup btn-primary caret": {
        "borderBottomColor": "#ffffff"
    },
    "dropup btn-success caret": {
        "borderBottomColor": "#ffffff"
    },
    "dropup btn-warning caret": {
        "borderBottomColor": "#ffffff"
    },
    "dropup btn-danger caret": {
        "borderBottomColor": "#ffffff"
    },
    "dropup btn-info caret": {
        "borderBottomColor": "#ffffff"
    },
    "btn-group-xs > btn": {
        "paddingTop": 6,
        "paddingRight": 9,
        "paddingBottom": 6,
        "paddingLeft": 9,
        "fontSize": 12,
        "lineHeight": 1.083,
        "borderRadius": 3
    },
    "btn-group-sm > btn": {
        "paddingTop": 9,
        "paddingRight": 13,
        "paddingBottom": 9,
        "paddingLeft": 13,
        "fontSize": 13,
        "lineHeight": 1.385,
        "borderRadius": 4
    },
    "btn-group-lg > btn": {
        "paddingTop": 10,
        "paddingRight": 19,
        "paddingBottom": 10,
        "paddingLeft": 19,
        "fontSize": 17,
        "lineHeight": 1.471,
        "borderRadius": 6
    },
    "btn-group-gh > btn": {
        "paddingTop": 13,
        "paddingRight": 20,
        "paddingBottom": 13,
        "paddingLeft": 20,
        "fontSize": 22,
        "lineHeight": 1.227,
        "borderRadius": 6
    },
    "btn-group > btn + btn": {
        "marginLeft": 0
    },
    "btn-group > btn + dropdown-toggle": {
        "borderLeft": "2px solid rgba(52, 73, 94, 0.15)",
        "paddingLeft": 12,
        "paddingRight": 12
    },
    "btn-group > btn + dropdown-toggle caret": {
        "marginLeft": 3,
        "marginRight": 3
    },
    "btn-group > btnbtn-gh + dropdown-toggle caret": {
        "marginLeft": 7,
        "marginRight": 7
    },
    "btn-group > btnbtn-sm + dropdown-toggle caret": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "dropdown-toggle caret": {
        "marginLeft": 8
    },
    "btn-group > btn": {
        "fontWeight": "400"
    },
    "btn-group > dropdown-menu": {
        "fontWeight": "400"
    },
    "btn-group > popover": {
        "fontWeight": "400"
    },
    "btn-group:focus dropdown-toggle": {
        "outline": "none",
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "btn-groupopen dropdown-toggle": {
        "color": "rgba(255, 255, 255, 0.75)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-toolbar btnactive": {
        "color": "#ffffff"
    },
    "btn-toolbar btn > [class^=\"fui-\"]": {
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "caret": {
        "borderWidth": "8px 6px",
        "borderBottomColor": "#34495e",
        "borderTopColor": "#34495e",
        "borderStyle": "solid",
        "borderBottomStyle": "none",
        "WebkitTransition": "0.25s",
        "transition": "0.25s",
        "WebkitTransform": "scale(1.001)",
        "MsTransform": "scale(1.001)",
        "transform": "scale(1.001)"
    },
    "dropup caret": {
        "borderBottomWidth": 8
    },
    "dropup btn-lg caret": {
        "borderBottomWidth": 8
    },
    "navbar-fixed-bottom dropdown caret": {
        "borderBottomWidth": 8
    },
    "btn-lg caret": {
        "borderTopWidth": 8,
        "borderRightWidth": 6,
        "borderLeftWidth": 6
    },
    "navbar": {
        "fontSize": 16,
        "borderRadius": 6,
        "border": "none"
    },
    "navbar navbar-brand": {
        "borderRadius": "6px 0 0 6px",
        "color": "#526476",
        "fontSize": 24,
        "lineHeight": 29.55,
        "fontWeight": "700",
        "paddingTop": 23,
        "paddingRight": 28,
        "paddingBottom": 24,
        "paddingLeft": 17,
        "textShadow": "none",
        "display": "inline-block"
    },
    "navbar navbar-brand:hover": {
        "color": "#1abc9c"
    },
    "navbar navbar-brand:focus": {
        "color": "#1abc9c"
    },
    "navbar navbar-brand[class*=\"fui-\"]": {
        "fontWeight": "normal"
    },
    "navbar navbar-brand small": {
        "lineHeight": 1
    },
    "navbar nav": {
        "marginRight": 0,
        "display": "inline-block",
        "float": "left"
    },
    "navbar nav > li": {
        "position": "relative",
        "display": "inline-block"
    },
    "navbar nav > li:hover > ul": {
        "opacity": 1,
        "top": "100%",
        "visibility": "visible",
        "zIndex": 100,
        "WebkitTransform": "scale(1, 1)",
        "display": "block\\9"
    },
    "navbar nav > liactive > a": {
        "background": "none",
        "color": "#1abc9c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "navbar nav > liactive > a:hover": {
        "background": "none",
        "color": "#1abc9c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "navbar nav > liactive > a:focus": {
        "background": "none",
        "color": "#1abc9c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "navbar nav > li:first-child": {
        "borderRadius": "6px 6px 0 0"
    },
    "navbar nav > li:last-child": {
        "borderRadius": "0 0 6px 6px"
    },
    "navbar nav > li > ul": {
        "paddingTop": 13,
        "top": "80%",
        "paddingLeft": 0
    },
    "navbar nav > li > ul:before": {
        "content": "",
        "borderStyle": "solid",
        "borderWidth": "0 9px 9px 9px",
        "borderColor": "transparent transparent #34495e transparent",
        "height": 0,
        "position": "absolute",
        "left": 15,
        "top": 5,
        "width": 0,
        "WebkitTransform": "rotate(360deg)"
    },
    "navbar nav > li > ul li:hover ul": {
        "opacity": 1,
        "WebkitTransform": "scale(1, 1)",
        "visibility": "visible",
        "display": "block\\9"
    },
    "navbar nav > li > ul li ul": {
        "left": "100%"
    },
    "navbar nav > li > a": {
        "color": "#526476",
        "display": "inline-block",
        "fontWeight": "700",
        "fontSize": 15,
        "lineHeight": 28,
        "paddingTop": 22,
        "paddingRight": 20,
        "paddingBottom": 22,
        "paddingLeft": 20,
        "textShadow": "none",
        "WebkitTransition": "background-color .25s, color .25s, border-bottom-color .25s",
        "transition": "background-color .25s, color .25s, border-bottom-color .25s"
    },
    "navbar nav > li > a:hover": {
        "color": "#1abc9c",
        "backgroundColor": "transparent"
    },
    "navbar nav > li > a:focus": {
        "color": "#1abc9c",
        "backgroundColor": "transparent"
    },
    "navbar nav > li > a[class*=\"fui-\"]": {
        "fontSize": 24,
        "fontWeight": "normal"
    },
    "navbar nav > li > a > [class*=\"fui-\"]": {
        "fontSize": 24,
        "marginTop": -4,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative",
        "top": 4
    },
    "navbar nav > li > a > [class*=\"fui-\"] + *": {
        "marginLeft": 12
    },
    "navbar nav ul": {
        "borderRadius": 4,
        "left": 0,
        "listStyleType": "none",
        "marginLeft": 0,
        "opacity": 0,
        "position": "absolute",
        "top": 0,
        "width": 234,
        "WebkitTransform": "scale(1, 0.99)",
        "WebkitTransformOrigin": "0 0",
        "visibility": "hidden",
        "WebkitTransition": "0.25s ease-out",
        "transition": "0.25s ease-out"
    },
    "navbar nav ul ul": {
        "left": "95%",
        "paddingLeft": 5
    },
    "navbar nav ul li": {
        "backgroundColor": "#34495e",
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "position": "relative"
    },
    "navbar nav ul li:first-child": {
        "borderRadius": "6px 6px 0 0",
        "paddingTop": 3
    },
    "navbar nav ul li:last-child": {
        "borderRadius": "0 0 6px 6px"
    },
    "navbar nav ul liactive > a": {
        "backgroundColor": "#1abc9c",
        "color": "#ffffff",
        "paddingLeft": 9,
        "paddingRight": 9
    },
    "navbar nav ul liactive > a:hover": {
        "backgroundColor": "#1abc9c",
        "color": "#ffffff",
        "paddingLeft": 9,
        "paddingRight": 9
    },
    "navbar nav ul liactive > a:focus": {
        "backgroundColor": "#1abc9c",
        "color": "#ffffff",
        "paddingLeft": 9,
        "paddingRight": 9
    },
    "navbar nav ul liactive + li > a": {
        "paddingLeft": 9,
        "paddingRight": 9
    },
    "navbar nav ul a": {
        "borderRadius": 2,
        "color": "#ffffff",
        "display": "block",
        "fontSize": 14,
        "paddingTop": 6,
        "paddingRight": 9,
        "paddingBottom": 6,
        "paddingLeft": 9,
        "textDecoration": "none"
    },
    "navbar nav ul a:hover": {
        "backgroundColor": "#1abc9c"
    },
    "navbar navnavbar-left li:first-child a": {
        "borderRadius": "6px 0 0 6px",
        "borderLeft": "none"
    },
    "navbar btn-navbar": {
        "background": "none",
        "border": "none",
        "color": "#34495e",
        "marginTop": 18,
        "marginRight": 15,
        "marginBottom": 18,
        "marginLeft": 15,
        "paddingTop": 3,
        "paddingRight": 15,
        "paddingBottom": 3,
        "paddingLeft": 15,
        "textShadow": "none",
        "display": "none"
    },
    "navbar btn-navbar:hover": {
        "background": "none",
        "color": "#1abc9c"
    },
    "navbar btn-navbar:focus": {
        "background": "none",
        "color": "#1abc9c"
    },
    "navbar btn-navbar:before": {
        "content": "\\e00c",
        "fontFamily": "Flat-UI-Icons",
        "fontSize": 23,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "WebkitFontSmoothing": "antialiased"
    },
    "navbar btn-navbar icon-bar": {
        "display": "none"
    },
    "navbar-default": {
        "background": "#eceef0",
        "border": "none",
        "paddingLeft": 0,
        "paddingRight": 0,
        "borderRadius": 6
    },
    "navbar-inverse": {
        "background": "#34495e",
        "fontSize": 17
    },
    "navbar-inverse navbar-brand": {
        "borderBottom": "2px solid #2c3e50",
        "borderRight": "2px solid #2c3e50",
        "color": "#ffffff",
        "paddingTop": 10,
        "paddingRight": 28,
        "paddingBottom": 11,
        "paddingLeft": 32
    },
    "navbar-inverse btn-navbar": {
        "color": "#ffffff",
        "marginTop": 7,
        "marginRight": 10,
        "marginBottom": 7,
        "marginLeft": 10
    },
    "navbar-inverse btn-icon": {
        "marginTop": 8,
        "marginRight": 5,
        "marginBottom": 8,
        "marginLeft": 15
    },
    "navbar-inverse nav > li:first-childactive > a": {
        "paddingLeft": 20
    },
    "navbar-inverse nav > li:first-child > a": {
        "borderLeft": "none"
    },
    "navbar-inverse nav > liactive > a": {
        "backgroundColor": "#1abc9c",
        "borderBottomColor": "#16a085",
        "borderLeft": "none",
        "color": "#ffffff",
        "paddingLeft": 20
    },
    "navbar-inverse nav > liactive > a:hover": {
        "backgroundColor": "#1abc9c",
        "borderBottomColor": "#16a085",
        "borderLeft": "none",
        "color": "#ffffff",
        "paddingLeft": 20
    },
    "navbar-inverse nav > liactive > a:focus": {
        "backgroundColor": "#1abc9c",
        "borderBottomColor": "#16a085",
        "borderLeft": "none",
        "color": "#ffffff",
        "paddingLeft": 20
    },
    "navbar-inverse nav > liactive + li > a": {
        "borderLeft": "none",
        "paddingLeft": 20
    },
    "navbar-inverse nav > li > a": {
        "fontSize": 16,
        "borderBottom": "2px solid #2c3e50",
        "borderLeft": "2px solid #2c3e50 !important",
        "color": "#ffffff",
        "paddingTop": 16,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "lineHeight": 20
    },
    "navbar-inverse navnavbar-right dropdown-menu": {
        "left": "-100%",
        "marginLeft": 17
    },
    "navbar-inverse navnavbar-right open > dropdown-menu:before": {
        "display": "block !important"
    },
    "navbar-inverse navnavbar-right > li > a": {
        "borderRadius": "0 6px 6px 0"
    },
    "navbar-unread": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "backgroundColor": "#1abc9c",
        "borderRadius": "50%",
        "color": "#ffffff",
        "fontSize": 0,
        "fontWeight": "700",
        "height": 6,
        "lineHeight": 14,
        "position": "absolute",
        "right": 12,
        "textAlign": "center",
        "top": 28,
        "width": 6,
        "zIndex": 10
    },
    "navbar-new": {
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "backgroundColor": "#e74c3c",
        "borderRadius": "50%",
        "color": "#ffffff",
        "fontSize": 12,
        "fontWeight": "700",
        "height": 18,
        "lineHeight": 17,
        "position": "absolute",
        "right": 12,
        "textAlign": "center",
        "top": 28,
        "width": "auto",
        "zIndex": 10,
        "marginTop": -9,
        "marginRight": -1,
        "marginBottom": -9,
        "marginLeft": -1,
        "minWidth": 18,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "WebkitFontSmoothing": "subpixel-antialiased"
    },
    "active navbar-unread": {
        "backgroundColor": "#ffffff",
        "display": "none"
    },
    "active navbar-new": {
        "backgroundColor": "#ffffff",
        "display": "none"
    },
    "navbar-inverse navbar-unread": {
        "top": 15
    },
    "navbar-inverse navbar-new": {
        "top": 15
    },
    "navbarnavbar-inverse nav lidropdownopen > dropdown-toggle": {
        "backgroundColor": "#1abc9c",
        "borderBottomColor": "#16a085",
        "color": "#ffffff"
    },
    "navbarnavbar-inverse nav lidropdownopen > dropdown-toggle caret": {
        "borderBottomColor": "#ffffff !important",
        "borderTopColor": "#ffffff !important"
    },
    "navbar nav lidropdownopen > dropdown-toggle": {
        "background": "none",
        "color": "#1abc9c"
    },
    "navbar nav lidropdownopen > dropdown-toggle caret": {
        "borderBottomColor": "#1abc9c !important",
        "borderTopColor": "#1abc9c !important"
    },
    "navbar nav lidropdownopen dropdown-menu": {
        "opacity": 1,
        "top": "100%",
        "visibility": "visible",
        "zIndex": 1000,
        "WebkitTransform": "none"
    },
    "navbar nav lidropdown > dropdown-toggle": {
        "outline": "none"
    },
    "navbar nav lidropdown > dropdown-toggle:hover caret": {
        "borderBottomColor": "#1abc9c",
        "borderTopColor": "#1abc9c"
    },
    "navbar nav lidropdown > dropdown-toggle:focus caret": {
        "borderBottomColor": "#1abc9c",
        "borderTopColor": "#1abc9c"
    },
    "navbar nav lidropdown > dropdown-toggle caret": {
        "borderLeftWidth": 6,
        "borderRightWidth": 6,
        "borderTopWidth": 8,
        "borderBottomColor": "#4c6a89",
        "borderTopColor": "#4c6a89",
        "marginLeft": 10
    },
    "navbar nav lidropdown dropdown-menu": {
        "backgroundColor": "#34495e",
        "opacity": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "visibility": "hidden"
    },
    "navbar nav lidropdown dropdown-menu:before": {
        "display": "none"
    },
    "navbar nav lidropdown dropdown-menu:after": {
        "borderBottomColor": "#34495e"
    },
    "navbar nav lidropdown dropdown-menu > li > a": {
        "borderRadius": 3,
        "color": "#ffffff",
        "paddingTop": 6,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "navbar nav lidropdown dropdown-menu divider": {
        "backgroundColor": "#2c3e50",
        "borderBottom": "none",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 2
    },
    "navbarnavbar-inverse navbar-form": {
        "borderLeft": "2px solid #2c3e50",
        "borderBottom": "2px solid #2c3e50",
        "paddingTop": 8,
        "paddingRight": 5,
        "paddingBottom": 8,
        "paddingLeft": 23
    },
    "navbarnavbar-inverse navbar-form input-group-btn btn": {
        "backgroundColor": "#2c3e50",
        "color": "#4c6a89 !important"
    },
    "navbarnavbar-inverse navbar-form form-control": {
        "backgroundColor": "#2c3e50",
        "color": "#ffffff"
    },
    "navbarnavbar-inverse navbar-form form-control:-moz-placeholder": {
        "color": "#819db9"
    },
    "navbarnavbar-inverse navbar-form form-control::-moz-placeholder": {
        "color": "#819db9"
    },
    "navbarnavbar-inverse navbar-form form-control:-ms-input-placeholder": {
        "color": "#819db9"
    },
    "navbarnavbar-inverse navbar-form form-control::-webkit-input-placeholder": {
        "color": "#819db9"
    },
    "navbarnavbar-inverse navbar-form form-controlplaceholder": {
        "color": "#819db9"
    },
    "navbarnavbar-inverse navbar-form form-control:focus": {
        "borderColor": "#1abc9c"
    },
    "navbarnavbar-inverse navbar-formfocus input-group-btn btn": {
        "backgroundColor": "#2c3e50 !important"
    },
    "navbar navbar-form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 20,
        "paddingRight": 5,
        "paddingBottom": 19,
        "paddingLeft": 20,
        "maxWidth": 229
    },
    "navbar navbar-form form-group": {
        "marginBottom": 0
    },
    "navbar navbar-form form-control": {
        "backgroundColor": "#ffffff",
        "border": "2px solid transparent",
        "color": "#526476",
        "fontSize": 15
    },
    "navbar navbar-form form-control:-moz-placeholder": {
        "color": "#798795"
    },
    "navbar navbar-form form-control::-moz-placeholder": {
        "color": "#798795"
    },
    "navbar navbar-form form-control:-ms-input-placeholder": {
        "color": "#798795"
    },
    "navbar navbar-form form-control::-webkit-input-placeholder": {
        "color": "#798795"
    },
    "navbar navbar-form form-controlplaceholder": {
        "color": "#798795"
    },
    "navbar navbar-form form-control:focus": {
        "borderColor": "#1abc9c"
    },
    "navbar navbar-form input-group-btn btn": {
        "borderColor": "transparent",
        "color": "#9aa4af",
        "fontSize": 16
    },
    "navbarnavbar-fixed-bottom navbar-inner navbar-form form-control": {
        "borderRadius": "50px 0 0 50px !important"
    },
    "navbarnavbar-fixed-top navbar-inner navbar-form form-control": {
        "borderRadius": "50px 0 0 50px !important"
    },
    "navbarnavbar-fixed-bottom navbar-inner navbar-form btn": {
        "borderRadius": "0 50px 50px 0"
    },
    "navbarnavbar-fixed-top navbar-inner navbar-form btn": {
        "borderRadius": "0 50px 50px 0"
    },
    "navbarnavbar-fixed-bottom nav > li:hover > ul": {
        "bottom": "100%",
        "paddingBottom": 13,
        "top": "auto"
    },
    "navbarnavbar-fixed-bottom nav > li:hover > ul li:hover ul": {
        "bottom": 0
    },
    "navbarnavbar-fixed-bottom nav ul": {
        "bottom": "80%",
        "top": "auto"
    },
    "select": {
        "display": "inline-block",
        "marginBottom": 10
    },
    "[class*=\"span\"] > select[class*=\"span\"]": {
        "marginLeft": 0
    },
    "select[class*=\"span\"] btn": {
        "width": "100%"
    },
    "selectselect-block": {
        "display": "block",
        "float": "none",
        "marginLeft": 0,
        "width": "auto"
    },
    "selectselect-block:before": {
        "content": " ",
        "display": "table"
    },
    "selectselect-block:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "selectselect-block btn": {
        "width": "100%"
    },
    "select btn": {
        "width": 220
    },
    "select btnbtn-hg filter-option": {
        "left": 20,
        "right": 40,
        "top": 13
    },
    "select btnbtn-hg caret": {
        "right": 20
    },
    "select btnbtn-lg filter-option": {
        "left": 18,
        "right": 38
    },
    "select btnbtn-sm filter-option": {
        "left": 13,
        "right": 33
    },
    "select btnbtn-sm caret": {
        "right": 13
    },
    "select btnbtn-xs filter-option": {
        "left": 13,
        "right": 33,
        "top": 5
    },
    "select btnbtn-xs caret": {
        "right": 13
    },
    "select btn filter-option": {
        "height": 26,
        "left": 13,
        "overflow": "hidden",
        "position": "absolute",
        "right": 33,
        "textAlign": "left",
        "top": 10
    },
    "select btn caret": {
        "position": "absolute",
        "right": 16,
        "top": "50%",
        "marginTop": -3
    },
    "select btn dropdown-toggle": {
        "borderRadius": 6
    },
    "select btn dropdown-menu": {
        "minWidth": "100%"
    },
    "select btn dropdown-menu dt": {
        "cursor": "default",
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20
    },
    "select btn dropdown-menu li:not(disabled) > a:hover small": {
        "color": "rgba(255, 255, 255, 0.004)"
    },
    "select btn dropdown-menu li > a": {
        "minHeight": 20
    },
    "select btn dropdown-menu li > aopt": {
        "paddingLeft": 35
    },
    "select btn dropdown-menu li small": {
        "paddingLeft": 0.5
    },
    "select btn dropdown-menu li > dt small": {
        "fontWeight": "normal"
    },
    "select btn > disabled": {
        "cursor": "default"
    },
    "select btn dropdown-menu lidisabled > a": {
        "cursor": "default"
    },
    "select caret": {
        "borderBottomColor": "#ffffff",
        "borderTopColor": "#ffffff"
    },
    "textarea": {
        "fontSize": 20,
        "lineHeight": 24,
        "paddingTop": 5,
        "paddingRight": 11,
        "paddingBottom": 5,
        "paddingLeft": 11
    },
    "label": {
        "fontWeight": "normal",
        "lineHeight": 1.9986363100000002
    },
    "form-control:-moz-placeholder": {
        "color": "#b2bcc5"
    },
    "form-control::-moz-placeholder": {
        "color": "#b2bcc5"
    },
    "form-control:-ms-input-placeholder": {
        "color": "#b2bcc5"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#b2bcc5"
    },
    "form-controlplaceholder": {
        "color": "#b2bcc5"
    },
    "form-control": {
        "border": "2px solid #bdc3c7",
        "color": "#34495e",
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontSize": 15,
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "height": 42,
        "WebkitAppearance": "none",
        "borderRadius": 6,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "WebkitTransition": "border .25s linear, color .25s linear, background-color .25s linear",
        "transition": "border .25s linear, color .25s linear, background-color .25s linear"
    },
    "form-groupfocus form-control": {
        "borderColor": "#1abc9c",
        "outline": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "form-control:focus": {
        "borderColor": "#1abc9c",
        "outline": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "form-control[disabled]": {
        "backgroundColor": "#f4f6f6",
        "borderColor": "#d5dbdb",
        "color": "#d5dbdb",
        "cursor": "default"
    },
    "form-control[readonly]": {
        "backgroundColor": "#f4f6f6",
        "borderColor": "#d5dbdb",
        "color": "#d5dbdb",
        "cursor": "default"
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "#f4f6f6",
        "borderColor": "#d5dbdb",
        "color": "#d5dbdb",
        "cursor": "default"
    },
    "form-controlflat": {
        "borderColor": "transparent"
    },
    "form-controlflat:hover": {
        "borderColor": "#bdc3c7"
    },
    "form-controlflat:focus": {
        "borderColor": "#1abc9c"
    },
    "input-sm": {
        "height": 35,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "fontSize": 13,
        "lineHeight": 1.72222,
        "borderRadius": 6
    },
    "selectinput-sm": {
        "height": 35,
        "lineHeight": 35
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "input-lg": {
        "height": 45,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 17,
        "lineHeight": 1.72222,
        "borderRadius": 6
    },
    "selectinput-lg": {
        "height": 45,
        "lineHeight": 45
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "input-hg": {
        "height": 53,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 22,
        "lineHeight": 1.72222,
        "borderRadius": 6
    },
    "selectinput-hg": {
        "height": 53,
        "lineHeight": 53
    },
    "textareainput-hg": {
        "height": "auto"
    },
    "has-warning help-block": {
        "color": "#f1c40f"
    },
    "has-warning control-label": {
        "color": "#f1c40f"
    },
    "has-warning form-control": {
        "color": "#f1c40f",
        "borderColor": "#f1c40f",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-warning form-control:-moz-placeholder": {
        "color": "#f1c40f"
    },
    "has-warning form-control::-moz-placeholder": {
        "color": "#f1c40f"
    },
    "has-warning form-control:-ms-input-placeholder": {
        "color": "#f1c40f"
    },
    "has-warning form-control::-webkit-input-placeholder": {
        "color": "#f1c40f"
    },
    "has-warning form-controlplaceholder": {
        "color": "#f1c40f"
    },
    "has-warning form-control:focus": {
        "borderColor": "#f1c40f",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-warning input-group-addon": {
        "color": "#f1c40f",
        "borderColor": "#f1c40f",
        "backgroundColor": "#ffffff"
    },
    "has-error help-block": {
        "color": "#e74c3c"
    },
    "has-error control-label": {
        "color": "#e74c3c"
    },
    "has-error form-control": {
        "color": "#e74c3c",
        "borderColor": "#e74c3c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-error form-control:-moz-placeholder": {
        "color": "#e74c3c"
    },
    "has-error form-control::-moz-placeholder": {
        "color": "#e74c3c"
    },
    "has-error form-control:-ms-input-placeholder": {
        "color": "#e74c3c"
    },
    "has-error form-control::-webkit-input-placeholder": {
        "color": "#e74c3c"
    },
    "has-error form-controlplaceholder": {
        "color": "#e74c3c"
    },
    "has-error form-control:focus": {
        "borderColor": "#e74c3c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-error input-group-addon": {
        "color": "#e74c3c",
        "borderColor": "#e74c3c",
        "backgroundColor": "#ffffff"
    },
    "has-success help-block": {
        "color": "#2ecc71"
    },
    "has-success control-label": {
        "color": "#2ecc71"
    },
    "has-success form-control": {
        "color": "#2ecc71",
        "borderColor": "#2ecc71",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-success form-control:-moz-placeholder": {
        "color": "#2ecc71"
    },
    "has-success form-control::-moz-placeholder": {
        "color": "#2ecc71"
    },
    "has-success form-control:-ms-input-placeholder": {
        "color": "#2ecc71"
    },
    "has-success form-control::-webkit-input-placeholder": {
        "color": "#2ecc71"
    },
    "has-success form-controlplaceholder": {
        "color": "#2ecc71"
    },
    "has-success form-control:focus": {
        "borderColor": "#2ecc71",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-success input-group-addon": {
        "color": "#2ecc71",
        "borderColor": "#2ecc71",
        "backgroundColor": "#ffffff"
    },
    "form-group": {
        "position": "relative",
        "marginBottom": 20
    },
    "form-control + input-icon": {
        "position": "absolute",
        "top": 2,
        "right": 2,
        "lineHeight": 37,
        "verticalAlign": "middle",
        "fontSize": 20,
        "color": "#b2bcc5",
        "backgroundColor": "#ffffff",
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderRadius": 6
    },
    "input-hg + input-icon": {
        "lineHeight": 49,
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input-lg + input-icon": {
        "lineHeight": 41,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input-sm + input-icon": {
        "fontSize": 18,
        "lineHeight": 30,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "has-success input-icon": {
        "color": "#2ecc71"
    },
    "has-warning input-icon": {
        "color": "#f1c40f"
    },
    "has-error input-icon": {
        "color": "#e74c3c"
    },
    "form-control[disabled] + input-icon": {
        "color": "#d5dbdb",
        "backgroundColor": "#f4f6f6"
    },
    "form-control[readonly] + input-icon": {
        "color": "#d5dbdb",
        "backgroundColor": "#f4f6f6"
    },
    "fieldset[disabled] form-control + input-icon": {
        "color": "#d5dbdb",
        "backgroundColor": "#f4f6f6"
    },
    "form-controldisabled + input-icon": {
        "color": "#d5dbdb",
        "backgroundColor": "#f4f6f6"
    },
    "checkbox": {
        "position": "relative",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear",
        "fontSize": 14,
        "lineHeight": 1.5
    },
    "radio": {
        "position": "relative",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear",
        "fontSize": 14,
        "lineHeight": 1.5
    },
    "checkbox input": {
        "outline": "none !important"
    },
    "radio input": {
        "outline": "none !important"
    },
    "checkbox icons": {
        "color": "#bdc3c7",
        "display": "block",
        "height": 20,
        "left": 0,
        "position": "absolute",
        "top": 0,
        "width": 20,
        "textAlign": "center",
        "lineHeight": 21,
        "fontSize": 20,
        "cursor": "pointer",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "radio icons": {
        "color": "#bdc3c7",
        "display": "block",
        "height": 20,
        "left": 0,
        "position": "absolute",
        "top": 0,
        "width": 20,
        "textAlign": "center",
        "lineHeight": 21,
        "fontSize": 20,
        "cursor": "pointer",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "checkbox icons first-icon": {
        "display": "inline-table",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "backgroundColor": "#ffffff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "radio icons first-icon": {
        "display": "inline-table",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "backgroundColor": "#ffffff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "checkbox icons second-icon": {
        "display": "inline-table",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "backgroundColor": "#ffffff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "radio icons second-icon": {
        "display": "inline-table",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "backgroundColor": "#ffffff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "checkbox:hover": {
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "radio:hover": {
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "checkbox:hover first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "radio:hover first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "checkbox:hover second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "radio:hover second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "checkboxchecked": {
        "color": "#1abc9c"
    },
    "radiochecked": {
        "color": "#1abc9c"
    },
    "checkboxchecked first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "radiochecked first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "checkboxchecked second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "color": "#1abc9c",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "radiochecked second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "color": "#1abc9c",
        "WebkitTransition": "color 0.25s linear",
        "transition": "color 0.25s linear"
    },
    "checkboxdisabled": {
        "cursor": "default",
        "color": "#e6e8ea"
    },
    "radiodisabled": {
        "cursor": "default",
        "color": "#e6e8ea"
    },
    "checkboxdisabled icons": {
        "color": "#e6e8ea"
    },
    "radiodisabled icons": {
        "color": "#e6e8ea"
    },
    "checkboxdisabled first-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "radiodisabled first-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "checkboxdisabled second-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "radiodisabled second-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "checkboxdisabledchecked icons": {
        "color": "#e6e8ea"
    },
    "radiodisabledchecked icons": {
        "color": "#e6e8ea"
    },
    "checkboxdisabledchecked first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "radiodisabledchecked first-icon": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "checkboxdisabledchecked second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "color": "#e6e8ea"
    },
    "radiodisabledchecked second-icon": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "color": "#e6e8ea"
    },
    "checkboxprimary icons": {
        "color": "#34495e"
    },
    "radioprimary icons": {
        "color": "#34495e"
    },
    "checkboxprimarychecked": {
        "color": "#1abc9c"
    },
    "radioprimarychecked": {
        "color": "#1abc9c"
    },
    "checkboxprimarychecked icons": {
        "color": "#1abc9c"
    },
    "radioprimarychecked icons": {
        "color": "#1abc9c"
    },
    "checkboxprimarydisabled": {
        "cursor": "default",
        "color": "#bdc3c7"
    },
    "radioprimarydisabled": {
        "cursor": "default",
        "color": "#bdc3c7"
    },
    "checkboxprimarydisabled icons": {
        "color": "#bdc3c7"
    },
    "radioprimarydisabled icons": {
        "color": "#bdc3c7"
    },
    "checkboxprimarydisabledchecked icons": {
        "color": "#bdc3c7"
    },
    "radioprimarydisabledchecked icons": {
        "color": "#bdc3c7"
    },
    "radio + radio": {
        "marginTop": 10
    },
    "checkbox + checkbox": {
        "marginTop": 10
    },
    "tagsinput": {
        "background": "white",
        "border": "2px solid #1abc9c",
        "borderRadius": 6,
        "height": 100,
        "marginBottom": 18,
        "paddingTop": 6,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 6,
        "overflowY": "auto",
        "textAlign": "left"
    },
    "tagsinput tag": {
        "borderRadius": 4,
        "backgroundColor": "#1abc9c",
        "color": "#ffffff",
        "fontSize": 14,
        "cursor": "pointer",
        "display": "inline-block",
        "marginRight": 5,
        "marginBottom": 5,
        "overflow": "hidden",
        "lineHeight": 15,
        "paddingTop": 6,
        "paddingRight": 13,
        "paddingBottom": 8,
        "paddingLeft": 19,
        "position": "relative",
        "verticalAlign": "middle",
        "WebkitTransition": "0.25s linear",
        "transition": "0.25s linear"
    },
    "tagsinput tag:hover": {
        "backgroundColor": "#16a085",
        "color": "#ffffff",
        "paddingLeft": 12,
        "paddingRight": 20
    },
    "tagsinput tag:hover tagsinput-remove-link": {
        "color": "#ffffff",
        "opacity": 1,
        "display": "block\\9"
    },
    "tagsinput input": {
        "background": "transparent",
        "border": "none",
        "color": "#34495e",
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif",
        "fontSize": 14,
        "marginTop": 6,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "outline": "none !important",
        "verticalAlign": "top",
        "width": 12
    },
    "tagsinput-remove-link": {
        "bottom": 0,
        "color": "#ffffff",
        "cursor": "pointer",
        "fontSize": 12,
        "opacity": 0,
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "position": "absolute",
        "right": 0,
        "textAlign": "right",
        "textDecoration": "none",
        "top": 0,
        "width": "100%",
        "zIndex": 2,
        "display": "none\\9"
    },
    "tagsinput-remove-link:before": {
        "color": "#ffffff",
        "content": "\\e00b",
        "fontFamily": "Flat-UI-Icons"
    },
    "tagsinput-add-container": {
        "verticalAlign": "middle",
        "display": "inline-block"
    },
    "tagsinput-add": {
        "backgroundColor": "#d6dbdf",
        "borderRadius": 3,
        "color": "#ffffff",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 14,
        "lineHeight": 1,
        "marginBottom": 5,
        "paddingTop": 7,
        "paddingRight": 9,
        "paddingBottom": 7,
        "paddingLeft": 9,
        "verticalAlign": "top",
        "WebkitTransition": "0.25s linear",
        "transition": "0.25s linear"
    },
    "tagsinput-add:hover": {
        "backgroundColor": "#1abc9c"
    },
    "tagsinput-add:before": {
        "content": "\\e009",
        "fontFamily": "Flat-UI-Icons"
    },
    "tags_clear": {
        "clear": "both",
        "width": "100%",
        "height": 0
    },
    "not_valid": {
        "background": "#fbd8db !important",
        "color": "#90111a !important",
        "marginLeft": "5px !important"
    },
    "progress": {
        "background": "#ebedef",
        "borderRadius": 32,
        "height": 12,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "progress-bar": {
        "background": "#1abc9c",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "progress-bar-success": {
        "backgroundColor": "#2ecc71"
    },
    "progress-bar-warning": {
        "backgroundColor": "#f1c40f"
    },
    "progress-bar-danger": {
        "backgroundColor": "#e74c3c"
    },
    "progress-bar-info": {
        "backgroundColor": "#3498db"
    },
    "ui-slider": {
        "background": "#ebedef",
        "borderRadius": 32,
        "height": 12,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "marginBottom": 20,
        "position": "relative"
    },
    "ui-slider-handle": {
        "backgroundColor": "#16a085",
        "borderRadius": "50%",
        "cursor": "pointer",
        "height": 18,
        "marginLeft": -9,
        "position": "absolute",
        "top": -3,
        "width": 18,
        "zIndex": 2,
        "WebkitTransition": "background 0.25s",
        "transition": "background 0.25s"
    },
    "ui-slider-handle[style*='100']": {
        "marginLeft": -15
    },
    "ui-slider-handle:hover": {
        "backgroundColor": "#48c9b0",
        "outline": "none"
    },
    "ui-slider-handle:focus": {
        "backgroundColor": "#48c9b0",
        "outline": "none"
    },
    "ui-slider-handle:active": {
        "backgroundColor": "#16a085"
    },
    "ui-slider-range": {
        "backgroundColor": "#1abc9c",
        "borderRadius": "30px 0 0 30px",
        "display": "block",
        "height": "100%",
        "position": "absolute",
        "zIndex": 1
    },
    "ui-slider-segment": {
        "backgroundColor": "#d9dbdd",
        "borderRadius": "50%",
        "float": "left",
        "height": 6,
        "marginTop": 3,
        "marginRight": -6,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 6
    },
    "ui-slider-value": {
        "float": "right",
        "fontSize": 13,
        "marginTop": 12
    },
    "ui-slider-valuefirst": {
        "clear": "left",
        "float": "left"
    },
    "pager": {
        "backgroundColor": "#34495e",
        "borderRadius": 6,
        "color": "#ffffff",
        "fontSize": 16,
        "fontWeight": "700",
        "display": "inline-block"
    },
    "pager li:first-child > a": {
        "borderLeft": "none",
        "borderRadius": "6px 0 0 6px"
    },
    "pager li:first-child > span": {
        "borderLeft": "none",
        "borderRadius": "6px 0 0 6px"
    },
    "pager li > a": {
        "background": "none",
        "border": "none",
        "borderLeft": "2px solid #2c3e50",
        "color": "#ffffff",
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": "0 6px 6px 0",
        "lineHeight": 1.313
    },
    "pager li > span": {
        "background": "none",
        "border": "none",
        "borderLeft": "2px solid #2c3e50",
        "color": "#ffffff",
        "paddingTop": 9,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "borderRadius": "0 6px 6px 0",
        "lineHeight": 1.313
    },
    "pager li > a:hover": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > span:hover": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > a:focus": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > span:focus": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > a:active": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > span:active": {
        "backgroundColor": "#2c3e50"
    },
    "pager li > a [class*=\"fui-\"] + span": {
        "marginLeft": 8
    },
    "pager li > span [class*=\"fui-\"] + span": {
        "marginLeft": 8
    },
    "pager li > a span + [class*=\"fui-\"]": {
        "marginLeft": 8
    },
    "pager li > span span + [class*=\"fui-\"]": {
        "marginLeft": 8
    },
    "pagination": {
        "position": "relative"
    },
    "pagination ul": {
        "background": "#d6dbdf",
        "color": "#ffffff",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block",
        "borderRadius": 6
    },
    "pagination ul li": {
        "display": "inline-block",
        "marginRight": -3,
        "verticalAlign": "middle"
    },
    "pagination ul li:first-child": {
        "borderRadius": "6px 0 0 6px"
    },
    "pagination ul li:first-childprevious + li > a": {
        "borderLeftWidth": 5
    },
    "pagination ul li:first-childprevious + li > span": {
        "borderLeftWidth": 5
    },
    "pagination ul li:last-child": {
        "borderRadius": "0 6px 6px 0",
        "marginRight": 0
    },
    "pagination ul liprevious > a": {
        "background": "transparent",
        "border": "none",
        "borderRight": "2px solid #e4e7ea",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 9,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 12,
        "paddingRight": 17,
        "paddingBottom": 12,
        "paddingLeft": 17,
        "borderRadius": "6px 0 0 6px",
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > a": {
        "background": "transparent",
        "border": "none",
        "borderRight": "none",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 12,
        "paddingRight": 17,
        "paddingBottom": 12,
        "paddingLeft": 17,
        "borderRadius": "0 6px 6px 0",
        "borderColor": "#e4e7ea !important",
        "borderLeft": "2px solid #e4e7ea"
    },
    "pagination ul liprevious > span": {
        "background": "transparent",
        "border": "none",
        "borderRight": "2px solid #e4e7ea",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 9,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 12,
        "paddingRight": 17,
        "paddingBottom": 12,
        "paddingLeft": 17,
        "borderRadius": "6px 0 0 6px",
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > span": {
        "background": "transparent",
        "border": "none",
        "borderRight": "none",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 12,
        "paddingRight": 17,
        "paddingBottom": 12,
        "paddingLeft": 17,
        "borderRadius": "0 6px 6px 0",
        "borderColor": "#e4e7ea !important",
        "borderLeft": "2px solid #e4e7ea"
    },
    "pagination ul liprevious > a:hover": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > a:hover": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul liprevious > span:hover": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > span:hover": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul liprevious > a:focus": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > a:focus": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul liprevious > span:focus": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext > span:focus": {
        "borderColor": "#e4e7ea !important"
    },
    "pagination ul linext": {
        "marginLeft": 9
    },
    "pagination ul liactive > a": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "borderWidth": "2px !important",
        "color": "#d6dbdf",
        "marginTop": 10,
        "marginRight": 5,
        "marginBottom": 9,
        "marginLeft": 5
    },
    "pagination ul liactive > span": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "borderWidth": "2px !important",
        "color": "#d6dbdf",
        "marginTop": 10,
        "marginRight": 5,
        "marginBottom": 9,
        "marginLeft": 5
    },
    "pagination ul liactive > a:hover": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#d6dbdf"
    },
    "pagination ul liactive > span:hover": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#d6dbdf"
    },
    "pagination ul liactive > a:focus": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#d6dbdf"
    },
    "pagination ul liactive > span:focus": {
        "backgroundColor": "#ffffff",
        "borderColor": "#ffffff",
        "color": "#d6dbdf"
    },
    "pagination ul liactiveprevious": {
        "borderColor": "#e4e7ea",
        "marginRight": 6
    },
    "pagination ul liactivenext": {
        "borderColor": "#e4e7ea"
    },
    "pagination ul li > a": {
        "display": "inline-block",
        "background": "#ffffff",
        "border": "5px solid #d6dbdf",
        "color": "#ffffff",
        "fontSize": 14,
        "lineHeight": 16,
        "marginTop": 7,
        "marginRight": 2,
        "marginBottom": 6,
        "marginLeft": 2,
        "minWidth": 0,
        "minHeight": 16,
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "borderRadius": 50,
        "WebkitTransition": "background .2s ease-out, border-color 0s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color 0s ease-out, color .2s ease-out"
    },
    "pagination ul li > span": {
        "display": "inline-block",
        "background": "#ffffff",
        "border": "5px solid #d6dbdf",
        "color": "#ffffff",
        "fontSize": 14,
        "lineHeight": 16,
        "marginTop": 7,
        "marginRight": 2,
        "marginBottom": 6,
        "marginLeft": 2,
        "minWidth": 0,
        "minHeight": 16,
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "borderRadius": 50,
        "WebkitTransition": "background .2s ease-out, border-color 0s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color 0s ease-out, color .2s ease-out"
    },
    "pagination ul li > a:hover": {
        "backgroundColor": "#1abc9c",
        "borderColor": "#1abc9c",
        "color": "#ffffff",
        "WebkitTransition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out"
    },
    "pagination ul li > span:hover": {
        "backgroundColor": "#1abc9c",
        "borderColor": "#1abc9c",
        "color": "#ffffff",
        "WebkitTransition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out"
    },
    "pagination ul li > a:focus": {
        "backgroundColor": "#1abc9c",
        "borderColor": "#1abc9c",
        "color": "#ffffff",
        "WebkitTransition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out"
    },
    "pagination ul li > span:focus": {
        "backgroundColor": "#1abc9c",
        "borderColor": "#1abc9c",
        "color": "#ffffff",
        "WebkitTransition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out",
        "transition": "background .2s ease-out, border-color .2s ease-out, color .2s ease-out"
    },
    "pagination ul li > a:active": {
        "backgroundColor": "#16a085",
        "borderColor": "#16a085"
    },
    "pagination ul li > span:active": {
        "backgroundColor": "#16a085",
        "borderColor": "#16a085"
    },
    "pagination > btnprevious": {
        "marginRight": 8,
        "fontSize": 14,
        "lineHeight": 1.429,
        "paddingLeft": 23,
        "paddingRight": 23
    },
    "pagination > btnnext": {
        "marginRight": 0,
        "fontSize": 14,
        "lineHeight": 1.429,
        "paddingLeft": 23,
        "paddingRight": 23,
        "marginLeft": 8
    },
    "pagination > btnprevious [class*=\"fui-\"]": {
        "fontSize": 16,
        "marginLeft": -2,
        "marginTop": -2
    },
    "pagination > btnnext [class*=\"fui-\"]": {
        "fontSize": 16,
        "marginLeft": 4,
        "marginTop": -2,
        "marginRight": -2
    },
    "tooltip": {
        "fontSize": 14,
        "lineHeight": 1.286
    },
    "tooltipin": {
        "opacity": 1
    },
    "tooltiptop": {
        "paddingBottom": 9
    },
    "tooltiptop tooltip-arrow": {
        "borderTopColor": "#34495e",
        "borderWidth": "9px 9px 0",
        "bottom": 0,
        "marginLeft": -9
    },
    "tooltipright tooltip-arrow": {
        "borderRightColor": "#34495e",
        "borderWidth": "9px 9px 9px 0",
        "marginTop": -9,
        "left": -3
    },
    "tooltipbottom": {
        "paddingTop": 8
    },
    "tooltipbottom tooltip-arrow": {
        "borderBottomColor": "#34495e",
        "borderWidth": "0 9px 9px",
        "marginLeft": -9,
        "top": -1
    },
    "tooltipleft tooltip-arrow": {
        "borderLeftColor": "#34495e",
        "borderWidth": "9px 0 9px 9px",
        "marginTop": -9,
        "right": -3
    },
    "tooltip-inner": {
        "backgroundColor": "#34495e",
        "lineHeight": 1.286,
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "textAlign": "center",
        "width": 183,
        "borderRadius": 6
    },
    "dropdown-menu": {
        "backgroundColor": "#f3f4f5",
        "border": "none",
        "display": "block",
        "marginTop": 8,
        "opacity": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "visibility": "hidden",
        "width": "100%",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "dropdown-menutypeahead": {
        "display": "none",
        "opacity": 1,
        "visibility": "visible",
        "width": "auto",
        "marginTop": 5,
        "border": "2px solid #1abc9c",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "backgroundColor": "#ffffff",
        "borderRadius": 6
    },
    "dropdown-menutypeahead li a": {
        "paddingTop": 6,
        "paddingRight": 14,
        "paddingBottom": 6,
        "paddingLeft": 14
    },
    "dropdown-menutypeahead li:first-child a": {
        "paddingTop": 6,
        "paddingRight": 14,
        "paddingBottom": 6,
        "paddingLeft": 14,
        "borderRadius": 0
    },
    "dropdown-menutypeahead li:last-child a": {
        "paddingTop": 6,
        "paddingRight": 14,
        "paddingBottom": 6,
        "paddingLeft": 14,
        "borderRadius": 0
    },
    "open > dropdown-menu": {
        "marginTop": "18px !important",
        "opacity": 1,
        "visibility": "visible"
    },
    "dropdown-menu li:first-child dt + a": {
        "borderRadius": 0
    },
    "dropdown-menu li:first-child > a": {
        "borderRadius": "6px 6px 0 0",
        "paddingTop": 8
    },
    "dropdown-menu li:last-child > a": {
        "borderRadius": "0 0 6px 6px",
        "paddingBottom": 10
    },
    "dropdown-menu liactive > a": {
        "background": "#1abc9c",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > a": {
        "background": "#1abc9c",
        "color": "#ffffff"
    },
    "dropdown-menu liactive > ahighlighted": {
        "background": "#1abc9c",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > ahighlighted": {
        "background": "#1abc9c",
        "color": "#ffffff"
    },
    "dropdown-menu liactive > a:hover": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > a:hover": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liactive > ahighlighted:hover": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > ahighlighted:hover": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liactive > a:focus": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > a:focus": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liactive > ahighlighted:focus": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu liselected > ahighlighted:focus": {
        "background": "#16a085",
        "color": "#ffffff"
    },
    "dropdown-menu li > a": {
        "color": "rgba(52, 73, 94, 0.75)",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "textDecoration": "none",
        "WebkitTransition": "background-color 0.25s",
        "transition": "background-color 0.25s"
    },
    "dropdown-menu li > a:before": {
        "content": " ",
        "display": "table",
        "float": "right",
        "marginTop": 3
    },
    "dropdown-menu li > a:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "dropdown-menu li > a:hover": {
        "background": "#e1e4e7",
        "color": "inherit",
        "outline": "none"
    },
    "dropdown-menu li > a:active": {
        "background": "#e1e4e7",
        "color": "inherit",
        "outline": "none"
    },
    "dropdown-menu li > a:focus": {
        "background": "#e1e4e7",
        "color": "inherit",
        "outline": "none"
    },
    "dropdown-menu li > ahighlighted": {
        "background": "#c9cfd4",
        "color": "#ffffff"
    },
    "dropdown-menu li > ahighlighted:hover": {
        "background": "#bac1c8",
        "color": "#ffffff"
    },
    "dropdown-menu li > ahighlighted:focus": {
        "background": "#bac1c8",
        "color": "#ffffff"
    },
    "dropdown-menu li dt": {
        "fontWeight": "300",
        "marginBottom": 3,
        "marginTop": 12,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "dropup dropdown-menu": {
        "marginBottom": 8
    },
    "navbar-fixed-bottom dropdown dropdown-menu": {
        "marginBottom": 8
    },
    "dropup dropdown-arrow": {
        "borderBottom": "none",
        "borderTop": "8px outset #f3f4f5",
        "bottom": "100%",
        "top": "auto"
    },
    "navbar-fixed-bottom dropdown dropdown-arrow": {
        "borderBottom": "none",
        "borderTop": "8px outset #f3f4f5",
        "bottom": "100%",
        "top": "auto"
    },
    "navbar-fixed-bottom nav > li > ul:before": {
        "borderBottom": "none",
        "borderTop": "9px outset #34495e",
        "bottom": 4,
        "top": "auto"
    },
    "opendropup > dropdown-menu": {
        "marginBottom": 18
    },
    "opendropup > dropdown-arrow": {
        "marginBottom": 10
    },
    "opendropup > dropdown-arrowdropdown-arrow-inverse": {
        "borderTopColor": "#34495e"
    },
    "open > dropdown-arrow": {
        "marginTop": 9,
        "opacity": 1
    },
    "dropdown-arrow": {
        "borderStyle": "solid",
        "borderWidth": "0 9px 9px 9px",
        "borderColor": "transparent transparent #f3f4f5 transparent",
        "height": 0,
        "marginTop": 0,
        "opacity": 0,
        "position": "absolute",
        "right": 13,
        "top": "100%",
        "width": 0,
        "zIndex": 10,
        "WebkitTransform": "rotate(360deg)",
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "dropdown-inverse": {
        "backgroundColor": "#34495e",
        "color": "#cccccc",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0
    },
    "dropdown-inverse li": {
        "marginTop": 0,
        "marginRight": 4,
        "marginBottom": -2,
        "marginLeft": 4
    },
    "dropdown-inverse li:first-child > a": {
        "borderRadius": 2,
        "paddingBottom": 7,
        "paddingTop": 5
    },
    "dropdown-inverse li:last-child > a": {
        "borderRadius": 2,
        "paddingBottom": 7,
        "paddingTop": 5
    },
    "dropdown-inverse li:first-child dt + a": {
        "borderRadius": 2
    },
    "dropdown-inverse li:last-child dt + a": {
        "borderRadius": 2
    },
    "dropdown-inverse liactive > a": {
        "background": "#1abc9c",
        "color": "#ffffff",
        "position": "relative",
        "zIndex": 1
    },
    "dropdown-inverse liselected > a": {
        "background": "#1abc9c",
        "color": "#ffffff",
        "position": "relative",
        "zIndex": 1
    },
    "dropdown-inverse li dt": {
        "paddingLeft": 11,
        "paddingRight": 11
    },
    "dropdown-inverse li divider": {
        "marginLeft": 11,
        "marginRight": 11,
        "backgroundColor": "#526476",
        "borderBottomColor": "#526476"
    },
    "dropdown-inverse li > a": {
        "borderRadius": 2,
        "color": "#ffffff",
        "paddingTop": 5,
        "paddingRight": 11,
        "paddingBottom": 7,
        "paddingLeft": 11
    },
    "dropdown-inverse li > a:hover": {
        "background": "#2c3e50"
    },
    "dropdown-inverse li > a:active": {
        "background": "#2c3e50"
    },
    "dropdown-inverse li > a:focus": {
        "background": "#2c3e50"
    },
    "dropdown-inverse li > ahighlighted": {
        "background": "#526476"
    },
    "dropdown-inverse li > ahighlighted:hover": {
        "background": "#677786"
    },
    "dropdown-inverse li > ahighlighted:focus": {
        "background": "#677786"
    },
    "has-switch": {
        "borderRadius": 30,
        "display": "inline-block",
        "cursor": "pointer",
        "lineHeight": 1.72222,
        "overflow": "hidden",
        "position": "relative",
        "textAlign": "left",
        "width": 80,
        "WebkitMask": "url('../images/switch/mask.png') 0 0 no-repeat",
        "mask": "url('../images/switch/mask.png') 0 0 no-repeat",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "OUserSelect": "none",
        "userSelect": "none"
    },
    "has-switchdeactivate": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)",
        "cursor": "default !important"
    },
    "has-switchdeactivate label": {
        "cursor": "default !important"
    },
    "has-switchdeactivate span": {
        "cursor": "default !important"
    },
    "has-switch > div": {
        "width": 130,
        "position": "relative",
        "top": 0
    },
    "has-switch > divswitch-animate": {
        "WebkitTransition": "left 0.25s ease-out",
        "transition": "left 0.25s ease-out"
    },
    "has-switch > divswitch-off": {
        "left": -50
    },
    "has-switch > divswitch-off label": {
        "backgroundColor": "#7f8c9a",
        "borderColor": "#bdc3c7",
        "WebkitBoxShadow": "-1px 0 0 rgba(255, 255, 255, 0.5)",
        "boxShadow": "-1px 0 0 rgba(255, 255, 255, 0.5)"
    },
    "has-switch > divswitch-on": {
        "left": 0
    },
    "has-switch > divswitch-on label": {
        "backgroundColor": "#1abc9c"
    },
    "has-switch input[type=checkbox]": {
        "display": "none"
    },
    "has-switch span": {
        "cursor": "pointer",
        "fontSize": 15,
        "fontWeight": "700",
        "float": "left",
        "height": 29,
        "lineHeight": 19,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingBottom": 6,
        "paddingTop": 5,
        "position": "relative",
        "textAlign": "center",
        "width": "50%",
        "zIndex": 1,
        "WebkitTransition": "0.25s ease-out",
        "transition": "0.25s ease-out"
    },
    "has-switch spanswitch-left": {
        "borderRadius": "30px 0 0 30px",
        "backgroundColor": "#34495e",
        "color": "#1abc9c",
        "borderLeft": "1px solid transparent"
    },
    "has-switch spanswitch-right": {
        "borderRadius": "0 30px 30px 0",
        "backgroundColor": "#bdc3c7",
        "color": "#ffffff",
        "textIndent": 7
    },
    "has-switch spanswitch-right [class*=\"fui-\"]": {
        "textIndent": 0
    },
    "has-switch label": {
        "border": "4px solid #34495e",
        "borderRadius": "50%",
        "float": "left",
        "height": 29,
        "marginTop": 0,
        "marginRight": -15,
        "marginBottom": 0,
        "marginLeft": -15,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative",
        "verticalAlign": "middle",
        "width": 29,
        "zIndex": 100,
        "WebkitTransition": "0.25s ease-out",
        "transition": "0.25s ease-out"
    },
    "switch-square": {
        "borderRadius": 6,
        "WebkitMask": "url('../images/switch/mask.png') 0 0 no-repeat",
        "mask": "url('../images/switch/mask.png') 0 0 no-repeat"
    },
    "switch-square > divswitch-off label": {
        "borderColor": "#7f8c9a",
        "borderRadius": "6px 0 0 6px"
    },
    "switch-square spanswitch-left": {
        "borderRadius": "6px 0 0 6px"
    },
    "switch-square spanswitch-left [class*=\"fui-\"]": {
        "textIndent": -10
    },
    "switch-square spanswitch-right": {
        "borderRadius": "0 6px 6px 0"
    },
    "switch-square spanswitch-right [class*=\"fui-\"]": {
        "textIndent": 5
    },
    "switch-square label": {
        "borderRadius": "0 6px 6px 0",
        "borderColor": "#1abc9c"
    },
    "share": {
        "backgroundColor": "#eff0f2",
        "position": "relative",
        "borderRadius": 6
    },
    "share:before": {
        "content": "",
        "borderStyle": "solid",
        "borderWidth": "0 9px 9px 9px",
        "borderColor": "transparent transparent #eff0f2 transparent",
        "height": 0,
        "position": "absolute",
        "left": 23,
        "top": -9,
        "width": 0,
        "WebkitTransform": "rotate(360deg)"
    },
    "share ul": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "share li": {
        "fontSize": 15,
        "lineHeight": 1.4,
        "paddingTop": 11
    },
    "share li:before": {
        "content": " ",
        "display": "table"
    },
    "share li:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "share li:first-child": {
        "paddingTop": 0
    },
    "share toggle": {
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "share btn": {
        "borderRadius": "0 0 6px 6px"
    },
    "share-label": {
        "float": "left",
        "fontSize": 15,
        "lineHeight": 1.4,
        "paddingTop": 5,
        "width": "50%"
    },
    "pallete-item": {
        "width": 140,
        "float": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 20
    },
    "palette": {
        "fontSize": 14,
        "lineHeight": 1.214,
        "color": "#ffffff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textTransform": "uppercase"
    },
    "palette dt": {
        "lineHeight": 1.429,
        "display": "block",
        "fontWeight": "bold",
        "opacity": 0.8,
        "filter": "alpha(opacity=80)"
    },
    "palette dd": {
        "lineHeight": 1.429,
        "fontWeight": "300",
        "marginLeft": 0,
        "opacity": 0.8,
        "filter": "alpha(opacity=80)",
        "WebkitFontSmoothing": "subpixel-antialiased"
    },
    "palette-turquoise": {
        "backgroundColor": "#1abc9c"
    },
    "palette-green-sea": {
        "backgroundColor": "#16a085"
    },
    "palette-emerald": {
        "backgroundColor": "#2ecc71"
    },
    "palette-nephritis": {
        "backgroundColor": "#27ae60"
    },
    "palette-peter-river": {
        "backgroundColor": "#3498db"
    },
    "palette-belize-hole": {
        "backgroundColor": "#2980b9"
    },
    "palette-amethyst": {
        "backgroundColor": "#9b59b6"
    },
    "palette-wisteria": {
        "backgroundColor": "#8e44ad"
    },
    "palette-wet-asphalt": {
        "backgroundColor": "#34495e"
    },
    "palette-midnight-blue": {
        "backgroundColor": "#2c3e50"
    },
    "palette-sun-flower": {
        "backgroundColor": "#f1c40f"
    },
    "palette-orange": {
        "backgroundColor": "#f39c12"
    },
    "palette-carrot": {
        "backgroundColor": "#e67e22"
    },
    "palette-pumpkin": {
        "backgroundColor": "#d35400"
    },
    "palette-alizarin": {
        "backgroundColor": "#e74c3c"
    },
    "palette-pomegranate": {
        "backgroundColor": "#c0392b"
    },
    "palette-clouds": {
        "backgroundColor": "#ecf0f1",
        "color": "#bdc3c7"
    },
    "palette-silver": {
        "backgroundColor": "#bdc3c7"
    },
    "palette-concrete": {
        "backgroundColor": "#95a5a6"
    },
    "palette-asbestos": {
        "backgroundColor": "#7f8c8d"
    },
    "palette-paragraph": {
        "color": "#7f8c8d",
        "fontSize": 12,
        "lineHeight": 17
    },
    "palette-paragraph span": {
        "color": "#bdc3c7"
    },
    "palette-headline": {
        "color": "#7f8c8d",
        "fontSize": 13,
        "fontWeight": "700",
        "marginTop": -3
    },
    "tile": {
        "backgroundColor": "#eff0f2",
        "borderRadius": 6,
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14,
        "position": "relative",
        "textAlign": "center"
    },
    "tiletile-hot:before": {
        "background": "url(../images/tile/ribbon.png) 0 0 no-repeat",
        "backgroundSize": "82px 82px",
        "content": "''",
        "height": 82,
        "position": "absolute",
        "right": -4,
        "top": -4,
        "width": 82
    },
    "tile p": {
        "fontSize": 15,
        "marginBottom": 33
    },
    "tile-image": {
        "height": 100,
        "marginTop": 31,
        "marginRight": 0,
        "marginBottom": 27,
        "marginLeft": 0,
        "verticalAlign": "bottom"
    },
    "tile-imagebig-illustration": {
        "height": 111,
        "marginTop": 20,
        "width": 112
    },
    "tile-title": {
        "fontSize": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "todo": {
        "color": "#798795",
        "marginBottom": 20,
        "borderRadius": 6
    },
    "todo ul": {
        "backgroundColor": "#2c3e50",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none",
        "borderRadius": "0 0 6px 6px"
    },
    "todo li": {
        "background": "#34495e url(../images/todo/todo.png) 92% center no-repeat",
        "backgroundSize": "20px 20px",
        "cursor": "pointer",
        "fontSize": 14,
        "lineHeight": 1.214,
        "marginTop": 2,
        "paddingTop": 18,
        "paddingRight": 42,
        "paddingBottom": 21,
        "paddingLeft": 25,
        "position": "relative",
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "todo li:first-child": {
        "marginTop": 0
    },
    "todo li:last-child": {
        "borderRadius": "0 0 6px 6px",
        "paddingBottom": 21
    },
    "todo litodo-done": {
        "background": "transparent url(../images/todo/done.png) 92% center no-repeat",
        "backgroundSize": "20px 20px",
        "color": "#1abc9c"
    },
    "todo litodo-done todo-name": {
        "color": "#1abc9c"
    },
    "todo-search": {
        "position": "relative",
        "background": "#1abc9c",
        "backgroundSize": "16px 16px",
        "borderRadius": "6px 6px 0 0",
        "color": "#34495e",
        "paddingTop": 19,
        "paddingRight": 25,
        "paddingBottom": 20,
        "paddingLeft": 25
    },
    "todo-search:before": {
        "position": "absolute",
        "fontFamily": "'Flat-UI-Icons'",
        "content": "\\e01c",
        "fontSize": 16,
        "lineHeight": 17,
        "display": "inline-block",
        "top": "50%",
        "left": "92%",
        "marginTop": -0.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -1
    },
    "inputtodo-search-field": {
        "background": "none",
        "border": "none",
        "color": "#34495e",
        "fontSize": 19,
        "fontWeight": "700",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 23,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "textIndent": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "inputtodo-search-field:-moz-placeholder": {
        "color": "#34495e"
    },
    "inputtodo-search-field::-moz-placeholder": {
        "color": "#34495e"
    },
    "inputtodo-search-field:-ms-input-placeholder": {
        "color": "#34495e"
    },
    "inputtodo-search-field::-webkit-input-placeholder": {
        "color": "#34495e"
    },
    "inputtodo-search-fieldplaceholder": {
        "color": "#34495e"
    },
    "todo-icon": {
        "float": "left",
        "fontSize": 24,
        "paddingTop": 11,
        "paddingRight": 22,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "todo-content": {
        "paddingTop": 1,
        "overflow": "hidden"
    },
    "todo-name": {
        "color": "#ffffff",
        "fontSize": 17,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "video-js": {
        "backgroundColor": "transparent",
        "marginTop": -95,
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 10,
        "verticalAlign": "middle",
        "borderRadius": "6px 6px 0 0",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "video-js vjs-tech": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "borderRadius": "6px 6px 0 0"
    },
    "video-js:-moz-full-screen": {
        "position": "absolute"
    },
    "bodyvjs-full-window": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "overflowY": "auto"
    },
    "video-jsvjs-fullscreen": {
        "position": "fixed",
        "overflow": "hidden",
        "zIndex": 1000,
        "left": 0,
        "top": 0,
        "bottom": 0,
        "right": 0,
        "width": "100% !important",
        "height": "100% !important",
        "Position": "absolute"
    },
    "video-js:-webkit-full-screen": {
        "width": "100% !important",
        "height": "100% !important"
    },
    "vjs-poster": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "position": "relative",
        "width": "100%",
        "maxHeight": "100%",
        "borderRadius": "6px 6px 0 0"
    },
    "video-js vjs-text-track-display": {
        "textAlign": "center",
        "position": "absolute",
        "bottom": 4,
        "left": 1,
        "right": 1,
        "fontFamily": "\"Lato\", Helvetica, Arial, sans-serif"
    },
    "video-js vjs-text-track": {
        "display": "none",
        "color": "#ffffff",
        "fontSize": 1.4,
        "textAlign": "center",
        "marginBottom": 0.1,
        "background": "rgba(0, 0, 0, 0.5)"
    },
    "video-js vjs-subtitles": {
        "color": "#fff"
    },
    "video-js vjs-captions": {
        "color": "#fc6"
    },
    "vjs-tt-cue": {
        "display": "block"
    },
    "vjs-fade-in": {
        "visibility": "visible !important",
        "opacity": "1 !important",
        "WebkitTransition": "visibility 0s linear 0s, opacity .3s linear",
        "transition": "visibility 0s linear 0s, opacity .3s linear"
    },
    "vjs-fade-out": {
        "visibility": "hidden !important",
        "opacity": "0 !important",
        "WebkitTransition": "visibility 0s linear 1.5s, opacity 1.5s linear",
        "transition": "visibility 0s linear 1.5s, opacity 1.5s linear"
    },
    "vjs-control-bar": {
        "position": "absolute",
        "bottom": -47,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 47,
        "color": "#ffffff",
        "background": "#273747",
        "borderRadius": "0 0 6px 6px"
    },
    "vjs-control-barvjs-fade-out": {
        "visibility": "visible !important",
        "opacity": "1 !important"
    },
    "vjs-control": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "position": "relative",
        "float": "left",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 18,
        "width": 18
    },
    "vjs-control:focus": {
        "outline": 0
    },
    "vjs-control div": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat"
    },
    "vjs-control-text": {
        "border": 0,
        "clip": "rect(0 0 0 0)",
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "width": 1
    },
    "vjs-play-control": {
        "cursor": "pointer !important",
        "height": 47,
        "left": 0,
        "position": "absolute",
        "top": 0,
        "width": 58
    },
    "vjs-play-control div": {
        "position": "relative",
        "height": 47
    },
    "vjs-play-control div:before": {
        "position": "absolute",
        "fontFamily": "Flat-UI-Icons",
        "color": "#1abc9c",
        "fontSize": 16,
        "top": "50%",
        "left": "50%",
        "marginTop": -0.55,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -0.5,
        "WebkitTransition": "color .25s, opacity .25s",
        "transition": "color .25s, opacity .25s",
        "content": "\\e03c"
    },
    "vjs-play-control div:after": {
        "position": "absolute",
        "fontFamily": "Flat-UI-Icons",
        "color": "#1abc9c",
        "fontSize": 16,
        "top": "50%",
        "left": "50%",
        "marginTop": -0.55,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -0.5,
        "WebkitTransition": "color .25s, opacity .25s",
        "transition": "color .25s, opacity .25s",
        "content": "\\e03b"
    },
    "vjs-paused vjs-play-control:hover div:before": {
        "color": "#16a085"
    },
    "vjs-paused vjs-play-control div:after": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "vjs-paused vjs-play-control div:before": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "vjs-playing vjs-play-control:hover div:after": {
        "color": "#16a085"
    },
    "vjs-playing vjs-play-control div:after": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "vjs-playing vjs-play-control div:before": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "vjs-rewind-control": {
        "width": 5,
        "cursor": "pointer !important"
    },
    "vjs-rewind-control div": {
        "width": 19,
        "height": 16,
        "background": "none transparent",
        "marginTop": 0.5,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "vjs-mute-control": {
        "background": "url(../images/video/volume-full.png) center -48px no-repeat",
        "backgroundSize": "16px 64px",
        "cursor": "pointer !important",
        "position": "absolute",
        "right": 51,
        "top": 14
    },
    "vjs-mute-control:hover div": {
        "opacity": 0
    },
    "vjs-mute-control:focus div": {
        "opacity": 0
    },
    "vjs-mute-controlvjs-vol-0": {
        "backgroundImage": "url(../images/video/volume-off.png)"
    },
    "vjs-mute-controlvjs-vol-0 div": {
        "backgroundImage": "url(../images/video/volume-off.png)"
    },
    "vjs-mute-control div": {
        "background": "#273747 url(../images/video/volume-full.png) no-repeat center 2px",
        "backgroundSize": "16px 64px",
        "height": 18,
        "WebkitTransition": "opacity 0.25s",
        "transition": "opacity 0.25s"
    },
    "vjs-volume-control": {
        "display": "none"
    },
    "vjs-volume-level": {
        "display": "none"
    },
    "vjs-volume-handle": {
        "display": "none"
    },
    "vjs-volume-bar": {
        "display": "none"
    },
    "vjs-progress-control": {
        "position": "absolute",
        "left": 60,
        "right": 180,
        "height": 12,
        "width": "auto",
        "top": 18,
        "background": "#425669",
        "borderRadius": 32
    },
    "vjs-progress-holder": {
        "position": "relative",
        "cursor": "pointer !important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 12
    },
    "vjs-play-progress": {
        "position": "absolute",
        "display": "block",
        "height": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "left": -1,
        "top": 0,
        "borderRadius": 32,
        "background": "#1abc9c"
    },
    "vjs-load-progress": {
        "position": "absolute",
        "display": "block",
        "height": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "left": 0,
        "top": 0,
        "borderRadius": "32px 0 0 32px",
        "background": "#d6dbdf"
    },
    "vjs-load-progress[style*='100%']": {
        "borderRadius": 32
    },
    "vjs-load-progress[style*='99%']": {
        "borderRadius": 32
    },
    "vjs-seek-handle": {
        "backgroundColor": "#16a085",
        "position": "absolute",
        "width": 18,
        "height": 18,
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 1,
        "left": 0,
        "top": 0,
        "borderRadius": "50%",
        "WebkitTransition": "background-color 0.25s",
        "transition": "background-color 0.25s"
    },
    "vjs-seek-handle[style*='95']": {
        "marginLeft": 3
    },
    "vjs-seek-handle[style='left: 0%;']": {
        "marginLeft": -2
    },
    "vjs-seek-handle:hover": {
        "backgroundColor": "#148d75"
    },
    "vjs-seek-handle:focus": {
        "backgroundColor": "#148d75"
    },
    "vjs-seek-handle:active": {
        "backgroundColor": "#117a65"
    },
    "vjs-time-controls": {
        "position": "absolute",
        "height": 20,
        "width": 50,
        "top": 16,
        "font": "300 13px \"Lato\", Helvetica, Arial, sans-serif"
    },
    "vjs-current-time": {
        "right": 128,
        "textAlign": "right"
    },
    "vjs-duration": {
        "color": "#5d6d7e",
        "right": 69,
        "textAlign": "left"
    },
    "vjs-remaining-time": {
        "display": "none"
    },
    "vjs-time-divider": {
        "color": "#5d6d7e",
        "fontSize": 14,
        "position": "absolute",
        "right": 121,
        "top": 15
    },
    "vjs-secondary-controls": {
        "float": "right"
    },
    "vjs-fullscreen-control": {
        "backgroundImage": "url(../images/video/fullscreen.png)",
        "backgroundPosition": "center -47px",
        "backgroundSize": "15px 64px",
        "cursor": "pointer !important",
        "position": "absolute",
        "right": 17,
        "top": 13
    },
    "vjs-fullscreen-control:hover div": {
        "opacity": 0
    },
    "vjs-fullscreen-control:focus div": {
        "opacity": 0
    },
    "vjs-fullscreen-control div": {
        "height": 18,
        "background": "url(../images/video/fullscreen.png) no-repeat center 2px",
        "backgroundSize": "15px 64px",
        "WebkitTransition": "opacity 0.25s",
        "transition": "opacity 0.25s"
    },
    "vjs-menu-button": {
        "display": "none !important"
    },
    "vjs-loading-spinner": {
        "background": "#ebedee",
        "display": "none",
        "height": 16,
        "left": "50%",
        "marginTop": -8,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -8,
        "position": "absolute",
        "top": "50%",
        "width": 16,
        "borderRadius": 10,
        "WebkitAnimation": "sharp 2s ease infinite",
        "MozAnimation": "sharp 2s ease infinite",
        "OAnimation": "sharp 2s ease infinite",
        "animation": "sharp 2s ease infinite"
    },
    "login": {
        "background": "url(../images/login/imac.png) 0 0 no-repeat",
        "backgroundSize": "940px 778px",
        "color": "#ffffff",
        "marginBottom": 77,
        "paddingTop": 38,
        "paddingRight": 38,
        "paddingBottom": 267,
        "paddingLeft": 38,
        "position": "relative"
    },
    "login-screen": {
        "backgroundColor": "#1abc9c",
        "minHeight": 473,
        "paddingTop": 123,
        "paddingRight": 199,
        "paddingBottom": 33,
        "paddingLeft": 306
    },
    "login-icon": {
        "left": 200,
        "position": "absolute",
        "top": 160,
        "width": 96
    },
    "login-icon > img": {
        "display": "block",
        "marginBottom": 6,
        "width": "100%"
    },
    "login-icon > h4": {
        "fontSize": 17,
        "fontWeight": "300",
        "lineHeight": 34,
        "opacity": 0.95,
        "filter": "alpha(opacity=95)"
    },
    "login-icon > h4 small": {
        "color": "inherit",
        "display": "block",
        "fontSize": "inherit",
        "fontWeight": "700"
    },
    "login-form": {
        "backgroundColor": "#edeff1",
        "paddingTop": 24,
        "paddingRight": 23,
        "paddingBottom": 20,
        "paddingLeft": 23,
        "position": "relative",
        "borderRadius": 6
    },
    "login-form:before": {
        "content": "''",
        "borderStyle": "solid",
        "borderWidth": "12px 12px 12px 0",
        "borderColor": "transparent #edeff1 transparent transparent",
        "height": 0,
        "position": "absolute",
        "left": -12,
        "top": 35,
        "width": 0,
        "WebkitTransform": "rotate(360deg)"
    },
    "login-form control-group": {
        "marginBottom": 6,
        "position": "relative"
    },
    "login-form login-field": {
        "borderColor": "transparent",
        "fontSize": 17,
        "textIndent": 3
    },
    "login-form login-field:focus": {
        "borderColor": "#1abc9c"
    },
    "login-form login-field:focus + login-field-icon": {
        "color": "#1abc9c"
    },
    "login-form login-field-icon": {
        "color": "#bfc9ca",
        "fontSize": 16,
        "position": "absolute",
        "right": 13,
        "top": 9,
        "WebkitTransition": "0.25s",
        "transition": "0.25s"
    },
    "login-link": {
        "color": "#bfc9ca",
        "display": "block",
        "fontSize": 13,
        "marginTop": 15,
        "textAlign": "center"
    },
    "footer": {
        "backgroundColor": "#edeff1",
        "color": "#bac1c8",
        "fontSize": 15,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer a": {
        "color": "#9aa4af",
        "fontWeight": "700"
    },
    "footer p": {
        "fontSize": 15,
        "lineHeight": 20,
        "marginBottom": 10
    },
    "footer-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 22,
        "marginLeft": 0,
        "paddingTop": 21,
        "fontSize": 24,
        "lineHeight": 40
    },
    "footer-brand": {
        "display": "block",
        "marginBottom": 26,
        "width": 220
    },
    "footer-brand img": {
        "width": 216
    },
    "footer-banner": {
        "backgroundColor": "#1abc9c",
        "color": "#d1f2eb",
        "marginLeft": 42,
        "minHeight": 316,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "footer-banner footer-title": {
        "color": "#ffffff"
    },
    "footer-banner a": {
        "color": "#b7f5e9",
        "textDecoration": "underline"
    },
    "footer-banner a:hover": {
        "textDecoration": "none"
    },
    "footer-banner ul": {
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 26,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer-banner ul li": {
        "borderTop": "1px solid #1bc5a3",
        "lineHeight": 19,
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0
    },
    "footer-banner ul li:first-child": {
        "borderTop": "none",
        "paddingTop": 1
    },
    "last-col": {
        "overflow": "hidden"
    },
    "ptn": {
        "paddingTop": 0
    },
    "pvn": {
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "pan": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ptx": {
        "paddingTop": 3
    },
    "pvx": {
        "paddingTop": 3,
        "paddingBottom": 3
    },
    "pax": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "pts": {
        "paddingTop": 5
    },
    "pvs": {
        "paddingTop": 5,
        "paddingBottom": 5
    },
    "pas": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "ptm": {
        "paddingTop": 10
    },
    "pvm": {
        "paddingTop": 10,
        "paddingBottom": 10
    },
    "pam": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "ptl": {
        "paddingTop": 20
    },
    "pvl": {
        "paddingTop": 20,
        "paddingBottom": 20
    },
    "pal": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "prn": {
        "paddingRight": 0
    },
    "phn": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "prx": {
        "paddingRight": 3
    },
    "phx": {
        "paddingRight": 3,
        "paddingLeft": 3
    },
    "prs": {
        "paddingRight": 5
    },
    "phs": {
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "prm": {
        "paddingRight": 10
    },
    "phm": {
        "paddingRight": 10,
        "paddingLeft": 10
    },
    "prl": {
        "paddingRight": 20
    },
    "phl": {
        "paddingRight": 20,
        "paddingLeft": 20
    },
    "pbn": {
        "paddingBottom": 0
    },
    "pbx": {
        "paddingBottom": 3
    },
    "pbs": {
        "paddingBottom": 5
    },
    "pbm": {
        "paddingBottom": 10
    },
    "pbl": {
        "paddingBottom": 20
    },
    "pln": {
        "paddingLeft": 0
    },
    "plx": {
        "paddingLeft": 3
    },
    "pls": {
        "paddingLeft": 5
    },
    "plm": {
        "paddingLeft": 10
    },
    "pll": {
        "paddingLeft": 20
    },
    "mtn": {
        "marginTop": 0
    },
    "mvn": {
        "marginTop": 0,
        "marginBottom": 0
    },
    "man": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mtx": {
        "marginTop": 3
    },
    "mvx": {
        "marginTop": 3,
        "marginBottom": 3
    },
    "max": {
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3
    },
    "mts": {
        "marginTop": 5
    },
    "mvs": {
        "marginTop": 5,
        "marginBottom": 5
    },
    "mas": {
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "mtm": {
        "marginTop": 10
    },
    "mvm": {
        "marginTop": 10,
        "marginBottom": 10
    },
    "mam": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "mtl": {
        "marginTop": 20
    },
    "mvl": {
        "marginTop": 20,
        "marginBottom": 20
    },
    "mal": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20
    },
    "mrn": {
        "marginRight": 0
    },
    "mhn": {
        "marginRight": 0,
        "marginLeft": 0
    },
    "mrx": {
        "marginRight": 3
    },
    "mhx": {
        "marginRight": 3,
        "marginLeft": 3
    },
    "mrs": {
        "marginRight": 5
    },
    "mhs": {
        "marginRight": 5,
        "marginLeft": 5
    },
    "mrm": {
        "marginRight": 10
    },
    "mhm": {
        "marginRight": 10,
        "marginLeft": 10
    },
    "mrl": {
        "marginRight": 20
    },
    "mhl": {
        "marginRight": 20,
        "marginLeft": 20
    },
    "mbn": {
        "marginBottom": 0
    },
    "mbx": {
        "marginBottom": 3
    },
    "mbs": {
        "marginBottom": 5
    },
    "mbm": {
        "marginBottom": 10
    },
    "mbl": {
        "marginBottom": 20
    },
    "mln": {
        "marginLeft": 0
    },
    "mlx": {
        "marginLeft": 3
    },
    "mls": {
        "marginLeft": 5
    },
    "mlm": {
        "marginLeft": 10
    },
    "mll": {
        "marginLeft": 20
    }
});