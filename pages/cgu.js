
import utilStyles from "./index.module.css";
import { getPageData } from "../lib/markdown";

export async function getStaticProps() {
  const pageData = await getPageData("cgu");

  return {
    props: {
        pageData
    }
  };
}
export default function Cgu({ pageData }) {
    return (
      <div>
        <article>
            <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
            <div className={utilStyles.lightText} dangerouslySetInnerHTML={{ __html : pageData.contentHtml}}/>
        </article>
      </div>
    );
}