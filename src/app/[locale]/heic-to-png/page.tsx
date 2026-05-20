import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("heic-to-png");
export { generateMetadata };
export default Page;
