import React from 'react'

const Blog = () => {
    return (
        <div id="blog">
            <div className="cardContainer">
                <div 
                className="card"
                data-aos="fade-right"
                 data-aos-duration="500"
                 data-aos-delay="2000"
                >
                    <img src="/assets/img/blog_1.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                <div 
                className="card"
                data-aos="fade-up"
                data-aos-delay="2000"
                data-aos-duration="500">
                    <img src="/assets/img/blog_2.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                <div 
                className="card"
                data-aos="fade-left"
                data-aos-delay="2000"
                data-aos-duration="500"
                >
                    <img src="/assets/img/blog_3.jpg" alt=""/>
                    <h3>Vestibulum tristique nisi</h3>
                    <p>Vestibulum tristique nisi ut odio vestibulum, in efficitur ex egestas.</p>
                    <div className="readMoreCard">
                        <a href="https://facebook.com">
                            Read More
                        </a>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Blog
