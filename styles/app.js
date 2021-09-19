const loadData = () => {
  const searchText = document.getElementById("input").value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
const displayData = (data) => {
  // display position
  const div = document.getElementById("div");
  const dataArray = data.docs;
  // const dataAmount = 0;
  dataArray.forEach((element) => {
    //book cover pic
    const cover_i = element.cover_i;
    const url = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;

    const imageTaq = document.createElement("div");
    imageTaq.innerHTML = `<img src="${url}" alt="">`;
    div.appendChild(imageTaq);
    //book title name
    const titleName = element.title;
    const divTaq = document.createElement("div");
    divTaq.innerHTML = `<h2 class="text-primary">${titleName} </h2>`;
    div.appendChild(divTaq);
    // //book author name
    const authors = element.author_name;
    // authors.forEach((author) => {
    //   const authorTaq = document.createElement("div");
    //   authorTaq.innerHTML = `<span class="text-dark">Author: ${author} </span>`;
    //   div.appendChild(authorTaq);
    // });
    const authorTaq = document.createElement("div");
    authorTaq.innerHTML = `<span class="text-dark">Author: ${authors} </span>`;
    div.appendChild(authorTaq);
    // console.log(...authors);
    // //book publisher name
    const publishers = element.publisher;
    const publisherTaq = document.createElement("div");
    publisherTaq.innerHTML = `<span class=" ">Publisher: ${publishers} </span>`;
    div.appendChild(publisherTaq);
    // publishers.forEach((publisher) => {
    //   const publisherTaq = document.createElement("div");
    //   publisherTaq.innerHTML = `<p class=" ">Publisher:${publisher}</p>`;
    //   div.appendChild(publisherTaq);
    // });

    const firstPublish = element.first_publish_year;

    const firstPublishTaq = document.createElement("div");
    firstPublishTaq.innerHTML = `<h3 class=" ">First Publish:${firstPublish}</h3>`;
    div.appendChild(firstPublishTaq);

    //console.log((dataAmount = dataAmount + 1));
  });
};
