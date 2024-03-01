import Image from "next/image";
import Resource from '../components/ResourceComponent';
import { Inter } from "next/font/google";
import {useEffect, useState} from "react";
import {getRequest} from "@/service/resourceservice";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [resourceList, setResourceList] = useState<any[]>([]);

    useEffect(() => {
        getAllResources();
    }, []);

    async function getAllResources() {
        const allResources = await getRequest("http://localhost:8080/resources");
        setResourceList(allResources)
    }

    return (
    <>
      This is Edugators with Next.js
        {
            resourceList.map((resource, key) => {
                // @ts-ignore
                return (
                    <div className='col-md-4' key={key}>
                        <Resource resourceId={resource.id}
                                  resourceTitle={resource.resourceTitle}
                                  resourceDesc={resource.resourceDesc}
                        />
                    </div>
                )
            })
        }

    </>
  );
}
