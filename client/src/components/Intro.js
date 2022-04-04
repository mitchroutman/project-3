import React from 'react';
import './Intro.css';
// import './LoginButton.css';
import logo from  "../assets/AGILE-LAKE.png";


export default function Intro() {
    return (
      <div className="i">
          <div className="i-left"> 
              <div className="i-left-wrapper">
                  <h2 className='i-intro'>
                      Welcome to 
                  </h2>
                  <h1 className='i-name'>
                      AGILE LAKE
                  </h1>
  
                  <div className='i-title'> 
                      <div className='i-title-wrapper'> 
                        
                          <div className='i-title-item'> 
                          S.K LLC
                          {/* "This is the best project managment website out there." -S.K. */}
                          </div>
                          <div className='i-title-item'> 
                          MR Inc.
                          {/* "I've been in the field for years, this is the only site I will use." -M.R. */}
                          </div>
                          <div className='i-title-item'> 
                          S.W. LLc.
                          {/* "LOVE this site, it's so clean and user friendly." -S.W. */}
                          </div>
                        
                      </div>
  
                  </div>
                  <p className='i-description'>
                      The only user friendly project management site.  
                  </p>
              </div>
          
          </div>
          <div className="i-right"> 
         
            
              <div className='i-bg'></div>
              <img src={logo} alt='My avatar' className='i-img' />
          </div>
        
      </div>
    );
  }