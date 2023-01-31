import data from "./database.js";

const addProvince = (data) => {
  const item = document.createElement("div");
  item.className = "card";
  item.style = "width: 20rem";
  const card = `
    <div class="card-body">
        <h5 class="card-title">ชื่อจังหวัด ${data.ProvinceNameThai}</h5>
        <p class="card-text">${data.Region_RDPB}</p>
        <p class="card-text">${data.Region_TCGOffice}</p>
        <p class="card-text">${data.RegionONCB}</p>
        <p class="card-text">${data.RegionalHealth}</p>
        <p class="card-text">${data.Region_OccupationalSafety}</p>
    </div>
    `;

  item.innerHTML = card;
  const bookResult = document.querySelector(".provinces");
  bookResult.appendChild(item);
};

const removeAllResult = () => {
  const removeAllResult = document.querySelector(".provinces");
  removeAllResult.innerHTML = "";
};

const searchProvince = async (event) => {
  const keyword = event.target.value;
  if (event.key === "Enter" && keyword) {
    const result = data.filter((item) =>
      item.ProvinceNameThai.includes(keyword)
    );

    removeAllResult();
    result.forEach((element) => addProvince(element));
    searchbar()
  }
};

data.forEach((element) => {
  addProvince(element);
});

const main = () => {
  const inputElement = document.querySelector(".search");
  inputElement.addEventListener("keydown", searchProvince);
};

main();
