"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function dashboard() {
  return (
    <>
      <Header />{" "}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stock name</TableHead>
            <TableHead>Recent Data</TableHead>
            <TableHead>Market Price</TableHead>
            <TableHead>Close Price</TableHead>
            <TableHead>Market Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Reliance</TableCell>
            <TableCell>Reliance</TableCell>
            <TableCell>2000</TableCell>
            <TableCell>3000</TableCell>
            <TableCell>50%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Reliance</TableCell>
            <TableCell>Reliance</TableCell>
            <TableCell>2000</TableCell>
            <TableCell>3000</TableCell>
            <TableCell>50%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Reliance</TableCell>
            <TableCell>Reliance</TableCell>
            <TableCell>2000</TableCell>
            <TableCell>3000</TableCell>
            <TableCell>50%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Reliance</TableCell>
            <TableCell>Reliance</TableCell>
            <TableCell>2000</TableCell>
            <TableCell>3000</TableCell>
            <TableCell>50%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
export default dashboard;
