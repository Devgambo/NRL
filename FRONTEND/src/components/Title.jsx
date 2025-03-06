import React, { useRef } from "react";
import { motion , useInView} from "framer-motion";

function Title({title}) {

    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true });

    return (
        <div ref={ref}>
            <motion.h1
                initial={{ opacity: 0, y: 50, size:0}}
                animate={inView ? { opacity: 1, y: 0, size:1} : {}}
                transition={{ duration: 1.25 }}
                className={`text-5xl text-white font-extrabold m-10`}
            >
                {title}
            </motion.h1>
        </div>
    );
}

export default Title;

