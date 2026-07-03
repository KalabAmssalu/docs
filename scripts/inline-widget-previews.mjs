import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const base = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pagePath = path.join(base, "integrations/widget/components.mdx");
const snippetPath = path.join(base, "snippets/widget-previews.mdx");

let page = fs.readFileSync(pagePath, "utf8");
const snippet = fs.readFileSync(snippetPath, "utf8").trim();

page = page
	.replace('import WidgetPreviews from "/snippets/widget-previews.mdx";\n\n', "")
	.replace("<WidgetPreviews />", snippet);

fs.writeFileSync(pagePath, page);
console.log("inlined widget previews");
