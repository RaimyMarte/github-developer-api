import { Link } from "react-router-dom"

export const RepositoryCard = ({ full_name, language, description, html_url, open_issues, stargazers_count, id, contributors_url }) => {

    return (
        <div className="card" style={{ width: 'auto' }} >
            <div className="card-body">
                <h5 className="card-title">{full_name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{language}</p>
                <p className="card-text">{open_issues}</p>
                <p className="card-text">{stargazers_count}</p>
                <a href={html_url} className="btn btn-primary" target="_blank">{html_url}</a>
                <Link to={`/repo/${id}`} className="btn btn-primary">Top Contributors</Link>
        
            </div>
        </div>
    )
}