var element = module.exports = {
  DATAFLOW_PAUSE: -1,
  DATAFLOW_CONTINUE: 1,
  DATAFLOW_EOF: 0,
  DATAFLOW_DATA: 1,
  AGGREGATE: 'Aggregate',
  BUFFER: 'Buffer',
  ELEMENT: 'Element',
  FILE_SOURCE: 'FileSource',
  FILTER: 'Filter',
  HASH_JOIN: 'HashJoin',
  MAP: 'Map',
  STRING_SOURCE: 'StringSource',
  TUPLE_ELEMENT: 'TupleElement'
};

element.Aggregate = require('./Aggregate');
element.Buffer = require('./Buffer');
element.Element = require('./Element');
element.FileSource = require('./FileSource');
element.Filter = require('./Filter');
element.HashJoin = require('./HashJoin');
element.Map = require('./Map');
element.StringSource = require('./StringSource');
element.TupleElement = require('./TupleElement');