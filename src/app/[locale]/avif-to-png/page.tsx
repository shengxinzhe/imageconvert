import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("avif-to-png");
export { generateMetadata };
export default Page;
