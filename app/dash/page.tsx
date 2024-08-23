import React from 'react'

export const dynamic = 'force-dynamic'

export default async function page() {
   const res = await fetch('https://qa.uhaka.com/load?uuid=066428bc-89ef-4156-b0ca-3536cb138d5b',{
    // cache:'no-store'
    next: {revalidate:10},
   })

   const data = await res.json()

    return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
