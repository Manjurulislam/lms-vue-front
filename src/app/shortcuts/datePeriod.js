export default  {
    shortcuts: [

        {
            text: 'Today',
            value: () => {
                const end = new Date()
                const start = new Date()
                start.setHours(0,0,0,0)
                console.log(start,end)
                return [start, end]
            }
        },

        {
            text: 'Yesterday',
            value: () => {
                const end = new Date()
                const start = new Date()
                start.setDate(start.getDate() - 1)
                start.setHours(0,0,0,0)
                end.setDate(end.getDate() -1 )
                end.setHours(23,59,59,0)
                console.log(start,end)
                return [start, end]
            },
        },

        {
            text: 'Last week',
            value: () => {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                console.log(start,end)
                return [start, end]
            },
        },
        {
            text: 'Last month',
            value: () => {
                const end = new Date()
                const start = new Date()
                start.setMonth(start.getMonth() -1)
                start.setDate(1)
                start.setHours(0,0,0,0)
                end.setDate(1)
                end.setHours(0,0,-1)
                console.log(start,end)
                return [start, end]
            },
        },
        {
            text: 'Last 3 months',
            value: () => {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                console.log(start,end)
                return [start, end]
            },
        },
    ],
    value1: '',
    value2: '',
}