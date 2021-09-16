import classes from "../styles/layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <main className={classes.main}>
      <div className="container">
        <Nav />
        {children}
      </div>
    </main>
  );
}
