import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main className="bg-green-50">
                {/* <p>Hello</p> */}
                <div className="bg-green-300 w-1/2 mx-auto flex p-2">
                    <h3>Create Cookie Stand</h3>
                    <Form/>
                </div>
                <h3 className="text-gray-700 mx-auto flex justify-center">Report Table Coming Soon...</h3>
                <h3 className="text-gray-700 mx-auto flex justify-center">Words words and more words</h3>
            </main>
            <footer className="bg-green-500 px-8 py-6 text-gray-700">
                <p>&copy; 2021</p>
            </footer>
        </div>
  )
}
function Header(props) {
    return <header className="bg-green-500 p-8">
        <h1 className="text-black text-4xl">Cookie Stand Admin</h1>
    </header>                             
}
function Form(props) {
    return <form onSubmit={props.onSubmit}>
        <input name="location"type="text"/>
        <button>Create</button>
    </form>
}