import Projects from "./Projects";

const data = [
    {
        linkedin: 'https://www.linkedin.com/posts/jeyaprakash-murugan17_reactjs-firebase-vercel-activity-7119951226514931712-082-?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/Jeyaprakashatgit/meetapp',
        liveServer: 'https://lnkd.in/g5T2g9Rq',
        title: 'Meeting Scheduler',
        description: 'Meeting Scheduler using React JS,powered by Firebase for seamless data storage and retrieval. Leveraged the power of `useState`, `useRef`, and `useNavigate` hooks for a smooth single-page experience. ',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        linkedin: 'https://www.linkedin.com/posts/jeyaprakash-murugan17_webdev-html-css-activity-7118817123761614849-ISu1?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/Jeyaprakashatgit/spotify-jp',
        liveServer: 'https://spotify-jp.vercel.app/',
        title: 'Spotify Clone',
        description: 'Spotify Clone To Show you all my development and designing skill',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHfyj4icFmfRg/feedshare-thumbnail_720_1280/0/1691246971994?e=1694624400&v=beta&t=zXzKZaNmImZlq24h3ONnDCDsbmi5sPhsimvcouanIjo'
    }
  ];

const Mywork = () =>{
    return(
        <div className="page">
          
            
            {/* <div className="mywork-container"> */}
            {data.map((value)=>{
            return <Projects linkedin={value.linkedin} gitrepo={value.gitRepo} liveServer={value.liveServer} description={value.description}  title={value.title}/>
            })}
            </div>
      
        
    )
}

export default Mywork;
