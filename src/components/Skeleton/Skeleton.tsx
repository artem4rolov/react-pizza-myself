import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={289}
    height={515}
    viewBox="0 0 289 515"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="130" />
    <rect x="0" y="286" rx="20" ry="20" width="289" height="56" />
    <rect x="-2" y="361" rx="20" ry="20" width="289" height="107" />
    <rect x="0" y="486" rx="10" ry="10" width="84" height="26" />
    <rect x="204" y="486" rx="10" ry="10" width="84" height="26" />
  </ContentLoader>
);

export default Skeleton;
