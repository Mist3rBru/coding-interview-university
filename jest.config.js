/** @type {import('jest').Config} */
module.exports = {
  bail: true,
  clearMocks: true,
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
}
