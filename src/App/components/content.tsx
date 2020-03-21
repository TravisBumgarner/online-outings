type Content = {
    title: string,
    isMature: boolean,
    hasCost: boolean
}

const content: Content[] =
    [
        {
            title: "is mature no cost",
            isMature: true,
            hasCost: false
        },
        {
            title: "is mature has cost",
            isMature: true,
            hasCost: true
        },
        {
            title: "not mature has cost",
            isMature: false,
            hasCost: true
        }
    ]

export default content