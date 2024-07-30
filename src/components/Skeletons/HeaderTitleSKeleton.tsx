import ContentLoader from "react-content-loader";

const HeaderTitleSKeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={500}
    height={42}
    viewBox="0 0 500 42"
    backgroundColor="#5f5d5d"
    foregroundColor="#919191"
    {...props}
  >
    <rect x="115" y="5" rx="8" ry="8" width="217" height="24" />
  </ContentLoader>
);

export default HeaderTitleSKeleton;
