type ActivityType = 'game' | 'chat'

type Activity = {
    title: string,
    isMature: boolean,
    hasCost: boolean,
    types: ActivityType[]
}

const activities: Activity[] =
    [
        {
            title: "Some content",
            isMature: true,
            hasCost: false,
            types: ['game'],
        },
        {
            title: "Foo Bar",
            isMature: true,
            hasCost: false,
            types: ['game'],
        },
        {
            title: "Bazz",
            isMature: true,
            hasCost: false,
            types: ['game'],
        },
        {
            title: "Some other thing",
            isMature: true,
            hasCost: false,
            types: ['chat'],
        },
    ]

export default activities
export { Activity }