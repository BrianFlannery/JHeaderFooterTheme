
document.observe("dom:loaded", function () {
    if ( ! $$('div.classificationBanner')[0] ) {
      var headerBannerW = new Element('div');
      headerBannerW.className = 'classificationBannerW';
        
      var headerBanner = new Element('div');
      headerBanner.innerHTML = 'UNCLASSIFIED';
      headerBanner.className = 'classification-banner vertal unclassified';
        
      headerBannerW.insert(headerBanner);
      var footerBanneryW = headerBannerW.cloneNode(true)
      footerBanneryW.className += ' classificationFooter';
      $$('body')[0].appendChild(footerBanneryW);
      // $$('footer')[0].appendChild(footerBanneryW);
      headerBannerW.className += ' vertal';
      $$('body')[0].insertBefore(headerBannerW, $$('div#page-head')[0]);
    }
});

//
