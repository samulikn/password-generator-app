function TotalStrength() {
  return (
    <div>
      <div className="p-4 sm:px-8 bg-grey-850 flex items-center">
        <p className="text-base/5 text-grey-600">STRENGTH</p>
        <span className="ml-auto mr-4 text-lg/6">{/* MEDIUM */}</span>
        <div className="flex gap-2">
          <div className="h-7 w-2.5 border-grey-200 border-2"></div>
          <div className="h-7 w-2.5 border-grey-200 border-2"></div>
          <div className="h-7 w-2.5 border-grey-200 border-2"></div>
          <div className="h-7 w-2.5 border-grey-200 border-2"></div>
        </div>
      </div>
      <button className="mt-4 sm:mt-8 bg-green-200 px-26 py-4 text-grey-800 text-base/5 inline">
        GENERATE{" "}
        <img
          src="./src/assets/images/icon-arrow-right.svg"
          alt="copy"
          className="inline align-middle pl-2 pb-1"
        />
      </button>
    </div>
  );
}

export default TotalStrength;
