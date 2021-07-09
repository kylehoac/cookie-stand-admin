import { hours } from "./data";

export default function CookieStandTable(props) {
  return (
    <table className="mx-auto border-4">
      <thead className="mx-auto">
        <tr>
          <th>Location</th>
          {hours.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.stands.map((report) => (
          <tr>
            <td>{report.location}</td>
            {report.cookiesEachHour.map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
