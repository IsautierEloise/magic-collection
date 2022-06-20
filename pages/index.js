import utilStyles from "./index.module.css";
import Link from "next/link";

import { getPageData } from "../lib/markdown";

export async function getStaticProps() {
  const pageData = await getPageData("index");

  return {
    props: {
        pageData
    }
  };
}

export default function Index({ pageData }) {
  return (
    <div>
      <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
      <div className={utilStyles.lightText}>
        {pageData.subtitle}
      </div>
      <p>
        {pageData.description}
      </p>
      <Link href='/gallery/'>
        <button className={utilStyles.buttonPrimary}>
          {pageData.buttonText}
        </button>
      </Link>
    </div>
  );
}
