import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';
import { Outlet } from 'react-router-dom';

export function Section({ title, children }) {
  return <SectionEl>{children}</SectionEl>;
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
