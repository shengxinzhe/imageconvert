import { createToolPage } from "@/lib/tool-routes";

const { generateMetadata, Page } = createToolPage("strip-exif");
export { generateMetadata };
export default Page;
