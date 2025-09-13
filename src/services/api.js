const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockSeriesData = [
    {
        id: 1,
        title: 'Vanilla JS',
        description: 'Learn the fundamentals of JavaScript without frameworks.',
        rating: 4
    },
    {
        id: 2,
        title: 'React Basics',
        description: 'Understand components, props, and state in React.',
        rating: 5
    },
    {
        id: 3,
        title: 'CSS Grid', description: 'Master layout techniques using CSS Grid.',
        rating: 3
    },
    {
        id: 4,
        title: 'Node.js Basics',
        description: 'Learn Node js basics.',
        rating: 4
    },
];

export const seriesApi = {
    async getAllSeries() {
        await delay(2000); // 2 second delay
        return {
            success: true,
            data: mockSeriesData
        };
    },

    async getSeriesById(id) {
        await delay(2000); // 2 second delay
        const series = mockSeriesData.find(item => item.id === parseInt(id));
        if (series) {
            return {
                success: true,
                data: series
            };
        }
        throw new Error('Series not found');
    },

    async createSeries(seriesData) {
        await delay(1000); // 1 second delay
        const newSeries = {
            id: Date.now(),
            ...seriesData
        };
        return {
            success: true,
            data: newSeries
        };
    },

    async deleteSeries(id) {
        await delay(1000); // 1 second delay
        return {
            success: true,
            message: 'Series deleted successfully'
        };
    }
};
