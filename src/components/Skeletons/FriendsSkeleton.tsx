import ContentLoader from "react-content-loader";

const FriedsSkeleton = () => (
  <ContentLoader
    speed={1}
    width={200}
    height={60}
    viewBox="0 0 200 60"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <circle cx="22" cy="26" r="22" />
    <rect x="52" y="19" rx="4" ry="4" width="130" height="14" />
  </ContentLoader>
);

export default FriedsSkeleton;

export const FriedsSkeletonIcon = () => (
  <ContentLoader
    speed={1}
    width={60}
    height={50}
    viewBox="0 0 60 50"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="3" y="15" rx="3" ry="3" width="41" height="31" />
  </ContentLoader>
);
