import ContentLoader from "react-content-loader";

const HeaderTitleSKeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={500}
    height={37}
    viewBox="0 0 500 49"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
    {...props}
  >
    <rect x="115" y="5" rx="8" ry="8" width="217" height="40" />
  </ContentLoader>
);

export default HeaderTitleSKeleton;
