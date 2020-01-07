import {
  AccountHttp,
  BlockHttp,
  DiagnosticHttp,
  ChainHttp,
  MetadataHttp,
  MosaicHttp,
  NamespaceHttp,
  TransactionHttp
} from 'tsjs-xpx-chain-sdk'

class Connections {
  constructor (node) {
    this.node = node
    this.accountHttp = new AccountHttp(this.node)
    this.blockHttp = new BlockHttp(this.node)
    this.chainHttp = new ChainHttp(this.node)
    this.diagnosticHttp = new DiagnosticHttp(this.node)
    this.metadataHttp = new MetadataHttp(this.node)
    this.mosaicHttp = new MosaicHttp(this.node)
    this.namespaceHttp = new NamespaceHttp(this.node)
    this.transactionHttp = new TransactionHttp(this.node)
  }
}

class ConnectionData {
  constructor () {
    this.url = ''
  }

  static getBuildUrl (node, protocol) {
    switch (protocol) {
      case 'http':
        this.url = `${protocol}://${node}:3000`
        break
      case 'https':
        this.url = `${protocol}://${node}:443`
        break
    }

    return this.url
  }
}

export { Connections, ConnectionData }
