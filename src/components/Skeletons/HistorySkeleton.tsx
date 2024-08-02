import ContentLoader from "react-content-loader";

const HistorySkeleton = () => (
  <ContentLoader
    speed={2}
    width={340}
    height={135}
    viewBox="0 0 340 135"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <circle cx="60" cy="46" r="33" />
    <rect x="31" y="89" rx="3" ry="3" width="60" height="9" />
  </ContentLoader>
);

export default HistorySkeleton;
