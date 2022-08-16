import Link from 'next/link';

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
    </>
  );
}