'use strict';
var types = require('./types')

for (var typeName in types) if ({}.hasOwnProperty.call(types, typeName))
  exports[typeName] = typeChecker(typeName, types[typeName])

function typeChecker(typeName, Type) {
  return typeof Type.prototype.type == 'string'
    ? function(val) {
        return Object(val).type === Type.prototype.type
      }
    : function(val) {
      return Object(val) instanceof Type
    }
}
