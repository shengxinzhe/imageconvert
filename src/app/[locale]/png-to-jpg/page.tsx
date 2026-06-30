import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("png-to-jpg");
export { generateMetadata };
export default Page;
