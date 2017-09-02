'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldBehaveLikeMusicSite(driver, {
		url: 'http://youtubify.vebto.com/album/12/Twenty+One+Pilots/Blurryface',
		playButtonSelector: '.actions .icon.icon-play'
	});

	connectorSpec.shouldBehaveLikeMusicSite(driver, {
		url: 'http://groovemp3.com/album/Twenty+One+Pilots/Blurryface',
		playButtonSelector: '.actions .icon.icon-play'
	});

	connectorSpec.shouldBehaveLikeMusicSite(driver, {
		url: 'http://s2music.com/album/147455/Boards+of+Canada/Geogaddi',
		playButtonSelector: '.actions .icon.icon-play'
	});
};
