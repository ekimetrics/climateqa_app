import { FC } from 'react';
import { Layout } from '@/components/Layout/Layout';

const About: FC = () => {
  return (
    <Layout title="About ClimateQ&A" description="Information about ClimateQ&A...">
      <div className="max-w-[800px] mx-auto mt-4 sm:mt-12">
        <div>
            <h1>About ClimateQ&A</h1>
            <p>Information about ClimateQ&A...</p>
        </div>
    </div>
    </Layout>
  );
};

export default About;
