import Profile from './Component/Profile'

function App() {
  const profiles = [
    {
      name: "Bharath D",
      place: "Kanchipuram",
      role: "Intern",
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
      status: true,
      skills: ["UI/UX-Designer", "Web Developer","python"]
    },
    {
      name: "Naveen M",
      place: "Kanchipuram",
      role: "Software Engineer",
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
      status: false,
      skills: [ "React", "Node.js"]
    },
    {
      name: "Rakesh Kumar",
      place: "Chennai",
      role: "Mobile Application Development",
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
      status: false,
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      name: "Bindhu",
      place: "Chennai",
      role: "Data Scientist",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
      status: true,
      skills: ["Python", "Machine Learning", "Data Analysis"]
    }, 
    {
      name: "Hariharan",
      place: "Kanchipuram",
      role: "Web Developer",
      image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
      status: false,
      skills: ["Machine Learning", "React","UI/UX"]
    }
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <Profile 
          key={index}
          name={profile.name} 
          place={profile.place} 
          role={profile.role} 
          image={profile.image} 
          status={profile.status}
          skills={profile.skills} 
        />
      ))}
    </>
  );
}

export default App;