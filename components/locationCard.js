import {useState} from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import style from "../pages/index.module.css";

const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
};


const LocationCard = ({image, description, id, name, region}) => {
    const [error, setError] = useState(false)
    
    if(!image || !description || !region || error){
        return null
    }
  
    return <motion.div key={id}
                        transition={config}
                        initial={{ scale: .75, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        exit={{ x: 0, opacity: 0 }}
                        whileHover={{ boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" }} >
        <div className={style.card} >
            <Link href={`/locations/${id}`}>
                <a>
                    <Image loading="lazy" 
                        width="100%" 
                        height="50"
                        layout="responsive" 
                        objectFit="cover" 
                        onError={() => setError(true)} 
                        className={style.cardImg} 
                        src={image} 
                        alt="" />
                </a>
            </Link>
            <div className={style.cardText}>
                <h2 className={style.cardTitle}>{name}</h2>
                <span>Region: </span><span>{region}</span>
            </div>
        </div>
    </motion.div>
}
export default LocationCard