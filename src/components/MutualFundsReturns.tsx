"use client";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function MutualFundsReturns({
  amount,
  months,
}: {
  amount: number;
  months: number;
}) {
  const [returns, setReturns] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(0);
  const ids = [101065, 118666];

  async function getReturns() {
    setReturns([]);
    let newReturns: any[] = [];
    await Promise.all(
      ids.map(async (id) => {
        const response = await fetch(
          `http://127.0.0.1:5000/getsipreturns/${amount}/${id}/${months}`
        );
        const data = await response.json();
        if (data) {
          console.log("one now ");
          console.log(data);
          newReturns.push(data);
        }
      })
    );
    setReturns(newReturns);
  }

  useEffect(() => {
    getReturns();
  }, [refresh]);
  return (
    <div>
      <div className="flex justify-center items-center mt-20">
      <Button
        onClick={() => {
          setRefresh(refresh + 1);
        }}
        >
        Refresh Mutual Funds Returns
      </Button>
        </div>
      <div className="flex flex-row flex-wrap w-full">
        {returns.map((r) => (
          <div key={r}>
            <Card className="bg-slate-200  m-10">
              <CardHeader>
                <CardTitle>{r.meta.fund_house} </CardTitle>
                <CardDescription>{r.meta.scheme_category}</CardDescription>
                <CardContent>
                  <p>returns: {r.current_amt}</p>
                  <p>invested: {months * amount}</p>
                  <p>profit: {parseInt(r.current_amt) - months * amount}</p>
                  <p>
                    profit % :{" "}
                    {(
                      ((parseInt(r.current_amt) - months * amount) * 100) /
                      (months * amount)
                    ).toFixed(2)}{" "}
                    %
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MutualFundsReturns;
