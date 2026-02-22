const fotos = [
  "IMG00058.jpg",
  "IMG00059.jpg",
  "IMG00067.jpg",
  "IMG00068.jpg",
  "IMG00069.jpg",
  "IMG00070.jpg",
  "IMG00071.jpg",
  "IMG00072.jpg",
  "IMG00074.jpg",
  "IMG00075.jpg",
  "IMG00076.jpg",
  "IMG00077.jpg",
  "IMG00078.jpg",
  "IMG00079.jpg",
  "IMG00080.jpg",
  "IMG00081.jpg",
  "IMG00082.jpg",
  "IMG00083.jpg",
  "IMG00084.jpg",
  "IMG00085.jpg",
  "IMG00086.jpg",
  "IMG00087.jpg",
  "IMG00088.jpg",
  "IMG00089.jpg",
  "IMG00090.jpg",
  "IMG00091.jpg",
  "IMG00092.jpg",
  "IMG00093.jpg",
  "IMG00094.jpg",
  "IMG00095.jpg",
  "IMG00096.jpg",
  "IMG00097.jpg",
  "IMG00098.jpg",
  "IMG00099.jpg",
  "IMG00100.jpg",
  "IMG00101.jpg",
  "IMG00102.jpg",
  "IMG00103.jpg",
  "IMG00104.jpg",
  "IMG00105.jpg",
  "IMG00106.jpg",
  "IMG00107.jpg",
  "IMG00108.jpg",
  "IMG00109.jpg",
  "IMG00110.jpg",
  "IMG00111.jpg",
  "IMG00112.jpg",
  "IMG00113.jpg",
  "IMG00114.jpg",
  "IMG00115.jpg",
  "IMG00116.jpg",
  "IMG00117.jpg",
  "IMG00118.jpg",
  "IMG00119.jpg",
  "IMG00120.jpg",
  "IMG00121.jpg",
  "IMG00122.jpg",
  "IMG00123.jpg",
  "IMG00124.jpg",
  "IMG00125.jpg",
  "IMG00126.jpg",
  "IMG00127.jpg",
  "IMG00128.jpg",
  "IMG00129.jpg",
  "IMG00130.jpg",
  "IMG00131.jpg",
  "IMG00132.jpg",
  "IMG00133.jpg",
  "IMG00134.jpg",
  "IMG00135.jpg",
  "IMG00136.jpg",
  "IMG00137.jpg",
  "IMG00138.jpg",
  "IMG00139.jpg",
  "IMG00140.jpg",
  "IMG00141.jpg",
  "IMG00142.jpg",
  "IMG00143.jpg",
  "IMG00144.jpg",
  "IMG00145.jpg",
  "IMG00146.jpg",
  "IMG00147.jpg",
  "IMG00148.jpg",
  "IMG00149.jpg",
  "IMG00150.jpg",
  "IMG00151.jpg",
  "IMG00152.jpg",
  "IMG00156.jpg",
  "IMG00160.jpg",
  "IMG00161.jpg",
  "IMG00162.jpg",
  "IMG00163.jpg",
  "IMG00164.jpg",
  "IMG00165.jpg",
  "IMG00166.jpg",
  "IMG00167.jpg",
  "IMG00168.jpg",
  "IMG00169.jpg",
  "IMG00170.jpg",
  "IMG00171.jpg",
  "IMG00172.jpg",
  "IMG00173.jpg",
  "IMG00174.jpg",
  "IMG00175.jpg",
  "IMG00176.jpg",
  "IMG00177.jpg",
  "IMG00178.jpg",
  "IMG00179.jpg",
  "IMG00180.jpg",
  "IMG00181.jpg",
  "IMG00182.jpg",
  "IMG00183.jpg",
  "IMG00184.jpg",
  "IMG00185.jpg",
  "IMG00186.jpg",
  "IMG00187.jpg",
  "IMG00188.jpg",
  "IMG00189.jpg",
  "IMG00190.jpg",
  "IMG00191.jpg",
  "IMG00192.jpg",
  "IMG00193.jpg",
  "IMG00194.jpg",
  "IMG00195.jpg",
  "IMG00196.jpg",
  "IMG00197.jpg",
  "IMG00198.jpg",
  "IMG00199.jpg",
  "IMG00200.jpg",
  "IMG00201.jpg",
  "IMG00202.jpg",
  "IMG00203.jpg",
  "IMG00204.jpg",
  "IMG00205.jpg",
  "IMG00206.jpg",
  "IMG00207.jpg",
  "IMG00208.jpg",
  "IMG00209.jpg",
  "IMG00210.jpg",
  "IMG00211.jpg",
  "IMG00212.jpg",
  "IMG00213.jpg",
  "IMG00214.jpg",
  "IMG00215.jpg",
  "IMG00216.jpg",
  "IMG00217.jpg",
  "IMG00218.jpg",
  "IMG00219.jpg",
  "IMG00220.jpg",
  "IMG00221.jpg",
  "IMG00222.jpg",
  "IMG00223.jpg",
  "IMG00224.jpg",
  "IMG00225.jpg",
  "IMG00226.jpg",
  "IMG00227.jpg",
  "IMG00228.jpg",
  "IMG00229.jpg",
  "IMG00230.jpg",
  "IMG00231.jpg",
  "IMG00232.jpg",
  "IMG00233.jpg",
  "IMG00234.jpg",
  "IMG00235.jpg",
  "IMG00236.jpg",
  "IMG00237.jpg",
  "IMG00238.jpg",
  "IMG00239.jpg",
  "IMG00240.jpg",
  "IMG00241.jpg",
  "IMG00242.jpg",
  "IMG00243.jpg",
  "IMG00244.jpg",
  "IMG00245.jpg",
  "IMG00246.jpg",
  "IMG00247.jpg",
  "IMG00248.jpg",
  "IMG00249.jpg",
  "IMG00250.jpg",
  "IMG00251.jpg",
  "IMG00252.jpg",
  "IMG00253.jpg",
  "IMG00254.jpg",
  "IMG00255.jpg",
  "IMG00256.jpg",
  "IMG00257.jpg",
  "IMG00258.jpg",
  "IMG00259.jpg",
  "IMG00260.jpg",
  "IMG00261.jpg",
  "IMG00262.jpg",
  "IMG00263.jpg",
  "IMG00264.jpg",
  "IMG00265.jpg",
  "IMG00266.jpg",
  "IMG00267.jpg",
  "IMG00268.jpg",
  "IMG00269.jpg",
  "IMG00270.jpg",
  "IMG00271.jpg"
];

