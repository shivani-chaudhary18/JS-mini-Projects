const users = [
  {
    fullName: "Elena Rostova",
    username: "elena_r",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    profession: "Software Engineer",
    tags: ["React", "Node.js", "System Design"],
    description: "Full-stack developer with a passion for building scalable web applications and mentoring junior developers."
  },
  {
    fullName: "Marcus Chen",
    username: "marcus_codes",
    image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    profession: "UX Designer",
    tags: ["Figma", "User Research", "Prototyping"],
    description: "Award-winning product designer focused on creating intuitive, accessible, and delightful user experiences."
  },
  {
    fullName: "Sofia Martinez",
    username: "sofia_writes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    profession: "Content Strategist",
    tags: ["SEO", "Copywriting", "Branding"],
    description: "Digital marketer and writer helping tech startups scale their organic reach and establish brand authority."
  },
  {
    fullName: "David Nkosi",
    username: "david_data",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
    profession: "Data Scientist",
    tags: ["Python", "Machine Learning", "SQL"],
    description: "AI researcher turning complex datasets into actionable business intelligence and predictive models."
  },
  {
    fullName: "Aanya Sharma",
    username: "aanya_ops",
    image: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D",
    profession: "DevOps Engineer",
    tags: ["AWS", "Docker", "Kubernetes"],
    description: "Cloud infrastructure enthusiast dedicated to optimizing CI/CD pipelines and ensuring maximum system uptime."
  }
];


let sum = " ";

users.forEach(function(user){
    sum = sum + `<div class="card">
            <img src=${user.image}>
            <h3>${user.fullName}</h3>
            <h2> ${user.username}</h2>
            <h4>${user.profession}</h4>
            <h5>${user.tags}</h5>
            <p>${user.description}</p>
        </div>`;
})

console.log(sum);
let main = document.querySelector("main");
main.innerHTML = sum;