import CMS from "netlify-cms";

CMS.registerEditorComponent({
	id: "container",
	label: "Container",
	fields: [
		{
			name: "type",
			label: "Type",
			widget: "select",
			options: [
				{ label: "Guide", value: "guide" },
				{ label: "Tip", value: "c-tip" },
				{ label: "Warning", value: "c-warning" },
				{ label: "Danger", value: "c-danger" },
				{ label: "Alert", value: "alert" },
				{ label: "Note", value: "note" },
				{ label: "Videolink", value: "videolink" },
				{ label: "Collapse", value: "collapse" },
			],
		},
		{ name: "title", label: "Title", widget: "string" },
		{ name: "description", label: "Description", widget: "string" },
	],
	pattern: /^\s?:::(guide|error)?(.+)\s+?(.+)\s+:::/,
	fromBlock: function(match) {
		return {
			type: match[1],
			title: match[2],
			description: match[3],
		};
	},
	toBlock: function(obj) {
		return `:::${obj.type} ${obj.title}\n${obj.description}\n:::`;
	},
	toPreview: function(obj) {
		return `<div style="background-color: grey"><p><b>${obj.title}</b></p><p>${obj.title}</p><div>`;
	},
});
