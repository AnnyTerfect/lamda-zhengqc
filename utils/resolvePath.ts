import nextConfig from "../next.config";
import { join } from "path";

export default function resolve(path: string): string {
  return join(nextConfig.basePath as string, path);
}
