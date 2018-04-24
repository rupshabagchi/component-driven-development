import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * A link.
 */
const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${props => (props.shy ? 'inherit' : props.theme.color.link)};
	}
	&:hover,
	&:focus,
	&:active {
		color: ${props => props.theme.color.hover};
	}
`;

Link.propTypes = {
	/** Has text color by default */
	shy: PropTypes.bool,
};

Link.defaultProps = {
	shy: false,
};

/** @component */
export default Link;
