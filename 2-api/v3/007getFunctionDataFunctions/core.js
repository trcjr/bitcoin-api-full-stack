'use strict';

module.exports = ({

    isProductionMode,
    environmentVariables: {

        GOOGLE_CAPTCHA_SECRET,
        PATCH_TOKENS_BYPASS_IS_HUMAN_TEST_SECRET,
        WALHALLA_ADDRESS_MODE_SECRET,
        EXCHANGE_TOKEN_USER_ID,
    },

}) => [

    {
        nickname: 'POST/tokens',
        name: 'b_v3_lambda_tokens_get',
        handler: 'routes/tokens/POST/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_tokens_get',
        pathsToInclude: [

            './routes/tokens/POST'
        ],
        environmentVariables: Object.assign(
            
            {},
            isProductionMode ? {

                MAINTENANCE_MODE_CODE: 'xyzabc',

            } : {}
        )
    },

    {
        nickname: 'PATCH/tokens',
        name: 'b_v3_lambda_tokens_patch',
        handler: 'routes/tokens/PATCH/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_tokens_patch',
        pathsToInclude: [

            './routes/tokens/PATCH'
        ],
        environmentVariables: {

            GOOGLE_CAPTCHA_SECRET,
            PATCH_TOKENS_BYPASS_IS_HUMAN_TEST_SECRET
        },
    },

    {
        nickname: 'GET/tokens',
        name: 'b_v3_lambda_users_get',
        handler: 'routes/tokens/GET/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_users_get',
        pathsToInclude: [

            './routes/tokens/GET'
        ],
        environmentVariables: {},
    },

    {
        nickname: 'PUT/tokens',
        name: 'b_v3_lambda_tokens_put',
        handler: 'routes/tokens/PUT/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_tokens_put',
        pathsToInclude: [
            './routes/tokens/PUT'
        ],
        environmentVariables: {},
    },

    {
        nickname: 'POST/addresses',
        name: 'b_v3_lambda_addresses_get',
        handler: 'routes/addresses/POST/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_addresses_get',
        pathsToInclude: [

            './routes/addresses/POST',
            './exchangeUtils'
        ],
        environmentVariables: {
            WALHALLA_ADDRESS_MODE_SECRET,
            EXCHANGE_TOKEN_USER_ID,
        }
    },

    {
        nickname: 'GET/fee-data',
        name: 'b_v3_lambda_fee_data_get',
        handler: 'routes/fee_data/GET/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_fee_data_get',
        pathsToInclude: [

            './routes/fee_data/GET'
        ],
        environmentVariables: {},
    },

    {
        nickname: 'POST/withdraws',
        name: 'b_v3_lambda_withdraws_post',
        handler: 'routes/withdraws/POST/index.handler',
        role: 'arn:aws:iam::164872287968:role/b_v3_lambda_withdraws_post',
        pathsToInclude: [

            './routes/withdraws/POST'
        ],
        environmentVariables: {}
    },
];
