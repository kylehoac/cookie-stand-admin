import { hours } from "./data"

export default function ReportTable(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>Location</th>
                    {hours.map(item => <th key={item}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {cookieStand.map(item => <tr></tr>)}
            </tbody>
        </table>
    )
}