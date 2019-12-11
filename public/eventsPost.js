(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['eventsPost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\" data-name=\"the_name\" data-city=\"the_city\" date-date=\""
    + alias4(((helper = (helper = helpers.Predate || (depth0 != null ? depth0.Predate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Predate","hash":{},"data":data,"loc":{"start":{"line":1,"column":71},"end":{"line":1,"column":82}}}) : helper)))
    + "\">\n  <div class=\"inner-container\">\n    <div class=\"post-info-container\">\n      <a href=\""
    + alias4(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URL","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":22}}}) : helper)))
    + "\" class=\"post-title\">"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data,"loc":{"start":{"line":4,"column":43},"end":{"line":4,"column":52}}}) : helper)))
    + "</a>\n      <div class=\"post-description\">"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data,"loc":{"start":{"line":5,"column":36},"end":{"line":5,"column":51}}}) : helper)))
    + "</div>\n      <div class=\"bottom\">\n        <div id=\"left\">\n          <div class=\"post-date\">"
    + alias4(((helper = (helper = helpers.Postdate || (depth0 != null ? depth0.Postdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Postdate","hash":{},"data":data,"loc":{"start":{"line":8,"column":33},"end":{"line":8,"column":45}}}) : helper)))
    + "</div>\n          <div class=\"post-city\">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":44}}}) : helper)))
    + "</div>\n        </div>\n        <div id=\"right\">\n          <input type=\"button\" value=\"Interested\" id=\"myButton10\" class=\"post-button\"></input>\n        </div>\n      </div>\n    </div>\n    <div class= photo-add>\n      <img src=\""
    + alias4(((helper = (helper = helpers.ImageURL || (depth0 != null ? depth0.ImageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageURL","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":28}}}) : helper)))
    + "\" alt=\"\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();