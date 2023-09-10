import React, {useState, useEffect} from 'react'

function App(){
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Getting API data")
        fetch("https://dog.ceo/api/breeds/image/randoms/3")
        .then((res) => res.json())
        .then((data) => {
            setImage(data.message)
            setIsLoading(false)
        })
        console.log("after fetch")
    },[])

    if(isLoading){ return <p>Loading...</p>}
  return (
    <div>
        <img src={image} alt = "A Random Dog"/>
    </div>
  )
}

export default App

