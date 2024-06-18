import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import React from "react"

function App(){
  return (
    <>
      <div className='bg-amber-50 min-h-screen px-5 py-3 flex flex-col gap-16 lg:px-16 lg:py-10 md:px-10 md:py-7 md:justify-between'>
      <Header/>
      <Body/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
