import ContentLoader from "react-content-loader";

const PostsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <circle cx="23" cy="35" r="19" />
    <rect x="56" y="22" rx="2" ry="2" width="140" height="10" />
    <rect x="56" y="36" rx="2" ry="2" width="72" height="10" />
    <rect x="0" y="60" rx="10" ry="10" width="388" height="320" />
  </ContentLoader>
);

export default PostsSkeleton;
