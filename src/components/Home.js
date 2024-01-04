import { Link } from "react-router-dom";


export function Home() {
    return (
      <div>
        <h1>This is the home page</h1>
        <Link to="addsong">Click to view our addsong page</Link>
        <Link to="viewsong">Click to view our viewsong page</Link>
      </div>
    );
  }
  
 