import CreateForm from "./form-original";

export default function Main(props) {
  return (
    <main>
        <CreateForm onStandCreate={props.onStandCreate} />
    </main>
  );
}
