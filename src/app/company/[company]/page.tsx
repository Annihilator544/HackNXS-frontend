'use client'
import { useParams } from "next/navigation"
import { useRouter } from "next/router"

function Company(){
    const { company }: {company : string} = useParams();
    return(<>
        {company}
    </>)
}
export default Company