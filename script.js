// 第一页 开始 - Hero Section 按钮点击事件

document.getElementById("exploreBtn").addEventListener("click", function() {
  alert("Explore the Collection button clicked!");
  // 这里可以跳转到下一个部分或页面
});

// 第一页 结束

// 第二页 开始 - 品牌与价值观 Brand Philosophy

// 预留：后期可加滚动动画 / 渐显效果
// 示例：IntersectionObserver

// 第二页 结束

// 第三页 开始 - 作品集切换与理念延展交互

const volumesData = [
  {
    name: "Volume I · Aurora",
    works: [
      { img: "v1-1.jpg", text: "Quiet brilliance shaped by time." },
      { img: "v1-2.jpg", text: "Light captured in its purest form." },
      { img: "v1-3.jpg", text: "Balance between strength and grace." },
      { img: "v1-4.jpg", text: "Designed for silent confidence." },
      { img: "v1-5.jpg", text: "Where structure meets emotion." },
      { img: "v1-6.jpg", text: "Minimal form, lasting presence." }
    ]
  },
  {
    name: "Volume II · Eclipse",
    works: [
      { img: "v2-1.jpg", text: "Shadow defines the light." },
      { img: "v2-2.jpg", text: "Depth over brilliance." },
      { img: "v2-3.jpg", text: "Elegance in restraint." },
      { img: "v2-4.jpg", text: "Darkness refined." },
      { img: "v2-5.jpg", text: "Strength without excess." },
      { img: "v2-6.jpg", text: "Form follows silence." }
    ]
  },
  {
    name: "Volume III · Origin",
    works: [
      { img: "v3-1.jpg", text: "The beginning of intention." },
      { img: "v3-2.jpg", text: "Material meets meaning." },
      { img: "v3-3.jpg", text: "Raw yet controlled." },
      { img: "v3-4.jpg", text: "Craft before decoration." },
      { img: "v3-5.jpg", text: "Essence distilled." },
      { img: "v3-6.jpg", text: "Where identity begins." }
    ]
  }
];

let activeIndex = 0;

const grid = document.getElementById("volumeGrid");
const nav = document.getElementById("volumeNav");

function renderVolume(index) {
  grid.innerHTML = "";
  volumesData[index].works.forEach(work => {
    grid.innerHTML += `
      <div class="volume-item">
        <img src="${work.img}">
        <p>${work.text}</p>
      </div>
    `;
  });
}

function renderNav() {
  nav.innerHTML = "";
  volumesData.forEach((v, i) => {
    const item = document.createElement("div");
    item.className = "volume-nav-item" + (i === activeIndex ? " active" : "");
    item.innerHTML = `
      ${v.name}
      <div class="volume-anchor"></div>
    `;
    item.onclick = () => {
      activeIndex = i;
      update();
    };
    nav.appendChild(item);
  });
}

function update() {
  renderVolume(activeIndex);
  renderNav();

  // 滑动使当前项居中（简化版）
  const offset = (activeIndex - Math.floor(volumesData.length / 2)) * -160;
  nav.style.transform = `translateX(${offset}px)`;
}

// 初始化
update();

// 第三页 结束


