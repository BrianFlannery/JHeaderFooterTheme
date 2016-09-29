
document.observe("dom:loaded", function () {
    if ( ! $$('div.classificationBanner')[0] ) {
      var headerBanner = new Element('div');
      headerBanner.className = 'classificationBanner';
      headerBanner.innerHTML = 'UNCLASSIFIED';
      $$('body')[0].insertBefore(headerBanner, $$('div#page-head')[0]);
    }
});

//
