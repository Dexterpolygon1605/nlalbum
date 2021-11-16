import React from "react";

const Profile = ({ name, favorites, email }) => {
    return (
        <div className="mt6 tl">
            <div class="pa3 pa5-ns">
                <h4 class="f3 fw6">{name}</h4>
                <dl class="f4 lh-title mv2">
                    <dt class="dib b">Email:</dt>
                    <dd class="dib ml1 gray">{email}</dd>
                </dl>
                <dl class="f4 lh-title mv2">
                    <dt class="dib b">Favorites songs:</dt>
                    <dd class="dib ml1 gray">{favorites}</dd>
                </dl>
            </div>
        </div>
    )
}

export default Profile;