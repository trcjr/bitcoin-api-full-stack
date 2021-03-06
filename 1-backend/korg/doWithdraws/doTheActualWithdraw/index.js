'use strict';

const {
    constants: {
        aws: { database: { tableNames: { WITHDRAWS } } },
    },
    utils: {
        doOperationInQueue
    }
} = require( '@npm.m.stecky.efantis/commonprivate' );

const doTheActualWithdrawCore = require( './doTheActualWithdrawCore' );


module.exports = Object.freeze( async ({

    pendingWithdrawDatum,
    getQueueId,
    idForGetQueueId

}) => {

    const doTheActualWithdrawResults = await doOperationInQueue({
        queueId: getQueueId({ type: WITHDRAWS, id: idForGetQueueId }),
        doOperation: doTheActualWithdrawCore,
        doOperationArgs: [{

            existingWithdrawDatum: pendingWithdrawDatum,
        }]
    });

    return doTheActualWithdrawResults;
});

