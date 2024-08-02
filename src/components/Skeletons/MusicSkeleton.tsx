import ContentLoader from "react-content-loader";

export const MusicSkeletonImage = () => (
  <ContentLoader
    speed={2}
    width={60}
    height={60}
    viewBox="0 0 60 60"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="1" y="6" rx="7" ry="7" width="50" height="47" />
  </ContentLoader>
);

export const MusicSkeletonTitle = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={20}
    viewBox="0 0 200 20"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="10" y="2" rx="3" ry="3" width="135" height="14" />
  </ContentLoader>
);
export const MusicSkeletonExecutor = () => (
  <ContentLoader
    speed={2}
    width={80}
    height={20}
    viewBox="0 0 80 20"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="10" y="2" rx="3" ry="3" width="135" height="14" />
  </ContentLoader>
);

export const MusicSkeletonDots = () => (
  <ContentLoader
    speed={2}
    width={40}
    height={20}
    viewBox="0 0 40 20"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="6" y="1" rx="3" ry="3" width="28" height="14" />
  </ContentLoader>
);
