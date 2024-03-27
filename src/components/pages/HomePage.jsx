function Homepage() {
  return (
    <div className=" w-full flex items-center justify-around flex-col-reverse md:flex-row">
      <div className="">picture</div>
      <div className="flex items-center flex-col">
        <h1 className="text-xl font-semibold">Discover more.</h1>
        <h1 className="text-xl font-semibold">Pay less.</h1>
        <p className="text-sm">
          Here you can find many different cuppons for ...
        </p>
        <button>appstore</button>
        <button>googlestore</button>
      </div>
    </div>
  );
}

export default Homepage;
