export const HTTP_SERVICE = () => {
  return {
    get: (self, url, callbackSuccess, callbackFaill) => {
      self.$http({method: 'GET', url: url}).then((response) => {
        if (response.status === 200) { callbackSuccess(response.body) }
      },
      (response) => {
        callbackFaill(response.body)
      })
    },
    post: (self, url, callbackSuccess, callbackFaill, body) => {
      self.$http({method: 'POST', url: url, body: body}).then((response) => {
        if (response.status === 200 || response.status === 201) {
          callbackSuccess(response.body)
        }
      }, (response) => {
        callbackFaill(response.body)
      })
    }
  }
}
