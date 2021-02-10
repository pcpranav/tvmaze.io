let input = document.getElementById("input");
let btn = document.getElementById("button");
let row2 = document.querySelector("#row2");
let container = document.querySelector(".conatiner");
let row3 = document.querySelector("#row3");
btn.addEventListener("click", () => {
  row3.innerHTML = "";
  let url = "https://api.tvmaze.com/search/shows?q=";
  async function search(x) {
    try {
      let data = await fetch(x + input.value);
      let response = await data.json();
      for (let i = 0; i < response.length; i++) {
        let wrapper = create(response[i]);
        row3.append(wrapper);

        function create(x) {
          let col4 = document.createElement("div");
          col4.setAttribute("class", "col-3");
          let divcard = document.createElement("div");
          divcard.setAttribute("class", "card");
          divcard.style = "width=18rem";
          let image = document.createElement("img");
          image.setAttribute("class", "card-img");
          image.setAttribute("calss", "design");
          let divcardbody = document.createElement("div");
          divcardbody.setAttribute("class", "card-body");
          let p = document.createElement("p");
          p.setAttribute("class", "card-text");
          divcardbody.append(p);
          divcard.append(image, divcardbody);
          let data1 = document.createElement("h5");
          data1.innerHTML = x.show.name;
          let data2 = document.createElement("h6");
          data2.innerHTML = x.show.genres;
          let data4 = document.createElement("h6");
          data4.innerHTML = x.show.schedule.days;
          let data5 = document.createElement("h6");
          data5.innerHTML = x.show.schedule.time;
          let data6 = document.createElement("h6");
          data6.innerHTML = x.show.premiered;
          let data7 = document.createElement("h6");
          data7.innerHTML = x.show.network.country.name;
          p.append(data1, data2, data4, data5, data6, data7);
          image.setAttribute("src", x.show.image.medium);
          col4.append(divcard);
          return col4;
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
  search(url);
});
