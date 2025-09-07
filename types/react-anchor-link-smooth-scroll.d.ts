declare module "react-anchor-link-smooth-scroll" {
  import * as React from "react"

  interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    offset?: () => number
  }

  const AnchorLink: React.FC<AnchorLinkProps>

  export default AnchorLink
}
