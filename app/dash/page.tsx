import React from 'react'

export const dynamic = 'force-dynamic'

export default async function page() {
  //  const res = await fetch('',{
    // cache:'no-store'
    // next: {revalidate:10},
  //  })

  //  const data = await res.json()

    return (
    <div>
      {JSON.stringify({'name':'john'})}
    </div>
  )
}
