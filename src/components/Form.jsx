import { useForm } from "../hooks"

export const Form = ({ onNewSearch }) => {

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: '',
    })

    const onSearchSubmit = event => {
        event.preventDefault()
        onNewSearch(searchText)
        onResetForm()
    }

    return (
        <div className="container">
            <form
                onSubmit={onSearchSubmit}
                className="container"
            >
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="searchText"
                    name="searchText"
                    value={searchText}
                    onInput={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Search
                </button>
            </form>
        </div>
    )
}