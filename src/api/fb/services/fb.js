'use strict';

/**
 * fb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fb.fb');
