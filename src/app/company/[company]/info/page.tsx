"use client";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import { useGlobalAppState } from "@/app/use-global-app-state";
import Header from "@/components/Header";
import ReactApexChart from "react-apexcharts";

function Info() {
  useGlobalAppState.setState({ loadingProgress: 0 });
  const { company }: { company: string } = useParams();
  const { data } = useQuery(["company", company], async () => {
    useGlobalAppState.setState({ loadingProgress: 50 });
    const response = await fetch(
      `http://127.0.0.1:5000/getsentiment/${company}`
    );
    const data = await response.json();
    return data;
  });
  useGlobalAppState.setState({ loadingProgress: 100 });

  const options= {
    labels : ["Positive", "Negative", "Neutral" ],
    colors:["#77DD77", "#FF6961", "#AEC6CF"]
  }

  return (
    <div>
      <Header />
      <div className="flex w-full justify-center items-center">
      <div id="chart">
        {

        data?   <ReactApexChart
            options={options}
            series={[data['positive'],data['negative'],data['neutral']]}
            type="pie"
            width={500}
            />:null
        }
      </div>
      <div id="html-dist"></div>
    </div>
    </div>
  );
}

export default Info;
