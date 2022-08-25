import type { NextPage } from "next";
import Head from "next/head";
import CustomLink from "../components/common/CustomLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Study Mate</title>
        <meta name="description" content="Study Mate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="h-[calc(100vh-3rem)] flex items-center justify-center bg-cover bg-center bg-black/30 bg-blend-soft-light"
        style={{
          backgroundImage: `url(./assets/study.webp)`,
        }}
      >
        <div className="container flex flex-col items-start gap-4 text-white ">
          <h1 className="text-2xl md:text-4xl font-bold max-w-xl leading-snug">
            The best study tool for busy professionals.
          </h1>
          <p className="max-w-xl leading-snug text-md md:text-lg font-semibold">
            StudyMate makes it easy for you to create flash cards, notes and
            assess your understanding of the topic at hand with quizes.
          </p>
          <CustomLink
            href="/register"
            display="btn"
            style="blue"
            className="mt-4 text-md md:text-lg font-semibold"
          >
            Get Started
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default Home;
