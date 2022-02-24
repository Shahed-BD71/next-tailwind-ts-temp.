import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Home from "../components/Home";

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>
        <div className="flex flex-row">
          <span>Arrange By &nbsp;</span>
          <a
            className="text-red-700 font-bold"
            href="https://github.com/Shahed-BD71"
          >
            {" "}
            ShahedBD71
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;