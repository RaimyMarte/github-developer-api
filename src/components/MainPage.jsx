import { useState } from "react"
import { Form } from "./Form"
import { GetSearchData } from "./GetSearchData"

export const MainPage = () => {


  // const { data } = useFetch(searchText)
  const [search, setSearch] = useState([])

  const onNewSearch = (newSearch) => {
    setSearch(newSearch)
  }


  return (
    <>
      <Form onNewSearch={onNewSearch} />

      {
        search.length > 0 && (<GetSearchData searchText={search} />)
      }

    </>

  )
}

