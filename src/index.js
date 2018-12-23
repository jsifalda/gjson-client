import fetch from 'isomorphic-unfetch'

export const api = (url) => {
  return (request, headers) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(headers || {})
        },
        body: JSON.stringify(request)
      })
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          if (response.error) {
            reject(response.error)
          } else {
            resolve(response)
          }
        })
        .catch(reject)
    })
  }
}
