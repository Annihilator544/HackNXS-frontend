'use client'

import Header from "@/components/Header";
import { Table, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import json from "../../jsconfi.json";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            src={"https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               Welcome to Fin-awww-nce
            </h1>
            <p className="mb-8 leading-relaxed">
              the fastest, lightest, the easiest way to get the market sentiment of the stocks you are interested in and an enitirely new way to manage your finance and Mutual funds.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg" onClick={()=>{window.location.pathname ="/dashboard"}}>
                Dashboard
              </button>
              
            </div>
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Last Price</TableHead>
                    <TableHead>Market Time</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Change %</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                  {json.map((data) => (
                    <TableFooter key={data.Symbol}>
                      <TableRow>
                      <TableCell>{data.Symbol}</TableCell>
                      <TableCell>{data.Name}</TableCell>
                      <TableCell>{data["Last Price"]}</TableCell>
                      <TableCell>{data["Market Time"]}</TableCell>
                      <TableCell>{data.Change}</TableCell>
                      <TableCell>{data["% Change"]}</TableCell>
                      <TableCell>{data.Volume}</TableCell>
                      <TableCell>{data["Market Cap"]}</TableCell>
                      </TableRow>
                    </TableFooter>
                  ))}

              </Table>
          </div>
        </div>
      </section>
    </div>
  );
}
