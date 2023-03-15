const APIform = ({inputs, handleChange, onSubmit}) => {
    // for(const [key, value] of Object.entries(inputs)){
    //     console.log(`${key}: ${value}`);
    // }

    //inputsInfo cannot be an object because in .map, we are only access one dictionary object at a time.
    const inputsInfo = [
        "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
        "Input true or false if you would like your website screenshot to not contain any ads",
        "Input true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        "Choose the width of your screenshot (in pixels)",
        "Choose the height of your screenshot (in pixels)",
    ]
    return (
        <div>
            <h2> Select Your Image Attributes: </h2>
            <form className="form-container" onSubmit={onSubmit}>
                {inputs &&  
                    Object.entries(inputs).map(([category, value], index) => (
                        <li className="form" key={index}>
                            <h2>{category}</h2>
                            <input
                                className="textbox" 
                                type="text"
                                value={value}
                                name={category}
                                onChange={handleChange}
                                placeholder="Input this attribute..."
                            />
                            <br></br>
                            <br></br>
                            <p> {inputsInfo[index]}</p>
                        </li>              
                ))}
                <button type="submit" className="button" onClick={onSubmit}>
                    Take that Pic! 🎞
                </button>
            </form>
        </div>
    );
};

export default APIform;