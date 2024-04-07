"use client";
import MutualFundsReturns from "@/components/MutualFundsReturns";
import PFChart from "@/components/PFChart";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { expense, Tags } from "@/models";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Label,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

function Page() {
  const [tf, settf] = useState<number | null>();
  const [mf, setmf] = useState<number | null>();
  const [income, setIncome] = useState(0);
  const [amount, setAmount] = useState<number | null>(0.2 * income);
  const [expenditure, setExpenditure] = useState(0);
  const [expenses, setExpenses] = useState<expense[]>([]);
  const availableTags: Tags[] = [
    "Fuel",
    "EMI",
    "Bills",
    "Family",
    "Personal",
    "Misc",
    "Others",
  ];
  const [tags, setTags] = useState<Tags>("Personal");
  const onAddClicked = () => {
    if (tf) {
      setIncome(income + tf);
      setAmount(0.2 * income);
    }
  };

  const onSubtractClicked = () => {
    if (tf) {
      setExpenditure(expenditure + tf);
      setExpenses([...expenses, { amount: tf, tag: tags }]);
    }
  };
  return (
    <div>
      <div className=" flex flex-row flex-wrap justify-evenly p-20">
        <Card>
          <CardHeader>
            <CardTitle>Your Income: {income}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Expenditure: {expenditure}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Balance: {income - expenditure}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Minimum you should invest: {amount}</CardTitle>
          </CardHeader>
        </Card>
      
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/3">
          <Input
            onChange={(e) => {
              settf(parseInt(e.target.value));
            }}
            value={tf ? tf : 0}
          />
          <div className="flex flex-row justify-evenly mt-5">
            <Button
              onClick={() => {
                onAddClicked();
              }}
            >
              Add
            </Button>
            <Button
              onClick={() => {
                onSubtractClicked();
              }}
            >
              Subtract
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{tags}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border rounded-xl z-50">
                <DropdownMenuLabel className="font-bold">
                  Choose a tag
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="mt-5" />
                {availableTags.map((tag) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    key={tag}
                    onSelect={() => {
                      setTags(tag);
                    }}
                  >
                    {tag}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full flex justify-center items-center">
        <PFChart data={expenses} />
      </div>
      <div className=" w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-1/3">
          <Label>
            Enter the number of months you want to invest in mutual funds
            (default is 6 if you dont change)
          </Label>
          <Input
            type="number"
            value={mf ? mf : 0}
            onChange={(e) => setmf(parseInt(e.target.value))}
            placeholder="Enter the number of months you want to invest in Mutual Funds"
          />
          <Label>Enter the amount you want to SIP in Mutal Funds</Label>
          <Input
            type="number"
            value={amount ? amount : 0}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter the amount you want SIP in Mutual Funds"
          />
        </div>
      </div>
      <MutualFundsReturns
        amount={amount ? amount : 0.2 * income}
        months={mf ? mf : 6}
      />
    </div>
  );
}

export default Page;
