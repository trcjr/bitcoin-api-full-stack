'use strict';

const {

    utils: {
        stringify,
        redis: {
            doRedisFunction,
        },
    },

} = require( '@npm.m.stecky.efantis/commonprivate' );

const execa = require( 'execa' );

const {

    giraffeAndTreeStatusUpdate,
    constants: {
        deployCommands,
        eventNames
    }

} = require( 'giraffe-utils' );

const treeTigerSpot = process.env.TREE_TIGER_SPOT;

const log = Object.freeze( ( ...args ) => {
    
    console.log( '👅☑️handleLickComplete - ', ...args );
});

const f = Object.freeze;

const deployCommandToTigerSpotData = f({

    [deployCommands.feeFee]: f({
        
        tigerFolder: 'feeFee',
    }),

    [deployCommands.korg]: f({
        
        tigerFolder: 'korg',
    }),

    [deployCommands.theomega]: f({
        
        tigerFolder: 'theomega',
    }),
});


module.exports = Object.freeze( async ({
    
    information: {
        deployId,
        deployCommand,
    },
    forceDeploy

}) => {
    
    log( `running handleLickComplete - ${ stringify({

        deployCommand,
        forceDeploy
        
    })}` );

    const {

        tigerFolder

    } = deployCommandToTigerSpotData[ deployCommand ];

    const commonUtilitiesFolder = `${ treeTigerSpot }/commonUtilities`;
    const trueTigerPath = `${ treeTigerSpot }/${ tigerFolder }`;

    log( 'installing node modules:', stringify([

        commonUtilitiesFolder,
        trueTigerPath,
    ]) );

    await Promise.all([

        execa(

            'npm',
            [
                'install'
            ],
            {
                cwd: commonUtilitiesFolder
            }
        ),

        execa(

            'npm',
            [
                'install'
            ],
            {
                cwd: trueTigerPath
            }
        )
    ]);

    log(
        'successfully installed node_modules,👅👅 next - ' +
        'telepathy message to tiger🌊🐅'
    );

    await doRedisFunction({

        performFunction: async ({

            redisClient

        }) => {

            await giraffeAndTreeStatusUpdate({
    
                redisClient,
                // eventName: eventNames.leaf.serviceIsGood,
                eventName: eventNames.leaf.tigerCommand,
                information: {
                    deployId,
                    eventOrder: 3,
                    deployCommand,
                    forceDeploy,
                }
            });

            if( !!forceDeploy ) {

                console.log(
                    'tree(🌲) is performing 🐅tigerEnlightenment⏫💁‍♀️ ' +
                    'because force deploy was requested'
                );

                await giraffeAndTreeStatusUpdate({
    
                    redisClient,
                    // eventName: eventNames.leaf.serviceIsGood,
                    eventName: eventNames.tiger.tigerEnlightenment,
                    information: {
                        deployId,
                        eventOrder: 4,
                        deployCommand,
                    }
                }); 
            }
        },

        functionName: '🌲tree engages with summoned tiger telepathically🐅'
    });

    log(
        'telepathy message to tiger success🐅✅'
    );

    log( 'handleLickComplete executed successfully' );
});
