import ContentLoader from "react-content-loader";

export const NotificationsSkeletonTitle = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={22}
    viewBox="0 0 400 22"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="4" y="5" rx="4" ry="4" width="116" height="15" />
  </ContentLoader>
);

const NotificationsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={55}
    viewBox="0 0 400 55"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <circle cx="26" cy="27" r="24" />
    <rect x="55" y="9" rx="4" ry="4" width="187" height="15" />
    <rect x="56" y="32" rx="4" ry="4" width="129" height="13" />
  </ContentLoader>
);
export default NotificationsSkeleton;
