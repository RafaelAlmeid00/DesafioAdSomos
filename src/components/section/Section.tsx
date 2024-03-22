import React, { ReactElement } from 'react';

interface SectionProps {
  height: string;
  children:ReactElement[] | ReactElement | undefined
}

const Section: React.FC<SectionProps> = ({ height, children }) => {
  return (
    <section className='section' style={{ height: height }}>
      {children}
    </section>
  );
};

export default Section;
