import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    header: {
        "Content-Type": "application/json",
    },
});

export const getCategories = async () => {
    const { data } = await api.get("/categories");
    return data;
};

export const getArtisans = async (params = {}) => {
    const { data } = await api.get("/artisans", { params });
    return data;
};

export const getTopArtisans = async () => {
    const { data } = await api.get("/artisans/top");
    return data;
};

export const getArtisanById = async (id) => {
    const { data } = await api.get(`/artisans/${id}`);
    return data;
};

export const sendContactMessage = async (formData) => {
    const { data } = await api.post("/contact", formData);
    return data;
};

export default api;
