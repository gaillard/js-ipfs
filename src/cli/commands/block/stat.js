'use strict'

const multibase = require('multibase')
const { print } = require('../../utils')
const { cidToString } = require('../../../utils/cid')

module.exports = {
  command: 'stat <key>',

  describe: 'Print information of a raw IPFS block',

  builder: {
    'cid-base': {
      describe: 'Number base to display CIDs in.',
      type: 'string',
      choices: multibase.names
    }
  },

  handler ({ ipfs, key, cidBase, resolve }) {
    resolve((async () => {
      const stats = await ipfs.block.stat(key)
      print('Key: ' + cidToString(stats.key, { base: cidBase }))
      print('Size: ' + stats.size)
    })())
  }
}
