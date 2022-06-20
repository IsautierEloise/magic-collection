import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import LocationCard from "../components/locationCard";
import axios from "axios";
import style from "./index.module.css";

import { getPageData } from "../lib/markdown";


export async function getStaticProps() {
const { data } = await axios.get("https://eldenring.fanapis.com/api/locations?limit=177");
const pageData = await getPageData("gallery");

  return {
    props: {
      locations: data,
      pageData: pageData
    }
  };
}

export default function Home({ locations, pageData }){
  const [page, setPage] = useState(1);
  const [locationsPaginate, setLocationsPaginate] = useState([]);
  const router = useRouter()
  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`?page=${value}`, undefined, { shallow: true });
  }

  useEffect(() => {
    if(locations && page > 0){
      setLocationsPaginate(locations.data.slice((page - 1) * 25, page * 25))
    }
  }, [locations.data, page])

 

  return ( 
  <div>
    <div>
      <h1 className={style.headingXl}>{pageData.title}</h1>
    </div>
    <div className={style.cards}>
      {locationsPaginate.map(({name, id, image, description, region}) =>
        <LocationCard id={id} image={image} name={name} region={region} description={description} />
      )}
      </div>
      <div className={style.pagination}>
        <Pagination count={(locations.data.length / 25)} 
                    page={page}  
                    onChange={handlePaginationChange} />
      </div>
  </div>
)}
