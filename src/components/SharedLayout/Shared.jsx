import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Section } from 'components/Section/Section';

export const Shared = () => {
  return (
    <main>
      <Section>
        <Navigation />
        <Outlet />
      </Section>
    </main>
  );
};
