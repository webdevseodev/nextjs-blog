import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <>
      {/* <h1>Меню</h1> */}
    
      <h2>
        <Link href="/">
        {/* <a className="foo" target="_blank" rel="noopener noreferrer">
        Back to home
      </a> */}
      На главную
            </Link>
           
      </h2>
      <h2>
<Link href="/homepage/menu_ru/o_boge">
  {/* <a className="foo" target="_blank" rel="noopener noreferrer">
  this page!
      </a> */}
О Боге

    </Link>

</h2>

      
    
      {/* <Image

src="/images/profile.jpg" // Route of the image file
height={144} // Desired size with correct aspect ratio
width={144} // Desired size with correct aspect ratio
alt="Your Name"
/> */}



    </>





  );
}