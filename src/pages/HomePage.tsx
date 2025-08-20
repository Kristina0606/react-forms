import type { FC } from 'react';
import RHForm from '../components/RHForm';
import UncontrolledForm from '../components/UncontrolledForm';

const HomePage: FC = () => {
  return (
    <>
      <div className="flex gap-10 items-center justify-center">
        <RHForm />
        <UncontrolledForm />
      </div>
    </>
  );
};

export default HomePage;
