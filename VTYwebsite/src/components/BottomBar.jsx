const BottomBar = (props) => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="font-sans bg-neutral-800 py-12 px-6 flex items-center justify-center h-lg">
        <div className="flex items-center lg:mr-80">
          <h3 className="text-gray-400 text-sm ml-2 p-2 font-semibold">© Oulun yliopiston Vesiteknillinen Yhdistys ry {currentYear}</h3>
          <h3 className="text-gray-400 text-sm font-semibold"> - </h3>
          <button className="text-gray-400 text-sm p-2 font-semibold hover:brightness-110" onClick={() => props.onItemClick("Tietosuojaseloste")}> Tietosuojaseloste</button>
        </div>
      </footer>
    );
  };
  
  export default BottomBar;