import zustand from 'zustand';

interface IDashboardStore {
    data: [];
    fetchData: () => void;
}

const dashboardStore = zustand<IDashboardStore>()((set) => ({
    data: [],
    fetchData: () => {
        set((state) => ({ data: [] }));
    }
}));

export default dashboardStore;
