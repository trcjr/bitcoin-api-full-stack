'use strict';

const {

    utils: {
        redis: {
            doRedisFunction,
        },
        // stringify,
    },

} = require( '@npm.m.stecky.efantis/commonprivate' );

const {

    giraffeAndTreeStatusUpdate,
    constants

} = require( '../commonUtilities' );


module.exports = Object.freeze( ({

    deployId,
    deployCommand

}) => async () => {
    
    await doRedisFunction({

        performFunction: async ({

            redisClient

        }) => {

            await giraffeAndTreeStatusUpdate({
    
                redisClient,
                eventName: constants.eventNames.leaf.tongueFeel,
                // eventName: constants.eventNames.giraffe.lick,
                information: {
                    deployId,
                    eventOrder: 1,
                    deployCommand
                }
            });
        },

        functionName: 'leaf feel tongue'
    });
});
