import instance from '@/utils/request'
export function createAPI(baseURL) {
  return (conf) => {
    conf = conf || {}
    return instance(Object.assign({}, {
      url: conf.url,
      baseURL: baseURL,
      method: conf.method
    }, conf.opts))
  }
}
export function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url
  const pathKeys = Object.keys(opts.path)
  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    url = url.replace(r, opts.path[key])
  })
  return url
}
