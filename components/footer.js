import { render } from "react-dom";

export default function Footer(props) {
  return (
    <footer className="py-6 pl-6 bg-green-500">
      <p>&copy; 2021</p>
      <p>{props.stands.length} Locations Worldwide</p>
    </footer>
  );
}
