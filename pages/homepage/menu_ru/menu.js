import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";




export default function Menu() {
  return (
    <Layout>
     <div className={utilStyles.menu}>
      <div className={utilStyles.menu}>
      <h2>
        <Link href="/">На главную</Link>
      </h2>
      </div>
      <div className={utilStyles.menu}>
      <h2>
        <Link href="/homepage/menu_ru/o_boge">О Боге</Link>
      </h2>
      </div>
      <div className={utilStyles.menu}>
      <h2>
        <Link href="/homepage/menu_ru/10zapovedej">10 заповедей</Link>
      </h2>
      </div>
      </div>
    </Layout>
  );
}
