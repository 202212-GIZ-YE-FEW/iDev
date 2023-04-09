// export const sendForm = async (data, endpoint) =>
//     fetch(`/api/${endpoint}`, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//     }).then((res) => {
//         if (!res.ok) throw new Error("Failed to send message");
//         return res.json();
//     });
import axios from "axios";

export const postHandler = (
    url,
    data,
    headers = { "Content-Type": "application/json" }
) => {
    // add a documentation to this function
    /**
     * @param {string} url - The url to post to
     * @param {object} data - The data to post
     * @param {object} headers - The headers to post
     * @returns {Promise} - The promise to resolve or reject
     * @example
     * postHandler('https://example.com', { name: 'John Doe' }, { 'Content-Type': 'application/json' })
     * .then(response => {
     *  console.log(response);
     * })
     */
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, { headers })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
