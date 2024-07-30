import ContentLoader from "react-content-loader";

const InputSkeleton = (props: any) => (
  <ContentLoader
    speed={1.5}
    height={40}
    width="100%"
    className={"inputSkeleton"}
    viewBox="0 0 550 40"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
    style={{ position: "relative" }}
    {...props}
  >
    <rect x="20" y="0" rx="8" ry="8" width="calc(100% - 40px)" height="40" />
  </ContentLoader>
);

export default InputSkeleton;
