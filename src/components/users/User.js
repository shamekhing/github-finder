import React, { useEffect,Fragment,useContext } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos, {} from '../repos/Repos'

import GithubContext from '../../context/gihub/githubContext'

const User = ({match}) => {
    
    const githubContext = useContext(GithubContext);
    const {user, loading, getUser, getUserRepos, repos} = githubContext;
    
    useEffect(()=>{ getUser(match.params.login); getUserRepos(match.params.login); }, []);
    
    const { name, 
            avatar_url,
            location, 
            bio, 
            blog, 
            login, 
            html_url, 
            followers, 
            following,
            public_repos,
            public_gists,
            hireable, 
        } = user;
    
    

    return (
        <Fragment>
            <Link to='/' className="btn btn-light" >
                Back to Search
            </Link>
            { loading && <Spinner/>}
            Hireable: { hireable ?  <i className="fas fa-check text-success"/>: 
                                    <i className="fas fa-times-circle text-danger"/>
                    }
            <div className="card grid-2 ">
                <div className="all-center">
                    <img src={avatar_url} 
                            alt="" 
                            className="round-img"
                            style={{width:'150px'}}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p> 
                    </Fragment>}
                    <a href={html_url} target="_blank" className="btn btn-dark my-1">
                        <i className="fab fa-github"/> Profile</a>
                    <ul>
                        <li>
                            <b>
                                Username:
                            </b> {login}</li>
                        <li>
                            {blog && (
                            <Fragment>
                                <b>Website:</b> 
                                <a className="text-success" href={blog}>
                                    {blog}
                                </a>
                            </Fragment>) }
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos}/>
        </Fragment>
    )
}

export default User
