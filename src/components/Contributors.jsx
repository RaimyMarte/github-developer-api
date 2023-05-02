import { useParams } from "react-router-dom"
import { useFetch } from "../hooks"
import { Loading, ContributorsCard } from "./"
import { useState } from "react"

export const Contributors = () => {

    const { id } = useParams()
    const { data, isLoading } = useFetch(`https://api.github.com/repositories/${id}/contributors`)

    const [userCount, setUserCount] = useState(10);

    const handleViewMore = () => {
        setUserCount(prevCount => prevCount + 5);
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-3">Top Contributors</h1>
            <div className="row justify-content-center gap-3 mb-3 gx-0">
                {
                    isLoading
                        ? <Loading />
                        :
                        <>
                            {data.slice(0, userCount).map(user => (
                                <ContributorsCard
                                    key={user.id}
                                    {...user}
                                />
                            ))}
                            {userCount < data.length && (
                                <div className="text-center">
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleViewMore}
                                    >
                                        View More
                                    </button>
                                </div>
                            )}
                        </>
                }
            </div>
        </div>

    )
}