export const ContributorsCard = ({ login, avatar_url, html_url, contributions }) => {

    return (
        <div className="card col-md-5 col-10">
            <div className="row">
                <div className="col-4">
                    <img src={avatar_url} className="img-fluid rounded-start" alt={login} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"><a href={html_url} className="" target="_blank">{login}</a></h5>

                        <p className="card-text">{contributions} Contributions</p>
                    </div>
                </div>
            </div>
        </div >
    )
}