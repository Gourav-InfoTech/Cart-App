import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    function backToTop(){
        window.scrollTo({top: 0, behavior:"smooth"})
    };
    
  return (
    <FooterDiv>
        <div className='main flex justify-evenly items-center'>
            <div className="logo w-[160px]">
                <img src="/Cartit.png" alt="logo" />
            </div>
            <div className="rights">
                <p>
                &#169; {new Date().getFullYear()}; Cart It Pvt. Ltd.
                </p>
            </div>
            <div >
                <button onClick={backToTop} className='underline decoration-2 hover:decoration-indigo-500 font-semibold'>Back To Top</button>
            </div>

        </div>
    </FooterDiv>
  )
}
export default Footer;


const FooterDiv = styled.div`
padding: 20px 0px;
    
`