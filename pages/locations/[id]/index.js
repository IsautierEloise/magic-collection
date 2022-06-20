import axios from "axios";
import style from '../../index.module.css'

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://eldenring.fanapis.com/api/locations/?limit=100`
  );
  
  return {
    paths: data.data.map(({ id }) => `/locations/${id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await axios.get(
    `https://eldenring.fanapis.com/api/locations/${id}`
  );

  return {
    props: {
      location: data.data
    }
  };
}

export default function Location({ location }) {
  console.log(location)
  return (
    <div>
      <div className={style.detailImage}>
        <img src={location.image} alt="" />
      </div>
      <h1 className={style.headingXl}>{location.name}</h1>
      <p>
        Region:  {location.region} 
      </p>
      <p>
        {location.description} 
      </p>
    </div>
  );
}
