import Link from "next/link";
import PropTypes from "prop-types";

const NoScrollLink = ({ children, href, passHref }) => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

NoScrollLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  passHref: PropTypes.string,
};

export default NoScrollLink;
