
function find(props) {
  var link = 'https://www.google.com/maps/search/?api=1&query='+props;
  window.open(link);
}
function CityList(props) {
  const { cities } = props;
  return (
    
    <div>
      <h1>Where is</h1>
      <ul>
        {cities.map((item, _) => {          
          return (
              <button className = "find" onClick={()=>find(item)}>
              {item}
              </button>
            );
        })}
      </ul>
    </div>
  );
}


export default CityList;
