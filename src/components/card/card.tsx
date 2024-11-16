import OpireSocial from "../socials/social";
import OpireStats from "../stats/stats";
import OpireUser from "../user/user";
import "./style.css";

const user = {
    avatar:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    name:"Ondřej Page Bárta",
    title:"Developer Advocate",
    issues:120,
    bounties:3400,
    challenges:15,
    isTopContributor:true

}

export default function OpireCard() {
    return (
        <div className="dev-card">
            <div className="avatar-container">
                <img 
                    src={user.avatar} 
                    alt="User Avatar" 
                    className="avatar"
                />
            </div>
            <div className="info-container" >
                <OpireUser name={user.name} title={user.title} className={"info"}/>
                <OpireSocial />
                <div className="stats">
                    <OpireStats issues={user.issues} bounties={user.bounties} challenges={user.challenges} />
                </div>
            </div>
            {/* <div>
                <OpireFooter/>
            </div> */}
        </div>
    );
}
