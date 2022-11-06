import React from "react"
import { useLocation } from "react-router-dom"
import { format } from "date-fns";

// import '../css/SingleRepo.css'

export default function Repo() {
  const myRepos = useLocation()
  const { details } = myRepos.state
  console.log(details)
  return <>

    <article className="repo-container">
      <div>
        <img src={details.owner.avatar_url} alt={details.owner.login} className="profile-img" />
              <ul>
              <li className="onerepo-list">
            <h2>{details.owner.login}</h2>
          </li>
          <li>
            <p className="date-info">
              This repository was created on{" "}
              {format(new Date(details.created_at), "dd MMMM yyyy")} by{" "}
              {details.owner.login}
            </p>
          </li>
          
          <div>
            <p>{details.name}</p>
            {details.private ? (<p> Private</p>) : (<p> Public</p>)}
          </div>
        </ul>
      </div>

      <div className='singlerepo'>
        <a
          className="text-sm"
          href={details.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View Repo
        </a>
        <ul className='repo-count'>
          <li className='li-item'>{details.stargazers_count.toLocaleString()} stars</li>
          <li className='li-item'>{details.watchers_count.toLocaleString()} Watchers</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>{details.language}</li>
          {details.topics && details.topics.map((topic, index) => (
            <React.Fragment key={index}>
              <li>
                {topic}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </article>
  </>

}