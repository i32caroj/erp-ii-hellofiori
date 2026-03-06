sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (MessageToast, Controller, JSONModel) => { //import shit
    "use strict";

    return Controller.extend("be.hogent.hellofiori.controller.App", {
        onInit() {
            let myData = {
                "user": "Tom",
                "name": ""
            }
            let customModel = new JSONModel(myData);
            this.getView().setModel(customModel, "custom");
        },
        onPress: function (evt) {
			let data = this.getView().getModel("custom").getData();
            MessageToast.show(data.name + "was entered or something")
		},
    });
});