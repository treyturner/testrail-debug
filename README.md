To reproduce:

`yarn type-check` or `yarn tsc --noEmit`

TypeScript error:
```
$ tsc --noEmit
node_modules/@dlenroc/testrail/src/internal/request.ts:70:34 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

70     return Promise.reject(signal.reason);
                                    ~~~~~~

node_modules/@dlenroc/testrail/src/internal/request.ts:86:22 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

86       reject(signal?.reason);
                        ~~~~~~

node_modules/@dlenroc/testrail/src/TestRail.ts:504:39 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

504       return Promise.reject(ctxSignal.reason || options.signal.reason);
                                          ~~~~~~

node_modules/@dlenroc/testrail/src/TestRail.ts:504:64 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

504       return Promise.reject(ctxSignal.reason || options.signal.reason);
                                                                   ~~~~~~

node_modules/@dlenroc/testrail/src/TestRail.ts:510:70 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

510     const onAbort = () => { clearAbort(); controller.abort(ctxSignal.reason || optionsSignal.reason); };
                                                                         ~~~~~~

node_modules/@dlenroc/testrail/src/TestRail.ts:510:94 - error TS2339: Property 'reason' does not exist on type 'AbortSignal'.

510     const onAbort = () => { clearAbort(); controller.abort(ctxSignal.reason || optionsSignal.reason); };
                                                                                                 ~~~~~~


Found 6 errors in 2 files.

Errors  Files
     2  node_modules/@dlenroc/testrail/src/internal/request.ts:70
     4  node_modules/@dlenroc/testrail/src/TestRail.ts:504
error Command failed with exit code 2.
```