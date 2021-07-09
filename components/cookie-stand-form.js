export default function CookieStandForm(props) {
  function submitHandler(event) {
    event.preventDefault();
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.min = parseInt(event.target.min.value);
    standInfo.max = parseInt(event.target.max.value);
    standInfo.avg = parseFloat(event.target.avg.value);
    standInfo.hourlySales = [
      36, 24, 85, 23, 75, 24, 53, 52, 12, 61, 23, 42, 12, 32,
    ];

    props.onStandCreate(standInfo);
  }
  return (
    <>
      <form
        className="w-2/3 py-2 mx-auto my-8 bg-green-300"
        onSubmit={submitHandler}
      >
        <fieldset className="w-full">
          <legend className="text-xl font-semibold text-center">
            Create Cookie Stand
          </legend>
          <div className="flex py-10">
            <label className="" htmlFor="location">
              Location
            </label>
            <input
              className="flex-auto"
              id="location"
              name="location"
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1 mx-3 text-center bg-green-200 rounded">
              <label htmlFor="min">Minimum Customers per Hour</label>
              <input
                className="my-2"
                id="min"
                name="min"
                type="number"
                required
              />
            </div>
            <div className="flex-1 text-center bg-green-200 rounded">
              <label htmlFor="max">Maximum Customers per Hour</label>
              <input
                className="my-2"
                id="max"
                name="max"
                type="number"
                required
              />
            </div>
            <div className="flex-1 text-center bg-green-200 rounded">
              <label htmlFor="avg">Average Cookies per Sale</label>
              <input
                className="my-2"
                id="avg"
                name="avg"
                type="number"
                step=".1"
                required
              />
            </div>
            <button className="flex-1 py-2 mx-2 bg-green-500 rounded">
              Create
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
