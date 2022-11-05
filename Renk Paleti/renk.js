$.fn.colorPalette = function (options) {
    this.addClass("color-palette");
    this.colors = {};
    this.bgColor = options.bgColor || "#e8e8e8";
    this.css({
      "background-color": this.bgColor
    });
    
    var greys = ["#000000", "#222222", "#333333", "#444444", "#666666", "#888888", "#aaaaaa", "#cccccc", "#eeeeee", "#ffffff"];
    
    for (var i = 0; i < greys.length; i++) {
      var grey = greys[i];
      var colorSwatch = $("<div class='color-swatch' data-color='"+grey+"'></div>");
      colorSwatch.css({"background-color": grey});
      
      this.colors[grey] = colorSwatch;
      this.append(colorSwatch);
    }
    this.append("<div class='clear'/>");
    this.append("<div class='break'/>");
    
    var primes = ["#990001", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"];
    
    for (var i = 0; i < primes.length; i++) {
      var prime = primes[i];
      var colorSwatch = $("<div class='color-swatch' data-color='"+prime+"'></div>");
      colorSwatch.css({"background-color": prime});
      
      this.colors[prime] = colorSwatch;
      this.append(colorSwatch);
    }
    this.append("<div class='clear'/>");
    this.append("<div class='break'/>");
    
    var otherColors = ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#741B47", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"];
    
    for (var i = 0; i < otherColors.length; i++) {
      var otherColor = otherColors[i]
      var colorSwatch = $("<div class='color-swatch' data-color='"+otherColor+"'></div>");
      colorSwatch.css({"background-color": otherColor});
      
      this.colors[otherColor] = colorSwatch;
      this.append(colorSwatch);
    }
    
    for (var color in this.colors) {
      if (color == "#900") { console.log("yup") }
      var swatch = this.colors[color];
      
      swatch.click(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        
        var color = $(this).data("color");
        
        options.colorChange(color);
      });
    }
    
    this.append("<div class='clear'/>");
    
    this.changeSelected = function (color) {
      var swatch = this.colors[color];
      if (swatch) {
        swatch.siblings().removeClass("selected");
        swatch.addClass("selected");
        options.colorChange(color);
      }
    };
    
    return this;
  }
    
  var colorPalette = $(".test").colorPalette({
    colorChange: function (color) {
      $(".result").css("background", color);
    },
    bgColor: "#181818"
  });
  
  colorPalette.changeSelected("#ff9900");
  