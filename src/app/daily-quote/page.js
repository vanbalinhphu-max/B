export const dynamic = "force-dynamic";
import { Suspense } from "react";
import QuoteDisplay from "./QuoteDisplay";
import { LoadingFallback } from "../streaming-example/page";
import { Footer } from "./Footer";


const DailyQuotePage = async () => {
  //aaq
  return (
    <>
      <h1>Daily quote</h1>
      <Suspense fallback={<LoadingFallback />}>
        <QuoteDisplay />
      </Suspense>
      <Footer />
    </>
  );
};

export default DailyQuotePage;