const gallery = document.querySelector(".gallery");

fotos.forEach((nome, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    item.innerHTML = `
    <div class="window">
      <img src="fotos/${nome}" alt="${nome}">
    </div>
    <span>${nome.replace(".jpg", "")}</span>
  `;

    gallery.appendChild(item);
});

const viewer = document.getElementById("photo-viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-btn");

// abre quando clicar na imagem
document.querySelectorAll(".window img").forEach(img => {
  img.addEventListener("click", () => {
    viewerImg.src = img.src;
    viewer.classList.remove("hidden");
  });
});

// fechar no X
closeBtn.addEventListener("click", () => {
  viewer.classList.add("hidden");
});

// fechar clicando fora da imagem
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.classList.add("hidden");
  }
});

const items = document.querySelectorAll(".gallery-item");

let observer = new IntersectionObserver((entries, self) => {
  const visibleItems = [];

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      self.unobserve(entry.target);
      visibleItems.push(entry.target);
    }
  });

  // anima todos juntos com stagger
  if (visibleItems.length > 0) {
    gsap.to(visibleItems, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2 // 👈 aqui funciona de verdade
    });
  }

}, { threshold: 0.1 });

items.forEach(item => {
  gsap.set(item, { y: 40, opacity: 0 });
  observer.observe(item);
});

gsap.from("h1", {
  y: -40,
  opacity: 0,
  duration: 1,
  ease: "power3.in"
});

gsap.from("p", {
  opacity: 0,
  y: 20,
  delay: 0.5
});
