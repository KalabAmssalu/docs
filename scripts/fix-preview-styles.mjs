import fs from "fs";

const path = new URL("../snippets/widget-previews.mdx", import.meta.url);
let s = fs.readFileSync(path, "utf8");

s = s.replace(/style="([^"]+)"/g, (_, css) => {
	const obj = {};
	for (const rule of css.split(";").filter(Boolean)) {
		const idx = rule.indexOf(":");
		if (idx === -1) continue;
		const k = rule.slice(0, idx).trim();
		const v = rule.slice(idx + 1).trim();
		const key = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
		let val;
		if (/^-?\d+(\.\d+)?px$/.test(v)) val = parseFloat(v);
		else if (/^-?\d+(\.\d+)?$/.test(v)) val = parseFloat(v);
		else val = v;
		obj[key] = val;
	}
	const entries = Object.entries(obj)
		.map(([k, v]) => (typeof v === "number" ? `${k}: ${v}` : `${k}: "${v}"`))
		.join(", ");
	return `style={{ ${entries} }}`;
});

fs.writeFileSync(path, s);
console.log("converted styles");
