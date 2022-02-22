import dynamic from "next/dynamic";

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS) => {
      CMS.init();
    }),
  { ssr: false });

export default AdminWithNoSSR;