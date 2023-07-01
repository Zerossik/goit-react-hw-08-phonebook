import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Section } from 'components/Section/Section';
import { Suspense } from 'react';

export const Shared = () => {
  return (
    <main>
      <Section>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
};
