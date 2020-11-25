const form = document.querySelector('#postForm');
form.addEventListener('submit', function(e){
    let data = {
        image: form.elements.imageUrl.value,
        title: form.elements.title.value,
        description: form.elements.description.value,
        content: form.elements.content.value,
    };
    document.querySelector('#postImage').setAttribute('src', data.image);
    document.querySelector('#postTitle').textContent = data.title;
    document.querySelector('#postDesc').textContent = data.description;
    document.querySelector('#listDesc').append(data.description);
    document.querySelector('#postContent').textContent = data.content;
    e.preventDefault();
});