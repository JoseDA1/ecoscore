import React from 'react'

export const httpsHelper = () => {
    const customFetch = (endpoint, options = {}) => {
        const defaultHeaders = {accept:"application/json"};

        const controller = new AbortController();
        options.signal = controller.signal;

        //Modificacion del header
        options.method = options.method || "GET";
        options.headers = options.headers ? {...options.headers, ...defaultHeaders} : defaultHeaders;

        
        //Eliminacion del body si no hay
        options.body = options.body || false;
        if(!options.body) delete options.body;
        setTimeout(() => {
            controller.abort();
        }, 3000);

        return fetch(endpoint, options)
        .then(res => {
            if(!res.ok){
                console.log(res);
                return Promise.reject({
                    err:true,
                    status:res.status || "00",
                    statusText: res.statusText || "Something wrong with helpFetch"
                });
            }else{
                return res.json();
            }
        })
        .catch(err => {
            return err;
        });
    };

    const getFetch = (endpoint, options) => customFetch(endpoint, options);

    const postFetch = (endpoint, options) => {
        options.method = "POST";
        return customFetch(endpoint, options)
    }
    // const editFetch = (endpoint, options) => {
    //     options.method = "PUT";
    //     return customFetch(endpoint, options)
    // }
    // const deleteFetch = (endpoint, options) => {
    //     options.method = "DELETE";
    //     return customFetch(endpoint, options)
    // }
    return {getFetch, postFetch};
}
