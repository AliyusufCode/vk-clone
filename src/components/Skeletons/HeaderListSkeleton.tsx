import ContentLoader from "react-content-loader";

const HeaderListSkeleton = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={31}
    viewBox="0 0 360 31"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="20" y="4" rx="8" ry="8" width="111" height="18" />
    <rect x="230" y="4" rx="8" ry="8" width="111" height="18" />
  </ContentLoader>
);

export default HeaderListSkeleton;
