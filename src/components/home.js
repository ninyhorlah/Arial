import React, { useEffect, useState } from 'react';
import { useTransition, animated, config } from 'react-spring';

let Home = () => {
    const slides = [
        {id: 0, url: '/assets/img/blog_1.jpg'},
        {id: 1, url: '/assets/img/blog_2.jpg'},
        {id: 2, url: '/assets/img/blog_2.jpg'}
    ]

    const[index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(() => void 
    setInterval(() => set(state => (state + 1) % 4),
    2000), [])

    return transitions.map(({ item, props, key }) => (
        <animated.div 
        key={key}
        className="bg"
        style={{...props, backgroundImage: `${item.url}`}}
        />
    ))
    // (
    //     <div>
    //         <div className="text">
    //             <p><span>W</span>edding</p>
    //             <h4>Jane & Joe</h4>
    //             <p>25. Jun. 2019</p>
    //             <p>EXPIRED</p>
    //         </div>
            
    //     </div>
    // )
}
export default Home;