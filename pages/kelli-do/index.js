import { NextSeo } from "next-seo";

export default function KelliDo() {
  return (
    <div className="justify-center flex flex-row">
      <NextSeo
        title="Kelli Landry - Kelli Do"
        description="Kelli Do, a page for Kelli Landry showcasing her skills and services for trade, barter, or payment."
        canonical="http://kellilandry.dev/kelli-do"
      />
      <div className="flex flex-row p-4">
        <section className="">
          <h1 className="text-indigo-500 dark:text-indigo-200 text-2xl py-4 ">
            what kelli do
          </h1>
        </section>
      </div>
    </div>
  );
}