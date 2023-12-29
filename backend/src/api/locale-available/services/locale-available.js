'use strict';

/**
 * locale-available service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locale-available.locale-available');
