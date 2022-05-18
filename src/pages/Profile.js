import { useState, useEffect } from "react"
import Link from "../components/Link"
import List from "../components/List"

const Profile = ({ username }) => {

  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const getProfile = async () => {
      const profile =  await fetch(`https://api.github.com/users/${username}`)
      const results = await profile.json()
      setLoading(false)
      setProfile(results)
    }

    getProfile()
  }, [username])

  const items = [
    {
      field: 'html_url',
      value: <Link
        className="App-link"
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        title={profile.html_url}
      />
    },
    {
      field: 'repos_url',
      value: <Link
        className="App-link"
        href={profile.repos_url}
        target="_blank"
        rel="noopener noreferrer"
        title={profile.repos_url}
      />
    }
  ]

  return (
    <>
      {loading ? <span>loading...</span> : (
        <>
          <List
            items={items}
          />
        </>
        )
      }
    </>
  )
}

export default Profile
