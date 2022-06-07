import React, { FC, ReactElement, useState } from 'react';

type ChildProps = {
    name: string,
    id: number,
    bio?: string,
  }

const Child: FC<ChildProps> = ({ name, id, bio = 'Bio empty' }) => {
    const [car] = useState("Mazda");

    return (
        <div>
        <h2>Name: {name}, Id: {id}</h2>
        <p>{bio}</p>
        <p>{car}</p>
        </div>
    )
};

export default Child;