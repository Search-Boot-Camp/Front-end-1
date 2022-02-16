/*jshint esversion: 6 */

import React, { useState } from 'react';
import './Details.css';
import logo from './../../img/site_logo.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import styled {css} from 'styled-components';

const Details = () => {
    // const Name = styled.p`
    // `;
    const [names] = useState ([
        // 수정 예정
        { id:1, text:"교육 과정"},
        { id:2, text:"교육 기간"},
        { id:3, text:"교육 분야"},
        { id:4, text:"가격"},
        { id:5, text:"모집 여부"},
        { id:6, text:"모집 시작일"},
        { id:7, text:"온/오프라인"},
        { id:8, text:"장소"},
        { id:9, text:"지원 자격"},
        { id:10, text:"지원 과정"},
        { id:11, text:"국민내일배움카드"},
    ]);
    const [details] = useState ([
        // 수정 예정
        { id:11, text:"교육 과정"},
        { id:21, text:"교육 기간"},
        { id:31, text:"교육 분야"},
        { id:41, text:"가격"},
        { id:51, text:"모집 여부"},
        { id:61, text:"모집 시작일"},
        { id:71, text:"온/오프라인"},
        { id:81, text:"장소"},
        { id:91, text:"지원 자격"},
        { id:101, text:"지원 과정"},
        { id:111, text:"국민내일배움카드"},
    ]);

    const titleList = names.map(name => <p className="title" key={name.id}>{name.text}</p>);
    const detailList = details.map(detail => <p className="detail" key={detail.id}>{detail.text}</p>);

    return (
        <div>
        <Header />
        <div id="details-frame">
            <div id="logo-container">
                <img className="main-logo" src={logo} alt="없음"/>
            </div>
            <div id="details-bannertitle">
                <hr id="details-hr" />
                <div id="details-maintitle"> Search Boot Camp </div>
                <hr id="details-hr" />
            </div>
            <div id="bg">
                <div id="left-side">                    
                    <p id="name">
                        한 줄 이름
                    </p>
                    <img id="bcimg" src={logo} alt="" />
                </div>
                <div id="right-side">
                    <p> {titleList} </p>
                    <p> {detailList} </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Details;