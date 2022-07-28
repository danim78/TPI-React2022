import "./Loading.css";

function Loading() {
  return (
    <>
      <div className="container" id="loading" role='progressbar'>
        <div className="mb-3 mt-5">
          <div className="text-center">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
