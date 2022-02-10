module.exports = function paginate_on_array(array, page_size, page_number = 1) {
    const max_page = Math.ceil(array.length / page_size);
    return {
        results: array.slice((page_number - 1) * page_size, page_number * page_size),
        next_page: page_number < max_page ? true : false
    }
}