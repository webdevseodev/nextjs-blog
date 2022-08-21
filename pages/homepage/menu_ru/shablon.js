import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout";

export default function Shablon() {
  return (
    <Layout>
      <h1>О Боге</h1>

      <h2>
        <Link href="/">
          {/* <a className="foo" target="_blank" rel="noopener noreferrer">
        Back to home
      </a> */}
          На главную
        </Link>
      </h2>
      <h2>
        <Link href="/homepage/menu_ru/menu">
          {/* <a className="foo" target="_blank" rel="noopener noreferrer">
  this page!
      </a> */}
          Назад
        </Link>
      </h2>
    </Layout>
  );
}
