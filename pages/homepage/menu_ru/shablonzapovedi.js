import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";




export default function PervajaZapoved() {
  return (
    <Layout>
        <div className={utilStyles.menu}> <h1>1 заповедь</h1></div>
      <div className={utilStyles.menu}>
      

      <div className={utilStyles.menu}>
      <h2>
        <Link href="/">На главную</Link>
      </h2>
      </div>
      <div className={utilStyles.menu}>
      <h2>
        <Link href="/homepage/menu_ru/10zapovedej">
          {/* <a className="foo" target="_blank" rel="noopener noreferrer">
  this page!
      </a> */}
          Назад
        </Link>
      </h2>
      </div>
      </div>
    </Layout>
  );
}
