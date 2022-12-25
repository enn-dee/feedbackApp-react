import './index.css'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import React from 'react'
export default function App() {
  return(
  <>
    <Header/>
    <div className="container">
    <FeedbackItem/>
    </div>
  </>
  )

}
