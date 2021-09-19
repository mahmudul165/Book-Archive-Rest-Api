const loadData = () => {
  const searchText = document.getElementById("input").value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
// display position
const displayData = (data) => {
  const dataArray = data.docs;
  const div = document.getElementById("div");
  // take eatch array element
  dataArray.forEach((element) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("mystyle");
    //book info
    const cover_i = element.cover_i;
    const titleName = element.title;
    const authors = element.author_name;
    const publishers = element.publisher;
    const firstPublish = element.first_publish_year;
    rowElement.innerHTML = `<div class="">
        <div>
        <img src="${`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}" alt="">
         </div>
         <div class="book-details">
           <h2 class="text-primary">${titleName} </h2>
           <h6 class="text-warning d-flex flex-wrap">Author: ${authors} </h6>
           <span class="d-flex flex-nowrap">Publisher: ${publishers} </span>
           <p class="text-dark">First Publish:${firstPublish}</p>
         </div>
       </div>`;

    div.appendChild(rowElement);
  });
};
