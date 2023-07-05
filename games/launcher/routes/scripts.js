var _____WB$wombat$assign$function_____ = function(name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }
  function get_color_string(progress, total) {
    if (progress === 0 || progress === " " || progress === "") {
      return "";
    }
    percent = (progress / total) * 100;
    var red = 0;
    var green = 0;
    red = percent <= 50 ? 255 : Math.ceil(256 - (percent - 50) * 5.12);
    green = percent >= 50 ? 255 : Math.ceil((percent) * 5.12);
    red_hex = pad(red.toString(16), 2);
    green_hex = pad(green.toString(16), 2);
    blue_hex = "00";
    color = red_hex + green_hex + blue_hex;
    return color;
  }
  function setShowAdditionAndSubtraction() {
    window.showAdditionAndSubtraction = true;
  }

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/) {
      var len = this.length >>> 0;
      var from = Number(arguments[1]) || 0;
      from = (from < 0) ? Math.ceil(from) : Math.floor(from);
      if (from < 0) from += len;

      for (; from < len; from++) {
        if (from in this && this[from] === elt) return from;
      }
      return -1;
    };
  }

}
/*
     FILE ARCHIVED ON 19:39:47 Dec 11, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:17:59 Jul 05, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 148.646
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.074
  cdx.remote: 0.067
  esindex: 0.01
  LoadShardBlock: 122.952 (3)
  PetaboxLoader3.datanode: 125.214 (4)
  load_resource: 105.698
  PetaboxLoader3.resolve: 87.967
*/
