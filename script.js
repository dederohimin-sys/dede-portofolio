// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // JALANKAN SKILL BAR JIKA SECTION SKILLS TERLIHAT
      if (entry.target.id === "skills") {
        animateSkills();
      }
    }
  });
}, { threshold: 0.3 });

reveals.forEach(el => observer.observe(el));

// =======================
// SKILL BAR ANIMATION
// =======================
function animateSkills() {
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    const bar = skill.querySelector(".bar div");
    const percentText = skill.querySelector(".percent");

    const target = parseInt(
      bar.getAttribute("data-skill").replace("width:", "")
    );

    bar.style.width = "0%";
    percentText.innerText = "0%";

    let count = 0;

    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        bar.style.width = count + "%";
        percentText.innerText = count + "%";
      }
    }, 15);
  });
}
const profileTitle = document.querySelector("#about h2");

const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      titleObserver.unobserve(entry.target); // sekali jalan
    }
  });
}, {
  threshold: 0.6
});

titleObserver.observe(profileTitle);

const roleText = document.querySelector(".hero p");
const text = roleText.innerText;
roleText.innerText = "";

let i = 0;
function typeEffect() {
  if (i < text.length) {
    roleText.innerText += text.charAt(i);
    i++;
    setTimeout(typeEffect, 45);
  }
}

window.addEventListener("load", typeEffect);
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  hero.style.transform = `translate(${x}px, ${y}px)`;
});

hero.addEventListener("mouseleave", () => {
  hero.style.transform = "translate(0,0)";
});


