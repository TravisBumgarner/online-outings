type ActivityType = 'game' | 'chat'

type Activity = {
    title: string
    url: string
    description: string
    hasCost: boolean
    types: ActivityType[]
}

const activities: Activity[] =
    [
        {
            title: "LetsDraw.it",
            hasCost: false,
            url: 'https://letsdraw.it/',
            description: 'Guess and Draw, Drawing contest, Pictionary, Copy picture - online drawing games where you can compare your skill with others.',
            types: ['game'],
        }
    ]

export default activities
export { Activity }