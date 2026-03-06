/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["be/hogent/hellofiori/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
