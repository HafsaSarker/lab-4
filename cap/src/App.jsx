import { useState } from 'react'
import './App.css'
import APIform from './Components/APIform';
import Gallery from './Components/Gallery';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [prevImages, setPrevImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: ""
  })
  console.log(prevImages)
  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name] : value.trim()
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);

    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if(!inputs.url) {
      alert("You forgot to submit an url!");
    }else {
      alert("Data is cooking...please wait");
      for(const [key, value] of Object.entries(inputs)) {
        if(!value){
          inputs[key] = defaultValues[key];
        }
      }
    }
    makeQuery();
  }
  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;

    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

    callAPI(query).catch(console.error);
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (!json.url){
      alert("Oops! Something went wrong with that query, let's try again!")
    }else {
      setCurrentImage(json.url);
      setPrevImages((images) => [...images, json.url]);
      reset();
    }
  }
  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: "",
    });
    
  }
  return (
    <div className="App">
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIform 
        inputs={inputs}
        handleChange={(handleChange)}
        onSubmit={onSubmit}
      />

      {currentImage ?
          ( <div>
              <h2>Query Result</h2>
              <img className='screenshot'
              src={currentImage}
              />
              <div className="gallery-container">
                  <Gallery images = {prevImages} />
                </div>
            </div>
          ) 
          : (
            <div className="container">
                <p>
                  https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY    
                  <br></br>
                  &url={inputs.url} <br></br>
                  &format={inputs.format} <br></br>
                  &width={inputs.width}
                  <br></br>
                  &height={inputs.height}
                  <br></br>
                  &no_cookie_banners={inputs.no_cookie_banners}
                  <br></br>
                  &no_ads={inputs.no_ads}
                  <br></br>
                </p>
                
            </div>
          )
      }
      
      
    </div>
  )
}

export default App
