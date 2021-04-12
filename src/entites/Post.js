class Post {
    constructor(data) {
        this.data = data
    }
    get is_Horizontal() {
        return this.data.meta.video.resolution_x >
            this.data.meta.video.resolution_y;
    }
    get is_Vertical() {
        return this.data.meta.video.resolution_y >
            this.data.meta.video.resolution_x;
    }
    get is_Square() {
        return this.data.meta.video.resolution_y ===
            this.data.meta.video.resolution_x;
    }
}
export default Post