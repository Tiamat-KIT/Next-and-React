import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Next from 'next';
import Link from 'next/link';

function Home(){
    return(
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/myintro">
                    <a>introduction</a>
                </Link>
            </li>
        </ul>
    )
}

export default Home