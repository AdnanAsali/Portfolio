import React from 'react';
import RepoCard from './RepoCard';

const RepoList = (props) => 
{
    const repos = props.repos.map((repo) => 
    {
        return <RepoCard
            description={ repo.description }
            name={ repo.name }
            id={ repo.id }
            key={ repo.id }
            url={ repo.clone_url }
            language={ repo.language }
            pushedAt={ repo.pushed_at }
        />
    });

    console.log('this is from the repo list componenet')
    console.log(props);

    return (
        <div id="projects" className="cardContainer">
            { repos }
        </div>
    );
}

export default RepoList;