const loadData = () => {
  const searchText = document.getElementById("input").value;
  if (searchText === "") {
    document.getElementById("div").textContent = "";
    document.getElementById(
      "div"
    ).innerHTML = `<h3 class="text-danger text-center shadow p-3 mb-5 bg-body rounded gap-4 justify-items-center">Input data is Empty.</h3>`;
  } else {
    // clear value
    document.getElementById("input").value = "";
    //clear load data
    document.getElementById("div").textContent = "";
    try {
      //document.getElementById("div").textContent = "";
      const url = `https://openlibrary.org/search.json?q=${searchText}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data));
      console.log(data);
    } catch (error) {
      // document.getElementById("div").textContent = "";
      // console.log("error in line");
      document.getElementById(
        "div"
      ).innerHTML = `<h2 class="text-danger text-center shadow p-3 mb-5 bg-body rounded gap-4 justify-items-center ">No Result Found.</h2>`;
    }
  }
};
// display position
const displayData = (data) => {
  document.getElementById("div").textContent = "";
  document.getElementById("result").textContent = "";
  const dataArray = data.docs;
  //  book search found
  // length of array where eatch element are there
  //console.log(dataArray.length);
  document.getElementById("result").innerHTML = `
  <p>Total result Found: <span class='text-warning'> ${data.numFound} </span></p>
  <p>Search result show: <span class='text-warning'>${dataArray.length}</span></p>`;
  const div = document.getElementById("div");
  // take eatch array element
  // const count = 0;
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
