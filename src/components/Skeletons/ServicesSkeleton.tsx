import ContentLoader from "react-content-loader";

const ServicesSkeleton = () => (
  <ContentLoader
    speed={2}
    width={80}
    height={80}
    viewBox="0 0 80 80"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="12" y="15" rx="10" ry="10" width="53" height="49" />
  </ContentLoader>
);

export default ServicesSkeleton;
