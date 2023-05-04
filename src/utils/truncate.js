const truncate = (input, size) =>
    input?.length > size ? `${input.substring(0, size)}...` : input;
export default truncate;
