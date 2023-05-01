import { useFetch } from "../hooks"
import { RepositoryCard } from "./RepositoryCard"
import { Loading } from "./Loading"

export const GetSearchData = ({ searchText }) => {

  const { data, isLoading } = useFetch(`https://api.github.com/search/repositories?q=${searchText}&per_page=6`)
  const { items } = !!data && data

  return (
    <>

      {
        isLoading
          ? <Loading />

          : items.map(item => (
            <RepositoryCard
              key={item.id}

              {...item}
            />
          ))
      }

    </>
  )
}

