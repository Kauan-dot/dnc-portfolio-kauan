import { useEffect, useState } from 'react'

interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  homepage?: string
}

function useProjectsRepos(username: string) {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
  }, [username])

  return { repos, loading }
}

export default useProjectsRepos
