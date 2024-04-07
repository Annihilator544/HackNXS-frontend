'use client'
import Navbar from "@/components/Navbar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react";

function Dashboard(){
    const companies = ['INFY'];
    const company_data: any[]=[]
    const [companyData, setCompanyData] = useState<any[]>([]);
    async function data(companies:string[]) {
        await Promise.all(companies.map(async (ticker)=>{
            const response = await fetch(`http://127.0.0.1:5000/getlivedata/${ticker}`);
            const data = await response.json();
            if(data){
            company_data.push(data);}
        }));
        setCompanyData(company_data)
        
    }
    data(companies)
    console.log(companyData)
    return(
        <>
        <Navbar/>
        <Table>
            <TableHeader >
                <TableRow >
                    <TableHead>
                        Stock name
                    </TableHead>
                    <TableHead>
                        Recent Data
                    </TableHead>
                    <TableHead>
                        Base Price
                    </TableHead>
                    <TableHead>
                        Last Price
                    </TableHead>
                    <TableHead>
                        Percentage change
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {companyData.map((company)=>{
                    return(
                    <TableRow key={company['stockName']}>
                        <TableCell>{company['stockName']}</TableCell>
                        <TableCell>{company['stockName']}</TableCell>
                        <TableCell>{company['basePrice']}</TableCell>
                        <TableCell>{company['lastPrice']}</TableCell>
                        <TableCell>{company['pChange']}</TableCell>
                    </TableRow>)
                })}
            </TableBody>
        </Table>
        </>
    )
}
export default Dashboard