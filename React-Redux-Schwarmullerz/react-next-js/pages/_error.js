import React from 'react';
import Link from 'next/link';
const errorPage = () => (
    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Try again later <Link href="/"><a>Going Back</a></Link></p>
    </div> 
);

export default errorPage;