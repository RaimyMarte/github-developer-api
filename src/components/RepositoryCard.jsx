import { Link } from "react-router-dom"

export const RepositoryCard = ({ full_name, language, description, html_url, open_issues, stargazers_count, id, owner }) => {
    return (

        <div className="card col-md-5 col-10">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-8">
                            <h4 className="card-title"><a href={html_url} target="_blank">{full_name}</a></h4>
                        </div>
                        <div className="col-md-3 col-4">

                            <img src={owner.avatar_url} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>


                    <div className="row mt-3">
                        <p className="card-text col-md-9 col-8">{description}</p>
                    </div>

                    <div className="row mt-5">
                        <p className="card-text col-auto">{language}</p>
                        <p className="card-text col-auto"><i className="bi bi-star-fill"></i> {stargazers_count}</p>
                        <p className="card-text col-auto"><i className="bi bi-exclamation-triangle-fill"></i> {open_issues}</p>
                        <a href={owner.html_url} target="_blank" className="col-auto"><i className="bi bi-github text-black"></i></a>

                    </div>
              
                    <Link to={`/repo/${id}`} className="btn btn-primary mt-3">Top Contributors</Link>

                </div>
            </div>
        </div>

    )
}