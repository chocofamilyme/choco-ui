import crypto from 'crypto'

// eslint-disable-next-line no-undef
Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
})
