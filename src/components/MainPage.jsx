import { useState } from "react"
import { Form, GetSearchData } from "./"

export const MainPage = () => {

  const [search, setSearch] = useState([])

  const onNewSearch = (newSearch) => setSearch(newSearch)

  return (
    <>
    <h1 className="text-center">GitHub API</h1>
      <Form onNewSearch={onNewSearch} />

      {
        search.length > 0 && (<GetSearchData searchText={search} />)
      }


    </>

  )
}

