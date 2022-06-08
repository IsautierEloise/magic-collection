import {useState} from "react"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import style from "../pages/index.module.css";

const LocationCard = ({image, description, id, name}) => {
    const [error, setError] = useState(false)
    const config = {
        type: "spring",
        damping: 20,
        stiffness: 100
      };

    if(!image || !description || error){
        return null
    }
  
    return <motion.div key={id} 
        transition={config}
        initial={{ scale: .75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        className={style.card}>

        <Link href={`/locations/${id}`}>
        <a>
            <Image loading="lazy" width="100%" height="50" layout="responsive" objectFit="cover" 
            onError={() => setError(true)} className={style.cardImg} src={image} alt="" />
        </a>
        </Link>
        <h2 className={style.cardTitle}>{name}</h2>
    </motion.div>

}
 export default LocationCard