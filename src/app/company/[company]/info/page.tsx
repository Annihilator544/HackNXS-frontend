'use client'
import { useParams } from "next/navigation";
import { useQuery } from 'react-query';
import { useGlobalAppState } from "@/app/use-global-app-state";

function Info(){
    useGlobalAppState.setState({ loadingProgress: 0 })
        const { company }: {company : string} = useParams();
        const { data  } = useQuery(['company', company], async ()=>{
            useGlobalAppState.setState({ loadingProgress: 50 })
            const response = await fetch(`http://127.0.0.1:5000/getsentiment/${company}`);
            const data = await response.json();
            return data;
        })
        useGlobalAppState.setState({ loadingProgress: 100 })
    return(<>
        {data && (
                <div>
                    <h1>{data['positive']}</h1>
                    <h2>{data['negative']}</h2>
                    <h3>{data['neutral']}</h3>
                </div>
            )
        }
    </>)
}

export default Info