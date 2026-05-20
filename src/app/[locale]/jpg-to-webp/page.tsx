import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("jpg-to-webp");
export { generateMetadata };
export default Page;
