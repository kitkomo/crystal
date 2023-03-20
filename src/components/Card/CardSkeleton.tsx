import React from "react"
import ContentLoader from "react-content-loader"

const CardSkeleton: React.FC = () => (
  <ContentLoader 
    speed={3}
    viewBox="0 0 350 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="350" height="350" />
  </ContentLoader>
)

export default CardSkeleton

