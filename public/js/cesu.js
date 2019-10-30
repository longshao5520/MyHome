var arrayHTML = ["big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "datalist", "dd", "del", "details", "dir", "div", "dfn", "dialog", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1 to h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video"];

var arrayCSS = ["background", "background-attachment", "background-color", "background-image", "background-position", "background-repeat", "border", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-color", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-style", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-width", "outline", "outline-color", "outline-style", "outline-width", "color", "direction", "letter-spacing", "line-height", "text-align", "text-decoration", "text-indent", "text-shadow", "text-transform", "unicode-bidi", "white-space", "word-spacing", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "list-style", "list-style-image", "list-style-position", "list-style-type", "marker-offset", "content", "counter-increment", "counter-reset", "quotes", "height", "max-height", "max-width", "min-height", "min-width", "width", "bottom", "clear", "clip", "cursor", "display", "float", "left", "overflow", "position", "right", "top", "vertical-align", "visibility", "z-index", "border-collapse", "border-spacing", "caption-side", "empty-cells", "table-layout", ":active", ":hover", ":link", ":visited"];

var arraySQL = ["action", "add", "all", "alter", "analyze", "and", "as", "asc", "asensitive", "before", "between", "bigint", "binary", "bit", "blob", "both", "by", "call", "cascade", "case", "change", "char", "character", "check", "collate", "column", "condition", "connection", "constraint", "continue", "convert", "create", "cross", "current_date", "current_time", "current_timestamp", "current_user", "cursor", "database", "databases", "date", "day_hour", "day_microsecond", "day_minute", "day_second", "dec", "decimal", "declare", "default", "delayed", "delete", "desc", "describe", "deterministic", "distinct", "distinctrow", "div", "double", "drop", "dual", "each", "else", "elseif", "enclosed", "enum", "escaped", "exists", "exit", "explain", "false", "fetch", "float", "float4", "float8", "for", "force", "foreign", "from", "fulltext", "goto", "grant", "group", "having", "high_priority", "hour_microsecond", "hour_minute", "hour_second", "if", "ignore", "in", "index", "infile", "inner", "inout", "insensitive", "insert", "int", "int1", "int2", "int3", "int4", "int8", "integer", "interval", "into", "is", "iterate", "join", "key", "keys", "kill", "label", "leading", "leave", "left", "like", "limit", "linear", "lines", "load", "localtime", "localtimestamp", "lock", "long", "longblob", "longtext", "loop", "low_priority", "match", "mediumblob", "mediumint", "mediumtext", "middleint", "minute_microsecond", "minute_second", "mod", "modifies", "natural	not", "no", "no_write_to_binlog", "null", "numeric", "on", "optimize", "option", "optionally", "or", "order", "out", "outer", "outfile", "precision", "primary", "procedure", "purge", "raid0", "range", "read", "reads", "real", "references", "regexp", "release", "rename", "repeat", "replace", "require", "restrict", "return", "revoke", "right", "rlike", "schema", "schemas", "second_microsecond", "select", "sensitive", "separator", "set", "show", "smallint", "spatial", "specific", "sql", "sqlexception", "sqlstate", "sqlwarning", "sql_big_result", "sql_calc_found_rows", "sql_small_result", "ssl", "starting", "straight_join", "table", "terminated", "text", "then", "time", "timestamp", "tinyblob", "tinyint", "tinytext", "to", "trailing", "trigger", "true", "undo", "union", "unique", "unlock", "unsigned", "update", "usage", "use", "using", "utc_date", "utc_time", "utc_timestamp", "values", "varbinary", "varchar", "varcharacter", "varying", "when", "where", "while", "with", "write", "x509", "xor", "year_month", "zerofill", "action", "add", "all", "alter", "analyze", "and", "as", "asc", "asensitive", "before", "between", "bigint", "binary", "bit", "blob", "both", "by", "call", "cascade", "case", "change", "char", "character", "check", "collate", "column", "condition", "connection", "constraint", "continue", "convert", "create", "cross", "current_date", "current_time", "current_timestamp", "current_user", "cursor", "database", "databases", "date", "day_hour", "day_microsecond", "day_minute", "day_second", "dec", "decimal", "declare", "default", "delayed", "delete", "desc", "describe", "deterministic", "distinct", "distinctrow", "div", "double", "drop", "dual", "each", "else", "elseif", "enclosed", "enum", "escaped", "exists", "exit", "explain", "false", "fetch", "float", "float4", "float8", "for", "force", "foreign", "from", "fulltext", "goto", "grant", "group", "having", "high_priority", "hour_microsecond", "hour_minute", "hour_second", "if", "ignore", "in", "index", "infile", "inner", "inout", "insensitive", "insert", "int", "int1", "int2", "int3", "int4", "int8", "integer", "interval", "into", "is", "iterate", "join", "key", "keys", "kill", "label", "leading", "leave", "left", "like", "limit", "linear", "lines", "load", "localtime", "localtimestamp", "lock", "long", "longblob", "longtext", "loop", "low_priority", "match", "mediumblob", "mediumint", "mediumtext", "middleint", "minute_microsecond", "minute_second", "mod", "modifies", "natural	not", "no", "no_write_to_binlog", "null", "numeric", "on", "optimize", "option", "optionally", "or", "order", "out", "outer", "outfile", "precision", "primary", "procedure", "purge", "raid0", "range", "read", "reads", "real", "references", "regexp", "release", "rename", "repeat", "replace", "require", "restrict", "return", "revoke", "right", "rlike", "schema", "schemas", "second_microsecond", "select", "sensitive", "separator", "set", "show", "smallint", "spatial", "specific", "sql", "sqlexception", "sqlstate", "sqlwarning", "sql_big_result", "sql_calc_found_rows", "sql_small_result", "ssl", "starting", "straight_join", "table", "terminated", "text", "then", "time", "timestamp", "tinyblob", "tinyint", "tinytext", "to", "trailing", "trigger", "true", "undo", "union", "unique", "unlock", "unsigned", "update", "usage", "use", "using", "utc_date", "utc_time", "utc_timestamp", "values", "varbinary", "varchar", "varcharacter", "varying", "when", "where", "while", "with", "write", "x509", "xor", "year_month", "zerofill"];
var arrayJS = ["push", "document", "pop", "console", "shift", "string", "Concat", "undefined", "typeof", "join", "slice", "length", "Array", "number", "boolean", "alert", "parseInt", "continue", "is NaN", "sort", "break", "reverse", "object", "parseFloat", "index", "floor", "variable", "ceil", "round", "abs", "eval", "max", "return", "min", "addEventListener", "to.fixed", "attachEvant", "random", "eletment", "onclick", "eventName", "ondblclick", "function", "onselect", "removeEventListener", "onmouseover", "detachEvent", "onmouseout", "open", "onfocus", "showModalDialog", "close", "onblur", "onkeydown", "Date", "onkeyup", "onkeypress", "getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinites", "getSeconds", "getMilliseconds", "getTime", "Date.now", "tolocaleDatestring", "setTimeout", "tolocaleTimestring", "clearTimeout", "tolocalestring", "setInterval", "clearInterval", "window.status", "window.screen", "screen.width", "screen.height", "screen.availwidth", "screen.avaiheight", "history", "location", "onchange", "onkeydown", "onkeyup", "onkeypress", "navigator", "appCodeName", "appName", "appVersion", "platform", "userAgent", "user-agent", "Exception", "onload", "getElementById", "getElementsByName", "gatElementsByTagName", "getElementByClassName"];
var resultArray = arrayHTML; //最终保存数据的数组


var startTime = 0,
  stopTime = 0;
var status = "STOP";
var userTotal = 0;

function $(selector) {
  return document.getElementById(selector);
}

/**
 *  生成一个随机数组
 * */
function getRandom(total) {
  var wordsArray = [];
  for (var i = 0; i < total; i++) {
    wordsArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return wordsArray;
}

/**
 * 创建结束按钮函数
 * */
function createBtnStop() {
  var btnStop = document.createElement("button");
  btnStop.setAttribute("id", "btnStop");
  btnStop.className = "btnStop";
  btnStop.innerHTML = "结束测试";
  btnStop.onclick = stopFunction;
  $("content").appendChild(btnStop);
}

function initial() {
  if (status == "START") {
    alert("测试已经开始了...");
    return;
  }
  var sum = 0;
  var num = $("txtNum").value;
  var line = $("txtLine").value;
  var total = num * line;
  var wordsArray = getRandom(total);
  $("content").innerHTML = "";
  for (var i = 1; i <= line; i++) {
    if (sum >= wordsArray.length) {
      break;
    }
    var start = (i - 1) * num;
    var p = document.createElement("p");
    var str = "";
    for (var j = start; j < num * i; j++) {
      sum += 1;
      if (sum > wordsArray.length) {
        break;
      }
      str += wordsArray[j];
      if (j < num * i - 1) {
        str += " ";
      }
    }

    p.innerHTML = str;
    $("content").appendChild(p);
    var input = document.createElement("input");
    $("content").appendChild(input);
  }
  //记录开始时间
  status = "START";
  startTime = getTimeNow();

  //创建结束按钮并添加到打字区域最后
  createBtnStop();

  $("time").innerHTML = "测速中...";
  $("avgSpeed").innerHTML = "测速中...";
  $("correct").innerHTML = "测速中...";

  $("content").firstElementChild.nextSibling.focus();

}

/*结束打字*/
function stopFunction() {
  if (status == "STOP") {
    alert("尚未开始！无法结束!");
    return;
  } else {
    stopTime = getTimeNow();
    var duration = stopTime - startTime;
    var minute = parseInt(duration / 1000 / 60);
    var second = parseInt(duration / 1000 % 60);
    status = "STOP";
    //计算正确率
    var rate = calCorrect();
    var speed = calSpeed(duration);
    var info = "共耗时：" + minute + "分" + second + "秒\n正确率为：" + rate + "%\n击键速度:" + speed + "次/分钟";

    $("time").innerHTML = minute + "分" + second + "秒";
    $("correct").innerHTML = rate + "%";
    $("avgSpeed").innerHTML = speed + "次/分钟";
    //        alert(info);
  }
}

/**
 * 计算速度
 * */
function calSpeed(duration) {
  //获取用户输入的总字符数
  var inputs = $("content").getElementsByTagName("input");
  var userTotals = 0;
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.value != "") {
      userTotals += input.value.length;
    }
  }

  var speed = userTotals / (duration / 1000 / 60);
  return parseInt(speed);
}

