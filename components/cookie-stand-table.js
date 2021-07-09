import { hours } from "./data";

export default function CookieStandTable(props) {
    function handleDelete(event,obj) {
        event.preventDefault();
        onDelete(obj)
    }
  return (
    <table className="mx-auto my-10 border-2 border-black">
      <thead className="mx-auto">
        <tr className="border-2 border-black">
          <th className="border-2 border-black">Location</th>
          {hours.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className="border-2 border-black">
        {props.stands.map((report) => (
          <tr className="border-2 border-black">
            <td className="border-2 border-black">
              {report.location}{" "} <button onClick={(event) => handleDelete(event,obj)}>
              <svg
                className="text-red"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              </button>
            </td>
            {report.cookiesEachHour.map((value, i) => (
              <td className="border-2 border-black" key={i}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
