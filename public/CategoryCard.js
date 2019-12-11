(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['CategoryPost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"categories\">\n    <div class=\"categories-content\">\n        <div id=\"categories-button\">\n            <button id=\"section-button\" class=\""
    + alias4(((helper = (helper = helpers.classDescription || (depth0 != null ? depth0.classDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classDescription","hash":{},"data":data,"loc":{"start":{"line":4,"column":47},"end":{"line":4,"column":67}}}) : helper)))
    + "\" onclick=\""
    + alias4(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URL","hash":{},"data":data,"loc":{"start":{"line":4,"column":78},"end":{"line":4,"column":85}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Category || (depth0 != null ? depth0.Category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Category","hash":{},"data":data,"loc":{"start":{"line":4,"column":87},"end":{"line":4,"column":99}}}) : helper)))
    + "</button>\n        </div>\n\n    </div>\n</div>\n";
},"useData":true});
})();