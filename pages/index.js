import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import ReportTable from "../components/table"

export default function Home() {

    const [stands, setStand] = useState([]);

    function standHandler(standInfo) {
        const newStands = [...stands, standInfo]
        setStand(newStands)
    }


    return (
        <div>
            <Head><title>Cookie Stand Admin</title></Head>
            <Header />
            <Main onStandCreate={standHandler}/>
            <ReportTable stands={stands}/>
            <Footer stands={stands}/>
        </div>
    )
}
