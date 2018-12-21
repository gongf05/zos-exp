# zos-exp
playground of zos

1. set "NODE_NV=test"
2. run "truffle test"

```
$ truffle test
Using network 'development'.

  Contract: Token
    1) should create a proxy
    > No events were emitted


  0 passing (80ms)
  1 failing

  1) Contract: Token
       should create a proxy:
     Error: Token deployment failed with error: Error: Provider not set or invalid
      at allPromisesOrError (node_modules/zos/lib/utils/async.js:36:11)
      at process.internalTickCallback (internal/process/next_tick.js:77:7)
```
