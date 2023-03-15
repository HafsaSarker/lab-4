const Gallery = ({ images }) => {
    console.log(images)
    return (
      <div>
        <h2> Your Screenshot Gallery!</h2>
        <div className="image-container">
            {images && images.length > 0 ? 
                (
                    images.map((pic, index) => (
                        <li className="gallery" key={index}>
                            <img className="gallery-img" src={pic} width="500"/>
                        </li>
                    ))
                )
                :
                (
                    <div>
                        <h3>You haven't made a screenshot yet!</h3>
                    </div>
                )}
        </div>
      </div>
    );
  };
  
  export default Gallery;