export const HTTP_SERVICE = () => {
  return {
    get: (self, url, callbackSuccess, callbackFail) => {
      self.$http({method: 'GET', url: url}).then((response) => {
        if (response.status === 200) { callbackSuccess(response.body) }
      },
      (response) => {
        callbackFail(response.body)
      })
    }
  }
}
