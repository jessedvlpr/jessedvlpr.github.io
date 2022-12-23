function project(thumbnailPath, title, description) {
    this.thumbnailPath = thumbnailPath
    this.setThumbnail(this.thumbnailPath)
    this.title = title
    this.description = description
}

project.prototype.setThumbnail = function (path) {
    this.thumbnailPath = path
    this.element.style.backgroundImage = `url(${this.thumbnailPath})`
}
project.prototype.setTitle = function (title) {
    this.title = title
}
project.prototype.setDescription = function (description) {
    this.description
}