import Link from "next/link";

export default function NotFound() {
    return (
      <div className="notfound-container" >
        <h1 className="notfound-heading" >404</h1>
        <p className="notfound-text"  >Oops! Page not found.</p>
        <Link href="/" className="notfound-link" >Go back home</Link>
      </div>
    );
  }
  
  const styles = {
    
  };
  