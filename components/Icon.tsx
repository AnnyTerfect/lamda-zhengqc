import dynamic from "next/dynamic";

export default dynamic(() => import("@mdi/react"), { ssr: false });
