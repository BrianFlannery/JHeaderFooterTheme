
document.observe("dom:loaded", function () {
    if ( ! $$('div.classificationBanner')[0] ) {
      var headerBannerW = new Element('div');
      headerBanner.className = 'classificationBannerW';
      var headerBanner = new Element('div');
      headerBanner.innerHTML = 'UNCLASSIFIED';
      headerBanner.className = 'classification-banner';
      headerBanner.className += ' unclassified';
      headerBanner.className += ' vertal';
      headerBannerW.className += ' vertal';
      headerBannerW.insert(headerBanner);
      $$('body')[0].insertBefore(headerBannerW, $$('div#page-head')[0]);
    }
});

//
