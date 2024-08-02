import ContentLoader from "react-content-loader";

export const ServicesGroupTitle = () => (
  <ContentLoader
    speed={2}
    width={80}
    height={18}
    viewBox="0 0 80 20"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="1" y="3" rx="4" ry="4" width="62" height="15" />
  </ContentLoader>
);

const ServicesGroup = () => (
  <ContentLoader
    speed={2}
    width={80}
    height={80}
    viewBox="0 0 80 80"
    backgroundColor="#2c2c2c"
    foregroundColor="#d3d3d3"
  >
    <rect x="12" y="8" rx="10" ry="10" width="62" height="61" />
  </ContentLoader>
);
export default ServicesGroup;
