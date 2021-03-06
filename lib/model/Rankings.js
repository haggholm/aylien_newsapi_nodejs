/**
 * Copyright 2017 Aylien, Inc. All Rights Reserved.
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
    define(['ApiClient', 'model/Rank'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rank'));
  } else {
    // Browser globals (root is window)
    if (!root.AylienNewsApi) {
      root.AylienNewsApi = {};
    }
    root.AylienNewsApi.Rankings = factory(root.AylienNewsApi.ApiClient, root.AylienNewsApi.Rank);
  }
}(this, function(ApiClient, Rank) {
  'use strict';




  /**
   * The Rankings model module.
   * @module model/Rankings
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Rankings</code>.
   * @alias module:model/Rankings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Rankings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rankings} obj Optional instance to populate.
   * @return {module:model/Rankings} The populated <code>Rankings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alexa')) {
        obj['alexa'] = ApiClient.convertToType(data['alexa'], [Rank]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Rank>} alexa
   */
  exports.prototype['alexa'] = undefined;



  return exports;
}));


