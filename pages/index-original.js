import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import CookieStandHeader from "../components/cookie-stand-header"
import CookieStandAdmin from "../components/cookie-stand-admin"
import CookieStandFooter from "../components/cookie-stand-footer"
import CookieStandTable from "../components/cookie-stand-table"

export default function Home() {

    const [stands, setStand] = useState([]);

    function standHandler(standInfo) {
        const newStands = [...stands, standInfo]
        setStand(newStands)
    }


    return (
        <div>
            <Head><title>Cookie Stand Admin</title></Head>
            <CookieStandHeader />
            <CookieStandAdmin onStandCreate={standHandler}/>
            <CookieStandTable stands={stands}/>
            <CookieStandFooter stands={stands}/>
        </div>
    )
}
