
export default (img) => {
    const images = require.context( "../../resource/img", true);
    return images(img);
}
