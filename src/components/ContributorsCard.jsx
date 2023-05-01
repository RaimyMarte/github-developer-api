export const ContributorsCard = ({ login, avatar_url, html_url, contributions }) => {

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={avatar_url} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <a href={html_url} className="btn btn-primary" target="_blank">{html_url}</a>
                        <p className="card-text"><small className="text-body-secondary">{contributions}</small></p>
                    </div>
                </div>
            </div>
        </div >
    )
}