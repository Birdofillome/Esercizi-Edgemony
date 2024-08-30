import Link from 'next/link'
import React from 'react'

function ButtonBack() {
return (
    <Link href={`/`}><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Back</button></Link>
)
}

export default ButtonBack