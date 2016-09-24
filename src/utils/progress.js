import Progress from 'progress'

export default function (total) {
  let bar = new Progress('  Compression [:bar] :percent', {
    incomplete: ' ',
    width: 20,
    total
  })

  // show the process bar immediately
  bar.tick(0)

  return bar
}
