sap.ui.define([
	'sap/ui/core/XMLComposite'
], function(XMLComposite) {
	"use strict";
	var Table = XMLComposite.extend("composites.Table", {
		metadata: {
			properties: {
				itemPath: {
					type: "string",
					defaultValue: "",
					invalidate: true
				}
			},
			aggregations: {
				columns: {
					type: "composites.Column",
					multiple: true
				},
				actions: {
					type: "sap.ui.core.Control",
					multiple: true
				},
				header: {
					type: "sap.ui.core.Control",
					multiple: false
				},
				footer: {
					type: "sap.ui.core.Control",
					multiple: false
				}
			}
		},
		fragment: "composites.Table",
		aggregationFragments: ["actions", "columns", "header", "footer", "unknown"],
		handler: function(oEvent) {
			var oAction = oEvent.getSource();
			oAction.setText("composite");
		}
	});

	return Table;
}, /* bExport= */true);