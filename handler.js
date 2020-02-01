/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Print a Hello World message with/without your name
 * 
 * @param String name
 * 
 * @returns {Object} Returns a Hello message
 */

function main(params) {
    if (params && params.name) {
        return { message: `Hello ${params.name}` }
    } else {
        return { message: 'Hello World' }
    }
}

exports.main = main