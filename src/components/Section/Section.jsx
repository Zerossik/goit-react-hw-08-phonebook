import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export function Section({ children }) {
  return <SectionEl>{children}</SectionEl>;
}
Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.exact).isRequired,
};
