import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("png-to-webp");
export { generateMetadata };
export default Page;
