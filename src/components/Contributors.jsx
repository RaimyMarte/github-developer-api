import { useParams } from "react-router-dom"
import { useFetch } from "../hooks"
import { Loading } from "./Loading"
import { ContributorsCard } from "./ContributorsCard"
import { useState } from "react"

export const Contributors = () => {

    const { id } = useParams()
    const { data, isLoading } = useFetch(`https://api.github.com/repositories/${id}/contributors`)

    const [userCount, setUserCount] = useState(10);

    const handleViewMore = () => {
        setUserCount(prevCount => prevCount + 5);
    };


    return (
        <>
            <h1>Top Contributors</h1>
            {
                isLoading
                    ? <Loading />

                    :
                    data.slice(0, userCount).map(user => (
                        <ContributorsCard
                            key={user.id}
                            {...user}
                        />
                    ))
            }
            <button
                className="btn btn-primary"
                onClick={handleViewMore}
            >
                View More
            </button>
        </>
    )
}