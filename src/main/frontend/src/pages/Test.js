import { useState, useEffect } from "react"

const Test = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/test')
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
  },[])

  return (<div>{message}</div>)
}

export default Test;