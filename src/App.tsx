import { FC } from 'react';
import FormComponent from './components/FormComponent';

interface AppProperties {
  title: string;
}

const App: FC<AppProperties> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <FormComponent />
    </div>
  );
};

export default App;
