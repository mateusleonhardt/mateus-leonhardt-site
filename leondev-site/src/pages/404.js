import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/Layout';

import './404.scss';

import laptopImg from '../assets/laptop.png'; 

export default function Portfolio({ pageContext }) {
    return (
        <Layout context={pageContext} crumbLabel="404">
            <div id="page-not-found">
                <div className="message">
                    <h1>Oops! Você fez de novo...</h1>
                    <h2>A página que você estava procurando não existe.</h2>
                    <Link to="/" className="main-btn">Me leve de volta</Link>
                </div>
                <div className="image">
                    <img src={laptopImg} alt="laptop"/>
                    <div class="glitch">404</div>
                </div>
            </div>
        </Layout>
    );
}