import { useParams } from "react-router-dom"
import { useFetch } from "../hooks"
import { Loading } from "./Loading"
import { ContributorsCard } from "./ContributorsCard"

export const Contributors = () => {

    const { id } = useParams()
    const { data, isLoading } = useFetch(`https://api.github.com/repositories/${id}/contributors?per_page=10`)
console.log(data)
    return (
        <>
            <h1>Top Contributors</h1>
            {
                isLoading
                    ? <Loading />

                    : data.map(user => (
                        <ContributorsCard
                            key={user.id}

                            {...user}
                        />
                    ))
            }
        </>
    )
}