function bindEnter() {
  //      var inputs = $("content").getElementsByTagName("input");
  //      for(var i in inputs){
  //        var input = inputs[i];
  //        input.onkeypress = function(e){
  //          if(e.keyCode == 13){
  //
  //          }
  //        }
  //      }
  document.body.onkeydown = function(e) {
    if (e.keyCode == 13) {
      e.keyCode = 9;
    }
  }
}

/**
 * 获取当前时间
 * */
function getTimeNow() {
  var date = new Date();
  var time = date.getTime();
  return time;
}

/**
 * 计算正确率
 * */
function calCorrect() {
  var total = 0;
  var correct = 0;
  var pArray = $("content").getElementsByTagName("p");
  var inputArray = $("content").getElementsByTagName("input");

  for (var i = 0; i < pArray.length; i++) {
    var p = pArray[i];
    var input = inputArray[i];
    var pText = p.innerHTML;
    var inputText = input.value;

    for (var j = 0; j < pText.length; j++) {
      total++;
      if (pText[j] == inputText[j]) {
        correct++;
      }
    }
  }
  var rate = ((correct / total) * 100).toFixed(2);
  return rate;
}

function setFocus() {
  $("btnStart").focus();
}

/**
 *
 * */
function changeSelect() {
  var val = $("selCourse").value;
  switch (val) {
    case "0":
      resultArray = arrayHTML;
      break;
    case "1":
      resultArray = arrayCSS;
      break;
    case "2":
      resultArray = arraySQL;
      break;
    case "3":
      resultArray = arrayJS;
      break;
  }
}

window.onload = function() {
  $("btnStart").onclick = initial;
  //$("btnStop").onclick = stopFunction;
  setFocus();
  $("selCourse").onchange = changeSelect;
}