/**
 * Copyright 2016 Aylien, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.HistogramInterval = factory(root.AylienNewsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistogramInterval model module.
   * @module model/HistogramInterval
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>HistogramInterval</code>.
   * @alias module:model/HistogramInterval
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>HistogramInterval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistogramInterval} obj Optional instance to populate.
   * @return {module:model/HistogramInterval} The populated <code>HistogramInterval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('bin')) {
        obj['bin'] = ApiClient.convertToType(data['bin'], 'Integer');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Histogram bin
   * @member {Integer} bin
   */
  exports.prototype['bin'] = undefined;

  /**
   * Histogram bin size
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;




  return exports;
}));