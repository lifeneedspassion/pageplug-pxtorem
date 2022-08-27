const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('does something', async () => {
  await run('a{ width: 80px; }', 'a{ width: 3rem; }', { h5Width: 450 })
})

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/
