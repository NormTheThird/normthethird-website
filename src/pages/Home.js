import React, { useState, useEffect } from "react";
import axios from 'axios';
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home(){
  const [information, setInformation] = useState("");

  useEffect(() =>{ axios.get('/api/information').then(response => { setInformation(response.data); }) }, [])
  
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>Hi, I am <span className="color-theme">{information.name}</span></h1>
                <p>Software Developer</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;