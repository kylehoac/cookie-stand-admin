import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import Header from "../components/header"
import Main from "../components/main"

class CookieStandAdmin extends React.Component {

}

export default function Home() {

    const [stand, setStand] = useState([{ "status": "pending" }]);

    function submitHandler(event) {
        event.preventDefault();
        const standInfo = {};
        standInfo.location = event.target.location.value;
        standInfo.minCustomers = parseInt(event.target.minCustomers.value);
        standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
        standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

        setStand(standInfo);
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
        </div>
    )
}