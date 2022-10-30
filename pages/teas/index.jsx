/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({notes}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Teas</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div sx={{width: '33%', p: 2}} key={note.id}>
            <Link href="/teas/[id]" as={`/teas/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/teas`)
  const {data} = await res.json()

  return {
    props: {notes: data}
  }
}
