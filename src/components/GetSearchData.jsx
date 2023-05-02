import { useFetch } from "../hooks"
import { RepositoryCard, Loading } from "./"

export const GetSearchData = ({ searchText }) => {

  const { data, isLoading } = useFetch(`https://api.github.com/search/repositories?q=${searchText}&per_page=6`)
  const { items } = !!data && data

  return (
    <>

      {
        isLoading
          ? <Loading />

          :
          <div className="container">
            <div className="row justify-content-center gap-4 mb-3">
              {
                items.map(item => (
                  <RepositoryCard
                    key={item.id}

                    {...item}
                  />
                ))
              }
            </div>
          </div>

      }

    </>
  )
}

