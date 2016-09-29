
document.observe("dom:loaded", function () {
    if ( ! $$('div.classificationBanner')[0] ) {
      var headerBannerW = new Element('div');
      headerBanner.className = 'classificationBannerW';
      var headerBanner = new Element('div');
      headerBannerW.insert(headerBanner);
      headerBanner.className = 'classificationBanner';
      headerBanner.innerHTML = 'UNCLASSIFIED';
      $$('body')[0].insertBefore(headerBannerW, $$('div#page-head')[0]);
    }
});

//
