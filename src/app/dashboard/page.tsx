'use client'
import Navbar from "@/components/Navbar"
import ApexCharts from "@/components/ui/ApexCharts";
import ApexAreaChart from "@/components/ui/ApexCharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Dashboard(){
    const companies = ['INFY', 'AAPL', 'MSFT','TCS','GOOGL','AMZN','FB','WIPRO','HCLTECH','NSE: RELIANCE'];
    const [companyData, setCompanyData] = useState<any[]>([]);

    const fetchData = async (company: string) => {
        const response = await fetch(`http://127.0.0.1:5000/gethistoricaldata/${company}`);
        const data = await response.json();
        setCompanyData((prevData) => [...prevData, data]);
    };

    useEffect(() => {
        companies.forEach((company) => {
            fetchData(company);
        });
    }, []);
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
                {companyData.filter((company, index, self) => self.findIndex(c => c.stockName === company.stockName) === index).map((company)=>{
                    return(
                    <TableRow key={company.stockName}>
                        <TableCell>{company.stockName}</TableCell>
                        <TableCell><ApexCharts xaxis={company.date} series={company.closePrice}/></TableCell>
                        <TableCell>{company.basePrice}</TableCell>
                        <TableCell>{company.lastPrice}</TableCell>
                        <TableCell>{company.pChange}</TableCell>
                    </TableRow>)
                })}
            </TableBody>
        </Table>
        </>
    )
}
export default Dashboard
