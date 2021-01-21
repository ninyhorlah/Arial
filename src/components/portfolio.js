import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <div className="portfolioInner">
                <div className="aboutHeader">
                    <img src="/assets/img/headline_heart.svg" alt=""/>
                    <div className="aboutText  storyText">
                        <h2><span>Our</span> Portfolio</h2>
                    </div>
                    <div className="simpleImg">
                        <img src="/assets/img/headline_simple.svg" alt=""/>
                    </div>
                </div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis massa, scelerisque vel diam non.</p>

                 <div className="portfolioTitle">
                     <div>
                        <p>ALL</p>
                     </div>
                     <div>
                        <p>WEDDING</p>
                     </div>
                     <div>
                        <p>PARTY</p>
                     </div>
                     <div>
                        <p>VIDEOS</p>
                     </div>
                 </div>

                 <div className="portfolioPictures">
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/portfolio_1.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/blog_2.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/blog_3.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/portfolio_4.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/blog_bg.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/portfolio_6.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/portfolio_7.jpg" alt=""/>
                     </div>
                     <div
                     data-aos="zoom-in"
                     >
                         <img src="/assets/img/blog_1.jpg" alt=""/>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Portfolio
