
const { XMLParser, XMLBuilder, XMLValidator} = require("../src/fxp");

export function Vectors(){
    const parser = new XMLParser();
    let jObj = parser.parse(XMLdata);

    const builder = new XMLBuilder();
    const xmlContent = builder.build(jObj);

    let array = [[-33.461702030907645, -70.66883200031094], [-15.946881805865203, -63.55987386323262], [-46.54029615576514, -71.72631335607883]];

    return array;

}

