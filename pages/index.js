import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is an admin dashboard project" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className=" bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
