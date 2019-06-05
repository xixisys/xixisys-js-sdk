import 'whatwg-fetch'
import ky, { HTTPError } from 'ky';

class CasNotFoundError extends Error{
  constructor() {
    super('Cas not found')
    this.name = 'CasNotFoundError'
  }
}

class ServerError extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'ServerError'
  }
}

const api = ({ apiKey, prefixUrl = 'https://dlfrsthy47.execute-api.cn-north-1.amazonaws.com.cn/production' }) => {
  return ky.create({
    retry: 1,
    prefixUrl: prefixUrl,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey
    },
  })
}

const selector = id => {
  if (typeof id === 'string') {
    if (id[0] !== '#') {
      id = `#${id}`
    }
    return document.querySelector(id)
  }

  if (id instanceof Element) {
    return id
  }

  return null
}

class XiXisys {
  constructor({
    prefixUrl,
    apiKey,
  }) {
    this.api = api({ apiKey, prefixUrl })
  }

  ComplianceHtml({
     id,
     cas,
     cssHref,
     error = console.error,
   }) {
    (async () => {
      try {
        const { data } = await this.api.get('v1/compliance/html', {
          searchParams: { cas },
        }).json()

        // create frame
        const element = selector(id)

        if (element) {
          const frame = document.createElement('iframe')

          // 通过 postMessage 让 iframe 100% height
          window.addEventListener('message', e => {
            const { xixisys: { height } } = e.data
            if (height) {
              frame.height = height
            }
          })

          // 传递 cssHref 给 iframe
          frame.onload = () => {
            frame.contentWindow.postMessage({ xixisys: { cssHref } }, '*')
          }

          // 默认样式
          frame.style = 'border:none;width:100%;'
          frame.src = data
          element.appendChild(frame)
        }

        return this
      } catch (e) {
        let err = e
        if (e instanceof HTTPError) {
          if (e.response.status === 404) {
            err = new CasNotFoundError()
          } else {
            const errJson = await e.response.json()
            err = new ServerError(errJson.error)
          }
        }

        error(err)
      }
    })()
  }
}

const createInstance = () => options => new XiXisys(options)

export default createInstance()
