import React from "react";
import './styles.css';
import RankingList from "../rankingList/index";
import Description from "../description/description";
import Signup from "../signup";

function Banner(props) {

    return (
        <>
            <main>
                <section className="banner">
                    <section className="banner-left">
                        <RankingList />
                    </section>
                    <section className="banner-center"></section>

                    <section className="banner-right">
                        {props.openSignup ?
                        <Signup onClickCancel={props.onClickCancel} />
                        :
                        <Description />
                        }
                    </section>

                </section>
            </main>
        </>
    );
}

export default Banner;