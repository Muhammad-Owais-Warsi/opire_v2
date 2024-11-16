import "../card/style.css"

interface OpireStatsTypes {
    issues:number;
    bounties:number;
    challenges:number;

}

export default function OpireStats({issues,bounties,challenges}:OpireStatsTypes) {
    return (
        <>
            <div className="stat-item">
                <p className="stat-value">{issues}</p>
                <p className="stat-label">Issues Resolved</p>
            </div>
            <div className="stat-item">
                <p className="stat-value">${bounties}</p>
                <p className="stat-label">Bounties Earned</p>
            </div>
            <div className="stat-item">
                <p className="stat-value">{challenges}</p>
                <p className="stat-label">Challenges Won</p>
            </div>
        </>
    )
}