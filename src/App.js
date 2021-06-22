import Currency from "./components/Quotes"
import React, { useState, useEffect } from "react"

const QUOTES_API = 'https://api.quotable.io/random'

function App() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    fetch(QUOTES_API)
      .then(res => res.json())
      .then((data) => setQuote(data));
  }

  useEffect(() => {
    getQuote();
  }, [])

  const getNewQuote = () => {
    getQuote();
  }

  return (
    <Currency quote={quote.content} author={quote.author} onClick={getNewQuote} />
  )

}

export default App

