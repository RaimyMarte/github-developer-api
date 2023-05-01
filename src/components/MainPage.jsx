import { useState } from "react"
import { Form, GetSearchData } from "./"


export const MainPage = () => {

  const [search, setSearch] = useState([])

  const onNewSearch = (newSearch) => setSearch(newSearch)

  return (
    <>
      <Form onNewSearch={onNewSearch} />

      {
        search.length > 0 && (<GetSearchData searchText={search} />)
      }

    </>

  )
}

