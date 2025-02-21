

import './homework01.css';
import viteLogo from '../../assets/foto1.png';

function Homework01() {
    return (
        <>
            <div className="profile-card">
                <img
                    src={viteLogo}
                    alt="My Profile"
                    className="profile-image"
                />
                <h2 className="profile-name">Nadja</h2>
                <p className="profile-hobby">
                    Я увлекаюсь программированием, чтением книг и плаванием.
                    Люблю путешествовать и открывать новые места.
                </p>
            </div>
        </>
    );
}

export default Homework01;
