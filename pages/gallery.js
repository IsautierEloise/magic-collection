import axios from "axios";
import LocationCard from "../components/locationCard";

import style from "./index.module.css";

export async function getStaticProps() {
  const { data } = await axios.get("https://eldenring.fanapis.com/api/locations?limit=100");

  return {
    props: {
      weapons: data.data
    }
  };
}

export default function Home({ weapons }) {

  return (
    <div className={style.cards}>
      {weapons.map(({name, id, image, description}) => <LocationCard id={id} image={image} name={name} description={description} />
    )}
    </div>
  );
}
