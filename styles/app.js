const loadData = () => {
  const searchText = document.getElementById("input").value;
  if (searchText === "") {
    document.getElementById(
      "div"
    ).innerHTML = `<h1 class="text-danger text-center  ">please input valid data</h1>`;
  } else {
    document.getElementById("div").textContent = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data));
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
        rowElement.innerHTML = `<div class="rounded-3 shadow p-3 mb-5 bg-body rounded gap-4 justify-items-center">
          <div>
          <img width="200px" height="200px" class="rounded-3  mx-auto"  src="${`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}" alt="">
           </div>
           <div class="book-details">
             <h4 class="text-primary p-2">${titleName} </h4>
             <h6 class="text-warning d-flex flex-wrap p-2">Author: ${authors} </h6>
             <span class="d-flex flex-nowrap text-secondary p-2">Publisher: ${publishers} </span>
             <p class="text-info p-2">First Publish:${firstPublish}</p>
           </div>
         </div>`;
        div.appendChild(rowElement);
      });
    };
  }
};
