import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.menu}>
        <h2>
          <Link href="/homepage/menu_ru/menu">Русский язык</Link>
        </h2>
      </div>
    </Layout>
  );
}
