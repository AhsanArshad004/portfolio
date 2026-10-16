import { useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white">
      <h1>Project Detail: {id}</h1>
    </div>
  )
}
