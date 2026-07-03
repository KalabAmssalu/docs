import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const base = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const snippet = fs.readFileSync(path.join(base, "snippets/widget-previews.mdx"), "utf8");

const sections = snippet
	.trim()
	.replace(/^<div className="erw-docs-showcase not-prose">\s*/i, "")
	.replace(/\s*<\/div>\s*$/i, "")
	.split(/(?=<section className="erw-docs-section")/g)
	.filter(Boolean);

const chunks = [
	sections.slice(0, 4),
	sections.slice(4, 8),
	sections.slice(8, 12),
];

chunks.forEach((chunk, i) => {
	const name = `widget-previews-${String.fromCharCode(97 + i)}.mdx`;
	const body = `<div className="erw-docs-showcase not-prose">\n${chunk.join("\n")}\n</div>\n`;
	fs.writeFileSync(path.join(base, "snippets", name), body);
});

const componentsPath = path.join(base, "integrations/widget/components.mdx");
const tail = fs.readFileSync(componentsPath, "utf8").split("## Shared data shape").slice(1).join("## Shared data shape");

const components = `---
title: Widget components
description: Rating display layouts you can embed with the React SDK or customize for your brand.
---

EthioReview ships **12 rating display layouts** — badges, breakdowns, summaries, and hero banners. Each layout is a drop-in component that accepts the same review aggregate data from the widget API.

Use this catalog to pick the layout that fits your page. Configure the closest match in the dashboard (**Integrations → Widgets**), or compose layouts directly with \`@ethioreview/review-widget-react\`.

<Card title="Browse live UI previews" icon="images" href="/integrations/widget/component-gallery">
  Open the **component gallery** to see all 12 layouts rendered with sample rating data.
</Card>

## Shared data shape${tail}`;

fs.writeFileSync(componentsPath, components);

const gallery = `---
title: Widget component gallery
description: Live previews of all 12 EthioReview rating widget layouts.
---

import PreviewsA from "/snippets/widget-previews-a.mdx";
import PreviewsB from "/snippets/widget-previews-b.mdx";
import PreviewsC from "/snippets/widget-previews-c.mdx";

Sample rating data is used for every preview. In your app, pass live data from the widget API or set \`layout\` on \`ReviewWidget\`.

<PreviewsA />

<PreviewsB />

<PreviewsC />

[Back to widget components →](/integrations/widget/components)
`;

fs.writeFileSync(path.join(base, "integrations/widget/component-gallery.mdx"), gallery);
console.log("split previews and created gallery page");
