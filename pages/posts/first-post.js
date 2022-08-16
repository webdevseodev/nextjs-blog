import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
    
      <h2>
        <Link href="/">
        {/* <a className="foo" target="_blank" rel="noopener noreferrer">
        Back to home
      </a> */}
      Back to home
            </Link>
        
      </h2>

      
    
      <Image

src="/images/profile.jpg" // Route of the image file
height={144} // Desired size with correct aspect ratio
width={144} // Desired size with correct aspect ratio
alt="Your Name"
/>



    </>





  );
}