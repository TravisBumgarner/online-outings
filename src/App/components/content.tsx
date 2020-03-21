type ActivityType = 'game' | 'chat'

type Content = {
    title: string,
    isMature: boolean,
    hasCost: boolean,
    activityTypes: ActivityType[]
}

const content: Content[] =
    [
        {
            title: "is mature no cost",
            isMature: true,
            hasCost: false,
            activityTypes: ['game'],
        },
        {
            title: "is mature no cost",
            isMature: true,
            hasCost: false,
            activityTypes: ['game'],
        },
        {
            title: "is mature no cost",
            isMature: true,
            hasCost: false,
            activityTypes: ['game'],
        },
        {
            title: "is mature no cost",
            isMature: true,
            hasCost: false,
            activityTypes: ['chat'],
        },
    ]

export default content