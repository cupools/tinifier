import colors from 'colors'

let state = true

const log = function (msg) {
  /* istanbul ignore next */
  process.env.NODE_ENV !== 'test' && state && console.log(msg)
}

log.info = function (msg) {
  log('[info]: ' + msg)
}

log.warn = function (msg) {
  log('[warn]: ' + colors.yellow(msg))
}

log.error = function (msg) {
  log('[error]: ' + colors.red(msg))
}

log.build = function (path, level) {
  log.info('Compress ' + colors.green(path + ' => ' + (1 - level) * 100 + '%'))
}

log.state = function (quiet) {
  state = !quiet
}

export default log