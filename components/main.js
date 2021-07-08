import ReportTable from "./table"
import CreateForm from "./form"

export default function Main(props) {
    return (
        <main>
            <>
                <CreateForm stand={props.stand} submitHandler={props.submitHandler}/>
            </>
            </main>
    )
}