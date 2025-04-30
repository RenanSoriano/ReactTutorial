import FormComponent from './components/FormComponent';

interface AppProperties {
  title: string;
}

export default function App  ({ title }: AppProperties) {
  return (
    <div>
      <h1>{title}</h1>
      <FormComponent />
    </div>
  );
};


