import CreateForm from "./form";

export default function Main(props) {
  return (
    <main>
        <CreateForm onStandCreate={props.onStandCreate} />
    </main>
  );
}
