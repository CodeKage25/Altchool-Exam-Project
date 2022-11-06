import React from "react";
import User from "./User";
import {Link} from 'react-router-dom';

const Users = () => {

    const RepoMapped = User.map(repo => <Link key={repo._id} to={`/products/${repo._id}`}>{repo.name}</Link> )
    return (
        <div>
            {RepoMapped}
        </div>
    )
};

export default Users;