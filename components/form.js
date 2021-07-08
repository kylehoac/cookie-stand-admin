export default function CreateForm(props){
    return (
<form className="w-2/3 py-2 mx-auto my-8 bg-green-300" onSubmit={submitHandler}>
                    <fieldset className="w-full">
                        <legend className="text-xl font-semibold text-center">Create Cookie Stand</legend>
                        <div className="flex py-10">
                            <label className="" htmlFor="location">Location</label>
                            <input className="flex-auto" id="location" name="location" type="text" />
                        </div>
                        <div className="flex gap-4">

                            <div className="flex-1 mx-3 text-center bg-green-200 rounded">
                                <label htmlFor="min-customers">Minimum Customers per Hour</label>
                                <input className="my-2" id="min-customers" name="minCustomers" type="number" required />
                            </div>
                            <div className="flex-1 text-center bg-green-200 rounded">
                                <label htmlFor="max-customers">Maximum Customers per Hour</label>
                                <input className="my-2" id="max-customers" name="maxCustomers" type="number" required />
                            </div>
                            <div className="flex-1 text-center bg-green-200 rounded">
                                <label htmlFor="avg-cookies">Average Cookies per Sale</label>
                                <input className="my-2" id="avg-cookies" name="avgCookies" type="number" step=".1" required />
                            </div>
                            <button className="flex-1 py-2 mx-2 bg-green-500 rounded">Create</button>
                        </div>
                    </fieldset>
                </form>
    )
}