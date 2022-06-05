import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Tools = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container section text-center ">
       <div data-aos="fade-down">
       <div className="title display-4">
            Only Custom And Quality Code <br />
            No Website Builders!
        </div>
       </div>
       <div data-aos="fade-up">
       <div className="text-center h5 mt-2">
            Cannot stretch more on the limitations that website builders provide, so to deliver quality product I custom
            code everything in html , css and javascript

        </div>
       </div>
    </div>
    );
}

export default Tools;