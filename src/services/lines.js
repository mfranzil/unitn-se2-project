const Line = require('@app/models/line');

async function place(line) {
    console.log(line)
    if (!line) {
        throw Error('Line parameter required.');
    }

    if (!line.line_user_id || !line.line_start_lat || !line.line_start_lon || !line.line_end_lat
        || !line.line_end_lon || !line.line_name || !line.line_description) {
        throw Error('Please supply a valid Line object: { line_user_id: String, '
            + 'line_start_lat: Number, line_start_lon: Number, line_end_lat: Number, '
            + 'line_end_lon: Number, line_name: String, line_description: String}');
    }
    let result = await Line.insert(line);
    console.log(result);

    return;
}

async function getAll() {
    let res = await Line.getAll();
    return res;
}

async function get(id) {
    let res = await Line.getByPrimaryKey(id);
    return res;
}

module.exports = {
    place,
    getAll,
    get
};
