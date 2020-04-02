import React from 'react'
import styled from 'styled-components'

import { Header, Text } from 'shared'

// [{…}]
// 0:
// id: 1
// name: "This is a test."
// is_published: true
// date_created: "2020-04-02"
// category: [{…}]
// link: [{…}]
// description: "This is a game."
// __proto__: Object
// length: 1

type ActivityType = 'game' | 'chat'

type Activity = {
    name: string
    link: {
        name: string
        url: string
        id: number
    }[]
    description: string
    hasCost: boolean
    types: ActivityType[]
}

const ActivityCard = styled(({ name, description, link, className }: Activity & { className: string }) => {
    return <div className={className}>
        <Header size="medium">{name}</Header>
        {link.map(({ name, url, id }) => <a key={id} href={url}>{name}</a>)}
        <Text>{description}</Text>
    </div>
})`
    background-color: var(--accent-color);
    border-radius: 15px;
    padding: 15px;
`

export default ActivityCard