import React,{useState,useEffect} from 'react';
import '../css/App.css';

function Module({json, showgui, showbof, showcons}) {
  var link_open = () => {
    window.open(json.link, "_blank");
  };
  var cat_classname= "module-container";
  if (json.category.BOF && showbof == false)
    return (<div></div>);
  if (json.category.Console && showcons == false)
    return (<div></div>);
  if (json.category.Graphical && showgui == false)
    return (<div></div>);

  return(
    <div className={cat_classname} onClick={link_open}>
      <div className="module-img-container">
        <img className="module-preview" src={json.preview} alt="something"/>
      </div>
      <div className="module-title">
        <h2>{json.title} - {json.author}</h2>
      </div>
      <p>{json.description}</p>
    </div>
  );
}

function App() {
  const [data,setData]=useState([]);
  const [showgui, setShowgui] = useState(true);
  const [showbof, setShowbof] = useState(true);
  const [showcons, setShowcons] = useState(true);

  const getData=()=>{
    fetch('havoc-modules.json' ,{
      mode: 'no-cors',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(function(response){
      console.log(response);
      return (response.json());
    }).then(function(myJson) {
      setData(myJson)
    }).catch((error) => {
      console.log(error);
    })
  };
  useEffect(()=>{getData()},[])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-logo">
          <p>
            Made with &lt;3 by <a href="https://leosmith.wtf">p4p1</a>
          </p>
        </div>
        <div className="App-header-links">
          <a className="header-link" href="https://github.com/p4p1/havoc-store/blob/main/README.md#add-your-pluggins">Add your projects</a>
          <a className="header-link" href="https://github.com/p4p1/havoc-store">Github</a>
          <a className="header-link" href="https://havocframework.com/">HavocFramework</a>
        </div>
      </header>
      <div>
        <svg className="Main-logo" viewBox="0 0 342.83 734.3" fill="#f8f8f2" xmlns="http://www.w3.org/2000/svg"><polygon points="254.33 193.08 254.33 229.05 215.91 251.24 126.47 302.88 88.76 324.64 61.98 340.11 31.23 357.86 0.06 375.85 0 375.85 0 63.41 31.23 63.41 31.23 321.89 31.27 321.87 61.98 304.12 88.76 288.67 126.47 266.89 215.91 215.25 216.6 214.86 254.33 193.08"></polygon><polygon points="254.33 337.39 254.33 373.47 216.6 395.25 216.6 395.23 215.91 395.63 126.47 447.27 88.76 469.05 61.98 484.5 61.98 484.51 31.24 502.26 31.24 502.27 31.23 502.28 31.23 734.3 0 734.3 0 484.33 0.24 484.33 0.14 484.14 31.23 466.2 61.98 448.44 88.76 432.99 126.47 411.21 126.47 411.2 215.91 359.57 215.91 359.56 254.33 337.39"></polygon><polygon points="342.83 0 342.83 250.23 311.85 268.12 254.33 301.33 216.6 323.1 215.91 323.5 126.47 375.14 126.47 375.19 88.76 396.96 88.76 360.87 126.47 339.1 215.91 287.46 254.33 265.28 311.85 232.07 311.85 0 342.83 0"></polygon><polygon points="342.83 358.48 342.83 670.84 311.85 670.84 311.85 412.27 254.33 445.48 215.91 467.65 126.47 519.29 88.76 541.06 88.76 505.14 126.47 483.38 215.91 431.74 216.6 431.35 254.33 409.57 311.5 376.56 311.85 376.36 342.73 358.52 342.83 358.48"></polygon></svg>
        <h1>Havoc-Store</h1>
        <p className="subtitle">
          A one stop shop to find the different havoc modules and extensions!
        </p>
      </div>
      <header className="category-header">
        {showgui ? <a className="header-icon header-icon-active" href="#" onClick={() => setShowgui(!showgui)}>Graphical</a> :
          <a className="header-icon" href="#" onClick={() => setShowgui(!showgui)}>Graphical</a> }
        {showcons ? <a className="header-icon header-icon-active" href="#" onClick={() => setShowcons(!showcons)}>Terminal</a> :
          <a className="header-icon" href="#" onClick={() => setShowcons(!showcons)}>Terminal</a>}
        {showbof ? <a className="header-icon header-icon-active" href="#" onClick={() => setShowbof(!showbof)}>BOF Files</a> :
          <a className="header-icon" href="#" onClick={() => setShowbof(!showbof)}>BOF Files</a> }
      </header>
      <div className="root-content">
      {
        data && data.length>0 && data.map((item)=><Module json={item} showgui={showgui} showbof={showbof} showcons={showcons}/>)
      }
      </div>
    </div>
  );
}

export default App;
