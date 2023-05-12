import axios from "axios"

const apiGitHub = axios.create({

    baseURL: "https://api.github.com",
});

export default apiGitHub;