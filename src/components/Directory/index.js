import React from 'react';
import ShopWomen from '../../assets/rsz_jeffery-erhunse-vp9mrauo68c-unsplash.jpg';
import ShopMen from '../../assets/rsz_brandon-erlinger-ford-xmrl-yps7gi-unsplash.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomen})`
                    }}
                >
                    <a className="itemLink" href="/">
                        Shop Women
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}
                >
                     <a className="itemLink" href="/">
                        Shop Men
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Directory;
