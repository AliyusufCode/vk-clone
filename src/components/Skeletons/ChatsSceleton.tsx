import ContentLoader from "react-content-loader";

const ChatSkeleton = (props: any) => (
  <ContentLoader
    speed={1.5}
    className="chatSkeleton"
    viewBox="0 0 500 63"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
    {...props}
    style={{ position: "relative" }}
  >
    <rect x="63" y="10" rx="6" ry="8" width="268" height="19" />
    <rect x="63" y="36" rx="6" ry="8" width="163" height="15" />
    <circle cx="30" cy="31" r="29" />
  </ContentLoader>
);

export default ChatSkeleton;
