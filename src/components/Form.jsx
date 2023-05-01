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
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 col-10">
                    <form
                        onSubmit={onSearchSubmit}
                    >
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Search GitHub"
                            name="searchText"
                            value={searchText}
                            onInput={onInputChange}
                        />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary mt-2 justify-self-center"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}